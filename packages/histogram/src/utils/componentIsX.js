export function isAxis(name) {
  return (/axis/gi).test(name);
}

export function isSeries(name) {
  return (/series/gi).test(name);
}
