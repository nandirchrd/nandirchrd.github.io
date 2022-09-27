import { useContext, useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ThemeContext } from '../contexts/themeContext';
import { getPhoto } from '../services/photoService';

const Photo = () => {
	const { theme } = useContext(ThemeContext);
	const navigate = useNavigate();
	const { id } = useParams();
	const [photo, setPhoto] = useState(null);
	const note = useRef(null);

	useEffect(() => {
		setTimeout(() => {
			note.current.classList.add('hidden');
		}, 8000);
	}, []);
	useEffect(() => {
		const photo = getPhoto(id);
		if (!photo) {
			navigate('/home');
		}
		setPhoto(photo);
	}, [id, navigate]);
	return (
		<main id='photo' className='mt-20 mb-5'>
			<section>
				<div className='container'>
					{!photo && (
						<h1
							className={`p-2 text-center text-xl font-semibold border-b ${
								theme === 'dark'
									? 'border-white'
									: 'border-dark'
							}`}>
							Loading ...
						</h1>
					)}
					{photo && (
						<div className='w-full mt-2 pb-2'>
							<div
								ref={note}
								className='note flex justify-center border border-red-500 p-1'>
								<p className='text-red-500 w-[90%]'>
									NOTES: Please include the source link or ask
									my permission first if you want to use the
									picture!
									<span className='text-center'>
										&copy;{new Date().getFullYear()}
									</span>
								</p>
							</div>

							<img
								onContextMenu={(e) => e.preventDefault()}
								className='cursor-pointer rounded-md mx-auto max-h-80 mt-2'
								src={photo.thumb}
								alt={photo.descriptions[0].title}
							/>
							<div className='description'>
								<h1
									className={`border-b py-2 ${
										theme === 'dark'
											? 'text-gray-400'
											: 'text-gray-800'
									}`}>
									DESCRIPTIONS
								</h1>
								<div
									className={`flex flex-col mt-2 ${
										theme === 'dark'
											? 'text-gray-400'
											: 'text-gray-800'
									}`}>
									{photo.descriptions.map((desc) => (
										<div
											className='flex gap-2'
											key={desc.label}>
											<span className='block min-w-[4em]'>
												{desc.label}
											</span>
											<span className='px-2'>:</span>
											<span>
												{
													desc[
														`${desc.label.toLowerCase()}`
													]
												}
											</span>
										</div>
									))}
								</div>
							</div>
						</div>
					)}
				</div>
			</section>
		</main>
	);
};

export default Photo;
