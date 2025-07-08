import config from "../../config.js";

const path = {
    home : `${config.BASE_URL}/`,
    about :  `${config.BASE_URL}/about`,
    certificates : `${config.BASE_URL}/certificates`,
    education : `${config.BASE_URL}/educations`,
    projects : `${config.BASE_URL}/projects`,
    skills : `${config.BASE_URL}/skills`,
    socials : `${config.BASE_URL}/socials`
}
async function fetchJson(url, options = {}) {
  const res = await fetch(url, options);
  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status} - ${res.statusText}`);
  }
  return res.json();
}

export async function getHome() {
  return fetchJson(path.home);
}

export async function getAbout() {
  return fetchJson(path.about);
}

export async function getCertificates() {
  return fetchJson(path.certificates);
}

export async function getEducation() {
  return fetchJson(path.education);
}

export async function getProjects() {
  return fetchJson(path.projects);
}

export async function getSkills() {
    return fetchJson(path.skills);
}

export async function getSocials() {
    return fetchJson(path.socials);
}