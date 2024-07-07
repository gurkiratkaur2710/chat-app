import React,{useState} from 'react'

const Toggle = () => {
    const purple = "#8e44ad";
    const[bg, setBg] = useState(purple);
    const[name, setName]=useState("its magic")
    const backgroundColor12 = () =>{
        // console.log("clicked")
        let newBg = '#34495e';
        setBg(newBg)
        setName("gurkirat")
        
    }
  return (
    <div style={{backgroundColor:bg}}>
      <button onClick={backgroundColor12}>{name}</button>
    </div>
  )
}

export default Toggle


