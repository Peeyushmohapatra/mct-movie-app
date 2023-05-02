


export const populatData = async (dispatch) => {
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



  export const upcomingData = async (dispatch) => {
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


  export const topRatedData = async (dispatch) => {
    const api = await fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=4e44d9029b1270a757cddc766a1bcb63");
    const resp = await api.text();
    const jsonData = JSON.parse(resp);

    dispatch({
      type: "topRatedData",
      data: jsonData.results,
    });
  };


  export const comedyData = async (dispatch) => {
    const api = await fetch("https://api.themoviedb.org/3/search/movie?api_key=4e44d9029b1270a757cddc766a1bcb63&query=comedy");
    const resp = await api.text();
    const jsonData = JSON.parse(resp);

    dispatch({
      type: "comedyData",
      data: jsonData.results,
    });
  };


  export const actionData = async (dispatch) => {
    const api = await fetch("https://api.themoviedb.org/3/search/movie?api_key=4e44d9029b1270a757cddc766a1bcb63&query=action");
    const resp = await api.text();
    const jsonData = JSON.parse(resp);

    dispatch({
      type: "actionData",
      data: jsonData.results,
    });
  };