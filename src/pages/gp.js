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
      title: 'What kind of returns should LPs look for?',
      content: 'Default answer about this',
    },
    {
      title: 'What does the risk profile look like?',
      content: 'Default answer about this',
    },
    {
      title: 'What type of careers are Edith fellows pursuing?',
      content: 'Default answer about this',
    },
    {
      title: 'How long does it take to be repaid?',
      content: 'Default answer about this',
    },
    {
      title: 'How much do LPs invest?',
      content: 'Default answer about this',
    },
    {
      title: 'How does Edith make money?',
      content: 'Default answer about this',
    },
    {
      title: 'What makes a qualified LP?',
      content: 'Default answer about this',
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
              Edith General Partners (GPs) are really important
            </h1>
          </div>
        </div>

      </section>

      <section className="hero">

        <div className="columns is-centered" style={{ marginTop: rhythm(2) }}>
          <div className="column is-three-quarters" style={{ textAlign: 'center' }}>
            <h1 className="subtitle is-4" data-sal="slide-up" data-sal-delay="200" data-sal-easing="ease">
              One paragraph on what it means to be an Edith General Partner
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

      <section className="hero is-info">

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
