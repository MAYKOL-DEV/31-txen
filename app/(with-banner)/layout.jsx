// import Counter from './Counter';

const PostsLayout = ({ children }) => (
  <div>
    {/* <Counter /> */}
    <small>Home &bull; Posts</small>
    <marquee style={{ color: 'cyan' }}>Este un mensaje de mayk dev</marquee>
    <h1>Post Layout ooo</h1>
    {children}
  </div>
);

export default PostsLayout;
