import { useCallback, useEffect, useState } from 'react';
import { Post } from '../../components/Post';
import { loadPost } from '../../utils/loadPost';
import './styles.css';

function App() {
  const [post, setPost] = useState([]);

  const handleLoadPost = useCallback(async () => {
    const load = await loadPost();

    setPost(load);
  }, []);

  useEffect(() => {
    handleLoadPost();
  }, [handleLoadPost])

  return (
    <div className="App">
      <Post posts={post} />
    </div>
  );
}

export default App;
