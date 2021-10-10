import { Form, Input, Button } from 'antd';
import React, { useCallback, useState} from 'react';
import useInput from '../hooks/useInput';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

const CommentForm = ({ post }) => {
    const id = useSelector((state)=>{state.user.me?.id})
     const [commentText, setCommentText] = useState('');
    const onsubmitComment = useCallback((e) => {
        console.log(post.id, commentText);
        setCommentText(e.target.value);
        
    }, [commentText]);
    return (
        <Form onFinish={onsubmitComment}>
            <Form.Item style={{ position: 'relative', margin: 0 }}>
                <Input.TextArea value={commentText} onChange={onsubmitComment} />
                <Button style={{ position: 'absolute', right: 0, bottom: -40 }} type="primary" htmlType="submit">댓글</Button>
            </Form.Item>
        </Form>
        
    );
}

CommentForm.propTypes = {
  post: PropTypes.object.isRequired,
};

export default CommentForm;