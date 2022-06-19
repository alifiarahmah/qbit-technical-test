import {
	Box, Flex, Text
} from "@chakra-ui/react"

function Footer() {
	return (
		<Flex bgColor="purple" color="white" justifyContent="center" alignItems="center" p={5}>
			<Text>CetakIn @2022</Text>
		</Flex>
	)
}

export default Footer