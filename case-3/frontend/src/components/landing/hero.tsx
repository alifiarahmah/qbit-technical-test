import { Box, Button, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Hero() {
	return (
		<VStack 
			height="90vh" 
			justifyContent="center" 
			alignItems="center"
			backgroundImage="linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(https://unsplash.com/photos/Tzm3Oyu_6sk/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjU1NjM2NjE5&force=true&w=2400)"
			backgroundSize="cover"
			color="white"
		>
			<Box my={5} textAlign="center">
				<Text as="h1" fontSize="6xl" fontWeight="bold">
					CetakIn
				</Text>
				<Text as="p" fontSize="2xl">Your solution for digital printing</Text>
			</Box>
			<Button as={Link} to="/products" backgroundColor="purple">
				See Our Products
			</Button>
		</VStack>
	);
}

export default Hero;