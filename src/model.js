 class Model {
     constructor() {
         this.weights = [{
                 id: 1,
                 weight: 65,
                 date: "2020-01-20"
             },
             {
                 id: 2,
                 weight: 70,
                 date: "2020-01-22"
             },
             {
                 id: 3,
                 weight: 68,
                 date: "2020-01-25"
             }
         ]

     }

     bindWeightListChanged(callback) {
         this.onWeightListChanged = callback;
     }

     addWeight(weightNumber, custDate) {
         const currWeight = {
             id: this.weights.length > 0 ? this.weights[this.weights.length - 1].id + 1 : 1,
             weight: weightNumber,
             date: custDate


         }
         this.weights.push(currWeight);
         this.onWeightListChanged(this.weights);

     }


     deleteWeight(id) {
         this.weights = this.weights.filter(weight => weight.id != id);
         this.onWeightListChanged(this.weights);
     }
 }