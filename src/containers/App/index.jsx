import React, { Component } from 'react';
import { MyComponent } from '../../components';
import { Header } from '../../components';
import { Con } from 'tinper-bee';

import './index.css';
import 'tinper-bee/assets/tinper-bee.css';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Con>
        <Header />
        <MyComponent />
        <p>
          欢迎在github上一起维护这个脚手架项目<br />
          https://github.com/GuoYongfeng
        </p>
      </Con>
    );
  }
}

export default App;
