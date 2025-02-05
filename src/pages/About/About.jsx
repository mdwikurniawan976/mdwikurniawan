/* eslint-disable react/no-unescaped-entities */

import { useEffect, useState } from "react"
import Testimonial from "./Testimonial";
import Service from "./Service";

const servicesData = [
  {
    icon: "/images/icon-design.svg",
    title: "Web design",
    description: "The most modern and high-quality design made at a professional level."
  },
  {
    icon: "/images/icon-dev.svg",
    title: "Web development",
    description: "High-quality development of sites at the professional level."
  },
  {
    icon: "/images/icon-app.svg",
    title: "Mobile apps",
    description: "Professional development of applications for  Android."
  },
  {
    icon: "/images/paper-pin.png",
    title: "Dekstop Apps",
    description: "I develop high-quality desktop applications, delivering professional-grade software solutions tailored to your needs."
  }
  
];


const About = () => {
  const [testimonials , setTestimonials ] = useState([]);
  useEffect(()=> {
    fetch('testimonials.json').then(res => res.json()).then(data => {
      console.log(data)
      setTestimonials(data)
    });
  }, [])
  return (
    <article className="about  active" data-page="about">

    <header>
      <h2 className="h2 article-title">About me</h2>
    </header>

    <section className="about-text">
  <p>
    Hi! I am M. Dwi Kurniawan, a high school student specializing in IT at SMKN 1 Bangil. I am an app developer with expertise in Kotlin and C#, and I also have experience in web development using HTML, CSS, JavaScript, and Laravel.
  </p>

  <p>
    Passionate about creating robust applications, I focus on both desktop and mobile platforms. My goal is to deliver high-quality software solutions that are efficient, scalable, and user-friendly.
  </p>

  <p>
    I am committed to continuous learning and adapting to new technologies, ensuring I stay at the forefront of the industry. My approach to development is detail-oriented and client-focused, striving to turn complex requirements into seamless and elegant solutions.
  </p>

  <p>
    Alongside my technical skills, I value clear communication and collaboration, working closely with clients to exceed their expectations and deliver successful project outcomes.
  </p>
</section>




    {/* <!--
      - service
    --> */}

    <section className="service">

      <h3 className="h3 service-title">What i'm doing</h3>

      <ul className="service-list">

      {servicesData.map((service, index) => (
            <Service
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}

      </ul>

    </section>


    {/* <!--
      - testimonials
    --> */}

    <section className="testimonials">

      <h3 className="h3 testimonials-title">Certificates</h3>

      <ul className="testimonials-list has-scrollbar">

      {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              name={testimonial.name}
              avatar={testimonial.avatar}
              testimonial={testimonial.testimonial}
            />
          ))}

      </ul>

    </section>


    {/* <!--
      - clients
    --> */}

{/* <section className="skillsa">
  <h3 className="h3 skills-title">My Skills</h3>
  <ul className="skillsa-list">
    <li className="skillsa-item">
      <a href="#">
        <img src="images/kotlin.png" alt="Kotlin"/>
      </a>
    </li>
    <li className="skillsa-item">
      <a href="#">
        <img src="images/csharp.png" alt="C#"/>
      </a>
    </li>
    <li className="skillsa-item">
      <a href="#">
        <img src="images/figma.svg" alt="Figma"/>
      </a>
    </li>
    <li className="skillsa-item">
      <a href="#">
        <img src="images/mysql.svg" alt="mysql"/>
      </a>
    </li>
    <li className="skillsa-item">
      <a href="#">
        <img src="images/javasript-logo.svg" alt="js"/>
      </a>
    </li>
    <li className="skillsa-item">
      <a href="#">
        <img src="images/ssms.png" alt="SQL Server"/>
      </a>
    </li>
    <li className="skillsa-item">
      <a href="#">
        <img src="images/laravel.png" alt="Laravel"/>
      </a>
    </li>
    <li className="skillsa-item">
      <a href="#">
        <img src="images/html.png" alt="HTML"/>
      </a>
    </li>
    <li className="skillsa-item">
      <a href="#">
        <img src="images/css3.svg" alt="CSS"/>
      </a>
    </li>
  </ul>
</section> */}



  </article>
  )
}

export default About