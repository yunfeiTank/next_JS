import { withRouter } from 'next/router';

const ActiveLink = ({ children, router, href }) => {
    const style = {
        marginRight: 10,
        color: router.pathname === href ? '#FFFFFF' : '#d5d5d5'
    }
    const handleClick = (e) => {
        e.preventDefault();
        router.push(href)
    }
    return (
        <a href={href} onClick={handleClick} style={style}>
            {children}
        </a>
    )
}
export default withRouter(ActiveLink)