import { Grid, GridItem, Text } from "@chakra-ui/react";
import NavbarFooter from "../layouts/navbar-footer";
import Tile from "../components/products/tile";

function Products() {
	return (
		<NavbarFooter>
			<Text my={10} fontSize="6xl" fontWeight="bold" textAlign="center">Product List</Text>
			<Grid 
				templateColumns="repeat(auto-fit, minmax(200px, 1fr))"
				gap={5} 
				mx={20}
				my={10} 
				alignItems="stretch"
			>
				<Tile />
				<Tile />
				<Tile />
				<Tile />
				<Tile />
				<Tile />
				<Tile />
			</Grid>
		</NavbarFooter>
	);
}

export default Products;