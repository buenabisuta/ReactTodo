import React from "react";

export const KeyValue: React.FC = () => {
  const names: Array<string> = ['John','Bob','Mary'];
  return (
    <>
      <ul>
        {
          names.map((name, index) => {
            return <li key={index}>{name}さん</li>
          })
        }
      </ul>
    </>
  )
}
