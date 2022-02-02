import { createAsyncThunk, configureStore, createSlice } from '@reduxjs/toolkit';

const initialUserDataState = {
    username: '',
    postData: [],
    aboutData: [],
    loading: false,
    dataLoaded: false,
    isError: false,
    length: 0,       
}

export const getData = createAsyncThunk(
    'data/getData',
    async (username) => {
        try {
            // Get post info
            const url = `https://www.reddit.com/user/${username}.json?limit=1000`;

            const response = await fetch(url, {
                method: 'GET',
            });

            if(!response.ok) {
                throw new Error('This user does not exist or is private!');
            }
            
            const responseData = await response.json();
            const postData = [];
            for(let i = 0; i < responseData.data.children.length; i++) {
                postData.push(responseData.data.children[i]);
            }

            // Get about page info
            const aboutUrl = `https://www.reddit.com/user/${username}/about.json`;

            const aboutResponse = await fetch(aboutUrl, {
                method: 'GET',
            });
            
            if(!aboutResponse.ok) {
                throw new Error('Could not fetch about!');
            }

            const aboutData = await aboutResponse.json();
            
            //return postData;
            return {
                postData: postData,
                aboutData: aboutData,
                username: aboutData.data.name,
                length: responseData.data.children.length,
            }
        }
        catch (error) {
            console.log(error);
        }
    },
);

const userDataSlice = createSlice({
    name: 'data',
    initialState: initialUserDataState,
    reducers: {},
    extraReducers: {
        [getData.pending]: (state) => {
            state.loading = true;
            state.dataLoaded = false;
        },
        [getData.fulfilled]: (state, { payload }) => {
            state.loading = false;
            state.dataLoaded = true;
            state.isError = false;
            state.postData = payload.postData;
            state.aboutData = payload.aboutData;
            state.username = payload.username;
            state.length = payload.length;

            // console.log(state.username);
            // console.log(state.length);
        },
        [getData.rejected]: (state) => {
            state.loading = false;
            state.dataLoaded = false;
            state.isError = true;
        }        
    },
});

const store = configureStore({
    reducer: {
        userInfo: userDataSlice.reducer,
    },
});

export default store;