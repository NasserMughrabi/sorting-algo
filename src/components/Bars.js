import React from 'react';

const quickSort = async (arr, low, high, speed) => {
    if (low < high) {
        let pivot = arr[high];
        let i = (low - 1);

        for (let j = low; j <= high - 1; j++) {
            document.getElementById(`${high}`).style.background='yellow';
            document.getElementById(`${j}`).style.background='red';
            await new Promise(resolve => setTimeout(resolve, 1000/speed));
            document.getElementById(`${high}`).style.background='#7fbef5';
            document.getElementById(`${j}`).style.background='#7fbef5';
            if (arr[j] < pivot) {
                i++;
                swap(arr, i, j);
            }
        }
        swap(arr, i + 1, high);
        let pi = (i + 1);

        quickSort(arr, low, pi - 1, speed);
        quickSort(arr, pi + 1, high, speed);
    }
}

const mergeSort = async (arr) => {
    let midIndex = Math.round(arr.length / 2);

    // recursion base case
    if(arr.length === 1){
        return;
    }

    // Divide
    let leftArr = [];
    let rightArr = [];
    for (let i = 0; i < midIndex; i++) {
        leftArr.push(arr[i]);
    }
    for (let j = midIndex; j < arr.length; j++) {
        rightArr.push(arr[j]);
    }
    // Conquer
    mergeSort(leftArr);
    mergeSort(rightArr);


    // Merge arrays
    let i = 0, j = 0, k = 0
    while (leftArr.length > i && rightArr.length > j) {
        // color current indexes
        // document.getElementById(`${i}`).style.background='red';
        console.log(j);
        document.getElementById(`${j}`).style.background='green';
        // document.getElementById(`${rightIndex}`).style.background='red';
        await new Promise(resolve => setTimeout(resolve, 1000));
        // document.getElementById(`${i}`).style.background='#7fbef5';
        document.getElementById(`${j}`).style.background='#7fbef5';
        if (rightArr[j] < leftArr[i]) {
            arr[k] = rightArr[j];
            mergeSwap(arr, k, rightArr[j]);
            j++;
        } else {
            arr[k] = leftArr[i];
            mergeSwap(arr, k, leftArr[i]);
            i++;
        }
        k++;
    }

    while (leftArr.length > i) {
        arr[k] = leftArr[i];
        mergeSwap(arr, k, leftArr[i]);
        i++;
        k++;
    }

    while (rightArr.length > j) {
        arr[k] = rightArr[j];
        mergeSwap(arr, k, rightArr[j]);
        j++;
        k++;
    }
    enableBtns();
}

// sliding window pattern
const mergeSwap = (arr, k, item) => {

    arr[k] = item;
    document.getElementById(`${k}`).style.height = `${item}vh`;
    // const temp = arr[rightIndex];
    // for (let i=rightIndex; i > leftIndex; i--) {
    //     arr[i] = arr[i-1];
    // // document.getElementById(`${index}`).style.height = `${item}vh`;
    // }
    // arr[leftIndex] = temp;
    // document.getElementById(`${index}`).style.height = `${item}vh`;
}

const selectionSort = async (arr, speed) => {
    let min;
    // idx is position to fill up with next smallest value
    for (let idx = 0; idx < arr.length - 1; idx++) {
        min = idx;        
        // Look for next smallest value in rest of array
        for (let scan = idx + 1; scan < arr.length; scan++) {
            document.getElementById(`${scan}`).style.background='red';
            document.getElementById(`${min}`).style.background='yellow';
            await new Promise(resolve => setTimeout(resolve, 1000/speed));
            document.getElementById(`${scan}`).style.background='#7fbef5';
            document.getElementById(`${min}`).style.background='#7fbef5';
            document.getElementById(`${idx}`).style.background='blue'; // to be replaced
            if (arr[scan] < arr[min]) {
                min = scan;
            }
        }
        swap(arr, idx, min);
        // animating sorted arr's sorted elements background gradient
        animate(idx);
        await new Promise(resolve => setTimeout(resolve, 1000/speed));
        document.getElementById(`${idx}`).style.background='#7fbef5';
    }
    animate(arr.length-1);
    enableBtns();
}

