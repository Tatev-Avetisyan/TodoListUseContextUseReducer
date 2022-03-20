import {useContext} from "react"

import classes from "../ToDoMain/TodoMain.module.css";
import TodoHead from "../TodoHead/TodoHead";
import TodoBody from "../TodoBody/TodoBody";
import TodoAdd from "../TodoAdd/TodoAdd";
import TodoFooter from '../TodoFooter/TodoFooter';
import {TodoContext} from "../../ContextProviders/TodosProvider"


function TodoMain (){

    const ctx = useContext(TodoContext)
    
    return(
        
        <section className = {classes.section}>
            <div  id = {classes.main}>
                <TodoHead/>
                <TodoAdd />
                <TodoBody/>
                <TodoFooter  todos={ctx.todos}/>
                </div>
            </section>
    )
}
export default TodoMain 