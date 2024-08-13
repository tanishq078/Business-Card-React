/* eslint-disable react/prop-types */
export function BusinessCard({ card }) {

    return <div>
        <div style={{ border: '1px solid black', margin: '10px', padding: '10px' }}>
            <h2>{card.name}</h2>
            <p>{card.description}</p>
            <p><strong>Interests:</strong> {card.interest}</p>
            <button>LinkedIn</button>
            <button>Twiiter</button>
        </div>

    </div>
}