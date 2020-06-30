import Head from 'next/head'
import Header from '../components/Header';
import { Button } from 'antd';
export default () =>
    <div style={{flex:1}}>
        <Head>关于界面</Head>
        <meta name="viewport" content="initial-scale" width="device-width"></meta>
        <Header />
        <h3>
            关于界面
        </h3>
        <Button type="primary">你好</Button>
    </div>