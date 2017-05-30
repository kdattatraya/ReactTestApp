import reducer from '../../reducers/cordaDemo'
import * as types from '../../constants/ActionTypes'

describe('cordaDemoReducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual([
      {
      }
    ])
  })

  it('should handle ADD_TODO', () => {
    expect(
      reducer([], {
        type: types.CREATE_CORDADEMO__SUCCESS
        action.data: a
      })
    ).toEqual([
      {
        action.data: 'Run the tests',
      }
    ])

    expect(
      reducer(
        [
          {
            text: 'Use Redux',
            completed: false,
            id: 0
          }
        ],
        {
          type: types.CREATE_CORDADEMO__SUCCESS
       	  action.data: a
        }
      )
    ).toEqual([
      {
        action.data: a,

      },
      {
        text: 'Use Redux',
        completed: false,
        id: 0
      }
    ])
  })
})
