
import Header from './Header';
import Content from './Content';
import Total from './Total';

function App() {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }
  
  return (
    <>
      <Header course={course}/>
      <Content part={[part1.name, part2.name, part3.name]} exercises={[part1.exercises, part2.exercises, part3.exercises]} />
      <Total exercises={[part1.exercises, part2.exercises, part3.exercises]} />
    </>
    
  );
}

export default App;
