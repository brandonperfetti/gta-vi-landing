import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import FirstVideo from './sections/FirstVideo';
import Hero from './sections/Hero';
import Jason from './sections/Jason';
import NavBar from './sections/NavBar';
import SecondVideo from './sections/SecondVideo';
import Lucia from './sections/Lucia';

gsap.registerPlugin(ScrollTrigger);

const App = () => {
	return (
		<main>
			<NavBar />
			<Hero />

			<FirstVideo />
			<Jason />

			<SecondVideo />
			<Lucia />
		</main>
	);
};
export default App;
