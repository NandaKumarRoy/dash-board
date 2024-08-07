import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { cardMenu } from '../data/data.js';

const renderChange = (subCount, up) => (
  <span className={up ? 'text-success' : 'text-danger'}>
    {up ? '▲' : '▼'} {subCount}%
  </span>
);

const WidgetCard = () => {
  return (
    <Col md={12} lg={12} xl={8}>
      <Row >
        {cardMenu.map((value, index) => (
          <Col md={3} lg={3} xl={3} sm={6} xs={12} key={index}  className='mb-4'>
            <Card className='border-0 rounded-3 primary-bg-grey h-100' >
              <Card.Body className='primary-bg-grey rounded-3'>
                <Card.Title>
                  {/* <value.TotalOrderIcon/> */}
                  <img src={value.imageName} alt='cardimage'></img>
                </Card.Title>
                <Card.Subtitle className="mb-3 text-light fs-6">{value.cardName}</Card.Subtitle>
                <Card.Text className='d-flex justify-content-between align-items-center'>
                  <span className='fs-3 fw-bold text-light'>{value.cardCount}</span>
                  <span className='fs-6 text-danger'>{renderChange(value.subCount, value.up)}</span>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Col>
  );
};

export default WidgetCard;
