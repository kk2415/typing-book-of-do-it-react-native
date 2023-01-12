import { useEffect } from 'react'

export const useTimeout = (
    callBack: () => void,
    duration: number,
    deps: any[]=[],
): void => {
    useEffect(() => {
        if (duration === 0) return
        const id = setTimeout(callBack, duration)
        return () => clearTimeout(id)
    }, [duration, ...deps])
}