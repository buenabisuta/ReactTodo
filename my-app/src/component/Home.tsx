import { Box, Button, TextField } from "@material-ui/core";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../Store";
import { decrement, increment } from "../Store/Counter/Action";
import { ClassComponentModel } from "./ClassComponent";
import { Home2 } from "./Home2";
type Props = {
  foo: string
}

export const Home: React.FC<Props> = React.memo((props) => {
  const [name, setName] = useState<string>('');
  const [name2, setName2] = useState<string>('');
  const countState = useSelector((store: RootState) => store.count);
  const dispatch = useDispatch();

  const OnIncrement = () => {
    dispatch(increment(3));
  }

  const OnDecrement = () => {
    dispatch(decrement());
  }

  const fnc = (e: string) => {
    setName(e);
  }
  return <Box>
    <TextField 
      defaultValue={name}
      onBlur={(e) => fnc(e.target.value)} />
    <TextField 
      defaultValue={name2}
      onBlur={(e) => setName2(e.target.value)} />
    <Home2 foo={name} />
    <ClassComponentModel foo='class' />

    <TextField value={countState}></TextField>
    <Button onClick={OnIncrement}>+</Button>
    <Button onClick={OnDecrement}>-</Button>
    <Button>Increment if odd</Button>
    <Button>Increment async</Button>
  </Box>
})
