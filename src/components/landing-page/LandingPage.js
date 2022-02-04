import React from "react";

import classes from './LandingPage.module.css';
import UserInfoForm from "../UserInfoForm";
import Card from "../ui/Card";

const LandingPage = () => {
    return (
        <Card classList={classes['landingpage-container']}>
            <div className={classes['landingpage-left']}>
                <div className={classes['landingpage-content']}>
                    <h2>Welcome to Reddit User Analytics</h2>  
                    <p>
                        Enter your reddit username to generate statistics determined
                        by your reddit post history and comment history. Data is generated 
                        from your last 100 posts and comments using Reddit's user API.    
                    </p>  
                    <h3><a href="https://www.github.com/peterstrongg/react-reddit-user-analytics" target="_blank" rel="noreferrer">GitHub Page</a></h3>
                </div>              
            </div>
            <div className={classes['landingpage-right']}>
                <div className={classes['landingpage-form']}>
                    <UserInfoForm />
                </div>
                
            </div>
            
        </Card>
    );
}

export default LandingPage;