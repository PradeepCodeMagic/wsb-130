
import { Col, Container, Row } from 'react-bootstrap'
import './App.css'
import Footer from './comman/Footer'
import Header from "./comman/Header"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function App() {


  return (
    <>
      <Header />
      <section>
        <Container fluid className='border'>
          <Container>
            <Row  >
              <Col md={3} xs={9} >
                <Card >
                  <Card.Img variant="top" src="https://i.pinimg.com/564x/04/37/fe/0437fe937fe23f27d4e0ba507327fbc3.jpg" />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </Col>

              <Col md={9} xs={3}>
                <Card >
                  <Card.Img variant="top" src="https://i.pinimg.com/564x/04/37/fe/0437fe937fe23f27d4e0ba507327fbc3.jpg" />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </Col>

              

              
            </Row>
          </Container>
        </Container>
      </section>

      <Footer />
    </>
  )
}

export default App
