
import mysql from "mysql"

export const db = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "Abhm@097//*",
    database: "social"
})

db.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the MySQL server.');
});