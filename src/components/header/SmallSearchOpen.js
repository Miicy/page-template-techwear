import { useTheme } from "@emotion/react";
import { Box } from "@mui/material";
import React from "react";

function SmallSearchOpen() {
	const theme = useTheme();

	const smallSearchOpenContainerStyles = {
		mt: 12,
		backgroundColor: `${theme.palette.secondary.main}`,
		zIndex: 5,
		position: "absolute",
		width: "100%",
		height: `calc(100vh - 100px)`,
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	};

	return <Box sx={smallSearchOpenContainerStyles}>Search Open</Box>;
}

export default SmallSearchOpen;
