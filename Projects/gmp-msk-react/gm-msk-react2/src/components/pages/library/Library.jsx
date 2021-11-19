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

  const albumArt = siteData[0].albumArt
  // const albumImage = albumArt.map(item=>item)
  const albumImage = function (albumArt){
    for (let i = 0; i < siteData[i].albumArt.length; i++) {
      return <img src={siteData[i].albumArt[i]} />
   
    }
  }
  // albumImage()
 
  const deleteHandler = () => {
    setModal(true);
  };
  const closeModalHandler = () => {
    setModal(false);
  };
  const getAlbum = siteData[0].releases.map((album, index) => (
    <li key={index}>
      {albumImage()}
      <h3>{album.albumName}</h3>
      <div className="actions">
        <button  onClick={deleteHandler}>
          Check Tracks
        </button>
      </div>
    </li>
  ));

  return (
    
      <div className="library_view">
        <h2>Beats Library</h2>
      <ul className="album_view">{getAlbum}</ul>
    
        {modal && (
          <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler}>
            <Album />
          </Modal>
        )}
        {modal && <Backdrop onClick={closeModalHandler} />}
      </div>
    
  );
};

export default Library;
