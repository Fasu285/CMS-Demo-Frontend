import { useRouter } from "next/router";
export default function Page({article} : any) {
    const router = useRouter();
    return (
      <div>
        <p>Article ID: {router.query.id}</p>
        <article key={article.id}>             
            <h2>{article.attributes.Title}
            <span class="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
              
                {article.attributes.Category}
              </span>
            </h2>
            
            </article>   
      </div>
    );
       
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