import { Container, Row, Col } from "react-bootstrap";
import Square from "./Square";

const Board = () => {
    return ( 
        <Container className="p-4">

            <h2 style={{textAlign:"center"}}>Tic-Tac-Toe</h2>
            <div style={{border:"1px solid #999797"}} 
                className="p-1 mt-5">
                <Row className="m-0 mt-4">
                    <Col md={4} xs={4}>
                        <Square />
                    </Col>
                    <Col md={4} xs={4}>
                        <Square />
                    </Col>
                    <Col md={4} xs={4}>
                        <Square />
                    </Col>
                </Row>

                <Row className="m-0">
                    <Col md={4} xs={4}>
                        <Square />
                    </Col>
                    <Col md={4} xs={4}>
                        <Square />
                    </Col>
                    <Col md={4} xs={4}>
                        <Square />
                    </Col>
                </Row>

                <Row className="m-0">
                    <Col md={4} xs={4}>
                        <Square />
                    </Col>
                    <Col md={4} xs={4}>
                        <Square />
                    </Col>
                    <Col md={4} xs={4}>
                        <Square />
                    </Col>
                </Row>
            </div>

        </Container>
     );
}
 
export default Board;