import { Layout, Divider } from 'antd'
import React from 'react'
import CustomBreadcrumb from '../../components/CustomBreadcrumb/CustomBreadcrumb'

export default function About() {

    return (
        <Layout>
            <div>

                <CustomBreadcrumb arr={[{ title: "关于", link: "/about" }]} />

            </div>
            <div className='base-style'>
                <h3>关于作者</h3>
                <Divider />
                <p>这个人很懒，什么都没有留下……</p>
            </div>
        </Layout>

    )
}
