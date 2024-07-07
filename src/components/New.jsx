// import React, { useState } from 'react'

// const New = () => {
//     // const name = "gurkirat kaur";
//     // const arr = [0,1,2,3,4,5];
//     // const appName = "React Application";
//     // const user = {
//     //     name:'Reet'
//     // }


    
//     // const profileValid = false;
//     // const compu1 = new Date().toLocaleDateString();
//     // const compu2 = new Date().toLocaleTimeString();
//     // const images ="src/components/red heels.jpeg";
//     // const links = "https://www.youtube.com/"
  

//     const favSeries ='netflix';
//     let favS=""
//     if(favSeries==='netflix'){
//       favS='good'
//     }else{
//       favS='morning'
//     }
    

//     // let newTimestring = new Date().toLocaleTimeString();
//     // const[cTime,setTime]= useState(newTimestring);
//     // const UpdateTime =()=>{
//     //   let newTimetring = new Date().toLocaleTimeString();
//     //   setTime(newTimetring)
//     // }
     

//    let Timing = new Date().toLocaleTimeString();
//    const[cuTime,neTime]=useState(Timing);
//    const upDate = ()=>{
//     let Timing = new Date().toLocaleTimeString()
//     neTime(Timing);

//    }
//    setInterval(upDate,1000);
   


//    let purple = '#00ff00'
//    const[newbgg,setbgg]=useState(purple)
//    const bg = ()=>{
//     let sff = '#0000ff';
//     setbgg(sff);
//    }
//    const bgg = ()=>{
//     let uff = '#ff0000'
//     setbgg(uff)
//    }
  


//   //  
  
//   const[write,read]=useState(" ");
//   const[writeit,setlastname]=useState(" ");

//    const [fullName,setFull]=useState();
//    const addAnything = (e)=>{
//     read(e.target.value);
//    }
  
//    const onSubmits =(e)=>{
//     e.preventDefault();
//     setFull(write);
//    }









//     return (
//       <div>
//     <>
//     <h3>{favS}</h3>
//     </>
    
     


//     {/* <>
// <h1>{cTime}</h1>
// <button onClick={UpdateTime}>Get Time</button>
    
    
//     </> */}






//     <>
    
//     <h1>{cuTime}</h1>
//     <button onClick={upDate}>Get time</button>
    
//     </>



//     <>
//     <div style={{backgroundColor:newbgg}}>
//       <button onClick={bg} onDoubleClick={bgg}>click</button>
//     </div>
//     </> 






//    <>
//    <form onSubmit={onSubmits}>
//    <h1>Hello,{fullName}</h1>
//    <input type='text' placeholder='Enter text here' style={{padding:'10px',fontSize:'20px',color:'red'}} onChange={addAnything} value={write}/>
//    <input type='text' placeholder='Enter last name here' style={{padding:'10px',fontSize:'20px',color:'red'}} onChange={additAnything} value={writeit}/>

//    <button type="submit">click</button>
//    </form>
//    </>






//    {/* <div className='main_div'>
//     <form onSubmit={onSubmits}>
//    <>
//    <h1></h1>
//    <input type="text" placeholder='enter your text here' />
//    <input type="email" placeholder='enter your mail here' />
//    <br/>
//    <button type="submit">click</button>
   
//    </>
//    </form>
//    </div> */}
   
   
//     </div>
//     )
//   }























  
 
    
//     {/* <div>
//       <h1>my name is {name}</h1>
//       <h1>This is simple {appName}</h1>
//       <p>username is {user.name}</p>
//       <p>Is it valid value  : {`${profileValid}`}</p>
//       <p>{profileValid ? 'Valid Profile' : 'Invalid Profile'}</p>
//       <p>My lucky number is : { Math.random()}</p>
//       <p>current  date is {compu1}</p>
//       <p>current  time is {compu2}</p>

//        {arr.map((val,i)=>(
//         <>
//         <li id={i}>{val}</li>
//         <li>{val}</li>

       
//         </>
       
        
//        ))}
       
//     </div>

// <div>
// <a href={links} target="_reet">
// <img src={images} alt="my heels"/>
// </a>
// </div> */}








// export default New



// // javascrpt inside html is the syntax of jsx
// // jsx is the rendering of html on the web page 
// // this jsx syntax is coverted into the form of object by babel so that browser can understand







// // in index.js
// // import React from 'react'
// // import ReactDOM from 'react-dom'
// // ReactDOM.render(
//   // <><h1></h1>,<p></p>,</>,document.getElementById='root')
