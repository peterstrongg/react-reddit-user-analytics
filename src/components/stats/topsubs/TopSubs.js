import React from 'react';
import { useSelector } from 'react-redux';

import { sortSubs } from '../post-data-helper';
import TopSubsList from './TopSubsList';
import Card from '../../ui/Card';
import classes from './TopSubs.module.css';

const TopSubs = () => {
    const username = useSelector(state => state.userInfo.username);
    const postData = useSelector(state => state.userInfo.postData);
    const dataLoaded = useSelector(state => state.userInfo.dataLoaded);

    let content;
    let title;
    if(dataLoaded && postData.length !== 0) {
        const sortedSubs = sortSubs(postData, 'POSTS')
        console.log(sortedSubs);
        title = <div className={classes['topsubs-title']}><h2>u/{username} is most acitve in these subreddits...</h2></div>
        content = <div className={classes['topsubs-content']}>                        
                        <TopSubsList subList={sortedSubs} />
                    </div>
    } else if (dataLoaded && postData.length === 0) {
        title = <div className={classes['topsubs-title']}><h2>Uh oh! u/{username} has no post history!</h2></div>
        content = <div></div>
    }
    
    return(
        <React.Fragment>
            {title}
            <Card classList={classes['topsubs-container']}>
                {content}
            </Card>
        </React.Fragment>
    );
};

export default TopSubs;