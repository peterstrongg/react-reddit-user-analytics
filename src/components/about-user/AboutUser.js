import React from "react";
import { useSelector } from "react-redux";

import classes from './AboutUser.module.css';
import defaultPic from '../../assets/default_pfp.png';
import Card from "../ui/Card";

// Converts unix date into a readable date
const convertDate = date => {
    date = date * 1000;
    const dateObject = new Date(date);
    const trueDate = dateObject.toLocaleDateString();
    return (trueDate);
};  

const AboutUser = () => {
    const dataLoaded = useSelector(state => state.userInfo.dataLoaded);
    const username = useSelector(state => state.userInfo.username);
    const aboutData = useSelector(state => state.userInfo.aboutData);

    let karma;
    let cakeDay;
    let title;
    let profilePic;
    if(dataLoaded) {
        karma = aboutData.data.total_karma;
        cakeDay = convertDate(aboutData.data.created);
        title = aboutData.data.subreddit.title;        
        profilePic = aboutData.data.snoovatar_img;

        if(profilePic !== '') {
            profilePic = <img src={profilePic} alt='pfp'/>
        } else {
            profilePic = <img src={defaultPic} alt='pfp' />
        }

        console.log(aboutData);
    }


    return (
        <React.Fragment>
            {dataLoaded && <div className={classes['about-user-container']}>
                    <h2 className={classes['about-title']}>Profile</h2>
                    <Card classList={classes['about-user-flex']}>
                        <div className={classes['about-container-left']}>
                            {profilePic}
                            <h3>u/{username}</h3>
                        </div>  
                        <div className={classes['about-container-right']}>
                            <h3>Karma: {karma}</h3>
                            {title !== "" && <h3>AKA: {title}</h3>}
                            <h4>Account Created: {cakeDay}</h4>                          
                        </div> 
                    </Card>
            </div>}
        </React.Fragment>
    );
};

export default AboutUser;