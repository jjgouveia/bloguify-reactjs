import { Pagination, Stack } from '@mui/material';
import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import usePagination from '../../hooks/usePagination';
import usePosts from '../../hooks/usePosts'

export default function Home () {

  const { posts, fetchPosts } = usePosts(4);
  const { actualPage, setActualPage } = usePagination();
  const location = useLocation();

  const handler = ({ target }, value) => {
    console.log(location.search.split('=', 2)[1])
    setActualPage(value);
  }

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
      count={25}
      page={ actualPage }
      onChange={ handler }
      variant="outlined"
      color="primary"
      showFirstButton showLastButton
      defaultValue={ actualPage }
      />
    </Stack>
    </section>
  )
}
