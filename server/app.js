const express = require("express")
const app = express()
const port = 3001

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept",
  )
  next()
})

app.get("/api/steps/:stepNumber", (req, res) => {
  const stepNumber = parseInt(req.params.stepNumber, 10)
  let content = {}

  if (stepNumber === 1) {
    content = {
      title: "Going electric starts with understanding your needs",
      description:
        "We need to understand your requirements so we can recommend the appropriate electric vehicle, charger and identify incentives.",
      features: [
        {
          id: "1",
          image: "gear.svg",
          caption: "Tell us about your organization",
        },
        {
          id: "2",
          image: "car.svg",
          caption: "Tell us about your vehicles",
        },
        {
          id: "3",
          image: "v-bar.svg",
          caption: "See how much you can save",
        },
      ],
    }
  } else if (stepNumber === 2) {
    content = {
      title: "General Information",
      description:
        "We use this information to calculate fuel costs and applicable incentives",
      form: [
        {
          label: "Zip Code",
          type: "text",
          caption: "Used to check incentive applicability and fuel prices",
        },
      ],
    }
  } else if (stepNumber === 3) {
    content = {
      title: "General Information!",
      description:
        "We use this information to calculate fuel costs and applicable incentives",
      form: [
        {
          label: "Building Type",
          type: "dropdown",
          caption: "",
          options: [
            {
              label: "Home (garage)",
              value: "Home",
            },
            {
              label: "Small Office",
              value: "Small Office",
            },
            {
              label: "Large Office",
              value: "Large Office",
            },
            {
              label: "Warehouse",
              value: "Warehouse",
            },
            {
              label: "Depot",
              value: "Depot",
            },
            {
              label: "School",
              value: "School",
            },
            {
              label: "Apartment Building",
              value: "Apartment Building",
            },
          ],
        },
      ],
    }
  }

  res.json(content)
})

app.get("/api/config", (req, res) => {
  res.json({
    theme: {
      primary: "teal",
      secondary: "gray.200",
    },
    logos: {
      logo1: "logo1.png",
    },
    icons: {
      icon1: "gear.svg",
      icon2: "icon2.svg",
      icon3: "icon3.svg",
    },
  })
})

app.listen(port, () => {
  console.log(`Express server listening at http://localhost:${port}`)
})
