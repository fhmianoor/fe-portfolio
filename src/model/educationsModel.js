import { getEducation } from '../api/api.js';

export const EducationModel = {
  async getEducationList() {
    const response = await getEducation();
    return response.data; // array of education
  }
};
