import { Fragment } from 'preact'
import portrait from './assets/portrait.jpg'

const data = {
  portrait,
  personal: {
    Name: 'Damian Senn',
    Address: 'Hirslandersteig 3, 8032 Zürich',
    Mobile: <a href="tel:0041796720297">+41 79 672 02 97</a>,
    Email: <a href="mailto:damian.senn@gmail.com">damian.senn@gmail.com</a>,
    // Website: 'topaxi.ch',
    Github: <a href="https://github.com/topaxi">https://github.com/topaxi</a>,
    'Date of birth': '17 December 1989',
    Nationality: 'Switzerland',
    'Civil Status': 'Married',
  },
  employments: [
    {
      to: 'today',
      from: '2021',
      company: 'SMG Swiss Marketplace Group AG',
      jobTitle: 'Technical Lead Frontend',
    },
    {
      to: '2021',
      from: '2020',
      company: 'Scout24 Schweiz AG',
      jobTitle: 'Team and Techlead Frontend',
    },
    {
      to: '2020',
      from: '2019',
      company: 'Scout24 Schweiz AG',
      jobTitle: 'Frontend Engineer',
    },
    {
      to: '2019',
      from: '2016',
      company: 'Puzzle ITC GmbH',
      jobTitle: 'Software Engineer',
    },
    {
      to: '2008',
      from: '2016',
      company: 'Adfinis SyGroup AG',
      jobTitle: 'Software Engineer',
    },
  ],
  education: [
    {
      to: '2021',
      from: '2021',
      description: 'Web Security Training by Cyllective',
    },
    {
      to: '2019',
      from: '2017',
      description:
        'Dipl. Technician (Technical College) Computer Science at TSBE',
    },
    {
      to: '2018',
      from: '2018',
      description: 'OWASP TOP 10 Workshop by Redguard AG',
    },
    {
      to: '2016',
      from: '2016',
      description: 'RxJS Workshop with Ben Lesh',
    },
    {
      to: '2008',
      from: '2006',
      description: 'Computer Science Education at CsBe',
    },
    {
      to: '2006',
      from: '2005',
      description: '10. Basisschuljahr at CsBe',
    },
    {
      to: '2005',
      from: '2002',
      description: '7. – 9. Sekundarschule Hinterkappelen',
    },
    {
      to: '2002',
      from: '1996',
      description: '1. – 6. Primarschule Hinterkappelen',
    },
  ],
  languages: {
    German: 'Mother tongue',
    English: 'Fluent',
  },
  projects: [
    {
      to: 'today',
      from: '2020',
      title: 'FinanceScout24',
      description:
        'New Scout24 plattform which enables users to find their perfectly suited insurace, mortgage or loans.',
      role: 'Team and Techlead Frontend',
      responsibilities:
        'Leading a team of 10 developers, collaborate and develop the de- sign system with the UX team, identify and coordinate performance improvements with SEO and developers and defining the software architecture of all frontend applications by writing examples and guidelines.',
      technologies: [
        'React',
        'Redux',
        'redux-saga',
        'TypeScript',
        'Webpack',
        'Next.js',
        'Node.js',
        'SASS',
        'Docker',
        'Kubernetes',
      ],
    },
    {
      to: '2020',
      from: '2019',
      title: 'ImmoScout24',
      description:
        'One of the biggest real estate online market places in Switzerland is continously developed and modernized.',
      role: 'Software Engineer (Frontend)',
      responsibilities:
        'Developing new styleguide components, performance optimizations of the platform and implementing new features.',
      technologies: [
        'React',
        'Redux',
        'styled-components',
        'styled-system',
        'Node.js',
        'SSR',
      ],
    },
    {
      to: '2019',
      from: '2018',
      title: 'FMSx',
      description:
        'The existing fleet management system of BLS is being replaced with a newly developed web application. It communicates with every train and the data of all decentralized systems and aggregates events into a single system.',
      role: 'Software Architect (Frontend)',
      responsibilities:
        'Architecting the base structure of the application and teaching the full-stack developers frontend and Angular fundamentals.',
      technologies: ['Angular', 'NGRX', 'TypeScript', 'CSS'],
    },
    {
      to: '2019',
      from: '2018',
      title: 'Comment system for Tamedia Newsnet & 20min.ch',
      description:
        'The comment system of Tamedias Newsnet and 20min.ch is being replaced by Coralproject Talk.',
      role: 'Software Engineer (Full Stack)',
      responsibilities: '',
      technologies: ['Node.js', 'React', 'Redux', 'GraphQL', 'CSS'],
      breakAfter: 'page',
    },
    {
      to: '2018',
      from: '2019',
      title: 'Tamedia Unity',
      description:
        'Development of a new content management system for every Tamedia online publication.',
      role: 'Software Engineer (Frontend)',
      responsibilities: '',
      technologies: [
        'React',
        'Redux',
        'redux-saga',
        'JavaScript',
        'styled-components',
        'Webpack',
      ],
    },
    {
      to: '2018',
      from: '2017',
      title: 'SocialWeb',
      description:
        'A comprehensive industry-solution for social and social-education organizations. Implementing all relevant processes for clients including stationary facility processes like work planning and time tracking.',
      role: 'Software Engineer (Full Stack)',
      responsibilities: '',
      technologies: [
        'Angular (2+)',
        'TypeScript',
        'RxJS',
        'Karma/Jasmine',
        'Webpack',
        'Bootstrap',
        'Ruby on Rails (API-only REST/JSON)',
        'Capybara',
        'PostgreSQL',
        'Docker',
        'Kubernetes',
      ],
    },
    {
      to: '2017',
      from: '2017',
      title: 'CodE',
      description:
        'CodE (Contrôle des Entreprises) is an application for SECO, EKAS and the cantons of Switzerland to implement the accident in surance laws (UVG) and labour laws, as well as improving efficiency in data-management, communication, controlling and administration.',
      role: 'Software Engineer (Frontend)',
      responsibilities:
        'Layout changes and development of the application to take pictures and make them available offline as well as online.',
      technologies: ['Angular', 'JavaScript', 'PouchDB', 'Offline-First'],
    },
    {
      to: '2017',
      from: '2017',
      title: 'SEPP Admin',
      description:
        'Web-frontend to mark parking zones and their prices on a map based on leaflet.js. The admin interface is a part of a solution to replace physical parking meters with an iOS and Android App.',
      role: 'Software Engineer (Frontend, Requirements)',
      responsibilities: '',
      technologies: [
        'Angular (2+)',
        'TypeScript',
        'NGRX',
        'RxJS',
        'Leaflet.js',
        'Bootstrap',
        'Webpack',
        'REST/JSON API',
      ],
    },
    {
      to: '2017',
      from: '2017',
      title: 'PowerCoders',
      description: 'Code Academy for Refugees',
      role: 'Teacher',
      responsibilities: 'Teaching web and JavaScript basics.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'WebSockets'],
    },
    {
      to: '2018',
      from: '2016',
      title: 'Puzzle Time',
      description: '',
      role: 'Software Engineer (Full Stack)',
      responsibilities: '',
      technologies: ['Ruby on Rails', 'MySQL', 'jQuery', 'Bootstrap', 'SASS'],
    },
    {
      to: '2016',
      from: '2016',
      title: 'Swiss Olympic Athletes-Datamanagement',
      description: '',
      role: 'Software Engineer (Frontend)',
      responsibilities: '',
      technologies: [
        'AngularJS',
        'SASS',
        'Gulp',
        'REST',
        'Performance Optimierungen',
      ],
    },
    {
      to: '2016',
      from: '2016',
      title: 'Bison Schweiz AG: PoC Mobile Orders and E-Labels',
      description: '',
      role: '',
      responsibilities: '',
      technologies: [
        'Angular 2',
        'Ionic v2 (Cordova)',
        'TypeScript',
        'PouchDB',
        'Web SQL',
      ],
    },
    {
      to: '2016',
      from: '2016',
      title: 'NDBJS',
      description: '',
      role: '',
      responsibilities: '',
      technologies: ['Ruby on Rails', 'MySQL', 'jQuery', 'Bootstrap', 'SASS'],
    },
    {
      to: '2016',
      from: '2015',
      title: 'TCS CarDispo2',
      description: '',
      role: 'Software Engineer (Full Stack)',
      responsibilities: '',
      technologies: [
        'Ember.js',
        'JavaScript',
        'CSS3',
        'HTML5',
        'Python',
        'Django',
        'JSONAPI',
        'PostgreSQL',
      ],
    },
    {
      to: '2015',
      from: '2016',
      title: 'Adfinis SyGroup CSS Framework',
      description: '',
      role: '',
      responsibilities: '',
      technologies: ['CSS3', 'cssnext', 'PostCSS', 'Broccoli.js'],
    },
    {
      to: '2015',
      from: '2015',
      title: 'Adfinis SyGroup Customer Center',
      description: '',
      role: 'Software Engineer (Full Stack)',
      responsibilities: '',
      technologies: [
        'Ember.js',
        'Node.js',
        'JavaScript',
        'CSS3',
        'HTML5',
        'PostgreSQL',
        'Redis',
      ],
    },
    {
      to: '2015',
      from: '2015',
      title: 'Ember SyMonitoring Prototype',
      description: '',
      role: '',
      responsibilities: '',
      technologies: ['Ember.js', 'JavaScript', 'CSS3', 'HTML5'],
    },
    {
      to: '2015',
      from: '2014',
      title: 'BVB Infotainment',
      description: '',
      role: 'Software Engineer (Backend)',
      responsibilities: '',
      technologies: ['Node.js', 'Socket.IO', 'Python', 'Django'],
    },
    {
      to: '2014',
      from: '2014',
      title: 'Gameswelt Relaunch',
      description: '',
      role: '',
      responsibilities: '',
      technologies: ['CSS3', 'HTML5', 'JavaScript', 'PHP', 'MySQL'],
    },
    {
      to: '2013',
      from: '2013',
      title: 'Gameswelt Article Admin rewrite',
      description: '',
      role: '',
      responsibilities: '',
      technologies: ['CSS3', 'HTML5', 'JavaScript', 'PHP', 'MySQL'],
    },
    {
      to: '2013',
      from: '2013',
      title: 'Mann TV',
      description: '',
      role: '',
      responsibilities: '',
      technologies: ['CSS3', 'HTML5', 'JavaScript', 'PHP', 'MySQL'],
    },
    {
      to: '2015',
      from: '2010',
      title: 'easyCOMM General Assembly Tool',
      description: '',
      role: '',
      responsibilities: '',
      technologies: [
        'CSS3',
        'HTML5',
        'JavaScript',
        'Google Closure Compiler',
        'PHP',
        'MySQL',
      ],
    },
    {
      to: '2010',
      from: '2009',
      title: 'neuhier.ch',
      description: '',
      role: '',
      responsibilities: '',
      technologies: ['CSS3', 'XHTML 1.1', 'JavaScript', 'PHP', 'MySQL'],
    },
    {
      to: '2015',
      from: '2008',
      title: 'Gameswelt',
      description: '',
      role: '',
      responsibilities: '',
      technologies: ['CSS3', 'XHTML 1.1', 'JavaScript', 'PHP', 'MySQL'],
    },
  ],
}

