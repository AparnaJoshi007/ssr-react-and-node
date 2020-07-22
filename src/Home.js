import React from 'react';
import { connect } from 'react-redux';
import Nav from './Nav';
import { increment, decrement } from './actions/countAction';

const _Home = (props) => {
  return (
    <div>
      <Nav />
      I am home
      <div>Current number: {props.number}</div>
      <input type="button" value="Increment number" onClick={() => props.incrementNum(20)} />
      <input type="button" value="Decrement number" onClick={() => props.decrementNum(20)} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  number: state.count,
});

const mapDispatchToProps = (dispatch) => ({
  incrementNum: (num) => dispatch(increment(num)),
  decrementNum: (num) => dispatch(decrement(num)),
});

export const Home = connect(mapStateToProps, mapDispatchToProps)(_Home);