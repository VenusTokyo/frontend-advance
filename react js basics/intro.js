//PS this is just some code from a react js file please don't run this independently
//PS 2 these are notes not actual usable code

import {Component} from "react"
import "./styles.css";

 function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      
      
      {/* greeting is child component of app component */}
      <Greeting name='Shrutika'  greeting='bruh'/>
    </div>
  );
}

//JSX : Syntax extention for Javascript (html + javascript)
//difference between funtional components and normal javascript function -> functional components only start with capital letter

//why classname in jsx and not class? ->because class is reserved word in javascript

//there are 2 types of components in react 
//1. Class components
//2. Functional component

//CLASS COMPONENT
class Forest extends Component{
  render(){
    return <h1>forest</h1>
  }
}
//FUNCTIONAL COMPONENT
function Greeting({name,greeting}){ 
  // above we did object destructuring instead of writing props.name etc we destructered it to make it simple
  return <h1>{greeting} {name}</h1>
}

export default App;

//default and named exports
// 1. default export mean we can changes the name of the component were we are importing for eg. we are exporting App we can name it anything we like in the file we are importing

//2. named components cannot be named something else in the imported eg export function App()