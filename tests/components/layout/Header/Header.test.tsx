import { render, screen } from '@testing-library/react';
import Header from '@/components/layout/Header';

describe('Header', () => {

    describe('Hero Text', () => {
        it('renders subtitle', () => {
            render(<Header />);
            expect(screen.getByText(/junior software developer/i)).toBeInTheDocument();
        });

        it('renders greeting', () => {
            render(<Header />);
            expect(screen.getByText(/hi, i'm/i)).toBeInTheDocument();
        });

        it('renders name', () => {
            render(<Header />);
            expect(screen.getByText('Blake')).toBeInTheDocument();
        });

        it('renders job', () => {
            render(<Header />);
            expect(screen.getByText(/a software developer/i)).toBeInTheDocument();
        });
    });

    describe('Download CV Button', () => {
        it('renders download cv button', () => {
            render(<Header />);
            expect(screen.getByRole('link', { name: /download cv/i })).toBeInTheDocument();
        });
    });
});