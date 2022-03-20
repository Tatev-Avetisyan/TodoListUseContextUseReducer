import {useState,useContext, useCallback} from'react'
import classes from "../ToDoMain/TodoMain.module.css"
import {TodoContext} from "../../ContextProviders/TodosProvider"

function TodoAdd(){

    const ctx = useContext(TodoContext)
    
    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("");

    const onAdded=useCallback(()=>{
        if(title!=="" && description!==""){
            ctx.onAdd(title,description);
        }else{
            alert('Please add a title and description ')
        }
        setTitle("");
        setDescription("");
        console.log('addRender');
    },[ctx, description, title])
    

    return(
          <div className={classes.cardDiv}>
            <label className={classes.addTodo} htmlFor = 'add-todo'>Add New Todo</label>
            <br/>
            <input
               className={classes.inputs}
               placeholder = "Title" 
               value={title} 
               type = "text" 
               id="add-todo" 
               onChange= {(e)=>{setTitle(e.target.value)}}   
            />

            <input 
                className={classes.inputs}
                placeholder = "Description" 
                value={description} 
                type = "text" id="add-todo"
                onChange = {(e)=>{setDescription(e.target.value)}}
            />
             <button onClick = {onAdded}  className={classes.btn} > ADD</button>
            </div>
           
   
    )
}
export default TodoAdd


