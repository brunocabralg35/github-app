import React, {useState} from "react";
import Lista from "../components/Lista";
import { useParams, useHistory } from "react-router-dom";

const Repos = () => {

  let { username } = useParams();

  let url = "https://api.github.com/users/";

  let userAPI = url + username;

  let reposURL = userAPI + "/repos";

  function getRepos() {
    let arrayF = [];

    fetch(reposURL)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        data.forEach((dados) => {
          arrayF.push("#" + dados.name);
        });
        setReposList(arrayF);
      })
      .catch((err) => console.log(err));
  }

  const [Reposlist, setReposList] = useState([]);

  getRepos();

  return (
    <div>
      <Lista items={Reposlist} />
    </div>
  );
};

export default Repos;
