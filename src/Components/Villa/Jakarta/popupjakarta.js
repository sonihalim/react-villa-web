import React from "react";
import "../Style/popup.css";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

function Popupjakarta(props) {
    return (props.trigger) ? (
        <div className="popup fixed color-bg-popup z-50 flex justify-center items-center left-0 right-0 top-0 bottom-0 overflow-y-auto">
            <div className="popup-inner">
                <button className="close-btn text-white text-xl absolute right-20 top-20" onClick={() => props.setTrigger(false)}>Close</button>
                <div className="flex flex-wrap justify-center items-center gap-4 p-10 mt-20">
                <Lightbox
                 open={props.buttonPopup}
                 close={() => props.setButtonPopup(false)}
                 slides={[
                   { src: "./img/Bintaro/1.png" },
                   { src: "./img/Bintaro/1.png" },
                   { src: "./img/Bintaro/1.png" },
                 ]}
               />
                    {/* <img className="w-48 h-48" src="./img/Bintaro/1.png"></img>
                    <img className="w-48 h-48" src="./img/Bintaro/2.jpg"></img>
                    <img className="w-48 h-48" src="./img/Bintaro/3.jpg"></img>
                    <img className="w-48 h-48" src="./img/Bintaro/4.jpg"></img>
                    <img className="w-48 h-48" src="./img/Bintaro/5.jpg"></img>
                    <img className="w-48 h-48" src="./img/Bintaro/6.jpeg"></img>
                    <img className="w-48 h-48" src="./img/Bintaro/7.jpg"></img>
                    <img className="w-48 h-48" src="./img/Bintaro/8.jpeg"></img>
                    <img className="w-48 h-48" src="./img/Bintaro/9.jpeg"></img>
                    <img className="w-48 h-48" src="./img/Bintaro/10.jpeg"></img>
                    <img className="w-48 h-48" src="./img/Bintaro/11.jpeg"></img> */}
                </div>
            </div>
        </div>
    ) : "" ;
}

export default Popupjakarta