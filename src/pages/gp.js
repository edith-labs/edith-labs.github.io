import React from 'react';

import SEO from 'components/SEO';
import Layout from 'components/Layout';
import Navbar from 'components/Navbar';
import ThreeColumns from 'components/ThreeColumns';
import Toggle from 'components/Toggle';
import { rhythm } from 'utils/typography';
import ProfileTile from 'components/ProfileTile';
import GeneralPartnerFormModal from 'components/GeneralPartnerFormModal';
import sarah from 'images/sarah.jpeg';
import david from 'images/david.png';
import cem from 'images/cem.jpeg';

function gp() {
  const fellows = [
    {
      name: 'Cem Koc',
      company: 'Data Engineer @ Apple',
      profilePic: cem,
      bio: 'Some stuff about Cem',
    },
    {
      name: 'Sarah Choi',
      company: 'Product Manager @ ServiceNow',
      profilePic: sarah,
      bio: 'Some stuff about Sarah',
    },
    {
      name: 'David Liu',
      company: 'Tech Investment Banker @ Morgan Stanley',
      profilePic: david,
      bio: 'Some stuff about David',
    },
  ];

  const faqs = [
    {
      title: "What's the time commitment to be an Edith GP?",
      content: "We expect Edith GPs to be available on a bi-weekly basis to meet with their \
      Edith Fellow. There will be times where this isn't feasible, but we believe a regular \
      cadence is important for building strong relationships.",
    },
    {
      title: "Does it cost me anything to be a GP?",
      content: "We want our GPs to be invested along with the LPs and expect them to invest \
      $500 - $1,000 into the pool, although they're welcome to put in more. Because GPs spend \
      time mentoring students, they get a 10% premium on invested capital. For instance, if the \
      pool of capital was $100 and GPs invested $10, they would receive 11% of the repayments."
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
      content: 'Edith takes 10% of the student repayments and charges a 1% service fee on invested \
      capital.',
    },
  ];


  return (
    <Layout>
      <SEO title="Home" />
      <section className="hero is-info" style={{ position: 'relative' }}>

        <Navbar path="/gp" />

        <div className="columns is-centered" style={{ marginTop: rhythm(5), marginBottom: rhythm(5) }}>
          <div className="column is-four-fifths">
            <h1 className="title is-1">
              Mentor the next generation.
            </h1>
          </div>
        </div>

      </section>

      <section className="hero">

        <div className="columns is-centered" style={{ marginTop: rhythm(2) }}>
          <div className="column is-three-quarters" style={{ textAlign: 'center' }}>
            <h1 className="subtitle is-4" data-sal="slide-up" data-sal-delay="200" data-sal-easing="ease">
              It takes a team to succeed. By lending their experience, Edith General Partners
              (GPs) are the mentors that take students to the next level. Instead of one off
              conversations with many students, Edith GPs can build real relationships the Fellows
              over a longer period of time. This allows GPs to have a large impact on a student's
              success, and they share in the success of the Fellows.
            </h1>

            <GeneralPartnerFormModal />
          </div>
        </div>

        <ThreeColumns
          descriptions={[
            'We find top students eager to partner with mentors in their dream careers. You invest \
            in their success and build a life-long relationship with them.',
            'We expect our GPs to check-in with their Fellow on a bi-weekly basis. W',
            "Once the Edith Fellow graduates and gets a job, you get repaid. You're along for the \
            ride when the student succeeds.",
          ]}
        />
      </section>

      {/* <section className="hero is-info">

        <div className="columns is-centered" style={{ marginTop: rhythm(2) }}>
          <div className="column is-three-quarters">
            <h1 className="subtitle is-3">
              Some of Our Edith Fellows
            </h1>
          </div>
        </div>

        <div className="columns is-centered" style={{ marginBottom: rhythm(2) }}>
          <div className="column is-three-quarters">
            <div className="columns">
              {fellows.map((fellowProps, i) => <ProfileTile {...fellowProps} delay={i * 100} />)}
            </div>
          </div>
        </div>
      </section> */}

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

      <section className="hero">
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
