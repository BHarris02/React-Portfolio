import { render, screen } from '@testing-library/react';
import Projects from '@/components/sections/Projects/Projects';
import { projects } from '@/constants/projects';

describe('Projects', () => {
    it('renders the section heading', () => {
        render(<Projects />);
        expect(screen.getByRole('heading', { name: /projects/i })).toBeInTheDocument();
    });

    it('renders the subtitle text', () => {
        render(<Projects />);
        expect(screen.getByText(/a mix of personal and academic projects/i)).toBeInTheDocument();
    });

    it('renders a ProjectCard for each project', () => {
        render(<Projects />);
        projects.forEach((project) => {
            expect(screen.getByText(project.title)).toBeInTheDocument();
        });
    });

    it('renders the correct number of project cards', () => {
        render(<Projects />);
        const titles = projects.map((p) => p.title);
        titles.forEach((title) => {
            expect(screen.getByText(title)).toBeInTheDocument();
        });
        expect(titles.length).toBe(projects.length);
    });

    it('has the correct section id for navigation', () => {
        const { container } = render(<Projects />);
        const section = container.querySelector('#projects');
        expect(section).toBeInTheDocument();
    });
});
