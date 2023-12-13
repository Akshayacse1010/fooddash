import React from 'react';
import ReactDOM from 'react-dom/client';
// Adjust the path accordingly
import Body from './components/Body';
import Header from './components/Header';

const Applayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Applayout></Applayout>);
