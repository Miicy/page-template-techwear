import React, { useState } from "react";
import { Grid } from "@mui/material";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Divider from "@mui/material/Divider";
import SearchIcon from "@mui/icons-material/SearchOutlined";
import ClearIcon from "@mui/icons-material/Clear";
import useScreenSize from "../../helpers/useSreenSize";

function SearchInput() {
  const [value, setValue] = useState("");
  const { isSmallScreen } = useScreenSize();
  const SearchHeightSmall = isSmallScreen;

  return (
    <Grid sx={{  minWidth: "200px" }}>
      <TextField
        fullWidth
        type="text"
        size="small"
        placeholder="Search..."
        onChange={(e) => setValue(e.target.value)}
        value={value}
        color= "customOpposite"
        InputProps={{
          sx: { height: SearchHeightSmall ? 30 : undefined,  width: SearchHeightSmall ? 240 : undefined,},
          endAdornment: [
            value && (
              <InputAdornment>
                <ClearIcon
                  onClick={() => setValue("")}
                  sx={{fontSize:"1em"}}
                />
              </InputAdornment>
            ),
            <InputAdornment key="searchIcon" position="end" sx={{ marginRight: -1, height: "2em"}}>
              <Divider sx={{ ml: 0.5, mr: 0.5, height: SearchHeightSmall ? "50%" : "80%"}} orientation="vertical" variant="middle" />
              <SearchIcon sx={{ fontSize: "1.3em", cursor: "pointer", margin:"0px 5px"}} />
            </InputAdornment>,
          ],
        }}
      />
    </Grid>
  );
}

export default SearchInput;
