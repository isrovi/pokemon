const Pokemon = require('./pokemon');

exports.getAll = async (req, res) => {
  try {
    const pokemon = await Pokemon.getAll();
    res.json(pokemon);
  } catch (error) {
    console.error('Error fetching Pokemon', error);
    res.status(500).json({ error: 'Error fetching Pokemon' });
  }
};

exports.getById = async (req, res) => {
  const { id } = req.params;

  try {
    const pokemon = await Pokemon.getById(id);
    if (pokemon) {
      res.json(pokemon);
    } else {
      res.status(404).json({ error: 'Pokemon not found' });
    }
  } catch (error) {
    console.error('Error fetching Pokemon', error);
    res.status(500).json({ error: 'Error fetching Pokemon' });
  }
};

exports.create = async (req, res) => {
  const { name, type, level } = req.body;

  try {
    const pokemon = await Pokemon.create(name, type, level);
    res.json(pokemon);
  } catch(error) {
    console.error('Error creating Pokemon', error);
    res.status(500).json({ error: 'Error creating Pokemon' });
    }
    };
    
exports.update = async (req, res) => {
    const { id } = req.params;
    const { name, type, level } = req.body;

    try {
    const pokemon = await Pokemon.update(id, name, type, level);
    res.json(pokemon);
    } catch (error) {
    console.error('Error updating Pokemon', error);
    res.status(500).json({ error: 'Error updating Pokemon' });
    }
};

exports.delete = async (req, res) => {
    const { id } = req.params;

    try {
    await Pokemon.delete(id);
    res.json({ message: 'Pokemon deleted successfully' });
    } catch (error) {
    console.error('Error deleting Pokemon', error);
    res.status(500).json({ error: 'Error deleting Pokemon' });
    }
};