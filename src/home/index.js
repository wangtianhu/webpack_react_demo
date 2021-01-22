import { render } from 'less';
import React from 'react';
import './test.css';

export default class Home extends React.Component {
  render() {
    return <div className='test'>我是父亲组件</div>;
  }
}
