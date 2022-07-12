import RenderView from './components/Overview'
import './App.css';
import React from 'react';



class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      task:{
        text:''
      },
      tasks:[]
    }
    this.addingTasks = this.addingTasks.bind(this)
    this.inputHandler = this.inputHandler.bind(this)
  }

  inputHandler(e){
    this.setState({
      task:{
        text:e.target.value
      }
        
    })
  }

  addingTasks(){
    
    this.setState(state => ({
      tasks:[...state.tasks, state.task],
      task:{
        text:''
      }
    }))
  }

  
  render(){
  
  
  return (
    <div className="App">
      <RenderView tasks= {this.state.tasks}/>
      
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
