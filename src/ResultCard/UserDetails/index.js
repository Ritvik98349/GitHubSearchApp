import { Modal } from "@mui/material";
import React from "react";
import styles from "./styles.module.css";
import { BsTwitterX } from "react-icons/bs";
import { MdMarkEmailUnread } from "react-icons/md";
import { FaBloggerB } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

function UserDetails({ userId = "", setUserId = () => {}, userData = {} }) {
  const {
    avatar_url = "",
    name = "",
    bio = "",
    followers = "",
    following = "",
    twitter_username = "",
    email = "",
    blog = "",
  } = userData || {};

  const handleClose = () => setUserId("");

  if (userData === {} || userData?.bio === "...loading")
    return (
      <Modal
        open={userId !== ""}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <div className={styles.modal}>...loading</div>
      </Modal>
    );

  return (
    <Modal
      open={userId !== ""}
      onClose={handleClose}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
    >
      <div className={styles.modal}>
        <div className={styles.header}>
          <IoMdClose
            style={{ height: "20px", width: "20px" }}
            onClick={handleClose}
          />
        </div>

        <div className={styles.img_container}>
          <img src={avatar_url} alt="profile pic" className={styles.img} />
        </div>

        <div className={`${styles.flex} ${styles.margin} ${styles.value}`}>
          {name}
        </div>

        <div className={styles.bio}>{bio}</div>

        {email ? (
          <div className={`${styles.align_center} ${styles.margin}`}>
            <MdMarkEmailUnread
              style={{ height: "20px", width: "20px", marginRight: "8px" }}
            />
            {email}
          </div>
        ) : null}

        {blog ? (
          <div className={`${styles.align_center} ${styles.margin}`}>
            <FaBloggerB
              fill="#e96633"
              style={{ height: "20px", width: "20px", marginRight: "8px" }}
            />
            {blog}
          </div>
        ) : null}

        {twitter_username ? (
          <div className={`${styles.align_center} ${styles.margin}`}>
            <BsTwitterX
              style={{ height: "20px", width: "20px", marginRight: "8px" }}
            />
            {twitter_username}
          </div>
        ) : null}

        <div className={styles.extras}>
          <span className={styles.pill}>{followers} - followers</span>
          <span className={styles.pill}>{following} - following</span>
        </div>
      </div>
    </Modal>
  );
}

export default UserDetails;
