import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import Formulario from "../components/Formulario";
import { addTodo } from "../redux/actions";

export default function FormItem(){
    const [name, setName] = useState('')
    const [especie, setEspecie] = useState('')
    const [estado, setEstado] = useState('')
    const dispatch = useDispatch()
    const history = useHistory();

    const handleSubmit = e =>{
        e.preventDefault()
        dispatch(addTodo({
            name: name,
            species: especie,
            status: estado
        }))
        history.replace("/")
    }

    return (
        <Container>
            <Row>
                <Col>
                    <Formulario 
                        name={name}
                        setName={setName}
                        especie={especie}
                        setEspecie={setEspecie}
                        estado={estado}
                        setEstado={setEstado}
                        handleSubmit={handleSubmit}
                    />
                </Col>
            </Row>
        </Container>
    )
}

