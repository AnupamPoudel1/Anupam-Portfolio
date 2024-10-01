import { PropsWithChildren } from 'react'
import { twMerge } from 'tailwind-merge';

const Orbit = ({
  children,
  size,
  rotation,
  should = false,
  shouldSpin = false,
  duration,
  spinDuration
}: PropsWithChildren<{ size: number; rotation: number; should?: boolean; duration?: string; shouldSpin?: boolean; spinDuration?: string; }>) => {
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      <div
        className={twMerge(should === true && 'animate-spin')}
        style={{
          animationDuration: duration
        }}
      >
        <div
          className="flex items-start justify-start"
          style={{
            transform: `rotate(${rotation}deg)`,
            height: `${size}px`,
            width: `${size}px`
          }}
        >
          <div
            className={twMerge(shouldSpin === true && 'animate-spin')}
            style={{
              animationDuration: spinDuration
            }}
          >
            <div
              className="inline-flex"
              style={{
                transform: `rotate(${rotation * -1}deg)`
              }}
            >
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Orbit
