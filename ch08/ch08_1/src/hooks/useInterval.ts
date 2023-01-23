import { useEffect } from 'react'

export const useInterval = (
    callBack: () => void,
    duration: number,
    deps: any[]=[],
): void => {
    useEffect(() => {
        if (duration === 0) return
        const id = setInterval(callBack, duration)
        return () => clearInterval(id)
    }, [duration, ...deps])
}