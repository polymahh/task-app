import React from 'react'

// const taskelement = (props)=> {
//     return (
//         <div>
//             {props.task}
//         </div>
//     )
// }

class RenderView extends React.Component{
    
    

    
    render(){
       

        
        let tasksList = this.props.tasks.map((task,index)=> 
        <div key={task.id}>
        {task.edit ? <input value={task.text}></input> : <li >{index}-{task.text}</li>}
        <div>
        <button id={task.id} onClick={this.props.deleteTask}>Delete</button>
        <button id={task.id} onClick={this.props.editTask}>Edit</button>
        </div>
        </div>
        );

        // console.log(this.props.tasks)
        return (
            <div>

                <p>Thess Are Your Tasks</p>
                <ul>
                    {tasksList}
                </ul>
            </div>
        )
    }

}

export default RenderView;