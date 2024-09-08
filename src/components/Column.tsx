import { useShallow } from 'zustand/react/shallow';
import { useStore } from '../store'
import './Column.css'
import Task from './Task'
import { useState } from 'react';
import classNames from 'classnames';


export default function Column({ state }: { state: string }) {
    const [title, setTitle] = useState('');
    const [open, setOpen] = useState(false);
    const [dragOver, setDragOver] = useState(false);


    const tasks = useStore(useShallow((store) => store.tasks.filter((task) => task.state === state)));

    const addTask = useStore(store => store.addTask);
    const draggedTask = useStore(store => store.draggedTask);
    const setDraggedTask = useStore(store => store.setDraggedTask);
    const moveTask = useStore(store => store.moveTask);

    const addTaskItem = function(title: string) {
        addTask(title, state);
        setTitle('');
        setOpen(false);        
    };

    const onDropHandler = function (){
        moveTask(draggedTask, state);    
        setDraggedTask('');
        setDragOver(false);            
    }

    const onDragOver = function (e : React.DragEvent<HTMLDivElement>){
        e.preventDefault();
        setDragOver(true);
    }


    return (
        <div className={classNames("Column", dragOver? 'dragOver' : '')} onDragOver={(e) => onDragOver(e)} 
            onDrop={() => onDropHandler()} onDragLeave={() => setDragOver(false)}>
            <div className='titleWrap'>
                <p>{state}</p>
                <button onClick={() => setOpen(true)}>Add</button>
            </div>            
            {tasks.map(task => 
                <Task title={task.title} key={task.title + task.state}/>
            )}
            {open &&
                <div className='model'>
                    <div className='modelContent'>
                        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>
                        <button onClick={() => addTaskItem(title)}>Add</button>
                    </div>
                </div>
            }
        </div>
    )
}
