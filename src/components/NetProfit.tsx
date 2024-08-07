import React from 'react'
import { Card, Col } from 'react-bootstrap'
import { ReactComponent as PieChart } from '../images/pie.svg';


const NetProfit = () => {
    return (
        <Col xl={4} lg={5} md={5} className='mb-4' >
            <Card className='border-0 rounded-3 primary-bg-grey h-100' >
                <Card.Body className='primary-bg-grey rounded-3 d-flex justify-content-between flex-column'>

                    <Card.Title className='text-light fs-6 mb-0'>
                        Net Profit
                    </Card.Title>
                    <div className='d-flex gap-3 flex-xl-row flex-sm-row flex-lg-column-reverse flex-md-column-reverse flex-column-reverse   align-items-center justify-content-between w-100'>
                        <Card.Subtitle className=" text-light fs-3 fw-bold mt-2 d-flex flex-sm-column flex-md-row flex-lg-row flex-xl-column gap-3 align-items-xs-center align-items-sm-start align-items-md-center align-items-xl-start justify-content-between w-100">$6759.25 <span className=' fs-6 fw-normal text-success' >▲ 3%</span></Card.Subtitle>
                        <Card.Text className='d-flex flex-column justify-content-center align-items-center gap-1' > <PieChart />
                            <span className='d-block text-light text-nowrap' style={{ fontSize: "8px" }}>*the values here is rounded off</span>
                        </Card.Text>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default NetProfit