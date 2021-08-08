// // 1 Переменные
// const firstName = 'Maksimka'// Приоритет
// var name = 'Maxilen' // Не использовать
// //let age = 25  

// name = 'maks'
// console.log(name)


// const _private = 'private'
// const $ = 'some value'
// const with5 = '5'
// //const 5with = '5' err

// //2 Мутирование
// console.log('Имя человека:' + firstName + ', возраст:')
// const lastMame = prompt('Введите фамилию')
// alert(firstName + ' ' + lastMame)

//Операторы
const currentYear = 2020
const birthYear = 1996
const age = currentYear - birthYear
console.log(age)

// Типы данных
const isProgrammer = true
const myname = 'Max'
const time = 15.23
let x


console.log(typeof isProgrammer)
console.log(typeof time)
console.log(typeof myname)
console.log(typeof x)
console.log(null)

//Приоритет операторов
const fullAge = 25
const birthday = 1996
const current = 2021

const isFullAge = (current - birthday) >= fullAge
console.log(isFullAge)

// Условные операторы

const status = 'pending' // ready, fail, pending
if (status === 'ready') {
console.log('курс готов')
}
else if (status === 'pending') {
    console.log('курс в процессе')
}
else {console.log('Курс не получился')
}

const isReady = true
// if (isReady ) {
//     console.log('Все готово')
// }
// else {console.log('Не готово')
// }
isReady ? console.log('Все готово') : console.log('Не готово') // Тернарное выражение

// Булевая логика

// Функции

function calculateAge(Year) {
    return 2021 - Year
}
//  const myAge = calculateAge(1996)
//  console.log(myAge)

//  или


  function logInfoAbout(name, Year) {
      const Age = calculateAge(Year)
Age > 0 ? console.log('Пользователь ' + name + ' имеет возраст ' + Age) : console.log('Так-то это будующее!!!')
  }
  logInfoAbout('Max' , 1996)
 

  // Массивы
//    const cars = ['Мазда', 'BMW', 'Ford']
  

// const cars = new Array('Mazda', 'BMW', 'Ford')
// console.log(cars)
// console.log(cars[1])
// console.log(cars.length)

// cars[0] = 'Porsche'
// cars[cars.length] = 'Mazda'
// console.log(cars)

// Циклы

const cars = ['Мазда', 'BMW', 'Ford']

// for (let i = 0; i < cars.length; i++) {
// const car = cars[i]
// console.log(car)
// }
for (let car of cars) {
console.log(car)
}

// Объекты