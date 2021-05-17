import React from 'react';
import Animac from "../assets/notFoundGit.gif";
import {useHistory} from 'react-router-dom';

export default function PageNotFound(){

    let history = useHistory();

    return (

        <div className="NotFound">
            <h1 className="NotFoundText">Página não encontrada</h1>
            <img className="NotFoundImg" src={Animac}/>

            <button className="BackBtn" onClick={()=>{
                history.push('/');
            }}>Home</button>

        </div>

        

    )


}