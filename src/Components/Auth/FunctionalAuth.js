
import {BrowserRouter, Route, Switch } from 'react-router-dom'

function FunctionalAuth() {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Auth />
                </Switch>
            </BrowserRouter>
        </div>
    )
}
