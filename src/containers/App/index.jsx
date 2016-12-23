import React, { Component } from 'react';
import { MyComponent } from '../../components';
import { MyHeader } from '../../components';
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
        <MyHeader />
          <Row>
              <Col md={9} >
                  <MyComponent />
              </Col>
          </Row>
      </div>
    );
  }
}

export default App;
