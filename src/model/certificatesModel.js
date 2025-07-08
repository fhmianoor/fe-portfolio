import { getCertificates } from '../api/api.js';

export const CertificateModel = {
  async getCertificateList() {
    const response = await getCertificates();
    return response.data; 
  }
};
