var datacenters = [
    {
      dcType: "INFRACAPSULE",
      dcPage: "infracapsule.php",
      regions: [
        {
          region: "APAC",
          countries: [
            {
              countryName: "CHINA",
              cities: [
                {
                  cityName: "Shanghai",
                  locations: [
                    {
                      locationName: "YDO",
                      dcName: "CHI-SHN-YDO"
                    }
                  ]
                }
              ]
            },
            {
              countryName: "Philippines",
              cities: [
                {
                  cityName: "Pasig",
                  locations: [
                    {
                      locationName: "Hanston",
                      dcName: "PHP-PAS-HAN"
                    }
                  ]
                },
                {
                  cityName: "Quezon City",
                  locations: [
                    {
                      locationName: "Giga Tower",
                      dcName: "PHP-QZ-GGT"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          region: "Europe",
          countries: [
            {
              countryName: "Germany",
              cities: [
                {
                  cityName: "Hamburg",
                  locations: [
                    {
                      locationName: "Hamburg - G2",
                      dcName: "GER-HAM- HG2"
                    }
                  ]
                }
              ]
            },
            {
              countryName: "Hungary",
              cities: [
                {
                  cityName: "Budapest",
                  locations: [
                    {
                      locationName: "MillPark",
                      dcName: "HUN-BUA-MIP"
                    }
                  ]
                }
              ]
            },
            {
              countryName: "Netherlands",
              cities: [
                {
                  cityName: "Amsterdam",
                  locations: [
                    {
                      locationName: "AMS - COLO",
                      dcName: "NLD-AMS- COLO"
                    }
                  ]
                }
              ]
            },
            {
              countryName: "United Kingdom",
              cities: [
                {
                  cityName: "London",
                  locations: [
                    {
                      locationName: "London COLO",
                      dcName: "UK-LON-COLO"
                    },
                    {
                      locationName: "Paddington",
                      dcName: "UK-LON-PDN"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          region: "INDIA",
          countries: [
            {
              countryName: "INDIA",
              cities: [
                {
                  cityName: "Bangalore",
                  locations: [
                    {
                      locationName: "MBP F2",
                      dcName: "IND-BLR-MBP"
                    }
                  ]
                },
                {
                  cityName: "Chennai",
                  locations: [
                    {
                      locationName: "CHN-DLF",
                      dcName: "IND-CHN-DLF"
                    },
                    {
                      locationName: "CHN-TCO",
                      dcName: "IND-CHN-TCO"
                    }
                  ]
                },
                {
                  cityName: "Coimbatore",
                  locations: [
                    {
                      locationName: "CBE-CCC",
                      dcName: "IND-CBE-CCC"
                    }
                  ]
                },
                {
                  cityName: "Hyderabad",
                  locations: [
                    {
                      locationName: "HYD - DLF",
                      dcName: "IND-HYD-DLF"
                    }
                  ]
                },
                {
                  cityName: "KOLKATA",
                  locations: [
                    {
                      locationName: "GTP - SEZ",
                      dcName: "IND-KOL-GTP"
                    },
                    {
                      locationName: "TCPX - STPI",
                      dcName: "IND-KOL-TCPX"
                    }
                  ]
                },
                {
                  cityName: "Mumbai",
                  locations: [
                    {
                      locationName: "Kensington",
                      dcName: "IND-MUM-KEN"
                    }
                  ]
                },
                {
                  cityName: "PUNE",
                  locations: [
                    {
                      locationName: "DLF-Q2",
                      dcName: "IND-PUN-DLFQ2"
                    },
                    {
                      locationName: "H2",
                      dcName: "IND-PUN-H2"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          region: "North America",
          countries: [
            {
              countryName: "United States",
              cities: [
                {
                  cityName: "Bridgewater",
                  locations: [
                    {
                      locationName: "BRW",
                      dcName: "USA-BRW-BRW"
                    }
                  ]
                },
                {
                  cityName: "New Jersey",
                  locations: [
                    {
                      locationName: "WHK COLO",
                      dcName: "USA-WHK-COLO"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      dcType: "NGDC",
      dcPage: "ngdc.php",
      regions: [
        {
          region: "APAC",
          countries: [
            {
              countryName: "INDIA",
              cities: [
                {
                  cityName: "Chennai",
                  locations: [
                    {
                      locationName: "MEPZ",
                      dcName: "IND-CHN-MEPZ"
                    }
                  ]
                },
                {
                  cityName: "PUNE",
                  locations: [
                    {
                      locationName: "CDC",
                      dcName: "IND-PUN-CDC"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          region: "North America",
          countries: [
            {
              countryName: "United States",
              cities: [
                {
                  cityName: "Arizona",
                  locations: [
                    {
                      locationName: "Chandler",
                      dcName: "USA-ARA-CHD"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      dcType: "MSR",
      dcPage: "hub.php",
      regions: [
        {
          region: "APAC",
          countries: [
            {
              countryName: "Australia",
              cities: [
                {
                  cityName: "Melbourne",
                  locations: [
                    {
                      locationName: "Melbourne",
                      dcName: "AUS-MEL-MEL"
                    }
                  ]
                },
                {
                  cityName: "Sydney",
                  locations: [
                    {
                      locationName: "Sydney",
                      dcName: "AUS-SYD-SYD"
                    }
                  ]
                }
              ]
            },
            {
              countryName: "CHINA",
              cities: [
                {
                  cityName: "Dalian",
                  locations: [
                    {
                      locationName: "TF",
                      dcName: "CHI-DAL-TF"
                    }
                  ]
                }
              ]
            },
            {
              countryName: "INDIA",
              cities: [
                {
                  cityName: "Bangalore",
                  locations: [
                    {
                      locationName: "BLR-G3",
                      dcName: "IND-BLR-G3"
                    },
                    {
                      locationName: "BLR-Neon",
                      dcName: "IND-BLR-NEO"
                    }
                  ]
                },
                {
                  cityName: "Chennai",
                  locations: [
                    {
                      locationName: "CHN-CCO",
                      dcName: "IND-CHN-CCO"
                    },
                    {
                      locationName: "CHN-COLO",
                      dcName: "IND-CHN-COLO"
                    },
                    {
                      locationName: "CHN-CRC",
                      dcName: "IND-CHN-CRC"
                    },
                    {
                      locationName: "CHN-KITS / CKC",
                      dcName: "IND-CHN-CKC"
                    },
                    {
                      locationName: "Ozone",
                      dcName: "IND-CHN-OZO"
                    },
                    {
                      locationName: "SRI-SEZ",
                      dcName: "IND-CHN-SRZ"
                    },
                    {
                      locationName: "SRI-STPI",
                      dcName: "IND-CHN-SRISTPI"
                    }
                  ]
                },
                {
                  cityName: "Coimbatore",
                  locations: [
                    {
                      locationName: "CBE-CCC SDB2",
                      dcName: "IND-CBE-CCC2"
                    },
                    {
                      locationName: "INDIALAND",
                      dcName: "IND-CBE-ILD"
                    }
                  ]
                },
                {
                  cityName: "Delhi",
                  locations: [
                    {
                      locationName: "Delhi COLO",
                      dcName: "IND-DLH-COLO"
                    }
                  ]
                },
                {
                  cityName: "Gurgaon",
                  locations: [
                    {
                      locationName: "Tikri Building 1",
                      dcName: "IND-GUR-TIK1"
                    },
                    {
                      locationName: "Tikri Building 3",
                      dcName: "IND-GUR-TIK3"
                    }
                  ]
                },
                {
                  cityName: "Hyderabad",
                  locations: [
                    {
                      locationName: "HYD-H4",
                      dcName: "IND-HYD-H4"
                    },
                    {
                      locationName: "ISC1",
                      dcName: "IND-HYD-ISC1"
                    },
                    {
                      locationName: "RAHEJA 12 A",
                      dcName: "IND-HYD-RHJ12"
                    },
                    {
                      locationName: "RAHEJA 20",
                      dcName: "IND-HYD-RHJ20"
                    }
                  ]
                },
                {
                  cityName: "KOCHI",
                  locations: [
                    {
                      locationName: "CNC",
                      dcName: "IND-KOC-CNC"
                    },
                    {
                      locationName: "TCP",
                      dcName: "IND-KOC-TCP"
                    }
                  ]
                },
                {
                  cityName: "KOLKATA",
                  locations: [
                    {
                      locationName: "Candor C3",
                      dcName: "IND-KOL-C3"
                    },
                    {
                      locationName: "DLF Block II (MEDFIN + Infra)",
                      dcName: "IND-KOL-DLF"
                    },
                    {
                      locationName: "GTP - SDB2",
                      dcName: "IND-KOL-GTP2"
                    },
                    {
                      locationName: "ITP- UNT- B1- SEZ",
                      dcName: "IND-KOL-UNTB1"
                    },
                    {
                      locationName: "ITP- UNT- G1 SEZ",
                      dcName: "IND-KOL-UNTG1"
                    },
                    {
                      locationName: "ITP- UNT-C1-SEZ",
                      dcName: "IND-KOL-UNTC1"
                    },
                    {
                      locationName: "ITP-UNT- G2-SEZ",
                      dcName: "IND-KOL-UNTG2"
                    }
                  ]
                },
                {
                  cityName: "Mangalore",
                  locations: [
                    {
                      locationName: "MLR-CREO",
                      dcName: "IND-MLR-CREO"
                    }
                  ]
                },
                {
                  cityName: "Mumbai",
                  locations: [
                    {
                      locationName: "AIROLI Bldg-9",
                      dcName: "IND-MUM-AIR"
                    },
                    {
                      locationName: "MUM COLO",
                      dcName: "IND-MUM-COLO"
                    }
                  ]
                },
                {
                  cityName: "Noida",
                  locations: [
                    {
                      locationName: "Noida Sec 135",
                      dcName: "IND-NOI-NS135"
                    }
                  ]
                },
                {
                  cityName: "PUNE",
                  locations: [
                    {
                      locationName: "CDC HUB",
                      dcName: "IND-PUN-CDC2"
                    },
                    {
                      locationName: "DLF-Q4",
                      dcName: "IND-PUN-DLFQ4"
                    },
                    {
                      locationName: "EON",
                      dcName: "IND-PUN-EON"
                    },
                    {
                      locationName: "ICC Trade",
                      dcName: "IND-PUN-TRD"
                    }
                  ]
                }
              ]
            },
            {
              countryName: "Japan",
              cities: [
                {
                  cityName: "Tokyo",
                  locations: [
                    {
                      locationName: "Tokyo",
                      dcName: "JPN-TKY-TKY"
                    }
                  ]
                }
              ]
            },
            {
              countryName: "Malaysia",
              cities: [
                {
                  cityName: "Cyberjaya",
                  locations: [
                    {
                      locationName: "i-Tech tower",
                      dcName: "MLY-CYA-TEC"
                    }
                  ]
                },
                {
                  cityName: "Kuala Lumpur",
                  locations: [
                    {
                      locationName: "Kuala Lumpur",
                      dcName: "MLY-KLR-IGT"
                    }
                  ]
                }
              ]
            },
            {
              countryName: "Philippines",
              cities: [
                {
                  cityName: "CEBU",
                  locations: [
                    {
                      locationName: "Skyrise Tower",
                      dcName: "PHP-CEB-SKY"
                    }
                  ]
                },
                {
                  cityName: "Muntinlupa City",
                  locations: [
                    {
                      locationName: "Vector 3 - Alabang",
                      dcName: "PHP-MTL-VEC3"
                    }
                  ]
                },
                {
                  cityName: "Taguig",
                  locations: [
                    {
                      locationName: "Science Hub 4",
                      dcName: "PHP-TGG-SHB4"
                    }
                  ]
                }
              ]
            },
            {
              countryName: "Singapore",
              cities: [
                {
                  cityName: "Singapore",
                  locations: [
                    {
                      locationName: "CBP",
                      dcName: "SGR-SGR-CBP"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          region: "Europe",
          countries: [
            {
              countryName: "France",
              cities: [
                {
                  cityName: "Grenoble",
                  locations: [
                    {
                      locationName: "Le Grenat",
                      dcName: "FRA-GRA-LGT"
                    },
                    {
                      locationName: "WTC",
                      dcName: "FRA-GRA-WTC"
                    }
                  ]
                },
                {
                  cityName: "Paris",
                  locations: [
                    {
                      locationName: "Dexia",
                      dcName: "FRA-PAA-DXA"
                    },
                    {
                      locationName: "Haussmann",
                      dcName: "FRA-PAA-HUS"
                    }
                  ]
                }
              ]
            },
            {
              countryName: "Germany",
              cities: [
                {
                  cityName: "Munich",
                  locations: [
                    {
                      locationName: "Munich",
                      dcName: "GER-MUN-MUN"
                    }
                  ]
                }
              ]
            },
            {
              countryName: "Hungary",
              cities: [
                {
                  cityName: "Budapest",
                  locations: [
                    {
                      locationName: "Millinium Tower",
                      dcName: "HUN-BUA-MIT"
                    }
                  ]
                }
              ]
            },
            {
              countryName: "Latvia",
              cities: [
                {
                  cityName: "Riga",
                  locations: [
                    {
                      locationName: "Tele2",
                      dcName: "LAT-RIA-TEL"
                    }
                  ]
                }
              ]
            },
            {
              countryName: "Lithuania",
              cities: [
                {
                  cityName: "Vilnius",
                  locations: [
                    {
                      locationName: "Vilnius Link 2",
                      dcName: "LIT-VIL-VIL"
                    }
                  ]
                }
              ]
            },
            {
              countryName: "Netherlands",
              cities: [
                {
                  cityName: "Amsterdam",
                  locations: [
                    {
                      locationName: "MIRABEAU",
                      dcName: "NLD-AMS-MIR"
                    },
                    {
                      locationName: "AMS-KBF",
                      dcName: "NLD-AMS-KBF"
                    }
                  ]
                }
              ]
            },
            {
              countryName: "Norway",
              cities: [
                {
                  cityName: "Oslo-stavanger",
                  locations: [
                    {
                      locationName: "Oslo-stavanger",
                      dcName: "NOR-OSL-STA"
                    }
                  ]
                }
              ]
            },
            {
              countryName: "Poland",
              cities: [
                {
                  cityName: "Poland",
                  locations: [
                    {
                      locationName: "Argon",
                      dcName: "POL-POL-ARG"
                    },
                    {
                      locationName: "Gdansk",
                      dcName: "POL-POL-GDK"
                    }
                  ]
                },
                {
                  cityName: "Wroclaw",
                  locations: [
                    {
                      locationName: "Xylem",
                      dcName: "POL-WRO-XLM"
                    }
                  ]
                }
              ]
            },
            {
              countryName: "Romania",
              cities: [
                {
                  cityName: "Bucharest",
                  locations: [
                    {
                      locationName: "TN03",
                      dcName: "ROM-BCT-TN03"
                    }
                  ]
                },
                {
                  cityName: "IASI",
                  locations: [
                    {
                      locationName: "Centro",
                      dcName: "ROM-IAS-CNT"
                    }
                  ]
                },
                {
                  cityName: "Timisoara",
                  locations: [
                    {
                      locationName: "UBC3",
                      dcName: "ROM-TMA-UBC"
                    }
                  ]
                }
              ]
            },
            {
              countryName: "Spain",
              cities: [
                {
                  cityName: "Barcelona",
                  locations: [
                    {
                      locationName: "Barcelona",
                      dcName: "ESP-BAL-BAL"
                    }
                  ]
                },
                {
                  cityName: "Boecillo",
                  locations: [
                    {
                      locationName: "Edificio Solar",
                      dcName: "ESP-BOE-EDI"
                    }
                  ]
                }
              ]
            },
            {
              countryName: "Switzerland",
              cities: [
                {
                  cityName: "Switzerland",
                  locations: [
                    {
                      locationName: "Zug",
                      dcName: "SWZ-ZUG-ZUG"
                    },
                    {
                      locationName: "Zürich",
                      dcName: "SWZ-ZUR-ZUR"
                    }
                  ]
                }
              ]
            },
            {
              countryName: "United Kingdom",
              cities: [
                {
                  cityName: "London",
                  locations: [
                    {
                      locationName: "Ealing",
                      dcName: "UK-LON-EAL"
                    }
                  ]
                },
                {
                  cityName: "Scotland",
                  locations: [
                    {
                      locationName: "Glasgow",
                      dcName: "UK-SCO-GLW"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          region: "North America",
          countries: [
            {
              countryName: "Canada",
              cities: [
                {
                  cityName: "Mississauga",
                  locations: [
                    {
                      locationName: "Mississauga",
                      dcName: "CAN-MIS-MIS"
                    }
                  ]
                },
                {
                  cityName: "Toronto",
                  locations: [
                    {
                      locationName: "Toronto",
                      dcName: "CAN-TOR-TOR"
                    }
                  ]
                }
              ]
            },
            {
              countryName: "Costa Rica",
              cities: [
                {
                  cityName: "Heredia",
                  locations: [
                    {
                      locationName: "Heredia",
                      dcName: "USA-COR-HRD"
                    }
                  ]
                }
              ]
            },
            {
              countryName: "Mexico",
              cities: [
                {
                  cityName: "Guadalajara",
                  locations: [
                    {
                      locationName: "Guadalajara",
                      dcName: "MEX-GDL-GDL"
                    }
                  ]
                },
                {
                  cityName: "Monterrey",
                  locations: [
                    {
                      locationName: "KOI Tower",
                      dcName: "MEX-MOY-KOI"
                    }
                  ]
                }
              ]
            },
            {
              countryName: "United States",
              cities: [
                {
                  cityName: "Arizona",
                  locations: [
                    {
                      locationName: "MESA",
                      dcName: "USA-ARZ-MES"
                    }
                  ]
                },
                {
                  cityName: "Bentonville",
                  locations: [
                    {
                      locationName: "BDC-1",
                      dcName: "USA-BEN-BDC1"
                    }
                  ]
                },
                {
                  cityName: "California",
                  locations: [
                    {
                      locationName: "Sunnyvale COLO",
                      dcName: "USA-SNY-COLO"
                    }
                  ]
                },
                {
                  cityName: "Charlotte",
                  locations: [
                    {
                      locationName: "Charlotte-RDC",
                      dcName: "USA-CHT-RDC"
                    }
                  ]
                },
                {
                  cityName: "College station",
                  locations: [
                    {
                      locationName: "CSS",
                      dcName: "USA-CSS-CSS"
                    }
                  ]
                },
                {
                  cityName: "Colorado",
                  locations: [
                    {
                      locationName: "Englewood- Denver-HQ",
                      dcName: "USA-COL-EWD"
                    }
                  ]
                },
                {
                  cityName: "Des Moines",
                  locations: [
                    {
                      locationName: "Ruan",
                      dcName: "USA-DES-RUN"
                    }
                  ]
                },
                {
                  cityName: "Earth-City",
                  locations: [
                    {
                      locationName: "Earth-City",
                      dcName: "USA-ERC-ERC"
                    }
                  ]
                },
                {
                  cityName: "El Salvador",
                  locations: [
                    {
                      locationName: "San Salvador",
                      dcName: "USA-SSR-SSR"
                    }
                  ]
                },
                {
                  cityName: "Florida",
                  locations: [
                    {
                      locationName: "Sarasota",
                      dcName: "USA-FLO-SAA"
                    }
                  ]
                },
                {
                  cityName: "Houston",
                  locations: [
                    {
                      locationName: "Houston",
                      dcName: "USA-HON-RDC"
                    }
                  ]
                },
                {
                  cityName: "Malvern",
                  locations: [
                    {
                      locationName: "Malvern",
                      dcName: "USA-MLN-MLN"
                    }
                  ]
                },
                {
                  cityName: "Minot",
                  locations: [
                    {
                      locationName: "MOT",
                      dcName: "USA-MNT-MOT"
                    }
                  ]
                },
                {
                  cityName: "Mt Sterling",
                  locations: [
                    {
                      locationName: "Mt Sterling",
                      dcName: "USA-MTS-MTS"
                    }
                  ]
                },
                {
                  cityName: "New Jersey",
                  locations: [
                    {
                      locationName: "Teaneck",
                      dcName: "USA-NJY-TNK2"
                    }
                  ]
                },
                {
                  cityName: "Overland Park",
                  locations: [
                    {
                      locationName: "ATG Overland Park",
                      dcName: "USA-OLP-ATG"
                    }
                  ]
                },
                {
                  cityName: "Pennsylvania",
                  locations: [
                    {
                      locationName: "Jessup - TMG",
                      dcName: "USA-PNS-JES"
                    }
                  ]
                },
                {
                  cityName: "Phoenix",
                  locations: [
                    {
                      locationName: "Norterra",
                      dcName: "USA-PHX-NOR"
                    }
                  ]
                },
                {
                  cityName: "Tampa",
                  locations: [
                    {
                      locationName: "HO3",
                      dcName: "USA-TAM-HO3"
                    },
                    {
                      locationName: "Park tower",
                      dcName: "USA-TAM-PKT"
                    }
                  ]
                },
                {
                  cityName: "Texas",
                  locations: [
                    {
                      locationName: "Dallas",
                      dcName: "USA-TEX-DAL"
                    },
                    {
                      locationName: "Plano",
                      dcName: "USA-TEX-PLO"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          region: "South America",
          countries: [
            {
              countryName: "Argentina",
              cities: [
                {
                  cityName: "Buenos Aires",
                  locations: [
                    {
                      locationName: "Tucuman",
                      dcName: "ARG-BUA-TUC"
                    }
                  ]
                }
              ]
            },
            {
              countryName: "Brazil",
              cities: [
                {
                  cityName: "Brazil",
                  locations: [
                    {
                      locationName: "COW",
                      dcName: "BRZ-BRZ-COW"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ];
  
  export default datacenters;
  