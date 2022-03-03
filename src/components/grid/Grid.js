import React from 'react';
import './Grid.css';
import {Container, Row, Col} from 'react-bootstrap';
import { useState, useEffect } from 'react';
function Grid() {


const [width, setWidth]   = useState(window.innerWidth);

const updateDimensions = () => {
    setWidth(window.innerWidth);
    
}
useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
}, []);

let x,container_width,eBlock, dBlock; 
container_width = '80';
x = (width * parseInt(container_width)/100)/6;
if(width>768){
 
  eBlock =5*x;
  dBlock = 2*x;
}else{
  container_width = '40';
  eBlock =x;
  dBlock = 6*x;
}

  return (
<Container style={{ width: container_width+'%' }}>
  <Row >
    <Col xs={12}  md ={6} style={{ height: x*2+ 'px' , backgroundColor: "#1589FF"}} ></Col>
    <Col xs={12} md ={6} style={{ height: x*2+ 'px', backgroundColor: '#368BC1'}} ></Col>
  </Row>

  <Row >
    <Col md ={4}>
       <Row>
       <Col  xs={12} md ={12} style={{ height: x+ 'px', backgroundColor: '#87AFC7'}}></Col>
        </Row> 
        <Row>
        <Col  xs={12} md ={12} style={{ height: eBlock+ 'px', backgroundColor: '#38ACEC'}}></Col>
        </Row> 
    </Col>
    <Col md ={8}>
    <Row>
       <Col xs={12} md ={12} style={{ height: dBlock+ 'px', backgroundColor: '#87CEEB'}} ></Col>
        </Row> 
        <Row>
        <Col xs={6} md ={6} style={{ height: x*4 + 'px', backgroundColor: '#151B8D'}} ></Col>
        <Col xs={6} md ={6} style={{ height: x*4 + 'px', backgroundColor: '#00008B'}}></Col>
        </Row> 
    </Col>
  </Row>

</Container>
  
  );
}

export default Grid;
