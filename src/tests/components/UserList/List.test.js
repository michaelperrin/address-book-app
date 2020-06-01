import React from 'react';
import { shallow, mount } from 'enzyme';
import List from '../../../components/UserList/List';
import Spinner from '../../../components/Spinner';
import users from './users.json';
import UserCard from '../../../components/UserCard';
import UserDetailsModal from '../../../components/UserDetailsModal';

const loadMore = jest.fn();

describe('User list', () => {
  const wrapper = shallow(
    <List
      users={users}
      isLoading={false}
      hasMore
      loadMore={loadMore}
    />,
  );

  it('displays a throbber while loading', () => {
    const loadingListWrapper = shallow(
      <List
        users={[]}
        isLoading
        hasMore
        loadMore={loadMore}
      />,
    );

    expect(loadingListWrapper.contains(<Spinner />)).toBe(true);
  });

  it('displays a not found message when no users are in the list', () => {
    const noUserWrapper = shallow(
      <List
        users={[]}
        isLoading={false}
        hasMore={false}
        loadMore={loadMore}
      />,
    );

    expect(noUserWrapper.containsMatchingElement(<div>No results.</div>)).toBe(true);
  });

  it('shows a divider when the user has reached end of the list', () => {
    const wholeListWrapper = shallow(
      <List
        users={users}
        isLoading={false}
        hasMore={false}
        loadMore={loadMore}
      />,
    );

    expect(wholeListWrapper.containsMatchingElement(<div className="end-of-list" />)).toBeTruthy();
  });

  it('displays users once they are loaded', () => {
    expect(wrapper.find(UserCard)).toHaveLength(2);

    // First user
    expect(wrapper.find(UserCard).at(0).prop('username')).toBe('silverpanda259');
    expect(wrapper.find(UserCard).at(0).prop('name').first).toBe('George');
    expect(wrapper.find(UserCard).at(0).prop('name').last).toBe('Abitbol');

    // Second user
    expect(wrapper.find(UserCard).at(1).prop('username')).toBe('ticklishmeercat664');
    expect(wrapper.find(UserCard).at(1).prop('name').first).toBe('Ryan');
    expect(wrapper.find(UserCard).at(1).prop('name').last).toBe('Weaver');
  });

  describe('Show user details in a modal', () => {
    const wrapperWithChildren = mount(
      <List
        users={users}
        isLoading={false}
        hasMore
        loadMore={loadMore}
      />,
    );

    it('shows the modal when clicking on a user', () => {
      expect(wrapperWithChildren.contains('.user-details-modal')).toBeFalsy();

      const userCard = wrapperWithChildren.find('UserCard').first();
      userCard.simulate('click');

      expect(wrapperWithChildren.contains(UserDetailsModal)).toBeTruthy();

      // Check that first user is passed to the modal
      const userProp = wrapperWithChildren.find(UserDetailsModal).first().prop('user');
      expect(userProp).toBeDefined();
      expect(userProp.name).toBeDefined();
      expect(userProp.name.first).toBe('George');
      expect(userProp.name.last).toBe('Abitbol');
    });

    it('closes the modal when clicking on the close button', () => {
      wrapperWithChildren.find('.user-details-modal button.close-button').simulate('click');
      expect(wrapperWithChildren.contains('.user-details-modal')).toBeFalsy();
    });
  });
});
