import React from 'react'
import { Card, Dropdown, Col } from 'react-bootstrap'
import { ReactComponent as BarChart } from '../images/bar.svg';

const Activities = () => {
    return (
        <Col className='col-xl-8 col-lg-7 col-md-7 mb-4'>
            <Card className='border-0 rounded-3 primary-bg-grey ' style={{ height: '280px' }}>
                <Card.Body className='primary-bg-grey rounded-3 d-flex flex-column justify-content-between '>
                    <Card.Title className='text-light d-flex align-items-center justify-content-between'>
                        Activity
                        <Dropdown align="end">
                            <Dropdown.Toggle variant="secondary" id="dropdown-basic" size="sm" className='rounded-pill' >
                                Weekly
                            </Dropdown.Toggle>

                            <Dropdown.Menu className='bg-secondary '>
                                <Dropdown.Item href="#/action-1" className='text-dark'>Monthly</Dropdown.Item>
                                <Dropdown.Item href="#/action-2" className='text-dark'>Yearly</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Card.Title>
                    <Card.Text className='slim-scroll' style={{ overflowX: "scroll" }}>
                        <BarChart/>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default Activities