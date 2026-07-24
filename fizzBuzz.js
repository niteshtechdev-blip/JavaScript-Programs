function fizzBuzz(start,end){
    let fizz=[]//Divisabal by 2
    let buzz=[]//Divisabal by 3
    let fizzBuzz=[]
    for(let i=start;i<=end;i++){
        if(i%2==0)fizz.push(i)
        if(i%3==0)buzz.push(i)
        if(i%2==0 && i%3==0)fizzBuzz.push(i)
    }
    console.log(fizz)
    console.log(buzz)
    console.log(fizzBuzz)
}
fizzBuzz(1,100)