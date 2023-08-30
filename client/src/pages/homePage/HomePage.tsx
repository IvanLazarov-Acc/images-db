import React from 'react'
import LoginForm from '../../components/LoginForm'
import RegisterForm from '../../components/RegisterForm'
import "./homePage.css";

export default function HomePage() {
    return (
        <>
            <div className='forms-container'>
            <LoginForm />
            <RegisterForm />
            </div>
        </>

    )
}
