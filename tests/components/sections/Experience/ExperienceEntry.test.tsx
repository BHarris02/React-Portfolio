import { render, screen } from "@testing-library/react";
import ExperienceEntry from "@/components/sections/Experience/ExperienceEntry";

const mockEntry = {
    title: "Example Title",
    company: "Example Company",
    date: "2026 - Present",
    description: "A description of the job.",
    achievements: ["achievement 1", "achievement 2"]
};

describe('ExperienceEntry', () => {
    it('renders job title', () => {
        render(<ExperienceEntry entry={mockEntry} />);
        expect(screen.getByText(/example title/i)).toBeInTheDocument();
    });

    it('renders company name', () => {
        render(<ExperienceEntry entry={mockEntry} />);
        expect(screen.getByText(/example company/i)).toBeInTheDocument();
    });

    it('renders date', () => {
        render(<ExperienceEntry entry={mockEntry} />);
        expect(screen.getByText(/2026 - present/i)).toBeInTheDocument();
    });

    it('renders job description', () => {
        render(<ExperienceEntry entry={mockEntry} />);
        expect(screen.getByText(/a description of the job/i)).toBeInTheDocument();
    });

    it('renders achievements', () => {
        render(<ExperienceEntry entry={mockEntry} />);
        expect(screen.getByText(/achievement 1/i)).toBeInTheDocument();
        expect(screen.getByText(/achievement 2/i)).toBeInTheDocument();
    });
});