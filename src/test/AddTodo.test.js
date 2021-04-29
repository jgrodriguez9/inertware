import * as types from '../redux/actions'
import * as actions from '../redux/actions'


describe('actions', () => {
    it('should create an action to add a todo', () => {
      const payload = {
        id: 99,
        name: 'TestName',
        species: 'TestSpecies',
        status: 'TestStatus'
      }
      const expectedAction = {
        type: types.ADD_TODO,
        payload
      }
      expect(actions.addTodo(payload)).toEqual(expectedAction)
    })
  })