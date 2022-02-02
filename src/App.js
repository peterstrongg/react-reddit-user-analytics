import React from 'react';
import { useSelector } from 'react-redux';

import classes from './App.module.css';
import Header from './components/header/Header';
import LandingPage from './components/landing-page/LandingPage';
import AboutUser from './components/about-user/AboutUser';
import TopSubs from './components/stats/topsubs/TopSubs';
import KarmaBySub from './components/stats/karma-by-sub/KarmaBySub';
import Card from './components/ui/Card';

function App() {
  const loading = useSelector(state => state.userInfo.loading);
  const dataLoaded = useSelector(state => state.userInfo.dataLoaded);

  return (
    <React.Fragment>
      <Header />     
      {!loading && !dataLoaded && <LandingPage />}
      {!loading && dataLoaded &&  <div> 
        <Card classList={classes['stat-styles']} id={classes['stats-container']}>
          <AboutUser />
          <TopSubs />
          <KarmaBySub />
          <div style={{height: 50}}></div>
        </Card>     
      </div>}  
      {loading && <h2 className='centered'>Loading...</h2>}  
    </React.Fragment>
  );
}

export default App;
