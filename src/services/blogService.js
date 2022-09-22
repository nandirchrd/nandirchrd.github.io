import { client } from './sanityService';

export const getBlogs = () => {
	const query = '*[_type == "blog"]';
	return client.fetch(query);
};
