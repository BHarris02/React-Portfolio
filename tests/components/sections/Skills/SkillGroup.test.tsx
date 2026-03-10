import { render, screen } from '@testing-library/react';
import SkillGroup from '@/components/sections/Skills/SkillGroup';

const mockGroup = {
    category: 'Languages',
    items: [
        { name: 'Python', icon: 'devicon-python-plain', color: '#3776AB' },
        { name: 'JavaScript', icon: 'devicon-javascript-plain', color: '#F7DF1E' },
    ],
};

describe('SkillGroup', () => {
    it('renders the category heading', () => {
        render(<SkillGroup group={mockGroup} />);
        expect(screen.getByRole('heading', { name: /languages/i })).toBeInTheDocument();
    });

    it('renders a SkillIcon for each item', () => {
        render(<SkillGroup group={mockGroup} />);
        expect(screen.getByText('Python')).toBeInTheDocument();
        expect(screen.getByText('JavaScript')).toBeInTheDocument();
    });

    it('renders the correct number of icons', () => {
        const { container } = render(<SkillGroup group={mockGroup} />);
        const icons = container.querySelectorAll('i');
        expect(icons).toHaveLength(2);
    });

    it('applies the correct icon classes', () => {
        const { container } = render(<SkillGroup group={mockGroup} />);
        const icons = container.querySelectorAll('i');
        expect(icons[0]).toHaveClass('devicon-python-plain');
        expect(icons[1]).toHaveClass('devicon-javascript-plain');
    });
});
