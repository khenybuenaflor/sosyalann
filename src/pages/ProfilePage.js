import React from 'react'
import PropTypes from 'prop-types'

const ProfilePage = ({activeUser}) => {
  return (
    <div>
      Active User: {activeUser}
    </div>
  )
}

ProfilePage.propTypes = {
    activeUser:PropTypes.string.isRequired
}

export default ProfilePage
