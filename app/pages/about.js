import Head from 'next/head';
import Link from 'next/link';
const About = (props) => {
    return (
        <div>
            <Head>
                <title>关于界面</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width"></meta>
            </Head>
            <p>hello world!</p>
            <p>ptops值：{props.tit}</p>
            <Link href="/about">
                <a>
                    <img onClick={() => alert('该点击事件不影响路由跳转！！O(∩_∩)O')} style={{ width: '200px' }} src="/static/img/timg.jpg" alt="image" />
                </a>
            </Link>
        </div>
    )
}
About.getInitialProps = async ({ req }) => {
    console.log('初始化模块时，在服务端执行一次；之后在路由载入时，在客户端执行')
    return { tit: '关于界面' };
}
export default About;