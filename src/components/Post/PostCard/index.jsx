import './styles.css';

export const PostCard = ({title, body, url}) => {
    return(
        <div className="post-card">
            <img src={url} alt={title} />
            <div className="post-content">
                <h2>{title}</h2>
                <p>{body}</p>
            </div>
        </div>
    )
}