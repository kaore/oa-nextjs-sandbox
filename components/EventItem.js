const label = (obj, lang) => obj?.[lang] ?? obj[Object.keys(obj).shift()];

function EventItem({ event, locale }) {
  return <div>
    <strong>{label(event.title, locale)}</strong>
    <div>
      <span>{label(event.dateRange, locale)}</span>
    </div>
  </div>
}

export default EventItem;