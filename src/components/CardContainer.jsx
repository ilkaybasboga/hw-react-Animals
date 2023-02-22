import { useState } from "react";
import { Col, Container, Row ,Form} from "react-bootstrap";
import { data } from "../helpers/data";
import AnimalCard from "./AnimalCard";

const CardContainer = () => {
    const [input, setInput] = useState("")

  return (
    <>
    <Form.Control onChange={(e)=>setInput(e.target.value)} placeholder="Search Animal" className="w-50 m-auto" type="search"/>
      <Container className="card-container rounded-4 my-3 p-3 bg-warning">
        <Row className="g-3 justify-content-center">
          {data.filter((animal)=>animal.name.toLocaleLowerCase().includes(input.trim().toLocaleLowerCase())).map((item, index) => (
            <Col md={6} lg={4} xl={3} key={index}>
              <AnimalCard {...item} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default CardContainer;
