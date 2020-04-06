import React from 'react';

import Layout from 'components/Layout';
import SEO from 'components/SEO';
import { rhythm } from 'utils/typography';
import PostDefinition from 'components/PostDefinition';

function dictionary() {
  const contents = [
    {
      term: 'Income Share Agreements',
      definition: `
        Student loans allow people pursuing higher education to pay tuition and living expenses
        by borrowing money from a lender (typically the government or a bank) and paying back
        the amount borrowed plus interest in the future
      `,
      resources: [
        {
          title: 'Edith Blog: What are Income Share Agreements?',
          link: '/what-is-an-isa',
        },
      ],
    },
    {
      term: 'Student Loans',
      definition: `
        Student loans allow people pursuing higher education to pay tuition and living expenses
        by borrowing money from a lender (typically the government or a bank) and paying back
        the amount borrowed plus interest in the future
      `,
      resources: [
        {
          title: 'Edith Blog: What are Student Loans?',
          link: '/what-are-student-loans',
        },
      ],
    },
  ];

  return (
    <Layout>
      <SEO title="Home" />

      <section
        className="columns is-centered"
        style={{
          marginLeft: rhythm(2.5),
          marginRight: rhythm(2.5),
          marginTop: rhythm(3),
        }}
      >
        <div className="column is-8">
          <h1 className="title is-2">
            The Edith Dictionary
          </h1>

          <h1 className="title is-5">
            Table of Contents
          </h1>

          {contents.map(({ term }) => (
            <p>
              <a href={`#${term}`}>{term}</a>
            </p>
          ))}

          {contents.map(({ term, definition, resources }) => (
            <div>
              <hr />
              <div className="anchor"><button type="button" name={term}>{term}</button></div>

              <h1 className="title is-3">{term}</h1>
              <PostDefinition definition={definition} />

              {resources
                  && (
                  <div>
                    <h1 className="subtitle" style={{ marginBottom: rhythm(0.25) }}>Resources</h1>

                    {resources.map(({ title, link }) => (
                      <p>
                        <a href={link}>{title}</a>
                      </p>
                    ))}
                  </div>
                  )}


            </div>
          ))}
        </div>

      </section>

    </Layout>
  );
}

export default dictionary;
