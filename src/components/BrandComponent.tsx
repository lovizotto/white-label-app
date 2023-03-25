import React from "react"
import useBrandConfig from "../hooks/useBrandConfig"

const BrandComponent: React.FC = () => {
  const BrandLogo = useBrandConfig<React.FC | null>("components/ClientLogo")

  return <div>{BrandLogo && <BrandLogo />}</div>
}

export default BrandComponent
