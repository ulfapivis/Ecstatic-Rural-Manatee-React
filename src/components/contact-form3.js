import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './contact-form3.css'

const ContactForm3 = (props) => {
  return (
    <div className="contact-form3-contact9 thq-section-padding">
      <div className="thq-section-max-width thq-flex-row contact-form3-max-width">
        <div className="contact-form3-container1">
          <img
            alt={props.imageAlt}
            src={props.imageSrc}
            className="contact-form3-image1 thq-img-ratio-4-3"
          />
        </div>
        <div className="contact-form3-content1 thq-flex-column">
          <div className="contact-form3-section-title thq-card">
            <span>
              {props.content2 ?? (
                <Fragment>
                  <span className="contact-form3-text16 thq-body-small">
                    Get in touch with us
                  </span>
                </Fragment>
              )}
            </span>
            <div className="contact-form3-content2">
              <h2>
                {props.heading1 ?? (
                  <Fragment>
                    <h2 className="contact-form3-text18 thq-heading-2">
                      Projektplanerare
                    </h2>
                  </Fragment>
                )}
              </h2>
              <span>
                {props.content1 ?? (
                  <Fragment>
                    <span className="contact-form3-text19 thq-body-small">
                      Skriv in uppgifter för projektet
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <form id="form1" name="form1" className="thq-card">
            <div className="contact-form3-input1">
              <label htmlFor="contact-form-3-name" className="thq-body-small">
                Projektnamn
              </label>
              <input
                type="text"
                id="form-1-projektnamn"
                placeholder="Projektnamn"
                name="projnamn"
                className="thq-input"
              />
            </div>
            <div className="contact-form3-input2">
              <label htmlFor="contact-form-3-email" className="thq-body-small">
                Projektstart
              </label>
              <input
                type="datetime-local"
                id="form-1-projektstart"
                required="true"
                placeholder="Projektstart"
                name="projektstart"
                value="2024-09-01"
                className="thq-input"
              />
            </div>
            <div className="contact-form3-container2">
              <label
                htmlFor="contact-form-3-message"
                className="thq-body-small"
              >
                Uppgift
              </label>
              <textarea
                id="contact-form-3-message"
                rows="3"
                placeholder="Skriv in uppgiften"
                name="uppgift"
                className="thq-input"
              ></textarea>
            </div>
            <button
              type="submit"
              className="contact-form3-button thq-button-filled"
            >
              <span>
                {props.action ?? (
                  <Fragment>
                    <span className="contact-form3-text17 thq-body-small">
                      Submit
                    </span>
                  </Fragment>
                )}
              </span>
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

ContactForm3.defaultProps = {
  content2: undefined,
  action: undefined,
  imageAlt: 'Image1',
  imageSrc:
    'https://images.unsplash.com/photo-1574169208507-84376144848b?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDN8fGFic3RyYWN0fGVufDB8fHx8MTcxMDg3MDkzMHww&ixlib=rb-4.0.3&w=700',
  heading1: undefined,
  content1: undefined,
}

ContactForm3.propTypes = {
  content2: PropTypes.element,
  action: PropTypes.element,
  imageAlt: PropTypes.string,
  imageSrc: PropTypes.string,
  heading1: PropTypes.element,
  content1: PropTypes.element,
}

export default ContactForm3
