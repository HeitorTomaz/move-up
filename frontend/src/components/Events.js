import Event from './Event'

const Events = ({ events, onDelete }) => {
    return (
        <>
            {events.map((event) => (
                <Event 
                    key={event._id}
                    _id={event._id}
                    sport={event.sport}
                    local={event.local}
                    curr_players={event.curr_players}
                    max_players={event.max_players}
                    onDelete={onDelete}/>
                ))}
        </>
    )
}

export default Events