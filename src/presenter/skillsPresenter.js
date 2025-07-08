import {ensureContainer} from '../utils/domHelper.js';
import { SkillModel } from '../model/skillsModel.js';
import { SkillView } from '../view/skillsView.js';

export const SkillPresenter = async () => {
  const container = ensureContainer('skills-container');

  try {
    const skills = await SkillModel.getSkillList();
    const html = SkillView.render(skills);
    SkillView.show(container, html);
  } catch (error) {
    console.error('Error fetching skills:', error);
    SkillView.showError(container);
  }
};

SkillPresenter();
