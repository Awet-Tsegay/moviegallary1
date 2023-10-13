import Image from "next/image";
import style from "./component.module.css"
export default function Moviedetail({ movi }) {
  return (
    <div className={style.moviedetail}>
    <div className={style.img} >
      <Image src= {movi.Poster} alt={movi.Title} width={300} height={410} /></div>
     <div className={style.content}> 
     <h3>Movie title : {movi.Title}</h3>
     <h3>Country : {movi.Country}</h3>
     <h3>Type : {movi.Type}</h3>
     <h3>Year of Release : {movi.Year}</h3>
     <h3>Rated : {movi.Rated}</h3>
     <h3>Award : {movi.Awards}</h3>
     
     </div>
    
    </div>
  );
}