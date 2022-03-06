import React from "react";
import CourseCard from "./CourseCard";
import { Container, Row, Col } from "react-bootstrap";
import "./CourseCardGroup.css";
import blockchainImg from '../../asset/blockchainImg.jpg';
import defiImg from '../../asset/defiImg.jpg';
import cryptoImg from '../../asset/cryptoImg.jpg';
import nftImg from '../../asset/nftImg.jpg';
function CourseCardGroup(props) {
  return (
    <>
      <Container className="mainContainer">
        <Row className="row-1" xs={1} md={4}>
          <Col className="col-1" xs={12} md={3}>
            <CourseCard
              title={"Introduction to Blockchain"}
              description={
                "Blockchain Fundamentals for Accounting and Finance Professionals Certificate."
              }
              image={blockchainImg}
            />
          </Col>

          <Col className="col-2" xs={12} md={3}>
            <CourseCard
              title={"Introduction to decentralized finance(DeFi)"}
              description={
                "Learn basics of Defi with smart contracts, ERC-20 tokens, and the Solidity."
              }
              image={defiImg}
            />
          </Col>

          <Col className="col-3" xs={12} md={3}>
            <CourseCard
              title={"Cryptocurrency trading & investment"}
              description={
                "Learn the 'secret' system for trading cryptocurrencies plus all trading strategies."
              }
              image={cryptoImg}
            />
          </Col>

          <Col className="col-4" xs={12} md={3}>
            <CourseCard
              title={"NFTs Essentials Training Course 2022"}
              description={
                "The NFT Essentials course 2022 will teach beginners how to create, buy, and sell NFTs."
              }
              image={nftImg}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default CourseCardGroup;