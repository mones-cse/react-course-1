import React from 'react'
const UserInput = (props) =>{
    return(
        <input type="text" value={props.name} onChange={e=>props.changeName(e.target.value)}/>
    )
}

export default UserInput;