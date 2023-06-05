import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index1.scss'
import { BrowserRouter } from 'react-router-dom';
ReactDOM.render(<BrowserRouter><App /></BrowserRouter> , document.getElementById('App'));


//   <React.StrictMode>
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={ <HomePage /> }>
//         </Route>
//       </Routes>
//     </BrowserRouter>