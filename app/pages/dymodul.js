import dynamic from 'next/dynamic';

const Dymodul = dynamic({
    modules:()=>{
        const components = {
            Hello1:import('../components/Hello1'),
            Hello2:import('../components/Hello2'),
        }
        return components;
    },
    render:(props,{Hello1,Hello2}) => 
        <div>
            <h1>{props.title}</h1>
            <Hello1/>
            <Hello2/>
        </div>
});
export default ()=> < Dymodul title='Dynamic Bundle' />