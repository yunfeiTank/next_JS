import cowsay, { think } from 'cowsay-browser'
import Head from 'next/head';
import dynamic from 'next/dynamic';
const DynamicComponent = dynamic(
    import('../components/Hello1.js'),
    {
        loading: () => <p>...</p>,
        ssr: false
    });
const List = (props) => {
    return (<div>
        <Head>
            <title>首页</title>
            <meta name='viewport' content='initial-scale=1.0, width=device-width'></meta>
        </Head>
        <DynamicComponent />
        <pre>
            {cowsay.say({ caller: 'moose', text: 'hi there! 哈哈' })}
            {think({
                text: 'grazing in the browser',
                cow: 'kaola',
                eyes: 'pp',
                tongue: ';;',
            })}
        </pre>
        <button onClick={() => {
            Router.push(
                '/list?a=12',
                '/list?a=12',
                { shallow: true }
            )
        }}>点击</button>
    </div>)
}
List.getInitialProps = async (props) => {
    console.log('刷新')
    return { txt: '列表' };
}
export default List;