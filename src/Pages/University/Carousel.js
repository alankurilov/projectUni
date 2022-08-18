import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
import { useRef, useEffect } from 'react';

function CarEx({imgs}) {
    return (

      <Carousel>
        {imgs.map(img =>{
                return (<Carousel.Item>
                  <img
                    className="d-block w-100 height "
                    src={img}
                    alt="First slide"
                  />
                </Carousel.Item>)
            })

        }
      </Carousel>
    );
  }
  
  export default CarEx;