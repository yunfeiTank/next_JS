/**
 * @descruption 请求工具
 * @author yunfei
 * @time 2020/6/24
 */
import fetch from 'isomorphic-unfetch';
import qs from 'qs';

const getData = (url, params = {}) => {
    return fetch(url + qs.stringify(params), {
        credentials: 'same-origin'
    }).then(res => res.json())
}
const postData = (url, params = {}) => {
    return fetch(url, {
        method: 'post',
        data: JSON.stringify(params),
        credentials: 'same-origin'
    }).then(res => res.json())
}
export { getData, postData }