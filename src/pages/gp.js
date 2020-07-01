import React from 'react';

import SEO from 'components/SEO';
import Layout from 'components/Layout';
import Navbar from 'components/Navbar';
import LogoSection from 'components/LogoSection';
import Toggle from 'components/Toggle';
import { rhythm } from 'utils/typography';
import ProfileTile from 'components/ProfileTile';
import GeneralPartnerFormModal from 'components/GeneralPartnerFormModal';
import sarah from 'images/sarah.jpeg';
import david from 'images/david.png';
import cem from 'images/cem.jpeg';
import Step from 'components/Step';

import berkeley from 'images/schools/berkeley.png';
import uchicago from 'images/schools/uchicago.png';
import santaClara from 'images/schools/santa-clara.png';
import citadel from 'images/companies/citadel.png';
import sig from 'images/companies/sig.png';
import apple from 'images/companies/apple.png';
import mckinsey from 'images/companies/mckinsey.png';
import morganStanley from 'images/companies/morgan-stanley.png';
import serviceNow from 'images/companies/service-now.jpeg';

function gp() {
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

  const steps = [
    {
      number: 1,
      title: 'Join the Community',
      description: 'Apply to be a GP and have a conversation with the Edith team',
    },
    {
      number: 2,
      title: 'Support the Fellowship',
      description: 'You invest into the Edith Cohort and partner with the student you choose to mentor.',
    },
    {
      number: 3,
      title: 'Build a Relationship',
      description: 'Meet with your designated Edith Fellow on a bi-weekly basis and build a relationship.',
    },
    {
      number: 4,
      title: 'Earn a Return',
      description: 'Once the students graduate and find a job, they repay through their ISA.',
    },
  ];

  const faqs = [
    {
      title: 'What makes a great GP?',
      content: "A great GP has a few years of work experience and is open to sharing their \
      experiences with their Edith Fellow. They're also comfortable giving honest and objective \
      feedback that may be tough for Fellows to hear but is important to help them succeed.",
    },
    {
      title: 'What types of careers do GPs have?',
      content: "It's important for our GPs to have worked in the fields that our Fellows \
      want to enter after college. Currently these fields are: software engineering, product \
      management, data science, UI/UX, quantitative finance, investment banking, and consulting.",
    },
    {
      title: 'How many Fellows does each GP help?',
      content: 'We envision each GP focusing on one or two Fellows at most, although we do want \
      the entire cohort of Fellows and GPs to get to know one another on a personal basis.',
    },
    {
      title: 'How many GPs are there per Fellow?',
      content: "We anticipate most Fellows having just one GP, because we think it's important to \
      have regular interactions with the same student to build a real relationship. However, there \
      will be some cases where Fellows have more than one GP.",
    },
    {
      title: "What's the time commitment to be an Edith GP?",
      content: "We expect Edith GPs to be available on a bi-weekly basis to meet with their \
      Edith Fellow. There will be times where this isn't feasible, but we believe a regular \
      cadence is important for building strong relationships.",
    },
    {
      title: 'Does it cost me anything to be a GP?',
      content: "We want our GPs to be invested along with the LPs and expect them to invest \
      $500 - $1,000 into the pool, although they're welcome to put in more. Because GPs spend \
      time mentoring students, they get a 10% premium on invested capital. For instance, if the \
      pool of capital was $100 and GPs invested $10, they would receive 11% of the repayments.",
    },
    {
      title: "How do I know I'll get my money back?",
      content: 'We vigorously screen each candidate, and for this first cohort we are pooling \
      the funding and returns to reduce the impact of flight-risk. While regulations do not allow \
      us to share return projections publicly, please contact us separately and we can share with \
      you our internal projections.',
    },
    {
      title: 'What happens if I don’t want to be a GP anymore?',
      content: 'While we would hate to see a GP leave the program, as long as we could facilitate \
      an orderly transition of GPs for a student you can leave at any time.',
    },
    {
      title: 'How does Edith screen Fellows?',
      content: 'We have an application process and interview each prospective Fellow before you \
      meet them.',
    },
    {
      title: 'Do I get to choose who I mentor?',
      content: 'Yes. Before partnering them with you, we’ll help facilitate an intro call \
      with the Edith Fellow candidates you’d like to meet.',
    },
    {
      title: 'How does Edith make money?',
      content: 'Edith takes 5% of the student repayments and charges a 1% service fee on invested \
      capital.',
    },
  ];

  const schools = [
    {
      src: berkeley,
      alt: 'berkeley',
      link: 'https://www.berkeley.edu',
    },
    {
      src: uchicago,
      alt: 'uchicago',
      link: 'http://www.uchicago.edu',
    },
    {
      src: santaClara,
      alt: 'santa clara',
      link: 'http://www.scu.edu',
    },
  ];

  const companies = [
    {
      src: apple,
      link: 'https://www.apple.com',
      alt: 'apple',
    },
    {
      src: citadel,
      link: 'https://www.citadel.com',
      alt: 'citadel',
    },
    {
      src: morganStanley,
      link: 'https://www.morganstanley.com',
      alt: 'morgan-stanley',

    },
    {
      src: mckinsey,
      link: 'https://www.mckinsey.com',
      alt: 'mckinsey',
    },
    {
      src: serviceNow,
      link: 'https://www.servicenow.com',
      alt: 'service-now',
    },
    {
      src: sig,
      link: 'https://www.sig.com',
      alt: 'sig',
    },
  ];


  return (
    <Layout>
      <SEO title="General Partners" />
      <section className="hero is-info" style={{ position: 'relative' }}>

        <Navbar path="/gp" />

        <div className="columns is-centered" style={{ marginTop: rhythm(3), marginBottom: rhythm(5) }}>
          <div className="column is-three-quarters">
            <div className="columns">
              <div className="column is-two-fifths" style={{ padding: 0, marginBottom: rhythm(1) }}>
                Edith General Partners mentor the next generation of students.
              </div>
            </div>

            <h1 className="title is-1 underscore-title">
              No more one-off conversations. Build real relationships.
            </h1>
          </div>
        </div>

      </section>

      <section className="hero">

        <div className="columns is-centered" style={{ marginTop: rhythm(2), marginBottom: rhythm(2) }}>
          <div className="column is-three-quarters">

            <h1 className="subtitle is-3">
              <strong>Edith General Partners (GPs)</strong>
              {' '}
              are the mentors of the Edith Fellowship. They
              meet with their Fellow bi-weekly and invest smaller amounts of capital to help
              replace the Fellows' student loans.
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
              How to Become an Edith GP
            </h1>

            {steps.map((stepProps) => <Step {...stepProps} />)}

            <div style={{ textAlign: 'center' }}>
              <GeneralPartnerFormModal />
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

      <LogoSection title="Where our Edith GPs Work" logos={companies} animated />
      <LogoSection title="Where our Edith GPs Studied" logos={schools} animated />

      <a name="faq" />
      <section className="hero">
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

      <section className="hero is-info">
        <div className="columns is-centered" style={{ marginTop: rhythm(2), marginBottom: rhythm(2) }}>
          <div className="column is-three-quarters" style={{ textAlign: 'center' }}>
            <h1 className="subtitle is-3">
              Want to help students but don&apos;t have time to mentor?
            </h1>
            <a
              href="/lp"
              className="button is-primary nav-child"
            >
              Become an Edith LP
            </a>
          </div>
        </div>
      </section>

    </Layout>
  );
}

export default gp;
