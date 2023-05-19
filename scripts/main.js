function populateHeader(header) {
  const headerElement = document.querySelector("header");
  headerElement.innerHTML = `
    <h1>${header.name}</h1>
    <h3>${header.role}</h3>
    <p>📍 ${header.location}, ${header.contact.email}</p>
    <p>
      <a href="${header.socialMedia.linkedin}">LinkedIn</a> 
      | <a href="${header.socialMedia.github}">GitHub</a>
      | <a href="${header.socialMedia.website}">Website</a>
      </p>
  `;
}

/**
 *
 * @param {*} summary
 */
function populateSummary(summary) {
  const summaryElement = document.querySelector("#summary");
  summaryElement.innerHTML = `
    <h2>Summary</h2>
    <p>${summary}</p>
  `;
}

function populateWorkExperience(workExperience) {
  const workExperienceElement = document.querySelector("#workExperience");
  workExperienceElement.innerHTML = "<h2>Work Experience</h2>";

  workExperience.forEach((job) => {
    const jobElement = document.createElement("div");
    jobElement.classList.add("experience");
    jobElement.innerHTML = `
      <div class="experience__header">
        <h3>${job.jobTitle}</h3>
        <div>
          <h4>${job.company}</h4>
          <h4>${job.dates}</h4>
        </div>
      </div>
      <ul>
        ${job.accomplishments.map((acc) => `<li>${acc}</li>`).join("")}
      </ul>
    `;
    workExperienceElement.appendChild(jobElement);
  });
}

function populateEducation(education) {
  const educationElement = document.querySelector("#education");
  educationElement.innerHTML = "<h2>Education</h2>";

  education.forEach((edu) => {
    const eduElement = document.createElement("div");
    eduElement.classList.add("education");
    eduElement.innerHTML = `
      <div class="education__header">
        <h3>${edu.institution}</h3>
        <div>
          <h4>${edu.certificate}</h4>
          <h4>${edu.dates}</h4>
        </div>
      </div>
      <ul>
        ${edu.accomplishments.map((acc) => `<li>${acc}</li>`).join("")}
      </ul>
    `;
    educationElement.appendChild(eduElement);
  });
}

// Get skill strength with squares given a skill level
function getSkillStrength(level) {
  const skillStrength = [];
  for (let i = 0; i < 5; i++) {
    if (i < level) {
      skillStrength.push("<span>■</span>");
    } else {
      skillStrength.push("<span>□</span>");
    }
  }
  return skillStrength.join("");
}

function renderSkills(skills) {
  return `
  <ul>
  ${skills
    .map(
      (skill) => `<li>
    <span>${skill.name}</span>
    <div class="skill-level">${getSkillStrength(skill.level)}</div>
  </li>`
    )
    .join("")}
</ul>`;
}

function addIntersectionToAnimateSkills(skillsSection) {
  // Create an Intersection Observer
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      // If the entry is intersecting
      if (entry.isIntersecting) {
        const skillSpans = entry.target.querySelectorAll(".skill-level span");
        skillSpans.forEach((span, index) => {
          // Add a delay based on the index and add the animate class
          setTimeout(() => {
            span.classList.add("animate");
          }, index * 20);
        });

        // Disconnect the observer once the animation has been triggered
        observer.disconnect();
      }
    });
  });

  // Start observing the skills section
  observer.observe(skillsSection);
}

function populateSkills(skills) {
  const skillsElement = document.querySelector("#skills");
  skillsElement.innerHTML = "<h2>Skills</h2>";

  const skillGroup = document.createElement("div");
  skillGroup.classList.add("skill-group");
  const hardSkills = skills.filter((skill) => skill.type === "hard");
  const softSkills = skills.filter((skill) => skill.type === "soft");

  const hardSkillsList = document.createElement("div");
  hardSkillsList.innerHTML = `
    <div clas="hard-skills">
      <h3>Hard Skills</h3>
      ${renderSkills(hardSkills)}
    </div>
  `;
  skillGroup.appendChild(hardSkillsList);

  const softSkillsList = document.createElement("div");
  softSkillsList.innerHTML = `
    <div clas="soft-skills">
      <h3>Soft Skills</h3>
      ${renderSkills(softSkills)}
    </div>
  `;
  skillGroup.appendChild(softSkillsList);
  skillsElement.appendChild(skillGroup);
  addIntersectionToAnimateSkills(skillsElement);
}

function populatePortfolio(portfolio) {
  const portfolioElement = document.querySelector("#portfolio");
  portfolioElement.innerHTML = "<h2>Portfolio</h2>";

  portfolio.forEach((item) => {
    const itemElement = document.createElement("div");
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
    populateSkills(data.skills);
    populateEducation(data.education);
  })
  .catch((error) => console.error("Error:", error));
