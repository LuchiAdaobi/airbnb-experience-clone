import React from "react";

export default function Joke(props){
    console.log(props.isPun)
    return(
        <div>
            {/* <h3 style={{display: props.setup ? 'block' : 'none'}}> Setup: {props.setup}</h3> */}
            {/* {props.setup ? <h3> Setup : {props.setup} </h3> : null } */}
            {props.setup && <h3> Setup: {props.setup}</h3>}
            <p>Punchline : {props.punchline}</p>
            <hr />
        </div>
    )
}