import dayjs from 'dayjs';
import { Project } from 'types/types';

import classes from "./styles.module.css";

const ProjectCard = ({project}: {project:Project}) => {
  const createdAt = dayjs(project.created_at, 'YYYY-MM-DD').format('YYYY-MM-DD')
  return (
    <div className={classes.projectCard}>
      <h3>{project.name}</h3>
      <p>Created: {createdAt}</p>
      <p>Author: {project.owner.login}</p>
      <p>Watchers: {project.watchers_count}</p>
      <p>Url: <a href={project.url}>{project.url}</a></p>

    </div>
  );
};


export default ProjectCard;