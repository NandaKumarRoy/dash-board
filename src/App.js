
import React from 'react';
import Header from './components/Header.tsx';
import Heading from './components/Heading.tsx';
import WidgetCard from './components/WidgetCard.tsx';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';
import NetProfit from './components/NetProfit.tsx';
import Activities from './components/Activities.tsx';
import List from './components/List.tsx';
import RecentOrders from './components/RecentOrders.tsx';
import Feedback from './components/Feedback.tsx';


function App() {
  return (
    <div className='bg-black'>
      <Header />
      <div className='ms-5 ps-3'>
        <div className='container-fluid'>
        <div className='row'>
        <Heading/>
        <WidgetCard/>
        <NetProfit/>
        <Activities/>
        <List/>
        <RecentOrders/>
        <Feedback/>
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;
