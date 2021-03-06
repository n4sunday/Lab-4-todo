import React, { Component } from 'react';
import { put, store  } from '../App'
import { connect } from 'react-redux'

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
                <button onClick={() =>store.dispatch(put(this.state.task,this.state.task2))}className="btn btn-success">Add</button>
                <br />
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        put: ()=> dispatch(put())
    }
 }

export default connect(mapDispatchToProps)(InputTask)
