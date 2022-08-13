import { Fragment } from 'preact'

function range(length: number) {
  return Array.from({ length }, (_, i) => i)
}

function chunk<T>(array: T[], n: number) {
  return range(Math.ceil(array.length / n)).map((i) =>
    array.slice(i * n, i * n + n)
  )
}

export interface DefinitionListProps {
  title?: string
  gridArea?: string
  chunk?: number
  data:
    | Record<string, string | JSX.Element>
    | Array<[string | JSX.Element, string | JSX.Element]>
}

export function DefinitionList(props: DefinitionListProps): JSX.Element {
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
