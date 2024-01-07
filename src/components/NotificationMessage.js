import "../styles/notificationMessage.css"

import { CiMedicalClipboard } from "react-icons/ci";


export default function NotificationMessage({message = {heading: "Copied!", body: "You successfully copied code to the clipboard"}}) {

    return(
      
      <div style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
        <CiMedicalClipboard style={{color: "white", marginRight: "10px"}} size={30}/>
        <div>
        <strong className="font__weight-semibold">{message.heading + " "}</strong>{message.body}
        </div>
       
      </div>
    )
}