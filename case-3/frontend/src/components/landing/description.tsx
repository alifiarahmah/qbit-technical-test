import { Box, HStack, Image, Stack, Text } from "@chakra-ui/react";

function Description() {
	return (
		<Stack
			direction={{ base: "column", md: "row" }}
			justifyContent={{ base: "center", md: "space-evenly"}}
			alignItems="center"
			spacing={5} 
			p={10} 
			minH="70vh"
			backgroundColor="purple"
			color="white"
		>
			<Box width={{ base: "100%", md: "50%" }}>
				<Text fontSize="2xl">
					CetakIn is a digital printing company based in Indonesia. 
					We serve various kinds of printing needs, from simple brochures to 
					complex custom printed merchandise and deliver them to your door.
				</Text>
			</Box>
			<Image src="https://unsplash.com/photos/csJt89dL9pE/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8M3x8ZGlnaXRhbCUyMHByaW50fGVufDB8fHx8MTY1NTYzNjQ0Nw&force=true&w=250"/>
		</Stack>
	);
}

export default Description;