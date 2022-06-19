import { Grid, Text } from "@chakra-ui/react";
import NavbarFooter from "../layouts/navbar-footer";
import Tile from "../components/products/tile";

import { productList } from "../data/productlist";

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
				{productList.map((product: any) => (
					<Tile key={product.id} name={product.name} image={product.image} price={product.price} />
				))}
			</Grid>
		</NavbarFooter>
	);
}

export default Products;