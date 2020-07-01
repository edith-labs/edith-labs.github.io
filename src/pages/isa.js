import React from 'react';

import SEO from 'components/SEO';
import Layout from 'components/Layout';
import Navbar from 'components/Navbar';
import Toggle from 'components/Toggle';
import ThreeColumns from 'components/ThreeColumns';
import { rhythm } from 'utils/typography';

function isa() {
  const faqs = [
    {
      title: "Can I join the Edith Fellowship if I don't have student loans?",
      content: "Yes, we'd love you to join! We do expect you to sign an ISA, however, in order " +
      "to compensate the Edith GPs who will spend a significant amount of time mentoring you. " +
      "These ISAs would last two years and would be in the 0.5-1.0% range depending on industry " +
      "and year of schooling.",
    },
    {
      title: "What is an ISA?",
      content: "Instead of repaying a loan through interest/principal repayments, with ISAs " +
      "the borrower repays a certain percentage of their income for a set period of time. " +
      "For instance, an Edith Fellow making $100,000 with a 3% ISA would repay $3,000 a year " +
      "for the predetermined period."
    },
    {
      title: "What are the advantages of an ISA?",
      content: "While banks only care about repayment at any cost, with an ISA the student " +
      "has to succeed for their backers to recoup their money. In addition to this powerful " +
      "incentive alignment, there are other structural benefits of an ISA that we outline below.",
    },
    {
      title: "What if I want to go to grad school?",
      content: "No problem! With an Edith ISA, you only make repayments if you earn above " +
      "$40,000 a year. If you had student loans you would owe payments while you were in grad " +
      "school. As an Edith Fellow, your payments pause until you finish your degree and start " +
      "working.",
    },
    {
      title: "What if I start the next Snapchat and make millions?",
      content: "Edith ISAs have a 2.0x repayment cap, which means you'll never repay more " +
      "than double the amount you borrowed. We believe there will be a Fellow one day that " +
      "creates the next great company, and implemented the repayment cap to make sure the ISA " +
      "isn't onerous.",
    },
    {
      title: "What's a typical Edith ISA?",
      content: "The typical Edith ISA ranges between 2-3% for every $10,000 borrowed. These " +
      "ISAs last for 5 years or 60 monthly payments.",
    },
    {
      title: "How does Edith fund the ISAs?",
      content: "The majority of the funding comes from our Edith GPs and Edith LPs who believe " +
      "in funding and supporting the next generation of students."
    },
  ];

  return (
    <Layout>
      <SEO title="ISA" />
      <section className="hero is-info" style={{ position: 'relative' }}>

        <Navbar />

        <div className="columns is-centered" style={{ marginTop: rhythm(3), marginBottom: rhythm(5) }}>
          <div className="column is-three-quarters">

            <div className="columns">
              <div className="column is-two-fifths" style={{ padding: 0, marginBottom: rhythm(1) }}>
                ISAs are a powerful, new way to pay for college. Instead of paying a bank, partner
                with a team and join a community that actually wants you to succeed.
              </div>
            </div>

            <h1 className="title is-1 underscore-title">
              The Edith Income Share Agreement
            </h1>
          </div>
        </div>

      </section>

      <section className="hero">
        <div className="columns is-centered" style={{ marginTop: rhythm(2), marginBottom: rhythm(2) }}>
          <div className="column is-three-quarters">
            <ThreeColumns
              title="The Standard Edith ISA"
              descriptions={[
                'Edith ISAs range from 2-3% of base salary for every $10,000 borrowed.',
                'Students repay over 60 months after securing a job that pays over $40,000 a year.',
                'The ISA ends after the 60 months or if the student hits the 2.0x repayment cap - no exceptions.'
              ]}
            />
          </div>
        </div>
      </section>

      <section className="hero is-info">
        <div className="columns is-centered" style={{ marginTop: rhythm(2), marginBottom: rhythm(2) }}>
          <div className="column is-three-quarters">
            <h1 className="subtitle is-3">
              The Financing Process
            </h1>
            <div
              style={{ display: 'flex', marginBottom: rhythm(1), alignItems: 'middle' }}
              data-sal="slide-up"
              data-sal-delay={200}
              data-sal-easing="ease"
            >
              <div className="numberCircle" style={{ marginRight: rhythm(1), flex: '0 0 60px' }}>1</div>

              <div>
                <h1 className="subtitle" style={{ marginBottom: rhythm(1) }}>
                  After Fellows are conditionally accepted into the program, we work with each student individually to figure out the right ISA percentage that works for them.
                </h1>

              </div>
            </div>

            <div
              style={{
                display: 'flex', marginTop: rhythm(1), marginBottom: rhythm(1), alignItems: 'middle',
              }}
              data-sal="slide-up"
              data-sal-delay={200}
              data-sal-easing="ease"
            >
              <div className="numberCircle" style={{ marginRight: rhythm(1), flex: '0 0 60px' }}>2</div>

              <div>
                <h1 className="subtitle" style={{ marginBottom: rhythm(1) }}>
                  Students review and sign the legal documents and we wire them the money directly.
                </h1>
              </div>
            </div>

            <div
              style={{ display: 'flex', marginTop: rhythm(1), alignItems: 'middle' }}
              data-sal="slide-up"
              data-sal-delay={200}
              data-sal-easing="ease"
            >
              <div className="numberCircle" style={{ marginRight: rhythm(1), flex: '0 0 60px' }}>3</div>

              <div>
                <h1 className="subtitle">
                  After verifying a student's employment through their offer letter, students
                  begin repaying their ISA after graduation.
                </h1>
              </div>
            </div>

          </div>

        </div>

      </section>

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

    </Layout>
  );
}

export default isa;
