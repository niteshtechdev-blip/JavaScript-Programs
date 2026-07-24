function sum(end){
    let start=1
    let sum=0
    for(let i=start;i<=end;i++){
        sum+=i
    }
    console.log(sum)
}
function sumEven(end){
    let start=1
    let sum=0
    for(let i=start;i<=end;i++){
        if(i%2==0){
            sum+=i
        }
    }
    console.log(sum)
}
sum(10)
sumEven(10)


