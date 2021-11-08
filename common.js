const renderQuestion = ({text, submitText = `Ответить`, options}, cb) => {
  
  const form = document.createElement(`form`);
  form.className = `pure-form pure-form-stacked`;

  const optionsMarkup = options
    .map(
      ({text}, index) => 
        `<label class="pure-radio">
          <input type="radio" name="answer" value=${index}>${text}
        </label>`
    )
    .join(``);

  form.innerHTML = `<fieldset>
    <p class="question-text">${text}</p>
    ${optionsMarkup}
    <input class="pure-button pure-button-primary" type="submit" value="${submitText}">
  </fieldset>`;
  form.addEventListener(`submit`, evt => {
    evt.preventDefault();
    const formData = new FormData(form);
    const answerIndex = formData.get(`answer`);
    const answerData = options[answerIndex].data;
    cb(answerData);
  });

  return form;

}

const renderResult = ({text, submitText = `Пройти ещё раз`}, cb) => {
  const template = document.createElement(`template`);
  template.innerHTML = `<p>${text}</p><button class="pure-button pure-button-primary" id="again">${submitText}</button>`;
  template.content.getElementById(`again`).addEventListener(`click`, cb);
  return template.content;
}

const applyAnswer = (data, answer) => {
  console.log(`applyAnswer`, data, answer);
  if(typeof answer == `function`){
    return answer(data);
  }else{
    const result = {...data};
    for(const [key, value] of Object.entries(answer)){
      result[key] = (result[key] || 0) + value;
    }
    return result;
  }
}

const runTest = (container, {initialData, questions, results, chooseResult}) => {
  
  let questionIndex = 0;
  let data = initialData;

  const loop = () => {
    if(questionIndex < questions.length){
      const form = renderQuestion(questions[questionIndex], (answer) => {
        data = applyAnswer(data, answer);
        questionIndex++;
        loop();
      });
      container.innerHTML = ``;
      container.appendChild(form);
    }else{
      const result = results[chooseResult(data)];
      const resultElement = renderResult(result, () => {
        questionIndex = 0;
        data = initialData;
        loop();
      });
      container.innerHTML = ``;
      container.appendChild(resultElement);
    }
  }

  loop();
}