import {ensureContainer} from '../utils/domHelper.js';
import { ProjectModel } from '../model/projectModel.js';
import { ProjectView } from '../view/projectsView.js';

export const ProjectPresenter = async () => {
  const container = ensureContainer('projects-container');

  try {
    const projects = await ProjectModel.getProjectList();
    const html = ProjectView.render(projects);
    ProjectView.show(container, html);
  } catch (error) {
    console.error('Error fetching projects:', error);
    ProjectView.showError(container);
  }
};

ProjectPresenter();
