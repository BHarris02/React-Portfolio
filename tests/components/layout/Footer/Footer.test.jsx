import { render, screen } from '@testing-library/react';
import Footer from '@/components/layout/Footer';

describe('Footer', () => {
    describe('Text Content', () => {
        it('renders heading', () => {
            render(<Footer />);
            expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(/get in touch/i);
        });

        it('renders paragraph', () => {
            render(<Footer />);
            expect(screen.getByText(/feel free to reach out/i)).toBeInTheDocument();
        });

        it('renders copyright notice', () => {
            render(<Footer />);
            const currentYear = new Date().getFullYear();
            expect(screen.getByText(new RegExp(currentYear))).toBeInTheDocument();
            expect(screen.getByText(/blake harris. all rights reserved/i)).toBeInTheDocument();
        });
    });

    describe('Social Links', () => {
        it('renders navbar github button', () => {
            render(<Footer />);
            expect(screen.getByRole('link', { name: /github/i })).toBeInTheDocument();
        });

        it('links to correct github url', () => {
            render(<Footer />);
            expect(screen.getByRole('link', { name: /github/i })).toHaveAttribute(
                'href',
                'https://github.com/BHarris02'
            );
        });

        it('renders navbar linkedin button', () => {
            render(<Footer />);
            expect(screen.getByRole('link', { name: /linkedin/i })).toBeInTheDocument();
        });

        it('links to correct linkedin url', () => {
            render(<Footer />);
            expect(screen.getByRole('link', { name: /linkedin/i })).toHaveAttribute(
                'href',
                'https://linkedin.com/in/blake-harris-890039375/'
            );
        });

        it('opens social links in new tab', () => {
            render(<Footer />);
            const links = [
                screen.getByRole('link', { name: /github/i }),
                screen.getByRole('link', { name: /linkedin/i })
            ];
            links.forEach(link => {
                expect(link).toHaveAttribute('target', '_blank');
                expect(link).toHaveAttribute('rel', 'noopener noreferrer');
            });
        });
    });
});