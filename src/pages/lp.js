import React from 'react';

import SEO from 'components/SEO';
import Layout from 'components/Layout';
import Navbar from 'components/Navbar';
import Toggle from 'components/Toggle';
import Step from 'components/Step';
import ProfileTile from 'components/ProfileTile';
import LimitedPartnerFormModal from 'components/LimitedPartnerFormModal';
import { rhythm } from 'utils/typography';
import sarah from 'images/sarah.jpeg';
import david from 'images/david.png';
import cem from 'images/cem.jpeg';

function lp() {
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
    // {
    //   title: 'What kind of returns should LPs look for?',
    //   content: 'Default answer about this',
    // },
    {
      title: 'What does the risk profile look like?',
      content: 'ISAs are still a relatively new financial asset, so any investment is inherently \
      risky. By investing in a pool of students you reduce your risk, but there is still a chance \
      your investment can go to zero.',
    },
    {
      title: 'What type of careers are Edith fellows pursuing?',
      content: 'Edith currently supports Fellows pursuing careers in Product Management, \
      Data Science, Quantitative Finance, Investment Banking, and Consulting.',
    },
    {
      title: 'How long does it take to be repaid?',
      content: 'Standard Edith ISAs last for 60 months, so LPs can expect most of the repayments \
      to be completed by the sixth year. If students pursue a graduate degree or pause their \
      career, their repayments may be delayed.',
    },
    {
      title: 'How much do LPs invest?',
      content: 'The minimum LP investment is currently $10,000.',
    },
    {
      title: 'How does Edith make money?',
      content: 'Edith takes 5% of the student repayments and charges a 1% service fee on invested capital.',
    },
    {
      title: 'What makes a qualified LP?',
      content: 'Only accredited investors can become Edith LPs.',
    },
  ];

  const steps = [
    {
      number: 1,
      title: 'Join the Community',
      description: 'Apply to be an LP and have a conversation with the Edith team.',
    },
    {
      number: 2,
      title: 'Support the Fellowship',
      description: 'Invest in the Edith Cohort.',
    },
    {
      number: 3,
      title: 'Earn a Return',
      description: 'Once the students graduate and find a job, they repay through their ISA.',
    },
  ];

  return (
    <Layout>
      <SEO title="LP" />
      <section className="hero is-info" style={{ position: 'relative' }}>

        <Navbar />

        <div className="columns is-centered" style={{ marginTop: rhythm(3), marginBottom: rhythm(5) }}>
          <div className="column is-three-quarters">
            <div className="columns">
              <div className="column is-two-fifths" style={{ padding: 0, marginBottom: rhythm(1) }}>
                Edith Limited Partners provide the financing necessary for the Fellows to attend
                college.
              </div>
            </div>

            <h1 className="title is-1 underscore-title">
              Know exactly who you're helping. Invest in students and watch them succeed.
            </h1>
          </div>
        </div>

      </section>

      <section className="hero">

        <div className="columns is-centered" style={{ marginTop: rhythm(2), marginBottom: rhythm(2) }}>
          <div className="column is-three-quarters">

            <h1 className="subtitle is-3">
              <strong>Edith Limited Partners (LPs)</strong>
              {' '}
              provide the majority of the funding
              for Edith Fellows. While they're always welcome to participate in community events,
              becoming an Edith LP does not include a time commitment.
            </h1>

            <div style={{ textAlign: 'center' }}>
              <a href="#faq" style={{ fontSize: '120%'}}>Take me to the FAQ</a>
            </div>

          </div>
        </div>

      </section>
      <section className="hero is-info">
        <div className="columns is-centered" style={{ marginTop: rhythm(2), marginBottom: rhythm(2) }}>
          <div className="column is-three-quarters">
            <h1 className="subtitle is-3">
              Becoming an Edith LP
            </h1>

            {steps.map((stepProps) => <Step {...stepProps} />)}

            <div style={{ textAlign: 'center' }}>
              <LimitedPartnerFormModal />
            </div>
          </div>
        </div>
      </section>

      <section className="hero">

        <div className="columns is-centered" style={{ marginTop: rhythm(2) }}>
          <div className="column is-three-quarters">
            <h1 className="subtitle is-3">
              Meet Some of Our Edith GPs
            </h1>
          </div>
        </div>

        <div className="columns is-centered" style={{ marginBottom: rhythm(2) }}>
          <div className="column is-three-quarters">
            <div className="columns">
              {gps.map((fellowProps, i) => <ProfileTile {...fellowProps} delay={i * 100} />)}
            </div>
          </div>
        </div>

      </section>

      <a name="faq" />
      <section className="hero is-info">
        <div className="columns is-centered" style={{ marginTop: rhythm(2), marginBottom: rhythm(2) }}>
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

export default lp;
