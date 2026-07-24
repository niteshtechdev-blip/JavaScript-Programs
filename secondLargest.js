function secondLargest(arr){
    let largest =0
    let sLargest=0
    for (const num of arr) {
        if(num>largest){
            if(largest>sLargest){
                sLargest=largest
            }
            largest=num
        }
        
    }
    console.log(`Largest=${largest} Second largest=${sLargest}`)
}
secondLargest([12,3 ,2 ,43 ,5 ,6,87])