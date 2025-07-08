import {ensureContainer} from '../utils/domHelper.js';
import { EducationModel } from '../model/educationsModel.js';
import { EducationView } from '../view/educationsView.js';

export const EducationPresenter = async () => {
  const container = ensureContainer('education-container');

  try {
    const educations = await EducationModel.getEducationList();
    const html = EducationView.render(educations);
    EducationView.show(container, html);
  } catch (error) {
    console.error('Error fetching education data:', error);
    EducationView.showError(container);
  }
};

EducationPresenter();
