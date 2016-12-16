import React, { Component } from 'react';
import { MyComponent } from '../../components';
import { Header } from '../../components';
import { Menus } from '../../components';
import { Con,Row,Col } from 'tinper-bee';

import './index.css';
import 'tinper-bee/assets/tinper-bee.css';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header />
          <Row>
              <Col md={3} >
                  <Menus />
              </Col>
              <Col md={9} >
                  <MyComponent />
                  <p>
                    欢迎在github上一起维护这个脚手架项目<br />
                    https://github.com/GuoYongfeng
                  </p>
              </Col>
          </Row>
      </div>
    );
  }
}

export default App;
