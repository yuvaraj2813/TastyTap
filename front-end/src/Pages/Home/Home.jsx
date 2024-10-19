import React, { useState } from 'react'
import './Home.css'
import Header from '../../Header/Header'
import ExploreMenu from '../../Component/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../Component/FoodDisplay/FoodDisplay'
import AppDownload from '../../Component/AppDownload/AppDownload'
const Home = () => {
  const[category,setcategory]=useState("All");
  return (
    <div id="home">
      <Header/>
      <ExploreMenu category={category} setcategory={setcategory}/>
      <FoodDisplay category={category}/>
      <AppDownload/>
    </div>
  )
}

export default Home