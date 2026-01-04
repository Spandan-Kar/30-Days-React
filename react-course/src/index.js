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
import KyleMemo from './KyleMemo';
import Parent from './Parent';
import AmazonParentContext from './AmazonParentContext';
import UseReducerTutorial from './UseReducerTutorial';
import ToggleReducer from './ToggleReducer';
import UseRef from './UseRef';
import UseRef2 from './useRef2';
import UseRef3 from './UseRef3';
import CustomHookMain from './CustomHookMain';
import CustomHookToggleMain from './CustomHookToggleMain';
import UseTransition from './UseTransition';
import ClickCounterWithoutHOC from './ClickCounter';
import HOC from './HOC';

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
    {/* <Memo /> */}
    {/* <KyleMemo/> */}
    {/* <Parent /> */}
    {/* <AmazonParentContext/> */}
    {/* <UseReducerTutorial /> */}
    {/* <ToggleReducer /> */}
    {/* <UseRef3 /> */}
    {/* <CustomHookMain /> */}
    {/* <CustomHookToggleMain /> */}
    {/* <UseTransition /> */}
    {/* <ClickCounterWithoutHOC /> */}
    <HOC />

  </React.StrictMode>
);
