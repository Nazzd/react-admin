import React, { Fragment } from 'react'
import { Breadcrumb } from 'antd'
import { Link } from 'react-router-dom'

export default function CustomBreadcrumb(props) {


    const getBreadcrumbItem = () => {
        return props.arr.map((res) => {
            return (
                <Breadcrumb.Item key={res.title}>
                    <Link to={res.link}>{res.title}</Link>
                </Breadcrumb.Item>
            )
        })
    }


    return (
        <Fragment>
            <Breadcrumb style={{ marginBottom: 16 }}>
                <Breadcrumb.Item key="首页">
                    <Link to='/index'>首页</Link>
                </Breadcrumb.Item>
                {getBreadcrumbItem()}

            </Breadcrumb>
        </Fragment>
    )
}
