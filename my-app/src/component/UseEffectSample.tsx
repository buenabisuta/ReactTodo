import { Button, makeStyles } from "@material-ui/core";
import { useEffect, useState } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    color: 'red'
  }
}));

export const UseEffectSample: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  const classes = useStyles();

  // 第２引数が空の場合はコンポーネントがマウント後に実施される
  useEffect(() => {
    document.title = `You clicked ${count} times`;
    console.log('mount');

    // return で返している処理はアンマウントされるタイミングで実施される
    return () => {
      console.log('unMount');
    }
  }, [])
  return (
    <>
      <Button className={classes.root} onClick={() => setCount(count + 1)}>
        Click Me
      </Button>
    </>
  )
}
