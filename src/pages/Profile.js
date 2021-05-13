import userEvent from '@testing-library/user-event';
import React from 'react';
import {useParams} from 'react-router-dom';

export default function Profile(){

    let { id } = useParams();

    return (

       <div className="container">

            <h1>{id}</h1>


       </div>


    )



}