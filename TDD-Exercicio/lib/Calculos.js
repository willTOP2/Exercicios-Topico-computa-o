
const validar = require('./CalculoValidator');


class Calculos { 

    Porcentagem(salario){
           
        return {
  
         DesenvolvedorMais3000: salario - (20 * salario /100),
         DesenvolvedorMenos3000: salario - (10 * salario/ 100),
         DBAmaiorMAis2000: salario - (25 * salario /100),
         DBAMenor2000: salario - (15 * salario /100),
         TestadorMAiro2000:  salario - (25 * salario /100),
         TestadorMenor2000: salario - (15 * salario /100), 
         GerenteMAior5000:  salario - (30 * salario /100),
         GerenteMenor5000: salario - (20 * salario /100) 


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