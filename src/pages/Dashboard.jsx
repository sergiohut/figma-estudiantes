import "./Dashboard.css"
import { useState, useEffect, useRef } from "react"
import Spinner from "../components/Spinner";
import Navigation from "../components/Navigation";
;

const Dashboard = () =>{
    const [studentsInfo, setStudentsInfo] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [modal, setModal] = useState(false);
    //const dialogRef = useRef(null);

    const getStudentsInfo = async () => {
        const res = await fetch('https://640af0b565d3a01f980b5d9d.mockapi.io/students');
        const data = await res.json();
        setStudentsInfo(data);
        setLoaded(true); 
      };

    const toggleModal = () => {
        setModal(!modal);
      };

      useEffect(() => {
        getStudentsInfo();
    },[]);


    return (
        <main>
            <Navigation/>
            <div className="content">
            <button className="newStudentBtn"> <img src="https://res.cloudinary.com/ddu2qdsdp/image/upload/v1678467152/Ucademy/image_a0gadq.png" alt="add icon"/> Nuevo estudiante </button>
            <div className="table">
            <div className="tableHeadings">
                <p>Conexión</p>
                <p>Nombre y apellidos</p>
                <p>Nombre de usuario</p>
                <p>Email</p>
                <p>Móvil</p>
            </div>
            <div>
            {loaded? (studentsInfo.map((student) => (
            <div className="tableData" key={student.id}>
                <button>{student.connection}</button>
                <p className="tableItem">{student.fullName}</p>
                <p className="tableItem">{student.userName}</p>
                <p className="tableItem">{student.email}</p>
                <p className="tableItem">{student.phoneNumber}</p>
                <button className="btn-modal" onClick={toggleModal}><img src="https://res.cloudinary.com/ddu2qdsdp/image/upload/v1678542727/Ucademy/information-circle-outline_cobzzd.png" alt="info icon"/></button>
                {modal && (
                        <div className="modal">
                        <div onClick={toggleModal} className="overlay"></div>
                        <div className="modal-content">
                            <h2>Hello Modal</h2>
                            <p>Nombre y apellidos</p>
                            <p>{student.id}</p>
                            <button className="close-modal" onClick={toggleModal}>
                            CLOSE
                            </button>
                        </div>
                        </div>
                    )}
            </div>
        ))) : (<Spinner/>)
            }
            </div>
            </div>
            </div>

        </main>
    )
}

export default Dashboard;