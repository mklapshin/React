// import style from "./styles.module.scss"

import {
    useState,
    useEffect
  } from "react"

const ChatBot = () => {
   
    const [messages, setMessages] = useState([])

    const [value, setValue] = useState("")
    
    const handleSendMessage = () => {

        setMessages((message) => [...message, { value, athor: "User" }])
      setValue("")
    }
  
const chatFunction = () => {
    const lastMessage = messages[messages.length - 1] 
      
    if (lastMessage?.athor === "User") {
      setTimeout(() => {
        setMessages((state) => [
          ...state,
          { value: "Hello from bot", athor: "Bot" },
        ])
        }, 5000)
      } 
}

    useEffect(() => {
      chatFunction()
     
      }, [messages])
   
    return (
        <div>
          <ul>
             {messages.map((message, id) => (
               <li key={id}>
                 {message.value} = {message.athor}
                 </li>
             ))}
             </ul>

             <input value={value} onChange={(e) => setValue(e.target.value)} />
             <button onClick={handleSendMessage}>send</button>
        </div>
    )
}

export default ChatBot