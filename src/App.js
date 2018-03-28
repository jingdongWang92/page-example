import 'babel-polyfill';
import React from 'react';
import './App.css';
import 'sweetalert2/dist/sweetalert2.css';
import 'antd/dist/antd.css';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/addon/scroll/simplescrollbars.css';

import configureStore from './store';
import { Provider } from 'react-redux';
import Container from './container';
import Raven from 'raven-js';


if (process.env.NODE_ENV === 'production') {
  Raven.config('https://ad3eeeaacb73457cbe2576b02b3d69cf@sentry.jcbel.com/6').install()
}
const store = configureStore({});


export default function App() {
  return (
    <Provider store={store}>
      <Container />
    </Provider>
  );
}
