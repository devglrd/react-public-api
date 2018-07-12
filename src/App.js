import React, { Component } from 'react';
import { BrowserRouter } from "react-router-dom";

import Header from './components/layout/Header';
import Main from './components/Main';
import Layout from './components/layout/Layout.js';
import Footer from './components/layout/Footer.js';

class App extends Component {
  componentWillMount = () => {
    console.log('ok');
  }
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Header />
          <Main />
          <Footer />
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
