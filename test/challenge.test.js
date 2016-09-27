const assert = require("assert")
const shift = require('../code/shift.js')

describe("shift",function(){
  describe("prueba 1) 4 a la izquierda",function(){
     it('deberia retornar el array movido 4 posiciones a la izquierda',function(){
       assert.deepEqual([ 8, 2, 7, 9, 3 ],shift("5;4;2;7;9;3;8"))
     })
  })

  describe("prueba 2) 2 a la izquierda",function(){
     it('deberia retornar el array movido 2 posiciones a la izquierda',function(){
       assert.deepEqual([ 9, 3, 8, 2, 7 ],shift("5;2;2;7;9;3;8"))
     })
  })

  describe("prueba 3) 2 a la derecha",function(){
     it('deberia retornar el array movido 2 posiciones a la derecha',function(){
       assert.deepEqual([ 3, 8, 2, 7, 9 ],shift("5;-2;2;7;9;3;8"))
     })
  })

  describe("prueba 4) Parametro incorrecto",function(){
     it('deberia retornar undefined y avisar error en N y cantidad de valores para la salida',function(){
       assert.equal(undefined,shift("-5;3;2;7;9;3;8"))
     })
  })

  describe("prueba 5) Parametro incorrecto",function(){
     it('deberia retornar undefined y avisar error en parametro no entero',function(){
       assert.equal(undefined,shift("5;32;2;7;9;3xx;8"))
     })
  })
})
