// orgdata.js — Organigramm-Daten
// Felder: id, name, short, type, role, description, color/textColor, children
var ORG_DATA =
{
  "id": "planet-gmbh",
  "name": "Planet GmbH",
  "short": "P",
  "type": "holding",
  "description": "Inhalte folgen.",
  "children": [
    {
      "id": "inuvet",
      "name": "Inuvet",
      "short": "IN",
      "type": "company",
      "description": "Inhalte folgen.",
      "children": [
        {
          "id": "inuvet-de",
          "name": "Inuvet DE",
          "short": "DE",
          "type": "company",
          "description": "Inhalte folgen.",
          "children": [
            {
              "id": "in-de-gf",
              "name": "Geschäftsführung",
              "short": "GF",
              "type": "area",
              "description": "Inhalte folgen.",
              "children": [
                {
                  "id": "in-de-gf-johanna",
                  "name": "Johanna",
                  "short": "JO",
                  "type": "employee",
                  "role": "Geschäftsführung",
                  "description": "Inhalte folgen."
                },
                {
                  "id": "in-de-gf-nele",
                  "name": "Nele",
                  "short": "NE",
                  "type": "employee",
                  "role": "Geschäftsführung",
                  "description": "Inhalte folgen."
                },
                {
                  "id": "in-de-gf-felix",
                  "name": "Felix",
                  "short": "FE",
                  "type": "employee",
                  "role": "Geschäftsführung",
                  "description": "Inhalte folgen."
                }
              ]
            },
            {
              "id": "in-de-sales",
              "name": "Sales",
              "short": "SLS",
              "type": "area",
              "description": "Inhalte folgen.",
              "children": [
                {
                  "id": "in-de-sales-west",
                  "name": "West",
                  "short": "W",
                  "type": "department",
                  "description": "Inhalte folgen.",
                  "children": [
                    {
                      "id": "in-de-sales-west-angelina",
                      "name": "Angelina",
                      "short": "AN",
                      "type": "employee",
                      "role": "Lead West",
                      "description": "Inhalte folgen."
                    },
                    {
                      "id": "in-de-sales-west-ib",
                      "name": "Inbound",
                      "short": "IB",
                      "type": "team",
                      "description": "Inhalte folgen.",
                      "children": [
                        {
                          "id": "in-de-sales-west-ib-laura",
                          "name": "Laura",
                          "short": "LA",
                          "type": "employee",
                          "role": "Inbound",
                          "description": "Inhalte folgen."
                        }
                      ]
                    },
                    {
                      "id": "in-de-sales-west-ob",
                      "name": "Outbound",
                      "short": "OB",
                      "type": "team",
                      "description": "Inhalte folgen.",
                      "children": [
                        {
                          "id": "in-de-sales-west-ob-noemi",
                          "name": "Noemi",
                          "short": "NO",
                          "type": "employee",
                          "role": "Outbound",
                          "description": "Inhalte folgen."
                        }
                      ]
                    }
                  ]
                },
                {
                  "id": "in-de-sales-east",
                  "name": "East",
                  "short": "E",
                  "type": "department",
                  "description": "Inhalte folgen.",
                  "children": [
                    {
                      "id": "in-de-sales-east-chris",
                      "name": "Chris",
                      "short": "CH",
                      "type": "employee",
                      "role": "Lead East",
                      "description": "Inhalte folgen."
                    },
                    {
                      "id": "in-de-sales-east-vg",
                      "name": "Vetgruppen",
                      "short": "VG",
                      "type": "team",
                      "description": "Inhalte folgen.",
                      "children": [
                        {
                          "id": "in-de-sales-east-vg-lukas",
                          "name": "Lukas",
                          "short": "LU",
                          "type": "employee",
                          "role": "Vetgruppen",
                          "description": "Inhalte folgen."
                        },
                        {
                          "id": "in-de-sales-east-vg-sofie",
                          "name": "Sofie",
                          "short": "SO",
                          "type": "employee",
                          "role": "Vetgruppen",
                          "description": "Inhalte folgen."
                        },
                        {
                          "id": "in-de-sales-east-vg-merle",
                          "name": "Merle",
                          "short": "ME",
                          "type": "employee",
                          "role": "Vetgruppen",
                          "description": "Inhalte folgen."
                        }
                      ]
                    },
                    {
                      "id": "in-de-sales-east-ad",
                      "name": "Außendienst",
                      "short": "AD",
                      "type": "team",
                      "description": "Inhalte folgen.",
                      "children": [
                        {
                          "id": "in-de-sales-east-ad-ana",
                          "name": "Ana",
                          "short": "AN",
                          "type": "employee",
                          "role": "Außendienst",
                          "description": "Inhalte folgen."
                        },
                        {
                          "id": "in-de-sales-east-ad-barbara",
                          "name": "Barbara",
                          "short": "BA",
                          "type": "employee",
                          "role": "Außendienst",
                          "description": "Inhalte folgen."
                        },
                        {
                          "id": "in-de-sales-east-ad-monika",
                          "name": "Monika",
                          "short": "MO",
                          "type": "employee",
                          "role": "Außendienst",
                          "description": "Inhalte folgen."
                        },
                        {
                          "id": "in-de-sales-east-ad-silvia",
                          "name": "Silvia",
                          "short": "SI",
                          "type": "employee",
                          "role": "Außendienst",
                          "description": "Inhalte folgen."
                        }
                      ]
                    }
                  ]
                },
                {
                  "id": "in-de-sales-int",
                  "name": "International Distribution",
                  "short": "INT",
                  "type": "department",
                  "description": "Inhalte folgen.",
                  "children": [
                    {
                      "id": "in-de-sales-int-kunyishu",
                      "name": "Kunyishu",
                      "short": "KU",
                      "type": "employee",
                      "role": "International Distribution",
                      "description": "Inhalte folgen."
                    },
                    {
                      "id": "in-de-sales-int-bacem",
                      "name": "Bacem",
                      "short": "BA",
                      "type": "employee",
                      "role": "International Distribution",
                      "description": "Inhalte folgen."
                    },
                    {
                      "id": "in-de-sales-int-hua",
                      "name": "Hua",
                      "short": "HU",
                      "type": "employee",
                      "role": "International Distribution",
                      "description": "Inhalte folgen."
                    },
                    {
                      "id": "in-de-sales-int-ina",
                      "name": "Ina",
                      "short": "IN",
                      "type": "employee",
                      "role": "International Distribution",
                      "description": "Inhalte folgen."
                    }
                  ]
                },
                {
                  "id": "in-de-sales-sap",
                  "name": "SAP",
                  "short": "SAP",
                  "type": "department",
                  "description": "Inhalte folgen.",
                  "children": [
                    {
                      "id": "in-de-sales-sap-acelya",
                      "name": "Acelya",
                      "short": "AC",
                      "type": "employee",
                      "role": "SAP",
                      "description": "Inhalte folgen."
                    },
                    {
                      "id": "in-de-sales-sap-anna",
                      "name": "Anna",
                      "short": "AN",
                      "type": "employee",
                      "role": "SAP",
                      "description": "Inhalte folgen."
                    },
                    {
                      "id": "in-de-sales-sap-michael",
                      "name": "Michael",
                      "short": "MI",
                      "type": "employee",
                      "role": "SAP",
                      "description": "Inhalte folgen."
                    },
                    {
                      "id": "in-de-sales-sap-katrin",
                      "name": "Katrin",
                      "short": "KA",
                      "type": "employee",
                      "role": "SAP",
                      "description": "Inhalte folgen."
                    },
                    {
                      "id": "in-de-sales-sap-gabriela",
                      "name": "Gabriela",
                      "short": "GA",
                      "type": "employee",
                      "role": "SAP",
                      "description": "Inhalte folgen."
                    },
                    {
                      "id": "in-de-sales-sap-kerstin",
                      "name": "Kerstin",
                      "short": "KE",
                      "type": "employee",
                      "role": "SAP",
                      "description": "Inhalte folgen."
                    },
                    {
                      "id": "in-de-sales-sap-meike",
                      "name": "Meike",
                      "short": "ME",
                      "type": "employee",
                      "role": "SAP",
                      "description": "Inhalte folgen."
                    }
                  ]
                },
                {
                  "id": "in-de-sales-team",
                  "name": "Sales Team",
                  "short": "ST",
                  "type": "department",
                  "description": "Inhalte folgen.",
                  "children": [
                    {
                      "id": "in-de-sales-team-emilie",
                      "name": "Emilie",
                      "short": "EM",
                      "type": "employee",
                      "role": "Sales Team",
                      "description": "Inhalte folgen."
                    },
                    {
                      "id": "in-de-sales-team-jason",
                      "name": "Jason",
                      "short": "JA",
                      "type": "employee",
                      "role": "Sales Team",
                      "description": "Inhalte folgen."
                    },
                    {
                      "id": "in-de-sales-team-sabinea",
                      "name": "Sabine A.",
                      "short": "SA",
                      "type": "employee",
                      "role": "Sales Team",
                      "description": "Inhalte folgen."
                    },
                    {
                      "id": "in-de-sales-team-stephanie",
                      "name": "Stephanie",
                      "short": "ST",
                      "type": "employee",
                      "role": "Sales Team",
                      "description": "Inhalte folgen."
                    },
                    {
                      "id": "in-de-sales-team-theresa",
                      "name": "Theresa",
                      "short": "TH",
                      "type": "employee",
                      "role": "Sales Team",
                      "description": "Inhalte folgen."
                    },
                    {
                      "id": "in-de-sales-team-tomke",
                      "name": "Tomke",
                      "short": "TO",
                      "type": "employee",
                      "role": "Sales Team",
                      "description": "Inhalte folgen."
                    },
                    {
                      "id": "in-de-sales-team-julia",
                      "name": "Julia",
                      "short": "JU",
                      "type": "employee",
                      "role": "Sales Team",
                      "description": "Inhalte folgen."
                    },
                    {
                      "id": "in-de-sales-team-martina",
                      "name": "Martina",
                      "short": "MA",
                      "type": "employee",
                      "role": "Sales Team",
                      "description": "Inhalte folgen."
                    },
                    {
                      "id": "in-de-sales-team-marion",
                      "name": "Marion",
                      "short": "MA",
                      "type": "employee",
                      "role": "Sales Team",
                      "description": "Inhalte folgen."
                    },
                    {
                      "id": "in-de-sales-team-sabinel",
                      "name": "Sabine L.",
                      "short": "SL",
                      "type": "employee",
                      "role": "Sales Team",
                      "description": "Inhalte folgen."
                    },
                    {
                      "id": "in-de-sales-team-sabrina",
                      "name": "Sabrina",
                      "short": "SA",
                      "type": "employee",
                      "role": "Sales Team",
                      "description": "Inhalte folgen."
                    },
                    {
                      "id": "in-de-sales-team-stefanie",
                      "name": "Stefanie",
                      "short": "ST",
                      "type": "employee",
                      "role": "Sales Team",
                      "description": "Inhalte folgen."
                    }
                  ]
                }
              ]
            },
            {
              "id": "in-de-mkt",
              "name": "Marketing",
              "short": "MKT",
              "type": "area",
              "description": "Inhalte folgen.",
              "children": [
                {
                  "id": "in-de-mkt-cm",
                  "name": "Content Marketing",
                  "short": "CM",
                  "type": "department",
                  "description": "Inhalte folgen.",
                  "children": [
                    {
                      "id": "in-de-mkt-cm-birka",
                      "name": "Birka",
                      "short": "BI",
                      "type": "employee",
                      "role": "Content Marketing",
                      "description": "Inhalte folgen."
                    }
                  ]
                },
                {
                  "id": "in-de-mkt-br",
                  "name": "Branding",
                  "short": "BR",
                  "type": "department",
                  "description": "Inhalte folgen.",
                  "children": [
                    {
                      "id": "in-de-mkt-br-micha",
                      "name": "Micha",
                      "short": "MI",
                      "type": "employee",
                      "role": "Branding",
                      "description": "Inhalte folgen."
                    }
                  ]
                },
                {
                  "id": "in-de-mkt-ma",
                  "name": "Marketing Automation",
                  "short": "MA",
                  "type": "department",
                  "description": "Inhalte folgen.",
                  "children": [
                    {
                      "id": "in-de-mkt-ma-lisa",
                      "name": "Lisa",
                      "short": "LI",
                      "type": "employee",
                      "role": "Marketing Automation",
                      "description": "Inhalte folgen."
                    }
                  ]
                },
                {
                  "id": "in-de-mkt-oa",
                  "name": "Online Advertising",
                  "short": "OA",
                  "type": "department",
                  "description": "Inhalte folgen.",
                  "children": [
                    {
                      "id": "in-de-mkt-oa-alice",
                      "name": "Alice",
                      "short": "AL",
                      "type": "employee",
                      "role": "Online Advertising",
                      "description": "Inhalte folgen."
                    }
                  ]
                },
                {
                  "id": "in-de-mkt-em",
                  "name": "Event Marketing",
                  "short": "EM",
                  "type": "department",
                  "description": "Inhalte folgen.",
                  "children": [
                    {
                      "id": "in-de-mkt-em-saskia",
                      "name": "Saskia",
                      "short": "SA",
                      "type": "employee",
                      "role": "Event Marketing",
                      "description": "Inhalte folgen."
                    },
                    {
                      "id": "in-de-mkt-em-jolina",
                      "name": "Jolina",
                      "short": "JO",
                      "type": "employee",
                      "role": "Event Marketing",
                      "description": "Inhalte folgen."
                    },
                    {
                      "id": "in-de-mkt-em-tanja",
                      "name": "Tanja",
                      "short": "TA",
                      "type": "employee",
                      "role": "Event Marketing",
                      "description": "Inhalte folgen."
                    }
                  ]
                }
              ]
            },
            {
              "id": "in-de-ops",
              "name": "Operations",
              "short": "OPS",
              "type": "area",
              "color": "#D4FF00",
              "textColor": "#000000",
              "description": "Inhalte folgen.",
              "children": [
                {
                  "id": "in-de-ops-prd",
                  "name": "Produktion",
                  "short": "PRD",
                  "type": "department",
                  "description": "Inhalte folgen.",
                  "children": [
                    {
                      "id": "in-de-ops-prd-asm",
                      "name": "Assembly",
                      "short": "ASM",
                      "type": "team",
                      "description": "Inhalte folgen.",
                      "children": [
                        {
                          "id": "in-de-ops-prd-asm-ilayda",
                          "name": "Ilayda",
                          "short": "IL",
                          "type": "employee",
                          "role": "Assembly",
                          "description": "Inhalte folgen."
                        },
                        {
                          "id": "in-de-ops-prd-asm-jessica",
                          "name": "Jessica",
                          "short": "JE",
                          "type": "employee",
                          "role": "Assembly",
                          "description": "Inhalte folgen."
                        },
                        {
                          "id": "in-de-ops-prd-asm-joshua",
                          "name": "Joshua",
                          "short": "JO",
                          "type": "employee",
                          "role": "Assembly",
                          "description": "Inhalte folgen."
                        },
                        {
                          "id": "in-de-ops-prd-asm-mansour",
                          "name": "Mansour",
                          "short": "MA",
                          "type": "employee",
                          "role": "Assembly",
                          "description": "Inhalte folgen."
                        },
                        {
                          "id": "in-de-ops-prd-asm-sara",
                          "name": "Sara",
                          "short": "SA",
                          "type": "employee",
                          "role": "Assembly",
                          "description": "Inhalte folgen."
                        },
                        {
                          "id": "in-de-ops-prd-asm-birte",
                          "name": "Birte",
                          "short": "BI",
                          "type": "employee",
                          "role": "Assembly",
                          "description": "Inhalte folgen."
                        },
                        {
                          "id": "in-de-ops-prd-asm-emely",
                          "name": "Emely",
                          "short": "EM",
                          "type": "employee",
                          "role": "Assembly",
                          "description": "Inhalte folgen."
                        },
                        {
                          "id": "in-de-ops-prd-asm-joe",
                          "name": "Joe",
                          "short": "JO",
                          "type": "employee",
                          "role": "Assembly",
                          "description": "Inhalte folgen."
                        },
                        {
                          "id": "in-de-ops-prd-asm-luis",
                          "name": "Luis",
                          "short": "LU",
                          "type": "employee",
                          "role": "Assembly",
                          "description": "Inhalte folgen."
                        },
                        {
                          "id": "in-de-ops-prd-asm-remy",
                          "name": "Remy",
                          "short": "RE",
                          "type": "employee",
                          "role": "Assembly",
                          "description": "Inhalte folgen."
                        }
                      ]
                    }
                  ]
                },
                {
                  "id": "in-de-ops-it",
                  "name": "IT",
                  "short": "IT",
                  "type": "department",
                  "description": "Inhalte folgen.",
                  "children": [
                    {
                      "id": "in-de-ops-it-build",
                      "name": "IT Build",
                      "short": "ITB",
                      "type": "team",
                      "description": "Inhalte folgen.",
                      "children": [
                        {
                          "id": "in-de-ops-it-build-jonathan",
                          "name": "Jonathan",
                          "short": "JO",
                          "type": "employee",
                          "role": "IT Build",
                          "description": "Inhalte folgen."
                        },
                        {
                          "id": "in-de-ops-it-build-claudiu",
                          "name": "Claudiu",
                          "short": "CL",
                          "type": "employee",
                          "role": "IT Build",
                          "description": "Inhalte folgen."
                        },
                        {
                          "id": "in-de-ops-it-build-sergio",
                          "name": "Sergio",
                          "short": "SE",
                          "type": "employee",
                          "role": "IT Build",
                          "description": "Inhalte folgen."
                        }
                      ]
                    },
                    {
                      "id": "in-de-ops-it-run",
                      "name": "IT Run",
                      "short": "ITR",
                      "type": "team",
                      "description": "Inhalte folgen.",
                      "children": [
                        {
                          "id": "in-de-ops-it-run-manuel",
                          "name": "Manuel",
                          "short": "MA",
                          "type": "employee",
                          "role": "IT Run",
                          "description": "Inhalte folgen."
                        },
                        {
                          "id": "in-de-ops-it-run-maximilian",
                          "name": "Maximilian",
                          "short": "MA",
                          "type": "employee",
                          "role": "IT Run",
                          "description": "Inhalte folgen."
                        }
                      ]
                    }
                  ]
                },
                {
                  "id": "in-de-ops-log",
                  "name": "Logistik",
                  "short": "LOG",
                  "type": "department",
                  "description": "Inhalte folgen.",
                  "children": [
                    {
                      "id": "in-de-ops-log-othi",
                      "name": "Othi",
                      "short": "OT",
                      "type": "employee",
                      "role": "Logistik",
                      "description": "Inhalte folgen."
                    },
                    {
                      "id": "in-de-ops-log-abdullah",
                      "name": "Abdullah",
                      "short": "AB",
                      "type": "employee",
                      "role": "Logistik",
                      "description": "Inhalte folgen."
                    }
                  ]
                },
                {
                  "id": "in-de-ops-mp",
                  "name": "Material Planning",
                  "short": "MP",
                  "type": "department",
                  "description": "Inhalte folgen.",
                  "children": [
                    {
                      "id": "in-de-ops-mp-patrik",
                      "name": "Patrik",
                      "short": "PA",
                      "type": "employee",
                      "role": "Material Planning",
                      "description": "Inhalte folgen."
                    },
                    {
                      "id": "in-de-ops-mp-alex",
                      "name": "Alex",
                      "short": "AL",
                      "type": "employee",
                      "role": "Material Planning",
                      "description": "Inhalte folgen."
                    }
                  ]
                },
                {
                  "id": "in-de-ops-og",
                  "name": "Outgoing Goods",
                  "short": "OG",
                  "type": "department",
                  "description": "Inhalte folgen.",
                  "children": [
                    {
                      "id": "in-de-ops-og-christian",
                      "name": "Christian",
                      "short": "CH",
                      "type": "employee",
                      "role": "Outgoing Goods",
                      "description": "Inhalte folgen."
                    },
                    {
                      "id": "in-de-ops-og-kadir",
                      "name": "Kadir",
                      "short": "KA",
                      "type": "employee",
                      "role": "Outgoing Goods",
                      "description": "Inhalte folgen."
                    },
                    {
                      "id": "in-de-ops-og-marco",
                      "name": "Marco",
                      "short": "MA",
                      "type": "employee",
                      "role": "Outgoing Goods",
                      "description": "Inhalte folgen."
                    },
                    {
                      "id": "in-de-ops-og-maria",
                      "name": "Maria",
                      "short": "MA",
                      "type": "employee",
                      "role": "Outgoing Goods",
                      "description": "Inhalte folgen."
                    },
                    {
                      "id": "in-de-ops-og-martin",
                      "name": "Martin",
                      "short": "MA",
                      "type": "employee",
                      "role": "Outgoing Goods",
                      "description": "Inhalte folgen."
                    },
                    {
                      "id": "in-de-ops-og-salih",
                      "name": "Salih",
                      "short": "SA",
                      "type": "employee",
                      "role": "Outgoing Goods",
                      "description": "Inhalte folgen."
                    },
                    {
                      "id": "in-de-ops-og-stefania",
                      "name": "Stefania",
                      "short": "ST",
                      "type": "employee",
                      "role": "Outgoing Goods",
                      "description": "Inhalte folgen."
                    }
                  ]
                },
                {
                  "id": "in-de-ops-inn",
                  "name": "Innovation",
                  "short": "INN",
                  "type": "department",
                  "description": "Inhalte folgen.",
                  "children": [
                    {
                      "id": "in-de-ops-inn-samanta",
                      "name": "Samanta",
                      "short": "SA",
                      "type": "employee",
                      "role": "Innovation",
                      "description": "Inhalte folgen."
                    },
                    {
                      "id": "in-de-ops-inn-hannah",
                      "name": "Hannah",
                      "short": "HA",
                      "type": "employee",
                      "role": "Innovation",
                      "description": "Inhalte folgen."
                    },
                    {
                      "id": "in-de-ops-inn-juana",
                      "name": "Juana",
                      "short": "JU",
                      "type": "employee",
                      "role": "Innovation",
                      "description": "Inhalte folgen."
                    },
                    {
                      "id": "in-de-ops-inn-ruth",
                      "name": "Ruth",
                      "short": "RU",
                      "type": "employee",
                      "role": "Innovation",
                      "description": "Inhalte folgen."
                    }
                  ]
                },
                {
                  "id": "in-de-ops-off",
                  "name": "Office",
                  "short": "OFF",
                  "type": "department",
                  "description": "Inhalte folgen.",
                  "children": [
                    {
                      "id": "in-de-ops-off-jutta",
                      "name": "Jutta",
                      "short": "JU",
                      "type": "employee",
                      "role": "Office",
                      "description": "Inhalte folgen."
                    },
                    {
                      "id": "in-de-ops-off-siegfried",
                      "name": "Siegfried",
                      "short": "SI",
                      "type": "employee",
                      "role": "Office",
                      "description": "Inhalte folgen."
                    }
                  ]
                }
              ]
            },
            {
              "id": "in-de-fin",
              "name": "Finance",
              "short": "FIN",
              "type": "area",
              "description": "Inhalte folgen.",
              "children": [
                {
                  "id": "in-de-fin-ctr",
                  "name": "Controlling",
                  "short": "CTR",
                  "type": "department",
                  "description": "Inhalte folgen.",
                  "children": [
                    {
                      "id": "in-de-fin-ctr-marylene",
                      "name": "Marylene",
                      "short": "MA",
                      "type": "employee",
                      "role": "Controlling",
                      "description": "Inhalte folgen."
                    },
                    {
                      "id": "in-de-fin-ctr-noelle",
                      "name": "Noelle",
                      "short": "NO",
                      "type": "employee",
                      "role": "Controlling",
                      "description": "Inhalte folgen."
                    }
                  ]
                },
                {
                  "id": "in-de-fin-acc",
                  "name": "Accounting",
                  "short": "ACC",
                  "type": "department",
                  "description": "Inhalte folgen.",
                  "children": [
                    {
                      "id": "in-de-fin-acc-yulia",
                      "name": "Yulia",
                      "short": "YU",
                      "type": "employee",
                      "role": "Accounting",
                      "description": "Inhalte folgen."
                    },
                    {
                      "id": "in-de-fin-acc-elisa",
                      "name": "Elisa",
                      "short": "EL",
                      "type": "employee",
                      "role": "Accounting",
                      "description": "Inhalte folgen."
                    },
                    {
                      "id": "in-de-fin-acc-mandy",
                      "name": "Mandy",
                      "short": "MA",
                      "type": "employee",
                      "role": "Accounting",
                      "description": "Inhalte folgen."
                    },
                    {
                      "id": "in-de-fin-acc-marina",
                      "name": "Marina",
                      "short": "MA",
                      "type": "employee",
                      "role": "Accounting",
                      "description": "Inhalte folgen."
                    },
                    {
                      "id": "in-de-fin-acc-reka",
                      "name": "Reka",
                      "short": "RE",
                      "type": "employee",
                      "role": "Accounting",
                      "description": "Inhalte folgen."
                    },
                    {
                      "id": "in-de-fin-acc-tammy",
                      "name": "Tammy",
                      "short": "TA",
                      "type": "employee",
                      "role": "Accounting",
                      "description": "Inhalte folgen."
                    },
                    {
                      "id": "in-de-fin-acc-juliana",
                      "name": "Juliana",
                      "short": "JU",
                      "type": "employee",
                      "role": "Accounting",
                      "description": "Inhalte folgen."
                    }
                  ]
                }
              ]
            },
            {
              "id": "in-de-hr",
              "name": "HR",
              "short": "HR",
              "type": "area",
              "description": "Inhalte folgen.",
              "children": [
                {
                  "id": "in-de-hr-evelin",
                  "name": "Evelin",
                  "short": "EV",
                  "type": "employee",
                  "role": "HR",
                  "description": "Inhalte folgen."
                },
                {
                  "id": "in-de-hr-katrin",
                  "name": "Katrin",
                  "short": "KA",
                  "type": "employee",
                  "role": "HR",
                  "description": "Inhalte folgen."
                },
                {
                  "id": "in-de-hr-shari",
                  "name": "Shari",
                  "short": "SH",
                  "type": "employee",
                  "role": "HR",
                  "description": "Inhalte folgen."
                },
                {
                  "id": "in-de-hr-sylvia",
                  "name": "Sylvia",
                  "short": "SY",
                  "type": "employee",
                  "role": "HR",
                  "description": "Inhalte folgen."
                },
                {
                  "id": "in-de-hr-dominik",
                  "name": "Dominik",
                  "short": "DO",
                  "type": "employee",
                  "role": "HR",
                  "description": "Inhalte folgen."
                },
                {
                  "id": "in-de-hr-jochen",
                  "name": "Jochen",
                  "short": "JO",
                  "type": "employee",
                  "role": "HR",
                  "description": "Inhalte folgen."
                },
                {
                  "id": "in-de-hr-mandy",
                  "name": "Mandy",
                  "short": "MA",
                  "type": "employee",
                  "role": "HR",
                  "description": "Inhalte folgen."
                }
              ]
            },
            {
              "id": "in-de-pm",
              "name": "Projektmanagement",
              "short": "PM",
              "type": "area",
              "description": "Inhalte folgen.",
              "children": [
                {
                  "id": "in-de-pm-jenny",
                  "name": "Jenny",
                  "short": "JE",
                  "type": "employee",
                  "role": "Projektmanagement",
                  "description": "Inhalte folgen."
                },
                {
                  "id": "in-de-pm-katja",
                  "name": "Katja",
                  "short": "KA",
                  "type": "employee",
                  "role": "Projektmanagement",
                  "description": "Inhalte folgen."
                }
              ]
            },
            {
              "id": "in-de-pur",
              "name": "Purchase",
              "short": "PUR",
              "type": "area",
              "description": "Inhalte folgen.",
              "children": [
                {
                  "id": "in-de-pur-angelika",
                  "name": "Angelika",
                  "short": "AN",
                  "type": "employee",
                  "role": "Purchase",
                  "description": "Inhalte folgen."
                },
                {
                  "id": "in-de-pur-deborah",
                  "name": "Deborah",
                  "short": "DE",
                  "type": "employee",
                  "role": "Purchase",
                  "description": "Inhalte folgen."
                },
                {
                  "id": "in-de-pur-denise",
                  "name": "Denise",
                  "short": "DE",
                  "type": "employee",
                  "role": "Purchase",
                  "description": "Inhalte folgen."
                },
                {
                  "id": "in-de-pur-elli",
                  "name": "Elli",
                  "short": "EL",
                  "type": "employee",
                  "role": "Purchase",
                  "description": "Inhalte folgen."
                },
                {
                  "id": "in-de-pur-erika",
                  "name": "Erika",
                  "short": "ER",
                  "type": "employee",
                  "role": "Purchase",
                  "description": "Inhalte folgen."
                },
                {
                  "id": "in-de-pur-nicla",
                  "name": "Nicla",
                  "short": "NI",
                  "type": "employee",
                  "role": "Purchase",
                  "description": "Inhalte folgen."
                }
              ]
            },
            {
              "id": "in-de-qm",
              "name": "QM",
              "short": "QM",
              "type": "area",
              "description": "Inhalte folgen.",
              "children": [
                {
                  "id": "in-de-qm-melanie",
                  "name": "Melanie",
                  "short": "ME",
                  "type": "employee",
                  "role": "QM",
                  "description": "Inhalte folgen."
                },
                {
                  "id": "in-de-qm-marina",
                  "name": "Marina",
                  "short": "MA",
                  "type": "employee",
                  "role": "QM",
                  "description": "Inhalte folgen."
                },
                {
                  "id": "in-de-qm-marvin",
                  "name": "Marvin",
                  "short": "MA",
                  "type": "employee",
                  "role": "QM",
                  "description": "Inhalte folgen."
                },
                {
                  "id": "in-de-qm-franziska",
                  "name": "Franziska",
                  "short": "FR",
                  "type": "employee",
                  "role": "QM",
                  "description": "Inhalte folgen."
                },
                {
                  "id": "in-de-qm-sarah",
                  "name": "Sarah",
                  "short": "SA",
                  "type": "employee",
                  "role": "QM",
                  "description": "Inhalte folgen."
                }
              ]
            }
          ]
        },
        {
          "id": "inuvet-at",
          "name": "Inuvet AT",
          "short": "AT",
          "type": "company",
          "description": "Inhalte folgen.",
          "children": [
            {
              "id": "inuvet-at-johanna",
              "name": "Johanna",
              "short": "JO",
              "type": "employee",
              "role": "Inuvet AT",
              "description": "Inhalte folgen."
            },
            {
              "id": "inuvet-at-nele",
              "name": "Nele",
              "short": "NE",
              "type": "employee",
              "role": "Inuvet AT",
              "description": "Inhalte folgen."
            }
          ]
        },
        {
          "id": "inuvet-ch",
          "name": "Inuvet CH",
          "short": "CH",
          "type": "company",
          "description": "Inhalte folgen.",
          "children": [
            {
              "id": "inuvet-ch-remo",
              "name": "Remo",
              "short": "RE",
              "type": "employee",
              "role": "Inuvet CH",
              "description": "Inhalte folgen."
            }
          ]
        },
        {
          "id": "inuvet-it",
          "name": "Inuvet IT",
          "short": "IT",
          "type": "company",
          "description": "Inhalte folgen.",
          "children": [
            {
              "id": "inuvet-it-raimondo",
              "name": "Raimondo",
              "short": "RA",
              "type": "employee",
              "role": "Sales",
              "description": "Inhalte folgen."
            },
            {
              "id": "inuvet-it-salah",
              "name": "Salah",
              "short": "SA",
              "type": "employee",
              "role": "Sales",
              "description": "Inhalte folgen."
            },
            {
              "id": "inuvet-it-johannesb",
              "name": "Johannes B.",
              "short": "JB",
              "type": "employee",
              "role": "Sales",
              "description": "Inhalte folgen."
            },
            {
              "id": "inuvet-it-michele",
              "name": "Michele",
              "short": "MI",
              "type": "employee",
              "role": "Sales",
              "description": "Inhalte folgen."
            },
            {
              "id": "inuvet-it-ramona",
              "name": "Ramona",
              "short": "RA",
              "type": "employee",
              "role": "Sales",
              "description": "Inhalte folgen."
            },
            {
              "id": "inuvet-it-richard",
              "name": "Richard",
              "short": "RI",
              "type": "employee",
              "role": "Sales",
              "description": "Inhalte folgen."
            }
          ]
        },
        {
          "id": "inuvet-jp",
          "name": "Inuvet JP",
          "short": "JP",
          "type": "company",
          "description": "Inhalte folgen.",
          "children": [
            {
              "id": "inuvet-jp-karolin",
              "name": "Karolin",
              "short": "KA",
              "type": "employee",
              "role": "Marketing",
              "description": "Inhalte folgen."
            }
          ]
        },
        {
          "id": "inuvet-fr",
          "name": "Inuvet FR/LUX",
          "short": "FR",
          "type": "company",
          "description": "Inhalte folgen.",
          "children": [
            {
              "id": "inuvet-fr-ana",
              "name": "Ana",
              "short": "AN",
              "type": "employee",
              "role": "Inuvet FR/LUX",
              "description": "Inhalte folgen."
            }
          ]
        },
        {
          "id": "inuvet-es",
          "name": "Inuvet ES",
          "short": "ES",
          "type": "company",
          "description": "Inhalte folgen.",
          "children": [
            {
              "id": "inuvet-es-ana",
              "name": "Ana",
              "short": "AN",
              "type": "employee",
              "role": "Inuvet ES",
              "description": "Inhalte folgen."
            }
          ]
        },
        {
          "id": "inuvet-be",
          "name": "Inuvet BE",
          "short": "BE",
          "type": "company",
          "description": "Inhalte folgen.",
          "children": [
            {
              "id": "inuvet-be-emilie",
              "name": "Emilie",
              "short": "EM",
              "type": "employee",
              "role": "Sales",
              "description": "Inhalte folgen."
            },
            {
              "id": "inuvet-be-jason",
              "name": "Jason",
              "short": "JA",
              "type": "employee",
              "role": "Sales",
              "description": "Inhalte folgen."
            },
            {
              "id": "inuvet-be-sabinea",
              "name": "Sabine A.",
              "short": "SA",
              "type": "employee",
              "role": "Sales",
              "description": "Inhalte folgen."
            },
            {
              "id": "inuvet-be-stephanim",
              "name": "Stephanie M.",
              "short": "SM",
              "type": "employee",
              "role": "Sales",
              "description": "Inhalte folgen."
            },
            {
              "id": "inuvet-be-theresa",
              "name": "Theresa",
              "short": "TH",
              "type": "employee",
              "role": "Sales",
              "description": "Inhalte folgen."
            },
            {
              "id": "inuvet-be-tomke",
              "name": "Tomke",
              "short": "TO",
              "type": "employee",
              "role": "Sales",
              "description": "Inhalte folgen."
            },
            {
              "id": "inuvet-be-julia",
              "name": "Julia",
              "short": "JU",
              "type": "employee",
              "role": "Sales",
              "description": "Inhalte folgen."
            },
            {
              "id": "inuvet-be-martina",
              "name": "Martina",
              "short": "MA",
              "type": "employee",
              "role": "Sales",
              "description": "Inhalte folgen."
            },
            {
              "id": "inuvet-be-marion",
              "name": "Marion",
              "short": "MA",
              "type": "employee",
              "role": "Sales",
              "description": "Inhalte folgen."
            },
            {
              "id": "inuvet-be-sabinel",
              "name": "Sabine L.",
              "short": "SL",
              "type": "employee",
              "role": "Sales",
              "description": "Inhalte folgen."
            },
            {
              "id": "inuvet-be-sabrina",
              "name": "Sabrina",
              "short": "SA",
              "type": "employee",
              "role": "Sales",
              "description": "Inhalte folgen."
            },
            {
              "id": "inuvet-be-stefanien",
              "name": "Stefanie N.",
              "short": "SN",
              "type": "employee",
              "role": "Sales",
              "description": "Inhalte folgen."
            }
          ]
        },
        {
          "id": "inuvet-ir",
          "name": "Inuvet IR",
          "short": "IR",
          "type": "company",
          "description": "Inhalte folgen.",
          "children": [
            {
              "id": "inuvet-ir-felix",
              "name": "Felix",
              "short": "FE",
              "type": "employee",
              "role": "Inuvet IR",
              "description": "Inhalte folgen."
            }
          ]
        },
        {
          "id": "inuvet-fashion",
          "name": "Inuvet Fashion",
          "short": "FS",
          "type": "company",
          "description": "Inhalte folgen.",
          "children": [
            {
              "id": "inuvet-fashion-sofie",
              "name": "Sofie",
              "short": "SO",
              "type": "employee",
              "role": "Inuvet Fashion",
              "description": "Inhalte folgen."
            },
            {
              "id": "inuvet-fashion-sarah",
              "name": "Sarah",
              "short": "SA",
              "type": "employee",
              "role": "Inuvet Fashion",
              "description": "Inhalte folgen."
            }
          ]
        }
      ]
    },
    {
      "id": "eqx",
      "name": "EQX",
      "short": "EQX",
      "type": "company",
      "description": "Inhalte folgen.",
      "children": [
        {
          "id": "eqx-gf",
          "name": "Geschäftsführung",
          "short": "GF",
          "type": "area",
          "description": "Inhalte folgen.",
          "children": [
            {
              "id": "eqx-gf-adrian",
              "name": "Adrian",
              "short": "AD",
              "type": "employee",
              "role": "Geschäftsführung",
              "description": "Inhalte folgen."
            }
          ]
        },
        {
          "id": "eqx-sales",
          "name": "Sales",
          "short": "SLS",
          "type": "area",
          "description": "Inhalte folgen.",
          "children": [
            {
              "id": "eqx-sales-sc",
              "name": "Sales Concierge",
              "short": "SC",
              "type": "department",
              "description": "Inhalte folgen.",
              "children": [
                {
                  "id": "eqx-sales-sc-charline",
                  "name": "Charline",
                  "short": "CH",
                  "type": "employee",
                  "role": "Sales Concierge",
                  "description": "Inhalte folgen."
                },
                {
                  "id": "eqx-sales-sc-yvonne",
                  "name": "Yvonne",
                  "short": "YV",
                  "type": "employee",
                  "role": "Sales Concierge",
                  "description": "Inhalte folgen."
                },
                {
                  "id": "eqx-sales-sc-riccardo",
                  "name": "Riccardo",
                  "short": "RI",
                  "type": "employee",
                  "role": "Sales Concierge",
                  "description": "Inhalte folgen."
                }
              ]
            },
            {
              "id": "eqx-sales-ad",
              "name": "Außendienst",
              "short": "AD",
              "type": "department",
              "description": "Inhalte folgen.",
              "children": [
                {
                  "id": "eqx-sales-ad-ana",
                  "name": "Ana",
                  "short": "AN",
                  "type": "employee",
                  "role": "Außendienst",
                  "description": "Inhalte folgen."
                },
                {
                  "id": "eqx-sales-ad-florian",
                  "name": "Florian",
                  "short": "FL",
                  "type": "employee",
                  "role": "Außendienst",
                  "description": "Inhalte folgen."
                }
              ]
            },
            {
              "id": "eqx-sales-team",
              "name": "Sales Team",
              "short": "ST",
              "type": "department",
              "description": "Inhalte folgen.",
              "children": [
                {
                  "id": "eqx-sales-team-andrea",
                  "name": "Andrea",
                  "short": "AN",
                  "type": "employee",
                  "role": "Sales Team",
                  "description": "Inhalte folgen."
                },
                {
                  "id": "eqx-sales-team-lionel",
                  "name": "Lionel",
                  "short": "LI",
                  "type": "employee",
                  "role": "Sales Team",
                  "description": "Inhalte folgen."
                },
                {
                  "id": "eqx-sales-team-angie",
                  "name": "Angie",
                  "short": "AN",
                  "type": "employee",
                  "role": "Sales Team",
                  "description": "Inhalte folgen."
                },
                {
                  "id": "eqx-sales-team-annika",
                  "name": "Annika",
                  "short": "AN",
                  "type": "employee",
                  "role": "Sales Team",
                  "description": "Inhalte folgen."
                },
                {
                  "id": "eqx-sales-team-claudia",
                  "name": "Claudia",
                  "short": "CL",
                  "type": "employee",
                  "role": "Sales Team",
                  "description": "Inhalte folgen."
                },
                {
                  "id": "eqx-sales-team-merle",
                  "name": "Merle",
                  "short": "ME",
                  "type": "employee",
                  "role": "Sales Team",
                  "description": "Inhalte folgen."
                },
                {
                  "id": "eqx-sales-team-nadja",
                  "name": "Nadja",
                  "short": "NA",
                  "type": "employee",
                  "role": "Sales Team",
                  "description": "Inhalte folgen."
                },
                {
                  "id": "eqx-sales-team-sarah",
                  "name": "Sarah",
                  "short": "SA",
                  "type": "employee",
                  "role": "Sales Team",
                  "description": "Inhalte folgen."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "byox",
      "name": "Byox",
      "short": "BX",
      "type": "company",
      "description": "Inhalte folgen.",
      "children": [
        {
          "id": "byox-gf",
          "name": "Geschäftsführung",
          "short": "GF",
          "type": "area",
          "description": "Inhalte folgen.",
          "children": [
            {
              "id": "byox-gf-liesel",
              "name": "Liesel",
              "short": "LI",
              "type": "employee",
              "role": "Geschäftsführung",
              "description": "Inhalte folgen."
            }
          ]
        },
        {
          "id": "byox-mkt",
          "name": "Marketing",
          "short": "MKT",
          "type": "area",
          "description": "Inhalte folgen.",
          "children": [
            {
              "id": "byox-mkt-sharon",
              "name": "Sharon",
              "short": "SH",
              "type": "employee",
              "role": "Marketing",
              "description": "Inhalte folgen."
            }
          ]
        }
      ]
    },
    {
      "id": "planimol",
      "name": "Planimol",
      "short": "PLM",
      "type": "company",
      "description": "Inhalte folgen.",
      "children": [
        {
          "id": "plm-gf",
          "name": "Geschäftsführung",
          "short": "GF",
          "type": "area",
          "description": "Inhalte folgen.",
          "children": [
            {
              "id": "plm-gf-samuel",
              "name": "Samuel",
              "short": "SA",
              "type": "employee",
              "role": "Geschäftsführung",
              "description": "Inhalte folgen."
            }
          ]
        },
        {
          "id": "plm-qm",
          "name": "QM & Reg. Affairs",
          "short": "QM",
          "type": "area",
          "description": "Inhalte folgen.",
          "children": [
            {
              "id": "plm-qm-melanie",
              "name": "Melanie",
              "short": "ME",
              "type": "employee",
              "role": "QM & Reg. Affairs",
              "description": "Inhalte folgen."
            },
            {
              "id": "plm-qm-babak",
              "name": "Babak",
              "short": "BA",
              "type": "employee",
              "role": "QM & Reg. Affairs",
              "description": "Inhalte folgen."
            },
            {
              "id": "plm-qm-christina",
              "name": "Christina",
              "short": "CH",
              "type": "employee",
              "role": "QM & Reg. Affairs",
              "description": "Inhalte folgen."
            },
            {
              "id": "plm-qm-oguz",
              "name": "Oğuz",
              "short": "OĞ",
              "type": "employee",
              "role": "QM & Reg. Affairs",
              "description": "Inhalte folgen."
            }
          ]
        }
      ]
    }
  ]
};
