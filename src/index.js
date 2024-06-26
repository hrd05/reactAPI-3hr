import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "../node_modules/react-bootstrap/dist/react-bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { BookmarkContextProvider } from './store/bookmark-context';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BookmarkContextProvider>
    <App />
  </BookmarkContextProvider>
);


