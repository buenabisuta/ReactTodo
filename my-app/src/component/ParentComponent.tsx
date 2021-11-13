import { ChildComponent } from './ChildComponent';

export const ParentComponent: React.FC = () => {
  
  return (
    <>
      <ChildComponent color='blue' title='title'>
        test
      </ChildComponent>
    </>
  )
}
