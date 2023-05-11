const db = require('./db');

class Pokemon {
  static async getAll() {
    const [rows] = await db.execute('SELECT * FROM pokemon');
    return rows;
  }

  static async getById(id) {
    const [rows] = await db.execute('SELECT * FROM pokemon WHERE id = ?', [id]);
    return rows[0];
  }

  static async create(name, type, level) {
    const [result] = await db.execute('INSERT INTO pokemon (name, type, level) VALUES (?, ?, ?)', [name, type, level]);
    const id = result.insertId;
    return { id, name, type, level };
  }

  static async update(id, name, type, level) {
    await db.execute('UPDATE pokemon SET name = ?, type = ?, level = ? WHERE id = ?', [name, type, level, id]);
    return { id, name, type, level };
  }

  static async delete(id) {
    await db.execute('DELETE FROM pokemon WHERE id = ?', [id]);
    return true;
  }
}

module.exports = Pokemon;
