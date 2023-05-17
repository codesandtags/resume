# Resume

Create your resume using a JSON schema, with the ability to use multiple templates and examples created in different tecnologies.

## Support

- ⬜️ Plain HTML, JavaScript and CSS
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

## JSON Schema

You can find an example of this schema into the `schema` folder, which you can modify to get your own version of your resume.

There there is an example, how it looks like:

```json
{
  "header": {
    "name": "John Doe",
    "contact": {
      "phone": "(123) 456-7890",
      "email": "john.doe@example.com"
    },
    "socialMedia": {
      "linkedin": "https://linkedin.com/in/johndoe",
      "github": "https://github.com/johndoe"
    }
  },
  "summary": "A highly motivated software developer with over 5 years of experience in web development. Proficient in modern technologies and frameworks, with a focus on creating efficient and high-performing applications.",
  "workExperience": [
    {
      "jobTitle": "Senior Software Developer",
      "company": "Tech Corp",
      "dates": "2021-Present",
      "accomplishments": [
        "Led a team of developers to build a high-performing, scalable web application.",
        "Implemented automated testing framework which reduced bugs by 25%.",
        "Presented at 2022 Tech Conference about our team's approach to agile methodology."
      ]
    },
    {
      "jobTitle": "Software Developer",
      "company": "Web Solutions",
      "dates": "2018-2021",
      "accomplishments": [
        "Developed several high-impact features for the company's main product, leading to a 15% increase in user engagement.",
        "Improved application's performance by optimizing the front-end code.",
        "Worked closely with the design team to implement a new responsive design for the product."
      ]
    },
    {
      "jobTitle": "Junior Software Developer",
      "company": "Start-Up",
      "dates": "2016-2018",
      "accomplishments": [
        "Contributed to the development of the company's product from the ground up.",
        "Proposed and implemented a solution for improving API response time.",
        "Collaborated with a cross-functional team to launch the product on time."
      ]
    }
  ],
  "education": [
    {
      "dates": "2012-2016",
      "institution": "Some University",
      "certificate": "Bachelor of Science in Computer Science",
      "accomplishments": "Graduated with Honors"
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
