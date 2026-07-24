function largeInThree(a,b,c){
    if(a>b){
        if(a>c){
            return a;
        }
        else{
            return c;
        }
    }else if(b>c){
        return b
    }else{
        return c;
    }
}

//

console.log(largeInThree(11,1,1))