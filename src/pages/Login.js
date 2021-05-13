import React, { useState } from "react";
import { Redirect } from "react-router";
import Logo from "../assets/github.png";
import {FiArrowRight} from "react-icons/fi";
import {useParams} from 'react-router-dom';

function Login() {

  function fexibir(verifica) {
    if (verifica == "Nenhum usuário foi digitado!") {
      return <p className="warning" style={{ color: "red" }}>{verifica}</p>;
    }

    if (verifica == "Usuário não existe!") {
      return <p className="warning" style={{ color: "red" }}>{verifica}</p>;
    }
  }

  let url = "https://api.github.com/users/";

  function getUser() {
    if (user == "") {
      setVerifica("Nenhum usuário foi digitado!");
      fexibir(verifica);
      return;
    }

    let userVerify = url + user;

    fetch(userVerify)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data.message === "Not Found") {
          setVerifica("Usuário não existe!");
          fexibir(verifica);
        } else {
            setVerifica(data.name);
            console.log(data.name);
            setRenderi(true);
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  function handleUser(e) {
    setUser(e.target.value);
  }

  const [user, setUser] = useState("");
  const [verifica, setVerifica] = useState("");
  const [renderi, setRenderi] = useState(false);

  if (renderi){
    let id = user;
    return <Redirect push to = {{pathname: "/profile/:id", state: id}}/>
  }

  return (
    <div className="container">
      {fexibir(verifica)}
      <img src={Logo} />
      <input
        placeholder="Usuário"
        type="text"
        className="inputUser"
        onChange={handleUser}
      ></input>
      <button className="btn" onClick={getUser}>
        Entrar <FiArrowRight style={{fontSize: 18, marginLeft: 5}}/>
      </button>
    </div>
  );
}

export default Login;
