
const validar = require('./CalculoValidator');


class Calculos { 

    Div(salario){
       return salario / 100
    }



    Porcentagem(salario){
           
        return {
  
         DesenvolvedorMais3000: salario - 20 * this.Div(salario),
         DesenvolvedorMenos3000: salario - 10 * this.Div(salario),
         DBAmaiorMAis2000: salario - 25 * this.Div(salario),
         DBAMenor2000: salario - 15 * this.Div(salario),
         TestadorMAiro2000:  salario - 25 * this.Div(salario),
         TestadorMenor2000: salario - 15 * this.Div(salario),
         GerenteMAior5000:  salario - 30 * this.Div(salario),
         GerenteMenor5000: salario - 20 * this.Div(salario),


        }

 
    }


  DESENVOLVEDOR(salario){ 
    

   return{

   calculo: salario >= 3000 ? this.Porcentagem(salario).DesenvolvedorMais3000 : this.Porcentagem(salario).DesenvolvedorMenos3000

  }


  }



  GERENTE(salario){
  
    return{
 
    calculo: salario >= 5000 ? this.Porcentagem(salario).GerenteMAior5000 : this.Porcentagem(salario).GerenteMenor5000                
    
   }
 
 
   }
 
   TESTADOR(salario){
    
    return{
 
    calculo: salario >= 2000 ? this.Porcentagem(salario).TestadorMAiro2000 : this.Porcentagem(salario).TestadorMenor2000 
    
   }
 
 
   }
 


  

  DBA(salario){
    
    return{
 
    calculo: salario >= 2000 ? this.Porcentagem(salario).DBAmaiorMAis2000 : this.Porcentagem(salario).DBAMenor2000                      
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