import { Button, Text, VStack } from "@chakra-ui/react";

function Contact() {
	return (
		<VStack p={7} height="50vh" justifyContent="center">
			<Text fontSize="5xl" fontWeight="bold">Interested?</Text>
			<Button size="lg" bgColor="purple" color="white" fontSize="2xl">
				Contact us
			</Button>
		</VStack>
	)
}

export default Contact;