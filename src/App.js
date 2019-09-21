import React, { Component } from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Col, Card, CardBody } from 'reactstrap';
import BlockList from './Components/BlockList';
import NavBar from './Components/NavBar';
const { JsonRpc } = require('eosjs');
const fetch = require('node-fetch');
const rpc = new JsonRpc('https://api.eosnewyork.io', { fetch });

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      blocks: [],
      isLoaded: false,
      fadeIn: false
    };
  }

  async componentDidMount() {
    const resp = await rpc.get_info();

    let blocks = [];
    let blockNum = resp.head_block_num;
    let i;

    for (i = 0; i < 10; i++) {
      let blockInfo = await rpc.get_block(blockNum);
      // console.log(blockInfo)
      blocks.push(blockInfo);
      blockNum -= 1;
    }

    this.setState({
      blocks: blocks,
      isLoaded: true,
      fadeIn: true
    });
    console.log('Hi, this is the state!', this.state);
  }

  newBlocks() {
    this.setState({
      isLoaded: false
    });
    this.componentDidMount();
  }

  render() {
    return (
      <div>
        <NavBar />
        <Container>
          <Col className='d-flex justify-content-center'>
            <Button
              color='warning'
              className='mt-4'
              size='lg'
              onClick={() => this.newBlocks()}
            >
              Load Blocks
            </Button>{' '}
          </Col>
          <Col>
            <Card className='mt-4 mb-5 shadow'>
              <BlockList items={this.state} />
            </Card>
          </Col>
        </Container>
      </div>
    );
  }
}
