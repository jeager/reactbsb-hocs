import React from 'react'
import {render, waitForElement, act} from 'react-testing-library'
// this adds custom jest matchers from jest-dom
import 'jest-dom/extend-expect'
import List from './list'


it('fetches data from server', async () => {
  const mockSuccess = [
    {
      "name": "João",
      "lastname": "Ninguém"
    }, {
      "name": "Jorge",
      "lastname": "Alguém"
    }
  ];
  
  const mockJsonPromise = Promise.resolve(mockSuccess);
  const mockFetchPromise = Promise.resolve({
    json: () => mockJsonPromise,
  })
  jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise)

  act(()=> {

  })
  const listComponent = render(<List/>)

  expect(global.fetch).toHaveBeenCalledTimes(1);
  expect(global.fetch).toHaveBeenCalledWith('http://localhost:3001/person-data');

  // https://github.com/facebook/react/issues/14769
  const renderedList = await waitForElement(() => listComponent.getByTestId('people-list'))

  expect(renderedList).toMatchSnapshot()
})