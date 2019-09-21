import React, { Component } from 'react';
import { Fade, UncontrolledCollapse, CardBody, Card } from 'reactstrap';
import logo from '../logo-spin.png';

export default class BlockList extends Component {
  render(props) {
    const items = this.props.items;
    if (items.isLoaded === false) {
      return (
        <CardBody className=''>
          <h1>Blocks List</h1>
          <div className='App-logo d-flex justify-content-center'>
            <img src={logo} alt='' style={{ height: 100 }} />
          </div>
        </CardBody>
      );
    } else {
      return (
        <CardBody>
          <h1>Blocks List</h1>
          <Fade in={items.fadeIn}>
            <ul>
              {items.blocks.map((item, index) => (
                <li key={item.id} id={'toggler' + index}>
                  <Card className='p-3 no-radius'>
                    <p>
                      <strong>Hash: </strong>
                      {item.id}
                      <br />
                      <strong>Timestamp: </strong>
                      {item.timestamp}
                      <br />
                      <strong>Actions: </strong>
                      {item.confirmed}
                      <br />
                    </p>
                    <UncontrolledCollapse toggler={'toggler' + index}>
                      <CardBody>
                        <p>{JSON.stringify(item)}</p>
                      </CardBody>
                    </UncontrolledCollapse>
                  </Card>
                </li>
              ))}
            </ul>
          </Fade>
        </CardBody>
      );
    }
  }
}
