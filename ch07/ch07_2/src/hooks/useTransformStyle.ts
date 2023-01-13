import { useStyle } from './useStyle'

// 아래 처럼 transform 스타일 속성에 여러 개의 아이템이 있는 배열을 적용하면 좀 번거롭다
// const style = useStyle({
//     transform: [{translateX: 0}, {rotate: '0deg'}, {scale: 1}]
// })

// 그러므로 아래처럼 간결하게 transform 스타일 속성을 구현할 수 있는 커스텀 훅 함수를 만들었다.
// const style = useTransformStyle({translateX: 0, rotate: '0deg', cale: 1})

export const useTransformStyle = (transform: Record<string, any>, deps: any[]=[]) => {
    // Object.keys로 키값 배열을 먼저 만든다
    // const transform = {translateX, rotate, scale}
    // Object.keys(transform) // ['translateX', 'rotate', 'scale']

    return useStyle({
        transform: Object.keys(transform).map((key) => ({[key]: transform[key]}))
    }, deps)
}