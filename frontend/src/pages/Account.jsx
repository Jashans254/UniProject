import React, { useState } from 'react'
import ContactModel from '../components/ContactModel';
import CardComponent from '../components/CardComponent';
import ExperienceCard from '../components/ExperienceCard';
import PublicationList from '../components/Publication/PublicationList';
import ResearchToggle from '../components/Publication/reserchToggle';

const Account = () => {


    const [showContactModal , setShowContactModal] = useState(false)

    const [researchSection , setResearchSection] = useState(false)

    //
    const [isExpandedEducation, setIsExpandedEducation] = useState(false);
    const educationItems = [
        { name: 'Name of the Institute', details: 'Degree Name', year: 'Year' },
        { name: 'Name of the Institute', details: 'Degree Name', year: 'Year' },
        // Add more education items as needed
        isExpandedEducation && { name: 'Name of the Institute', details: 'Degree Name', year: 'Year' },
      ];

      const [isExpandedSkills, setIsExpandedSkills] = useState(false);
      const skillsItems = [
        { name: 'Frontend', details: 'HTML css Javascript' },
        { name: 'Backend', details: 'Node js' },
        isExpandedSkills && { name: 'Database', details: 'MongoDB' },
        // Add more skills items as needed
      ].filter(Boolean);

      const [isExpandedCertifications, setIsExpandedCertifications] = useState(false);
      const certificationItems = [
        { name: 'Certification Name', details: 'Issuing Organization', year: 'Year', image: 'certification_logo_url' },
        { name: 'Certification Name', details: 'Issuing Organization', year: 'Year', image: 'certification_logo_url' },
        // Add more certification items as needed
        isExpandedCertifications && { name: 'Another Certification', details: 'Another Organization', year: 'Year', image: 'certification_logo_url' },
      ].filter(Boolean);

      const [isExpandedExperience, setIsExpandedExperience] = useState(false);

      const experienceItems = [
        { 
          position: 'Software Engineer', 
          company: 'Tech Company', 
          dates: 'Jan 2020 - Present', 
          description: 'Worked on developing web applications using React and Node.js.', 
          image: 'company_logo_url' 
        },
        { 
          position: 'Frontend Developer', 
          company: 'Another Tech Company', 
          dates: 'Jun 2018 - Dec 2019', 
          description: 'Focused on building responsive user interfaces.', 
          image: 'company_logo_url' 
        },
        // Add more experience items as needed
        isExpandedExperience && { 
          position: 'Junior Developer', 
          company: 'Startup', 
          dates: 'Jan 2017 - May 2018', 
          description: 'Assisted in developing mobile applications.', 
          image: 'company_logo_url' 
        },
      ].filter(Boolean);

      const publicationsData = [
        {
          title: "Microneedles: A smart approach and increasing potential for transdermal drug delivery system",
          authors: "T Waghule, G Singhvi, SK Dubey, MM Pandey, G Gupta, M Singh, K Dua",
          journal: "Biomedicine & pharmacotherapy 109, 1249-1258",
          citedBy: 964,
          year: 2019,
        },
        {
          title: "Oligonucleotide therapy: An emerging focus area for drug delivery in chronic inflammatory respiratory diseases",
          authors: "M Mehta, D Tewari, G Gupta, R Awasthi, H Singh, P Pandey",
          journal: "Chemico-biological interactions 308, 206-215",
          citedBy: 761,
          year: 2019,
        },
        // Add more publications as needed
      ];

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center pt-3 pb-14">
    {/* Profile */}
    <div className="bg-white flex flex-col items-center justify-between gap-4 p-10 rounded-lg shadow-md max-w-full w-[90%] my-3 mx-10">
        <div className="flex justify-center items-center gap-10 bg-slate-100 w-full p-5 rounded-md">
            {/* Image */}
            <div className="image rounded-full flex flex-col justify-between mb-4 gap-4">
                <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="" className='w-[150px] h-[150px] rounded-full mr-4' />
            </div>

            <div className="flex flex-col gap-5">
                {/* Name */}
                <h1 className='text-2xl font-semibold text-gray-800'>Name of the Person</h1>

                {/* Email */}
                <h1 className='text-lg text-gray-600'>email@example.com</h1>
            </div>
        </div>

        <p className="text-center text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam repellendus ipsa, nulla obcaecati aliquam debitis laudantium officia dolorum vel eaque aut doloremque, esse harum, dolorem repudiandae amet? Blanditiis nisi voluptas optio.
        </p>

        <div className="flex items-center justify-between gap-20 w-full">
            <div className="text-gray-600">
                <p><span className='font-semibold'>Education:</span> Punjabi University, Patiala</p>
                <p><span className='font-semibold'>Address:</span> Patiala, India</p>
            </div>
            {showContactModal && <ContactModel closeModal={()=>{setShowContactModal(false)}}/>}
            <p onClick={()=>{setShowContactModal(true)}} className=" cursor-pointer text-blue-600 rounded-lg p-3 font-semibold bg-slate-100">Contact Info</p>
        </div>
    </div>

    <ResearchToggle researchSection={researchSection} setResearchSection={setResearchSection} />


   {researchSection ?( 
    <>
    {/* About Section */}
    <div className="bg-white flex flex-col gap-3 p-10 rounded-lg shadow-md max-w-full w-[90%] my-3 mx-10">
        <h1 className='text-2xl font-bold text-gray-800'>About</h1>
        <p className="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores quas temporibus labore natus. Quam veritatis ipsam id aliquid voluptatum sequi!
        </p>
    </div>


    <CardComponent
        title="Education" 
        items={educationItems} 
        isExpanded={isExpandedEducation} 
        handleToggle={() => setIsExpandedEducation(!isExpandedEducation)} 
        section={"education"}
      />

     <CardComponent
        title="Skills" 
        items={skillsItems} 
        isExpanded={isExpandedSkills} 
        handleToggle={() => setIsExpandedSkills(!isExpandedSkills)} 
        section={"skills"}
      />

     <CardComponent
        title="Certifications" 
        items={certificationItems} 
        isExpanded={isExpandedCertifications} 
        handleToggle={() => setIsExpandedCertifications(!isExpandedCertifications)} 
        section={"certification"}
      />
      
      <ExperienceCard
        title="Experience" 
        items={experienceItems} 
        isExpanded={isExpandedExperience} 
        handleToggle={() => setIsExpandedExperience(!isExpandedExperience)} 

      />
    </>
)

     : (<PublicationList publications={publicationsData} />)}
  
</div>

  )
}

export default Account