console.log('Arrays');

// Array is a date doctype
// used to store many relevant values
// under the same name

var names = ['Lucy', 'Peter', 'Antony', 'Yuli', 'Julie', 'Chelsea', 'Candy', 'Mohammed', 'Rico'];

document.getElementById('result').innerHTML = names[3];
document.getElementById('result').innerHTML += '</br>' + names[1];
document.getElementById('result').innerHTML += '</br>' + names[2];
document.getElementById('result').innerHTML += '</br>' + names[0];

document.getElementById('result').innerHTML += '</br>' + names;

// loop to repeat a certain of times
for (var i=0; i<4; i++) {
  document.getElementById('result').innerHTML += '</br>' + names[i];
  //document.getElementById('result').innerHTML += '</br>' + names[2];
}


// searching for Peter in the list
for (var i=0; i<4; i++) {
  if (names[i] === 'Peter') {
  document.getElementById('result2').innerHTML
  += '</br> Yes, ' + names[i] + ' is found in the list';
  break;
  //document.getElementById('result').innerHTML += '</br>' + names[2];
  // } else {
  //   document.getElementById('result2').innerHTML
  //   += '</br> Sorry, ' + names[i] + ' is not found in the list';
  }
}

// if  (!==(names.include('Peters'))) {
//  document.getElementById('result').innerHTML
//  += '</br> Sorry, ' + Peters + ' is not found in the list';
// }


var age = [30, 25, 40, 24, 50, 10, 5, 83, 18];
var highestAge = 0;

for (var i=0; i<9; i++) {
  if (highestAge < age[i]) {
    highestAge = age[i];
    alert (i);
    console.log(i);
    var listIndex = i;

  }

}

document.getElementById('result2').innerHTML += '</br> The highest age is ' + highestAge;

for (var j=0; j<9; j++){
  if (j === listIndex) {
    document.getElementById('result2').innerHTML += '</br>' + names[j] + ' is the eldest';
  }
}

// switch (listIndex) {
//   case 0:
//   console.log(listIndex);
//   document.getElementById('result2').innerHTML += '</br>' + 'Lucy is the eldest';
//   break;
//   case 1:
//   document.getElementById('result2').innerHTML += '</br>' + 'Peter is the eldest';
//   break;
//   case 2:
//   document.getElementById('result2').innerHTML += '</br>' + 'Antony is the eldest';
//   break;
//   case 3:
//   document.getElementById('result2').innerHTML += '</br>' + 'Yuli is the eldest';
//   break;
// }
