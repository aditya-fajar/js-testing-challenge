function roman (str) {
    var result=0;
    if (str==null){
        result=0;
    }
    var romanize=new Map();
    romanize.set('I', 1);
    romanize.set('V', 5);
    romanize.set('X', 10);
    romanize.set('L', 50);
    romanize.set('C', 100);
    romanize.set('D', 500);
    romanize.set('M', 1000);

    for(let i = 0; i < str.length; i++){
        if(romanize.get(str.charAt(i)) < romanize.get(str.charAt(i+1))){
            result-=romanize.get(str.charAt(i))
        }
        else{
            result+=romanize.get(str.charAt(i))
        }
    }
    return result;

}
module.exports = roman
// console.log(roman('IX'))