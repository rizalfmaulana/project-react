import React, { useState } from "react"
import InputArea from "./InputArea"
import TodoItem from "./TodoItem"

const TodoList = ()=>{
    const [items, setItems]= useState([])

    function addItem(inputText){
        setItems((prevItems)=>{
            return [...prevItems, inputText]
        })  
    }

    function deleteItem(id){
        setItems((prevItems)=>{
            return prevItems.filter((item, index)=>{
                return index !==id
            })
        })
    }

    return(
        <div className="container">
            <div className="heading">
                <h1>To-Do List</h1>
            </div>
            <InputArea onAdd={addItem}/>
            <div>
                <ul>
                    {items.map((todoItem, index)=>{
                        return <TodoItem key={index} id={index} text={todoItem} onChecked={deleteItem}/>
                    })}
                </ul>
            </div>
        </div>
    )
}

export default TodoList