import mysql from 'mysql';

export default mysql.createConnection({
    host: 'localhost',
    username: 'root',
    password: '',
    database: 'express-db',
    port : 5000,
});

// con.query(`select * from users`, (err,result,fields) => {
//     if (err)
//         return console.log(err)
//     return console.log(result);
// })

// pool.connect(function (err) {
//     if (err) throw err;
//     con.query("SELECT * FROM users", function (err, result, fields) {
//         if (err) throw err;
//         console.log(result);
//     });
// });