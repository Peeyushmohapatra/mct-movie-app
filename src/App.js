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
import { Protected } from "./Components/Protected/Protect";
import Pagenotfound from "./Components/PageNotFound/Pagenotfound";
import Navber from "./Components/Navbar/Navber";
import Search from "./Components/Search/Search";
import Moviedetails from "./Components/MoveiDetails/Moviedetails";


function App() {
  const dispatch = useDispatch();

  const data = useSelector((state) => {
    return state
  })

  useEffect(() => {
    if(data.popular.length === 0 && data.top_rated.length === 0 && data.upcoming.length === 0){
      populatData();
      topRatedData();
      upcomingData();
      comedyData();
      actionData();
      dispatch({
        type:'login',
        data:login
      })
    }
  }, []);

  const populatData = async () => {
    const api = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63"
    );
    const resp = await api.text();
    const jsonData = JSON.parse(resp);
    dispatch({
      type: "populardata",
      data: jsonData.results,
    });
  };

  const upcomingData = async () => {
    const api = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?api_key=4e44d9029b1270a757cddc766a1bcb63"
    );
    const resp = await api.text();
    const jsonData = JSON.parse(resp);

    dispatch({
      type: "upcomingData",
      data: jsonData.results,
    });
  };

  const topRatedData = async () => {
    const api = await fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=4e44d9029b1270a757cddc766a1bcb63");
    const resp = await api.text();
    const jsonData = JSON.parse(resp);

    dispatch({
      type: "topRatedData",
      data: jsonData.results,
    });
  };

  const comedyData = async () => {
    const api = await fetch("https://api.themoviedb.org/3/search/movie?api_key=4e44d9029b1270a757cddc766a1bcb63&query=comedy");
    const resp = await api.text();
    const jsonData = JSON.parse(resp);

    dispatch({
      type: "comedyData",
      data: jsonData.results,
    });
  };

  const actionData = async () => {
    const api = await fetch("https://api.themoviedb.org/3/search/movie?api_key=4e44d9029b1270a757cddc766a1bcb63&query=action");
    const resp = await api.text();
    const jsonData = JSON.parse(resp);

    dispatch({
      type: "actionData",
      data: jsonData.results,
    });
  };

  const [login,setLogin] = useState(true)

  return (
    <div className="App">
      {/* <Login/> */}
      {/* <Home/> */}

      {login ? <Navber setLogin={setLogin}/> : null}


      <Routes>
        <Route path="/" element={login === false ? <Login setLogin={setLogin}/> : <Navigate to="/home/all" />} />
        <Route path="/search/:movieName" element={<Search/>} /> 
        <Route path="/moviedetails/:details" element={<Moviedetails/>} /> 


        <Route path="/home"  element={login ? <Home/> : <Navigate to="/"/>} >
          
          <Route path=""  element={<Navigate to="all" />} />
          <Route path="action"  element={<Action/>} />
          <Route path="upcoming"  element={<Upcoming/>}/>
          <Route path="all"  element={<Allmovies/>}/>
          <Route path="comedy"  element={<Comedy/>}/>
          <Route path="popular"  element={<Popular/>}/>
          <Route path="toprated"  element={<Toprated/>}/>
        </Route>
        <Route path="/*" element={<Pagenotfound/>} /> 
        
      </Routes>

    </div>
  );
}

export default App;
