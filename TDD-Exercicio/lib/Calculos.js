


class Calculos { 

    Porcentagem(salario,desconto){
        return salario - (desconto * salario /100)
    }


  DESENVOLVEDOR(salario){
  
   return{

   calculo: salario >= 3000 ? this.Porcentagem(salario,20) : this.Porcentagem(salario,10) 
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

 



   Calc(cargo,salario){

    if(cargo === 'desenvolvedor'){

        if(salario >= 3000){
     
        var porcentagem = 20 * salario /100 
        return salario - porcentagem
        }
    else{

            var porcentagem = 10 * salario/100 
            return salario- porcentagem
         }
        
  } 


    if(cargo === 'DBA'){

      if(salario>=2000){


        var porcentagem = 25* salario/100 
        return salario- porcentagem
      } else{


        var porcentagem = 15 * salario/100 
        return salario- porcentagem
      }

    }

    if(cargo === 'testador'){

        if(salario>=2000){
  
  
          var porcentagem = 25* salario/100 
          return salario- porcentagem
        } else{
  
  
          var porcentagem = 15 * salario/100 
          return salario- porcentagem
        }
  
      }
  
      if(cargo === 'gerente'){

        if(salario>=5000){
  
  
          var porcentagem = 30* salario/100 
          return salario- porcentagem
        } else{
  
  
          var porcentagem = 20 * salario/100 
          return salario- porcentagem
        }
  
      }
  





   }



}

module.exports = Calculos