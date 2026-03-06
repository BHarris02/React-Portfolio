import { render, screen } from "@testing-library/react";
import About from "@/components/sections/About";

describe('About', () => {
    it('renders section heading', () => {
        render(<About />);
        expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(/about me/i);
    });

    it('renders paragraphs', () => {
        render(<About />);
        expect(screen.getByText(/i'm a junior software developer/i)).toBeInTheDocument();
        expect(screen.getByText(/a-level project in sixth form/i)).toBeInTheDocument();
        expect(screen.getByText(/writing code that's clean/i)).toBeInTheDocument();
    });
});