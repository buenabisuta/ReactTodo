import { Box, TextField } from "@material-ui/core";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import { ClassComponentModel } from "./ClassComponent";
import { Home2 } from "./Home2";
type Props = {
  foo: string
}

export const Home: React.FC<Props> = React.memo((props) => {
  const [name, setName] = useState<string>('');
  const [name2, setName2] = useState<string>('');

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
  </Box>
})
