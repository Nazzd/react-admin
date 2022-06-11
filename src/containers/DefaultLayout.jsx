import React from 'react'

import AppSider from './AppSider';
import AppHeader from './AppHeader';
import AppFooter from './AppFooter';
import { Layout, BackTop } from 'antd';
import '../style/layout.css'
import { connect } from 'react-redux';
import { menuToggleAction } from '../store/menuToggle_action'
import { Outlet } from 'react-router-dom';
import menus from './menu';
const { Content } = Layout;

function DefaultLayout(props) {

  const [menu,setMenu] = React.useState([])

  


  React.useEffect(() => { 
    // 在此可以执行任何带副作用操作
    
    //将menus塞入当前组件state
    setMenu(menus)

    return () => { // 在组件卸载前执行
      // 在此做一些收尾工作, 比如清除定时器/取消订阅等
    }
  }, []) // 如果指定的是[], 回调函数只会在第一次render()后执行




  // 获取redux中的数据,以及操作数据的方法
  let { menuClick, menuToggle } = props

  return (
    <Layout className='app'>
      {/* 回到顶部 */}
      <BackTop />
      {/* 左边导航栏，导航数据从父组件传入子组件 */}
      <AppSider
        menuToggle={menuToggle}
        menu = {menu}

      />

      <Layout style={{ marginLeft: menuToggle ? '80px' : '200px', minHeight: '100vh' }}>
        {/* 内容区顶部 */}
        <AppHeader
          menuToggle={menuToggle}
          menuClick={menuClick} />
        <Content>
          {/* 需要动态添加路由数据 */}
          <Outlet />
        </Content>
        <AppFooter />
      </Layout>

    </Layout>
  );

}

// 函数返回的对象中的key作为传递给UI组件props的key,value作为传递给UI组件props的value----状态值
function mapStateToProps(state) {
  return {
    menuToggle: state.menuToggle
  }
}
// 函数返回的对象中的key作为传递给UI组件props的key,value作为传递给UI组件props的value----操作方法
const mapDispatchToProps = dispatch => ({
  menuClick: () => dispatch(menuToggleAction())

})

// export default connect(mapStateToProps, mapDispatchToProps)(DefaultLayout);

// 精简写法
export default connect(
  state => ({ menuToggle: state.menuToggle }), {
  menuClick: menuToggleAction
})(DefaultLayout);


