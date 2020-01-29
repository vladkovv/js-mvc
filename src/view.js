class View {
  constructor() {
    Date.prototype.toDateInputValue = (function () {
      let local = new Date(this);
      local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
      return local.toJSON().slice(0, 10)
    })

    this.app = this.getElement('#root')

    this.logo = this.createElement('h1', 'logo')
    this.logo.textContent = 'Отслеживание веса'

    this.inpForm = this.createElement('form', 'inp-form');
    this.dateForm = this.createElement('form', 'date')


    this.dateDiv = this.createElement('div', 'date-div')

    this.dateLabel = this.createElement('p', 'date-p')
    this.dateLabel.textContent = 'Введите дату:'


    this.dateInp = this.createElement('input', 'date-inp')
    this.dateInp.type = 'date'
    this.dateInp.min = '2020-01-01'
    this.dateInp.value = new Date().toDateInputValue();

    this.dateDiv.append(this.dateLabel, this.dateInp);

    this.currDiv = this.createElement('div', 'curr-date');

    this.checkLabel = this.createElement('label', 'check-label');
    this.checkLabel.textContent = 'Выбрать текущую дату?';

    this.currCheckbox = this.createElement('input', 'curr-check');
    this.currCheckbox.type = 'checkbox';

    this.currDiv.append(this.checkLabel, this.currCheckbox);

    this.dateForm.append(this.dateDiv, this.currDiv);

    this.weightForm = this.createElement('form', 'weight');

    this.weightLabel = this.createElement('label', 'weight-label');
    this.weightLabel.textContent = 'Введите вес на выбранную дату:';

    this.weightInp = this.createElement('input', 'weight-inp');
    this.weightInp.type = 'number';
    this.weightInp.placeholder = 'Введите вес в кг...';
    this.weightInp.min = 10;

    this.submitButton = this.createElement('button', 'submit');
    this.submitButton.textContent = 'Отправить данные';

    this.weightForm.append(this.weightLabel, this.weightInp, this.submitButton);
    this.inpForm.append(this.dateForm, this.weightForm);

    this.outpDiv = this.createElement('div', 'outp-div');

    this.title = this.createElement('h2', 'title');
    this.title.textContent = 'Затреканые веса:';

    this.weightList = this.createElement('ul', 'weight-list');


    this.outpDiv.append(this.title, this.weightList);

    this.app.append(this.logo, this.inpForm, this.outpDiv);


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

  get weightNumber() {
    return this.weightInp.value;
  }

  get custDate() {
    return this.dateInp.value;
  }

  resetInput() {
    this.weightInp.value = '';
  }

  displayWeights(weights) {

    while (this.weightList.firstChild) {
      this.weightList.removeChild(this.weightList.firstChild)
    }

    if (weights.length === 0) {
      const p = this.createElement('p');
      p.textContent = 'Нет ничего затреканного!';
      this.weightList.append(p);
    } else {
      weights.forEach(weight => {
        const li = this.createElement('li')
        li.id = weight.id;

        const time = this.createElement('p', 'li-time');
        time.textContent = weight.date;

        const span = this.createElement('span');
        span.textContent = 'Вес на данную дату =';

        const weightP = this.createElement('p', 'li-weight');
        weightP.textContent = weight.weight;

        const deleteButton = this.createElement('button', 'delete')
        deleteButton.textContent = 'Удалить';

        li.append(time, span, weightP, 'кг', deleteButton);

        this.weightList.append(li);
      })
    }
    console.log(weights)

  }

  bindAddWeight(handler) {
    this.weightForm.addEventListener('submit', event => {
      event.preventDefault()

      if (this.weightNumber && this.custDate) {
        handler(this.weightNumber, this.custDate)
        this.resetInput();
      } else
        alert('Проверьте заполненноcть полей!')
    })

  }
  bindDeleteWeight(handler) {
    this.outpDiv.addEventListener('click', event => {
      if (event.target.className === 'delete') {
        const id = parseInt(event.target.parentElement.id)

        handler(id);
      }
    })
  }


}