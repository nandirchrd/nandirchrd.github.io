// POTRAIT IMAGES
import Catterpillar from '../assets/images/photography/potrait/caterpillar.jpg';
import Grasshopper from '../assets/images/photography/potrait/grasshopper.jpg';
import Mosque from '../assets/images/photography/potrait/mosque.jpg';
// LANDSCAPE IMAGES
import CirclePink from '../assets/images/photography/landscape/circle-pink.jpg';
import Flower from '../assets/images/photography/landscape/flower.jpg';
import GreenBubbles from '../assets/images/photography/landscape/green-bubbles.jpg';
import IDontKnowTwo from '../assets/images/photography/landscape/i-dont-know-hehe.jpg';
import IDontKnow from '../assets/images/photography/landscape/i-dont-know.jpg';
import Stones from '../assets/images/photography/landscape/stones.jpg';
import SunsetOne from '../assets/images/photography/landscape/sunset-one.jpg';
import SunsetTwo from '../assets/images/photography/landscape/sunset-two.jpg';
import TreeStands from '../assets/images/photography/landscape/tree-stands.jpg';
// PLEASE IF U COPY THIS PICTURE, TEXT nandirchrd@gmail.com FIRST and put the source from to the link
let id = 0;
class createPhoto {
	constructor(thumb, descriptions) {
		this.id = id++;
		this.thumb = thumb;
		this.descriptions = descriptions;
	}
}

const photos = [
	new createPhoto(Catterpillar, [
		{ label: 'Title', title: 'Catterpillar' },
		{ label: 'ShootBy', shootby: 'Nandi Setiadi' },
		{ label: 'Date', date: '2018-08-20' },
		{ label: 'Location', location: 'Tasikmalaya, West Java, Indonesia' },
		{
			label: 'Camera',
			camera: 'Redmi 3S Camera (with external macro lens)',
		},
		{ label: 'Type', type: 'POTRAIT' },
	]),
	new createPhoto(Grasshopper, [
		{ label: 'Title', title: 'Grasshopper' },
		{ label: 'ShootBy', shootby: 'Nandi Setiadi' },
		{ label: 'Date', date: '2018-08-20' },
		{ label: 'Location', location: 'Tasikmalaya, West Java, Indonesia' },
		{
			label: 'Camera',
			camera: 'Redmi 3S Camera (with external macro lens)',
		},
		{ label: 'Type', type: 'POTRAIT' },
	]),
	new createPhoto(Mosque, [
		{ label: 'Title', title: 'Agung Mosque' },
		{ label: 'ShootBy', shootby: 'Nandi Setiadi' },
		{ label: 'Date', date: '2019-08-20' },
		{
			label: 'Location',
			location: 'Tasikmalaya, West Java, Indonesia',
		},
		{ label: 'Camera', camera: 'Redmi 3S Camera' },

		{ label: 'Type', type: 'POTRAIT' },
	]),
	new createPhoto(CirclePink, [
		{ label: 'Title', title: 'Pink Flower' },
		{ label: 'ShootBy', shootby: 'Nandi Setiadi' },
		{ label: 'Date', date: '2018-08-20' },
		{
			label: 'Location',
			location: 'Tasikmalaya, West Java, Indonesia',
		},
		{ label: 'Camera', camera: 'Redmi 3S Camera' },

		{ label: 'Type', type: 'Landscape' },
	]),
	new createPhoto(Flower, [
		{ label: 'Title', title: 'Yellow Flower' },
		{ label: 'ShootBy', shootby: 'Nandi Setiadi' },
		{ label: 'Date', date: '2018-08-20' },
		{
			label: 'Location',
			location: 'Tasikmalaya, West Java, Indonesia',
		},
		{ label: 'Camera', camera: 'Redmi 3S Camera' },

		{ label: 'Type', type: 'Landscape' },
	]),
	new createPhoto(GreenBubbles, [
		{ label: 'Title', title: 'Green Flower Like Berries' },
		{ label: 'ShootBy', shootby: 'Nandi Setiadi' },
		{ label: 'Date', date: '2018-08-20' },
		{
			label: 'Location',
			location: 'Tasikmalaya, West Java, Indonesia',
		},
		{ label: 'Camera', camera: 'Redmi 3S Camera' },

		{ label: 'Type', type: 'Landscape' },
	]),
	new createPhoto(IDontKnow, [
		{ label: 'Title', title: 'Little Monster' },
		{ label: 'ShootBy', shootby: 'Nandi Setiadi' },
		{ label: 'Date', date: '2018-08-20' },
		{
			label: 'Location',
			location: 'Tasikmalaya, West Java, Indonesia',
		},
		{ label: 'Camera', camera: 'Redmi 3S Camera' },
		{ label: 'Type', type: 'Landscape' },
	]),
	new createPhoto(IDontKnowTwo, [
		{ label: 'Title', title: 'I Dont Know Is This' },
		{ label: 'ShootBy', shootby: 'Nandi Setiadi' },
		{ label: 'Date', date: '2018-08-20' },
		{
			label: 'Location',
			location: 'Tasikmalaya, West Java, Indonesia',
		},
		{ label: 'Camera', camera: 'Redmi 3S Camera' },
		{ label: 'Type', type: 'Landscape' },
	]),
	new createPhoto(Stones, [
		{ label: 'Title', title: 'Sunset Stones' },
		{ label: 'ShootBy', shootby: 'Nandi Setiadi' },
		{ label: 'Date', date: '2018-08-20' },
		{
			label: 'Location',
			location: 'Tasikmalaya, West Java, Indonesia',
		},
		{ label: 'Camera', camera: 'Redmi 3S Camera' },
		{ label: 'Type', type: 'Landscape' },
	]),
	new createPhoto(SunsetOne, [
		{ label: 'Title', title: 'Kawalu Sunset' },
		{ label: 'ShootBy', shootby: 'Nandi Setiadi' },
		{ label: 'Date', date: '2018-08-20' },
		{
			label: 'Location',
			location: 'Tasikmalaya, West Java, Indonesia',
		},
		{ label: 'Camera', camera: 'Redmi 3S Camera' },
		{ label: 'Type', type: 'Landscape' },
	]),
	new createPhoto(SunsetTwo, [
		{ label: 'Title', title: 'Kawalu Sunset 2' },
		{ label: 'ShootBy', shootby: 'Nandi Setiadi' },
		{ label: 'Date', date: '2018-08-20' },
		{
			label: 'Location',
			location: 'Tasikmalaya, West Java, Indonesia',
		},
		{ label: 'Camera', camera: 'Redmi 3S Camera' },
		{ label: 'Type', type: 'Landscape' },
	]),
	new createPhoto(TreeStands, [
		{ label: 'Title', title: 'Tree Stands Alone' },
		{ label: 'ShootBy', shootby: 'Nandi Setiadi' },
		{ label: 'Date', date: '2018-08-20' },
		{
			label: 'Location',
			location: 'Tasikmalaya, West Java, Indonesia',
		},
		{ label: 'Camera', camera: 'Redmi 3S Camera' },
		{ label: 'Type', type: 'Landscape' },
	]),
];

export default photos;
