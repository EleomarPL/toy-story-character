const sqlite3 = require('sqlite3').verbose();
const fs = require('fs');
const path = require('path');

let data = JSON.parse(fs.readFileSync(path.join(__dirname, 'data.json')));
let db = new sqlite3.Database(path.join(__dirname, 'toystory.db'));

db.serialize(function() {
    db.run('CREATE TABLE characters(node INTEGER NOT NULL, questionText TEXT NOT NULL, typeNode INTEGER NOT NULL)');
    let stmt = db.prepare('INSERT INTO characters VALUES (?,?,?)');
    for(let i = 0; i < data.length; i++) {
        const row = data[i];
        stmt.run(row.node, row.questionText, row.typeNode);
    }
    stmt.finalize();
});

db.close();