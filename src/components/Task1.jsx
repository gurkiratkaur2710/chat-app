import React from 'react'
// import './App.css';

const Task1 = () => {
     const timings = new Date().getHours();  //new Date(year,month,date,time in hours)
     let greetings = " ";
     let cssStyle = {};
     if(timings>=1 && timings<12){
        greetings = "good morning";
        cssStyle.color="red";
     }else if(timings>=12 && timings<19){
        greetings="good afternoon";
        cssStyle.color="yellow";
     }else{
        greetings = "good night";
        cssStyle.color="green";
     }
  return (
    <div>
      <h1>Hello,<span style={cssStyle}>{greetings}</span></h1>
      
    </div>
  )
}

export default Task1



// in jsx
// import React from 'react'
// const name = 'reet';
// export default name 

// const names = 'arora';
// export {names};

//  function arr(){
// let name = 'reet arora'
// return name;
// }
// export {arr}




// in app.js
// import {names,arr} from './components/';
// import * from ques from './components/';
 

// ReactDOM.render(
// <>
// <h1>{names}</h1>
// <ul>
{/* <li>{names}</li>  */}
// <li>{arr}</li>
// </ul>
// </>;
// document.getelementbyid('root')
// )
