import React from "react";

import classes from './KarmaBySubList.module.css';

const KarmaBySubList = props => {
    const topFive = [];
    if(props.sortedSubs.length >= 5) {
        for(let i = 0; i < 5; i++) {
            topFive.push(props.sortedSubs[i]);
        }
    } else {
        for(let i = 0; i < props.sortedSubs.length; i++) {
            topFive.push(props.sortedSubs[i]);
        }
    }

    return (
        <div className={classes['karmabysublist-container']}>
            <ul className={classes['karmalist-names']}>
                <li className={classes['karmalist-title']}>Subreddit</li>
                 {topFive.map((item) => {
                     return(
                         <li key={item.sub}>r/{item.sub}</li>
                     );
                 })}
            </ul>
            <ul className={classes['karmalist-counts']}>
                <li className={classes['karmalist-title']}>Upvotes</li>
                {topFive.map((item) => {
                    return (
                        <li key={item.sub}>{item.score}</li>
                    );
                })}
            </ul>
        </div>
    );
};

export default KarmaBySubList;