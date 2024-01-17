import { useEffect } from "react";

import "./dropdown.css"


export default function Dropdown({title = "Select your option", receivedOptions = ["Instagram", "Facebook", "Telegram", "WhatsApp"]}) {





    function onSelectBtn () {
        const optionMenu = document.querySelector(".select-menu");
        optionMenu.classList.toggle("active")
    }

    function onOptionPress(option) {
        const optionMenu = document.querySelector(".select-menu");
        const sBtn_text = optionMenu.querySelector(".sBtn-text");

        let selectedOption = option.querySelector(".option-text").innerText;

        sBtn_text.innerText = selectedOption;
        optionMenu.classList.remove("active");
    }
    
    return(
        <div className="select-menu ">

            <ul className="options">
                <li onClick={() => onOptionPress(this)} className="option">
                <i className="bx bxl-instagram-alt"></i>
                <span className="option-text">Instagram</span>
                </li>
                <li onClick={() => onOptionPress(this)} className="option">
                <i className="bx bxl-linkedin-square" ></i>
                <span className="option-text">Linkedin</span>
                </li>
                <li onClick={() => onOptionPress(this)} className="option">
                <i className="bx bxl-facebook-circle" ></i>
                <span className="option-text">Facebook</span>
                </li>
                <li onClick={() => onOptionPress(this)} className="option">
                <i className="bx bxl-twitter" ></i>
                <span className="option-text">Twitter</span>
                </li>
            </ul>

            <div onClick={onSelectBtn} className="select-btn">
                <span className="sBtn-text">{title}</span>
                <i className="bx bx-chevron-down"></i>
            </div>


            
        </div>
    )
}