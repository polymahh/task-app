import React from 'react'

// const taskelement = (props)=> {
//     return (
//         <div>
//             {props.task}
//         </div>
//     )
// }

class RenderView extends React.Component{
    // constructor(props){
    //     super(props)

    //     // this.props.deleteTask = this.props.deleteTask.bind(this)
    // }

    // deleteTask(e){
    //     console.log(e)
    // } 
    
    render(){
        
        const tasksList = this.props.tasks.map((task,index)=> 
        <div key={task.id}>
        <li >{index}-{task.text}</li>
        <button id={task.id} onClick={this.props.deleteTask}>X</button>
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