import React from 'react';
import { Carousel as ResponsiveCarousel } from 'react-responsive-carousel';
import './style.scss';

const Carousel = () => {
	return (
		<section id="carousel" className="section">
			<ResponsiveCarousel>
				<div>
					<img src="@images/carousel-image-1.jpg" alt="Carousel Image 1" />
				</div>
				<div>
					<img src="@images/carousel-image-2.jpg" alt="Carousel Image 2" />
				</div>
				<div>
					<img src="@images/carousel-image-3.jpg" alt="Carousel Image 3" />
				</div>
				<div>
					<img src="@images/carousel-image-4.jpg" alt="Carousel Image 4" />
				</div>
			</ResponsiveCarousel>
		</section>
	);
}

export default Carousel;