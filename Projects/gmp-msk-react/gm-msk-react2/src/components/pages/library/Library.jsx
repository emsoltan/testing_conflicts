import React, { useState, useContext } from "react";
import MyContext from "../../../context/MyContext";
import Album from "../album/Album";
import Modal from "../../ui/Modal";
import Backdrop from "../../ui/Backdrop";
import "./Library.css";
const Library = () => {
  const context = useContext(MyContext);
 const {siteData} = context;
  const [modal, setModal] = useState(false);
  const deleteHandler = () => {
    setModal(true);
  };
  const closeModalHandler = () => {
    setModal(false);
  };
  const getAlbum = siteData[0].releases.map((album, index) => (
    <li key={index}>{album.albumName}</li>
  ));
  console.log(getAlbum);

  return (
    <>
      <div className="library_view">
        <ul className="album_view">{getAlbum}</ul>
        <div className="actions">
          <button className="btn" onClick={deleteHandler}>
            Check Tracks
          </button>
        </div>
        {modal && (
          <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler}>
            <Album />
          </Modal>
        )}
        {modal && <Backdrop onClick={closeModalHandler} />}
      </div>
    </>
  );
};

export default Library;
