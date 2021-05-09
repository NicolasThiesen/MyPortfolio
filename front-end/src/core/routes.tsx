import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home } from "../Pages";
import history from "../tools/history";

function Routes () {
    return( 
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/sites"/>
                <Route path="/arquiteturas"/>
            </Switch>
        </BrowserRouter>
    );
}
export default Routes;