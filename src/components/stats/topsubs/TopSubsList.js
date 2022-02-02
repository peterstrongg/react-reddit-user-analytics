import React from 'react';

import classes from './TopSubsList.module.css';

const TopSubsList = props => {
    const topFive = [];
    if(props.subList.length >= 5) {
        for(let i = 0; i < 5; i++) {
            topFive.push(props.subList[i]);
        }
    } else {
        for(let i = 0; i < props.subList.length; i++) {
            topFive.push(props.subList[i]);
        }
    }

    return(
        <div className={classes['subs-list-container']}>
            <ul className={classes['sub-list-names']}>
                <li className={classes['sub-list-title']}>Subreddit</li>
                {topFive.map((item) => {
                   return(   
                        <li key={item.sub}>
                            <div>r/{item.sub}</div>
                        </li>
                   );
                })}
            </ul>
            <ul className={classes['sub-list-counts']}>
                <li className={classes['sub-list-title']}>Posts</li>
                {topFive.map((item) => {
                   return(   
                        <li key={item.sub}>
                            <div>{item.count}</div>
                        </li>
                   );
                })}
            </ul>
        </div>
    );
};

export default TopSubsList;