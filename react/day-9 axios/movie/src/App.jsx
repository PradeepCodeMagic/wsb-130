
import { Col, Container, Row } from 'react-bootstrap'
import './App.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { useEffect, useState } from 'react';
import ResponsivePagination from 'react-responsive-pagination';
import 'react-responsive-pagination/themes/classic.css';

function App() {

  const [movieData, setMovieData] = useState([])
  const [inputValue, setInputValue] = useState(null)

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 20;

  let displayData = () => {

    let Api;

    if (inputValue == null || inputValue=="" ) {
      
      Api = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=${currentPage}`
    }
    else {
      Api = `https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=${inputValue}`
    }

    axios.get(Api)

      .then((ress) => {
        setMovieData(ress.data.results)
      })
      .catch((error) => {
        console.log(error.message)
      })
  }


  useEffect(() => {
    displayData()
  }, [inputValue ,currentPage ])

  // ////////////////////////////////////////////
  

  return (
    <>
      <Container>
        <h2 className='pt-2' > Movie App </h2>
        <div className='py-3'>
          <input type='text' placeholder='Search Movie' value={inputValue} onChange={(e) => setInputValue(e.target.value)} className='w-100 p-2' />
        </div>

        <Row lg={4} md={3} xs={2} >

          {movieData.map((v) => {
            return (
              <>
                <Col className='my-2' >
                  <Card style={{ height: "600px" }} >
                    <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w1280${v.poster_path}`} className='myImg' />
                    <Card.Body>
                      <Card.Title> {v.title} </Card.Title>
                      <Card.Text>
                        {v.release_date}
                      </Card.Text>
                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                  </Card>
                </Col>

              </>
            )
          })}




        </Row>

        <div className='py-5'>
          <ResponsivePagination
            current={currentPage}
            total={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      </Container>
    </>
  )
}

export default App
