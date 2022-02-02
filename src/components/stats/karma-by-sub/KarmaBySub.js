import React from 'react';
import { useSelector } from 'react-redux';
import { sortSubs } from '../post-data-helper';

import Card from '../../ui/Card';
import KarmaBySubList from './KarmaBySubList';
import classes from './KarmaBySub.module.css';


const KarmaBySub = () => {
    const username = useSelector(state => state.userInfo.username);
    const dataLoaded = useSelector(state => state.userInfo.dataLoaded);
    const postData = useSelector(state => state.userInfo.postData);

    let content;
    let title;
    if (dataLoaded && postData.length !== 0) {
        const sortedSubs = sortSubs(postData, 'KARMA');
        title = <div className={classes['karmabysub-title']}><h2>u/{username} received the most upvotes in these subreddits...</h2></div>
        content = <KarmaBySubList sortedSubs={sortedSubs} />
    }

    return (
        <React.Fragment>
            {title}
            <Card classList={classes['karmabysub-container']}>
                {content}
            </Card>
        </React.Fragment>
        
    );
};

export default KarmaBySub