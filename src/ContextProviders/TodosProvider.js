import {useState,useCallback,createContext,useReducer, useMemo} from 'react'
import { ACTION_TYPES,actionAdd,actionDelete,actionEdit,actionDone ,actionDeleteCompleted} from './ActtionsFunctions';



const data = [
    {id:1,
    title:"Lesson1",
    description:'Welcome to the course! Guide  through what you can expect from the course!',
    isDone:false,
    isHidden:false
},
    {id:2,
    title:"Lesson2",
    description:'What is TypeScript and why is it awesome? In this lecture, we will take a closer look at the advantages and new features TypeScript adds to JavaScript.',
    isDone:false,
    isHidden:false
},
    {id:3,
    title:"Lesson3",
    description:'Time to summarize the advantages we learned about over the last lecture - what is amazing about TypeScript?',
    isDone:false,
    isHidden:false
},
];



export const TodoContext = createContext({
    todos:[],
    originalList:[],
    filteredTodo:''
    
})


function reducer(state, action) {
    // const {id,title,description,isDone} = action.payload || {};
    console.log(state,action);
    switch (action.type) {
        case ACTION_TYPES.ADD:
            return[ ...state,{
                id:Math.random(),
                title:action.payload.title,
                description:action.payload.description,
                isDone:false,
                isHidden:false
            }];
        case ACTION_TYPES.DONE:
             return state.map((todoItem)=>{
                    return  todoItem.id === action.payload.id ? {
                         ...todoItem,
                       isDone:action.payload.isDone
                    }:{...todoItem}
                });
        
      case ACTION_TYPES.EDIT:
        return state.map((todoItem) => {
            return  todoItem.id === action.payload.id ? {
                ...todoItem,
                title:action.payload.title,
                description:action.payload.description
            } : {...todoItem}
        });
    
      case ACTION_TYPES.DELETE:
          return state.filter(item=>item.id!==action.payload.id);

     case ACTION_TYPES.DELETECOMPLETED:
        return state.filter((item)=>!item.isDone)
             
      default:
        console.log( 'i am default')
    }
  }


const TodosProvider = (props)=>{

    // const[todos,setTodos]=useState(data)
    const[filteredTodo, setFilteredTodo]=useState('')

    const [todos,dispatch]=useReducer(reducer,data);

    
const handleAdd = useCallback((title,description)=>{
    dispatch(actionAdd(title,description));
    console.log("handleAdd is working");
},[])


// const handleAdd = (title,description)=>{
//     const addData = [
//         ...todos,{
//             id:Math.random(),
//             title:title,
//             description:description,
//             isDone:false,
//             isHidden:false
//         }
//     ]
//     setTodos(addData)
//     // setOriginalList(addData)
// };

const handleFilter= (e)=>{
    setFilteredTodo(e.target.value);
}
 
const filteredList = useMemo(()=>{
    return todos.filter(item=>item.title.toLowerCase().includes(filteredTodo))
},[filteredTodo, todos]);

// const filteredList =()=>{
//     return  (todos.filter(item=>item.title.toLowerCase().includes(filteredTodo)))
// }

// useEffect(()=>{
   
//     setTodos((prev) => prev.map((item)=>{
//         if(item.title.toLowerCase().includes(filteredTodo)){
//             item.isHidden = false
//             return item
//         }else{
//             item.isHidden = true
//         }
//         return item
//     }))
// },[filteredTodo])



const handleEdit=useCallback((id, title, description)=>{
    dispatch(actionEdit(id, title, description))

    // const newList = todos.map((todoItem) => {
    //     return  todoItem.id === id ? {
    //         ...todoItem,
    //         title,
    //         description
    //     } : {...todoItem}
    // });
    // console.log(newList)
    //  setTodos(newList)
    // console.log("handleEdit is working");
    // setOriginalList(newList)
},[]);

const handleDelete=useCallback((id)=>{
    dispatch(actionDelete(id))
    // const filteredTodo = todos.filter((el)=>{return el.id!==id})
    //  setTodos(filteredTodo);
},[])

const handleChecked = useCallback((id,isDone)=>{
    dispatch(actionDone(id,isDone)) 
    console.log(isDone);

},[]);

// const handleChecked = (id, isDone)=>{
//     const newCheck = todos.map((todoItem)=>{
//         return  todoItem.id === id ? {
//              ...todoItem,
//              isDone
//         }:{...todoItem}
//     });
//     setTodos(newCheck);
//     // setOriginalList(newCheck)

// }

const handleDeleteCompleted =useCallback(()=>{
    dispatch(actionDeleteCompleted())
},[])

// const handleDeleteCompleted = useCallback(() => {
//     console.log('clear');
//  const clearCompleted= todos.filter((item)=>!item.isDone)
//  console.log(clearCompleted);
//  return clearCompleted
//     //  setTodos(clearCompleted);
//     // setOriginalList(clearCompleted)

// },[todos])


    return(
        <TodoContext.Provider 
        value = {{
            todos:todos,
            filteredList:filteredList,
            filteredTodo:filteredTodo,
            onDeleteCompleted:handleDeleteCompleted,
            onChecked:handleChecked,
            onDelete:handleDelete,
            onEdit:handleEdit,
            onChange:handleFilter,
            onAdd:handleAdd
        }}>
            
            {props.children}
        </TodoContext.Provider>
    )

}
export default TodosProvider