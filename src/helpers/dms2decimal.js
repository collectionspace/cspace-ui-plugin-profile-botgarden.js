/**
 * Code from http://stackoverflow.com/questions/5970961/regular-expression-javascript-convert-degrees-minutes-seconds-to-decimal-degree
 */
const dms2deg = (s) => {
  const sw = /[sw-]/i.test(s);
  const bits = s.match(/[\d.]+/g);

  let f = sw ? -1 : 1;
  let result = 0;

  for (let i = 0, iLen = bits.length; i < iLen; i += 1) {
    result += bits[i] / f;
    f *= 60;
  }

  return result.toFixed(6);
};

const isValidDMS = (dmsString) => dmsString && dmsString.match(/\d/);

export default (dmsString) => (isValidDMS(dmsString) ? dms2deg(dmsString) : null);
