import { Card, CardActionArea, CardActions, Pagination, Stack, Typography } from '@mui/material';
import React, { useEffect } from 'react'
import CommentModal from '../../components/CommentModal';
import Header from '../../components/Header';
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
    <><Header /><section className='blog-posts-container' style={{ margin: '0 auto' }}>
      {posts.map((post) => (
        <Card sx={{ maxWidth: 500, margin: '0 auto', padding: '1rem 2rem', marginTop: '1rem', textAlign: 'justify' }} key={post.id}>
          <CardActionArea>
            <Typography gutterBottom variant="h5" component="div">
              {post.title}
            </Typography>
            <Typography variant="body2" component="p" color="text.secondary">
              {post.body}
            </Typography>
          </CardActionArea>
          <CardActions>
            <CommentModal id={post.id} />
          </CardActions>
        </Card>
      ))}
      <Stack spacing={2}>
        <Pagination
          sx={{ margin: '0 auto', padding: '1rem .5em' }}
          count={countPagination || 1}
          page={actualPage}
          onChange={handler}
          variant="outlined"
          color="primary"
          showFirstButton showLastButton />
      </Stack>
    </section></>
  )
}
