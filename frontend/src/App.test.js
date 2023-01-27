import { render, screen } from '@testing-library/react';
import App from './App';

test('App', () => {
    render(<App />);

    const footerElementA = screen.getByText(/Alessia/i);
    const footerElementF = screen.getByText(/Francesco/i);
    expect(footerElementA).toBeInTheDocument();
    expect(footerElementF).toBeInTheDocument();
});
