function symmetrical(text) {
    var lowstring = text.toString().toLocaleLowerCase()
  	var revstring = lowstring.split('').reverse().join('')
  	return lowstring === revstring
  }

module.exports = symmetrical
// console.log(symmetrical(123321))