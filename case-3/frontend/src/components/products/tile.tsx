import { Box, Button, Image, Text, VStack } from "@chakra-ui/react";

function Tile(props: any) {
	return (
		<Box
			borderRadius="2xl"
			boxShadow="0px 0px 10px rgba(0, 0, 0, 0.1)"
		>
			<VStack borderRadius="inherit" spacing={2} mb={3}>
				<Box 
					height="250px"
					width="100%"
					borderTopRadius="inherit"
					bgImage="url(https://unsplash.com/photos/lihCTIOP28U/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjU1NjM5MDUx&force=true&w=640)"
					bgPos="top"
					bgSize="cover"
				>
				</Box>
				<Text fontWeight="bold" fontSize="xl">Custom Totebag</Text>
				<Button>Order now</Button>
			</VStack>
		</Box>
	)
}

export default Tile;