import { render, screen } from "@testing-library/react";
import Experience from "@/components/sections/Experience";

describe('Experience', () => {
    it('renders the section heading', () => {
        render(<Experience />);
        expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(/experience/i);
    });

    it('renders at least one experience entry', () => {
        render(<Experience />);
        const items = screen.getAllByRole('listitem');
        expect(items.length).toBeGreaterThan(0);
    })

});