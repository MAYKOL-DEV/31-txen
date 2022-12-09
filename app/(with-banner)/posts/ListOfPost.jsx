import React from 'react';
import LikeButton from './LikeButton';
import Link from 'next/link';

const fetchPosts = () => {
  // getStaticProps
  // => return fetch('https://jsonplaceholder.typicode.com/posts').then((res) => res.json());
  // getServerSideProps
  // => return fetch('https://jsonplaceholder.typicode.com/posts', {cache: 'no-store'}).then((res) => res.json());
  // incremental static regeneration
  return fetch('https://jsonplaceholder.typicode.com/posts', {
    next: {
      revalidate: 10
    }
  }).then((res) => res.json());
};

const ListOfPost = async () => {
  const posts = await fetchPosts();

  return (
    <section>
      {posts.slice(0, 5).map(({ id, title, body }) => (
        <article key={id}>
          <Link href="/posts/[id]" as={`/posts/${id}`}>
            <h2 style={{ color: '#09f' }}>{title}</h2>
            <p>{body}</p>
            <LikeButton />
          </Link>
        </article>
      ))}
    </section>
  );
};

export default ListOfPost;
