import { render, screen } from '@testing-library/react';
import ProjectRepoButton from '@/components/sections/Projects/ProjectRepoButton';

const mockRepoUrl = "https://github.com/user/repo"

describe('ProjectRepoButton', () => {
    describe('when repo URL is provided', () => {
        it('renders a link with "View Repository" text', () => {
            render(<ProjectRepoButton repo={mockRepoUrl} />);
            const link = screen.getByRole('link', { name: /view repository/i });
            expect(link).toBeInTheDocument();
        });

        it('links to the provided repo URL', () => {
            render(<ProjectRepoButton repo={mockRepoUrl} />);
            const link = screen.getByRole('link', { name: /view repository/i });
            expect(link).toHaveAttribute('href', mockRepoUrl);
        });

        it('opens in a new tab with secure rel attributes', () => {
            render(<ProjectRepoButton repo={mockRepoUrl} />);
            const link = screen.getByRole('link', { name: /view repository/i });
            expect(link).toHaveAttribute('target', '_blank');
            expect(link).toHaveAttribute('rel', 'noopener noreferrer');
        });
    });

    describe('when repo URL is not provided', () => {
        it('renders "Coming Soon!" text', () => {
            render(<ProjectRepoButton />);
            expect(screen.getByText(/coming soon!/i)).toBeInTheDocument();
        });

        it('does not render a link', () => {
            render(<ProjectRepoButton />);
            expect(screen.queryByRole('link')).not.toBeInTheDocument();
        });

        it('has the disabled class', () => {
            render(<ProjectRepoButton />);
            const span = screen.getByText(/coming soon!/i);
            expect(span).toHaveClass('disabled');
        });
    });
});