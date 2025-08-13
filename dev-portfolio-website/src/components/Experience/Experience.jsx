import React from 'react'
import './Experience.css'

const Experience = () => {
  return (
   <div className="experience-container" id="experience">
    <div className="job">
        <div className="date-started">
            <p>2023 - Present</p>
        </div>
        <div className="job-description">
            <h4>GSM Security</h4>
            <h5>Surveillance Operator</h5>
            <p>
                As a Surveillance Operator, I was responsible for monitoring and analyzing live video feeds to ensure the safety and security of premises.I specialized in identifying and documenting unusual or suspicious activity, working under pressure, and communicating clearly and concisely to report findings to relevant personnel.
            </p>
        </div>
    </div>
    <div className="job">
        <div className="date-started">
            <p>2022 - Present</p>
        </div>
        <div className="job-description">
            <h4>Genius Sports</h4>
            <h5>Sports Event Analyst </h5>
            <p>
               As a Sports Event Analyst, I was responsible for monitoring, collecting, and updating real-time data from a wide variety of live sporting events. I was also tasked with maintaining the company's database using custom software, ensuring data accuracy by cross-referencing information from external sources, and staying up-to-date with sports news and match reports. 
            </p>
        </div>
    </div>
     <div className="job">
        <div className="date-started">
            <p>2021 - 2022</p>
        </div>
        <div className="job-description">
            <h4>Nu Boyana Films</h4>
            <h5>Health and Safety Department Manager</h5>
            <p>
                Implemented strict COVID-19 health protocols and guidelines on set.
                Ensured physical distancing measures were followed to minimize close contact.
                Provided and monitored the use of personal protective equipment (PPE) for the cast 
                and crew.
            </p>
        </div>
    </div>
     <div className="job">
        <div className="date-started">
            <p>2020 - 2021</p>
        </div>
        <div className="job-description">
            <h4>Nu Boyana Films</h4>
            <h5>Production Assistant</h5>
            <p>
                Supported on-set operations by coordinating schedules, managing equipment, and assisting various departments to ensure smooth production workflow. Maintained clear communication between crew members, handled time-sensitive tasks under pressure, and adapted quickly to changing priorities in a fast-paced environment.
            </p>
        </div>
    </div>
   </div>
  )
}

export default Experience