import React from 'react';

const bubbleSort = async (arr, speed) =>{
    for(let i = 0; i < arr.length; i++){
        let swapped = false;
        for(let j = 1; j < arr.length; j++){
            document.getElementById(`${j}`).style.background='red';
            document.getElementById(`${j-1}`).style.background='red';
            await new Promise(resolve => setTimeout(resolve, 1000/speed));
            document.getElementById(`${j}`).style.background='#7fbef5';
            document.getElementById(`${j-1}`).style.background='#7fbef5';
            
            if(arr[j] < arr[j-1]){
                swap(arr, j, j-1);
                swapped = true;
            }
        }
        if(!swapped){
            break;
        }
    }
}
const swap = (arr, index1, index2) => {
    const temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
    // swap element heights
    const tempEl = document.getElementById(`${index1}`).style.height;
    document.getElementById(`${index1}`).style.height = document.getElementById(`${index2}`).style.height;
    document.getElementById(`${index2}`).style.height = tempEl;
}

const Bars = ({arr, algorithm, speed, beginSort}) => {
    if(beginSort){
        // document.getElementById('btn').disabled = true;
        if(algorithm === 'Bubble Sort'){
            bubbleSort(arr, speed);
        }
    }
    return (
        <section className="bars">
            {arr.map((height, index)=>{
                return (
                <div key={index} className='outer-bar'>
                    <div id={index} className='inner-bar' style={{height:`${height}vh`, background: `#7fbef5`, width: '100%'}} >
                    </div>
                </div>
                )
            })}
        </section>
    );
}

export default Bars