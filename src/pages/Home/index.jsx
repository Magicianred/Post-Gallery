import { useCallback, useEffect, useState } from 'react';
import { Post } from '../../components/Post';
import { TextInput } from '../../components/TextInput';
import { loadPost } from '../../utils/loadPost';
import './styles.css';

function App() {
  const [post, setPost] = useState([]);
  const [search, setSearch] = useState('');

  const handleLoadPost = useCallback(async () => {
    const load = await loadPost();

    setPost(load);
  }, []);

  const handleChange = ({target}) => {
    const {value} = target;

    setSearch(value);
  }

  const filteredposts = !!search ? post.filter(post => {
    return post.title.toLowerCase().includes(search.toLocaleLowerCase());
  }) : post;

  useEffect(() => {
    handleLoadPost();
  }, [handleLoadPost])

  return (
    <div className="App">
      <div className="textinput-container">
        <TextInput type="search" value={search} onChange={handleChange}/>
      </div>
      {filteredposts.length > 0 && <Post posts={filteredposts} />}
      {filteredposts.length === 0 && <h2>No posts :(</h2>}
    </div>
  );
}

export default App;
