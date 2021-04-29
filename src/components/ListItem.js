import { useState } from "react";
import { Button, Col, Modal, Row, Table } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

import 'react-toastify/dist/ReactToastify.css';
import { deleteTodo } from "../redux/actions";

function ListItem({ todos }){
    const [show, setShow] = useState(false);    
    const [idDelete, setIdDelete] = useState('')
    const dispatch = useDispatch()
    const handleClose = () => setShow(false);
    const handleShow = (id) => {
        setIdDelete(id)
        setShow(true)
    };

    const handleEliminar = () =>{
        dispatch(deleteTodo(idDelete))
        toast.success("Eliminado correctamente", {autoClose: 5000})
        setShow(false)
    }


    return (        
            <Row className="align-items-center">
                <ToastContainer />
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>Eliminar</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Seguro que deseas eliminarlo</Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancelar
                    </Button>
                    <Button variant="danger" onClick={handleEliminar}>
                        Eliminar
                    </Button>
                    </Modal.Footer>
                </Modal>
                <Col>
                    <Table responsive bordered>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nombre</th>
                                <th>Especie</th>
                                <th>Estado</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                todos.map((item,i)=>(
                                    <tr key={i}>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.species}</td>
                                        <td>{item.status}</td>
                                        <td width="20%">
                                            <Link to={`edit/${item.id}`} className="btn btn-info btn-sm">Editar</Link>{' '}
                                            <Button variant="danger" size="sm" onClick={e=>handleShow(item.id)}>Eliminar</Button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </Table>
                </Col>
            </Row>
    )
}

export default ListItem