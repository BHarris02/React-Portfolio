import { render, screen } from '@testing-library/react';
import Navbar from '@/components/layout/Navbar';

describe('Navbar', () => {
    describe('Navbar - Core Elements', () => {
        it('renders logo', () => {
            render(<Navbar />);
            expect(screen.getByText('blakeharris.dev')).toBeInTheDocument();
        });

        it('renders nav links', () => {
            render(<Navbar />);
            expect(screen.getByText('About')).toBeInTheDocument();
            expect(screen.getByText('Experience')).toBeInTheDocument();
            expect(screen.getByText('Skills')).toBeInTheDocument();
            expect(screen.getByText('Projects')).toBeInTheDocument();
            expect(screen.getByText('Contact')).toBeInTheDocument();
        });
    });

    describe('Navbar - Social Buttons and Links', () => {
        it('renders navbar github button', () => {
            render(<Navbar />);
            expect(screen.getByRole('link', { name: /github/i })).toBeInTheDocument();
        });

        it('links to correct github url', () => {
            render(<Navbar />);
            expect(screen.getByRole('link', { name: /github/i })).toHaveAttribute(
                'href',
                'https://github.com/BHarris02'
            );
        });

        it('renders navbar linkedin button', () => {
            render(<Navbar />);
            expect(screen.getByRole('link', { name: /linkedin/i })).toBeInTheDocument();
        });

        it('links to correct linkedin url', () => {
            render(<Navbar />);
            expect(screen.getByRole('link', { name: /linkedin/i })).toHaveAttribute(
                'href',
                'https://linkedin.com/in/blake-harris-890039375/'
            );
        });

        it('opens social links in new tab', () => {
            render(<Navbar />);
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