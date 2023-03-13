import "./Modal.css";
import { useState, useEffect } from "react";

const Modal = () => {
  const [modal, setModal] = useState(false);
  const [studentsInfo, setStudentsInfo] = useState([]);
  const [loaded, setLoaded] = useState(false);
  //const dialogRef = useRef(null);

  const getStudentsInfo = async () => {
      const res = await fetch('https://640af0b565d3a01f980b5d9d.mockapi.io/students');
      const data = await res.json();
      setStudentsInfo(data);
      setLoaded(true); 
    };


    useEffect(() => {
      getStudentsInfo();
  },[]);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <>
    <button className="btn-modal" onClick={toggleModal}><img src="https://res.cloudinary.com/ddu2qdsdp/image/upload/v1678542727/Ucademy/information-circle-outline_cobzzd.png" alt="info icon"/></button>


      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay">fgfg</div>
          <div className="modal-content">
            <h2>Hello Modal</h2>
            <p>Nombre y apellidos</p>
            <p>{studentsInfo[0].fullName}</p>
            <button className="close-modal" onClick={toggleModal}>
              CLOSE
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;