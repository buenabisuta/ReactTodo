import { Box, Button, TextField } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
type Props = {
  foo: string
}

type MyState = {
  count: number
}

export class ClassComponentModel extends React.Component<Props, MyState> {
  constructor(props: Props){
    super(props);
    console.log(props.foo);
    this.state = { count: 0 };
  }

  // componentがマウントされた時の処理
  componentDidMount() {
    console.log(this.props.foo + '2');
  }

  // 戻り値でstateの更新ができる
  static getDrivedStateFromProps(nextProps: Props, prevState: MyState) {
    console.log(nextProps.foo + '5');
    console.log(prevState.count + 10);
    return;
  }

  shouldComponentUpdate(nextProps: Props, nextState: MyState) {

    // count が変更されたときだけ再レンダリングを行う
    if (this.state.count !== nextState.count) {
        return true;
    }
    return false;
  }

  // getSnapshotBeforeUpdate() 前の値を保持できる componentDidUpdate()で保持した情報を使用できる

  // stateなどが更新されたタイミングで処理される
  componentDidUpdate() {
    console.log(this.props.foo + '3');
  }

  // componentが削除されたタイミングで処理される
  componentWillUnmount() {
    console.log(this.props.foo + '4');
  }

  render() {
    return <div onClick={() => this.setState((state) => ({count: state.count + 1}))} >
        {this.props.foo}
        {this.state.count}
      </div>
  }
}
