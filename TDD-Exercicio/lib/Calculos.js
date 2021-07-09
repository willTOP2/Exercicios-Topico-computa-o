
const validar = require('./CalculoValidator');


class Calculos { 

    Porcentagem(salario,desconto){
           
   validar(salario)

        return salario - (desconto * salario /100)
    }


  DESENVOLVEDOR(salario){ 
 

   return{

   calculo: salario >= 3000 ? this.Porcentagem(salario,20) : this.Porcentagem(salario,10) 

  }


  }



  GERENTE(salario){
  
    return{
 
    calculo: salario >= 5000 ? this.Porcentagem(salario,30) : this.Porcentagem(salario,20) 
    
   }
 
 
   }
 
   TESTADOR(salario){
  
    return{
 
    calculo: salario >= 2000 ? this.Porcentagem(salario,25) : this.Porcentagem(salario,15) 
    
   }
 
 
   }
 


  

  DBA(salario){
  
    return{
 
    calculo: salario >= 2000 ? this.Porcentagem(salario,25) : this.Porcentagem(salario,15) 
   }
 
   }
 
  


  CalculoDev(salario){
      return this.DESENVOLVEDOR(salario).calculo;
  }


  CalculoDBA(salario){
    return this.DBA(salario).calculo;
}


CalculoGerente(salario){
    return this.GERENTE(salario).calculo;
}

 
CalculoTestador(salario){
    return this.TESTADOR(salario).calculo;
}





   



}

module.exports = Calculos