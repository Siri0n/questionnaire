const renderQuestion = ({text, submitText = `Ответить`, options, index, count}, cb) => {
  
  const form = document.createElement(`form`);
  form.className = `pure-form pure-form-stacked`;

  if(count){
    text = `${index + 1}/${count}. ${text}`;
  }

  const optionsMarkup = options
    .map(
      ({text}, index) => 
        `<label class="pure-radio">
          <input type="radio" name="answer" value=${index}>${text}
        </label>`
    )
    .join(``);

  form.innerHTML = `<fieldset>
    <h2>${text}</h2>
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

const renderResult = ({header, text, submitText = `Пройти ещё раз`}, cb) => {
  const template = document.createElement(`template`);
  template.innerHTML = `<h2>${header}</h2><p>${text}</p><button class="pure-button pure-button-primary" id="again">${submitText}</button>`;
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

const getWeights = (answerData, columns, matrix) => {
  return matrix.map(([name, ...vector]) => {
    let weight = columns.reduce(
      (acc, next, index) => 
        acc + (answerData[next] || 0) * vector[index],
      answerData[name] || 0
    );
    return [name, weight];
  });
}

const runTest = (container, {initialData, questions, results, chooseResult}) => {
  
  const count = questions.length;
  let index = 0;
  let data = initialData;

  const loop = () => {
    if(index < count){
      const form = renderQuestion({...questions[index], index, count}, (answer) => {
        data = applyAnswer(data, answer);
        index++;
        loop();
      });
      container.innerHTML = ``;
      container.appendChild(form);
    }else{
      const result = results[chooseResult(data)];
      console.log(result);
      const resultElement = renderResult(result, () => {
        index = 0;
        data = initialData;
        loop();
      });
      container.innerHTML = ``;
      container.appendChild(resultElement);
    }
  }

  loop();
}