import { render, screen } from '@testing-library/react';
import ProjectCard from '@/components/sections/Projects/ProjectCard';

const mockProject = {
    title: 'Test Project',
    tech: [
        { name: 'React', icon: 'devicon-react-original', color: '#61DAFB' },
        { name: 'Node.js', icon: 'devicon-nodejs-plain', color: '#339933' },
    ],
    description: 'A test project description.',
    repo: 'https://github.com/user/repo',
};

describe('ProjectCard', () => {
    it('renders the project title', () => {
        render(<ProjectCard project={mockProject} />);
        expect(screen.getByText('Test Project')).toBeInTheDocument();
    });

    it('renders the project description', () => {
        render(<ProjectCard project={mockProject} />);
        expect(screen.getByText('A test project description.')).toBeInTheDocument();
    });

    it('renders a tech icon for each technology', () => {
        render(<ProjectCard project={mockProject} />);
        expect(screen.getByText('React')).toBeInTheDocument();
        expect(screen.getByText('Node.js')).toBeInTheDocument();
    });

    it('applies the correct icon class and color for each tech', () => {
        const { container } = render(<ProjectCard project={mockProject} />);
        const icons = container.querySelectorAll('i');
        expect(icons).toHaveLength(2);
        expect(icons[0]).toHaveClass('devicon-react-original');
        expect(icons[0]).toHaveStyle({ color: '#61DAFB' });
        expect(icons[1]).toHaveClass('devicon-nodejs-plain');
        expect(icons[1]).toHaveStyle({ color: '#339933' });
    });

    it('renders the ProjectRepoButton with a repo link', () => {
        render(<ProjectCard project={mockProject} />);
        const link = screen.getByRole('link', { name: /view repository/i });
        expect(link).toHaveAttribute('href', mockProject.repo);
    });

    it('renders "Coming Soon!" when repo is not provided', () => {
        const projectWithoutRepo = { ...mockProject, repo: null };
        render(<ProjectCard project={projectWithoutRepo} />);
        expect(screen.getByText(/coming soon!/i)).toBeInTheDocument();
        expect(screen.queryByRole('link')).not.toBeInTheDocument();
    });
});
