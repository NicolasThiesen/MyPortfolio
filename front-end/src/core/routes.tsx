import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";
import { Home, Contact } from "../Pages";
import history from "../tools/history";

function Routes () {
    return( 
        <BrowserRouter>
            <Switch>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/sites"/>
                <Route path="/arquiteturas"/>
                <Route element={<Contact/>} path="/contact"/>
            </Switch>
        </BrowserRouter>
    );
}
export default Routes;