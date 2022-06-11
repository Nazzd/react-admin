import React, { Fragment, useState } from 'react'
import { Layout } from 'antd';

import {
    MenuFoldOutlined,
    MenuUnfoldOutlined
} from '@ant-design/icons';

const { Header } = Layout;

export default function AppHeader(props) {

    let { menuClick, menuToggle } = props

    return (
        <Fragment>
            <Header className="header">
                <div id="left">
                    {menuToggle ? <MenuFoldOutlined onClick={menuClick} /> : <MenuUnfoldOutlined onClick={menuClick} />}
                </div>
            </Header>
        </Fragment>
    )
}
