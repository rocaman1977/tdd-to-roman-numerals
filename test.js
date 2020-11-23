import { toRoman } from './index';
import { strictEqual } from "assert";

describe(('Conversión a números romanos'), () => {
  it('test 1', () => { strictEqual(toRoman(1), "I") });
  it('test 2', () => { strictEqual(toRoman(2), "II") });
  it('test 3', () => { strictEqual(toRoman(3), "III") });
  it('test 4', () => { strictEqual(toRoman(4), "IV") });
  it('test 5', () => { strictEqual(toRoman(5), "V") });
  it('test 6', () => { strictEqual(toRoman(6), "VI") });
  it('test 7', () => { strictEqual(toRoman(7), "VII") });
  it('test 8', () => { strictEqual(toRoman(8), "VIII") });
  it('test 9', () => { strictEqual(toRoman(9), "IX") });
  it('test 10', () => { strictEqual(toRoman(10), "X") });
  it('test 11', () => { strictEqual(toRoman(11), "XI") });
  it('test 12', () => { strictEqual(toRoman(12), "XII") });
  it('test 13', () => { strictEqual(toRoman(13), "XIII") });
  it('test 14', () => { strictEqual(toRoman(14), "XIV") });
  it('test 15', () => { strictEqual(toRoman(15), "XV") });
  it('test 16', () => { strictEqual(toRoman(16), "XVI") });
  it('test 17', () => { strictEqual(toRoman(17), "XVII") });
  it('test 18', () => { strictEqual(toRoman(18), "XVIII") });
  it('test 19', () => { strictEqual(toRoman(19), "XIX") });
  it('test 20', () => { strictEqual(toRoman(20), "XX") });
  it('test 21', () => { strictEqual(toRoman(21), "XXI") });
  it('test 23', () => { strictEqual(toRoman(23), "XXIII") });
  it('test 24', () => { strictEqual(toRoman(24), "XXIV") });
  it('test 25', () => { strictEqual(toRoman(25), "XXV") });
  it('test 28', () => { strictEqual(toRoman(28), "XXVIII") });
  it('test 29', () => { strictEqual(toRoman(29), "XXIX") });
  it('test 30', () => { strictEqual(toRoman(30), "XXX") });
  it('test 32', () => { strictEqual(toRoman(32), "XXXII") });
  it('test 34', () => { strictEqual(toRoman(34), "XXXIV") });
  it('test 40', () => { strictEqual(toRoman(40), "XL") });
  it('test 43', () => { strictEqual(toRoman(43), "XLIII") });
  it('test 44', () => { strictEqual(toRoman(44), "XLIV") });
  it('test 45', () => { strictEqual(toRoman(45), "XLV") });
  it('test 47', () => { strictEqual(toRoman(47), "XLVII") });
  it('test 49', () => { strictEqual(toRoman(49), "XLIX") });
  it('test 50', () => { strictEqual(toRoman(50), "L") });
  it('test 52', () => { strictEqual(toRoman(52), "LII") });
  it('test 54', () => { strictEqual(toRoman(54), "LIV") });
  it('test 57', () => { strictEqual(toRoman(57), "LVII") });
  it('test 59', () => { strictEqual(toRoman(59), "LIX") });
  it('test 69', () => { strictEqual(toRoman(69), "LXIX") });
  it('test 79', () => { strictEqual(toRoman(79), "LXXIX") });
  it('test 89', () => { strictEqual(toRoman(89), "LXXXIX") });
  it('test 90', () => { strictEqual(toRoman(90), "XLC") });
  it('test 99', () => { strictEqual(toRoman(99), "XCIX") });

  it('test 100', () => { strictEqual(toRoman(100), "C") });






































})