export interface DateTimeProps {
  className?: string
  from?: `${number}`
  to?: `${number}` | 'today'
}

export function DateTime(props: DateTimeProps): JSX.Element {
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
