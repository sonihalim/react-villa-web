import React from "react";
import "../Style/popup.css";

function Popupbogor(props) {
    return (props.trigger) ? (
        <div className="popup fixed color-bg-popup z-50 flex justify-center items-center left-0 right-0 top-0 bottom-0 overflow-y-auto">
            <div className="popup-inner">
                <button className="close-btn text-white text-xl absolute right-20 top-20" onClick={() => props.setTrigger(false)}>Close</button>
                <div className="flex flex-wrap justify-center items-center gap-4 p-10 mt-96">
                    <img className="w-48 h-48" src="./img/IMG20221116113316.jpg"></img>
                    <img className="w-48 h-48" src="./img/IMG20221116113316.jpg"></img>
                    <img className="w-48 h-48" src="./img/IMG20221116113316.jpg"></img>
                    <img className="w-48 h-48" src="./img/IMG20221116113316.jpg"></img>
                    <img className="w-48 h-48" src="./img/IMG20221116113316.jpg"></img>
                    <img className="w-48 h-48" src="./img/IMG20221116113316.jpg"></img>
                    <img className="w-48 h-48" src="./img/IMG20221116113316.jpg"></img>
                    <img className="w-48 h-48" src="./img/IMG20221116113316.jpg"></img>
                    <img className="w-48 h-48" src="./img/IMG20221116113316.jpg"></img>
                    <img className="w-48 h-48" src="./img/IMG20221116113316.jpg"></img>
                    <img className="w-48 h-48" src="./img/IMG20221116113316.jpg"></img>
                    <img className="w-48 h-48" src="./img/IMG20221116113316.jpg"></img>
                    <img className="w-48 h-48" src="./img/IMG20221116113316.jpg"></img>
                    <img className="w-48 h-48" src="./img/IMG20221116113316.jpg"></img>
                    <img className="w-48 h-48" src="./img/IMG20221116113316.jpg"></img>
                    <img className="w-48 h-48" src="./img/IMG20221116113316.jpg"></img>
                    <img className="w-48 h-48" src="./img/IMG20221116113316.jpg"></img>
                    <img className="w-48 h-48" src="./img/IMG20221116113316.jpg"></img>
                    <img className="w-48 h-48" src="./img/IMG20221116113316.jpg"></img>
                    <img className="w-48 h-48" src="./img/IMG20221116113316.jpg"></img>
                    <img className="w-48 h-48" src="./img/IMG20221116113316.jpg"></img>
                    <img className="w-48 h-48" src="./img/IMG20221116113316.jpg"></img>
                    <img className="w-48 h-48" src="./img/IMG20221116113316.jpg"></img>
                    <img className="w-48 h-48" src="./img/IMG20221116113316.jpg"></img>
                    <img className="w-48 h-48" src="./img/IMG20221116113316.jpg"></img>
                    <img className="w-48 h-48" src="./img/IMG20221116113316.jpg"></img>
                    <img className="w-48 h-48" src="./img/IMG20221116113316.jpg"></img>
                    <img className="w-48 h-48" src="./img/IMG20221116113316.jpg"></img>
                </div>
            </div>
        </div>
    ) : "" ;
}

export default Popupbogor