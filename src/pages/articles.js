import { Box } from 'reflexbox'
import styled from '@emotion/styled'
import getConfig from 'next/config'
import { useState } from 'react'
import { parseCookies  } from 'nookies'

const { publicRuntimeConfig } = getConfig();

function Addarticle() {
    const [articleTitle, setarticleTitle] = useState('')
    const [articleSlug, setarticleSlug] = useState('')

    async function addarticle() {
        const jwt = parseCookies().jwt

        const articleInfo = {
            article_title: articleTitle,
            slug: articleSlug
        }

        const add = await fetch(`${publicRuntimeConfig.API_URL}/articles`, {
            method: "POST",
            headers: {
                'Authorization': `Bearer ${jwt}`,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(articleInfo)
        })

        const addResponse = await add.json()

        console.log(addResponse)
        
    }

    return (
        <AddarticleStyled>
            <Box variant="container">
                <Box as="h2" my={40}>
                    Add article 
                </Box>

                <form>
                    <input type="text" onChange={e => setarticleTitle(e.target.value) } value={articleTitle}  placeholder="article title" /><br />
                    <input type="text" onChange={e => setarticleSlug(e.target.value) } value={articleSlug} placeholder="article slug" /><br />
                    <button type="button" onClick={() => addarticle() }>Add article</button>
                </form>
            </Box>
         </AddarticleStyled>
    )
}

const AddarticleStyled=styled.div`
    input {
        padding: 10px;
        margin-bottom: 20px;
        border: 1px solid #cccccc;
        border-radius: 4px;
    }
`

export default Addarticle