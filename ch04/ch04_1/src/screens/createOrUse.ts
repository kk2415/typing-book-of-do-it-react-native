const cache: Record<string, any> = {}

export const createOrUse = <T>(key:string, callBack: () => T) => {
  if (!cache[key]) {
    cache[key] = callBack()
  }

  return cache[key]
}
