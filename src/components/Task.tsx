import classNames from 'classnames';
import './Task.css'
import { useStore } from '../store';
import deleteIcon from '../assets/delete.svg';

interface TaskProps {
    title: string;
}


export default function Task({title}: TaskProps) {
    const task = useStore(store => store.tasks.find(task => task.title === title));
    console.log(task)
    const deleteTask = useStore(store => store.deleteTask);
    const onDragStart = function(){
        useStore.setState({draggedTask: title});
    }

    return (
    <div className="Task" draggable onDragStart={onDragStart}>
        <div> {title}</div>
        <div className='bottomWrap'>
            <div className='delete' onClick={() => deleteTask(title)}><img src={deleteIcon} alt="delete"/></div>
            <div className={classNames('status', task?.state)}>{task?.state}</div>
        </div>

    </div>)
}
