import { useRouter } from "next/router";
import Image from "next/image";
import Link from 'next/link'

export default function Page({article} : any) {
    const router = useRouter();
    return (
      
<main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900">
  <div className="flex justify-between px-4 mx-auto max-w-screen-xl ">
      <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
          <header className="mb-4 lg:mb-6 not-format">
            <address className="flex items-center mb-6 not-italic">
                  <div className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                  <Image className="mr-4 w-16 h-16 rounded-full" width={500} height={500} src="/image1.jpg" alt=""/>
                
                      <div>
                          <a href="#" rel="author" className="text-xl font-bold text-gray-900 dark:text-white">{ article.attributes.Author}</a>
                          <p className="text-base font-light text-gray-500 dark:text-gray-400">{article.attributes.Category}</p>
                          <p className="text-base font-light text-gray-500 dark:text-gray-400"></p>
                      </div>
                  </div>
              </address>
              <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">{ article.attributes.Title}</h1>
          </header>
          <p className="text-base font-light text-gray-500 dark:text-gray-400"> {article.attributes.Body}</p>
          <p className="text-base font-light text-gray-500 dark:text-gray-400"> {article.attributes.Summary}</p>
          <p className="text-base font-light text-gray-500 dark:text-gray-400"> {article.attributes.Comments}</p>
          <div className="mt-8">
        <h4 className="text-gray-600"></h4></div><h4 className="text-gray-600"></h4>
            <Link href="/"><button className="px-6 py-3 bg-purple-600 rounded-md text-white font-medium tracking-wide hover:bg-purple-500 ml-3">Go Back</button></Link>
              
      </article>
      </div>
      </main>);
       
}

export async function getServerSideProps(context : any) {
    const articleId = context.params.id;
    const res = await fetch("http://127.0.0.1:1337/api/articles/" + articleId);
    const articles = await res.json();
    console.log(JSON.stringify(articles));

      return {    props: {
        article: articles.data
        
      }
    } 
  }