import { useState, useEffect } from "react"
import config from "../config"

const useBrandConfig = <T>(assetPath: string): T | null => {
  const [brandAsset, setBrandAsset] = useState<T | null>(null)
  const { brand } = config

  useEffect(() => {
    const loadBrandAsset = async () => {
      try {
        const { loadedAsset } = await import(`@${brand}/src/${assetPath}`)
        setBrandAsset(loadedAsset)
      } catch (e) {
        const { defaultAsset } = await import(`../${assetPath}`)
        setBrandAsset(defaultAsset)
      }
    }

    loadBrandAsset()
  }, [assetPath, brand])

  return brandAsset
}

export default useBrandConfig
