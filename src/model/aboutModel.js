import { getAbout } from '../api/api.js';

export const AboutModel = {
  async getAboutData() {
    const response = await getAbout();
    return response.data[0]; 
  }
};
