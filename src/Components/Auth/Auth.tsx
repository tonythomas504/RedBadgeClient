import React from 'react'

type AuthState = {
    username: string,
    password: string;
    isButtonDisabled: boolean;
    helperText: string;
    isError: boolean;
}

const intialState:AuthState = {
    username: '',
    password: '',
    isButtonDisabled: true,
    helperText: '',
    isError: false,
} 

type Action = 
{type: 'setusername', payload: string} |
{type: 'setPassword', payload: string} |
{type: 'setIsButtonDisabled', payload: string} | {type: 'loginSuccess', payload: string} |
{type: 'loginFailed', payload: string} |
{type: 'setIsError', payload: boolean};