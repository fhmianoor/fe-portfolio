import { getHome } from '../api/api.js';

export const HomeModel = {
  async getHomeContent() {
     return await getHome();
  }
};
