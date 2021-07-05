const cargo = require('./Cargo')
const Porcentagem = require('./Porcentagem')




class Calculo {
  
     

   Calcular(cargo, salario){ 
       

      if(cargo.DESENVOLVEDOR && Porcentagem.SALARIOMAIORIGUAL3000){

          var porcentagem =  (20* salario) / 100
          return salario - porcentagem
     }
    
      else if(cargo.DESENVOLVEDOR  && Porcentagem.SALARIOMENOR3000) {

          var porcentagem =  (10* salario) /100 
           return salario - porcentagem

      }

    



   }


}

module.exports = Calculo