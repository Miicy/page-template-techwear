import { useTheme } from "@emotion/react";
import { Box, Divider } from "@mui/material";
import React, { useState } from "react";
import useScreenSize from "../../../helpers/useSreenSize";
import FiltersFormik from "./FiltersFormik";

function FilterPcExpanded({ isVertical }) {
	const theme = useTheme();
	const { isSmallScreen } = useScreenSize();

	const [filterReset, setFilterReset] = useState(false);
	const handleReset = () => {
		setFilterReset(true);
	};

	const FilterPcExpandedStyles = {
		container: {
			height: "100%",
			width: "100%",
			display: "flex",
			flexDirection: "column",
			justifyContent: "space-between",
			alignItems: "flex-start",
			backgroundColor: isSmallScreen
				? theme.palette.secondary.main
				: undefined,
		},
		heading: {
			width: "100%",
			justifyContent: !isVertical ? "space-between" : undefined,
			height: isVertical ? "13%" : "25%",
			color: theme.palette.customOpposite.main,
			backgroundColor: theme.palette.primary.main,
			fontWeight: "bold",
			fontSize: isVertical ? undefined : "0.9em",
			display: "flex",
			alignItems: "center",
		},
		reset: {
			marginRight: !isVertical ? "20px" : undefined,
			fontSize: isVertical ? "0.8em" : undefined,
			cursor: "pointer",
			display: "flex",
			alignItems: isVertical ? "center" : undefined,
			justifyContent: isVertical ? "center" : undefined,
			width: isVertical ? "100%" : undefined,
		},
		border: {
			border: `1px solid ${theme.palette.customOppositeLighter.main}`,
			borderRadius: "5px",
			padding: isVertical ? "10px" : "5px",
			width: isVertical ? "40%" : "80px",
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			"&:hover": {
				backgroundColor: theme.palette.forth.main,
			},
			backgroundColor: theme.palette.third.main,
		},
	};

	return (
		<Box sx={FilterPcExpandedStyles.container}>
			<Box sx={FilterPcExpandedStyles.heading}>
				<p style={{ marginLeft: "20px" }}>Filter Categories</p>
				{!isVertical && (
					<Box
						onClick={handleReset}
						onTouchEnd={handleReset}
						sx={FilterPcExpandedStyles.reset}
					>
						<Box sx={FilterPcExpandedStyles.border}> Reset Filters</Box>
					</Box>
				)}
			</Box>
			<Divider orientation="horizontal" variant="fullWidth" flexItem />
			<FiltersFormik
				filterReset={filterReset}
				setFilterReset={setFilterReset}
				isVertical={isVertical}
			/>
			<Divider orientation="horizontal" variant="fullWidth" flexItem />
			{isVertical && (
				<Box sx={FilterPcExpandedStyles.heading}>
					{isVertical && (
						<Box
							onClick={handleReset}
							onTouchEnd={handleReset}
							sx={FilterPcExpandedStyles.reset}
						>
							<Box sx={FilterPcExpandedStyles.border}> Reset Filters</Box>
						</Box>
					)}
				</Box>
			)}
		</Box>
	);
}

export default FilterPcExpanded;
