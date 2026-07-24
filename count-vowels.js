function countVowels(str){
    let count= 0
    arrStr=Array.from(str)
    arrStr.forEach(ch => {
        if(ch=='a'||ch=='A'||ch=='e'||ch=='E'||ch=='i'||ch=='I'||ch=='o'||ch=='O'||ch=='u'||ch=='U'){
            count++
        }
    });
    console.log(count)
}
countVowels("Nitesh")
countVowels("JavaScript")
