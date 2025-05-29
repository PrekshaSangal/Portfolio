import React from 'react'

export default function Projects() {




  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className="col-md-4">
            <div className="card m-3" style={{ width: '18rem', backgroundColor: 'var(--color-2)', border: 'none', margin: '10px' }}>
              <div className="card-body">
                <h4 style={{ color: 'var(--color-5)' }}>
                  <a href="https://github.com/PrekshaSangal/movie-review" style={{ color: 'var(--color-5)', textDecoration: 'none' }}>
                    Movie Reviews
                  </a>
                </h4>
                <a href="https://github.com/PrekshaSangal/movie-review" style={{ color: 'var(--color-5)', textDecoration: 'none' }}>
                  <p style={{ color: 'var(--color-3)' }}>
                  I helped develop a user-friendly UI and the backend logic, making sure there was smooth communication between the client and server. This involved designing effective APIs and managing NoSQL databases efficiently, ensuring seamless data exchange with various backend frameworks and technologies.
                  </p>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card m-3" style={{ width: '18rem', backgroundColor: 'var(--color-2)', border: 'none', margin: '10px' }}>
              <div className="card-body">
                <h4 style={{ color: 'var(--color-5)' }}>
                    AR Shopping Experience
                </h4>
                  <p style={{ color: 'var(--color-3)' }}>
                    Developed a mobile app “AR-STARK “ inspired by Iron Man's AR HUD, enabling users to visualize products in their space before purchase. Implemented AR features for trying on clothes, accessories and optimized UX/UI for enhanced shopping experience.
                  </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card m-3" style={{ width: '18rem', backgroundColor: 'var(--color-2)', border: 'none', margin: '10px' }}>
              <div className="card-body">
                <h4 style={{ color: 'var(--color-5)' }}>
                    Kisan Seva 
                </h4>
                  <p style={{ color: 'var(--color-3)' }}>
                  Led the development of ‘Kisan Seva’ , a user-friendly mobile app connecting farmers and enhancing agricultural practices. Utilized HTML/CSS/JavaScript for interface design and for dynamic experiences. Implemented phased rollout to reach rural and urban areas, promoting sustainability and improving farmer livelihoods, enhancing overall agricultural efficiency
                  </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='row'>
          <div className="col-md-4">
            <div className="card m-3" style={{ width: '18rem', backgroundColor: 'var(--color-2)', border: 'none', margin: '10px' }}>
              <div className="card-body">
                <h4 style={{ color: 'var(--color-5)' }}>
                  Clarity Drive
                </h4>
                <p style={{ color: 'var(--color-3)' }}>
                  Developed a hardware project to enhance driver visibility during foggy weather and reduce accidents.
                  The system integrates a PIR sensor for detecting human presence, an IR sensor for penetrating fog, an ultrasonic sensor
                  for measuring obstacle distance, a camera module for real-time video processing, and a GPS module for location
                  tracking and navigation. This comprehensive system provides drivers with a clear view in poor weather conditions,
                  significantly improving safety and reducing accident risks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
