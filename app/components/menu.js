"use client";
import Link from "next/link"
import style from "./component.module.css"
import { useState } from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
export default function Menu(){
  const [inputValue, setInputValue] = useState('');
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    const movieTitle=e.target.value;
    console.log(movieTitle);
       router.push(`/movieinfo/${inputValue}`);
      
  };
return(
  <>
    <div className={style.menu}>
      <Link href="/">
        <div>Home</div>
        </Link>
      <Link href="/about">
        <div>About</div>
        </Link>
      <Link href="/contact">
        <div>Contact</div>
        </Link>
        
</div>
<form className={style.searchbar} onSubmit={handleSubmit}>
          <input type="text"  placeholder="Type the Movie you want" value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}/>
        <button type="submit">Search</button>
        </form>

</>

)

}