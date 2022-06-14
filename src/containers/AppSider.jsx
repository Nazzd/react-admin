import React from 'react'
import {
    RedditOutlined,
} from '@ant-design/icons';

import * as Icons from '@ant-design/icons';

import { Menu, Layout } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';

const { Sider } = Layout;

export default function AppSider(props) {

    let { menuToggle, menu } = props

    const navigate = useNavigate()

    const location = useLocation()

    const [menus, setMenus] = React.useState([])

    const menuClick = (item, key, keyPath, domEvent) => {
        navigate(item.key, {
            replace: false
        })
    }

    console.log(location);


    // 递归获取menu信息
    const getMenu = (data) => {
        const getNestedMenu = (data, menuList = []) => {
            data.forEach(item => {
                let curMenu = {
                    ...item,
                    label: item.title,
                    icon: item.icon === '' ? '' : React.createElement(Icons[item.icon])
                }
                if (item.children && item.children.length) {
                    curMenu.children = getNestedMenu(item.children)
                }
                menuList.push(curMenu)
            })
            return menuList;
        }
        return getNestedMenu(data);
    }

    React.useEffect(() => {
        // 在此可以执行任何带副作用操作
        const antd_menu = getMenu(menu)

        setMenus(antd_menu)

        return () => { // 在组件卸载前执行
            // 在此做一些收尾工作, 比如清除定时器/取消订阅等
        }
    }, [menu]) // 如果指定的是[], 回调函数只会在第一次render()后执行

    const onOpenChange = (openKeys) => {
        console.log(openKeys);

    }

    return (
        <Sider className='aside' collapsed={menuToggle}  >
            <div className='logo'>
                <a rel='noopener noreferrer' href='https://github.com/ltadpoles' target='_blank'>
                    <RedditOutlined style={{ fontSize: '3.8rem', color: '#fff' }} />
                </a>
            </div>
            <Menu
                theme="dark"
                mode="inline"
                defaultSelectedKeys={['/index']}
                selectedKeys = {[location.pathname]}
                onClick={menuClick}
                items={menus}
                onOpenChange={onOpenChange}
            />
        </Sider>
    )
}
