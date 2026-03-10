export default function ProjectRepoButton({ repo }) {
    if (repo) {
        return (
            <a 
            href={repo}
            className="btn btn-outline-light mt-auto align-self-start"
            target="_blank"
            rel="noopener noreferrer"
            >
                View Repository
            </a>
        );
    }
    return (
        <span className="btn btn-outline-light mt-auto align-self-start disabled">
            Coming Soon!
        </span>
    );
}