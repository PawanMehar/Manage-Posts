import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'

class CreatePost extends Component {
    state = {
        title: '',
        body : ''
    }
    handleChange = (e)=>{
        this.setState({
            [e.target.id] : e.target.value
        })
    }
    handleClick = (e)=>{
        e.preventDefault()
        if(!this.state.title) return
        this.props.addPost(this.state);
        this.props.history.push('/') 
    }
    render() {
        return (
            <div className='container w-50 mt-3 text-center'>
                <form>
                    <div class="form-group">
                        <label >Post Title</label>
                        <input type="text" class="form-control" id="title" onChange={this.handleChange}  />
                    </div>
                    <div class="form-group">
                        <label >Post Content</label>
                        <textarea class="form-control" id="body" rows="3" onChange={this.handleChange}></textarea>
                        <button className="btn btn-secondary mt-3" onClick={this.handleClick}>Add Post</button>
                    </div>
                </form>
            </div>
        )
    }
}


const mapDispatchToProps = (dispatch)=>{
    return{
        addPost : (post)=>{dispatch({type:'ADD_POST',post:post})}
    }
}
export default connect(null,mapDispatchToProps)(CreatePost)