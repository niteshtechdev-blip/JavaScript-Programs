function largestInTwo(a,b){
    // if(a>b){
    //     return a;
    // }else if(b>a){
    //     return b;
    // }else{
    //     return "both are equal"
    // }

    let largest=a>b? `${a}`:`${b}`;
    return largest
}
console.log(largestInTwo(30,3))