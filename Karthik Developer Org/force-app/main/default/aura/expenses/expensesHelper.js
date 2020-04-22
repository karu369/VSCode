({
	createExpense : function(component,expense) {
        var theExpenses = component.get("{!v.expenses}");
        var newExpense = JSON.Parse(JSON.Stingfy(expense));
        theExpenses.push(newExpense);
        component.set("v.expenses",theExpenses);
	}
})