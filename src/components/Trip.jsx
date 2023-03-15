import React from 'react'
import "./TripStyles.css"
import TripData from './TripData'
const Trip = () => {
    return (
        <div className="trip">
            <h1>Recent Trips</h1>
            <p>You can discover unique
            destinations using Google Maps.</p>
            <div className="tripcard">
                <TripData
                    image="https://images.unsplash.com/photo-1496531693211-31c5234a5ea9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    heading="Trip In Indonesia"
                    text="Indonesia, officially the Republic of
                      Indonesia, is a country in Southeast Asia
                      and Oceania between the Indian and
                      Pacific oceans. It consists of over 17,000
                      islands, including Sumatra, Java, Sulawesi,
                     and parts of Borneo and New Guinea."
                />
                <TripData
                    image="https://images.unsplash.com/photo-1626308888778-2b77082d53b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
                    heading="Trip In Malaysia"
                    text="Indonesia, officially the Republic of
                      Indonesia, is a country in Southeast Asia
                      and Oceania between the Indian and
                      Pacific oceans. It consists of over 17,000
                      islands, including Sumatra, Java, Sulawesi,
                     and parts of Borneo and New Guinea."
                />
                <TripData
                    image="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80"
                    heading="Trip In France"
                    text="Indonesia, officially the Republic of
                      Indonesia, is a country in Southeast Asia
                      and Oceania between the Indian and
                      Pacific oceans. It consists of over 17,000
                      islands, including Sumatra, Java, Sulawesi,
                     and parts of Borneo and New Guinea."
                />
            </div>
        </div>
    )
}

export default Trip