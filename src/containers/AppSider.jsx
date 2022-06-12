import React, { useEffect } from 'react'
import {
    RedditOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';

import * as Icons from '@ant-design/icons';

import { Menu, Layout } from 'antd';
import { useNavigate } from 'react-router-dom';

const { Sider } = Layout;

export default function AppSider(props) {

    let { menuToggle, menu } = props

    const navigate = useNavigate()

    const [menus, setMenus] = React.useState([])
    
    const menuClick = (item, key, keyPath, domEvent) => {
        navigate(item.key, {
            replace: false
        })
    }
    
    React.useEffect(() => { 
        // 在此可以执行任何带副作用操作
        
        const newMenus = []
        menu.map((item) => {
            let nitem = {
                ...item,
                label: item.title,
                icon: React.createElement(Icons[item.icon])
            }
            newMenus.push(nitem)
        })
        setMenus(newMenus)
    
        return () => { // 在组件卸载前执行
          // 在此做一些收尾工作, 比如清除定时器/取消订阅等
        }
      }, [menu]) // 如果指定的是[], 回调函数只会在第一次render()后执行

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
                defaultSelectedKeys={['1']}
                onClick={menuClick}
                items={menus}
            />
        </Sider>
    )
}
