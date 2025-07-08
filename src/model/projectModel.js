import { getProjects } from '../api/api.js';

export const ProjectModel = {
  async getProjectList() {
    const response = await getProjects();
    return response.data; 
  }
};
