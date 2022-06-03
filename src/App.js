import React from 'react';
import './style.css';
import Header from './component/Header';
import object from './Object';

export default function App() {
  console.log(object);
  let title = 'Adarsh';
  let headerArr = object.map((ele) => {
    console.log(ele);
    return (
      <>
        <Header info={ele} />
      </>
    );
  });
  console.log('this is app.js', title);
  return <div>{headerArr}</div>;
}
