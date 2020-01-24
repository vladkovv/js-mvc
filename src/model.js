 class Model {
     constructor(){
         this.weights = [
             {id: 1, weight: 65, date: "2020-01-20"},
             {id: 2, weight: 70, date: "2020-01-22"},
         ]
         this.d = new Date();
         this.currDate = this.d.getDate();
         this.currMonth = this.d.getMonth() + 1;
         this.currYear = this.d.getFullYear();
         this.fullDate = this.d.toLocaleDateString();
     }

     bindWeightListChanged(callback){
         this.onWeightListChanged = callback;
     }

     addWeight(weightNumber){
         const currWeight = {
             id: this.weights.length > 0 ? this.weights[this.weights.length - 1].id + 1 : 1,
             weight: weightNumber,
             date: `${this.currYear}-${this.currMonth}-${this.currDate}`
                         

         }
         this.weights.push(currWeight);
         this.onWeightListChanged(this.weights);

     }


     deleteWeight(id){
        this.weights = this.weights.filter(weight => weight.id != id);
        this.onWeightListChanged(this.weights);
     }
 }