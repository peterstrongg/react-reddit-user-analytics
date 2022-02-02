import React from 'react';
import { useSelector } from 'react-redux';

import UserInfoForm from '../UserInfoForm';
import classes from './Header.module.css';

const Header = () => {
    const dataLoaded = useSelector(state => state.userInfo.dataLoaded);
    const loading = useSelector(state => state.userInfo.loading);
    const username = useSelector(state => state.userInfo.username);

    let headerContent = <h2>Reddit User Analytics</h2>
    if(loading && !dataLoaded) {
        headerContent = <h2>Loading...</h2>
    } else if(dataLoaded && !loading) {
        headerContent = <h2>Analytics for u/{username}</h2>
    }

    return (
        <div className={classes['header-container']}>
            <div className={classes['header-left']}>
                {headerContent}
            </div>
            <div className={classes['header-right']}>
                {dataLoaded && <UserInfoForm />}
            </div>
            
        </div>
    );
};

export default Header;