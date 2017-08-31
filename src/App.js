import React, { Component } from 'react';
import {Button, Switch, Progress, Rate, Calendar, Carousel} from 'antd';
import './App.css';
import './deng.css';
const ButtonGroup = Button.Group;

class App extends Component {

  onChange = (checked) => {
    console.log(`switch to ${checked}`);
  };

  state = {
    percent: 0,
    value: 3,
    count: null
  };


  handleChange = (value) => {
    this.setState({ value });
  };

  increase = () => {
    let percent = this.state.percent + 10;
    if (percent > 100) {
      percent = 100;
    }
    this.setState({ percent });
  };
  decline = () => {
    let percent = this.state.percent - 10;
    if (percent < 0) {
      percent = 0;
    }
    this.setState({ percent });
  };

  onPanelChange = (value, mode) => {
    console.log(value, mode);
  };

  render() {
    const { value } = this.state;
    return (
      <div className="App">
        <Button type="primary">Button</Button>
        <Button>Default</Button>
        <Button type="dashed">Dashed</Button>
        <Button type="danger">Danger</Button>
        <div>
          <Switch defaultChecked={false} onChange={this.onChange} />
        </div>
        <div>
          <Progress type="circle" percent={this.state.percent} />
          <ButtonGroup>
            <Button onClick={this.decline} icon="minus" />
            <Button onClick={this.increase} icon="plus" />
          </ButtonGroup>
        </div>
        <span>
        <Rate onChange={this.handleChange} value={value} />
          {value && <span className="ant-rate-text">{value} stars</span>}
      </span>
        <div style={{ width: 290, border: '1px solid #d9d9d9', borderRadius: 4 }}>
          <Calendar fullscreen={false} onPanelChange={this.onPanelChange} />
        </div>

        <Carousel autoplay>
          <div><h3>1</h3></div>
          <div><h3>2</h3></div>
          <div><h3>3</h3></div>
          <div><h3>4</h3></div>
        </Carousel>
      </div>
    );
  }
}

export default App;
