Template.pollForm.events({
  // submit handler
  'submit form': function(event) {
    event.preventDefault();
    // pull values from form
    var newPoll = {
      question: event.target.question.value,
      choices: [
        { text: event.target.choice1.value, votes: 0 },
        { text: event.target.choice2.value, votes: 0 },
        { text: event.target.choice3.value, votes: 0 }
      ]
    };
    // create new poll
    Polls.insert(newPoll);
  }
});