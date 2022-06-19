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
					bgImage={`url(${props.image})`}
					bgPos="center"
					bgSize="cover"
				>
				</Box>
				<Text fontWeight="bold" fontSize="xl">{props.name}</Text>
				<Text>Start from {props.price}</Text>
				<Button>Order now</Button>
			</VStack>
		</Box>
	)
}

export default Tile;