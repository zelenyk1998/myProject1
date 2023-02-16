import React from 'react';
import {useHistory} from "react-router-dom/cjs/react-router-dom";
import MyButton_create from "./UI/button/MyButton_create";

const PostItem = (props) => {
    const router = useHistory()
    return (
        <div className="post">
            <div className="post__content">
                <strong>{props.post.id}. {props.post.title}</strong>
                <div>
                    {props.post.body}
                </div>
            </div>
            <div className="post__btns">
                <MyButton_create onClick = {() =>  router.push(`/posts/${props.post.id}`)}>
                    Open
                </MyButton_create>
                <MyButton_create onClick = {() =>  props.remove(props.post)}>
                    Delete
                </MyButton_create>
            </div>
        </div>
    );
};

export default PostItem;