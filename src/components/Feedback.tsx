import React from 'react'
import { Card, Col, } from 'react-bootstrap'
import { feedbackData } from '../data/data'

const StarRating = ({ rating }) => {
  const totalStars = 5;
  return (
    <div className='d-flex gap-1 fs-5' >
      {[...Array(totalStars)].map((star, index) => {
        const starClass = index < rating ? 'bi bi-star-fill text-warning' : 'bi bi-star-fill text-light';
        return <span key={index} className={starClass}></span>;
      })}
    </div>
  );
};

const Feedback = () => {
  return (
    <Col xl={4} lg={12} className='mb-4'>
      <Card className='border-0 rounded-3 primary-bg-grey h-100'>
        <Card.Body className='primary-bg-grey rounded-3'>
          <Card.Title className='text-light fw-bold'>
            Customer's Feedback
          </Card.Title>
          <div className='slim-scroll mt-4' style={{ maxHeight: '430px', overflowY: 'scroll' }}>
            {feedbackData.map((feedback, index) => (
              <div key={index} className="mb-4 border-bottom border-secondary">
                <div className=" d-flex align-items-center gap-3 mb-2">
                  <img src={feedback.userImg} alt={feedback.name} className='rounded-circle' width='36px' height='36px' />
                  <h6 className='text-light fs-5 mb-0'>{feedback.name}</h6>
                </div>
                <StarRating rating={feedback.rating} />
                <p className='text-white-50'>{feedback.feedback}</p>
              </div>
            ))}
          </div>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default Feedback