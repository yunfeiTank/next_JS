import React, { Component } from 'react'
import ActiveLink from './ActiveLink'
import router from 'next/router';

export default class extends Component {
    componentDidMount() {
        /* 路由拦截器 */
        router.beforePopState(({ url, as, options }) => {
            console.log(url)
            console.log(as)
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

            <div>
                <ActiveLink href='/'>首页</ActiveLink>
                <ActiveLink href='/list'>列表</ActiveLink>
                <ActiveLink href='/about'>关于</ActiveLink>
            </div>
        )
    }
} 