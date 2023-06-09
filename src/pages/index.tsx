import layout from './layout';
import { fetcher } from './api';
import { global } from 'styled-jsx/css';
import type { NextPage } from "next";
import Head from "next/head";
import { Button } from "../Components/atom/Button/Button";
import Navbar from "../Components/Navbar";
import { useEffect, useState } from 'react'
import Link from 'next/link'


export default function Home({ articles }: any) {  
  return (    
    <div>     
       <button className="btn btn-Secondary">Add New Article</button>
      <h1 className="font-bold text 5xl">Articles</h1>
      {
        articles &&
          articles.map((article: any) => (
            <article key={article.id}>             
            <h2>{article.attributes.Title}
              <span>
              {article.attributes.Category}
              </span>
              <Link href={`/${ article.id }`}>Read more ...</Link>
            </h2>
            </article>            
          ))
      }
    </div>    
  );  
}


export async function getServerSideProps() {
  const res = await fetch("http://127.0.0.1:1337/api/Articles");
  const articles = await res.json();

  return {    props: {
      articles: articles.data
    }
  } 
}