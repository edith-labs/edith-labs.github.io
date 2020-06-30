import { Link } from 'gatsby';
import React from 'react';

import SEO from 'components/SEO';
import Layout from 'components/Layout';
import Navbar from 'components/Navbar';
import LogoSection from 'components/LogoSection';
import { rhythm } from 'utils/typography';
import citadel from 'images/companies/citadel.png';
import sig from 'images/companies/sig.png';
import apple from 'images/companies/apple.png';
import mckinsey from 'images/companies/mckinsey.png';
import morganStanley from 'images/companies/morgan-stanley.png';
import serviceNow from 'images/companies/service-now.jpeg';
import berkeley from 'images/schools/berkeley.png';
import columbia from 'images/schools/columbia.png';
import cornell from 'images/schools/cornell.png';
import duke from 'images/schools/duke.png';
import iu from 'images/schools/iu.png';
import jhu from 'images/schools/jhu.png';
import middlebury from 'images/schools/middlebury.png';
import nyu from 'images/schools/nyu.png';
import usc from 'images/schools/usc.png';
import ucsd from 'images/schools/ucsd.png';
import yale from 'images/schools/yale.png';



function fellowship() {
  const schools = [
    {
      src: berkeley,
      alt: 'berkeley',
      link: 'https://www.berkeley.edu',
    },
    {
      src: columbia,
      alt: 'columbia',
      link: 'https://columbia.edu',
    },
    {
      src: cornell,
      alt: 'cornell',
      link: 'https://cornell.edu',
    },
    {
      src: duke,
      alt: 'duke',
      link: 'http://www.duke.edu',
    },
    {
      src: iu,
      alt: 'iu',
      link: 'http://www.indiana.edu',
    },
    {
      src: jhu,
      alt: 'jhu',
      link: 'http://www.jhu.edu',
    },
    {
      src: middlebury,
      alt: 'middlebury',
      link: 'http://www.middlebury.edu',
    },
    {
      src: nyu,
      alt: 'nyu',
      link: 'http://www.nyu.edu',
    },
    {
      src: ucsd,
      alt: 'ucsd',
      link: 'http://www.usc.edu',
    },
    {
      src: usc,
      alt: 'usc',
      link: 'http://www.usc.edu',
    },
    {
      src: yale,
      alt: 'usc',
      link: 'http://www.yale.edu',
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
      <SEO title="Home" />
      <section className="hero is-info" style={{ position: 'relative' }}>

        <Navbar />

        <div className="columns is-centered" style={{ marginTop: rhythm(5), marginBottom: rhythm(5) }}>
          <div className="column is-three-quarters">
            <div className="columns">
              <div className="column is-one-third" style={{ padding: 0, marginBottom: rhythm(1) }}>
                The Edith Fellowship gives students a mentor who's already walked the path they want to take.
              </div>
            </div>
            <h1 className="title is-1 underscore-title">
              Real mentorship. Funding to replace student loans. You don't have to succeed alone.
            </h1>
          </div>
        </div>

      </section>

      <section className="hero">
        <div className="columns is-centered" style={{ margin: rhythm(2), marginTop: rhythm(3) }}>

          <div className="column is-one-quarter">
            <h1 className="subtitle is-4">What</h1>
          </div>

          <div className="column is-three-quarters">
            <div
              style={{ display: 'flex', marginBottom: rhythm(1), alignItems: 'middle' }}
              data-sal="slide-up"
              data-sal-delay={200}
              data-sal-easing="ease"
            >
              <div className="numberCircle" style={{ marginRight: rhythm(1) }}>1</div>

              <div>
                <h1 className="title is-4" style={{ marginBottom: rhythm(1) }}>
                  Getting the funding
                </h1>

                <h1 className="subtitle" style={{ marginBottom: rhythm(1) }}>
                  Something longer about how we select students, fund them etc.
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
              <div className="numberCircle" style={{ marginRight: rhythm(1) }}>2</div>

              <div>
                <h1 className="title is-4" style={{ marginBottom: rhythm(1) }}>
                  How the partnerships and mentorship works
                </h1>

                <h1 className="subtitle" style={{ marginBottom: rhythm(1) }}>
                  Talk about weekly check in , bi weekly with mentor
                </h1>
              </div>
            </div>

            <div
              style={{ display: 'flex', marginTop: rhythm(1), alignItems: 'middle' }}
              data-sal="slide-up"
              data-sal-delay={200}
              data-sal-easing="ease"
            >
              <div className="numberCircle" style={{ marginRight: rhythm(1) }}>3</div>

              <div>
                <h1 className="title is-4">
                  Repay and return as a mentor
                </h1>

                <h1 className="subtitle">
                  How repayments work, fellows becoming gps etc.
                </h1>
              </div>
            </div>

          </div>

        </div>
      </section>

      <hr />

      <section className="hero">
        <div className="columns is-centered" style={{ margin: rhythm(2) }}>

          <div className="column is-one-quarter">
            <h1 className="subtitle is-4">Who</h1>
          </div>

          <div className="column is-three-quarters">
            <h1
              className="subtitle is-4"
              style={{ marginBottom: rhythm(2) }}
              data-sal="slide-up"
              data-sal-delay={200}
              data-sal-easing="ease"
            >
              <strong>Edith Fellows</strong>
              {' '}
              are the students in the program. They are partnered
              with a dedicated mentor and can choose to receive funding to replace their student
              loans.
              <br />
              <Link to="/fellow">Learn how to become a Fellow &#8594;</Link>
            </h1>

            <h1
              className="subtitle is-4"
              style={{ marginBottom: rhythm(2) }}
              data-sal="slide-up"
              data-sal-delay={200}
              data-sal-easing="ease"
            >
              <strong>Edith General Partners (GPs)</strong>
              {' '}
              are the mentors of the program. They
              meet with their Fellow bi-weekly and invest smaller amounts of capital to help
              replace the Fellows' student loans.
              <br />
              <Link to="/gp">Learn how to become a GP &#8594;</Link>
            </h1>

            <h1
              className="subtitle is-4"
              data-sal="slide-up"
              data-sal-delay={200}
              data-sal-easing="ease"
            >
              <strong>Edith Limited Partners (LPs)</strong>
              {' '}
              provide the majority of the funding
              for Edith Fellows. While they're always welcome to participate in community events,
              becoming an Edith LP does not include a time commitment.
              <br />
              <Link to="/lp">Learn how to become an LP &#8594;</Link>
            </h1>
          </div>

        </div>
      </section>

      <LogoSection title="Where our Edith Fellows Study" logos={schools} animated />
      <LogoSection title="Where our Edith Partners Work" logos={companies} animated />

    </Layout>
  );
}

export default fellowship;
