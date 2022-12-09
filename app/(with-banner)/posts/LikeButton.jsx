'use client';

import { useState } from 'react';

const LikeButton = () => {
  const [like, setLike] = useState(false);
  return (
    <div>
      <button onClick={() => setLike(!like)}>{like ? '🔥' : '😉'}</button>
    </div>
  );
};

export default LikeButton;
