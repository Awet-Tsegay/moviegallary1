import Moviedetail from "../../components/moviedetails.js";
import style from "../../page.module.css";

/*MY_API_KEY=e34a85e7   ${process.env.MY_API_KEY}`     ${movieTitle}&apikey=e34a85e7`*/  
/*export default async function Movieinfo({ params} ,{secretkey}) {*/
  export default async function Movieinfo({ params}) {
  const movieTitle = params.movieTitle;
  
  
    /*const res = await fetch(`http://www.omdbapi.com/?t=${movieTitle}&apikey=${secretkey}`);*/
    const res = await fetch(`http://www.omdbapi.com/?t=${movieTitle}&apikey=e34a85e7`);
  const movieJson = await res.json();
  
  /*console.log(movieJson);*/
  return (
    <div className={style.movieinfo}>
        <div className={style.header}><h1>DETAILED INFORMATION OF THE MOVIE</h1></div>
       <div className={style.content}><Moviedetail movi={movieJson} /></div>
        
    </div>
  );
}
