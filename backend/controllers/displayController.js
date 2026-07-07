const sqlite3 = require('sqlite3').verbose();
// 数据库路径改成你项目里真实的数据库文件
const db = new sqlite3.Database('./backend/database/database.db');

// 获取全部文件接口
exports.getAllFiles = (req, res) => {
  db.all('SELECT * FROM files ORDER BY create_time DESC', (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(rows);
  });
};