import { Link } from "react-router-dom"

const DUMMY_EVENTS = [
    {
        id: 'e1',
        title: 'Dummy event'
    },
    {
        id: 'e2',
        title: 'Random event'
    }
]

const EventsPage = () => {
    return (
        <>
            <h1>EventsPage!</h1>
            <ul>
                {DUMMY_EVENTS.map(e => (
                    <li key={e.id}>
                        <Link to={e.id}>{e.title}</Link>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default EventsPage;