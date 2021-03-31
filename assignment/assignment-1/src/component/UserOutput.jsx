import React from 'react'
const UserOutput = (props) =>{
    const style ={
        border:"1px solid #aaa",
        margin:"10px 0px",
        boxShadow:"3px 3px 10px #999",
        padding:"15px"
    }
    return(
        <div style={style}>
            <p>Hello {props.userName}</p>
            <p>Welcome</p>
        </div>
    )
}

export default UserOutput;