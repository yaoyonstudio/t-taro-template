import Taro, { Component } from '@tarojs/taro'
import { View, Text, Button, Image } from '@tarojs/components'
import { connect } from '@tarojs/redux'

import { getCommonDataAction } from '../../actions/common'
import { loginAction, logoutAction } from '../../actions/user'

import './index.scss'

import LogoImg from '../../public/img/logo.png'

@connect(
  ({ common, user }) => ({
    common,
    user,
  }),
  dispatch => ({
    onGetCommonDataAction() {
      dispatch(getCommonDataAction())
    },
    onLoginAction(params) {
      dispatch(loginAction(params))
    },
    onLogoutAction() {
      dispatch(logoutAction())
    },
  })
)
class Index extends Component {
  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount() {}

  componentDidShow() {
    this.props.onGetCommonDataAction()
  }

  componentDidHide() {}

  config = {
    navigationBarTitleText: '首页',
  }

  handleLogin() {
    const loginParams = {
      username: 'admin',
      password: 'admin123456',
    }
    this.props.onLoginAction(loginParams)
  }

  static options = {
    addGlobalClass: true,
  }

  render() {
    const { common, user, onLogoutAction } = this.props
    return (
      <View className="index">
        <View>
          <Image className="logo" src={LogoImg} />
        </View>
        <View>
          <Text className="block">{common.title}</Text>
          <Text className="block">{common.description}</Text>
        </View>
        <View>
          {user.isLogin && <Text>您好！{user.user.username}</Text>}
          {!user.isLogin && <Text>您未登录，请登录！</Text>}
        </View>
        <View>
          {!user.isLogin && (
            <Button type="primary" onClick={this.handleLogin.bind(this)}>
              登录
            </Button>
          )}
          {user.isLogin && (
            <Button type="default" onClick={onLogoutAction.bind(this)}>
              注销
            </Button>
          )}
        </View>
      </View>
    )
  }
}

export default Index
