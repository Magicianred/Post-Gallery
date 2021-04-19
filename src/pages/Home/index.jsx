import { useCallback, useEffect, useState } from 'react';
import { Post } from '../../components/Post';
import { TextInput } from '../../components/TextInput';
import { loadPost } from '../../utils/loadPost';
import noposts from '../../assets/noposts.svg';
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
    <div className="home-container">
      <div className="textinput-container">
        {search && <h2>Search: {search}</h2>}
        <TextInput 
          type="search" 
          value={search} 
          onChange={handleChange}
          placeholder="Search"
        />
      </div>
      {filteredposts.length > 0 && <Post posts={filteredposts} />}
      {filteredposts.length === 0 && (
        <div style={{textAlign: 'center', margin: '50px 0'}}>
          <div style={{width: 'min(100%, 380px)', margin: '0 auto'}}>
            <img src={noposts} alt="No posts" style={{width: '100%', maxWidth: '100%'}}/>
          </div>
          <h2>No posts :(</h2>
        </div>
      )}
    </div>
  );
}

export default App;
