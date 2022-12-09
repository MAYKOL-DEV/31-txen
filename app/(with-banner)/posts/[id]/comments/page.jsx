import Image from 'next/image';

const fetchComments = async (id) => {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  // throw new Error('Error al cargar los comentarios');

  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, {
    next: {
      revalidate: 60
    }
  }).then((res) => res.json());
};

const Comments = async ({ params }) => {
  const { id } = params;
  const comments = await fetchComments(id);

  return (
    <ul style={{ background: '#444', fontSize: '14px' }}>
      {comments.map(({ id, title, body, name, email }) => (
        <li key={id}>
          <Image
            width="50"
            height="50"
            alt={name}
            src={`https://avatars.dicebear.com/api/pixel-art-neutral/${email}.svg`}
          />
          <h4>{title}</h4>
          <small>{body}</small>
        </li>
      ))}
    </ul>
  );
};

export default Comments;
