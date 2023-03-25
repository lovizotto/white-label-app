const config = {
  brand: process.env.REACT_APP_BRAND || "",
  theme: {
    colors: {
      brand: {
        primary: "#0072CE",
        gray: "#B9BCC0",
        text: "#404040",
        lightGray: "#F5F5F5",
      },
    },
    spaces: {
      xs: "4px",
      sm: "8px",
      md: "16px",
      lg: "24px",
      xl: "32px",
    },
    textStyles: {
      header1: {
        fontSize: "34px",
        lineHeight: "40px",
        fontWeight: "700",
        fontFamily: "Arial, sans-serif",
      },
      body: {
        fontSize: "16px",
        lineHeight: "24px",
        fontWeight: "400",
        fontFamily: "Arial, sans-serif",
      },
      highlighted: {
        fontSize: "16px",
        lineHeight: "45px",
        fontWeight: "bold",
        fontFamily: "Arial, sans-serif",
      },
      caption: {
        fontSize: "11px",
        lineHeight: "12px",
      },
      label: {
        color: "black",
        fontSize: "14px",
        lineHeight: "16px",
      },
    },
    layerStyles: {
      buttonPrimary: {
        borderRadius: "40px",
        textTransform: "uppercase",
        color: "white",
        fontSize: "18px",
        backgroundColor: "#0072CE",
        fontWeight: "700",
        p: "14px 32px",
        "&:hover": {
          backgroundColor: "#2d85cb",
        },
      },
      buttonSecondary: {
        borderRadius: "40px",
        textTransform: "uppercase",
        color: "black",
        fontSize: "18px",
        border: "1px solid",
        borderColor: "#404040",
        backgroundColor: "white",
        p: "14px 32px",
        "&:hover": {
          backgroundColor: "#dde6ea",
        },
      },
      formFields: {
        height: "60px",
        borderColor: "#B9BCC0",
      },
    },
  },
}

export default config
