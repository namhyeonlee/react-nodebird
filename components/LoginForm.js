import React, { useState, useCallback }from 'react';
import { Form, Input, Button } from 'antd';
import Link from 'next/link';
import styled from 'styled-components';

const ButtonWrapper = styled.div`
margin-top: 10px;
`;
const FormWrapper = styled(Form)`
padding: 10px;
`;

const LoginForm = ({setIsLoggedIn}) => {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');

    const onChangeId = useCallback((e) => {
        setId(e.target.value);
    }, []);
    const onChangePassword = useCallback((e) => {
        setPassword(e.target.value);
    }, []);
    
    const onsubmitForm = useCallback(() => {
        console.log(id, password);
        setIsLoggedIn(true);
        
    }, [id, password]);

    return (
        <FormWrapper onFinish={onsubmitForm}>
            <div>
                <label htmlFor="user-id">아이디</label>
                <br />
                <Input name="user-id" value={id} onChange={onChangeId} required></Input>
            </div>
            <div>
                <label htmlFor="user-password">비밀번호</label>
                <br />
                <Input
                    name="user-password"
                    type="password"
                    value={password}
                    onChange={onChangePassword}
                    required
                />
            </div>
            <ButtonWrapper style={{marginTop: 10}}>
                <Button type="primary" htmlType="submit" loading={false}>로그인</Button>
                <Link href="/signup"><a> <button>회원가입</button> </a></Link>

            </ButtonWrapper>
        </FormWrapper>
    );
}
export default LoginForm;