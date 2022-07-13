import RenderView from './components/Overview'
import './App.css';
import React from 'react';
import uniqid from "uniqid";



class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      task:{
        text:'',
        id: uniqid(),
        edit:false
      },
      tasks:[]
    }
    this.addingTasks = this.addingTasks.bind(this)
    this.inputHandler = this.inputHandler.bind(this)
    this.delete = this.delete.bind(this)
    this.editTask = this.editTask.bind(this)
  }

  inputHandler(e){
    this.setState({
      task:{
        text:e.target.value,
        id: this.state.task.id,
        edit:false
      }
        
    })
  }

  addingTasks(){
    
    this.setState(state => ({
      tasks:[...state.tasks, state.task],
      task:{
        text:'',
        id:uniqid(),
        edit:false
      }
    }))
  }

  delete(e){
    let clickedTask = this.state.tasks.find((task)=> task.id === e.target.id)
    this.state.tasks.splice(this.state.tasks.indexOf(clickedTask),1)
    this.setState(state => ({
      tasks : state.tasks
    }))
    console.log(this.state.tasks)
  }

  editTask(e){
    let newArr = this.state.tasks.slice()
    let clickedTask = newArr.find((task)=> task.id === e.target.id)
    clickedTask.edit = !clickedTask.edit
    this.setState({
      tasks : newArr
    })
    console.log(newArr)
  }

  
  render(){
  
  
  return (
    <div className="App">
      <RenderView tasks={this.state.tasks} deleteTask={this.delete} editTask={this.editTask}/>
      
      <input 
        className='task-input' 
        type="text"
        placeholder="Running..."
        value={this.state.task.text}
        onChange={this.inputHandler}

        />
      <button type='submit' onClick = {this.addingTasks}>click</button>
      
    </div>
  );
  }
}



export default App;
