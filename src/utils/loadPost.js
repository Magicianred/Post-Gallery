export const loadPost = async () => {
    const contentApi = await fetch('https://jsonplaceholder.typicode.com/posts');
    const imagesApi = await fetch(`https://api.unsplash.com/photos/random/?client_id=${process.env.REACT_APP_API_KEY}&query=mountain&count=20`);

    const [content, images] = await Promise.all([contentApi, imagesApi]);
    const contentJson = await content.json();
    const imagesJson = await images.json();

    const finalPost = imagesJson.map((post, index) => {
        return { ...post, title: contentJson[index].title, body: contentJson[index].body };
    });

    return finalPost;
}