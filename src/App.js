import RenderView from './components/Overview'
import './App.css';
import React from 'react';



class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      input:'',
      // userInput:'',
      tasks:['cdcdf','dfdf']
    }
    this.addingTasks = this.addingTasks.bind(this)
    this.inputHandler = this.inputHandler.bind(this)
  }

  inputHandler(e){
    this.setState({
      input:e.target.value
    })
  }

  addingTasks(){
    
    this.setState(state => ({
      tasks:[...state.tasks, state.input],
      input:''
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
        value={this.state.input}
        onChange={this.inputHandler}

        />
      <button type='submit' onClick = {this.addingTasks}>click</button>
      
    </div>
  );
  }
}

export default App;
