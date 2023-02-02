import React, {useContext} from 'react';

export function useLogin() {
    return useContext(LoginContext)
}

const LoginContext = React.createContext({
    isLoggedIn: false,
    toggleLogin: () => {},
});

export function LoginProvider({ children }) {
    const [isLoggedIn, setIsLoggedIn] = React.useState(false);


    const toggleLogin = () => {
        setIsLoggedIn(prevState => !prevState);
    };

    return (
        <LoginContext.Provider value={{ isLoggedIn, toggleLogin }}>
            {children}
        </LoginContext.Provider>
    );
}
