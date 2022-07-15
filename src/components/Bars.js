import React from 'react'


const bubbleSort = (arr, algorithm, speed) =>{


    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length; j++){
            if(arr[j] > arr[j+1]){
                swap(arr, j, j+1)
                // setHeight();
                // setColor();
            }
        }
    }
    console.log('arr', arr);
    // return arr;
}
const swap = (arr, index1, index2) => {
    const temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}

const Bars = ({arrSize, algorithm, speed, beginSort}) => {
    // generate an arr of random numbers between 1 and 69 (1 and 69 included)
    const arr = Array(arrSize).fill(5).map(() => Math.round(Math.random() * (65 - 1 + 1) + 1));

    // console.log('d ', arr, algorithm, speed);
    // const colorsArr = new Array();
    if(beginSort){
        if(algorithm === 'Bubble Sort'){
            bubbleSort(arr, algorithm, speed);
        }
    }

    const color = '#7fbef5';
    return (
        <section className="bars">
            {arr.map((height, index)=>{
                return (
                <div key={index} className='outer-bar'>
                    <div className='inner-bar' style={{height:`${height}vh`, background: `${color}`, width: '100%'}} >
                    </div>
                </div>
                )
            })}
        </section>
    );
}

export default Bars