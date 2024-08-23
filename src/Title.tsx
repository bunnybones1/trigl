import { useState } from "react";

interface TitleProps {
  title: string;
  subtitle?: string;
}

function Title(props: TitleProps) {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1
        onClick={() => {
          setCount(count + 1);
        }}
      >
        {props.title}
      </h1>
      <h2>{props.subtitle}</h2>
      <div>{count}</div>
    </>
  );
}

export default Title;
