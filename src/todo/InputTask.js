import React, { Component } from 'react';
class InputTask extends Component {
    state = { task2: '' }
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }
    render() {
        return (
            <div>
                <input type="hidden" name="id" value={this.props.id} /><br />
                <input type="text" name="task" onChange={this.handleChange} />
                <input type="text" name="task2" onChange={this.handleChange} />
                <button  onClick={() =>
                    this.props.addTask(this.state.task,this.state.task2)} className="btn btn-success">Add</button>
            </div>
        )
    }
}
export default InputTask
