/**
 * @description: 头部
 * @author:yunfei
 * @time: 2020/6/24
 */
import React, { Component } from 'react'
import ActiveLink from './ActiveLink'
import router from 'next/router';
import { Affix } from 'antd';
export default class extends Component {
    componentDidMount() {
        /* 路由拦截器 */
        router.beforePopState(({ url, as, options }) => {
            console.log(url)
            console.log(options)
            if (as !== '/' || as !== '/other') {
                window.location.href = as
                return false
            }
            return true
        })
    }
    render() {
        return (
            <Affix offsetTop={0} style={{padding:"0 20px", width: '100%', height: '28px', lineHeight: '28px', fontSize: '12px', color: "#d5d5d5", background: '#545652' }}>
                <ActiveLink href='/'>首页</ActiveLink>
                <ActiveLink href='/list'>列表</ActiveLink>
                <ActiveLink href='/about'>关于</ActiveLink>
            </Affix>
        )
    }
} 