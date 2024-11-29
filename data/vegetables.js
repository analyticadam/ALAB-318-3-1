// Right now, we don't have a database, so we are mocking it up
// by using an array
// soon, we will learn how to access a database to store our data structures
const vegetables = [
	{
		name: "asparagus",
		color: "green",
		readyToEat: true,
	},
	{
		name: "corn",
		color: "yellow",
		readyToEat: false,
	},
	{
		name: "zucchini",
		color: "green",
		readyToEat: true,
	},
	{
		name: "squash",
		color: "yellow",
		readyToEat: true,
	},
	{
		name: "potato",
		color: "brown",
		readyToEat: false,
	},
];

module.exports = vegetables;
