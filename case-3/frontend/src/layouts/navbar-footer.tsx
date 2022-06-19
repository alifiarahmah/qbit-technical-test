import { Box } from "@chakra-ui/react";
import Footer from "../components/common/footer";
import Navbar from "../components/common/navbar";

function NavbarFooter(props: any) {
	return (
		<>
			<Navbar/>
				<Box {...props}>
					{props.children}
				</Box>
			<Footer/>
		</>
	)
}

export default NavbarFooter;