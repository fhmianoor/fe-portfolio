import {ensureContainer} from '../utils/domHelper.js';  
import { SocialModel } from '../model/socialsModel.js';
import { SocialView } from '../view/socialsView.js';

export const SocialPresenter = async () => {
  const container = ensureContainer('socials-container');

  try {
    const social = await SocialModel.getSocialData();
    const html = SocialView.render(social);
    SocialView.show(container, html);
  } catch (error) {
    console.error('Error fetching socials:', error);
    SocialView.showError(container);
  }
};

SocialPresenter();
