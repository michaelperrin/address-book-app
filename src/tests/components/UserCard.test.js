import React from 'react';
import { shallow } from 'enzyme';
import UserCard from '../../components/UserCard';

describe('User card', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <UserCard
        name={{ first: 'George', last: 'Abitbol' }}
        username="george_abitbol"
        email="george@abitbol.com"
        picture="https://via.placeholder.com/150"
      />,
    );
  });

  it('should display the username', () => {
    expect(
      wrapper.contains(<div className="username">george_abitbol</div>),
    ).toBe(true);
  });

  it('should display the full name', () => {
    expect(
      wrapper.contains(<h3>George Abitbol</h3>),
    ).toBe(true);
  });

  it('should display the email', () => {
    expect(
      wrapper.contains(<div className="email">george@abitbol.com</div>),
    ).toBe(true);
  });

  it('should display the picture', () => {
    expect(
      wrapper.contains(<img src="https://via.placeholder.com/150" alt="" />),
    ).toBe(true);
  });
});
