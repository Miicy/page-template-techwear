import { Box, useTheme } from "@mui/material";
import tokyoDay from "../../../media/tokyo-daytime-blurry.jpg";
import tokyoNight from "../../../media/tokyo-nightime-blurry.jpg";
import useScreenSize from "../../../helpers/useSreenSize";
import { useEffect, useState } from "react";
import { selectActiveTheme } from "../../../store/reducers/userSlice";
import "./landingPageStyles.css";
import { useSelector } from "react-redux";
import image1 from "../../../media/pic1.jpg";
import image2 from "../../../media/pic2.png";
import image3 from "../../../media/pic3.png";
import ProductContainer from "./ProductContainer";

function LandingPage() {
	const theme = useTheme();
	const themeMode = useSelector(selectActiveTheme);
	const { isSmallScreen, isMediumScreen } = useScreenSize();
	const [scrollPosition, setScrollPosition] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			const scrollPosition =
				document.getElementById("scrollableElement").scrollTop;
			setScrollPosition(scrollPosition);
		};

		const scrollableElement = document.getElementById("scrollableElement");
		scrollableElement.addEventListener("scroll", handleScroll);

		return () => {
			scrollableElement.removeEventListener("scroll", handleScroll);
		};
	}, [scrollPosition]);

	const addText = ["TechWear Shop", "NEW", "SALE"];

	const backgroundImage =
		themeMode === "light" ? `url(${tokyoDay})` : `url(${tokyoNight})`;
	const arrayImageSlide = [image1, image2, image3];

	const ladningPageStyles = {
		container: {
			position: "absolute",
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
			mt: "60px",
			zIndex: "1",
			overflowY: "auto",
			"&::-webkit-scrollbar": {
				width: "15px",
			},
			"&::-webkit-scrollbar-track": {
				backgroundColor: theme.palette.third.main,
			},
			"&::-webkit-scrollbar-thumb": {
				backgroundColor: theme.palette.customOppositeLighter.main,
				borderRadius: "5px",
				border: "3px solid transparent",
			},
			minWidth: "300px",
		},
		image: {
			position: "static",
			backgroundImage: backgroundImage,
			backgroundSize: "cover",
			backgroundRepeat: "no-repeat",
			width: "100%",
			height: "fit-content",
			display: "flex",
			flexDirection: "column",
			alignItems: "center",
			justifyContent: "flex-start",
			transition: "0.3s",
		},
		content: {
			position: "sticky",
			backgroundColor: theme.palette.primary.opacity95,
			boxShadow: "0 0 1rem 0 rgba(0, 0, 0, .2)",
			borderRadius: "5px",
			width: isSmallScreen ? "97%" : isMediumScreen ? "75%" : "65%",
			mt: isSmallScreen ? "150px" : 10,
			display: "flex",
			flexDirection: "column",
			alignItems: "center",
			height: "fit-content",
			padding: "30px 10px 50px 10px",
			mb: 10,
		},
		contentCenter: {
			height: isSmallScreen ? "30%" : "fit-content",
			width: "90%",
			borderRadius: "3px",
			display: "flex",
			flexDirection: "column",
			mt: 4,
		},
		slideContainer: {
			height: "70vh",
			width: "100%",
			display: "block",
			position: "relative",
			mb: 4,
		},
		imageSlideContainer: {
			position: "absolute",
			display: "block",
			width: "100%",
			height: "100%",
			zIndex: 15,
			backgroundSize: "cover",
			backgroundPosition: "center top",
			cursor: "pointer",
		},
		imageSlideAttacment: {
			display: "flex",
			height: "50%",
			alignItems: "center",
			justifyContent: "flex-end",
		},
		imageSlideAttacmentBase: {
			backgroundColor: theme.palette.primary.opacity95,
			borderRadius: "5px 0px 0px 5px",
			boxShadow: "0 0 1rem 0 rgba(0, 0, 0, .2)",
			height: isSmallScreen ? undefined : "90px",
			minWidth: "300px",
			zIndex: 20,
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			fontSize: "3em",
			fontWeight: "bold",
			color: themeMode === "light" ? `black` : `white`,
		},
		itemsContainer: {
			height: "50vh",
			width: "100%",
			display: "flex",
			flexDirection: "column",
			justifyContent: "center",
			alignItems: "center",
			fontSize: "20px",
		},
		showMore: {
			fontSize: isSmallScreen ? "0.8em" : "0.9em",
			cursor:"pointer",
			color: themeMode === "light" ? `black` : `white`,
			"&:hover": {
				color: theme.palette.text.secondary,
				textDecoration:"underline",
			  },
		},
	};

	const imageSlideAttacments = {
		top: {
			...ladningPageStyles.imageSlideAttacmentBase,
			animation:
				scrollPosition > 60
					? "popUpAnimation 0.4s ease-in 0s 1 normal forwards"
					: "none",
			visibility: scrollPosition > 60 ? "visible" : "hidden",
			width: "100%",
			textAlign: "center",
			borderRadius:"none"
		},
		right: {
			...ladningPageStyles.imageSlideAttacmentBase,
			animation: isSmallScreen
				? scrollPosition > 700
					? "popUpAnimation 0.4s ease-in 0s 1 normal forwards"
					: "none"
				: scrollPosition > 700
				? "slideAnimation 0.4s ease-in 0s 1 normal forwards"
				: "none",
			visibility: scrollPosition > 700 ? "visible" : "hidden",
			width: isSmallScreen ? "100%" : "50%",
		},
		right2: {
			...ladningPageStyles.imageSlideAttacmentBase,
			animation: isSmallScreen
				? scrollPosition > 1400
					? "popUpAnimation 0.6s ease-in 0s 1 normal forwards"
					: "none"
				: scrollPosition > 1400
				? "slideAnimation 0.6s ease-in 0s 1 normal forwards"
				: "none",
			visibility: scrollPosition > 1400 ? "visible" : "hidden",
			width: isSmallScreen ? "100%" : "50%",
		},
		
	};

	return (
		<Box id="scrollableElement" sx={ladningPageStyles.container}>
			<Box sx={ladningPageStyles.image}>
				<Box sx={ladningPageStyles.content}>
					{arrayImageSlide.map((item, index) => (
						<Box sx={ladningPageStyles.contentCenter}>
							<Box sx={ladningPageStyles.slideContainer}>
								<Box
									sx={{
										...ladningPageStyles.imageSlideContainer,
										backgroundImage: `url(${item})`,
									}}
								></Box>
								<Box sx={{ display: "flex", height: "50%" }}></Box>
								<Box sx={ladningPageStyles.imageSlideAttacment}>
									<Box
										sx={
											index === 0
												? imageSlideAttacments.top
												: index === 1
												? imageSlideAttacments.right
												: imageSlideAttacments.right2
										}
									>
										{addText[index]}
									</Box>
								</Box>
							</Box>
							{index >= arrayImageSlide.length - 2 && (
								<Box sx={ladningPageStyles.itemsContainer}>
									<ProductContainer />
									<Box sx={ladningPageStyles.showMore}>Show More</Box>
								</Box>
							)}
						</Box>
					))}
				</Box>
			</Box>
		</Box>
	);
}

export default LandingPage;
