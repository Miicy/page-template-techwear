import { ReactComponent as LogoSvgBlack } from "../../media/svg/logo-thick-black.svg";
import { ReactComponent as LogoSvgWhite } from "../../media/svg/logo-thick-white.svg";
import { ReactComponent as LogoSvgBlackThin } from "../../media/svg/logo-thin-black.svg";
import { ReactComponent as LogoSvgWhiteThin } from "../../media/svg/logo-thin-white.svg";
import { useSelector } from "react-redux";
import { selectActiveTheme } from "../../store/reducers/userSlice";

import useScreenSize from "../../helpers/useSreenSize";
import { Box } from "@mui/material";

function Logo() {
  const themeMode = useSelector(selectActiveTheme);

  const { isSmallScreen, isMediumScreen } = useScreenSize();
  const showLogoSmall = isSmallScreen;
  const showLogoMedium = isMediumScreen;

  const logoStyles = {
    container:{
      ml: isSmallScreen ? "10px" : "20px",
      height: "100%",
      width: "100%",
      minWidth: "300px",
    },
    medium:{
      display: "flex",
      marginLeft: "5px",
      height: "100%",
      width: "100%",
      minWidth: "200px",
    },
    small:{
      marginLeft: "5px",
      height: "100%",
      width: "100%",
      minWidth: "150px",
    }
    
  };


  return showLogoSmall ? (
    themeMode === "light" ? (
      <Box sx={logoStyles.small}>
        <LogoSvgBlackThin />
      </Box>
    ) : (
      <Box sx={logoStyles.small}>
        <LogoSvgWhiteThin />
      </Box>
    )
  ) : themeMode === "light" ? (
    <Box sx={showLogoMedium ? logoStyles.medium : logoStyles.container}>
      <LogoSvgBlack />
    </Box>
  ) : (
    <Box sx={showLogoMedium ? logoStyles.medium : logoStyles.container}>
      <LogoSvgWhite />
    </Box>
  );
}

export default Logo;
