import { ReactNode } from 'react';

export const ChildComponent: React.FC<{children: ReactNode, color: string, title: string}> = (props) => {
  return (
    <>
      <div className={'FancyBorder FancyBorder-' + props.color}>
        {props.children} , {props.title}
      </div>
    </>
  )
}
