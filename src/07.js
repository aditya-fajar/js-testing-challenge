function repeatLetter(str,times) {
    let splitSpace = str.split('')
    let repeat = []
    for(let i = 0; i < splitSpace.length; i++){
        repeat.push(splitSpace[i].repeat(times))
    }
    return repeat.join('').replace(/  +/g, ' ')
    
  }

module.exports = repeatLetter
// console.log(repeatLetter('Hello World!',2))