import React from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

const NoteListEmptyItem = () => {
  return (
    <div>
      <p>Add a note to begin! </p>
    </div>
  );
};

export default NoteListEmptyItem;
