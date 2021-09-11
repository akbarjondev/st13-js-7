var userMoney = document.getElementById('js-money');
var currency = document.getElementById('js-currency');
var convertBtn = document.getElementById('js-btn');
var result = document.getElementById('js-result');

// currencies
var dollar = 10700;
var rubl = 147;
var lira = 1259;

convertBtn.addEventListener('click', function (e) {

  if (!isNaN(userMoney.value)) {
    if (currency.value == 'usd') {
      result.textContent = '$' + (Number(userMoney.value) / dollar).toFixed(2);
    } else if (currency.value == 'tl') {
      result.textContent = 'TL' + (Number(userMoney.value) / lira).toFixed(2);
    } else {
      result.textContent = 'P' + (Number(userMoney.value) / rubl).toFixed(2);
    }
  } else {
    result.textContent = 'Turi yozing!';
  }

  // String property - lenth
  // console.log(userMoney.value.length)
  // console.log(userMoney.value[1])

});

var letter = 'salom '.trim()
// console.log(letter[4]) // nolinchi belgisini qaytaradi, inson uchun birinchi
// console.log('Salom'[3]) // nolinchi belgisini qaytaradi, inson uchun birinchi
// console.log('Salom'.charAt(3))
// console.log(letter[letter.length - 1]) // 5

// [], .charAt()
// console.log('Ali'[4]) // undefined
// console.log('Ali'.charAt(4)) // ''

// Stringlar immutable
// letter[1] = 'j'
// console.log(letter)

// .repeat()
// console.log(letter.repeat(5))

// console.log(letter.toUpperCase())
// console.log(letter.toLowerCase())
// console.log(letter[0].toUpperCase())

// includes
// console.log("Widget with id".includes("Widget1")); // true
// console.log("Hello".includes("Bye")); // false

// // with second argument
// console.log( "Widget".includes("id") ); // true
// console.log( "Widget".includes("id", 3) ); // false, from position 3 there is no "id"

var text = 'Salom bolalar!'

// .includes()
// if (text.toLocaleLowerCase().includes('salom')) {
//   console.log('Senga ham salom')
// }

// // startsWith and endsWith
// console.log("Widget".startsWith("w")); // true, "Widget" starts with "Wid"
// console.log("Widget".endsWith("get")); // true, "Widget" ends with "get"

// salomlash('Ali');

// console.log('sdcsccsc')

// function declaration
function salomlash(ism) {
  console.log('Salom ' + ism);
}

// xayrlash('Karim');

// function expression
var xayrlash = function (ism) {
  console.log('Xayr ' + ism);
}

// salomlash('Salim');

// var addition = function (x = 1, y = 10) {
//   x + y;

//   return x + y;

//   // console.log('xisoblab bo\'ldim')
// }

// addition(10, 5);
// addition(10);
// console.log(addition())

// var sum = addition(12, 65)
// console.log(sum)


// Matematik funksiyalar

var addition, subtraction, multiplication, division;

addition = function (a, b) {
  return a + b;
}

subtraction = function (a, b) {
  return a - b;
}

multiplication = function (a, b) {
  return a * b;
}

division = function (a, b) {
  if (b === 0) {
    return;
  }

  return a / b;
}

// console.log(division(0, 0))
