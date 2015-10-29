var Route = ReactRouter.Route;
Routes = (
  <Route>
    <Route path="/accounts" handler={Accounts} />
    <Route path="/expenses" handler={Expenses} />
    <Route path="/expenses/new" handler={ExpenseForm} />
  </Route>
);
