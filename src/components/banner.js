import React from 'react'

import PropTypes from 'prop-types'

import './banner.css'

const Banner = (props) => {
  return (
    <div id="banner" data-persistence="true" className="banner-banner">
      <div className="banner-captions">
        <div className="banner-caption">
          <span className="banner-text">{props.Caption}</span>
          <a
            href={props.Redirect}
            target="_blank"
            rel="noreferrer noopener"
            className="banner-link"
          >
            {props.Bold}
          </a>
        </div>
        <a href={props.RedirectMobile} className="banner-link1">
          <div className="banner-caption1">
            <span className="banner-text1">{props.CaptionMobile}</span>
            <span className="banner-text2">{props.Bold1}</span>
          </div>
        </a>
      </div>
      <div id="close" className="banner-close">
        <svg viewBox="0 0 1024 1024" className="banner-icon">
          <path d="M225.835 286.165l225.835 225.835-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l225.835-225.835 225.835 225.835c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331l-225.835-225.835 225.835-225.835c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-225.835 225.835-225.835-225.835c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
        </svg>
      </div>
    </div>
  )
}

Banner.defaultProps = {
  Bold1: 'newsletter',
  Redirect: 'https://medium.com',
  Caption: 'Get updates and action alerts from Helpa by joining our',
  CaptionMobile: 'Join our',
  Bold: 'newsletter',
  RedirectMobile: 'https://medium.com',
}

Banner.propTypes = {
  Bold1: PropTypes.string,
  Redirect: PropTypes.string,
  Caption: PropTypes.string,
  CaptionMobile: PropTypes.string,
  Bold: PropTypes.string,
  RedirectMobile: PropTypes.string,
}

export default Banner
