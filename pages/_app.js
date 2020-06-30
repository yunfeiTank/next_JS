/**
 * @description: app
 * @author:yunfei
 * @time:2020/6/23
 */
import React from 'react'
import App from 'next/app'
import 'antd/dist/antd.css'
class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return <Component {...pageProps} />
  }
}

export default MyApp