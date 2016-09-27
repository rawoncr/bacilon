  let shift = (argv) => {
    try {
      if (typeof argv === 'undefined')
        throw "Parametro de entrada es incorrecto"

      const input = argv.split(';').map(Number)
      validate(input)

      const N = input[0]
      const D = input[1]
      let output = input.slice(2)

      return output.slice(D % N).concat(output.slice(0, D % N))

    } catch (e) {
      console.log("\nERROR:",e,"\n");
    }
  }

  let validate = (input) => {
    if (!input.every((num) => Number.isInteger(num)))
      throw "Todos los valores deben ser numeros enteros"

    if (input[0] != input.length - 2)
      throw "El numero N y la cantidad de valores para el array de salida deben ser iguales"
  }

  module.exports = shift
