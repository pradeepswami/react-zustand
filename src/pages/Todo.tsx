import './Todo.css'
import Column from '../components/Column'
import lg from 'loglevel';
const log = lg.getLogger("rere");



function Todo() { 
  console.log(lg.getLoggers()); 
  log.info('App mounted');
  return (
  <div className="Todo">
    <Column state="Planned" />
    <Column state="Ongoing" />
    <Column state="Done" />
  </div>)
}

export default Todo;
