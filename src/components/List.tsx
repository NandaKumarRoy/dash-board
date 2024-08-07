import React from 'react'
import { Card, Col } from 'react-bootstrap'
import { listMenu } from '../data/data.js';


const List = () => {
  return (
    <Col className='col-xl-4 col-lg-5 col-md-5 col-sm-12 mb-4'>
      <Card className='border-0 rounded-3 primary-bg-grey h-100' >
        <Card.Body className='primary-bg-grey rounded-3 '>
        {listMenu.map((value, index) => (
          <Card.Title key={index} className='d-flex align-items-center justify-content-between mt-2 mb-3 mx-3'>
            <div className='d-flex align-items-center gap-3'>
              <span>  <img src={value.imageName} alt='cardimage'></img></span>
              <span className='text-light'>{value.listName}</span>
            </div>
            <div>
            <i className="bi bi-arrow-right-circle text-light fs-3"></i>
            </div>
          </Card.Title>
        ))}
        </Card.Body>
      </Card>
    </Col>
  )
}

export default List