import React from 'react';
import { useParams, useHistory } from "react-router-dom";
import { FiCornerUpLeft } from "react-icons/fi";

const Lista = (props)=>{

    let history = useHistory();

    return (
        <div className="container-lista">

            <h1 className="title-repos">{props.pg}</h1>
            <button
            className="lista-button"
            onClick={() => {
              history.goBack();
            }}
          >
            Voltar <FiCornerUpLeft className="lista-icon" />
          </button>

            <ul className="Lista">
                {props.items.map((item) => (
                <div className="card-items">
                    <li className="list-item">{item}</li>
                </div> 
            ))}
            </ul>
        </div>
        
    )
}

export default Lista;