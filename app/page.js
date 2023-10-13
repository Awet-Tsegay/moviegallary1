import movies from "./data/movies.json";
import Movie from "./components/movie.js";
import style from "./page.module.css";
import Movieinfo from "./movieinfo/[movieTitle]/page.js";
/*<Movieinfo secretkey={`${process.env.MY_API_KEY}`}/>*/
export default function Home() {
  const secretKey = process.env.MY_API_KEY;
  console.log(secretKey);
  const movielist=movies.map((movie) => {
return <Movie movie={movie} key={movie.Title}/>
  });
  return (
    <>
    
    <div className={style.mainpage}>
      {movielist}
      
          </div>
    </>
  );
}
