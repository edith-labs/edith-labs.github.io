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
      think we will be really fun for you!"
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
      content: 'Edith takes 10% of the student repayments and charges a 1% service fee on invested \
      capital. This aligns us with you as a student and our partners.',
    },
  ];

  return (
    <Layout>
      <SEO title="Home" />
      <section className="hero is-info" style={{ position: 'relative' }}>

        <Navbar path="/fellow" />

        <div className="columns is-centered" style={{ marginTop: rhythm(5), marginBottom: rhythm(5) }}>
          <div className="column is-four-fifths">
            <h1 className="title is-1">
              Change your career by developing a life-long relationship with a mentor.
            </h1>
          </div>
        </div>

      </section>

      <section className="hero">

        <div className="columns is-centered" style={{ marginTop: rhythm(2) }}>
          <div className="column is-three-quarters" style={{ textAlign: 'center' }}>
            <h1 className="subtitle is-4" data-sal="slide-up" data-sal-delay="200" data-sal-easing="ease">
              You want a mentor who's walked in your shoes before. The Edith Fellowship is all
              about partnering you with a mentor (our Edith General Partners) who is already
              working in the field you want to go into after graduation. In addition to
              working with one mentor for a longer period of time, as a Fellow, you'll join a
              community of ambitious students and mentors from diverse backgrounds.
            </h1>
            <FellowFormModal />
          </div>
        </div>
        <ThreeColumns
          descriptions={[
            'Receive funding for your education and join our community of Edith Fellows, GPs, and LPs.',
            "Meet with your mentor on a bi-weekly basis and participate in Fellowship events to \
            build relationships and advance your career",
            "After graduation, use what you learned to become a mentor yourself.",
          ]}
        />

      </section>

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
