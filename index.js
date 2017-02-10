module.exports = {
  check: function (inputNumber) {
    var digits = String(inputNumber).split('').map(Number)
    var checkDigit = digits.pop()
    var onOddDigit = true
    var mungeOddDigits = function(digit) {
      if (onOddDigit) { digit = digit * 2 }
      if (digit > 9) { digit = digit - 9 }
      onOddDigit = !onOddDigit
      return digit
    }
    var mungedDigits = digits.reverse().map(mungeOddDigits).reverse()
    var mungedSum = mungedDigits.reduce(function (acc, x) { return acc + x })
    var mungedProduct = mungedSum * 9
    return checkDigit === mungedProduct % 10
  }
}
