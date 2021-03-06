import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
import load from "../assets/loading.gif";

export default function Profile() {
  let history = useHistory();
  let { username } = useParams();

  let url = "https://api.github.com/users/";

  let userAPI = url + username;

  function showOn() {
    fetch(userAPI)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setAvatar(data.avatar_url);
        setNome(data.name);
        setEmail(data.login + "@gmail.com");
        setLocation(data.location);
        setFollowing(data.following);
        setFollowers(data.followers);
        setRepos(data.public_repos);
        setBio(data.bio);
        setLogin(data.login);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const [avatar, setAvatar] = useState("");
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [following, setFollowing] = useState("");
  const [followers, setFollowers] = useState("");
  const [repos, setRepos] = useState("");
  const [bio, setBio] = useState("");
  const [login, setLogin] = useState("");

  showOn();

  function verificaDados(dado) {
    if (dado === null) {
      return false;
    } else {
      return true;
    }
  }

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 2000);
  }, []);

  return (
    <div className="container-profile">
      <img className={loading ? "animacao hide" : "animacao"} src={load}></img>
      <div className={loading ? "bloco" : "hide"}>
        <div className="header mb">
          <p className="header-login text">#{login}</p>
          <button
            className="header-button text"
            onClick={() => {
              history.push("/");
            }}
          >
            Sair <FiLogOut className="header-icon" />
          </button>
        </div>
        <img className="avatar-img" src={avatar} />

        <div className="section1">
          <div className="nome-user text title mb">
            {verificaDados(nome) ? nome : "Sem nome."}
          </div>
          <div className="email-user text mb">
            {verificaDados(email) ? email : "Sem email."}
          </div>
          <div className="location-user text mb">
            {verificaDados(location) ? location : "Sem localiza????o."}
          </div>
        </div>

        <div className="section2">
          <div className="box" onClick={()=>{
            history.push(`/followers/${username}`)
          }}>
            <div className="seguidores-user text boxtext">{followers}</div>
            <p className="box text">Seguidores</p>
          </div>

          <div className="box" onClick={()=>{
            history.push(`/following/${username}`)
          }}>
            <div className="seguindo-user text boxtext">{following}</div>
            <p className="box text">Seguindo</p>
          </div>

          <div className="box" onClick={()=>{
            history.push(`/repos/${username}`)
          }}>
            <div className="repos-user text boxtext">{repos}</div>
            <p className="box text">Reposit??rios</p>
          </div>
        </div>

        <div className="section3">
          <h1 className="title text mb">BIO</h1>
          <p className="bio-user text">
            {verificaDados(bio) ? bio : "Sem conte??do na BIO."}
          </p>
        </div>
      </div>
    </div>
  );
}
