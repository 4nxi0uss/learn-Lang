import mysql from 'mysql2'

const { SERVER, DATABASE, LOGIN, PASSWORD } = process.env

export const db = mysql.createConnection({
    host: SERVER,
    user: LOGIN,
    password: PASSWORD,
    database: DATABASE,
    dateStrings: ['DATE'],
    multipleStatements: true
})