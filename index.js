
//---1-Sort Array of Numbers-----

var arr1 = [-3, 8, 7, 6, 5, -4, 3, 2, 1];
var sortedArra = arr1.sort(function (a, b) { return a - b });

document.getElementById('SortedArray').innerHTML = sortedArra

console.log(sortedArra)
console.log('sortedArra')

//------------------------//


//---2-Most frequent item in an array-----

var arr2 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];


var times = 0;
var element = null;

for (var index = 0; index < arr2.length; index++) {

   var temp = arr2[index];
   var count = 0;
   for (var j = 0; j < arr2.length; j++) {
      if (temp === arr2[j]) {
         count++;
      }
   }
   if (count >= times) {
      times = count;
      element = temp;
   }
}
var result = element + ' : repeated  ( ' + times + ' times ) is the most frequent';
console.log(result);
document.getElementById('mostFrequentItem2').innerHTML = result;
//-------------------

//---3-Color Order-----

var color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
var o = ["1st", "2nd", "3rd", "th"];

var arrLength = color.length

var selColorPosition = 5;//Number(prompt('Inter Color position Number To display'));
var selectedColorIndex = 0;
var displayColor = '';

if (selColorPosition > arrLength) {
   alert('Enter Number not greater than ' + arrLength)
} else {

   selectedColorIndex = selColorPosition - 1;

   switch (selectedColorIndex) {
      case 0:
         displayColor = o[selectedColorIndex] + ' choise is ' + color[selectedColorIndex];
         break;
      case 1:
         displayColor = o[selectedColorIndex] + ' choise is ' + color[selectedColorIndex];
         break;
      case 2:
         displayColor = o[selectedColorIndex] + ' choise is ' + color[selectedColorIndex];
         break;

      default:
         displayColor = selColorPosition + '  ' + o[3] + ' choise is ' + color[selectedColorIndex];
         break;
   }

   console.log(displayColor)
   document.getElementById('Colors').innerHTML = displayColor
}

//------------------------//


//---4-Reverse a number-----

var x = '32243';

// result = x.slice(0, 1);
console.log(x.length, ' chk length');
var revercedX = '';

// revercedX = x.slice(4, 5);

for (var index = x.length; index >= 0; index--) {
   revercedX += x.charAt(index);
   // console.log(revercedX);
}

console.log(revercedX, '    Reverces Number');
document.getElementById('ReverseNumber').innerHTML = Number(revercedX)


//------------------------//


//---5- Largest Number-----

var m = [-5, -2, -6, 0, -1];
var LargestNo = 0;

for (var index = 0; index < m.length; index++) {
   if (m[index] > m[index - 1]) {
      LargestNo = m[index];
      // console.log('Index   :',index , 'LagreNo  :',LargestNo);
   }
}
console.log(LargestNo, '    Largest Number');
document.getElementById('LargestNumber').innerHTML = LargestNo;


//------------------------//











/*

var x = 5;

console.log(x);


//----------------
var y = [4, 5];

console.log(y);
console.log(y[0]);  //4

y[0] = 10;
console.log(y);

console.log(y.length + '   is array length');

//--------------


var x = ['Sayed', 'Mohamed', 'Mahmoud'];
for (var index = 0; index < x.length; index++) {
   console.log(index + '--' + x[index]);
   document.write(x[index] + '<br>');
}

//---------------------
//-- add functions for array
// 1- push    --> add from array end
// 2- unshift --> add from array start

//-- Remove functions for array
// 1- pop    --> remove from array end
// 2- shift --> remove from array start

var a = [];
a.push(1);   //[1]
a.push(2);   //[1,2]
a.push(3);   //[1,2,3]

a.unshift(11);  //[11,1,2,3]
a.unshift(12);  //[12,11,1,2,3]

a.pop()   //[12,11,1,2]  ---> 3 removed
a.pop()   //[12,11,1]    ---> 2 removed

var r = a.shift() //[11,1]   ---> 12 removed
console.log(r + '  removed item')

console.log(a.shift() + '  removed item') //[1] ---> 11 removed

console.log(a.shift() + '  removed item') //[]   ---> 1 removed

console.log(a.shift() + '  removed item') // undefined

console.log(a);


//---------------------

var d = [5, 6, 7, 8, 7];
var flag = false;
var searchedItem = 7;

for (var index = 0; index < d.length; index++) {
   if (d[index] === searchedItem) {
      flag = true;break;
   } else {
      flag = false;
   }

}

if (flag) {
   console.log('Found ', index);
   
} else {
   console.log('Not Found ', index);
}

//2

//-------------------
console.log(d);

console.log(d.indexOf(7))  // (-1 or  (no > -1 )
console.log(d.includes(10))  // ( true  or false )
//---------------------

for (var index = d.length -1; index >=0; index--) {
   console.log(d[index]);
}
console.log(d)
//-------
console.log(d.reverse())

//------------------------------

var s =[9,4,7,8,7];
console.log(s , '   s array');
console.log(s.slice(2,3) , ' ---slice 2,3'); 
//2  start index , 3 end index(not included)

console.log(s.slice(3) , ' ---slice from 3 start to the end'); 
//start  from index 3, to the end ( end is not defined)

console.log(s.slice(-3,-1) , ' ---slice from end -->-1 to  previous -->-2  --->-1 not included'); 
// ---last index = -1 , pervious = -2 , previous = -2  'end not included'

//-------splice
console.log(s , '   Before Remove')

var deleteditem= s.splice(2,1,10)
console.log(deleteditem, '-----> deleted item')
console.log(s , '   After Remove and replace with 10')
//-------splice

console.log('===================')

//-------splice
//[9, 4, 10, 8, 7] '   Before Remove'
console.log(s , '   Before Remove')

var deleteditem= s.splice(2,2,15)
console.log(deleteditem, '-----> deleted item')
console.log(s , '   After Remove 10,8 and replace with 15')
//[9, 4, 15, 7]
//-------splice

console.log('=========***********==========')


//-------splice
var g=[5,8,7,9,12]
console.log(g , '   Before Remove')

var deleteditem= g.splice(2,2,30)
console.log(deleteditem, '-----> deleted item')
console.log(g , '   After Remove 7,9 and replace with 30')
//[5, 8, 30, 12]
//-------splice


console.log('=========///////////==========')


//-------splice
var k=[5,6,9,8,10]
console.log(k , '   Before Remove')

var deleteditem= k.splice(2,2,30,31,32)
console.log(deleteditem, '-----> deleted item')
console.log(k , '   After Remove 9,8 and replace with 30,31,32')
//[5, 6, 30, 31, 32, 10]
//-------splice

*/