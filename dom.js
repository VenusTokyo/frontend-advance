//methors to access html elements inside js

const para =document.getElementById('para'); //returns 1 element
const heading = document.getElementsByClassName('heading1') //returns an array
const allPara= document.getElementsByTagName('p') //all tags of p will be returned in an array form
const cardHeading =document.querySelector('.card .heading1') //similar to css selectors this returns the first element that matches the search (only 1 element returned)
const cardHeadingAll =document.querySelectorAll('.card .heading1') //returns an array

const cards =document.getElementsByClassName('card')

// for (i=0; i<cards.length;i++)
// {
//     console.log(cards[i].getElementsByClassName('heading1'))
// }
// console.log(cardHeading)
// console.log(cardHeadingAll)
// console.log(allPara)
// console.log(para) // this an unique id instance only a single entity will eb returned
// console.log(heading[0]) //since this is a class reference it will return a array of all instance of the class
// heading[0] will return the first instance of the class

//changing propertise ie. props
para.innerHTML='this is my first para in js'
para.innerText='this will change only text'