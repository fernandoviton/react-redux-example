import { addToSequence } from '../actions/index.js'
import rootReducer from '../reducers/rootReducer'

test('default root state', () => {
	expect(rootReducer(undefined, {type: undefined})).toEqual(
		{
			numbers: [1, 1]
		})
})

test('add to sequence adds next fib number', () => {
	expect(rootReducer({numbers:[1,1]}, addToSequence())).toEqual(
		{
			numbers: [1,1,2]
		})
})