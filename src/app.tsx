import { useState, useCallback } from 'preact/hooks'
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

interface SkillsProps {
  onSelectSkill?: (skill: string) => void
}

function Skills(props: SkillsProps) {
  const { onSelectSkill } = props

  const technologies: Array<[string[], number]> = [
    ...data.skills.map(([technology, weight]) => [[technology], weight]),
    ...data.projects.map((p, i, projects) => [
      p.technologies,
      projects.length * 2 + (projects.length - i) * 2,
    ]),
  ] as any

  const wordCloud = technologies.reduce<Record<string, number>>(
    (words, [t, weight]) => {
      for (let word of t) {
        words[word] ??= 0
        words[word] += weight
      }

      return words
    },
    {}
  )
  const words = Object.entries(wordCloud)
    .filter(([_text, value]) => value > 0)
    .map(([text, value]) => ({
      text,
      value,
    }))
    // Sorting only to easier debug word weight
    .sort((a, b) => b.value - a.value)

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
        callbacks={{
          onWordClick: (word) => onSelectSkill?.(word.text),
        }}
        options={{
          colors: ['#222', '#555', '#888'],
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

interface ProjectProps {
  highlightSkill?: string
  onSelectSkill?: (skill: string) => void
}

function Projects(props: ProjectProps) {
  const { highlightSkill, onSelectSkill } = props

  return (
    <section style={{ gridArea: 'projects' }}>
      <h2>Projects</h2>
      {data.projects.map((project) => (
        <article
          class={`project ${
            highlightSkill &&
            !(project.technologies as readonly string[]).includes(
              highlightSkill
            )
              ? 'project--unskilled'
              : ''
          }`}
          key={project.title}
        >
          <DateTime {...project} class="project__date" />
          <div class="project__body">
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
                {project.technologies.map((technology) => {
                  const selected = technology === highlightSkill

                  return (
                    <li key={technology} class="project__technology">
                      <button
                        style={{
                          fontWeight: selected ? 'bold' : undefined,
                          textDecoration: selected ? 'underline' : undefined,
                        }}
                        onClick={onSelectSkill?.bind(null, technology)}
                      >
                        {technology}
                      </button>
                    </li>
                  )
                })}
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
  const [selectedSkill, setSelectedSkill] = useState<string | undefined>(
    undefined
  )

  const handleSelectSkill = useCallback((skill: string) => {
    setSelectedSkill((currentSkill) =>
      skill === currentSkill ? undefined : skill
    )
  }, [])

  return (
    <main role="main">
      <h1 style={{ gridArea: 'header' }}>Curriculum Vitae</h1>
      <img style={{ gridArea: 'portrait' }} src={data.portrait} />
      <Personal />
      <Skills onSelectSkill={handleSelectSkill} />
      <Employments />
      <Projects
        highlightSkill={selectedSkill}
        onSelectSkill={handleSelectSkill}
      />
      <Education />
      <Languages />
    </main>
  )
}
