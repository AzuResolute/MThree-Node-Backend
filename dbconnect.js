const mariadb = require('mariadb');

const launchMariaDb = async () => {
    const conn = await mariadb.createConnection({
        user: 'root',
        host: 'localhost',
        database: 'test',
        password: '123456',
        port: 3456
    })
    console.log("Connection Successful");

    // await conn.query( SQL COMMAND in STRING)
    await conn.query(`CREATE TABLE Consultants(FirstName VARCHAR(20), LastName VARCHAR(30))`)
    conn.end();
}

const addMThreeConsultants = async () => {
    const conn = await mariadb.createConnection({
        user: 'root',
        host: 'localhost',
        database: 'test',
        password: '123456',
        port: 3456
    })
    console.log("Connection Successful");

    let results = await conn.query(`INSERT INTO Consultants (FirstName, LastName) VALUES
    ('Abby', 'Dudra'), ('Alex', 'Giles'), ('Asad', 'Nawaz') , ('Darren', 'Gomez'),('Drake', 'Sands')	, ('Harrison', 'Ngo'), ('Maodo', 'Sow'),('Kurtis', 'Bassman')	, ('Jared', 'Hilliard'),('Jean-Pierre', ' Salazar Lobo'),('Jesse', 'Cohen'), ('John', 'Caley')	,
    ( 'Frantzcito', 'Joseph'), ('Joshua', 'Araujo')	,('Kenny', 'Yang')	,('Pooya', 'Motee')	,('Roger Lester', 'Palabasan'),('Siddarth', 'Thakkar'),('Tyler', 'Peterson'), ('Zach', 'Hammons')`);

    conn.end();

    return results;
}

const findAllConsultants = async () => {
    const conn = await mariadb.createConnection({
        user: 'root',
        host: 'localhost',
        database: 'test',
        password: '123456',
        port: 3456
    })
    console.log("Connection Successful");

    let results = await conn.query("SELECT * FROM Consultants;")

    conn.end();

    return results;
}

// launchMariaDb();
// let results = addMThreeConsultants();
// console.log(results);
module.exports = {
    launchMariaDb,
    addMThreeConsultants,
    findAllConsultants
}