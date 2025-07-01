import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import FirstVideo from './sections/FirstVideo';
import Hero from './sections/Hero';
import NavBar from './sections/NavBar';
import Jason from './sections/Jason';

gsap.registerPlugin(ScrollTrigger);

const App = () => {
	return (
		<main>
			<NavBar />
			<Hero />
			<FirstVideo />
			<Jason />
		</main>
	);
};
export default App;
