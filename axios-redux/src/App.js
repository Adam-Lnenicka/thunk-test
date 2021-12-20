import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { loadMovies } from "./redux";
import { useEffect } from "react";
import Card from "./components/Card";

function App() {
  const apiMoviesArray = useSelector((state) => state.movies);
  // const apiMoviesArrayTest = useSelector((state) => state.movies[0]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadMovies());
  }, [dispatch]);
  return (
    <div>
      <p>hello</p>
     <div>
      {apiMoviesArray &&
        apiMoviesArray.map((movie) => movie.map((m) => <Card key={m.slug} gameName={m.gameName} />))}              
    </div>
      {/* <div> {apiMoviesArrayTest}hi</div> */}
    </div>
  );
}

export default App;
