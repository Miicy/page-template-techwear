import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";

import "./App.css";

import LandingPage from "./components/pageComponents/landingPageComponents/LandingPage";
import Header from "./components/header/Header";
import { themeCreation } from "./theme/designTokens";
import { useSelector } from "react-redux";
import { selectActiveTheme } from "./store/reducers/userSlice";
import useScreenSize from "./helpers/useSreenSize.js";
import FilterComponent from "./components/pageComponents/filterComponent/FilterComponent.js";

function App() {
	//theme

	const themeMode = useSelector(selectActiveTheme);
	const [theme, setTheme] = useState(themeCreation());

	//screenSize
	const { isSmallScreen, isMediumScreen } = useScreenSize();
	const smallScreen = isSmallScreen;
	const mediumScreen = isMediumScreen;

	useEffect(
		() => {
			setTheme(themeCreation(themeMode));
		},
		[themeMode],
		smallScreen,
		mediumScreen,
	);

	return (
		<ThemeProvider theme={theme}>
				<Header />
				{!smallScreen && <FilterComponent />}
					<LandingPage />
		</ThemeProvider>
	);
}

export default App;
