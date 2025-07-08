import { getSkills } from '../api/api.js';

export const SkillModel = {
  async getSkillList() {
    const response = await getSkills();
    return response.data; 
  }
};
