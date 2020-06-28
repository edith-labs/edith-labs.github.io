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
            'We send you monthly updates on student progress.',
            'LPs are repaid quarterly through the Edith SPV.',
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
