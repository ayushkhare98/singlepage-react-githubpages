import React, { useState } from "react";
import "./App.css";
import logo1 from "./logos/img.png";
import logo2 from "./logos/img_1.png";
import logo3 from "./logos/img_2.png";
import logo4 from "./logos/img_3.png";

const courses = [
  {
    title: "Infection Control Nurse Training (Level 1)",
    duration: "6 weeks (Weekend Virtual Classes)",
    eligibility: "GNM Nurses or Allied Health Professionals",
    fees: "₹13,500 → ₹12,150 (Early Bird Discount)",
    highlights: [
      "Master the core principles of infection control",
      "Develop essential skills in PPE, aseptic techniques, and sterilization",
      "Free BLS certification included",
      "Real-world case studies and hands-on training"
    ]
  },
  {
    title: "Quality Management in Healthcare",
    duration: "10 weeks (Weekend Virtual Classes)",
    eligibility: "Healthcare Administrators, Nurses, Allied Health Professionals",
    fees: "₹18,000 → ₹16,200 (Early Bird Discount)",
    highlights: [
      "Learn NABH, JCI, NQAS accreditation standards",
      "Gain proficiency in Lean and Six Sigma",
      "Develop strategic healthcare leadership skills",
      "Hands-on learning through case studies and group projects"
    ]
  },
  {
    title: "Ayushman TPA Billing Coordinator",
    duration: "10 weeks (Weekend Virtual Classes)",
    eligibility: "Any Graduate",
    fees: "₹18,000 → ₹16,200 (Early Bird Discount)",
    highlights: [
      "Comprehensive understanding of Ayushman Bharat Scheme",
      "Deep dive into TPA operations and claims management",
      "Regulatory compliance and ethical billing practices",
      "Real-world case studies and hands-on workshops"
    ]
  }
];

const App = () => {
  const [hoveredCourse, setHoveredCourse] = useState(null);

  return (
    <div className="container">
      <header>
        <div className="logo-container">
          <img src={logo1} alt="ICCMRT Logo 1" className="logo" />
          <img src={logo2} alt="ICCMRT Logo 2" className="logo" />
          <img src={logo3} alt="ICCMRT Logo 3" className="logo" />
          <img src={logo4} alt="ICCMRT Logo 4" className="logo" />
        </div>
        <h1>Advance Your Healthcare Career with ICCMRT’s Certification Programs!</h1>
      </header>

      <section className="intro">
        <p>
          Welcome to ICCMRT, a leading institute dedicated to transforming healthcare professionals through specialized training and certifications. Our mission is to empower healthcare professionals with the skills to manage healthcare systems, infection control, quality management, and medical billing.
        </p>
      </section>

      <section className="discount">
        <h2>Early Bird Discount!</h2>
        <p>Register before <strong>15th March 2025</strong> to avail a <strong>10% discount</strong> on course fees!</p>
      </section>

      <section className="courses">
        <h2>Our Specialized Certification Programs</h2>
        <div className="course-list">
          {courses.map((course, index) => (
            <div
              key={index}
              className="course"
              onMouseEnter={() => setHoveredCourse(index)}
              onMouseLeave={() => setHoveredCourse(null)}
            >
              <h3>{course.title}</h3>
              {hoveredCourse === index && (
                <div className="course-details">
                  <p><strong>Duration:</strong> {course.duration}</p>
                  <p><strong>Eligibility:</strong> {course.eligibility}</p>
                  <p><strong>Fees:</strong> {course.fees}</p>
                  <ul>
                    {course.highlights.map((highlight, i) => (
                      <li key={i}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <footer>
        <p>Contact us at <strong>iccmrt2025@outlook.com</strong> | Phone: <strong>+91 70072 32265</strong></p>
      </footer>
    </div>
  );
};

export default App;