import { useTheme } from "@emotion/react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	selectActiveTheme,
	setThemeMode,
} from "../../store/reducers/userSlice";
import { Grid, Stack } from "@mui/material";
import useScreenSize from "../../helpers/useSreenSize";
import MenuIcon from "@mui/icons-material/Menu";
import PersonOutlineRoundedIcon from "@mui/icons-material/PersonOutlineRounded";
import PersonOutlineTwoToneIcon from "@mui/icons-material/PersonOutlineTwoTone";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import FavoriteTwoToneIcon from "@mui/icons-material/FavoriteTwoTone";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import ShoppingBagTwoToneIcon from "@mui/icons-material/ShoppingBagTwoTone";
import ModeLightIcon from "@mui/icons-material/Brightness4";
import ModeDarkIcon from "@mui/icons-material/Brightness7";
import Divider from "@mui/material/Divider";
import Badge from "@mui/material/Badge";
import Tooltip from "@mui/material/Tooltip";

function HeaderIcons() {
	const theme = useTheme();
	const dispatch = useDispatch();
	const themeMode = useSelector(selectActiveTheme);
	const { isSmallScreen } = useScreenSize();
	const showMenuIcon = !isSmallScreen;

	const [iconsState, setIconsState] = useState({
		iconClick: false,
		iconClick1: false,
		iconClick2: false,
	});

	const handleClick = (iconName) => {
		setIconsState((prevState) => {
			const updatedState = {
				...prevState,
				[iconName]: !prevState[iconName],
			};
			for (const key in updatedState) {
				if (key !== iconName) {
					updatedState[key] = false;
				}
			}

			return updatedState;
		});
	};

	const [itemsCount, setItemsCount] = useState(0);

	const HeaderIconsStyles = {
		container: {
			display: "flex",
			justifyContent: "right",
			flex: "0 0 20%",
			height: "100%",
			width: "100%",
			alignItems: "center",
			mr: "5px",
		},
		iconContainer: {
			alignItems: "center",
			mr: "15px",
		},
		icon: {
			fontSize: isSmallScreen ? "1.75em" : "2em",
			cursor: "pointer",
			color: `${theme.palette.customOpposite.main}`,
			"&:hover": {
				color: theme.palette.text.secondary,
			},
		},
		mode: {
			fontSize: "1.5em",
			cursor: "pointer",
		},
		mode2: {
			m: "0 15px 0 20px ",
			"&:hover": {
				color: theme.palette.text.secondary,
			},
		},
	};

	return (
		<Grid sx={HeaderIconsStyles.container}>
			{showMenuIcon ? (
				<Grid sx={HeaderIconsStyles.container}>
					<Stack
						direction="row"
						spacing={3}
						sx={HeaderIconsStyles.iconContainer}
					>
						<Tooltip title="Profile">
							{iconsState.iconClick ? (
								<PersonOutlineTwoToneIcon
									onClick={() => handleClick("iconClick")}
									sx={HeaderIconsStyles.icon}
								/>
							) : (
								<PersonOutlineRoundedIcon
									onClick={() => handleClick("iconClick")}
									sx={HeaderIconsStyles.icon}
								/>
							)}
						</Tooltip>
						<Tooltip title="Whishlist">
							{iconsState.iconClick1 ? (
								<FavoriteTwoToneIcon
									onClick={() => handleClick("iconClick1")}
									sx={HeaderIconsStyles.icon}
								/>
							) : (
								<FavoriteBorderRoundedIcon
									onClick={() => handleClick("iconClick1")}
									sx={HeaderIconsStyles.icon}
								/>
							)}
						</Tooltip>
						<Tooltip title="Cart">
							<Badge badgeContent={itemsCount} color="customRed">
								{iconsState.iconClick2 ? (
									<ShoppingBagTwoToneIcon
										onClick={() => handleClick("iconClick2")}
										sx={HeaderIconsStyles.icon}
									/>
								) : (
									<ShoppingBagOutlinedIcon
										onClick={() => handleClick("iconClick2")}
										sx={HeaderIconsStyles.icon}
									/>
								)}
							</Badge>
						</Tooltip>
					</Stack>
					<Divider orientation="vertical" flexItem />
					<Grid sx={HeaderIconsStyles.mode2}>
						<Tooltip title={themeMode === "light" ? "Dark Mode" : "Light Mode"}>
							<Grid onClick={() => dispatch(setThemeMode())}>
								{themeMode === "light" ? (
									<ModeLightIcon style={HeaderIconsStyles.mode} />
								) : (
									<ModeDarkIcon style={HeaderIconsStyles.mode} />
								)}
							</Grid>
						</Tooltip>
					</Grid>
				</Grid>
			) : (
				<Grid sx={HeaderIconsStyles.container}>
					<Badge badgeContent={itemsCount} color="customRed">
						<ShoppingBagOutlinedIcon sx={HeaderIconsStyles.mode2} />
					</Badge>
					<Divider orientation="vertical" flexItem />
					<MenuIcon sx={{ ...HeaderIconsStyles.mode, ml: 2, mr: 1 }} />
				</Grid>
			)}
		</Grid>
	);
}

export default HeaderIcons;
