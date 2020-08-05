import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import { Button } from 'react-bootstrap'

function Carousels() {

  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block "
          style={{ width: 1232, height: 700 }}
          src="https://cdn.baania.com/b10/property-project/14672/photo/3546121.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
        <Button variant="success" size="lg" block>
          สมัครรับทุน
        </Button>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block "
          style={{ width: 1232, height: 700 }}
          src="https://rattakornblog.files.wordpress.com/2017/03/rmutr-kkw-e0b8a1e0b8abe0b8b2e0b8a7e0b8b4e0b897e0b8a2e0b8b2e0b8a5e0b8b1e0b8a2e0b980e0b897e0b884e0b982e0b899e0b982e0b8a5e0b8a2e0b8b5e0b8a34.jpg?w=1000"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block "
          style={{ width: 1232, height: 700 }}
          src="https://rattakornblog.files.wordpress.com/2017/03/ba-rmutr-kkw-e0b8a1e0b8abe0b8b2e0b8a7e0b8b4e0b897e0b8a2e0b8b2e0b8a5e0b8b1e0b8a2e0b980e0b897e0b884e0b982e0b899e0b982e0b8a5e0b8a2e0b8b51.jpg?w=1000"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carousels