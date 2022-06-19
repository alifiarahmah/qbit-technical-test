import NavbarFooter from "../layouts/navbar-footer";
import Hero from "../components/landing/hero";
import Description from "../components/landing/description";
import Contact from "../components/landing/contact";

function Landing() {
	return (
		<NavbarFooter>
			<Hero />
			<Description />
			<Contact />
		</NavbarFooter>
	);
}

export default Landing;