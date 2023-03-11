import { Chip, Divider, Pagination, Skeleton, Stack } from '@mui/material';
import React, { useEffect } from 'react'
import PostCardComponent from '../../components/CardComponent';
import Header from '../../components/Header';
import usePagination from '../../hooks/usePagination';
import usePosts from '../../hooks/usePosts'
import { Fade, Slide } from "react-awesome-reveal";
import styles from './styles';

export default function HomeView () {

  const { posts, fetchPosts, total } = usePosts('posts', 4);
  const { actualPage, setActualPage } = usePagination();

  const handler = ({ target }, value) => {
    setActualPage(value);
  }

  const countPagination = Number(Math.ceil(total.length / 4));

  useEffect(() => {
    fetchPosts(actualPage);
  }, [actualPage]);

  return (
    <>
      <Fade delay={700} cascade triggerOnce>
        <Header />
      </Fade>
      <Divider>
        <Chip label="Feed" />
      </Divider>
      <Slide direction='left' triggerOnce={true} duration={1000} delay={400}>
        {
          posts.length ? (
            <section style={ styles.postContainer }>
              {posts.map(({ id, title, body }) => (
                <PostCardComponent
                  key={id}
                  id={id}
                  title={title}
                  body={body} />
              ))}
              <Divider sx={ styles.divider } variant="fullWidth" />
              <Stack spacing={2}>
                <Pagination
                  sx={styles.paginator}
                  count={countPagination || 1}
                  page={actualPage}
                  onChange={handler}
                  variant="outlined"
                  color="primary"
                />
              </Stack>
            </section>
          ) : (
            <Skeleton variant="rounded"
              sx={styles.skeleton} width={564} height={'100vh'} />
          )
        }
      </Slide>
    </>
  )
}
