// README FIRST:
// 1. Uncomment the codes below to use it as an example
// 2. You can change "Index" on line 10 to anything you wish to be called
// 3. Please note that a lot of the tests below are just for reference - may or maynot be relevent to your react app. Feel free to remove them.
// 4. Examples below are using Jest with enzyme but feel free to use anything you wish.

// import React from 'react';
// import Immutable from 'immutable';
// import { shallow, mount } from 'enzyme';
// import { shallowToJson } from 'enzyme-to-json';

// import Index from '../index';

// Creates a shallow copy
// function initializeShallowTagInputComponent() {
//   return shallow(
//     <Index
//       // Pass props here
//     />
//   );
// }

// Creates a mounted copy
// function initializeMountTagInputComponent() {
//   return mount(
//     <Index
//       // Pass props here
//     />
//   );
// }

// describe('Component: index.js', () => {
  // beforeEach(() => {
  //   SAMPLE_DATA = { id: 0, title: 'Sample Test' };
  //   return SAMPLE_DATA;
  // });

  // afterAll(() => {
  //   SAMPLE_DATA = {};
  //   return SAMPLE_DATA;
  // });

  // describe('Index Rendering', () => {
  //   it('should render correctly', () => {
  //     const tree = initializeShallowTagInputComponent();
  //     expect(shallowToJson(tree)).toMatchSnapshot();
  //   });
  // });

  // describe('componentWillReceiveProps Function', () => {
  //   it('displays a modified state upon changing props', () => {
  //     const wrapper = initializeMountTagInputComponent();
  //     const opts = ['1', '2', '3'];

  //     expect(wrapper.state().data).toEqual([]);

  //     wrapper.setProps({
  //       options: opts
  //     });

  //     expect(wrapper.state().data).toEqual(opts);
  //   });
  // });

  // describe('handleSelectItem Function', () => {
  //   it('should call parent onChange function when add items', () => {
  //     const doneChangeFn = jest.fn();
  //     const wrapper = mount(
  //       <TagInput
  //         value={DATA_LIST}
  //         onChange={doneChangeFn}
  //       />
  //     );

  //     wrapper.node.handleSelectItem(SAMPLE_DATA);
  //     expect(doneChangeFn.mock.calls.length).toBe(1);
  //   });

  //   it('should add the passed value to array of data', () => {
  //     const wrapper = initializeMountTagInputComponent();

  //     wrapper.node.handleSelectItem(SAMPLE_DATA);
  //     expect(DATA_LIST.toJS()[0]).toEqual(SAMPLE_DATA);
  //   });
  // });

  // describe('handleDeselectItem Function', () => {
  //   it('should call parent onChange function when remove items', () => {
  //     const doneChangeFn = jest.fn();
  //     const wrapper = mount(
  //       <TagInput
  //         value={DATA_LIST}
  //         onChange={doneChangeFn}
  //       />
  //     );

  //     wrapper.node.handleDeselectItem(SAMPLE_DATA);
  //     expect(doneChangeFn.mock.calls.length).toBe(1);
  //   });

  //   it('should remove the passed value from array of data', () => {
  //     const wrapper = initializeMountTagInputComponent();

  //     // Add Extra item to the list
  //     wrapper.node.handleSelectItem({ id: 1, title: 'Sample Test 2' });
  //     // Removes the last added item
  //     wrapper.node.handleDeselectItem('Sample Test 2');
  //     expect(DATA_LIST.toJS()[0]).toEqual(SAMPLE_DATA);
  //   });
  // });
// });
