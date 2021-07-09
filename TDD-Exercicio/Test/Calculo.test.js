
const calculo = require('../lib/Calculos')



describe('Calculadora Salario', () => {
    const desenvolvedor = new calculo()
    test('Funcionario desenvolvedor salario maior que 3000', () => {
       
    expect(desenvolvedor.CalculoDev(5000)).toBe(4000)
    
}); 

test('Funcionario desenvolvedor salario menor que 3000', () => {
  
    expect(desenvolvedor.CalculoDev(2800)).toBe(2520)
    
}); 


const DBA = new calculo()

test('Funcionario DBA salario maior igual 2000', () => {
  
    expect(DBA.CalculoDBA(2500)).toBe(1875)
    
}); 


test('Funcionario DBA salario menor que 2000', () => {
  
    expect(DBA.CalculoDBA(1500)).toBe(1275)
    
}); 


const testador = new calculo()

test('Funcionario Testador salario maior igual 2000', () => {
  
    expect(testador.CalculoTestador(2500)).toBe(1875)
    
}); 


test('Funcionario Testador salario menor que 2000', () => {
  
    expect(testador.CalculoTestador(1500)).toBe(1275)
    
}); 


const gerente = new calculo()

test('Funcionario Gerente salario maior igual 5000', () => {
  
    expect(gerente.CalculoGerente(5000)).toBe(3500)
    
}); 


test('Funcionario Gerente salario menor que 5000', () => {
  
    expect(gerente.CalculoGerente(4000)).toBe(3200)
    
}); 





}); 