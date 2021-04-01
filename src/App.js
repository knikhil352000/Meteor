import './App.css';
import { motion, transform, useAnimation, useElementScroll, useMotionValue, useSpring, useTransform  } from "framer-motion"
import { useEffect, useRef } from 'react';

function App() {
  // const x = useMotionValue(0)
  // const xRange = [-200, -100, 100, 200]
  // const opacityRange = [0, 1, 1, 0]
  // const opacity = useTransform(x, xRange, opacityRange)
  // const x = useSpring(0, { stiffness: 300 })
  // const y = useSpring(x, { damping: 10 })
  // useEffect(() => {
  //   console.log(x.getVelocity());
  // }, [x])
  // return (
  //     <motion.div className="app"
  //       style={{ x }}
  //     />
  // );
  const x = useMotionValue(0)

  useEffect(() => {
    const controls = animate(x, 100, {
      type: "spring",
      stiffness: 2000,
      onComplete: v => {}
    })
  })
  

  return <motion.div className='app' animate={controls} />
}

export default App;
