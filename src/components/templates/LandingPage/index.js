import React from 'react';
import Icon from '../../atoms/Icon';
import Image from '../../atoms/Image';
import ContentWithImage from '../../molecules/ContentWithImage';
import Navbar from '../../molecules/Navbar';
import Carousel from '../../organisms/Carousel';
import './style.scss';


import spaceGuyImage from '../../../images/space_guy.png';
import { contentHome, images, socialMediaIcons, socialMediaLinks } from './constants';


const LandingPage = ({ }) => {

	return (
		<div className="landing-page">
			<Navbar />
			<section id="hero" className="section">
				<div>
					<ContentWithImage
						content={contentHome}
						h2Styles="h2-styles"
						h1Styles="h1-styles h1-mobile"
						pStyles="p-styles"
						imageSrc={spaceGuyImage}
						imageAlt="a floating in space with Virtual Reality"
					/>
				</div>
				<div className='d-flex justify-content-center' >
					<Image images={images} variant="variant-210" />
				</div>
			</section>
			<section>

				<Carousel />
			</section>

			<section className='contact'>
				<div className='d-flex justify-content-center gap-5 pt-5 pb-5 container'>
					<div>
						<h4 className='contact-title'>@pontogo</h4>
						<p className='contact-text'>se conectar com a gente</p></div>
					<Icon className="icon-container" icons={socialMediaIcons} links={socialMediaLinks} />
				</div>
			</section>
		</div>
	);
}

export default LandingPage;
