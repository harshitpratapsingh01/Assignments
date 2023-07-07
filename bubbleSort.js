let arr = [1,4,3,2,5,8,6];
let n = arr.length;
let sorted_arr = [];
function bubble_sort(minimum, currVal){
    return Math.min(minimum,currVal);
}

for(let ind = 0; ind<n; ind++){
    let mini = arr.reduce(bubble_sort);
    sorted_arr.push(mini);
    let index_of_mini = arr.indexOf(mini);
    arr.splice(index_of_mini,1);
}
console.log(sorted_arr);