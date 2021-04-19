import { PostCard } from './PostCard';
import './styles.css';

export const Post = ({posts}) => {
    return(
        <div className="post-container">
            {posts.map(post => (
                <PostCard
                    key={post.id}
                    id={post.id}
                    url={post.urls.regular}
                    title={post.title}
                    body={post.body}
                />
            ))}
        </div>
    )
}