import React from "react"

const Register = () => {
    return (
        <div className="FormContainer"> 
            <div className="FormWrapper">
                <span className="Logo"> Turing's Chatroom </span>
                <span className="Title">輸入您的資料</span>
                <form action="">
                    <input type="text" placeholder="暱稱"/>
                    <input type="email" name="" id="" placeholder="Email"/>
                    <input type="password" name="" id="" placeholder="密碼"/>
                    <button type="submit">開始</button>
                </form>
            </div>
        </div>
    )
}

export default Register;