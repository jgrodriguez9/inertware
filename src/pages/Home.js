import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ListItem from "../components/ListItem";
import { fetchRickAndMorty } from "../redux/actions";

function Home(){
    let todos = useSelector(store=>store);
    const dispatch = useDispatch();

    useEffect(()=>{
        if(todos.results.length === 0){
            dispatch(fetchRickAndMorty())
        }        
    },[])

    return (
        <Container>
            <Row className="mb-2">
                <Col xs="6" md="8">
                    <h5 className="m-0 text-left">Listado</h5>
                </Col>
                <Col className="text-right" xs="6" md="4">
                    <Link to="/create" className="btn btn-primary btn-sm">Nuevo</Link>
                </Col>
            </Row>
            <ListItem todos={todos.results}/>
        </Container>
        
    )
}

export default Home