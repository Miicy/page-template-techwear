import { useCallback, useState } from "react";

export function useIsVertical() {
    const [isVertical, setIsVertical] = useState(true);
    const [isExpanded, setisExpanded] = useState(true);
  
    const handleClick = () => {
      setIsVertical((prevIsVertical) => !prevIsVertical);
    };
  
    const handleClickExpanded = () => {
      setisExpanded((previsExpanded) => !previsExpanded);
    };
  
    const logUpdatedValue = useCallback(() => {
      console.log("isVertical:", isVertical);
    }, [isVertical]);
  
    // useEffect(() => {
    //   logUpdatedValue();
    // }, [logUpdatedValue]);

    return [isVertical, isExpanded, handleClick, handleClickExpanded, logUpdatedValue];
  }