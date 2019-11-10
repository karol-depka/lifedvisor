const enableDebugLog = true

export function logDebug(...args: any[]) {
  if ( enableDebugLog ) {
    console.log(' - Debug: ', ...args)
  }
}
