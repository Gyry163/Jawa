// Number
const num = 42 //Integer
const float = 24.24 //float
const pow = 10e3 //
console.log(pow)
console.log('MAX_SAFE_INTEGER ', Number.MAX_SAFE_INTEGER)
console.log(Math.pow(2, 53,) - 1)
console.log('MIN_SAFE_INTEGER', Number.MIN_SAFE_INTEGER)
console.log('MAX_VALUE', Number.MAX_VALUE)
console.log('MIN_VALUE', Number.MIN_VALUE)
console.log('POSITIVE_INFINITY', Number.POSITIVE_INFINITY)
console.log('NEGATIVE_INFINITY', Number.NEGATIVE_INFINITY)
console.log('Nan', Number.NaN)
const weird = 2 / undefined
console.log(Number.isNaN(weird))
console.log(Number.isFinite(42))

const stringint = '40'
const stringFloat = '40.42'
console.log(stringint + 2)
console.log(Number.parseInt(stringint) + 2)
console.log(Number(stringint) + 2)
console.log(+stringint + 2)


console.log(Number.parseFloat(stringFloat) + 2)




