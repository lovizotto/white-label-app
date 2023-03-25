import React from "react"
interface ClientLogoProps {
  logo?: string
}
const ClientLogo: React.FC<ClientLogoProps> = ({
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
