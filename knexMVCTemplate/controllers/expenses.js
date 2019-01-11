
const knex = require("../db/knex.js");

module.exports = {

  list:(req, res) => {
    knex('expenses')
    //.where('expense_sender_id', req.params.id)
    .then(expends => res.json(expends))
},

add: (req, res) => {
    knex('trips')
    .where('expense_spender_id', req.params.id)
    .insert(req.body, '*')
    .then(results => res.json(results[0]))

  },

update:(req, res) => {
    knex('expenses')
    .where('id', req.params.id)
    .update({
        expenses_descritpion:req.body.u_expenses_descritpion,
        expense_amount: req.body.u_expense_amount,
        expens_reason: req.body.u_expenses_reason,
        expense_details: req.body.u_expense_details,
        expense_date: req.body.f_expense_date,
        expense_paid: req.body.f_expense_paid,
        exppense_credited: req.body.f_expense_credited}, '*')
    .then(expense => res.json(expense))
},


delete: (req, res) => {
    knex('expenses').where('id', req.params.id)
    .del()
    .then((product) => res.json(product[0]))
    }   
 
}