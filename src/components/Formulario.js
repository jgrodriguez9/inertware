import { Button, Col, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Formulario(props){
    return(
        <Form onSubmit={props.handleSubmit}>
            <Row>
                <Col xs="12" md="4">
                    <Form.Group>
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control 
                            type="text"
                            value={props.name}
                            onChange={e=>props.setName(e.target.value)}
                        />
                    </Form.Group>
                </Col>
                <Col xs="12" md="4">
                    <Form.Group>
                        <Form.Label>Especie</Form.Label>
                        <Form.Control 
                            type="text"
                            value={props.especie}
                            onChange={e=>props.setEspecie(e.target.value)}
                        />
                    </Form.Group>
                </Col>
                <Col xs="12" md="4">
                    <Form.Group>
                        <Form.Label>Estado</Form.Label>
                        <Form.Control 
                            type="text"
                            value={props.estado}
                            onChange={e=>props.setEstado(e.target.value)}
                        />
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button variant="dark" type="submit" size="sm">Aceptar</Button>{' '}
                    <Link to="/" className="btn btn-danger btn-sm">Cancelar</Link>
                </Col>
            </Row>
        </Form>
    )



}