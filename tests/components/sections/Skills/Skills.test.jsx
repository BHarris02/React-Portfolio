import { render, screen } from '@testing-library/react';
import Skills from '@/components/sections/Skills/Skills';
import { skills } from '@/constants/skills';

describe('Skills', () => {
    it('renders the section heading', () => {
        render(<Skills />);
        expect(screen.getByRole('heading', { name: /skills/i })).toBeInTheDocument();
    });

    it('renders the subtitle text', () => {
        render(<Skills />);
        expect(screen.getByText(/technologies i work with/i)).toBeInTheDocument();
    });

    it('renders a SkillGroup for each category', () => {
        render(<Skills />);
        skills.forEach((group) => {
            expect(screen.getByText(group.category)).toBeInTheDocument();
        });
    });

    it('renders all skill names across all groups', () => {
        render(<Skills />);
        skills.forEach((group) => {
            group.items.forEach((skill) => {
                expect(screen.getByText(skill.name)).toBeInTheDocument();
            });
        });
    });

    it('has the correct section id for navigation', () => {
        const { container } = render(<Skills />);
        expect(container.querySelector('#skills')).toBeInTheDocument();
    });
});
