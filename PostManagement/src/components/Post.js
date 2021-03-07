import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'

class Post extends Component {
    handleClick = ()=>{
        this.props.delete(this.props.post.id)
    }
    render() {
        const {post} = this.props
        const thisPost = post ? (
            <div className='text-center '>
                <h4 className='m-3'>{post.title}</h4>
                <p className='m-3'>{post.body}</p>
                <button onClick={this.handleClick} className='btn btn-secondary'>Delete Post</button>
            </div>

        ) : (<Redirect to = '/' />)
        return (
            <div className='text-center'>{thisPost}</div>
        )
    }
}

const mapStateToProps = (state,ownProps)=>{
    const id = ownProps.match.params.post_id
    return{
        post:state.posts.find(post=>{
            return post.id == id
        })
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        delete : (id)=>{dispatch({type:'DELETE_POST',id:id})}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Post)
