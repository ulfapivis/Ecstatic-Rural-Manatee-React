import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './hero1.css'

const Hero1 = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="hero1-max-width thq-section-max-width">
        <div className="thq-flex-row hero1-container1">
          <div className="hero1-column">
            <div className="hero1-content">
              <h1>
                {props.heading1 ?? (
                  <Fragment>
                    <h1 className="hero1-text4 thq-heading-1">
                      Engaging hero headline for your website
                    </h1>
                  </Fragment>
                )}
              </h1>
              <p>
                {props.content1 ?? (
                  <Fragment>
                    <p className="hero1-text1 thq-body-large">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros elementum tristique. Duis
                      cursus, mi quis viverra ornare, eros dolor interdum nulla,
                      ut commodo diam libero vitae erat.
                    </p>
                  </Fragment>
                )}
              </p>
            </div>
            <div className="hero1-actions">
              <button className="thq-button-filled hero1-button1">
                <span>
                  {props.action1 ?? (
                    <Fragment>
                      <span className="hero1-text2 thq-body-small">
                        Main action
                      </span>
                    </Fragment>
                  )}
                </span>
              </button>
              <button className="thq-button-outline hero1-button2">
                <span>
                  {props.action2 ?? (
                    <Fragment>
                      <span className="hero1-text3 thq-body-small">
                        Secondary action
                      </span>
                    </Fragment>
                  )}
                </span>
              </button>
            </div>
          </div>
          <div className="hero1-container2">
            <img
              alt={props.image1Alt}
              src={props.image1Src}
              className="hero1-image1 thq-img-ratio-4-3"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

Hero1.defaultProps = {
  content1: undefined,
  image1Src:
    'https://images.unsplash.com/photo-1618004912476-29818d81ae2e?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDc2fHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA5Mjg2MTV8MA&ixlib=rb-4.0.3&w=1400',
  image1Alt: 'PlaceholderImage1314',
  action1: undefined,
  action2: undefined,
  heading1: undefined,
}

Hero1.propTypes = {
  content1: PropTypes.element,
  image1Src: PropTypes.string,
  image1Alt: PropTypes.string,
  action1: PropTypes.element,
  action2: PropTypes.element,
  heading1: PropTypes.element,
}

export default Hero1
