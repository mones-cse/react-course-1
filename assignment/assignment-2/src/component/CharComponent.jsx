import React from 'react';

const CharComponent = (props) => {
    const style = {
        display: "inline-block",
        padding: "16px",
        textAlign: "center",
        margin: "16px",
        border: "1px solid black"
    }
    return (
        <div>
            {props.currentText.split('').map((char,index)=>
                <div style={style} key={index} onClick={()=>props.click(index)}>{char}</div>
            )}
        </div>
    );
};

export default CharComponent;