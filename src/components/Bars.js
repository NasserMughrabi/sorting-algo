import React from 'react'
import Bar from './Bar'

const Bars = ({arr}) => {
    return (
        <section className="bars">
            {arr.map((item, index)=>{
                return (
                <Bar key={index} item={item}/>
                )
            })}
        </section>
    );
}

export default Bars