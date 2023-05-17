function populateHeader(header) {
  const headerElement = document.querySelector("header");
  headerElement.innerHTML = `
    <h1>${header.name}</h1>
    <p>${header.contact.phone}, ${header.contact.email}</p>
    <p><a href="${header.socialMedia.linkedin}">LinkedIn</a>, <a href="${header.socialMedia.github}">GitHub</a></p>
  `;
}

/**
 * 
 * @param {*} summary 
 */
function populateSummary(summary) {
  const summaryElement = document.querySelector('#summary');
  summaryElement.innerHTML = `
    <h2>Summary</h2>
    <p>${summary}</p>
  `;
}

function populateWorkExperience(workExperience) {
  const workExperienceElement = document.querySelector('#workExperience');
  workExperienceElement.innerHTML = '<h2>Work Experience</h2>';

  workExperience.forEach(job => {
    const jobElement = document.createElement('div');
    jobElement.innerHTML = `
      <h3>${job.jobTitle} at ${job.company}</h3>
      <h4>${job.dates}</h4>
      <ul>
        ${job.accomplishments.map(acc => `<li>${acc}</li>`).join('')}
      </ul>
    `;
    workExperienceElement.appendChild(jobElement);
  });
}


function populateEducation(education) {
  const educationElement = document.querySelector('#education');
  educationElement.innerHTML = '<h2>Education</h2>';

  education.forEach(edu => {
    const eduElement = document.createElement('div');
    eduElement.innerHTML = `
      <h3>${edu.institution}</h3>
      <p>${edu.certificate}</p>
      <p>${edu.dates}</p>
      <p>Accomplishments: ${edu.accomplishments}</p>
    `;
    educationElement.appendChild(eduElement);
  });
}


function populateSkills(skills) {
  const skillsElement = document.querySelector('#skills');
  skillsElement.innerHTML = '<h2>Skills</h2>';

  const hardSkills = skills.filter(skill => skill.type === 'hard');
  const softSkills = skills.filter(skill => skill.type === 'soft');

  const hardSkillsList = document.createElement('div');
  hardSkillsList.innerHTML = `
    <h3>Hard Skills</h3>
    <ul>
      ${hardSkills.map(skill => `<li>${skill.name} (${skill.level}/5)</li>`).join('')}
    </ul>
  `;
  skillsElement.appendChild(hardSkillsList);

  const softSkillsList = document.createElement('div');
  softSkillsList.innerHTML = `
    <h3>Soft Skills</h3>
    <ul>
      ${softSkills.map(skill => `<li>${skill.name} (${skill.level}/5)</li>`).join('')}
    </ul>
  `;
  skillsElement.appendChild(softSkillsList);
}


function populatePortfolio(portfolio) {
  const portfolioElement = document.querySelector('#portfolio');
  portfolioElement.innerHTML = '<h2>Portfolio</h2>';

  portfolio.forEach(item => {
    const itemElement = document.createElement('div');
    itemElement.innerHTML = `
      <h3>${item.title}</h3>
      <a href="${item.link}">${item.link}</a>
    `;
    portfolioElement.appendChild(itemElement);
  });
}


// Fetch the resume data from the JSON file
fetch("schema/resume.json")
  .then((response) => response.json())
  .then((data) => {
    populateHeader(data.header);
    populateSummary(data.summary);
    populateWorkExperience(data.workExperience);
    populateEducation(data.education);
    populateSkills(data.skills);
    populatePortfolio(data.portfolio);
  })
  .catch((error) => console.error("Error:", error));
