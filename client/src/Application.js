import React from "react";
import UserProvider from "./provider/UserProvider"

import App from "./App";

function Application() {
    return (
        <UserProvider>
            <App />
        </UserProvider>
    );
}

export default Application;
