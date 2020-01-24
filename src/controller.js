class Controller {
    constructor(model, view){
        this.model = model;
        this.view = view;

        this.model.bindWeightListChanged(this.onWeightListChanged);

        this.view.bindAddWeight(this.handleAddWeights);
        this.view.bindDeleteWeight(this.handleDeleteWeight);

        this.onWeightListChanged(this.model.weights);
    }

    onWeightListChanged = weights => {
        this.view.displayWeights(weights)
    }
    handleAddWeights = weightNumber => {
        this.model.addWeight(weightNumber);
    }

    handleDeleteWeight = id => {
        this.model.deleteWeight(id);
    }
    
}
const app = new Controller(new Model(), new View());