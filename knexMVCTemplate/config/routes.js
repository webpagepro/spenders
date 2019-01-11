//Update the name of the controller below and rename the file.
const spenders = require("../controllers/spenders.js")
//const users = require("../controllers/spenders.js")


module.exports = function(app){  
  const express = require('express')
  const router = express.Router()


  app.post('/spenders/login', spenders.login)
  app.post('/spenders/register', spenders.register)
  /*
  router.post('/expenses', (req, res) => {
    const newExpense = db.expenses.insert({
      "expense_description": req.body.f_expense_description,
      "expense_amount": req.body.f_expense_amount,
      "expens_reason": req.body.f_expenses_reason,
      "expense_details": req.body.f_expense_details,
      "expense_date": req.body.f_expense_date,
      "expense_paid": req.body.f_expense_paid,
      "exppense_credited": req.body.f_expense_credited
      
    })
    res.json(newExpense)
  })
  
  router.put('/expenses/:id', (req, res) => {
    const updatedExpense = db.expenses.findByIdAndUpdate(req.params.id, {
      "expense_description": req.body.f_expense_description,
      "expense_amount": req.body.f_expense_amount,
      "expens_reason": req.body.f_expenses_reason,
      "expense_details": req.body.f_expense_details,
      "expense_date": req.body.f_expense_date,
      "expense_paid": req.body.f_expense_paid,
      "exppense_credited": req.body.f_expense_credited
    })
    res.json(updatedeExpense)
  })
  
  router.patch('/expenses/cart/add/:id', function (req, res) {
    const expense = db.expenses.find(req.params.id)
    expense.expense_paid = false
    res.json(expense)
  })
  
  router.patch('/expenses/cart/remove/:id', function (req, res) {
    const expense = db.expenses.find(req.params.id)
    expense.expense_paid = true
    res.json(expense)
  })
  */

}

