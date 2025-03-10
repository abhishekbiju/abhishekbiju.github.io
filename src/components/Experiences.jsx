// src/pages/Experiences.jsx
import React from "react";
import ExperienceCard from "../components/ExperienceCard";

const Experiences = () => {
  // Sample data for experiences - replace with your actual experiences
  const experiences = [
    {
      company: "Safeguard L.L.C",
      position: "Machine Learning Engineer",
      description: [
        "Compiled comprehensive documentation for new business analyst hires, streamlining the onboarding process and significantly reducing training time.",
        "Developed and deployed a machine learning model in Snowflake to predict customer fraud detection, enhancing the accuracy and efficiency of analyzing falsely filed insurance claims and speeding up previously labor-intensive manual review processes using semi-automated ML pipelines."
      ],
      date: "May 2024 - July 2024",
      image: "https://www.stonepoint.com/wp-content/uploads/Safe-guard.jpg",
    },
    {
      company: "flydubai",
      position: "Data Science Intern",
      description: [
        "Implemented real-time deployable machine learning models achieving 83.45% accuracy in predicting flight delays using flight operations data."
,"Collaborated across Flight Ops, Engineering, and IT departments to extract insights from a vast dataset of 100,000 rows and 130 columns."
,"Authored a comprehensive 20-page report detailing data training, conclusions, and conducted financial and technical feasibility analyses."
      ],
      date: "May 2023 - August 2023",
      image: "https://media-cdn.tripadvisor.com/media/photo-s/0f/47/7d/d4/flydubai.jpg",
    },
    {
      company: "Datafortune Software Solutions",
      position: "Software Developer Intern",
      description: [
        "Constructed the backend for a data-centric web application, reducing data transfer time by 14% using the CRUD framework."
,"Generated data-driven insights supporting critical project decisions, ensuring timely product delivery."
      ],
      date: "June 2022 - September 2022",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0RSXsCbRwfV1qNhwWSfED6uXs7hwNpbP8JuNWmpuVed2gaZhy9TBUPoUsjlzMy7JBWBA&usqp=CAU",
    },
    {
      company: "Division of IT @ UW-Madison",
      position: "Lead Technical Writer",
      description: [
        "Authored 1000+ support articles, aiding over 120,000 individuals in resolving technical issues remotely."
,"Conducted training sessions for new Technical Writers, focusing on handling customer feedback and maximizing article ratings."
      ],
      date: "September 2022 - Present",
      image: "https://d1hbpr09pwz0sk.cloudfront.net/logo_url/uw-madison-division-of-information-technology-doit-f6992eb7",
    },
    {
      company: "Google Developer Student Club @ UW-Madison",
      position: "Vice President",
      description: [
        "Organized multiple events including hackathons, speaker forums, and career-building workshops for 700+ participants.",
        "Successfully raised over $3000 through fundraisers, sponsorships, and merchandise sales.",
      ],
      date: "September 2023 - Present",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCyRyjptPHq17q2JDbHz_4N1mPGGjz44FAew&s",
    },
    {
      company: "Curtin University Dubai",
      position: "Software Developer Intern",
      description: [
        "Prototyped 5 UI designs for a new web page, executing A/B testing to collect usage metrics.",
"Developed a staging environment mirroring production, saving over 15 hours in manual testing setup."
      ],
      date: "April 2019 - June 2019",
      image: "https://www.edarabia.com/wp-content/uploads/2017/07/curtin-university-dubai-uae-1.jpg",
    },
    {
      company: "The New Indian Express",
      position: "Software Developer Intern",
      description: [
        "Developed a custom scraper and utilized Natural Language Processing to parse 20 years' worth of archived newspaper articles.",
"Digitized articles for easy searchability, saving 15 work hours weekly and reducing labor costs.",
"Enhanced the algorithm by 10% through dimensionality reduction and pruning techniques."
      ],
      date: "April 2022 - July 2022",
      image: "https://content.jdmagicbox.com/comp/kakinada/a9/9999px884.x884.191207222003.b8a9/catalogue/the-new-indian-express-bhanugudi-junction-kakinada-newspaper-advertising-agencies-uq23u5hbho.jpg",
    },
  ];

  return (
    <div className="p-8 min-h-screen content">
      <h1 className="text-4xl font-bold mb-8 text-center">experiences</h1>
      <div className="flex flex-wrap justify-center">
        {experiences.map((experience, index) => (
          <ExperienceCard
            key={index}
            company={experience.company}
            position={experience.position}
            description={experience.description} // Pass the description as an array
            date={experience.date}
            blurb={experience.blurb}
            image={experience.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Experiences;
