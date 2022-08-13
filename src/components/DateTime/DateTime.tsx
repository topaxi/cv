export interface DateTimeProps {
  class?: string
  from?: `${number}`
  to?: `${number}` | 'today'
}

export function DateTime(props: DateTimeProps): JSX.Element {
  const { class: c, from, to } = props

  return from === to ? (
    <time class={c} dateTime={to}>
      {to}
    </time>
  ) : (
    <span class={c}>
      <time dateTime={from}>{from}</time>-
      <time dateTime={to === 'today' ? String(new Date().getFullYear()) : to}>
        {to}
      </time>
    </span>
  )
}
