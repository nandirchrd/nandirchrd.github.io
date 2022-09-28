import { client } from './sanityService';

export const getBlogs = () => {
	const query =
		'*[_type == "blog"]{ _id, title, "thumb": mainImage.asset->url, body, author->{name,image}, categories[]->{title}, "slug": slug.current, "date": _createdAt  }';
	return client.fetch(query);
};

export const getBlog = (slug) => {
	const blogs = JSON.parse(sessionStorage.getItem('blogs'));
	const blog = blogs.find((blog) => blog.slug === slug);

	return blog ? blog : null;
};
