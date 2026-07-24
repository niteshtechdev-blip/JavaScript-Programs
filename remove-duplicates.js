function removeDuplicates(arr){
    let newArr=[]
    for(let i=0;i<arr.length;i++){
        if(!newArr.includes(arr[i])){
            newArr.push(arr[i])
        }
    }
    return newArr;
}
console.log(removeDuplicates([1,2,3,4,2,5,3]))