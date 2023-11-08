import { Grid } from "@mui/material";
import React from "react";
import useScreenSize from "../../../helpers/useSreenSize";
import { isMobile } from "react-device-detect";
import { getAllProducts } from "../../../helpers/useGetProducts";
import productImage from "../../../media/product.jpg";
import ProductItem from "./ProductItem";

function ProductContainer() {
	const { isSmallScreen, isMediumScreen } = useScreenSize();
	const allProducts = getAllProducts();
	let limit = 8;
	
	if (isMobile) {
		// For mobile screens
		limit = 4;
	  } else if (isMediumScreen) {
		// For medium screens
		limit = 9;
	  } else if (isSmallScreen) {
		// For small screens
		limit = 4;
	  }
	const productContainerStyles = {
		container: {
			position: "relative",
			width: "100%",
			height: "100%",
			ml: 0,
			mb: 2,
			alignItems: "center",
			justifyContent: "center",
		},
		itemContainer: {
			transition: "0.3s",
		},
	};
	return (
		<Grid container spacing={2} sx={productContainerStyles.container}>
			{allProducts.slice(0, limit).map((product, index) => (
				<Grid
					item
					xs={isSmallScreen ? 5 : isMediumScreen ? 4 : 3}
					sx={productContainerStyles.itemContainer}
					key={index}
				>
					<ProductItem
						product={product}
						isSmallScreen={isSmallScreen}
						isMediumScreen={isMediumScreen}
						productImage={productImage}
					/>
				</Grid>
			))}
		</Grid>
	);
}

export default ProductContainer;
