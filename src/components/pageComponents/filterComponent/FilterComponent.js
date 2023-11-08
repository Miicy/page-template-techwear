import { Box, Fade, Tooltip, useTheme } from "@mui/material";
import React from "react";
import Crop169Icon from "@mui/icons-material/Crop169";
import KeyboardArrowRightTwoToneIcon from "@mui/icons-material/KeyboardArrowRightTwoTone";
import FilterPcExpanded from "./FilterPcExpanded";
import { useIsVertical } from "../../../helpers/useIsVertical";

function FilterComponent() {
	const theme = useTheme();
	const [isVertical, isExpanded, handleClick, handleClickExpanded] =
		useIsVertical();

	const filterComponentStyles = {
		bar: {
			backgroundColor: theme.palette.primary.main,
			width: isVertical ? "70px" : "100%",
			height: isVertical ? `calc(100vh - 60px)` : `80px`,
			minHeight: isVertical ? "550px" : undefined,
			top: 80,
			zIndex: 5,
			position: "absolute",
			boxShadow: isVertical
				? `3px 0px 7px 1px rgb(0, 0, 0, 0.33)`
				: `0px 3px 7px 1px rgb(0, 0, 0, 0.33)`,
			display: "flex",
			flexDirection: isVertical ? "column" : "row",
			justifyContent: "space-between",
			alignItems: "center",
		},
		divider: {
			width: isVertical ? "100%" : "6%",
			height: isVertical ? "10%" : "100%",
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
		},
		expanded: {
			minWidth: "220px",
			top: isVertical ? undefined : 80,
			left: isVertical ? 70 : undefined,
			width: isVertical ? "24vw" : "100%",
			height: isVertical ? "100%" : "35vh",
			backgroundColor: theme.palette.secondary.main,
			position: "absolute",
			zIndex: 10,
			boxShadow: isVertical
				? `3px 0px 7px 1px rgb(0, 0, 0, 0.33), inset 3px 0px 10px 0px rgba(0,0,0,0.33)`
				: `0px 3px 7px 1px rgb(0, 0, 0, 0.33), inset 0px 3px 10px 0px rgba(0,0,0,0.33)`,
		},
		icon: {
			fontSize: "1.75em",
			cursor: "pointer",
			color: `${theme.palette.customOpposite.main}`,
			"&:hover": {
				color: theme.palette.text.secondary,
			},
		},
		iconVertical: {
			transform: "rotate(90deg)",
		},
		iconVerticalExpanded: {
			transform: "rotate(180deg)",
		},
		iconHorizontalExpanded: {
			transform: "rotate(-90deg)",
		},
	};

	if (isVertical) {
		if (isExpanded) {
			filterComponentStyles.icon = {
				...filterComponentStyles.icon,
				...filterComponentStyles.iconVerticalExpanded,
			};
		}
	} else {
		if (isExpanded) {
			filterComponentStyles.icon = {
				...filterComponentStyles.icon,
				...filterComponentStyles.iconHorizontalExpanded,
			};
		} else {
			filterComponentStyles.icon = {
				...filterComponentStyles.icon,
				...filterComponentStyles.iconVertical,
			};
		}
	}

	return (
		<Box sx={filterComponentStyles.bar}>
			<Box sx={filterComponentStyles.divider} onClick={handleClickExpanded}>
				<Tooltip
					placement={isVertical ? "right" : "bottom"}
					title="Expand Filter"
				>
					<KeyboardArrowRightTwoToneIcon sx={filterComponentStyles.icon} />
				</Tooltip>
			</Box>
			<Box sx={filterComponentStyles.divider} onClick={handleClick}>
				<Tooltip
					placement={isVertical ? "right" : "bottom"}
					title="Toggle Vertical"
				>
					<Crop169Icon sx={filterComponentStyles.icon} />
				</Tooltip>
			</Box>
			<Fade in={isExpanded}>
				<Box sx={filterComponentStyles.expanded}>
					<FilterPcExpanded isVertical={isVertical} />
				</Box>
			</Fade>
		</Box>
	);
}

export default FilterComponent;
