import layout from './layout';
import { fetcher } from './api';
import { global } from 'styled-jsx/css';
import type { NextPage } from "next";
import Head from "next/head";
import { Button } from "../Components/atom/Button/Button";
import Navbar from "../Components/Navbar";
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';



export default function Home({ articles }: any) {  
  return (    
    <div>  
      
      <h3 className="text-gray-700 text-3xl font-medium">ARTICLES</h3>   
      {
        articles &&
          articles.map((article: any) => (
            <article key={article.id}> 

<div className="flex flex-col mt-8">
        <div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
            <div className="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
                <table className="min-w-full">                    
                    <tbody className="bg-white">
                        <tr>
                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                <div className="flex items-center">
                                    <div className="flex-shrink-0 h-10 w-10">
                                        <Image className="h-10 w-10 rounded-full" src={article.attributes.Images} width={500} height={500} alt={article.attributes.Images} />
                                    </div>

                                    <div className="ml-4">
                                        <div className="text-sm leading-5 font-medium text-gray-900">{article.attributes.Title}</div>
                                        <div className="text-sm leading-5 text-gray-500">{article.attributes.Tag}</div>
                                    </div>
                                </div>
                            </td>
                            
                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                <div className="text-sm leading-5 text-gray-900">{article.attributes.Author}</div>
                               <div className="text-sm leading-5 text-gray-500">author</div>             
                            </td>

                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">{article.attributes.Category}</span>
                            </td>

                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500" >{article.attributes.Date}</td>

                            <td className="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium">
                            <a href={`/${ article.id }`} className="text-indigo-600 hover:text-indigo-900">Read more ...</a>
                            </td>
                        </tr>
                  </tbody></table></div></div></div>
                           
           
           
            </article>            
          ))
      }
    </div>    
  );  
}


export async function getServerSideProps() {
  const res = await fetch("http://127.0.0.1:1337/api/Articles?populate=*");
  const articles = await res.json();
  console.log(JSON.stringify(articles))

  return {    props: {
      articles: articles.data
    }
  } 
}