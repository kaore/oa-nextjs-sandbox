import EventItem from '../components/EventItem';

const agendaUID = process.env.AGENDA_UID;
const APIKey = process.env.API_KEY;
const locale = process.env.LOCALE;

export async function getServerSideProps() {
  const data = await fetch(
    `https://api.openagenda.com/v2/agendas/${agendaUID}/events?key=${APIKey}&size=40`
  ).then(res => res.json());

  return {
    props: {
      events: data.events,
      locale
    }
  }
}

function Home({ events, locale }) {
  return (
    <ul className="list-group">
      {events.map(event => (
        <li
          className="list-group-item"
          key={event.uid}
        >
          <EventItem
            locale={locale}
            event={event}
          />
        </li>
      ))}
    </ul>
  );
}

export default Home;
