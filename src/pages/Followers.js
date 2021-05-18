import React, {useState} from "react";
import Lista from "../components/Lista";
import { useParams, useHistory } from "react-router-dom";

const Repos = () => {

  let { username } = useParams();

  let url = "https://api.github.com/users/";

  let userAPI = url + username;

  let followersURL = userAPI + "/followers";

  let pg = "Seguidores";

  function getFoll() {
    let arrayF = [];

    fetch(followersURL)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        data.forEach((dados) => {
          arrayF.push("@" + dados.login);
        });
        setFollowersList(arrayF);
      })
      .catch((err) => console.log(err));
  }

  const [Followerslist, setFollowersList] = useState([]);

  getFoll();

  return (
    <div>
      <Lista pg={pg} items={Followerslist} />
    </div>
  );
};

export default Repos;
