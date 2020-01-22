 class Model {
     constructor(){
         this.weights = [
             {id: 1, weight: 65, date: "2020-01-20"},
             {id: 2, weight: 70, date: "2020-01-22"},
         ]
     }

     addWeight(weightNumber){
         const currWeight = {
             id: this.weights.length > 0 ? this.weights[this.weights.length - 1].id + 1 : 1,
             weight: weightNumber,
             date: new Date(),
         }
         this.weights.push(currWeight)
     }


     deleteWeight(id){
        this.weights = this.weights.filter(weight => weights.id != id)
     }
 }