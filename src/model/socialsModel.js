import { getSocials } from '../api/api.js';

export const SocialModel = {
  async getSocialData() {
    const response = await getSocials();
    return response.data[0]; 
  }
};
