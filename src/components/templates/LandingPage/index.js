import Icon from '../../atoms/Icon';
import Image from '../../atoms/Image';
import ContentWithImage from '../../molecules/ContentWithImage';
import Navbar from '../../molecules/Navbar';
import Carousel from '../../organisms/Carousel';
import './style.scss';

import spaceGuyImage from '../../../images/space_guy.png';
import { contentHome, images, socialMediaIcons, socialMediaLinks } from './constants';


const LandingPage = () => {

	return (
		<div className="landing-page">
			<Navbar />
			<section id="hero" className="hero">
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
				<div className='d-flex justify-content-center pt-3' >
					<Image images={images} variant="variant-210" />
				</div>
			</section>

			<section id="plans" className='plans'>
				<div className='find-plan d-flex'>
					<h3 className='title-plan'>Encontre o plano perfeito</h3>
					<p className='text-plan'>Escolha o plano que melhor se encaixa na sua empresa e  faça sua assinatura, dentro de 72h iremos liberar seus acessos.</p>
				</div>
				<Carousel />
			</section>

			<section className='contact'>
				<div className='d-flex justify-content-center gap-5 pt-5 pb-5 container'>
					<div>
						<h4 className='contact-title'>@pontogo</h4>
						<p className='contact-text'>se conecta com a gente</p></div>
					<Icon className="icon-container" icons={socialMediaIcons} links={socialMediaLinks} />
				</div>


			</section>

			<section>
				<div className="copywrite d-flex">
					<hr className="vertical-line" />
					<h5>PontoGo - Todos direitos reservados</h5>
					<hr className="vertical-line" />
				</div>
			</section>
		</div>
	);
}

export default LandingPage;
