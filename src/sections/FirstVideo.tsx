import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';

const FirstVideo = () => {
	const videoRef = useRef<HTMLVideoElement>(null);

	useGSAP(() => {
		gsap.set('.first-vd-wrapper', {
			marginTop: '-100vh',
			opacity: 0,
		});

		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: '.first-vd-wrapper',
				start: 'top top',
				end: '+=200% top',
				scrub: true,
				pin: true,
			},
		});

		tl.to('.hero-section', {
			delay: 0.5,
			opacity: 0,
			ease: 'power1.inOut',
		});
		tl.to('.first-vd-wrapper', {
			opacity: 1,
			duration: 2,
			ease: 'power1.inOut',
		});

		if (videoRef.current) {
			videoRef.current.onloadedmetadata = () => {
				tl.to(
					videoRef.current,
					{
						currentTime: videoRef.current?.duration || 0,
						duration: 3,
						ease: 'power1.inOut',
					},
					'<',
				);
			};
		}
	}, []);

	return (
		<section className="first-vd-wrapper">
			<div className="h-dvh">
				<video
					ref={videoRef}
					muted
					playsInline
					preload="metadata"
					src="/videos/output1.mp4"
					className="first-vd"
				></video>
			</div>
		</section>
	);
};
export default FirstVideo;
