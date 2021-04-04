import React, { useEffect, useState } from 'react'

const Delayed = (props) => {
    const waitBeforeShow = props.waitBeforeShow
    const [isShown, setIsShown] = useState(false);
  
    useEffect(() => {
      setTimeout(() => {
        setIsShown(true);
      }, waitBeforeShow);
    }, [waitBeforeShow]);
  
    return isShown ? props.children : null;
  };
  
  export default Delayed;