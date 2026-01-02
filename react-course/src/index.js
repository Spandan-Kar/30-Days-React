import React from 'react';
import ReactDOM from 'react-dom/client';
import BookList from './BookList';
import App from './App';
import Data from './Data';
import Form from './Form';
import UseEffect from './UseEffect';
import Fetch2 from "./Fetch2"
import MultipleReturn from "./MultipleReturn"
import Memo from './Memo';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <BookList /> */}
    {/* <App/> */}
    {/* <Data/> */}
    {/* <Form /> */}
    {/* <UseEffect /> */}
    {/* <Fetch2 /> */}
    {/* <MultipleReturn /> */}
    <Memo />
  </React.StrictMode>
);
