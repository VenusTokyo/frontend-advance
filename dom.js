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
const btn =document.getElementById('showhidebtn')
const container =document.getElementsByClassName('container')[0]
btn.addEventListener('click',()=>{ //an event and funtion to perform when that event happens
    if(container.style.display=='block'){
        container.style.display='none'
        btn.innerText='Show Card'
        btn.style.backgroundColor='lightcoral'
    }
    else{
        container.style.display='block'
        btn.innerText='Hide Card'
        btn.style.backgroundColor='lightgreen'


    }
    
    //changing style of the container on clicking the button
    
})
const number=document.getElementsByTagName('span')[0]

const plus =document.getElementById('plus')
const reset =document.getElementById('reset')
const minus =document.getElementById('minus')

plus.addEventListener('click',()=>{
    number.innerText++
})
reset.addEventListener('click',()=>{
    number.innerText=0
})
minus.addEventListener('click',()=>{
    number.innerText--
})