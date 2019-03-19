import React, { Component } from 'react'
import { connect } from 'react-redux'

class TaskList extends Component {
    render() {
        if (this.props.tasks)
            return (<ul > {
                this.props.tasksList.tasks.map((item) => (
                    <li key={item.id}> {item.task} {item.task2}</li>
                ))
            }
            </ul>)
    }
}
const mapStateToProps = (state) => {
    return {
        tasksList: state.tasks
    }
}
export default connect(mapStateToProps)(TaskList)