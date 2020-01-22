class View {
    constructor(){
    this.app = this.getElement('#root')

    this.title = this.createElement('h1')
    this.title.textContent = 'Затреканые веса'
    this.submitButton = this.createElement('button')
    this.submitButton.textContent = 'Submit'
    
    this.app.append(this.title, this.submitButton)
    }

    createElement(tag, className) {
        const element = document.createElement(tag)
        if (className) element.classList.add(className)
    
        return element
      }

      getElement(selector) {
        const element = document.querySelector(selector)
    
        return element
      }
}