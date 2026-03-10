import { render, screen } from '@testing-library/react';
import SkillIcon from '@/components/sections/Skills/SkillIcon';

const mockSkill = { name: 'React', icon: 'devicon-react-plain', color: '#61DAFB' };

describe('SkillIcon', () => {
    it('renders the skill name in a tooltip', () => {
        render(<SkillIcon skill={mockSkill} />);
        expect(screen.getByText('React')).toBeInTheDocument();
    });

    it('applies the correct icon class', () => {
        const { container } = render(<SkillIcon skill={mockSkill} />);
        const icon = container.querySelector('i');
        expect(icon).toHaveClass('devicon-react-plain');
    });

    it('applies the correct color style', () => {
        const { container } = render(<SkillIcon skill={mockSkill} />);
        const icon = container.querySelector('i');
        expect(icon).toHaveStyle({ color: '#61DAFB' });
    });
});
