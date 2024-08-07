import React from 'react'
import { Card, Col, Table } from 'react-bootstrap'
import { tableData } from '../data/data.js';

const OrderStatus = ({ status }) => {
  const statusClass = status === "Delivered" ? "status delivered" : "status cancelled";
  return (
    <span className={`order-status ${statusClass}`}>{status}</span>
  );
};

const RecentOrders = () => {
  return (
    <Col xl={8} lg={7} md={7} className='mb-4'>
      <Card className='border-0 rounded-3 primary-bg-grey '  >
        <Card.Body className='primary-bg-grey rounded-3'>
          <Card.Title className='text-light fw-bold'>
            Recent Orders
          </Card.Title>
          <div className='orderTable slim-scroll' style={{ overflowY:'scroll'}}>
            <Table responsive="xl" variant='transparent'  >
              <thead className='sticky-top'>
                <tr>
                  <th>Customer</th>
                  <th>Order No.</th>
                  <th>Amount</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
              {tableData.map((value, index) => (
                <tr key={index}>
                  <td><span className='d-flex align-items-center gap-3'><span> <img src={value.userImg} alt="profile-img" width="30" height="30" className="rounded-circle"></img></span>{value.userName}</span></td>
                  <td>{value.orderNo}</td>
                  <td>${value.Amount}.00</td>
                  <td > <OrderStatus status={value.status} /></td>
                </tr>
              ))}
              </tbody>
            </Table>
          </div>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default RecentOrders