import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { useEffect, useState } from "react";
import Login from "./Components/Login/Login";
import Home from "./Components/Home/Home";
import { Routes,Route, Navigate } from "react-router-dom";
import Action from "./Components/Action/Action";
import Upcoming from "./Components/Upcoming/Upcoming";
import Allmovies from "./Components/AllMovies/Allmovies";
import Comedy from "./Components/Comedy/Comedy";
import Popular from "./Components/Popular/Popular";
import Toprated from "./Components/Top_Rated/Toprated";
import Pagenotfound from "./Components/PageNotFound/Pagenotfound";
import Navber from "./Components/Navbar/Navber";
import Search from "./Components/Search/Search";
import Moviedetails from "./Components/MoveiDetails/Moviedetails";
import { actionData, comedyData, populatData, topRatedData, upcomingData } from "./functions";



function App() {
  const dispatch = useDispatch();

  const data = useSelector((state) => {
    return state
  })

  useEffect(() => {
    if(data.popular.length === 0 && data.top_rated.length === 0 && data.upcoming.length === 0){
      populatData(dispatch);
      topRatedData(dispatch);
      upcomingData(dispatch);
      comedyData(dispatch);
      actionData(dispatch);
    }
  }, []);


  const [login,setLogin] = useState(false)

  return (
    <div className="App">

      
      {login ? <Navber setLogin={setLogin}/> : null}


      <Routes>
        <Route path="/" element={login === false ? <Login setLogin={setLogin}/> : <Navigate to="/home/all" />} />
        <Route path="/search/:movieName" element={<Search/>} /> 
        <Route path="/moviedetails/:details" element={<Moviedetails/>} /> 

        <Route path="/home"  element={login ? <Home/> : <Navigate to="/"/>} >
          <Route path=""  element={<Navigate to="all" />} />
          <Route path="action"  element={login? <Action/> : <Navigate to="/"/>} />
          <Route path="upcoming"  element={login ? <Upcoming/> : <Navigate to="/"/>}/>
          <Route path="all"  element={login ? <Allmovies/> : <Navigate to="/"/>}/>
          <Route path="comedy"  element={login ? <Comedy/> : <Navigate to="/"/>}/>
          <Route path="popular"  element={login ? <Popular/> : <Navigate to="/"/>}/>
          <Route path="toprated"  element={ login ? <Toprated/> : <Navigate to="/"/>}/>
        </Route>

        <Route path="*" element={<Pagenotfound setLogin={setLogin}/>} /> 
      </Routes>

    </div>
  );
}

export default App;
