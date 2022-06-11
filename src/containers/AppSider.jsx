import React from 'react'
import {
    RedditOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';

import { Menu, Layout } from 'antd';
import { useNavigate } from 'react-router-dom';

const { Sider } = Layout;

export default function AppSider(props) {

    let { menuToggle, menu } = props

    const navigate = useNavigate()


    const menuClick = (item, key, keyPath, domEvent) => {
        navigate(item.key, {
            replace: false
        })
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
                defaultSelectedKeys={['1']}
                onClick={menuClick}
                items={menu}
            />
        </Sider>
    )
}
