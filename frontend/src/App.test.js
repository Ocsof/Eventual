import { render, screen } from '@testing-library/react';
import Notifications from "./cmp/Notifications";
import {NewEvent} from "./cmp/events/NewEvent";
import {BrowserRouter, Link} from "react-router-dom";
import SignUp from "./cmp/access/SignUp";
import renderer from 'react-test-renderer';
import {Login} from "./cmp/access/Login";
import {EditEvent} from "./cmp/events/EditEvent";
import events from "./data/events.json";

Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation(query => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // Deprecated
        removeListener: jest.fn(), // Deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
    })),
});

test('Application Routes renders correctly', () => {
    const tree = renderer
        .create(
            <BrowserRouter>
                <Link to="/">Home</Link>
                <Link to="/new_event">NewEvent</Link>
                <Link to="/login">Login</Link>
                <Link to="/admin">Admin</Link>
            </BrowserRouter>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});

it('Signup component is loaded', () =>{

    render(
        <BrowserRouter>
            <SignUp />
        </BrowserRouter >
    );

    const element = screen.getByText(/Sign/i);
    expect(element).toBeInTheDocument();
});

it('Login component is loaded', () =>{

    render(
        <BrowserRouter>
            <Login />
        </BrowserRouter >
    );

    const element = screen.getByText(/Login/i);
    expect(element).toBeInTheDocument();
});

it('EditEvent component is loaded', () =>{
    const title = events[0].title; //Event 1
    render(
        <BrowserRouter>
            <EditEvent {...events[0]} />
        </BrowserRouter>
    );

    const element = screen.getByText(/Event 1/i);
    expect(element).toBeInTheDocument();
});

it('Notifications component is loaded', () => {
    render(<Notifications />);

    const element = screen.getByText(/Notifiche/i);

    expect(element).toBeInTheDocument();
});

it('NewEvent is loaded', () =>{

    render(
        <BrowserRouter>
            <NewEvent />
        </BrowserRouter >
    );

    const element = screen.getByText(/New Event/i);
    expect(element).toBeInTheDocument();
});

it('Signup component is loaded', () =>{

    render(
        <BrowserRouter>
            <SignUp />
        </BrowserRouter >
    );

    const element = screen.getByText(/Sign/i);
    expect(element).toBeInTheDocument();
});


