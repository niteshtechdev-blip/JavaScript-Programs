function sumN(n){
    let sum=0
    for (let i = 1; i <=n; i++) {
        sum=sum+i;
    }
    return `Sum:${sum}`
}
console.log(sumN(3))