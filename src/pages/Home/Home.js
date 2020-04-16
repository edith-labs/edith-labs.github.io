import React from 'react';

import '../styles.scss';
import Layout from 'components/Layout';
import SEO from 'components/SEO';
import mockup from 'images/mockup.png';
import isaMockup from 'images/isa-mockup.png';
import { rhythm } from 'utils/typography';
import StudentInterestInlineForm from 'components/StudentInterestInlineForm';
import Navbar from 'components/Navbar';
import MentorWorkSection from './MentorWorkSection';
import MentorSchoolSection from './MentorSchoolSection';
import BlogSection from './BlogSection';

function Home() {
  return (
    <Layout>

      <SEO title="Home" />

      <section className="hero" style={{ position: 'relative' }}>
        <div className="skewed" />

        <Navbar showLogin />

        <div className="columns is-hidden-touch">
          <div
            className="column"
            style={{
              padding: 0, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', marginLeft: rhythm(0.5),
            }}
          >
            <div style={{ textAlign: 'left', marginBottom: rhythm(3) }}>
              <div
                data-sal="slide-up"
                data-sal-duration="500"
                data-sal-delay="200"
                data-sal-easing="ease"
              >
                <h1 className="subtitle" style={{ fontSize: '250%', whiteSpace: 'nowrap' }}>
                  One conversation with a mentor
                </h1>
                <h1 className="subtitle" style={{ fontSize: '250%' }}>
                  can change your career
                </h1>
              </div>
              <StudentInterestInlineForm />
            </div>

          </div>
          <div className="column" style={{ overflow: 'hidden', padding: 0 }}>
            <img
              style={{ marginLeft: '130px', maxWidth: '800px' }}
              alt="mockup"
              src={mockup}
            />
          </div>
        </div>

        <div className="columns is-hidden-desktop">
          <div className="column" style={{ padding: 0, marginLeft: rhythm(0.5), marginRight: rhythm(0.5) }}>
            <div style={{ textAlign: 'left', marginBottom: rhythm(3) }}>
              <p className="title is-4" style={{ whiteSpace: 'nowrap', overflow: 'hidden' }}>
                One conversation with a mentor
              </p>
              <p className="title is-4">
                can change your career
              </p>
              <StudentInterestInlineForm />
            </div>

          </div>
          <div
            className="column"
            style={{
              overflow: 'hidden', padding: 0, marginLeft: rhythm(0.5), marginRight: rhythm(0.5),
            }}
          >
            <img
              alt="mockup"
              src={mockup}
            />
          </div>
        </div>

      </section>

      <MentorWorkSection />

      <MentorSchoolSection />

      <section className="hero">
        <div className="columns is-centered" style={{ minHeight: '500px' }}>
          <div className="column is-two-third" style={{ overflow: 'hidden', marginBottom: '0.75em' }}>
            <div className="skewedImage" />
          </div>


          <div
            className="column is-one-third"
            style={{
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              padding: 0,
              margin: rhythm(1),
            }}
            data-sal="slide-up"
            data-sal-duration="500"
            data-sal-delay="200"
            data-sal-easing="ease"
          >
            <h1 className="title is-4">
              Connect personally with mentors
            </h1>
            <p style={{ textAlign: 'left' }}>
              Our goal at Edith Labs is to expand access to mentorship and create partnerships
              between mentors and students. On Edith, students can either make public requests
              to all mentors, or they can ask specific mentors a private question.
            </p>

            <br />

            <p style={{ textAlign: 'left' }}>
              Currently, we support the following requests: general questions, resume reviews,
              requests to chat, mock interviews, referrals, and warm introductions. The mentors
              on Edith were recently in your shoes, so they can provide the most relevant advice as
              you plan your career.
            </p>


          </div>
        </div>
      </section>


      <section className="hero is-info">
        <div className="columns is-centered" style={{ padding: 0, margin: rhythm(2) }}>
          <div className="column" style={{ overflow: 'hidden', padding: 0 }}>
            <img
              alt="isa-mockup"
              src={isaMockup}
            />
          </div>
          <div
            className="column"
            style={{
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              padding: 0,
              marginBottom: rhythm(2),
            }}
            data-sal="slide-up"
            data-sal-duration="500"
            data-sal-delay="200"
            data-sal-easing="ease"
          >
            <h1 className="title is-4">
              The Future of Edith
            </h1>
            <p style={{ textAlign: 'left' }}>
              Expanding access to mentorship is a great first step, but in order to truly scale we
              have to do more. Eventually, we want to help you pay for college as well.
              U.S. student loans have passed $1.6 trillion in value and the current system is
              obviously not working. Combining mentorship and capital is the future.
            </p>

            <br />

            <p style={{ textAlign: 'left' }}>
              By connecting students and mentors through Income Share Agreements, we create
              value-add partnerships that benefit both sides. We’ve gone more in-depth in
              our
              {' '}
              <a href="/what-is-an-isa" style={{ color: 'rgb(86, 178, 229)' }}>blog posts</a>
              ,
              but mentors are incentive aligned to help you because
              they only succeed when you do. This is a massive improvement over student debt, and
              we are excited to fund our first students in the fall.
            </p>

          </div>
        </div>
      </section>

      <BlogSection />

    </Layout>
  );
}

export default Home;
