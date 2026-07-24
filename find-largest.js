function findLargest(arr){ // don't use findLargest([arr]) js automaticaly identify array as argument
    let largest=arr[0]
    arr.forEach((e)=>{
        if(e>largest){
            largest=e
        };
    })
    console.log(largest)
}

findLargest([2,3,4,2,5,31,54,23,8])