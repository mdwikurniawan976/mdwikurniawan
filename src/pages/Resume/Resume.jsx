import React from 'react';
import { FaBookReader, FaRegBookmark } from "react-icons/fa";
import TimelineItem from './TimelineItem';
import SkillItem from './SkillItem';

const Resume = () => {
  return (
    <section>
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>

      <div className="timeline">
  <div className="title-wrapper">
    <div className="icon-box">
      <FaBookReader />
    </div>
    <h3 className="h3">Education</h3>
  </div>
  <ol className="timeline-list">
    <TimelineItem
      title="Glanggang 2 Public Elementary School"
      date="2013 — 2019"
      description="Completed 6 years of primary education, gaining a strong foundation in fundamental subjects and preparing for further academic pursuits."
    />
    <TimelineItem
      title="Bangil 2 Public Middle School"
      date="2019 — 2022"
      description="Completed 3 years of middle school education, focusing on expanding knowledge and preparing for vocational high school."
    />
    <TimelineItem
      title="Bangil 1 Public Vocational High School"
      date="2022 — Present"
      description="Currently in the final year of vocational high school at SMKN 1 Bangil, specializing in IT and software development."
    />
  </ol>
</div>


      <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <FaRegBookmark />
          </div>
          <h3 className="h3">Experience</h3>
</div>
<ol className="timeline-list">
  <TimelineItem
    title="Bootcamp LKS (Lomba Kompetensi Siswa) - IT Software Solutions for Business"
    date="December 2023 — January 2024"
    description="Participated in a bootcamp focusing on software solutions for business using Visual Studio with C# .NET for Windows Forms and Android Kotlin. Developed skills in creating and managing software solutions in a competitive environment."
  />
  <TimelineItem
    title="Batch 2 Bootcamp LKS - Advanced Mobile App Development"
    date="March — April 2024"
    description="Completed the second batch of the bootcamp with a focus on advanced mobile application development using Kotlin and C#. Enhanced skills in mobile app development through intensive training and practical exercises."
  />
  <TimelineItem
    title="Ezy Kasir Project"
    date="2024"
    description="Contributed as a programmer to the development of Ezy Kasir, a versatile cashier application. Gained practical experience in both desktop and mobile application development, applying skills acquired from previous training and personal projects."
  />
  <TimelineItem
    title="Competition Achievements"
    date="2024"
    description="Participated in the Lomba Kompetensi Siswa (LKS) at the district level, achieving 1st place. Advanced to the provincial level and secured 7th place out of 34 participants, demonstrating strong performance and competitive skills in the field of IT."
  />
  <TimelineItem
    title="Web Design Training"
    date="2024"
    description="Participated in web design training organized by UPTPTKK Jatim. Acquired skills in designing and developing effective web interfaces, enhancing understanding of modern web design practices."
  />
  <TimelineItem
    title="Internship at PT Semarsoft"
    date="January 2024 — June 2024"
    description="Completed a 6-month internship at PT Semarsoft, working on both desktop and mobile applications. Gained hands-on experience in desktop app development using C# and mobile app development with Kotlin. Contributed to various projects, enhancing practical skills and industry knowledge."
  />
</ol>

</div>


      <div className="skill">
        <h3 className="h3 skills-title">My skills</h3>
        <ul className="skills-list content-card">
          <SkillItem title="Web design" value={80} />
          <SkillItem title="Mobile App" value={80} />
          <SkillItem title="Dekstop App" value={90} />
          <SkillItem title="Branding" value={50} />
        </ul>
      </div>
    </section>
  );
};

export default Resume;
