import React from 'react'

export default function (props) {
  return (
    <h2>Portfolio Detail for {props.match.params.slug}</h2>
  )
}
