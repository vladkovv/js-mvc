class Controller {
    constructor(model, view){
        this.model = model;
        this.view = view;

        this.onWeightListChanged(this.model.weights)
    }

    onWeightListChanged = weights => {
        this.view.displayWeights(weights)
    }

    
}
const app = new Controller(new Model(), new View());