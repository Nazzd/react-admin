import { Layout, Row, Col, Divider, Table } from 'antd'
import React, { useState } from 'react'
import CustomBreadcrumb from '../../../components/CustomBreadcrumb/CustomBreadcrumb'
import { Button, Form, Input, Modal } from 'antd';
import instance from '../../../api';

export default function User() {

    const onFinish = (values) => {
        setSearchParams((prev) => ({ ...prev, ...values }))
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    //设置数据源
    const [dataSource, setDataSource] = useState([]);

    //设置搜索条件
    const [searchParams, setSearchParams] = useState({
        name: ""
    });

    // 设置分页参数
    const [pagination, setPagination] = useState({
        current: 1,
        pageSize: 10,
    });

    const [loading, setLoading] = useState(false);
    React.useEffect(() => {
        getUsers(); // 获取数据的函数
    }, [searchParams]);


    function getUsers(pageSize = pagination.pageSize, pageNum = pagination.current) {
        setLoading(true)
        instance.get("/api/complex/system/user/page", {
            params: {
                pageSize: pageSize,
                pageNum: pageNum,
                userName: searchParams.name
            }
        }).then(res => {
            console.log(res);
            setLoading(false)
            setDataSource(res.data.data.records)
            setPagination({ current: pageNum, pageSize: pageSize, total: res.data.data.total })
        })

    }

    const handleTableChange = (newPagination, filters, sorter) => {
        getUsers(newPagination.pageSize, newPagination.current);
    };

    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: '姓名',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: '描述',
            dataIndex: 'description',
            key: 'description',
        },
        {
            title: '是否启用',
            dataIndex: 'isEnable',
            key: 'isEnable',
            render: (text, record, index) => { return text ? "是" : "否" }
        },
        {
            title: '创建时间',
            dataIndex: 'createTime',
            key: 'createTime',
        },
        {
            title: '修改时间',
            dataIndex: 'updateTime',
            key: 'updateTime',
        },
        {
            title: "操作",
            render: (text, record, index) => { return ButtonGroup(record) }
        }
    ];

    // 设置分页参数
    const [userUpdateParams, setUserUpdateParams] = useState({
        id: 0,
        name: "11",
        description: "",
        isEnable: false
    });

    const [form] = Form.useForm()
    const updateUser = (record) => {
        setUserUpdateParams({
            id: record.id,
            name: record.name,
            description: record.description,
            isEnable: record.isEnable
        })
        console.log(userUpdateParams)
        form.setFieldsValue({
            id: record.id,
            name: record.name,
            description: record.description,
            isEnable: record.isEnable
        })
        showModal()
    }


React.useEffect(() => {
    if (!isModalVisible && userUpdateParams.name != '') {

    }
}, [userUpdateParams]);

const [isModalVisible, setIsModalVisible] = useState(false);

const showModal = () => {
    setIsModalVisible(true);
};

const handleOk = () => {
    setIsModalVisible(false);
};

const handleCancel = () => {
    setIsModalVisible(false);
};

const ButtonGroup = (record) => {

    return (
        <div>
            <Button style={{ marginRight: '5px' }} onClick={() => updateUser(record)}>编辑</Button>
            <Button danger>删除</Button>
        </div>
    )

}

return (
    <Layout>
        <div>

            <CustomBreadcrumb arr={[{ title: "系统设置", link: "" }, { title: "用户", link: "/system/user" }]} />

        </div>
        <div className='base-style'>
            <Form
                name="basic"

                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Row>
                    <Col span={8}>
                        <Form.Item
                            label="姓名"
                            name="name"
                            labelCol={{
                                span: 4,
                            }}
                            wrapperCol={{
                                span: 16,
                            }}
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                </Row>
                <Form.Item
                    wrapperCol={{
                        offset: 20,
                        span: 4,
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        提交
                    </Button>
                </Form.Item>
            </Form>
            <Divider />

            <Table dataSource={dataSource} columns={columns} rowKey={record => record.id} loading={loading} pagination={pagination} onChange={handleTableChange} />

            <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <Form form={form}
                    name="updateBasic"
                    labelCol={{ span: 6 }}
                    wrapperCol={{ span: 18 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="姓名"
                        name="name"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="描述"
                        name="description"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input />
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    </Layout>
)
}
