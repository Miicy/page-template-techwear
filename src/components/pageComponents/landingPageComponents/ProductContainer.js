import { Grid } from "@mui/material";
import React from "react";
import useScreenSize from "../../../helpers/useSreenSize";
import { isMobile } from "react-device-detect";
import { getAllProducts } from "../../../helpers/useGetProducts";
import productImage from "../../../media/product.jpg";
import productImage2 from "../../../media/product1.png";
import productImage3 from "../../../media/product2.png";
import productImage4 from "../../../media/product3.png";
import productImage5 from "../../../media/product4.png";
import productImage6 from "../../../media/product5.png";
import productImage7 from "../../../media/product6.png";
import productImage8 from "../../../media/product7.png";
import ProductItem from "./ProductItem";

function ProductContainer() {
	const { isSmallScreen, isMediumScreen } = useScreenSize();
	const allProducts = getAllProducts();
	let limit = 8;
	const productImages = [productImage, productImage2, productImage3, productImage4,productImage5, productImage6, productImage7, productImage8];
	
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
						productImage={productImages[index % productImages.length]} 
					/>
				</Grid>
			))}
		</Grid>
	);
}

export default ProductContainer;
