import React, { useEffect } from 'react'
import usePagination from '../../hooks/usePagination';
import usePosts from '../../hooks/usePosts'

export default function Home () {

  const { posts, fetchPosts } = usePosts(4);
  const { actualPage, setActualPage } = usePagination();

  useEffect(() => {
    fetchPosts(actualPage);
  }, [actualPage]);

  console.log(posts);

  return (
    <section className='blog-posts-container'>
      {
        posts.map((post) => (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))
      }
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
      {
        Array(25).fill('').map((_, index) => {
          return <button
          key={ index }
          disabled={ index === actualPage -1 }
          onClick={ () => setActualPage(index+1) }>
            { index + 1 }
          </button>
        })
      }
      </div>
    </section>
  )
}
