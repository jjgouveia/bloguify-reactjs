import { Pagination, Stack } from '@mui/material';
import React, { useEffect } from 'react'
import usePagination from '../../hooks/usePagination';
import usePosts from '../../hooks/usePosts'

export default function Home () {

  const { posts, fetchPosts, total } = usePosts(4);
  const { actualPage, setActualPage } = usePagination();

  const handler = ({ target }, value) => {
    setActualPage(value);
  }

 const countPagination = Number(Math.ceil(total.length / 4));

  useEffect(() => {
    fetchPosts(actualPage);
  }, [actualPage]);

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
      <Stack spacing={2}>
      <Pagination
      count={countPagination || 1}
      page={ actualPage }
      onChange={ handler }
      variant="outlined"
      color="primary"
      showFirstButton showLastButton
      />
    </Stack>
    </section>
  )
}
