import cowsay, { think } from 'cowsay-browser'
console.log(cowsay)
export default () =>
    <pre>
        {cowsay.say({ caller: 'moose', text: 'hi there! 哈哈' })}
        {think({
            text: 'grazing in the browser',
            cow:'kaola',
            eyes: 'pp',
            tongue: ';;',
        })}
    </pre>