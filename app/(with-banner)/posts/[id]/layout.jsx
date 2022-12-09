import Link from 'next/link';

const fetchPostById = (id) => {
  // getStaticProps
  // => return fetch('https://jsonplaceholder.typicode.com/posts').then((res) => res.json());
  // getServerSideProps
  // => return fetch('https://jsonplaceholder.typicode.com/posts', {cache: 'no-store'}).then((res) => res.json());
  // incremental static regeneration
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next: {
      revalidate: 60
    }
  }).then((res) => res.json());
};

const Post = async ({ children, params }) => {
  const { id } = params;
  const post = await fetchPostById(id);

  return (
    <>
      <article>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
        <Link href={`/posts/${id}/comments`}>Ver comentarios</Link>
        {children}
      </article>
    </>
  );
};

export default Post;
