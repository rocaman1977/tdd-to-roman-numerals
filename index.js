

/**
 * Conversión a números romanos.
 * @param {number} n - Un número entre 1 y 3999.
 * @returns {string} El equivalente en números romanos.
 */

export function toRoman(n) {

  let resultado = "";

  if (n>=100)
  {
    resultado=resultado+"C"
    n-=100;
  }

  if (n==90){
    resultado=resultado+"XLC";
    n-=90;
  }

  if (n>=50){
    resultado=resultado+"L";
    n-=50;
  }
  if (n>=40){
    resultado=resultado+"XL";
    n-=40;
  }
  while (n >= 10) {
    resultado = resultado+"X";
    n -= 10;
  }
  if (n == 9) resultado = resultado+"IX";
  else {
    if (n == 4) {
      resultado = resultado+"IV";
      n -= 4;
    }
    else if (n >= 5) {
      resultado += "V";
      n -= 5;
    }


    for (let i = 0; i < n; i++) {
      resultado = resultado + "I";
    }


  }

  return resultado;

}

