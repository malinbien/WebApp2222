import React from "react";

const Input = () => {
    return (
        <div className="Input">
            <input className="input" type="text" placeholder="跟搭檔說說話吧 !"/>
            <div className="Send">
                <button className="Button">送出</button>
            </div>
        </div>
    )
}

export default Input;