import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import Formulario from "../components/Formulario";
import { updateTodo } from "../redux/actions";

export default function FormEdit(){
    const {id} = useParams()
    const [loading, setLoading] = useState(true)
    const dispatch = useDispatch()
    const items = useSelector(state=>state)
    const [name, setName] = useState('')
    const [especie, setEspecie] = useState('')
    const [estado, setEstado] = useState('')
    const history = useHistory()


    useEffect(()=>{
        setLoading(true)
        let arr = [...items.results]
        let item = arr.filter(el=>el.id===parseInt(id))
        setName(item[0].name)
        setEspecie(item[0].species)
        setEstado(item[0].status)
        setLoading(false)
    },[])

    const handleSubmit = e =>{
        e.preventDefault()
        dispatch(updateTodo({
            id: id,
            name: name,
            species: especie,
            status: estado
        }))
        history.replace("/")
    }




    return (
        <Container>
            <Row>
                {
                    loading ? 
                    <Col>
                        <h6>Cargando</h6>
                    </Col> :
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
                }                
            </Row>
        </Container>
    )
}