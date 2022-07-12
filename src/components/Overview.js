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
        const tasksList = this.props.tasks.map((item,index)=> <li key={index}>{item}</li>)
        // console.log(this.props.tasks)
        return (
            <div>

                <p>thes are the tasks</p>
                <ul>
                    {tasksList}
                </ul>
            </div>
        )
    }

}

export default RenderView;