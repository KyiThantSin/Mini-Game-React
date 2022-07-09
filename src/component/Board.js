import { Container, Row, Col, Button } from "react-bootstrap";
import Square from "./Square";
import { useState } from "react";

const Board = () => {
   const initialState = new Array(9).fill(null);
   const [squares, setSquares] = useState(initialState);
   const [player, setPlayer] = useState(true);

   //play
   const onClickEvent = (id) =>{
    const newSquares = [...squares];

    const winnerDecleared = Boolean(calculateResult(newSquares));
    const squaredFilled = Boolean(newSquares[id])

    if(winnerDecleared || squaredFilled){
        return;
    }

    newSquares[id] = player ? 'X' : 'O';

    setSquares(newSquares);
    setPlayer(!player)
    //console.log(newSquares)
}

   const renderSquare = (id) =>{
       return (
           <Square value={squares[id]}
                   onClickEvent={()=>onClickEvent(id)}/>
       )
   }
   //calculate winner 
   function calculateResult(square){
       const lines = [
           [0,1,2],[3,4,5],[6,7,8],
           [0,3,6],[1,4,7],[2,5,8],
           [0,4,8],[2,4,6]
       ];

       for (let line of lines){
           const [a,b,c] = line;

           if(square[a] && square[a] === square[b] && square[a] === square[c]){
                return square[a]; // X or O
           }
       }
       return null;
   }
   
   const winner = calculateResult(squares)
   const status =  winner ? `Winner: ${winner}` : `Next Player:  ${ player ? "X" : "O"}`
   
   //play again
   const onRefresh = (e) =>{
       e.preventDefault();
       setSquares(initialState);
   }

   return ( 
        <Container className="p-4">

            <h2 style={{textAlign:"center"}}>Tic-Tac-Toe</h2>

            <Row>
                <Col md={8} >
                    <h3 className="mt-4">
                        {status}
                    </h3>
                </Col>

                <Col md={4} >
                    <Button variant="light"
                            onClick={onRefresh}
                    >
                        <img src={require("../icons/refresh.png")} alt="refresh" className="p-2"/>
                         Play Again
                    </Button>
                </Col>
            </Row>

            <div style={{border:"1px solid #999797"}} 
                className="p-1 mt-3">
                <Row className="m-0 mt-4">
                    <Col md={4} xs={4}>
                       {renderSquare(0)}
                    </Col>
                    <Col md={4} xs={4}>
                        {renderSquare(1)}
                    </Col>
                    <Col md={4} xs={4}>
                       {renderSquare(2)}
                    </Col>
                </Row>

                <Row className="m-0">
                    <Col md={4} xs={4}>
                        {renderSquare(3)}
                    </Col>
                    <Col md={4} xs={4}>
                        {renderSquare(4)}
                    </Col>
                    <Col md={4} xs={4}>
                        {renderSquare(5)}
                    </Col>
                </Row>

                <Row className="m-0">
                    <Col md={4} xs={4}>
                        {renderSquare(6)}
                    </Col>
                    <Col md={4} xs={4}>
                        {renderSquare(7)}
                    </Col>
                    <Col md={4} xs={4}>
                        {renderSquare(8)}
                    </Col>
                </Row>
            </div>

        </Container>
     );
}
 
export default Board;