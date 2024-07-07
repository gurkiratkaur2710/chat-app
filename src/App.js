import React, { useRef, useState } from "react";
import './App.css';
import Auth from "./components/Auth";
import Cookies from "universal-cookie";
import { Chat } from "./components/Chat";
import { signOut } from "firebase/auth";
import { auth } from "./firebase";

const cookies = new Cookies();

function App(){
  const [isAuth,setisAuth] = useState(cookies.get("auth-token"))
  const[room,setroom]=useState(null)

  const roomInput = useRef(null);

  const signuserOut = async()=>{
    await signOut(auth)
    cookies.remove("auth-token")
    setisAuth(false);
    setroom(null);
  }
  if(!isAuth){
    return(
    <div>
<Auth setisAuth={setisAuth}/>
  </div>
    )
  }

return (
<> 
  {
  room ? 
  (
    <Chat room={room}/>
  ):
  (
   <div className="room">
    <label>enter :</label>
    <input ref={roomInput }/>
    <button onClick={()=>setroom(roomInput.current.value)}>enter chat</button>
    </div>
    )}

    <div>
      <button onClick={signuserOut}>sign out</button>
    </div>
    </>
)
}
export default App