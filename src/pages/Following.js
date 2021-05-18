import React, {useState} from "react";
import Lista from "../components/Lista";
import { useParams, useHistory } from "react-router-dom";

const Repos = () => {

  let { username } = useParams();

  let url = "https://api.github.com/users/";

  let userAPI = url + username;

  let followingURL = userAPI + "/following";

  let pg = "Seguindo";

  function getFoll() {
    let arrayF = [];

    fetch(followingURL)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        data.forEach((dados) => {
          arrayF.push("@" + dados.login);
        });
        setFollowingList(arrayF);
      })
      .catch((err) => console.log(err));
  }

  const [Followinglist, setFollowingList] = useState([]);

  getFoll();

  return (
    <div>
      <Lista pg={pg} items={Followinglist} />
    </div>
  );
};

export default Repos;
