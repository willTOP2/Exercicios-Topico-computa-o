
const validar = require('./CalculoValidator');


class Calculos { 

    Porcentagem(salario){
           
        return {
 
         //calculo: salario - (desconto * salario /100), 
         DesenvolvedorMais3000: salario - (20 * salario /100),
         DesenvolvedorMenos3000: salario - (10 * salario/ 100)

        }

 
    }


  DESENVOLVEDOR(salario){ 
    validar(salario)

   return{

   calculo: salario >= 3000 ? this.Porcentagem(salario).DesenvolvedorMais3000 : this.Porcentagem(salario).DesenvolvedorMenos3000

  }


  }



  GERENTE(salario){
    validar(salario)
    return{
 
    calculo: salario >= 5000 ? this.Porcentagem(salario,30) : this.Porcentagem(salario,20) 
    
   }
 
 
   }
 
   TESTADOR(salario){
    validar(salario)
    return{
 
    calculo: salario >= 2000 ? this.Porcentagem(salario,25) : this.Porcentagem(salario,15) 
    
   }
 
 
   }
 


  

  DBA(salario){
    validar(salario)
    return{
 
    calculo: salario >= 2000 ? this.Porcentagem(salario,25) : this.Porcentagem(salario,15) 
   }
 
   }
 
  


  CalculoDev(salario){
    validar(salario)
      return this.DESENVOLVEDOR(salario).calculo;
  }


  CalculoDBA(salario){
    validar(salario)
    return this.DBA(salario).calculo;
}


CalculoGerente(salario){
    validar(salario)
    return this.GERENTE(salario).calculo;
}

 
CalculoTestador(salario){
    validar(salario)
    return this.TESTADOR(salario).calculo;
}





   



}

module.exports = Calculos