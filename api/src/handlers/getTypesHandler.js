const getTypes = require("../controllers/getTypes");

async function getTypesHandler(req, res) {
  try {
    const Types = await getTypes();
    res.status(200).json(Types);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = getTypesHandler;
