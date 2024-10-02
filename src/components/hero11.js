import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './hero11.css'

const Hero11 = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="hero11-max-width thq-section-max-width">
        <div className="thq-flex-row hero11-container1">
          <div className="hero11-column">
            <div className="hero11-content">
              <h1>
                {props.heading1 ?? (
                  <Fragment>
                    <h1 className="hero11-text4 thq-heading-1">
                      Engaging hero headline for your website
                    </h1>
                  </Fragment>
                )}
              </h1>
              <p>
                {props.content1 ?? (
                  <Fragment>
                    <p className="hero11-text2 thq-body-large">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros elementum tristique. Duis
                      cursus, mi quis viverra ornare, eros dolor interdum nulla,
                      ut commodo diam libero vitae erat.
                    </p>
                  </Fragment>
                )}
              </p>
            </div>
            <div className="hero11-actions">
              <button className="thq-button-filled hero11-button1">
                <span>
                  {props.action1 ?? (
                    <Fragment>
                      <span className="hero11-text1 thq-body-small">
                        Main action
                      </span>
                    </Fragment>
                  )}
                </span>
              </button>
              <button className="thq-button-outline hero11-button2">
                <span>
                  {props.action2 ?? (
                    <Fragment>
                      <span className="hero11-text3 thq-body-small">
                        Secondary action
                      </span>
                    </Fragment>
                  )}
                </span>
              </button>
            </div>
          </div>
          <div className="hero11-container2">
            <img
              alt={props.image1Alt}
              src={props.image1Src}
              className="hero11-image1 thq-img-ratio-4-3"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

Hero11.defaultProps = {
  action1: undefined,
  image1Alt: 'PlaceholderImage1314',
  content1: undefined,
  action2: undefined,
  image1Src:
    'https://images.unsplash.com/photo-1618004912476-29818d81ae2e?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDc2fHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA5Mjg2MTV8MA&ixlib=rb-4.0.3&w=1400',
  heading1: undefined,
}

Hero11.propTypes = {
  action1: PropTypes.element,
  image1Alt: PropTypes.string,
  content1: PropTypes.element,
  action2: PropTypes.element,
  image1Src: PropTypes.string,
  heading1: PropTypes.element,
}

export default Hero11
