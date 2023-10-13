import Image from "next/image";
import style from "./component.module.css"
export default function Movie({ movie }) {
  return (
    <div className={style.movielist}>
      <h2>{movie.Title}</h2>
      <p>{movie.Year}</p>
      <Image src= {movie.Poster} alt={movie.Title} width={300} height={410} />
    </div>
    
  );
}
