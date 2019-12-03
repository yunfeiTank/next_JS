/**
 * description: 导航头部
 * author：yunfei
 *
 */

/* 2.0 */
import ActiveLink from './ActiveLink';

export default () => (
    <div>
        <ActiveLink href='/'>首页</ActiveLink>
        <ActiveLink href='/about'>About</ActiveLink>
        <ActiveLink href='/list'>列表</ActiveLink>
        <ActiveLink href='/test'>测试</ActiveLink>
        <ActiveLink href='/a'>前往a</ActiveLink>
        <ActiveLink href='/dymodul'>同时加载多个模块</ActiveLink>
        
    </div>
)
/* 1.0 */
// import Router from 'next/router';
// const handleRouteChange = url => {
//     console.log('App is changing to: ', url)
// }

// Router.events.on('routeChangeStart', handleRouteChange)
// export default () => (
//     <div>
//         <Link href='/'>首页</Link>
//         <Link href='/about'>关于</Link>
//         <Link href='/list'>列表</Link>
//         <Link href='/test'>测试</Link>
//     </div>
// )

// function onClickHandler(href) {
//     return (e) => {
//         e.preventDefault();
//         Router.push(href);
//     }
// }

// const Link = ({ children, href }) => (
//     <a href='#' onClick={onClickHandler(href)}>
//         {children}
//         <style jsx>
//             {
//                 `
//                 a{
//                     margin-right:10px;
//                 }
//                 `
//             }
//         </style>
//     </a>
// )