
import React, { useState, useCallback } from 'react'
import { useTransition, animated, useSpring, a } from 'react-spring'


const pages = [
    ({ style }) => <animated.div style={{ ...style, background: 'black', color: 'white' }}>WEB-DEVELOPER</animated.div>,
    ({ style }) => <animated.div style={{ ...style, background: 'white', color: 'black' }}>VUE ENTHUSIAST</animated.div>,
    ({ style }) => <animated.div style={{ ...style, background: 'black', color: 'white' }}>ANIMATION ADICT</animated.div>,
    ({ style }) => <animated.div style={{ ...style, background: 'white', color: 'black' }}>YOUR NEW WEB-DEV</animated.div>
]

export default function Home() {
    const clickMe = useSpring({
        config: {
            mass: 5,
            tension: 40
        },
        from: {
          top: '0%',
          opacity: 0
        },
        to: {
            top: '52%',
            opacity: 1
        }
    })


  const [index, set] = useState(0)
  const onClick = useCallback(() => set(state => (state + 1) % 4), [])
  const transitions = useTransition(index, p => p, {
    from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
  })
  return (
    <div>
        <div className="simple-trans-main" onClick={onClick}>
        {transitions.map(({ item, props, key }) => {
            const Page = pages[item]
            return <Page key={key} style={props} />
        })}
        </div>
        <a.p style={clickMe} className='click-me'>CLICK ABOVE!</a.p>
    </div>
  )
}