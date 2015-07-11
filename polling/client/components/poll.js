Template.poll.events({
  // click event handler
  'click .vote': function(event) {
    event.preventDefault();
    var pollID = $(event.currentTarget).parent('.poll').data('id');
    var voteID = $(event.currentTarget).data('id');

    // get incrementing object
    var voteString = 'choices.' + voteID + '.votes';
    var action = {};
    action[voteString] = 1;

    // increment number of votes
    Polls.update(
       { _id: pollID },
       { $inc: action }
    );
  }
});