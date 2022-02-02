const combineLikeSubs = (data) => {
    const subArray = [];    
    for(let i = 0; i < data.length; i++) {
        if(subArray.length === 0) {
            subArray.push({
                sub: data[i].data.subreddit,
                count: 1,
                score: data[i].data.score,
            });
        } else {
            const subArrayLength = subArray.length;
            for(let j = 0; j < subArrayLength; j++) {
                if(data[i].data.subreddit === subArray[j].sub) {
                    subArray[j].count++;
                    subArray[j].score = subArray[j].score + data[i].data.score;
                    break;
                } else if (j === subArrayLength-1){
                    subArray.push({
                        sub: data[i].data.subreddit,
                        count: 1,
                        score: data[i].data.score,
                    });
                }               
            }
        }
    };
    return subArray;
};

export const sortSubs =(data, method) => {
    const combined = combineLikeSubs(data);

    if(method === 'POSTS') {
        combined.sort((a, b) => {
            if(a.count  < b.count) {
                return 1;
            } if (a.count > b.count) {
                return -1;
            }
            return 0;
        });
        return combined;
    }
    if(method === 'KARMA') {
        combined.sort((a, b) => {
            if(a.score  < b.score) {
                return 1;
            } if (a.score > b.score) {
                return -1;
            }
            return 0;
        });
        return combined;
    }
};