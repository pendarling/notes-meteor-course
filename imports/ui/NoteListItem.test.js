import React from 'react';
import expect from 'expect';
import { Meter } from 'meteor/meteor';
import { mount } from 'enzyme';

import NoteListItem from './NoteListItem';

if(Meteor.isClient) {
  describe('NoteListItem', function() {

    it('should render title and timestamp', function() {
      const title = 'test title';
      const updatedAt = 1540928497124;
      const wrapper = mount( <NoteListItem note={{ title, updatedAt }}/> );

      expect(wrapper.find('h5').text()).toBe(title);
      expect(wrapper.find('p').text()).toBe('10/30/18');
    });

    it('should set default title if title not set', function() {
      const title = '';
      const wrapper = mount( <NoteListItem note={{ title }}/> );

      expect(wrapper.find('h5').text()).toNotBe('');
    });

  });
}
