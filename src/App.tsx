import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import FirstVideo from './sections/FirstVideo';
import Hero from './sections/Hero';
import Jason from './sections/Jason';
import NavBar from './sections/NavBar';
import SecondVideo from './sections/SecondVideo';
import Lucia from './sections/Lucia';
import PostCard from './sections/PostCard';

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

			<PostCard />

			{/* Uncomment the following line to enable the Jason section */}
			{/* <Jason /> */}
		</main>
	);
};
export default App;