function range(length: number) {
  return Array.from({ length }, (_, i) => i)
}

function chunk<T>(array: T[], n: number) {
  return range(Math.ceil(array.length / n)).map((i) =>
    array.slice(i * n, i * n + n)
  )
}

function DefinitionList(props: {
  title?: string
  gridArea?: string
  chunk?: number
  data:
    | Record<string, string | JSX.Element>
    | Array<[string, string | JSX.Element]>
}) {
  const { title, gridArea, data } = props

  const dataArray = Array.isArray(data) ? data : Object.entries(data)

  const chunkedArray = props.chunk ? chunk(dataArray, props.chunk) : [dataArray]

  return (
    <div
      class={`definition-list ${gridArea}`}
      style={gridArea ? { gridArea } : undefined}
    >
      {title && <h2>{title}</h2>}
      {chunkedArray.map((data, i) => (
        <div
          class={`definition-list__wrapper definition-list__wrapper-${i}`}
          key={i}
        >
          <dl>
            {data.map(([key, value]) => (
              <Fragment key={key}>
                <dt>{key}</dt>
                <dd>{value}</dd>
              </Fragment>
            ))}
          </dl>
        </div>
      ))}
    </div>
  )
}

function Personal() {
  return <DefinitionList gridArea="personal" data={data.personal} />
}

