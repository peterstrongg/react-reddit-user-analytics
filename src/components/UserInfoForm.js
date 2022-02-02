import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { getData } from '../store/index';

import classes from './UserInfoForm.module.css';

const UserInfoForm = () => {   
    const username = useRef('');
    const dispatch = useDispatch();

    const getUserData = async (event) => {
        event.preventDefault();
        dispatch(getData(username.current.value));
    };

    return (
        <form onSubmit={getUserData} className={classes['info-form']}>
            <div className={classes['form-flex']}>
                <input ref={username} className={classes['form-input']} type='text' placeholder='Reddit Username' />
                <button type='submit' className={classes['form-submit-button']}>Go</button>
            </div>
        </form>
    );
};

export default UserInfoForm;