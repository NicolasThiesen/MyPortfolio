import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";
import { Home, Contact, Portfolio } from "../Pages";

function Routes () {
    return( 
        <BrowserRouter>
            <Switch>
                <Route path="/" element={<Home/>}></Route>
                <Route element={<Portfolio/>} path="/portfolio"/>
                <Route path="/services"/>
                <Route element={<Contact/>} path="/contact"/>
            </Switch>
        </BrowserRouter>
    );
}
export default Routes;