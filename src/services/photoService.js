import photos from '../constants/photos';

export const getPhoto = (id) => {
	return photos.find((photo) => photo.id === parseInt(id));
};

const photoService = {
	getPhoto,
};

export default photoService;
