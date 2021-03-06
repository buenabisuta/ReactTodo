import { Box, Button, TextField } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { useSelector } from "react-redux";
import { RootState } from "../Store";
type Props = {
  foo: string
}

export const Home2: React.FC<Props> = React.memo((props) => {
  const [name, setName] = useState<string>('');
  const [count, setCount] = useState<number>(0);
  const countState = useSelector((store: RootState) => store.count);

  console.log(props.foo);
  const fnc = (e: string) => {
    setName(e + count);
    setCount(count + 1);
  }
  return <Box>
    {'Hello' + props.foo}
    <Button onClick={() => fnc('test')}>click</Button>
    {name}
    {countState}
  </Box>
})
