import React from "react";
import { Button, Modal, Carousel } from "react-bootstrap";

function Vitrine() {
  const [show, setShow] = React.useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="success" onClick={handleShow}>
        Vitrine des étudiants
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Carousel className="carousel">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/images/vitrine/alexander-murdoch-02.jpg"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/images/vitrine/andi-edirisinghe-01.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/images/vitrine/Anne_Palm_01.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/images/vitrine/RENDU-3D-C-ANIS-1.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/images/vitrine/RENDU-3D-C-ORIGAN.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/images/vitrine/RENDU-3D-MIO-SALON.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/images/vitrine/RENDU-3D-SEK-03.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/images/vitrine/RENDU-3D-SEK.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/images/vitrine/URBANCAPITAL_LEMAYMICHAUD_FACE_EDMONTON.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/images/vitrine/URBANCAPITAL_LEMAYMICHAUD_PODIUM_EDMONTON.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </Modal>
    </>
  );
}

export default Vitrine;
