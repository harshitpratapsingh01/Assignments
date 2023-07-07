
function fibo(arr1,val,i){
    arr1.push((i<2) ? i : arr1[i-1] + arr1[i-2]);
    return arr1;
}

function f(n){
    let arr = new Array(n).fill(100000).reduce(fibo,[]);
    return arr ;
}

console.log(f(10));