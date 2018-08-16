// Because expect is globally available from Jest we need to inform ESLint of this fact.
/* global expect */
// Since we are referencing React JSX we need to import React.
import React from 'react';
// Enzyme allows us to use mocha like tests and shallow/deep reference the Container DOM.
import Enzyme, { shallow } from 'enzyme';
// The Adapter is what adjusts Enzyme to be react specific.
import Adapter from 'enzyme-adapter-react-16';
// The component under test
import App from './App';

// Inform Enzyme to use the Adapter
Enzyme.configure({ adapter: new Adapter() });

// Describe which container we are testing to make it easier to find in the console.
describe('<App />', () => {
  // Use a variable like `wrapper` to contain the main component.
  let wrapper;

  // Before each test get a shallow copy of the container under test.
  beforeEach(() => {
    wrapper = shallow(<App />);
  });
  // Describe each section we are testing to group associated tests.
  describe('<App /> main paragraph', () => {
    // List out what part of the element we are testing
    it('Should have the class App-intro', () => {
      /**
       * First step is finding the element under test
       * Second part is checking if it has a specific class
       * Last part is making sure what the wrapper finds equals a specific value
      */
      expect(wrapper.find('p').hasClass('App-intro')).toEqual(true);
    });
    /**
     * As before the first step is getting the element under test
     * Second get any children of the elment
     * Third get the first child and it's text
     * Last, verifty the text equals what we expect
     */
    it('Should have a first line of text that says, "To get started, edit"', () => {
      expect(wrapper.find('p').children().first().text()).toEqual('To get started, edit');
    });
    it('Should have a <code /> block inside the paragraph', () => {
      expect(wrapper.find('p').children().find('code')).toHaveLength(1);
    });
    it('Should have a last line of text that says, "and save to reload."', () => {
      expect(wrapper.find('p').children().last().text()).toEqual('and save to reload.');
    });
  });
});
