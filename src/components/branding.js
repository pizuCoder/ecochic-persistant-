import React from 'react'

import PropTypes from 'prop-types'

import './branding.css'

const Branding = (props) => {
  return (
    <div className={`branding-branding ${props.rootClassName} `}>
      <img
        alt={props.Logo_alt}
        src={props.Logo_src}
        className="branding-logo"
      />
      <h2 className="branding-company-name">{props.CompanyName}</h2>
    </div>
  )
}

Branding.defaultProps = {
  Logo_alt: 'image',
  rootClassName: '',
  CompanyName: 'EcoChic',
  Logo_src: '/playground_assets/logo.svg',
}

Branding.propTypes = {
  Logo_alt: PropTypes.string,
  rootClassName: PropTypes.string,
  CompanyName: PropTypes.string,
  Logo_src: PropTypes.string,
}

export default Branding
