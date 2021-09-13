import React from 'react';
import Head from 'next/head';
import NicknameEditForm from '../components/NicknameEditForm';
import FollowList from '../components/FollowList';
import AppLayout from '../components/AppLayout';

const Profile = () => {
    const followerList = [{ nickName: 'namhyeon1' }, { nickName: 'namhyeon2' }, { nickName: 'namhyeon3' }]
    const followingList = [{ nickName: 'namhyeon1' }, { nickName: 'namhyeon2' }, { nickName: 'namhyeon3' }]
    
    return (
         <AppLayout>
           <NicknameEditForm />
           <FollowList
             header="팔로잉 목록"
             data={followingList}
           />
           <FollowList
             header="팔로워 목록"
             data={followerList}
           />
       </AppLayout>

    );
};

export default Profile;