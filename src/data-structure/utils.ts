export function defaultEquals(a: any, b: any) {
  return a === b;
}

export function defaultToString(item: any) {
  if(item === null){
    return 'NULL'
  } else if (item === undefined){
    return 'UNDEFINED'
  } else if (typeof item === 'string' || item instanceof String) {
    return `${item}`
  }
  return item.toString();
}
export enum Compare{
  LESS_THAN = 'LESS_THAN',
  EQUAL = 'EQUAL',
  BIGGER_THAN = "BIGGER_THAN"

}
export function defaultCompare(a: number, b: number) {
  if(a>b){
    return Compare.BIGGER_THAN
  }else if (a===b){
    return Compare.EQUAL
  }else {
    return Compare.LESS_THAN
  }
}
