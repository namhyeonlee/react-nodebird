import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card,Popover } from 'antd';
import { RetweetOutlined, HeartOutlined, MessageOutlined, EllipsisOutlined} from '@ant-design/icons';
import { useSelector } from 'react-redux';
import Avatar from 'antd/lib/avatar/avatar';
import PostImages from './PostImages';
const PostCard = ({ post }) => {
    
    const id = useSelector((state) => state.user.me && state.user.me.id);
    // const id = useSelector((state) => state.user.me?.id);


    
    return (
        <div>
            <Card
                cover={post.Images[0] && <PostImages images={post.images} />}
                actions={[
                    <RetweetOutlined key="retweet"/>,
                    <HeartOutlined key="heart"/>,
                    <MessageOutlined key="comment"/>,
                    <Popover key="more"
                        content={(
                            <Button.Group>
                                {id && post.User.id === id? (
                                <>
                                <Button>수정</Button>
                                <Button type="danger">삭제</Button>
                                </>
                                ):<Button>신고</Button>}
                                
                            </Button.Group>
                        )}
                    >
                        <EllipsisOutlined />
                    </Popover>
                    

                ]}
            >
                <Card.Meta
                    avatar={<Avatar>{post.User.nickname[0]}</Avatar>}
                    title={post.User.nickname}
                    description={post.conetent}
                />
            </Card>
            {/* <CommentForm />
            <Contents/> */}
        </div>
    )
}

PostCard.PropTypes = {
    post: PropTypes.shape({
        id: PropTypes.number,
        User: PropTypes.object,
        conetent: PropTypes.string,
        createdAt: PropTypes.object,
        Comments: PropTypes.arrayOf(PropTypes.any),
        Images: PropTypes.arrayOf(PropTypes.any),
    }).isRequired,
}
export default PostCard;

