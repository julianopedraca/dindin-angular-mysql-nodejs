const connection = require("../../Config/db");

function checkAccounts(req, res) {
  const query = "SELECT * FROM accounts";
  connection.query(query, (err, results) => {
    if (!err) {
      return res.status(200).json({ results });
    }
    return res.status(500).json(err);
  });
}

function createAccount(req, res) {
  const body = req.body;
  const { firstName, lastName, password } = body;
  const query =
    "INSERT INTO accounts (firstName, lastName, password) VALUES (?,?,?)";
  connection.query(query, [firstName, lastName, password], (err, results) => {
    if (!err) {
      return res.status(200).json({ message: "account created" });
    }
    return res.status(500).json(err);
  });
}

function checkIfExists(req, res) {
  const body = req.body;
  const {firstName, lastName } = body;

  const query = `SELECT firstName, lastName FROM accounts WHERE firstName = '${firstName}' AND lastName = '${lastName}'`;

  connection.query(query, (err,results)=>{
    if (!err){
      return res.status(200).json(results);
    }
    return res.status(500).json(err);
  })
}

module.exports = {
  createAccount,
  checkAccounts,
  checkIfExists
};
