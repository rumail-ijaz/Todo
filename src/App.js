import React, { useState } from 'react'
import './App.css';
import {Button, Table} from 'react-bootstrap'

const App=()=> {
  const [value, setValue]= useState('')
  const [aray, setAray]= useState([])
  const [editbtn, setEditbtn]= useState(false)
  const [index, setIndex]= useState('')

  const [nam, setNam] = useState('')

  const handlechange=(e)=>{
        setValue(e.target.value)
  }

  const submit=()=>{
    if(value==''){
      alert('no empty')
    }
    else{
    setValue('')
    const date=new Date
    const h=date.getHours()
    const m=date.getMinutes()
    const s=date.getSeconds()
    const obj={
      value,
      h,
      m,
      s,
    }
    aray.push(obj)
    setAray([...aray])
  }
}

const shiftup=(i)=>{
  if(i==0){
    alert('not possible')
  }
  else{
    var tempobj = aray[i-1]
    aray[i-1]=aray[i]
    aray[i]=tempobj
    setAray([...aray])
  } 
}

const shiftdown=(i)=>{
  if(i==aray.length-1){
    alert('not possible')
  }
  else{
    var tempobj = aray[i+1]
    aray[i+1]=aray[i]
    aray[i]=tempobj
    setAray([...aray])
  }
}

const del=(i)=>{
  aray.splice(i,1)
  setAray([...aray])
}

const edit=(i)=>{
  setValue(aray[i].value)
  setEditbtn(true)
  setIndex(i)
}
const update=()=>{
  var temp=value
  aray[index].value=temp
  setAray([...aray])

}
const [inpval, setInpval]=useState({})

  return (
    <>
   <div className="App">
        <h1>To Do List</h1>
        <input value={value} placeholder='Enter Todo' onChange={handlechange}></input>
       {editbtn ? <Button onClick={update} id='submit'>Update</Button> : <Button onClick={submit} id='submit'>Submit</Button>}
      </div>

      <Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>Todo</th>
      <th>Time</th>
      <th>Functions</th>
    </tr>
  </thead>
  <tbody>
    {aray.map((obj,i)=>{
        return(
           <tr key={i}>
            <td>{i}</td>
            <td>{obj.value}</td>
            <td>{obj.h}:{obj.m}:{obj.s}</td>
            <td>
            <Button type="button" className="btn btn-primary" onClick={()=>{shiftup(i)}}>ShiftUp</Button>
            <Button type="button" className="btn btn-primary" onClick={()=>{shiftdown(i)}}>ShiftDown</Button>
            <Button type="button" className="btn btn-danger" onClick={()=>{del(i)}}>Delete</Button>
            <Button type="button" className="btn btn-success" onClick={()=>{edit(i)}}>Edit</Button>

            </td>
          </tr>

        )   
      })}
    
  </tbody>
</Table>
    </>


  )
}

export default App;
