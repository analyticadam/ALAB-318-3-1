// Helper function to validate ID in an array
function validateId(array, id, res) {
	if (id >= 0 && id < array.length) {
		return true;
	}
	res.status(404).json({ error: "Invalid ID" });
	return false;
}

module.exports = { validateId };
