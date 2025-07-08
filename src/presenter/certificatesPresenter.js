import {ensureContainer} from '../utils/domHelper.js';
import { CertificateModel } from '../model/certificatesModel.js';
import { CertificateView } from '../view/certificatesView.js';

export const CertificatePresenter = async () => {
  const container = ensureContainer('certificates-container');

  try {
    const certificates = await CertificateModel.getCertificateList();
    const html = CertificateView.render(certificates);
    CertificateView.show(container, html);
  } catch (error) {
    console.error("Error fetching certificates:", error);
    CertificateView.showError(container);
  }
};

CertificatePresenter();
