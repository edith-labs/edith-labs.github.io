import React from 'react';

import SEO from 'components/SEO';
import Layout from 'components/Layout';
import Navbar from 'components/Navbar';
import { rhythm } from 'utils/typography';
import ProfileTile from 'components/ProfileTile';
import ThreeColumns from 'components/ThreeColumns';
import FellowFormModal from 'components/FellowFormModal';
import sarah from 'images/sarah.jpeg';
import david from 'images/david.png';
import cem from 'images/cem.jpeg';
import Toggle from 'components/Toggle';

function fellow() {
  const gps = [
    {
      name: 'Cem Koc',
      company: 'Data Engineer @ Apple',
      profilePic: cem,
      bio: 'Cem is a Berkeley EECS grad who works on ML problems in the Apple Maps division.',
    },
    {
      name: 'Sarah Choi',
      company: 'Product Manager @ ServiceNow',
      profilePic: sarah,
      bio: 'Sarah comes from a finance background at SCU and transitioned in Product Management at ServiceNow after graduating.',
    },
    {
      name: 'David Liu',
      company: 'Investment Banker @ Morgan Stanley',
      profilePic: david,
      bio: 'David is a tech investment banker and former UChicago tennis player where he studied Economics.',
    },
  ];

  const faqs = [
    {
      title: "What's the time commitment to be an Edith Fellow?",
      content: "We expect students to send a weekly update with any big wins and any \
      questions/big deadlines that we should be aware of. This shouldn't take more than 5 \
      minutes to fill out and helps keep us all on track. You'd also meet with your mentor on a \
      bi-weekly basis. We'll also host community events that will be optional to attend, but we \
      think will be really fun for you!",
    },
    {
      title: 'What are the terms of your ISA?',
      content: "Depending on what industry a student is interested in, Edith ISAs range from 2-3% \
      for every $10,000 borrowed. Edith ISAs last for 5 years and are repaid monthly. Please refer \
      to our blog post (Introducing Fall '20 Program) for more specifics on our standard terms.",
    },
    {
      title: "Why are Edith's ISA percentages so much lower than other companies?",
      content: "Because we partner our Fellows with extremely qualified mentors, we are very \
      confident in our Fellows' ability to secure high-paying jobs after graduation. This allows \
      us to make the ISAs cheaper for you as a student.",
    },
    {
      title: 'What type of careers are Edith Fellows pursuing?',
      content: 'Edith currently supports Fellows pursuing careers in Product Management, \
      Data Science, Quantitative Finance, Investment Banking, and Consulting.',
    },
    {
      title: "Can I still become an Edith Fellow if I don't take student loans?",
      content: "Yes! We'd love to have you as part of the program. The standard ISA for students \
      not borrowing any money is 0.5% - 1.0% for two years after graduation.",
    },
    {
      title: 'What if I want to go to grad school or work on a startup?',
      content: "That's totally fine with us. You only make repayments after you earn more than \
      $40,000 a year in base salary. For more information on deferment periods, please refer to \
      our blog post (same Introducing Fall '20 Program post).",
    },
    {
      title: 'How does Edith make money?',
      content: 'Edith takes 5% of the student repayments and charges a 1% service fee on invested \
      capital. This aligns us with you as a student and our partners.',
    },
  ];

  return (
    <Layout>
      <SEO title="Home" />
      <section className="hero is-info" style={{ position: 'relative' }}>

        <Navbar path="/fellow" />

        <div className="columns is-centered" style={{ marginTop: rhythm(3), marginBottom: rhythm(5) }}>
          <div className="column is-three-quarters">
            <div className="columns">
              <div className="column is-two-fifths" style={{ padding: 0, marginBottom: rhythm(1) }}>
                Edith Fellows build a relationship with mentor who's been in their shoes.
              </div>
            </div>

            <h1 className="title is-1 underscore-title">
              Partner with a mentor. Invest in your potential. Change your career.
            </h1>
          </div>
        </div>

      </section>

      <section className="hero">

        <div className="columns is-centered" style={{ marginTop: rhythm(2), marginBottom: rhythm(2) }}>
          <div className="column is-three-quarters">
            <h1 className="subtitle is-3">
              <strong>Edith Fellows</strong> are the students in the Edith Fellowship. They are
              partnered with a dedicated mentor and can choose to receive funding to replace
              their student loans.
            </h1>
          </div>
        </div>
      </section>

      {/* <FellowFormModal /> */}

      <section className="hero is-info">

        <div className="columns is-centered" style={{ marginTop: rhythm(2) }}>
          <div className="column is-three-quarters">
            <h1 className="subtitle is-3">
              Some of Our Edith GPs
            </h1>
          </div>
        </div>

        <div className="columns is-centered" style={{ marginBottom: rhythm(2) }}>
          <div className="column is-three-quarters">
            <div className="columns">
              {gps.map((gpProps, i) => <ProfileTile {...gpProps} delay={i * 100} />)}
            </div>
          </div>
        </div>
      </section>

      <section className="hero" style={{ marginTop: rhythm(2), marginBottom: rhythm(2) }}>
        <div className="columns is-centered">
          <div className="column is-three-quarters">
            <h1 className="subtitle is-3">
              FAQ
            </h1>

            {faqs.map((faqProps) => (
              <Toggle {...faqProps} />
            ))}
          </div>
        </div>
      </section>

    </Layout>
  );
}

export default fellow;
