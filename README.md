# Resume

Create your resume using a JSON schema, with the ability to use multiple templates and examples created in different tecnologies.

## Support

- ✅ Plain HTML, JavaScript and CSS (default version)
- ⬜️ Tailwind CSS
- ⬜️ React
- ⬜️ React with Nextjs
- ⬜️ Angular
- ⬜️ Vue
- ⬜️ Svelte

To check the examples using these technologies, please take a look to the branches in this repository.

## Resume structure

A good resume contains the next sections:

- **header**: Contains name and contact information, and social media.
- **summary**: Contains a personal summary and relevant information about the experience.
- **workExperience**: Contains a collection of the last jobs, dates, and relevant accomplishments.
- **education**: Contains a summary of
- **skills**: Contains a list of soft and hard skills, each one with a measure from 1 to 5.
- **portfolio**: Contains links to showcase, like porftfolio, awards or public recognitions.

## Features

- Content is loaded from a JSON file
- Sections can be change quickly
- Support several templates (default, modern, international) @TODO

## JSON Schema

You can find an example of this schema into the `schema` folder, which you can modify to get your own version of your resume.

There there is an example, how it looks like:

```json
{
  "header": {
    "name": "Edwin Torres",
    "location": "Toronto, Canada",
    "role": "Senior Software Engineer",
    "contact": {
      "phone": "(+1) 123-456789",
      "email": "codesandtags@gmail.com"
    },
    "socialMedia": {
      "linkedin": "https://ca.linkedin.com/in/edwintorresdeveloper/en",
      "github": "https://github.com/codesandtags",
      "website": "https://www.codesandtags.io/"
    }
  },
  "summary": "Highly driven software developer with a decade of experience across diverse industries including Real Estate, Payments, Health, and Finance. Specialized in Web Development, Micro Frontends, InnerSource, and Architecture Design. <strong>Passionate about enhancing developer experience</strong> through improved documentation and task automation.",
  "workExperience": [
    {
      "jobTitle": "Senior Software Engineer",
      "company": "Scotiabank, Canada",
      "dates": "Feb 2021 - Present",
      "accomplishments": [
        "Implemented Backstage to increased the <strong>Developer Experience (DX)</strong> for more than <strong>200 developers</strong> in different regions.",
        "Worked with teams in different regions across America, to promote the software reuse.",
        "Advocated the InnerSource adoption at Scotiabank, and, created documentation, provided talks and guidance."
      ]
    },
    {
      "jobTitle": "Software Architect",
      "company": "Scotiabank, Colombia",
      "dates": "Nov 2019 - Feb 2021",
      "accomplishments": [
        "Architect and write front end code for the foundation and complex features of each project.",
        "Work closely with our design and UX teams to deliver next generation experiences across our applications.",
        "Created technical documentation for front end aspects of the project."
      ]
    },
    {
      "jobTitle": "Full Stack Developer",
      "company": "Scotiabank, Colombia",
      "dates": "Jun 2017 - Nov 2019",
      "accomplishments": [
        "Implemented successfully the Microfrontend architecture for 7 application in one of the most important customer flows.",
        "Created and maintained group of reusable libraries for Frontend projects.",
        "Lead a frontend community made of ~20 people."
      ]
    }
  ],
  "education": [
    {
      "dates": "2023 - Present",
      "institution": "ZTM Academy",
      "certificate": "Machine Learning and Data Science, Online",
      "accomplishments": []
    },
    {
      "dates": "2008 - 2014",
      "institution": "ECCI University",
      "certificate": "Bachelor of Science in Computer Science, Colombia",
      "accomplishments": ["Winner Programming Contests 2011, 2010, 2009"]
    }
  ],
  "skills": [
    {
      "name": "JavaScript",
      "level": 5,
      "type": "hard"
    },
    {
      "name": "Python",
      "level": 4,
      "type": "hard"
    },
    {
      "name": "HTML/CSS",
      "level": 5,
      "type": "hard"
    },
    {
      "name": "React",
      "level": 4,
      "type": "hard"
    },
    {
      "name": "Node.js",
      "level": 4,
      "type": "hard"
    },
    {
      "name": "Communication",
      "level": 5,
      "type": "soft"
    },
    {
      "name": "Problem-solving",
      "level": 5,
      "type": "soft"
    },
    {
      "name": "Teamwork",
      "level": 5,
      "type": "soft"
    },
    {
      "name": "Creativity",
      "level": 4,
      "type": "soft"
    },
    {
      "name": "Leadership",
      "level": 4,
      "type": "soft"
    }
  ],
  "portfolio": [
    {
      "title": "Personal Website",

      "link": "https://johndoe.com"
    },
    {
      "title": "Open Source Contribution",
      "link": "https://github.com/johndoe/project"
    }
  ]
}
```
