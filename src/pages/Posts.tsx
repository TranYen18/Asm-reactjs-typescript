import React from 'react'
import PostList from '../components/PostList'
import { PostType } from '../type/Posts'

type PostsProps = {
    posts: PostType[]

}

const Posts = (props: PostsProps) => {
    return (
        <div>
            <PostList posts={props.posts} />
        </div>
    )
}

export default Posts