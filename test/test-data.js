const theQuestion = {
  text: `Выберите вариант:`,
  options: [
    {
      text: `Вариант 1`,
      data: {a: 1}
    },
    {
      text: `Вариант 2`,
      data: {b: 1}
    },        
    {
      text: `Вариант 3`,
      data: {c: 1}
    },        
    {
      text: `Вариант 4`,
      data: {d: 1}
    },
  ]
}

const testData = {
  initialData: {
    a: 0,
    b: 0,
    c: 0,
    d: 0
  },
  questions: [
    theQuestion,
    theQuestion,
    theQuestion,
    theQuestion
  ],
  results: {
    a: {
      text: "Вы чаще всего выбирали вариант 1"
    },
    b: {
      text: "Вы чаще всего выбирали вариант 2"
    },
    c: {
      text: "Вы чаще всего выбирали вариант 3"
    },
    d: {
      text: "Вы чаще всего выбирали вариант 4"
    },
    x: {
      text: "У вас несколько самых частых вариантов"
    }
  },
  chooseResult: (answerData) => {
    const answersSorted = Object.entries(answerData).sort((a, b) => b[1] - a[1]);
    if(answersSorted[0][1] == answersSorted[1][1]){
      return `x`;
    }
    return answersSorted[0][0];
  }
}