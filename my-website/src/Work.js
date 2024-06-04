import React from 'react';
import './Work.css';
import { Divider } from '@mui/material';

const Work = () => {
    return(
    <div className='Work'>
    
    <div className='Curium'>
      <h1>Curium [Jan '24 - May '24]</h1>
      <div className='main-paras'>
        <p className='para'>I interned as a Software Engineer Intern at Curium, a deep tech startup based in
        Singapore. Curium is largely involved in the AI sector, especially in calibrating sensors for
        autonomous vehicles. Most of my work revolved around building a Digital Twin Dashboard for Curium's
        clients to view performance metrics of sensors. The tech stack largely involved React.js with 
        Three.js for the Digital Twin canvas. However, I was also allowed to explore other facets of the company
        that fascinated me. I took responsibility for my code changes, and oversaw its integration into the deployment
        model via various CI/CD tools such as Docker and Github Workflows. Taking charge of my work and going the extra
        mile definitely made me a better software engineer who is aware of other concepts such as CI/CD - this is often critical
        in a startup, where staff have to wear multiple hats. It was also at Curium where my interest in
        the AI/ML industry as well as the Robotics industry took off. My colleagues were extremely helpful
        and explained concepts such as ROS and MQTT to help me understand the bigger picture, allowing me to grow
        instead of limiting me to my scope of work. In order to better develop and hone my skills in these 
        industries, I have taken time off this Sumnmer to focus on various projects that would allow me a better grasp
        of key concepts.</p>
        
        <p className='para'> CEO's testimonial:  
          <a href='/Recommendation.pdf' download>Download</a>
        </p>
      </div>
    </div>
    {/* <Divider /> */}

    <div className='Karla Bionics'>
    <h1>Karla Bionics [May '23 - Aug '23]</h1>
      <div className='main-paras'>
        <p className='para'>
          Karla Bionics is a Medtech Startup based in Bandung, Indonesia. Karla Bionics mainly 
          develops smart prosthetics. However, during my tenure, Karla Bionics was exploring a new project:
          a mobile app to help Aphasia patients' rehabilitation journey. Aphasia is a language disorder 
          that affects a person's ability to communicate. 
          I was tasked with developing the mobile app, which involved creating a user-friendly interface
          for patients to practice their language skills. I also had the opportunity to work with medical 
          professionals to ensure the app was effective in helping patients. This project was a great way
          for me to familiarize myself with the healthcare industry and learn about the challenges faced.
          Furthermore, it helped me to get a better understanding of the entire software development lifecycle,
          from ideation to deployment.
          I developed the app using React Native, a cross-platform mobile app development framework. As for
          the backend, I used Node.js and Express.js to create a RESTful API. I also use a PostgreSQL database
          for storage.
          It made me more familiar with relevant technologies and tools employed by the industry,
          such as Git for version control, Figma for UI/UX design, and Postman for API testing.

          I had the opportunity to work with Karla Bionics in Indonesia thanks to the NUS Overseas College (NOC) program.
        </p>
      </div>
    </div>

    <div className='NS'>
    <h1>Singapore Police Force [Jan '20 - Nov '21]</h1>
      <div className='main-paras'>
        <p className='para'>
          As part of my National Service, I served as a Police Officer in the Singapore Police Force (SPF).
          My role was to ensure the safety and security of Singaporeans by patrolling the streets and responding
          to emergency calls. I was also involved in community policing efforts, such as conducting crime prevention
          talks and engaging with residents to address their concerns. I found this experience to be extremely
          rewarding as it allowed me to make a positive impact on the community. I was also able to develop valuable skills such as
          teamwork, leadership and problem-solving, having had to deal with high stakes situations with my colleagues. I also honed my
          communication skills by interacting with people from diverse backgrounds. This experience taught me the importance of
          adaptability and resilience, as I had to quickly respond to changing situations and work under pressure.
          It also instilled in me a sense of responsibility and discipline that I carry with me to this day. </p>

        <p className='para'>Testimonial:  
          <a href='/NS (SPF) Testimonial.pdf' download>Download</a>
        </p>
      </div>
    </div>



    
    </div>

    );
}

export default Work;
