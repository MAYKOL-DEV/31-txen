import { Suspense } from 'react';
import ListOfPost from './ListOfPost';

const PostsPage = () => (
  <section>
    <Suspense fallback={<p>Cargando ooooooooo ......</p>}>
      <ListOfPost />
    </Suspense>
  </section>
);

export default PostsPage;
