import { ensureContainer } from '../utils/domHelper.js';
import { HomeModel } from '../model/homeModel.js';
import { HomeView } from '../view/homeView.js';

export const HomePresenter = async () => {
  const container = ensureContainer('home-container');

  try {
    const homeData = await HomeModel.getHomeContent();
    const html = HomeView.render(homeData);
    HomeView.show(container, html);
  } catch (error) {
    console.error('Error loading home:', error);
    HomeView.showError(container);
  }
};
