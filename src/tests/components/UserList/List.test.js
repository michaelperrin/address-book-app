import React from 'react';
import { shallow } from 'enzyme';
import List from '../../../components/UserList/List';
import Spinner from '../../../components/Spinner';
import users from './users.json';
import UserCard from '../../../components/UserCard';

const loadMore = jest.fn();

describe('User list', () => {
  it('displays a throbber while loading', () => {
    const wrapper = shallow(
      <List
        users={[]}
        isLoading
        hasMore
        loadMore={loadMore}
      />,
    );

    expect(
      wrapper.contains(<Spinner />),
    ).toBe(true);
  });

  it('displays users once they are loaded', () => {
    const wrapper = shallow(
      <List
        users={users}
        isLoading={false}
        hasMore
        loadMore={loadMore}
      />,
    );

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
});
