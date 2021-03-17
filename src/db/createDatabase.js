/**
 * Las instruciones de este archivo se encargan de generar la base de
 * datos, y agregar la información que contiene el archivo data.json a
 * la base de datos.
 */
const sqlite3 = require('sqlite3').verbose();
const fs = require('fs');
const path = require('path');

/**
 * data, almacena toda la infomarción que contiene el archivo data.json.
 * Al pasar la información del archivo a JSON.parse, lo que se devuelve
 * es un arreglo, por tanto data será de tipo Array.
 */
let data = JSON.parse(fs.readFileSync(path.join(__dirname, 'data.json')));

/**
 * Se abre una conexión con la base de datos toystory.db, si no existe, se crea
 * en la ruta ./toystory.db
 */
let db = new sqlite3.Database(path.join(__dirname, 'toystory.db'));

/**
 * El método serialize de Database, abre un espacio para realizar operaciones
 * sobre la base de datos.
 */
db.serialize(function() {
    /**
     * Primero se agrega una tabla a la base de datos, y después se crea una consulta preparada
     * para poder agregar registros a la tabla recien creada.
     */
    db.run('CREATE TABLE characters(node INTEGER NOT NULL, questionText TEXT NOT NULL, typeNode INTEGER NOT NULL)');
    let stmt = db.prepare('INSERT INTO characters VALUES (?,?,?)');
    /**
     * Se recorre todo el Array data, y se van registrando los objetos de este Array
     * a la base de datos, por llamar a stm.run() y pasar los valores para cada registro.
     */
    for(let i = 0; i < data.length; i++) {
        const row = data[i];
        stmt.run(row.node, row.questionText, row.typeNode);
    }
    //Se destruye la consulta personalizada.
    stmt.finalize();
});

//Se cierra la conexión con la base de datos.
db.close();