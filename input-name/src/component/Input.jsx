import React, { useState } from "react"

const Input = ()=>{
    const [contact, setContact]= useState({
        fName: "",
        lName: "",
        email: ""
    })

    function handleChange(event){
        const {name, value} = event.target
        
        setContact((prevValue)=>{
            return {
                ...prevValue,
                [name]: value
            }
        })
        
    }
    return(
        <div className="container">
            <h1>Hello {contact.fName} {contact.lName}</h1>
            <p>{contact.email}</p>
            <form>
                <input
                    name="fName"
                    placeHolder="First Name"
                    onChange={handleChange}
                    value={contact.fName}
                />
                <input
                    name="lName"
                    placeHolder="Last Name"
                    onChange={handleChange}
                    value={contact.lName}
                />
                <input
                    name="email"
                    placeHolder="Email"
                    onChange={handleChange}
                    value={contact.email}
                />
                <button>
                    Submit
                </button>
            </form>
        </div>
    )
}

export default Input