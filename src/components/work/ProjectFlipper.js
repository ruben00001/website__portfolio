import React from 'react';
import { useSpring, animated } from 'react-spring'


export default function ProjectFlipper() {
  const props = useSpring({
    from: { opacity: 0 },
    to: async next => {
        await next({ opacity: 1 })
    },
    config: { duration: 1000, tension: 100 }
  })

  return (
    <animated.div style={props} className="flipper__wiper"></animated.div>
  )
  
}

















// const pages = [
//   ({ style }) => <animated.div style={{ ...style, background: 'lightpink' }}>A</animated.div>,
//   ({ style }) => <animated.div style={{ ...style, background: 'lightblue' }}>B</animated.div>,
//   ({ style }) => <animated.div style={{ ...style, background: 'lightgreen' }}>C</animated.div>,
// ]

// export default function ProjectFlipper() {
//   const [index, set] = useState(0)
//   const onClick = useCallback(() => set(state => (state + 1) % 3), [])
//   const transitions = useTransition(index, p => p, {
//     from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
//     enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
//     leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
//   })
//   return (
//     <div className="simple-trans-main" onClick={onClick}>
//       {transitions.map(({ item, props, key }) => {
//         const Page = pages[item]
//         return <Page key={key} style={props} />
//       })}
//     </div>
//   )
// }


