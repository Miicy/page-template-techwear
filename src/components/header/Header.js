import { Box, Grid } from "@mui/material";
import { useTheme } from "@emotion/react";
import { useState } from "react";
import useScreenSize from "../../helpers/useSreenSize";
import AppBar from "@mui/material/AppBar";
import Logo from "./Logo";
import SearchInput from "./SearchInput";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import HeaderIcons from "./HeaderIcons";
import SmallScreenFilterScroll from "../pageComponents/filterComponent/SmallScreenFilter";
import SmallSearchOpen from "./SmallSearchOpen";

function Header() {
	const theme = useTheme();
	const { isSmallScreen } = useScreenSize();
	const showSearchInput = !isSmallScreen;
	const [searchOpen, setSearchOpen] = useState(false);

	const handleClickOpen = () => {
		if (!searchOpen) {
			setSearchOpen(true);
		}
	};

	const handleClickClose = () => {
		if (searchOpen) {
			setSearchOpen(false);
		}
	};

	const headerStyles = {
		container: {
			display: "flex",
			flexDirection: "column",
			position: "relative",
		},
		appBar: {
			position: "fixed",
			top: "0",
			width: "100%",
			height: "30px",
			minHeight: "85px",
			minWidth: "290px",
			display: "flex",
			justifyContent: "space-between",
			flexDirection: "row",
			alignItems: "center",
			zIndex: 15,
			backgroundColor: theme.palette.primary.main1,
		},
		container20: {
			display: "flex",
			flex: "0 0 20%",
		},
		container50: {
			ml: "5px",
			display: "flex",
			flex: "0 1 50%",
			justifyContent: "center",
		},
		search: {
			width: "60%",
			minWidth: "200px",
		},
		smallSearchContainer: {
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			width: "70%",
		},
		smallSearch: {
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			mt: "85px",
			height: "60px",
			width: "100%",
			minWidth: "290px",
			borderBottom: `1px solid ${theme.palette.customOppositeLighter.main}`,
			borderRadius: "0px 0px 2px 2px",
			backgroundColor: theme.palette.third.main,
			zIndex: 10,
			// position: "absolute",
			position: "fixed",
		},
		backIconContainer: {
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			width: "100%",
			height: "100%",
			zIndex: 9999,
		},
		backIcon: {
			color: theme.palette.customOpposite.main,
			fontSize: "1em",
			cursor: "pointer",
		},
	};

	return (
		<Box sx={headerStyles.container}>
			<AppBar
				position="static"
				enableColorOnDark
				color="primary"
				sx={headerStyles.appBar}
			>
				<Grid sx={headerStyles.container20}>
					<Logo isSmallScreen={isSmallScreen} />
				</Grid>
				{showSearchInput && (
					<Grid sx={headerStyles.container50}>
						<Grid sx={headerStyles.search}>
							<SearchInput />
						</Grid>
					</Grid>
				)}
				<HeaderIcons />
			</AppBar>
			{!showSearchInput && (
				<Grid sx={headerStyles.smallSearch}>
					<Box sx={{ width: "15%" }}>
						{searchOpen && (
							<Box
								sx={headerStyles.backIconContainer}
								onClick={handleClickClose}
								onTouchStart={handleClickClose}
							>
								<ArrowBackIosIcon sx={headerStyles.backIcon} />
							</Box>
						)}
					</Box>
					<Grid
						sx={headerStyles.smallSearchContainer}
						onClick={handleClickOpen}
						onTouchStart={handleClickOpen}
					>
						<SearchInput />
					</Grid>
				</Grid>
			)}

			{!showSearchInput && !searchOpen && <SmallScreenFilterScroll />}
			{!showSearchInput && searchOpen && <SmallSearchOpen />}
		</Box>
	);
}

export default Header;
