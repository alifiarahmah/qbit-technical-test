import {
	Box, Flex, Text
} from "@chakra-ui/react"
import { Link } from "react-router-dom";

function NavLink(props: any) {
	return (
		<Box mx={3} _hover={{ textDecoration: "underline" }} >
			<Link to={props.to}>{props.children}</Link>
		</Box>
	)
}

function Navbar() {
	return (
		<Flex bgColor="purple" color="white" justifyContent="space-between" alignItems="center" p={5}>
			<Text fontWeight="extrabold" fontSize="3xl">CetakIn</Text>
			<Flex>
				<NavLink to="/">Home</NavLink>
				<NavLink to="/products">Our Products</NavLink>
			</Flex>
		</Flex>
	)
}

export default Navbar