import React from "react"

const ClientLogo = ({
  logo = "https://pngimg.com/uploads/bmw_logo/bmw_logo_PNG19705.png",
}) => {
  return (
    <div>
      <img src={logo} width={40} />
    </div>
  )
}

ClientLogo.propTypes = {}

export default ClientLogo
