import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

const CreateArea = (props)=>{
    const [isExpanded, setIsExpanded] = useState(false)
    const [note, setNote] = useState({
        title: "",
        content: ""
    })

    function handleChange(event){
        const {name, value} = event.target
        setNote((prevValue)=>{
            return {
                ...prevValue,
                [name] : value
            }
        })
    }

    function expanded(){
        setIsExpanded(true)
    }

    function submitNote(event){
        props.onAdd(note)
        setNote({
            title: "",
            content: ""
        })
        event.preventDefault();
    }
    return(
        <div>
            <form className="create-note">
                {isExpanded && <input value={note.title} placeHolder="Title" name="title" onChange={handleChange}/>}
                <textarea onClick={expanded} value={note.content} placeHolder="Take a note" name="content" onChange={handleChange} rows={isExpanded ? 3 : 1}/>
                <Zoom in={isExpanded}>
                    <Fab onClick={submitNote}>
                        <AddIcon/>
                    </Fab>
                </Zoom>
            </form>
        </div>
    )
}

export default CreateArea