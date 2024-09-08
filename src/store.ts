import { create } from "zustand";
import { devtools } from 'zustand/middleware';

interface TaskStore {
    tasks: {title: string, state: string}[],
    addTask: (title: string, state: string) => void,
    deleteTask: (title: string) => void,
    draggedTask: string,
    setDraggedTask: (title: string) => void,
    moveTask: (title: string, state: string) => void,
}

export const useStore = create<TaskStore>()(devtools((set) => ({
    draggedTask: '',
    setDraggedTask: (title) => set(() => ({draggedTask: title})),
    tasks: [{title: 'Test task', state: 'Planned'}],
    addTask: (title, state) => set((store) => ({tasks: [...store.tasks, {title, state}]})),
    deleteTask: (title) => set((store) => ({tasks: store.tasks.filter((task) => task.title !== title)})),
    moveTask: (title, state) => set((store) => ({tasks: store.tasks.map((task) => task.title === title ? {title, state} : task)})),    
})));