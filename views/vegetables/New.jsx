const React = require("react");

function New(props) {
	return (
		<html>
			<head>
				<title>Add a New Vegetable</title>
			</head>
			<body>
				<h1>{props.title}</h1>
				<form action="/api/vegetables" method="POST">
					<label htmlFor="name">Name:</label>
					<input type="text" id="name" name="name" required />
					<br />
					<label htmlFor="color">Color:</label>
					<input type="text" id="color" name="color" required />
					<br />
					<button type="submit">Add Vegetable</button>
				</form>
			</body>
		</html>
	);
}

module.exports = New;
