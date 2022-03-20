import { useContext} from "react";
import classes from "../ToDoMain/TodoMain.module.css";
import {TodoContext} from "../../ContextProviders/TodosProvider"

function TodoHead(){
    const ctx = useContext(TodoContext)
   

    
    return(
        
        <div>
           
            <div id={classes.title}>
                <h1>MY TODO LIST</h1>
                <label htmlFor="input">SEARCH</label>
                <br/>
                <input value = {ctx.filteredTodo} onChange={ctx.onChange} placeholder="Search Todo..." type="text" name="" id="input"/>
                <br/>
                <br/>
            </div>
            
        </div>
    )
}
export default TodoHead
