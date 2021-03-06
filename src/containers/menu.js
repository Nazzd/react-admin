

const menu = [
    {
        key: '/index',
        title: '首页',//同title
        icon: 'HomeOutlined',
        auth: [1]
    },
    {
        title: '通用',
        key: '/public',
        icon: 'AppstoreOutlined',
        auth: [1],
        children: [
            { title: '按钮', key: '/public/button', icon: 'AppstoreOutlined' },
            { title: '图标', key: '/public/icon', icon: 'AppstoreOutlined' }]
    },
    {
        title: '导航',
        key: '/nav',
        icon: 'BulbOutlined',
        children: [
            { title: '下拉菜单', key: '/nav/dropdown', icon: '' },
            { title: '导航菜单', key: '/nav/menu', icon: '' },
            { title: '步骤条', key: '/nav/steps', icon: '' }
        ]
    },
    {
        title: '表单',
        key: '/form',
        icon: 'FormOutlined',
        children: [
            { title: '基础表单', key: '/form/base-form', icon: '' },
            { title: '步骤表单', key: '/form/step-form', icon: '' }
        ]
    },
    {
        title: '展示',
        key: '/show',
        icon: 'LineChartOutlined',
        children: [
            { title: '表格', key: '/show/table', icon: '' },
            { title: '折叠面板', key: '/show/collapse', icon: '' },
            { title: '树形控件', key: '/show/tree', icon: '' },
            { title: '标签页', key: '/show/tabs', icon: '' }
        ]
    },
    {
        title: '其它',
        key: '/others',
        icon: 'PaperClipOutlined',
        auth: [1],
        children: [
            { title: '进度条', key: '/others/progress', icon: '' },
            { title: '动画', key: '/others/animation', icon: '' },
            { title: '上传', key: '/others/upload', icon: '' },
            { title: '富文本', key: '/others/editor', icon: '' },
            { title: '404', key: '/404', icon: '' },
            { title: '500', key: '/500', icon: '' }
        ]
    },
    {
        title: '多级导航',
        key: '/one',
        icon: 'BarsOutlined',
        children: [
            {
                title: '二级',
                key: '/one/two',
                icon: '',
                children: [{ title: '三级', key: '/one/two/three', icon: '' }]
            }
        ]
    },
    {
        title: '系统设置',
        key: '/system',
        icon: 'SettingOutlined',
        children: [
            { title: '角色', key: '/system/role', icon: '' },
            { title: '资源', key: '/system/source', icon: '' },
            { title: '用户', key: '/system/user', icon: '' },
        ]
    },
    {
        title: '关于',
        key: '/about',
        icon: 'UserOutlined',
        auth: [1]
    }
]

export default menu