const curryPickBy = (f: any) => (obj: Object) => Object.assign({}, ...(Object.keys(obj).filter(key => f(obj[key]))).map(prop => ({
    [prop]: obj[prop]
})));
/**
 * filter prop by function f
 *
 * @func
 * @sig {function} -> {object} -> {object}
 * @param f
 * @param obj
 * @return object
 * @example
 *      const containV = v.includes('v')
 *      v.pickBy(containV,{ a: 3, b: 'va', c: [ 1, 2, 3 ], p: 'v' }); //=> {b:'va',p:'v'}
 */
export function pickBy(f?: any, obj?: Object): any {
    return [pickBy, curryPickBy(f), obj && curryPickBy(f)(obj)][arguments.length];
}
