import { addDoc, collection, onSnapshot, orderBy, query, serverTimestamp, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { auth } from "../firebase"
import { db } from "../firebase";

export const Chat=(props)=>{

      const{room}= props
    const[newMessage,setnewMessage]=useState("");
    const[messages,setmessages]=useState([])

    const messageRef = collection(db,"messages")


    useEffect(()=>{
        const queryMessages = query(messageRef,
            where("room","==",room),
        orderBy("createdAt"));
        const unsubscribe = onSnapshot(queryMessages,(snapshot)=>{
            // console.log(("new message"))
            let messages =[];
            snapshot.forEach((doc)=>{
                messages.push({ ...doc.data(), id: doc.id})
            });
   setmessages(messages)
        })
        return()=>unsubscribe();
    })
    const handleSubmit =async(e)=>{
       e.preventDefault();
    //    console.log(newMesaage);
    if (newMessage === "") return;

    await addDoc(messageRef,{
         text : newMessage,
         createdAt : serverTimestamp(),
         user : auth.currentUser.displayName,
         room,
    });
    setnewMessage("")
    };
    return <div className="chat-app">
        <div><h1>Welcome to: {room.toUpperCase()}</h1></div>
        <div>{messages.map((message)=>(
            
            <div className="message" key={message.id}>
                <span>{message.user} : </span>
                {message.text}
                
                
            </div>
        ))}</div>
        <form onSubmit={handleSubmit} className="new-message-form">
            <input className="new-message-input" placeholder="enter new message here..." onChange={(e)=>setnewMessage(e.target.value)} value={newMessage}/>
            <button type="submit" className="send-button">
                send
            </button>
        </form>
    </div>
}