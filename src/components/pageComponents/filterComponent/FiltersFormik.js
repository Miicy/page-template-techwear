import React, { useEffect, useState } from "react";
import { useTheme } from "@emotion/react";
import { Box, Checkbox, Divider, Input, Slider } from "@mui/material";
import { Formik, Field, useFormik } from "formik";
import { filterArray } from "../../../helpers/FilterArray";

function FiltersFormik({ isVertical, filterReset, setFilterReset }) {
  const theme = useTheme();

  const filterExpandedContentStyles ={
    width: "100%",
    display: "flex",
    flexDirection: isVertical ? "column" : "row",
    justifyContent: "flex-start",
    overflowY: isVertical ? "scroll" : "scroll",
    "&::-webkit-scrollbar": {
      width: "15px",
    },
    "&::-webkit-scrollbar-track": {
      backgroundColor: `${theme.palette.secondary.main}`,
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: `${theme.palette.customOppositeLighter.main}`,
      borderRadius: "3px",
      border: "3px solid transparent",
    },
  }

  const FiltersFormikStyles ={
    expandedContentMap:{
      width: "100%",
      display: "flex",
      justifyContent: "flex-start",
      height: "fit-content",
      flexWrap: "wrap",
      mb: 0,
    },
    heading:{
      fontSize: "0.75em",
      width: "97%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    title:{
    color: theme.palette.customOpposite.main,
    width: "85%",
    fontWeight: "bold",
    },
    sliderContainer:{
      width: "70%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      mb: "20px",
    },
    slider:{
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",
    },
    sliderTitle:{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    filter:{
      width: "80%",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    filterColor:{
      color: theme.palette.customOpposite.main,
    },
    priceInput:{
      border: ` 2px solid ${theme.palette.customOppositeLighter.main}`,
      width: "80px",
    }
  }

  const formik = useFormik({
    initialValues: {
      filters: [],
      minPriceFormik: 0,
      maxPriceFormik: 100,
    },
    onSubmit: (values) => {
      console.log(values.filters);
      console.log("Min:", values.minPriceFormik);
      console.log("Max:", values.maxPriceFormik);
    },
  });

  const [minPrice, setMinPrice] = useState(formik.initialValues.minPriceFormik);
  const [maxPrice, setMaxPrice] = useState(formik.initialValues.maxPriceFormik);

  const handleSliderChange = (event, newValue) => {
    const minPrice = newValue[0];
    const maxPrice = newValue[1];
  
    setMinPrice(minPrice);
    setMaxPrice(maxPrice);
  
    formik.setFieldValue("minPriceFormik", minPrice);
    formik.setFieldValue("maxPriceFormik", maxPrice);
    formik.submitForm();
  };

  const handleCheckBoxChange = (e) => {
    const isChecked = e.target.checked;
    const filterValue = e.target.value;

    const updatedFilters = isChecked
      ? [...formik.values.filters, filterValue]
      : formik.values.filters.filter((value) => value !== filterValue);

    formik.setValues({
      ...formik.values,
      filters: updatedFilters,
    });

    formik.submitForm();
  };

  useEffect(() => {
    if (filterReset) {
      setMinPrice(formik.initialValues.minPriceFormik);
      setMaxPrice(formik.initialValues.maxPriceFormik);

      formik.setValues({
        ...formik.initialValues,
        filters: [],
      });
      formik.submitForm();
      setFilterReset(false);
    }
  }, [filterReset, minPrice, maxPrice]);


  const handleMinInputChange = (event) => {
    const value =
      event.target.value === "" ? formik.minPriceFormik : Number(event.target.value);
    setMinPrice(value);
    setMaxPrice((prevMaxPrice) =>
      value > prevMaxPrice ? value : prevMaxPrice
    );
  };

  const handleMaxInputChange = (event) => {
    const value =
      event.target.value === "" ? formik.maxPriceFormik : Number(event.target.value);
    setMaxPrice(value);
    setMinPrice((prevMinPrice) =>
      value < prevMinPrice ? value : prevMinPrice
    );
  };

  const handleBlur = () => {
    setMinPrice(Math.max(0, minPrice));
    setMinPrice(Math.min(maxPrice, minPrice));

    setMaxPrice(Math.min(100, maxPrice));
    setMaxPrice(Math.max(minPrice, maxPrice));
  };

  return (
    <Formik {...formik}>
      {() => (
        <Box sx={filterExpandedContentStyles}>
          {filterArray.map((item, index) => (
            <Box sx={FiltersFormikStyles.expandedContentMap} key={index}>
              <Box sx={FiltersFormikStyles.heading}>
                <p style={FiltersFormikStyles.title}>{item.title}</p>
                {item.price ? (
                  <Box sx={FiltersFormikStyles.sliderContainer}>
                    <Box sx={FiltersFormikStyles.slider}>
                      <Box sx={FiltersFormikStyles.sliderTitle}>
                        <Box sx={FiltersFormikStyles.title}>Min:</Box>
                        <Input
                          sx={FiltersFormikStyles.priceInput}
                          value={minPrice}
                          onChange={handleMinInputChange}
                          onBlur={handleBlur}
                          inputProps={{
                            step: 10,
                            min: 0,
                            max: maxPrice,
                            type: "number",
                            "aria-labelledby": "input-slider",
                          }}
                        />
                      </Box>
                      <Box sx={FiltersFormikStyles.sliderTitle}>
                        <Box sx={FiltersFormikStyles.title}>Max:</Box>
                        <Input
                          sx={FiltersFormikStyles.priceInput}
                          value={maxPrice}
                          onChange={handleMaxInputChange}
                          onBlur={handleBlur}
                          inputProps={{
                            step: 10,
                            min: minPrice,
                            max: 100,
                            type: "number",
                            "aria-labelledby": "input-slider",
                          }}
                        />
                      </Box>
                    </Box>
                    <Slider
                      sx={{ mt: "20px" }}
                      value={[minPrice, maxPrice]}
                      onChange={handleSliderChange}
                      aria-labelledby="input-slider"
                      min={0}
                      max={100}
                    />
                  </Box>
                ) : (
                  item.filters.map((filter, filterIndex) => (
                    <Box sx={FiltersFormikStyles.filter} key={filterIndex}>
                      <p style={FiltersFormikStyles.filterColor}>{filter}</p>
                      <Field
                        type="checkbox"
                        name={`filters[${index}]`}
                        value={filter}
                        as={Checkbox}
                        size="small"
                        color="customOpposite"
                        checked={formik.values.filters.includes(filter)}
                        onChange={handleCheckBoxChange}
                      />
                    </Box>
                  ))
                )}
              </Box>
              {index !== filterArray.length - 1 && (
                <Divider
                  sx={{
                    width: isVertical ? "85%" : undefined,
                    height: isVertical ? undefined : "300px",
                  }}
                  orientation={isVertical ? "horizontal" : "vertical"}
                  variant="middle"
                  flexItem
                />
              )}
            </Box>
          ))}
        </Box>
      )}
    </Formik>
  );
}

export default FiltersFormik;
