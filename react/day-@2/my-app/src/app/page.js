
"use client"
import { Col, Container, Row } from "react-bootstrap";
import Header from "./comman/Header";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from "axios";
import { useEffect, useState } from "react";
import Image from "next/image";
import mypic from "../../public/HP_MOBILE_375x575_623ddd8a-0ef0-4b5b-aaa5-95fdd0f3f229_1536x.jpg"

export default function Home() {
const [allData,setAllData]=useState([])

console.log(allData)
  let displayData=()=>{
    axios.get("https://dummyjson.com/products")
    .then((ress)=>{
      setAllData(ress.data.products)
    })
    .catch((error)=>{
      console.log(error)
    })
  }

  useEffect(()=>{
    displayData()
  },[])
  
  return (
    <>
      <Container>
        <Row md={4} >

          {allData.map((v,i)=>{
            console.log(v)
            return(
              <>
              <Col>
            <Card >
              <Card.Img variant="top" src={v.thumbnail} />
              {/* <Image src={v.thumbnail} width={200}  height={200} /> */}
              {/* <Image src={mypic} width={200}  height={200} /> */}
              <Card.Body>
                <Card.Title> {v.title} </Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>

              </>
            )
          })}
          
          
        </Row>
      </Container>

    </>
  );
}
