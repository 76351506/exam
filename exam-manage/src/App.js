import React from 'react';
import 'antd/dist/antd.css';
import { BrowserRouter as Router } from 'react-router-dom';
import RouterView from '@/router/index.js';

function App(props) {
  return (
    <div>
      this is app page
      <Router>
        <RouterView></RouterView>
      </Router>
    </div>
  );
}

export default App;
