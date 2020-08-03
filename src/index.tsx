import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createMyRouter } from './routes/createRouter'
import { RouterProvider } from 'react-router5'
import persistentParamsPlugin from 'router5-plugin-persistent-params';

const router = createMyRouter()

const wrapperApp = (
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
)

router.start((err, state) => {
  ReactDOM.render(wrapperApp, document.getElementById('root'))
})


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
