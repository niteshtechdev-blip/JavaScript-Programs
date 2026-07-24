function palindrome(str){
    let rev=str.split("").reverse().join("")
    if(rev.toLowerCase()==str.toLowerCase()){
        console.log(`${str} is Palindrome`)
    }else{
        console.log(`${str} is not Palindrome`)
    }
}
palindrome("madam")
palindrome("Nitesh")
palindrome("Sadas")