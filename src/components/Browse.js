import React from 'react'
import Header from './Header';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import useUpcomingMovies from '../hooks/useUpcoming';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';

const Browse = () => {
useNowPlayingMovies();
usePopularMovies();
useTopRatedMovies();
useUpcomingMovies();

  return (
    <div className='bg-black/50 h-screen w-screen'>
      <Header/>   
      <MainContainer/>
      <SecondaryContainer/>  
    </div>
  )
}

export default Browse