function Employments() {
  return (
    <DefinitionList
      title="Employments"
      gridArea="employment"
      data={data.employments.map<[string, string]>((employment) => [
        `${employment.from}-${employment.to}`,
        `${employment.company} as ${employment.jobTitle}`,
      ])}
    />
  )
}

function Projects() {
  return (
    <div style={{ gridArea: 'projects' }}>
      <h2>Projects</h2>
      {data.projects.map((project) => (
        <div class="project" key={project.title}>
          <time>
            {project.from === project.to
              ? project.to
              : `${project.from}-${project.to}`}
          </time>
          <div>
            <h3>{project.title}</h3>
            {project.description && (
              <p class="project__description">{project.description}</p>
            )}
            {project.role && <p class="project__role">{project.role}</p>}
            {project.responsibilities && (
              <p class="project__responsibilities">
                {project.responsibilities}
              </p>
            )}
            {project.technologies.length !== 0 && (
              <ul class="project__technologies">
                {project.technologies.map((technology) => (
                  <li>{technology}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}

function Education() {
  return (
    <DefinitionList
      title="Education"
      gridArea="education"
      data={data.education.map<[string, string]>((education) => [
        education.from === education.to
          ? education.to
          : `${education.from}-${education.to}`,
        education.description,
      ])}
    />
  )
}

function Languages() {
  return (
    <DefinitionList
      title="Languages"
      gridArea="languages"
      data={data.languages}
    />
  )
}

export function App() {
  return (
    <main role="main">
      <h1 style={{ gridArea: 'header' }}>Curriculum Vitae</h1>
      <img style={{ gridArea: 'portrait' }} src={portrait} />
      <Personal />
      <Employments />
      <Projects />
      <Education />
      <Languages />
    </main>
  )
}
