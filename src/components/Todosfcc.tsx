import { useState } from 'react'
const Header=()=>{
    return <h1 style={{
        color:'black',
        fontSize: '40px',
        fontFamily:'monospace',
        fontStyle:'inherit'
    }}>TO DO APP</h1>
}
const Navbar=({handleAdd})=>{
    //function as the argument
    const [name,setname]=useState('')
    const handleAddButton=()=>{
        const newitem={name,id:Date.now()}
        handleAdd(newitem)
        setname('')
    }
    return (
        <>
        <input type="text"
        value={name}
        onChange={(e)=>setname(e.target.value)} 
        placeholder='enter the do item here'
        style={{
            padding:10,
            fontSize:20,
            border:'none',
            backgroundColor:'#f0f0f0',
            borderRadius:5,
            fontFamily:'cursive',
            fontStyle:'italic'
        }}/>
        <button onClick={handleAddButton} style={{
            backgroundColor:'lightblue',
            padding:'10px',
            border:'none',
            borderRadius:'5px',
            cursor:'pointer',
            margin:'15px'
        }}>Add the todo</button>
        </>
    )
}
const ListArea=({items,deleteItems})=>{
    //here the parameter is as the array
    return (
        <ol style={{
            listStyle:'upper-roman',
            margin:'20px',
            border:'10px',
            padding:'20px',
            backgroundColor:'lightgray',
            borderRadius:'10px'
        }}>
            {
                items.map((item)=>(
                    <li key={item.id} style={{
                        backgroundColor:'lightblue',
                        padding:'10px',
                        borderRadius:'10px',
                        margin:'10px',
                        textAlign:'center'
                        
                    }}>
                        {item.name}
                        <button onClick={()=>deleteItems(item.id)} style={{
                            backgroundColor:'red',
                            color:'white',
                            borderRadius:'10px',
                            padding:'5px',
                            margin:'10px'
                        }}>Delete the item</button>
                    </li>
                ))
            }
        </ol>
    )
}
const Footer=({items})=>{
    return (
            items.length!==0?(
                <p style={{
                    fontSize:'20px',
                    color:'blue',
                    textAlign:'center',
                    margin:'20px',
                    backgroundColor:'gray'
                }}>You have {items.length}items</p>
            ):
            <p>No items Please enter the items</p>
    )
}

const Todosfcc = () => {
    const [todos,settodos]=useState([])
    const handleAdd=(item)=>{
        settodos([...todos,item])
    }
    const deleteItems = (id) => {
        const updatedItems = todos.filter((item) => item.id !== id)
        settodos(updatedItems)
      }
      const clearTodos=()=>{
        settodos([])
      }
  return (
    <div style={{
        display:'flex',
        flexDirection:'column',
    }}>
      <Header/>
      <Navbar handleAdd={handleAdd} />
      <ListArea items={todos} deleteItems={deleteItems}/>
      <Footer items={todos} />
      <button onClick={clearTodos}>Clear all todos</button>
    </div>
  )
}

export default Todosfcc
