function arrayMirroring(numberList){
    let list2 = [...numberList].reverse()
    return [...numberList,...list2]    
}
module.exports = arrayMirroring
// console.log(arrayMirroring([1,2,3]))