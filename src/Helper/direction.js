import _ from "lodash";

const direction = {
	NORTH: 'NORTH',
	SOUTH: 'SOUTH',
	EAST: 'EAST',
	WEST: 'WEST',
	
	Parse: text => {
		let upperedText = text.toUpperCase();
		let availableDirections = _.remove(Object.keys(direction), n => !_.isEqual(n, "Parse"));
		let foundResult = _.find(availableDirections, n => _.isEqual(upperedText, n));
		if (_.isEmpty(foundResult)) throw new Error("Given string is not a direction");
		return foundResult;
	},
};

const Direction = Object.freeze(direction);
export default Direction;