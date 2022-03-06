import React from 'react';
import './Grid.css';
import {Container, Row, Col} from 'react-bootstrap';
import { useState, useEffect } from 'react';
import natureImg1 from '../../asset/nature1.jpg'
import waterfall from '../../asset/waterfall.mp4'
import giraffeImg from "../../asset/giraffe.jpg"
function Grid() {


const [width, setWidth]   = useState(window.innerWidth);

const updateDimensions = () => {
    setWidth(window.innerWidth);
    
}
useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
}, []);

let x, eBlock, dBlock; 
const mdSize = 768;
let container_width = '80';

x = (width * parseInt(container_width)/100)/6;
if(width>mdSize){
 
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
    <Col xs={12}  md ={6} style={{ height: x*2+ 'px' }} ><div className='box'> <img className='natureImg1' src={natureImg1} alt=""/></div></Col>
    <Col xs={12} md ={6} style={{ height: x*2+ 'px'}} >
      <div className='box'>
        <div className='Save-the-nature'>
        <h1>Save the nature</h1>
        <p>At Saving Nature, we restore links between fragmented habitats to help rescue endangered and threatened species from extinction. In addition, the forests we create help fight climate change. As the native trees in our wildlife corridors grow back, they absorb carbon dioxide and create oxygen.</p>
        </div>
        </div>
        </Col>
  </Row>

  <Row >
    <Col md ={4}>
       <Row>
       <Col  xs={12} md ={12} style={{ height: x+ 'px'}}><div className='box'><p className='future-nature'>A future in which people and nature thrive together. Science shows us this vision of the future is achievable, and we must join together and put all our effort into the big priorities that will make this vision a reality. </p></div></Col>
        </Row> 
        <Row>
        <Col  xs={12} md ={12} style={{ height: eBlock+ 'px'}}><div className='box'></div></Col>
        </Row> 
    </Col>
    <Col md ={8}>
    <Row>
       <Col xs={12} md ={12} style={{ height: dBlock+ 'px'}} ><div className='box'> <video className='waterfall' autoPlay loop controls >
  <source  autoPlay={"autoplay"} src={waterfall} type="video/mp4"/>
 
</video></div></Col>
        </Row> 
        <Row>
        <Col xs={6} md ={6} style={{ height: x*4 + 'px'}} ><div className='box'><p className='wildlife-text'><strong>Wildlife</strong> traditionally refers to undomesticated animal species, but has come to include all organisms that grow or live wild in an area without being introduced by humans. Wildlife was also synonymous to game: those birds and mammals that were hunted for sport. Wildlife can be found in all ecosystems. Deserts, forests, rainforests, plains, grasslands, and other areas, including the most developed urban areas, all have distinct forms of wildlife. While the term in popular culture usually refers to animals that are untouched by human factors, most scientists agree that much wildlife is affected by human activities.</p><p className='wildlife-text'>Some wildlife threaten human safety, health, property, and quality of life. However, many wild animals, even the dangerous ones, have value to human beings. This value might be economic, educational, or emotional in nature.</p></div></Col>
        <Col xs={6} md ={6} style={{ height: x*4 + 'px'}}><div className='box'><img className='giraffeImg' src={giraffeImg} alt=""/></div></Col>
        </Row> 
    </Col>
  </Row>

</Container>
  
  );
}

export default Grid;
