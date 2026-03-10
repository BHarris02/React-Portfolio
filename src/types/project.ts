import { TechItem } from "@/types/tech";

export type Project = {
    title: string,
    description: string,
    tech: TechItem[],
    repo: string
};