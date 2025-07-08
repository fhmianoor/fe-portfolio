import {ensureContainer} from '../utils/domHelper.js';
import { AboutModel } from '../model/aboutModel.js';
import { AboutView } from '../view/aboutView.js';

export const AboutPresenter = async () => {
  const container = ensureContainer('about-container');

  try {
    const about = await AboutModel.getAboutData();
    const html = AboutView.render(about);
    AboutView.show(container, html);
  } catch (error) {
    console.error("Error fetching about data:", error);
    AboutView.showError(container);
  }
};

AboutPresenter();
