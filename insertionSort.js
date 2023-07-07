let arr = [1,4,2,4,3,8,6];

function sort(sorted_arr, val){
    let i = 0;
    while(i<sorted_arr.length && val > sorted_arr[i]){
        i++;
    }
    sorted_arr.splice(i,0,val);
    return sorted_arr
}

console.log(arr.reduce(sort,[]));