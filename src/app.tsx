import ReactWordcloud from 'react-wordcloud'
import { DateTime } from './components/DateTime'
import { DefinitionList } from './components/DefinitionList'
import { data } from './data'

function Personal() {
  return <DefinitionList gridArea="personal" data={data.personal} />
}

function Employments() {
  return (
    <DefinitionList
      title="Employments"
      gridArea="employment"
      data={data.employments.map<[JSX.Element, string]>((employment) => [
        <DateTime {...employment} />,
        `${employment.company} as ${employment.jobTitle}`,
      ])}
    />
  )
}

function Skills() {
  const technologies = data.projects.flatMap((p) => p.technologies)
  const wordCloud = technologies.reduce<Record<string, number>>(
    (words, word, i) => {
      words[word] ??= 0
      words[word] += technologies.length * 2 + (technologies.length - i) * 2

      return words
    },
    {}
  )
  const words = Object.entries(wordCloud).map(([text, value]) => ({
    text,
    value,
  }))

  return (
    <div
      class="skills"
      style={{
        maxWidth: '420px',
        maxHeight: '250px',
        gridArea: 'skills',
        justifySelf: 'center',
      }}
    >
      <ReactWordcloud
        words={words}
        options={{
          colors: ['#000', '#222', '#444', '#666'],
          deterministic: true,
          enableTooltip: false,
          fontSizes: [12, 48],
          rotationAngles: [0, 90],
          rotations: 2,
        }}
      />
    </div>
  )
}

function Projects() {
  return (
    <section style={{ gridArea: 'projects' }}>
      <h2>Projects</h2>
      {data.projects.map((project) => (
        <article class="project" key={project.title}>
          <DateTime {...project} class="project__date" />
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
            {(project.technologies.length as number) !== 0 && (
              <ul class="project__technologies">
                {project.technologies.map((technology) => (
                  <li>{technology}</li>
                ))}
              </ul>
            )}
          </div>
        </article>
      ))}
    </section>
  )
}

function Education() {
  return (
    <DefinitionList
      title="Education"
      gridArea="education"
      data={data.education.map<[JSX.Element, string]>((education) => [
        <DateTime {...education} />,
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
      <img style={{ gridArea: 'portrait' }} src={data.portrait} />
      <Personal />
      <Skills />
      <Employments />
      <Projects />
      <Education />
      <Languages />
    </main>
  )
}
