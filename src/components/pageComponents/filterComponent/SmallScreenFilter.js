import { Grid, useTheme } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { useEffect, useState } from "react";
import FilterPcContentExpanded from "./FilterPcExpanded"; 

function SmallScreenFilter() {
  const theme = useTheme();
  const [expanded, setExpanded] = useState(false);
  const [isVertical, setIsVertical] = useState(true);

  useEffect(() => {
    console.log(expanded);
  }, [expanded]);

  const handleTouchStart = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };

const SmallScreenFilter={
  container:{
    mt: "140px",
    height: expanded ? "80%" : "30px",
    transition: "height 0.3s",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    borderBottom: `1px solid ${theme.palette.customOppositeLighter.main}`,
    borderRadius: "0px 0px 3px 3px",
    backgroundColor: `${theme.palette.third.main}`,
    zIndex: 5,
    position: "fixed",
  },
  content:{
    width: "100%",
    height: "95%",
    zIndex: 50,
    minHeight: "150px",
    minWidth: "300px"
  },
  click:{
    borderTop: expanded ? `1px solid ${theme.palette.customOppositeLighter.main}` : undefined,
    height: "30px",
    minHeight: "30px",
    position: "static",
    width: "100%",
    display: "flex",
    alignItems:"center",
    justifyContent: "center",
  },
  down:{
    fontSize: "0.9em",
    color: `${theme.palette.customOpposite.main}`,
    height: "100%",
  }

}




  return (
    <Grid sx={SmallScreenFilter.container}>
      {expanded && (
        <Grid sx={SmallScreenFilter.content}>
            <FilterPcContentExpanded isVertical={isVertical}/>
        </Grid>
      )}
      <Grid onTouchStart={handleTouchStart} sx={SmallScreenFilter.click}>
        Filter
        {!expanded ? (
          <ExpandMoreIcon sx={SmallScreenFilter.down} />
        ) : (
          <ExpandLessIcon sx={SmallScreenFilter.down} />
        )}
      </Grid>
    </Grid>
  );
}

export default SmallScreenFilter;