const insertionSort = async (arr, speed) => {
    // first index already sorted, animate it before anything
    animate(0);
    for (let i = 1; i < arr.length; i++) {
        let unsortedindex = i;
        let sortedIndex = unsortedindex -1;
        while (sortedIndex >= 0){
            // color current indexes
            document.getElementById(`${sortedIndex+1}`).style.background='red';
            document.getElementById(`${sortedIndex}`).style.background='red';
            await new Promise(resolve => setTimeout(resolve, 1000/speed));
            document.getElementById(`${sortedIndex+1}`).style.background='#7fbef5';
            document.getElementById(`${sortedIndex}`).style.background='#7fbef5';
            if(arr[unsortedindex] < arr[sortedIndex]){
                swap(arr, unsortedindex, sortedIndex);
                unsortedindex = unsortedindex-1;
            }
            if(arr[unsortedindex] > arr[sortedIndex]){
                break;
            }
            // animating sorted arr's sorted elements background gradient
            sortedIndex = sortedIndex -1;
        }
        animate(i);
    }
    animate(arr.length-1);
    enableBtns();
}

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
    for (let index =0; index < arr.length; index++){
        animate(index);
    }
    enableBtns();
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

// animating sorted arr's sorted elements background gradient
const animate = (index) => {
    document.getElementsByClassName(`${index}`)[0].style.backgroundImage = 'linear-gradient(90deg,rgba(78,216,96,0.4) 30%,white)';
    document.getElementsByClassName(`${index}`)[0].style.backgroundSize = '400% 400%';
    document.getElementsByClassName(`${index}`)[0].style.backgroundPosition = 'right';
    document.getElementsByClassName(`${index}`)[0].style.animation = 'gradient 1s ease-in forwards';
}

const enableBtns = () => {
    document.getElementById('btn').disabled = false;
    if(document.getElementsByClassName('algos')[0]){
        document.getElementsByClassName('algos')[0].disabled = false;
    }
    if(document.getElementsByClassName('speeds')[0]){
        document.getElementsByClassName('speeds')[0].disabled = false;
    }
    if(document.getElementsByClassName('sizes')[0]){
        document.getElementsByClassName('sizes')[0].disabled = false;
    }
}
const disableBtns = () => {
    document.getElementById('btn').disabled = true;
    if(document.getElementsByClassName('algos')[0]){
        document.getElementsByClassName('algos')[0].disabled = true;
    }
    if(document.getElementsByClassName('speeds')[0]){
        document.getElementsByClassName('speeds')[0].disabled = true;
    }
    if(document.getElementsByClassName('sizes')[0]){
        document.getElementsByClassName('sizes')[0].disabled = true;
    }
}

const Bars = ({arr, algorithm, speed, beginSort}) => {
    // reset bars color from green=sorted to white=unsorted
    for (let index =0; index < arr.length; index++){
        if(document.getElementsByClassName(`${index}`)[0]){
            document.getElementsByClassName(`${index}`)[0].style.background='white';
            document.getElementsByClassName(`${index}`)[0].style.animation = 'none';
        }
    }
    if(beginSort){
        disableBtns();
        if(algorithm === 'Bubble Sort'){
            bubbleSort(arr, speed);
        }
        else if(algorithm === 'Insertion Sort'){
            insertionSort(arr, speed);
        }
        else if(algorithm === 'Selection Sort'){
            selectionSort(arr, speed);
        } 
        else if (algorithm === 'Merge Sort'){
            mergeSort(arr);
        }
        else if (algorithm === 'Quick Sort'){
            quickSort(arr, 0, arr.length-1, speed);
        }
    }
    return (
        <section className="bars">
            {arr.map((height, index)=>{
                return (
                <div key={index} id='outer-bar' className={index}>
                    <div id={index} className='inner-bar' style={{height:`${height}vh`, background: `#7fbef5`, width: '100%'}} >
                    </div>
                </div>
                )
            })}
        </section>
    );
}

export default Bars