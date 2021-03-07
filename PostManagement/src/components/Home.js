import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'


class Home extends Component {
    
    render() {
        const {posts} = this.props
        const postList = posts ? (
            posts.map(post=>{
                return(
                        <div class="card mt-3 w-75 text-center mx-auto" key={post.id} >
                            <div class="card-body">
                            <Link to={"/" + post.id}>
                                <h5 class="card-title text-secondary">{post.title}</h5>
                            </Link>
                                <p class="card-text">{post.body}</p>
                            </div>
                        </div>
                )
            })
        ) : (<div>you have no post left...</div>)
        return (
            <div className='container m-5 text-center'>
            {postList}
            </div>
        )
    }
}
const mapStateToProps = (state)=>{
    return{
        posts:state.posts
    }
}

export default connect(mapStateToProps)(Home)
