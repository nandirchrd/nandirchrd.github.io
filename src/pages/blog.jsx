import { useParams } from 'react-router-dom';
const Blog = () => {
	const { slug } = useParams();
	return <div>Blog {slug}</div>;
};

export default Blog;
