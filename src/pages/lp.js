import React from 'react';

import SEO from 'components/SEO';
import Layout from 'components/Layout';
import Navbar from 'components/Navbar';
import Toggle from 'components/Toggle';
import ThreeColumns from 'components/ThreeColumns';
import LimitedPartnerFormModal from 'components/LimitedPartnerFormModal';
import { rhythm } from 'utils/typography';

function lp() {
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
  ]

  return (
    <Layout>
      <SEO title="Home" />
      <section className="hero is-info" style={{ position: 'relative' }}>

        <Navbar />

        <div className="columns is-centered" style={{ marginTop: rhythm(5), marginBottom: rhythm(5) }}>
          <div className="column is-four-fifths">
            <h1 className="title is-1">
              Support the next generation of students.
            </h1>
          </div>
        </div>

      </section>

      <section className="hero">

        <div className="columns is-centered" style={{ marginTop: rhythm(2) }}>
          <div className="column is-three-quarters" style={{ textAlign: 'center' }}>
            <h1
              className="subtitle is-4"
              data-sal="slide-up"
              data-sal-delay="200"
              data-sal-easing="ease"
            >
              While talent may be evenly distributed, capital is not. By funding undercapitalized
              students that are partnered with successful mentors, Edith Limited Partners (LPs)
              help talented students reach their full potential. Investing in Edith students
              isn't like investing in a faceless debt instrument or scholarship, LPs always
              know exactly who they're helping and receive regular updates on their
              progress and successes.
            </h1>

            <LimitedPartnerFormModal />
          </div>
        </div>

        <ThreeColumns
          descriptions={[
            'We find talented and undercapitalized students and partner them with mentors.',
            'LPs invest in the pool of students through an SPV. Once the students graduate, \
            they repay a portion of their income.',
            'LPs are repaid quarterly after students graduate. If you prefer to keep profits \
            reinvested we can do so with our Evergreen Fund',
          ]}
        />

      </section>

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
