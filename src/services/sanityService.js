import sanityClient from '@sanity/client';

export const client = sanityClient({
	projectId: 'hh69dqnw',
	dataset: 'production',
	apiVersion: '2022-09-22',
	useCdn: true,
});

const sanityServices = { client };
export default sanityServices;
