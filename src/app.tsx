import { Fragment } from 'preact'
import { data } from './data'

function range(length: number) {
  return Array.from({ length }, (_, i) => i)
}

function chunk<T>(array: T[], n: number) {
  return range(Math.ceil(array.length / n)).map((i) =>
    array.slice(i * n, i * n + n)
  )
}

interface DateTimeProps {
  className?: string
  from?: `${number}`
  to?: `${number}` | 'today'
}

function DateTime(props: DateTimeProps): JSX.Element {
  const { className, from, to } = props

  return from === to ? (
    <time className={className} dateTime={to}>
      {to}
    </time>
  ) : (
    <span className={className}>
      <time dateTime={from}>{from}</time>-
      <time dateTime={to === 'today' ? String(new Date().getFullYear()) : to}>
        {to}
      </time>
    </span>
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
    <section
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
    </section>
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
      data={data.employments.map<[JSX.Element, string]>((employment) => [
        <DateTime {...employment} />,
        `${employment.company} as ${employment.jobTitle}`,
      ])}
    />
  )
}

function Projects() {
  return (
    <section style={{ gridArea: 'projects' }}>
      <h2>Projects</h2>
      {data.projects.map((project) => (
        <article class="project" key={project.title}>
          <DateTime {...project} className="project__date" />
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
      <Employments />
      <Projects />
      <Education />
      <Languages />
    </main>
  )
}
