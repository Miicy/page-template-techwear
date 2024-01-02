import React, { useState } from "react";
import { Box } from "@mui/material";

function ProductItem({ product, isSmallScreen, isMediumScreen, productImage }) {
	const [isHovered, setIsHovered] = useState(false);

	const productItemStyles = {
		item: {
			borderRadius: "2px",
			cursor: "pointer",
			transition: "box-shadow 100ms ease-out",
			border: "1px solid rgba(0, 0, 0, 0.4)",
			boxShadow: "1px 1px 5px 2px rgba(136, 136, 136, 0.42)",
			display: "flex",
			width: isSmallScreen ? "80%" : isMediumScreen ? "80%" : "85%",
			height: isSmallScreen ? "130px" : isMediumScreen ? "130px" : "200px",
			backgroundImage: `url(${productImage})`,
			backgroundPosition: "center",
			backgroundSize: "cover",
		},
		hover: {
			transition: "0.3s",
			height: "100%",
			width: "100%",
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
		},
		overlay: {
			height: "100%",
			width: "100%",
			backgroundColor: "white",
			opacity: isHovered ? 0.8 : 0,
			display: "flex",
			flexDirection: "column",
			justifyContent: "center",
			alignItems: "center",
		},
	};

	const handleMouseEnter = () => {
		setIsHovered(true);
	};

	const handleMouseLeave = () => {
		setIsHovered(false);
	};

	return (
		<Box
			sx={productItemStyles.item}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			<Box sx={isHovered ? productItemStyles.hover : { ...productItemStyles.hover, opacity: 1 }}>
				<Box sx={productItemStyles.overlay}>
					<h3 style={{textAlign:"center"}}>{product.title}</h3>
					<p style={{fontWeight:"bold"}}> ${product.price}</p>
				</Box>
			</Box>
		</Box>
	);
}

export default ProductItem;
