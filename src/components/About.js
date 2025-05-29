import React from 'react'

export default function About() {
    return (
        <>
            <div className="row about m-3 mb-5">
            <div className="d-flex flex-column flex-md-row align-items-start">

                <div className="col-12 col-md-3 m-auto d-flex justify-content-center align-items-center my-5">
                    <img src="https://res.cloudinary.com/djpewxz4d/image/upload/WhatsApp_Image_2024-08-07_at_00.55.34_fnirhv.jpg" alt= "Preksha Sangal" style={{ width: '100%', borderRadius: '50%' }} />
                </div>
                <div className="col-12 col-md-8 mx-auto mb-5">
                    <h1 className='text-center my-5' style={{ color: 'var(--color-6)', fontSize: '55px', fontWeight: '900' }}>My Overview</h1>
                    <p style={{ color: 'var(--color-5)', fontSize: '20px', textAlign: 'justify' }}>
                    </p>
                    <h1 className='text-center my-5' style={{ color: 'var(--color-6)', fontSize: '55px', fontWeight: '900' }}>Experience</h1>
                    <p style={{ color: 'var(--color-5)', fontSize: '20px', textAlign: 'justify' }}>
                        <h3 style={{ color: 'var(--color-6)'}}>Imarticus Learning</h3>
                        As a Full Stack Developer Intern at Imarticus, I actively involved in developing and optimizing software solutions.
Collaborated with a team of 4 developers to design, implement, and test new features using JavaScript and React.js. I utilize my strong foundation in computer science and my
passion for coding to solve complex problems efficiently. This internship has allowed me to gain hands-on
experience with various programming languages and development tools, further enhancing my technical skills and
understanding of the software development.
                    </p>

                    <div className="col-md-12 d-flex justify-content-around edu-hobby mt-5">
                        <div className="col-md-4 p-3" style={{ backgroundColor: 'var(--color-2)', borderRadius: '10px' }}>
                            <h3 className='mb-4 text-center' style={{ color: 'var(--color-6)', fontSize: '35px', fontWeight: '700' }}>Education</h3>
                            <ul>
                                <li className='mb-2' style={{ color: 'var(--color-5)', fontSize: '17px' }}>
                                    B.Tech in Computer Science and Engineering from Vellore Institute of Technology.
                                </li>
                                <li className='mb-2' style={{ color: 'var(--color-5)', fontSize: '17px' }}>
                                    Schooling from Convent of Jesus and Mary Waverley, Mussoorie
                                </li>
                            </ul>
                        </div>

                        <div className="col-md-4 p-3" style={{ backgroundColor: 'var(--color-2)', borderRadius: '10px' }}>



                            <h3 className='mb-4 text-center' style={{ color: 'var(--color-6)', fontSize: '35px', fontWeight: '700' }}>Hobbies</h3>
                            <ul>

                                <li className='mb-2' style={{ color: 'var(--color-5)', fontSize: '17px' }}>
                                    Web Development
                                </li>
                                <li className='mb-2' style={{ color: 'var(--color-5)', fontSize: '17px' }}>
                                    Photography
                                </li>
                                <li className='mb-2' style={{ color: 'var(--color-5)', fontSize: '17px' }}>
                                    Video Making
                                </li>
                                <li className='mb-2' style={{ color: 'var(--color-5)', fontSize: '17px' }}>
                                    Designing
                                </li>


                            </ul>
                        </div>
</div>
                        

                    </div>
                </div>
            </div>
        </>
    )
}
