import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

function Slider() {
    return (
        <>
            <Carousel fade indicators={false} className="mt-7 mt-lg-8">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="assets/images/slider/slider_01.jpg"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="assets/images/slider/slider_02.jpg"
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="assets/images/slider/slider_03.jpg"
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </>
    )
}

export default Slider

