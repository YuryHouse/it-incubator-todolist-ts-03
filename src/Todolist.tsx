import React, {useState} from 'react';
import {FilterValuesType} from './App';
// import {FullInput} from "./components/FullInput";
import {Input} from "./components/Input";
import {Button} from "./components/Button";

type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId: string) => void
    changeFilter: (value: FilterValuesType) => void
    addTask: (title: string) => void
    changeStatus: (id: string, isDone:boolean) => void
    filter: FilterValuesType
}

export function Todolist(props: PropsType) {

    let [title, setTitle] = useState("")
    const [error, setError] = useState<boolean>(false)

    const changeFilters=(value:FilterValuesType)=>{
        props.changeFilter(value)
    }

    const addTaskHandler = () => {
        const trimmedTitle = title.trim()
        if (trimmedTitle) {
            props.addTask(trimmedTitle)
        } else {
            setError(true)
        }
        setTitle('')
    }

    return <div>
        <h3>{props.title}</h3>
        <Input
            title={title}
            setTitle={setTitle}
            callBack={addTaskHandler}
            error={error}
            setError={setError}
        />
        <Button name={'+'} callBack={addTaskHandler} />
        {error && <div className={"error-message"}>Title is required!</div>}


        <ul>
            {
                props.tasks.map(t => {
                    const onClickHandler = () => props.removeTask(t.id)

                    return <li className={t.isDone ? "isDone" : ""} key={t.id}>
                        <input type="checkbox"
                               checked={t.isDone}
                               onChange={(e) => props.changeStatus(t.id, e.currentTarget.checked)}/>
                        <span>{t.title}</span>
                        <button onClick={onClickHandler}
                        // data-set-id={t.id}
                        >x</button>
                    </li>
                })
            }
        </ul>
        <div>
            {/*<button onClick={onAllClickHandler}>All</button>*/}
            {/*<button onClick={onActiveClickHandler}>Active</button>*/}
            {/*<button onClick={onCompletedClickHandler}>Completed</button>*/}

            <Button
                btnClass={props.filter === 'all' ? 'btn-active' : ''}
                name={'All'}
                callBack={()=>changeFilters('all')} />
            <Button
                btnClass={props.filter === 'active' ? 'btn-active' : ''}
                name={'Active'}
                callBack={()=>changeFilters('active')} />
            <Button
                btnClass={props.filter === 'completed' ? 'btn-active' : ''}
                name={'Completed'}
                callBack={()=>changeFilters('completed')} />
        </div>
    </div>
}
