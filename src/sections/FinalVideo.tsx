import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';

const FinalVideo = () => {
	const videoRef = useRef<HTMLVideoElement>(null);

	useGSAP(() => {
		gsap.set('.final-content', {
			opacity: 0,
		});

		gsap.timeline({
			scrollTrigger: {
				trigger: '.final',
				start: 'top top',
				end: '90% top',
				scrub: true,
				pin: true,
			},
		});

		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: '.final',
				start: 'top 80%',
				end: '90% top',
				scrub: true,
			},
		});

		tl.to('.final-content', {
			opacity: 1,
			duration: 1,
			scale: 1,
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
	});

	return (
		<section className="final">
			<div className="final-content size-full">
				<video
					ref={videoRef}
					muted
					playsInline
					preload="metadata"
					src="/videos/output3.mp4"
					className="size-full object-cover"
				></video>
			</div>
		</section>
	);
};
export default FinalVideo;
