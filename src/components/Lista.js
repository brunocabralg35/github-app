import React from 'react';

const Lista = (props)=>{

    return (
        <div>
            <ul>
                {props.items.map((item) => (
                <div>
                    <li>{item}</li>
                </div> 
            ))}
            </ul>
        </div>
        
    )
}

export default Lista;