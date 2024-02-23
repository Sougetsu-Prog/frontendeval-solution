const FAQ = [
  {
    question: "How many bones does a cat have?",
    answer: "A cat has 230 bones - 6 more than a human",
    open: true
  },
  {
    question: "How much do cats sleep?",
    answer: "The average cat sleeps 12-16 hours per day",
    open: false
  },
  {
    question: "How long do cats live",
    answer:
      "Outdoor cats live 5 years on average. Indoor cats live 15 years on average.",
    open: false
  }
];

const ul = document.querySelector('ul');
FAQ.forEach((v) => {
  const {question, answer, open} = v;
  if(open === true) {
    ul.innerHTML += `
      <li>
        <p class="question"><i class="fa-solid fa-caret-right open"></i>${question}</p>
        <p class="answer open">${answer}</p>
      </li>
    `;
  } else {
    ul.innerHTML += `
      <li>
        <p class="question"><i class="fa-solid fa-caret-right close"></i>${question}</p>
        <p class="answer close">${answer}</p>
      </li>
    `;
  }
});

const li = document.querySelectorAll('li');
li.forEach((e, index) => {
  e.addEventListener('click', (event) => {
    const i = event.currentTarget.querySelector('i');
    const ans = event.currentTarget.querySelector('.answer');
    if(ans.classList.contains('open')) {
      ans.classList.remove('open');
      ans.classList.add('close');
      i.classList.remove('open');
      i.classList.add('close');
    } else if(ans.classList.contains('close')) {
      ans.classList.remove('close');
      ans.classList.add('open');
      i.classList.remove('close');
      i.classList.add('open');
    }
  });
});