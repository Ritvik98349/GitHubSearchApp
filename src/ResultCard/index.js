import styles from "./styles.module.css";
import React, { useState } from "react";
import { CiLocationArrow1 } from "react-icons/ci";
import getUserData from "../hooks/getUserData";
import UserDetails from "./UserDetails";

function ResultCard({ data = {} }) {
  const { items = [] } = data || {};
  const [userData, setUserData] = useState({});
  const [userId, setUserId] = useState("");

  const { getUserDetails = () => {} } = getUserData();

  if (items === []) {
    return <div>No data present for the searched name!!</div>;
  }

  const handleClick = (id, login) => {
    if (userId === id) {
      setUserId("");
    } else {
      setUserData({ bio: "...loading" });
      setUserId(id);
      getUserDetails(login, setUserData);
    }
  };

  return (
    <div className={styles.container}>
      {(items || []).map((item) => {
        const { id = "", login = "", avatar_url = "" } = item || {};

        return (
          <div
            key={id}
            className={styles.card}
            role="presentation"
            onClick={() => handleClick(id, login)}
          >
            <div className={styles.img_container}>
              <img src={avatar_url} alt="profile pic" className={styles.img} />
            </div>
            <div className={styles.details}>
              <div className={styles.user}>{login}</div>
            </div>
            <div className={styles.know_more}>
              Click to know more{" "}
              <CiLocationArrow1 style={{ marginLeft: "8px" }} />
            </div>
          </div>
        );
      })}

      {userId !== "" ? (
        <UserDetails
          userId={userId}
          setUserId={setUserId}
          userData={userData}
        />
      ) : null}
    </div>
  );
}

export default ResultCard;
