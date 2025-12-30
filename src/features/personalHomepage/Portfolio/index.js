import { useEffect, useState } from "react";
import {
  PortfolioWrapper,
  GitHubIcon,
  PortfolioHeader,
  RecentProjects,
  ProjectsGrid,
} from "./styled";
import { Loader } from "./Loader";
import { Error } from "./Error";
import { ProjectGridItem } from "./ProjectGridItem";

const LOADER_DELAY = 800;

export const Portfolio = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const order = [
    "movies-browser-group-project",
    "To-do-list-React",
    "Currency-calculator-react",
    "To-do-list",
    "Currency-calculator",
    "types-of-coffee",
  ];

  useEffect(() => {
    let isMounted = true;
    const startTime = Date.now();

    const fetchMyRepos = fetch(
      "https://api.github.com/users/katarzynamaculewicz/repos?per_page=100",
      { cache: "no-store" }
    ).then((res) => res.json());

    const collaborationsRepos = [
      { owner: "romvsss", repo: "movies-browser-group-project" },
    ];

    const fetchCollaborations = Promise.all(
      collaborationsRepos.map(({ owner, repo }) =>
        fetch(`https://api.github.com/repos/${owner}/${repo}`, {
          cache: "no-store",
        })
          .then((res) => res.json())
          .then((data) => ({
            ...data,
            description: data.description || "No description provided",
          }))
      )
    );

    Promise.all([fetchMyRepos, fetchCollaborations])
      .then(([myReposData, collabReposData]) => {
        if (isMounted) {

          const myReposWithDesc = myReposData.map((repo) => ({
            ...repo,
            description: repo.description || "",
          }));

          setRepos([...myReposWithDesc, ...collabReposData]);
        }
      })
      .catch(() => {
        if (isMounted) setError(true);
      })
      .finally(() => {
        const elapsed = Date.now() - startTime;
        const remainingTime = Math.max(LOADER_DELAY - elapsed, 0);
        setTimeout(() => {
          if (isMounted) setLoading(false);
        }, remainingTime);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  const sortedProjects = order
    .map((name) => repos.find((project) => project.name === name))
    .filter(Boolean);

  return (
    <PortfolioWrapper>
      <GitHubIcon />
      <PortfolioHeader>Portfolio</PortfolioHeader>
      <RecentProjects>My recent projects</RecentProjects>
      {loading && <Loader />}
      {error && !loading && <Error />}
      {!loading && !error && (
        <ProjectsGrid>
          {sortedProjects.map((repo) => (
            <ProjectGridItem key={repo.id} repo={repo} />
          ))}
        </ProjectsGrid>
      )}
    </PortfolioWrapper>
  );
};
