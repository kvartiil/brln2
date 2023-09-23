import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  jsonForm: any =
    {
      "id": 8,
      "name": "kikk_quiz",
      "version": 2,
      "created": "2023-06-01T13:38:25.478155",
      "changed": null,
      "quiz_data": {
        "title": {
          "en": null,
          "et": "Küberküpsuse hindamine",
          "ru": null
        },
        "sections": [
          {
            "id": "overview",
            "title": {
              "en": null,
              "et": "Organisatsiooni ülevaade",
              "ru": null
            },
            "questions": [
              {
                "id": "overview-employees-count",
                "type": "radio",
                "title": {
                  "en": null,
                  "et": "Palun märkige, mitu töötajat on Teie organisatsioonis?",
                  "ru": null
                },
                "fields": [
                  {
                    "title": {
                      "en": null,
                      "et": "Kuni 10",
                      "ru": null
                    },
                    "value": "up-to-10"
                  },
                  {
                    "title": {
                      "en": null,
                      "et": "Kuni 50",
                      "ru": null
                    },
                    "value": "up-to-50"
                  },
                  {
                    "title": {
                      "en": null,
                      "et": "Kuni 100",
                      "ru": null
                    },
                    "value": "up-to-100"
                  },
                  {
                    "title": {
                      "en": null,
                      "et": "Rohkem kui 100",
                      "ru": null
                    },
                    "value": "more-than-100"
                  }
                ],
                "required": true,
                "description": {
                  "en": null,
                  "et": "Valige üks järgnevatest vastustest",
                  "ru": null
                }
              },
              {
                "id": "overview-computer-count",
                "type": "radio",
                "title": {
                  "en": null,
                  "et": "Palun märkige, mitu arvutitöökohta on Teie organisatsioonis?",
                  "ru": null
                },
                "fields": [
                  {
                    "title": {
                      "en": null,
                      "et": "Kuni 10",
                      "ru": null
                    },
                    "value": "up-to-10"
                  },
                  {
                    "title": {
                      "en": null,
                      "et": "Kuni 50",
                      "ru": null
                    },
                    "value": "up-to-50"
                  },
                  {
                    "title": {
                      "en": null,
                      "et": "Kuni 100",
                      "ru": null
                    },
                    "value": "up-to-100"
                  },
                  {
                    "title": {
                      "en": null,
                      "et": "Rohkem kui 100",
                      "ru": null
                    },
                    "value": "more-than-100"
                  }
                ],
                "required": true,
                "description": {
                  "en": null,
                  "et": "Valige üks järgnevatest vastustest",
                  "ru": null
                }
              },
              {
                "id": "overview-info-sec-management-organized",
                "type": "fieldset",
                "title": {
                  "en": null,
                  "et": "Kuidas on infoturbe juhtimine Teie organisatsioonis korraldatud?",
                  "ru": null
                },
                "fields": [
                  {
                    "id": "not-methodically-organized",
                    "type": "checkbox",
                    "title": {
                      "en": null,
                      "et": "Ei ole metoodiliselt korraldatud",
                      "ru": null
                    },
                    "fields": [
                      {
                        "id": "not-methodically-organized-comment",
                        "rows": 2,
                        "type": "textarea",
                        "title": {
                          "en": null,
                          "et": "Lisage kommentaar",
                          "ru": null
                        },
                        "maxLength": 1000
                      }
                    ]
                  },
                  {
                    "id": "iske",
                    "type": "checkbox",
                    "title": {
                      "en": null,
                      "et": "ISKE",
                      "ru": null
                    },
                    "fields": [
                      {
                        "id": "iske-comment",
                        "rows": 2,
                        "type": "textarea",
                        "title": {
                          "en": null,
                          "et": "Lisage kommentaar",
                          "ru": null
                        },
                        "maxLength": 1000
                      }
                    ]
                  },
                  {
                    "id": "iso27001",
                    "type": "checkbox",
                    "title": {
                      "en": null,
                      "et": "ISO27001",
                      "ru": null
                    },
                    "fields": [
                      {
                        "id": "iso27001-comment",
                        "rows": 2,
                        "type": "textarea",
                        "title": {
                          "en": null,
                          "et": "Lisage kommentaar",
                          "ru": null
                        },
                        "maxLength": 1000
                      }
                    ]
                  },
                  {
                    "id": "eits",
                    "type": "checkbox",
                    "title": {
                      "en": null,
                      "et": "E-ITS",
                      "ru": null
                    },
                    "fields": [
                      {
                        "id": "eits-comment",
                        "rows": 2,
                        "type": "textarea",
                        "title": {
                          "en": null,
                          "et": "Lisage kommentaar",
                          "ru": null
                        },
                        "maxLength": 1000
                      }
                    ]
                  },
                  {
                    "id": "company-internal",
                    "type": "checkbox",
                    "title": {
                      "en": null,
                      "et": "Asutuse sisemine kord",
                      "ru": null
                    },
                    "fields": [
                      {
                        "id": "company-internal-comment",
                        "rows": 2,
                        "type": "textarea",
                        "title": {
                          "en": null,
                          "et": "Lisage kommentaar",
                          "ru": null
                        },
                        "maxLength": 1000
                      }
                    ]
                  },
                  {
                    "id": "info-sec-other",
                    "type": "checkbox",
                    "title": {
                      "en": null,
                      "et": "Muu lahendus",
                      "ru": null
                    },
                    "fields": [
                      {
                        "id": "info-sec-other-comment",
                        "rows": 2,
                        "type": "textarea",
                        "title": {
                          "en": null,
                          "et": "Lisage kommentaar",
                          "ru": null
                        },
                        "maxLength": 1000
                      }
                    ]
                  }
                ],
                "required": true
              },
              {
                "id": "security-contact-assigned",
                "type": "radio",
                "title": {
                  "en": null,
                  "et": "Palun täpsustage, kas Teie organisatsioonis on RIA-le määratud infoturbe kontakt?",
                  "ru": null
                },
                "fields": [
                  {
                    "title": {
                      "en": null,
                      "et": "Jah",
                      "ru": null
                    },
                    "value": "true",
                    "makeVisible": [
                      "information-security-contact-set"
                    ]
                  },
                  {
                    "title": {
                      "en": null,
                      "et": "Ei",
                      "ru": null
                    },
                    "value": "false",
                    "makeVisible": [
                      "information-security-contact-unset"
                    ]
                  }
                ],
                "required": true,
                "questions": [
                  {
                    "id": "information-security-contact-unset",
                    "type": "fieldset",
                    "title": {
                      "en": null,
                      "et": "Kellega saab RIA Teie organisatsioonis infoturbe teemadel ühendust võtta?",
                      "ru": null
                    },
                    "fields": [
                      {
                        "id": "information-security-contacts-name",
                        "type": "string",
                        "title": {
                          "en": null,
                          "et": "Ees- ja Perekonnanimi",
                          "ru": null
                        },
                        "required": true,
                        "maxLength": 100
                      },
                      {
                        "id": "information-security-contacts-position",
                        "type": "string",
                        "title": {
                          "en": null,
                          "et": "Ametinimetus",
                          "ru": null
                        },
                        "maxLength": 100
                      },
                      {
                        "id": "information-security-contacts-phone",
                        "type": "number",
                        "title": {
                          "en": null,
                          "et": "Telefoni number",
                          "ru": null
                        },
                        "prefix": "+372",
                        "maxLength": 8
                      },
                      {
                        "id": "information-security-contacts-email",
                        "type": "email",
                        "title": {
                          "en": null,
                          "et": "E-posti aadress",
                          "ru": null
                        },
                        "maxLength": 100
                      }
                    ],
                    "required": true
                  },
                  {
                    "id": "information-security-contact-set",
                    "type": "fieldset",
                    "title": {
                      "en": null,
                      "et": "Kes on Teie organisatsiooni infoturbe kontakt?",
                      "ru": null
                    },
                    "fields": [
                      {
                        "id": "information-security-set-contacts-name",
                        "type": "string",
                        "title": {
                          "en": null,
                          "et": "Ees- ja Perekonnanimi",
                          "ru": null
                        },
                        "required": true,
                        "maxLength": 100
                      },
                      {
                        "id": "information-security-set-contacts-position",
                        "type": "string",
                        "title": {
                          "en": null,
                          "et": "Ametinimetus",
                          "ru": null
                        },
                        "maxLength": 100
                      },
                      {
                        "id": "information-security-set-contacts-phone",
                        "type": "number",
                        "title": {
                          "en": null,
                          "et": "Telefoni number",
                          "ru": null
                        },
                        "prefix": "+372",
                        "maxLength": 8
                      },
                      {
                        "id": "information-security-set-contacts-email",
                        "type": "email",
                        "title": {
                          "en": null,
                          "et": "E-posti aadress",
                          "ru": null
                        },
                        "maxLength": 100
                      }
                    ],
                    "required": true
                  }
                ],
                "description": {
                  "en": null,
                  "et": "Valige üks järgnevatest vastustest",
                  "ru": null
                }
              }
            ]
          },
          {
            "id": "cyber-body",
            "title": {
              "en": null,
              "et": "Organisatsiooni küberkeha",
              "ru": null
            },
            "questions": [
              {
                "id": "info-systems-affect-activities",
                "type": "radio",
                "title": {
                  "en": null,
                  "et": "Kas Teie organisatsioonis kasutatakse infosüsteeme, mis mõjutavad põhitegevuse osutamist?",
                  "ru": null
                },
                "fields": [
                  {
                    "title": {
                      "en": null,
                      "et": "Jah",
                      "ru": null
                    },
                    "value": "true",
                    "makeVisible": [
                      "network-and-info-systems-used",
                      "main-acitivity-interrupted",
                      "external-services-depending-on",
                      "domains-and-subdomains",
                      "network-system-ip-addresses",
                      "main-cyber-risks",
                      "cybersecurity-risk-analysis"
                    ]
                  },
                  {
                    "title": {
                      "en": null,
                      "et": "Ei",
                      "ru": null
                    },
                    "value": "false",
                    "makeVisible": [
                      "main-cyber-risks"
                    ]
                  }
                ],
                "required": true,
                "questions": [
                  {
                    "id": "network-and-info-systems-used",
                    "type": "fieldset",
                    "title": {
                      "en": null,
                      "et": "Milliseid võrgu- ja infosüsteeme Teie organisatsioon põhitegevuse osutamiseks kasutab?",
                      "ru": null
                    },
                    "fields": [
                      {
                        "id": "internal-systems-used",
                        "type": "checkbox",
                        "title": {
                          "en": null,
                          "et": "Sisemised süsteemid (nt kliendi andmebaas, failiserver, tööstusautomaatika juhtimine)",
                          "ru": null
                        },
                        "fields": [
                          {
                            "id": "internal-systems-used-comment",
                            "rows": 2,
                            "type": "textarea",
                            "title": {
                              "en": null,
                              "et": "Lisage kommentaar",
                              "ru": null
                            },
                            "maxLength": 1000
                          }
                        ]
                      },
                      {
                        "id": "external-systems-used",
                        "type": "checkbox",
                        "title": {
                          "en": null,
                          "et": "Välised süsteemid (nt veebileht, iseteenindus)",
                          "ru": null
                        },
                        "fields": [
                          {
                            "id": "external-systems-used-comment",
                            "rows": 2,
                            "type": "textarea",
                            "title": {
                              "en": null,
                              "et": "Lisage kommentaar",
                              "ru": null
                            },
                            "maxLength": 1000
                          }
                        ]
                      }
                    ],
                    "required": true
                  },
                  {
                    "id": "main-acitivity-interrupted",
                    "type": "radio",
                    "title": {
                      "en": null,
                      "et": "Kas Teie organisatsiooni põhitegevuse osutamine võib katkeda võrgu- ja infosüsteemide rikke korral?",
                      "ru": null
                    },
                    "fields": [
                      {
                        "title": {
                          "en": null,
                          "et": "Jah",
                          "ru": null
                        },
                        "value": "true"
                      },
                      {
                        "title": {
                          "en": null,
                          "et": "Ei",
                          "ru": null
                        },
                        "value": "false"
                      }
                    ],
                    "required": true,
                    "description": {
                      "en": null,
                      "et": "Valige üks järgnevatest vastustest",
                      "ru": null
                    }
                  },
                  {
                    "id": "external-services-depending-on",
                    "type": "textinput",
                    "title": {
                      "en": null,
                      "et": "Millistest teiste teenuseosutajate võrgu- ja infosüsteemidest Teie organisatsiooni teenused sõltuvad?",
                      "ru": null
                    },
                    "fields": [
                      {
                        "rows": 5,
                        "type": "textarea",
                        "maxLength": 1000
                      }
                    ],
                    "required": true
                  },
                  {
                    "id": "domains-and-subdomains",
                    "type": "textinput",
                    "title": {
                      "en": null,
                      "et": "Millised on Teie organisatsiooni võrgu- ja infosüsteemide domeenid ja alamdomeenid?",
                      "ru": null
                    },
                    "fields": [
                      {
                        "rows": 5,
                        "type": "textarea",
                        "maxLength": 1000
                      }
                    ],
                    "required": true
                  },
                  {
                    "id": "network-system-ip-addresses",
                    "type": "textinput",
                    "title": {
                      "en": null,
                      "et": "Millised on Teie organisatsiooni võrgu- ja infosüsteemide IP-d?",
                      "ru": null
                    },
                    "fields": [
                      {
                        "rows": 5,
                        "type": "textarea",
                        "maxLength": 1000
                      }
                    ],
                    "required": true,
                    "description": {
                      "en": null,
                      "et": "Palun märkige oma asutuse staatilised IP-aadressid või Teile eraldatud IP-de vahemik.",
                      "ru": null
                    }
                  },
                  {
                    "id": "main-cyber-risks",
                    "type": "fieldset",
                    "title": {
                      "en": null,
                      "et": "Millised on Teie organisatsiooni peamised küberriskid?",
                      "ru": null
                    },
                    "fields": [
                      {
                        "id": "internal-service-interruption",
                        "type": "checkbox",
                        "title": {
                          "en": null,
                          "et": "Teenuse katkestus (sisemised põhjused)",
                          "ru": null
                        },
                        "fields": [
                          {
                            "id": "internal-service-interruption-comment",
                            "rows": 2,
                            "type": "textarea",
                            "title": {
                              "en": null,
                              "et": "Lisage kommentaar",
                              "ru": null
                            },
                            "maxLength": 1000
                          }
                        ]
                      },
                      {
                        "id": "external-service-interruption",
                        "type": "checkbox",
                        "title": {
                          "en": null,
                          "et": "Teenuse katkestus (välised põhjused)",
                          "ru": null
                        },
                        "fields": [
                          {
                            "id": "external-service-interruption-comment",
                            "rows": 2,
                            "type": "textarea",
                            "title": {
                              "en": null,
                              "et": "Lisage kommentaar",
                              "ru": null
                            },
                            "maxLength": 1000
                          }
                        ]
                      },
                      {
                        "id": "internal-data-loss",
                        "type": "checkbox",
                        "title": {
                          "en": null,
                          "et": "Andmekadu (sisemised põhjused)",
                          "ru": null
                        },
                        "fields": [
                          {
                            "id": "internal-data-loss-comment",
                            "rows": 2,
                            "type": "textarea",
                            "title": {
                              "en": null,
                              "et": "Lisage kommentaar",
                              "ru": null
                            },
                            "maxLength": 1000
                          }
                        ]
                      },
                      {
                        "id": "external-data-loss",
                        "type": "checkbox",
                        "title": {
                          "en": null,
                          "et": "Andmekadu (välised põhjused)",
                          "ru": null
                        },
                        "fields": [
                          {
                            "id": "external-data-loss-comment",
                            "rows": 2,
                            "type": "textarea",
                            "title": {
                              "en": null,
                              "et": "Lisage kommentaar",
                              "ru": null
                            },
                            "maxLength": 1000
                          }
                        ]
                      },
                      {
                        "id": "cyberattack-ddos",
                        "type": "checkbox",
                        "title": {
                          "en": null,
                          "et": "Küberrünnak - DDoS",
                          "ru": null
                        },
                        "fields": [
                          {
                            "id": "cyberattack-ddos-comment",
                            "rows": 2,
                            "type": "textarea",
                            "title": {
                              "en": null,
                              "et": "Lisage kommentaar",
                              "ru": null
                            },
                            "maxLength": 1000
                          }
                        ]
                      },
                      {
                        "id": "cyberattack-deface",
                        "type": "checkbox",
                        "title": {
                          "en": null,
                          "et": "Küberrünnak - näotustamine",
                          "ru": null
                        },
                        "fields": [
                          {
                            "id": "cyberattack-deface-comment",
                            "rows": 2,
                            "type": "textarea",
                            "title": {
                              "en": null,
                              "et": "Lisage kommentaar",
                              "ru": null
                            },
                            "maxLength": 1000
                          }
                        ]
                      },
                      {
                        "id": "cyberattack-ransom",
                        "type": "checkbox",
                        "title": {
                          "en": null,
                          "et": "Küberrünnak - lunavara",
                          "ru": null
                        },
                        "fields": [
                          {
                            "id": "cyberattack-ransom-comment",
                            "rows": 2,
                            "type": "textarea",
                            "title": {
                              "en": null,
                              "et": "Lisage kommentaar",
                              "ru": null
                            },
                            "maxLength": 1000
                          }
                        ]
                      },
                      {
                        "id": "cyberattack-data-theft",
                        "type": "checkbox",
                        "title": {
                          "en": null,
                          "et": "Küberrünnak - andmevargus",
                          "ru": null
                        },
                        "fields": [
                          {
                            "id": "cyberattack-data-theft-comment",
                            "rows": 2,
                            "type": "textarea",
                            "title": {
                              "en": null,
                              "et": "Lisage kommentaar",
                              "ru": null
                            },
                            "maxLength": 1000
                          }
                        ]
                      },
                      {
                        "id": "cyberattack-malware",
                        "type": "checkbox",
                        "title": {
                          "en": null,
                          "et": "Küberrünnak - pahavaraga nakatumine",
                          "ru": null
                        },
                        "fields": [
                          {
                            "id": "cyberattack-malware-comment",
                            "rows": 2,
                            "type": "textarea",
                            "title": {
                              "en": null,
                              "et": "Lisage kommentaar",
                              "ru": null
                            },
                            "maxLength": 1000
                          }
                        ]
                      },
                      {
                        "id": "cyberrisk-other",
                        "type": "checkbox",
                        "title": {
                          "en": null,
                          "et": "Muud võimalused",
                          "ru": null
                        },
                        "fields": [
                          {
                            "id": "cyberrisk-other-comment",
                            "rows": 2,
                            "type": "textarea",
                            "title": {
                              "en": null,
                              "et": "Lisage kommentaar",
                              "ru": null
                            },
                            "maxLength": 1000
                          }
                        ]
                      }
                    ],
                    "required": true
                  },
                  {
                    "id": "cybersecurity-risk-analysis",
                    "type": "radio",
                    "title": {
                      "en": null,
                      "et": "Kas Teie organisatsioon on koostanud KüTS-i nõuetele vastava süsteemi riskianalüüsi?",
                      "ru": null
                    },
                    "fields": [
                      {
                        "title": {
                          "en": null,
                          "et": "Jah",
                          "ru": null
                        },
                        "value": "true",
                        "makeVisible": [
                          "main-cyberrisks-analysed"
                        ]
                      },
                      {
                        "title": {
                          "en": null,
                          "et": "Ei",
                          "ru": null
                        },
                        "value": "false"
                      },
                      {
                        "title": {
                          "en": null,
                          "et": "Pole kindel",
                          "ru": null
                        },
                        "value": "not-sure"
                      }
                    ],
                    "required": true,
                    "questions": [
                      {
                        "id": "main-cyberrisks-analysed",
                        "type": "radio",
                        "title": {
                          "en": null,
                          "et": "Kas Teie organisatsioon on oma süsteemi riskianalüüsis peamisi küberriske analüüsinud?",
                          "ru": null
                        },
                        "fields": [
                          {
                            "title": {
                              "en": null,
                              "et": "Jah",
                              "ru": null
                            },
                            "value": "true"
                          },
                          {
                            "title": {
                              "en": null,
                              "et": "Ei",
                              "ru": null
                            },
                            "value": "false"
                          }
                        ],
                        "required": true,
                        "description": {
                          "en": null,
                          "et": "Valige üks järgnevatest vastustest",
                          "ru": null
                        }
                      }
                    ],
                    "description": {
                      "en": null,
                      "et": "Riskianalüüs, milles tuleb esitada süsteemi turvalisust ja teenuse toimepidevust mõjutavate ning küberintsidendi tekkimist põhjustavate riskide loetelu, määrata riskide realiseerumisel tekkiva küberintsidendi tagajärgede raskusaste ning kirjeldada küberintsidendi lahendamise abinõusid",
                      "ru": null
                    }
                  }
                ],
                "description": {
                  "en": null,
                  "et": "Valige üks järgnevatest vastustest",
                  "ru": null
                }
              }
            ]
          },
          {
            "id": "resilience",
            "title": {
              "en": null,
              "et": "Organisatsiooni vastupanuvõime",
              "ru": null
            },
            "questions": [
              {
                "id": "important-data-copies",
                "type": "radio",
                "title": {
                  "en": null,
                  "et": "Kas Teie organisatsioonil on oma olulistest andmetest varukoopiad?",
                  "ru": null
                },
                "fields": [
                  {
                    "title": {
                      "en": null,
                      "et": "Jah",
                      "ru": null
                    },
                    "value": "true",
                    "makeVisible": [
                      "data-copies-located",
                      "last-copy-recovery-test"
                    ]
                  },
                  {
                    "title": {
                      "en": null,
                      "et": "Ei",
                      "ru": null
                    },
                    "value": "false"
                  }
                ],
                "required": true,
                "questions": [
                  {
                    "id": "data-copies-located",
                    "type": "radio",
                    "title": {
                      "en": null,
                      "et": "Kuidas varukoopiaid hoitakse?",
                      "ru": null
                    },
                    "fields": [
                      {
                        "title": {
                          "en": null,
                          "et": "Võrgu- ja infosüsteemiga samal andmekandjal",
                          "ru": null
                        },
                        "value": "same-carrier"
                      },
                      {
                        "title": {
                          "en": null,
                          "et": "Võrgu- ja infosüsteemist eraldi andmekandjal, kuid füüsiliselt samas asukohas",
                          "ru": null
                        },
                        "value": "separate-carrier-same-physical"
                      },
                      {
                        "title": {
                          "en": null,
                          "et": "Võrgu- ja infosüsteemist eraldi andmekandjal ning füüsiliselt teises asukohas",
                          "ru": null
                        },
                        "value": "separate-carrier-separate-physical"
                      },
                      {
                        "title": {
                          "en": null,
                          "et": "Muu lahendus",
                          "ru": null
                        },
                        "value": "other-solution"
                      }
                    ],
                    "required": true,
                    "description": {
                      "en": null,
                      "et": "Valige üks järgnevatest vastustest",
                      "ru": null
                    }
                  },
                  {
                    "id": "last-copy-recovery-test",
                    "type": "radio",
                    "title": {
                      "en": null,
                      "et": "Millal viimati planeeritud varukoopiate taastetest teostati ja dokumenteeriti?",
                      "ru": null
                    },
                    "fields": [
                      {
                        "title": {
                          "en": null,
                          "et": "Viimase aasta jooksul",
                          "ru": null
                        },
                        "value": "last-year"
                      },
                      {
                        "title": {
                          "en": null,
                          "et": "Viimase 2 aasta jooksul",
                          "ru": null
                        },
                        "value": "last-two-years"
                      },
                      {
                        "title": {
                          "en": null,
                          "et": "Kaugemas minevikus",
                          "ru": null
                        },
                        "value": "distant-past"
                      },
                      {
                        "title": {
                          "en": null,
                          "et": "Seda pole kunagi tehtud",
                          "ru": null
                        },
                        "value": "never"
                      }
                    ],
                    "required": true,
                    "description": {
                      "en": null,
                      "et": "Valige üks järgnevatest vastustest",
                      "ru": null
                    }
                  }
                ],
                "description": {
                  "en": null,
                  "et": "Valige üks järgnevatest vastustest",
                  "ru": null
                }
              },
              {
                "id": "system-logs-central-log-server",
                "type": "radio",
                "title": {
                  "en": null,
                  "et": "Kas võrgu- ja infosüsteemi logisid kogutakse kesksesse logiserverisse?",
                  "ru": null
                },
                "fields": [
                  {
                    "title": {
                      "en": null,
                      "et": "Jah",
                      "ru": null
                    },
                    "value": "true",
                    "makeVisible": [
                      "log-store-time",
                      "logs-monitored",
                      "how-logs-stored"
                    ]
                  },
                  {
                    "title": {
                      "en": null,
                      "et": "Ei",
                      "ru": null
                    },
                    "value": "false"
                  }
                ],
                "required": true,
                "questions": [
                  {
                    "id": "log-store-time",
                    "type": "radio",
                    "title": {
                      "en": null,
                      "et": "Kui pikalt kogutud logisid säilitatakse?",
                      "ru": null
                    },
                    "fields": [
                      {
                        "title": {
                          "en": null,
                          "et": "Kuni 1 kuu",
                          "ru": null
                        },
                        "value": "up-to-month"
                      },
                      {
                        "title": {
                          "en": null,
                          "et": "Kuni 3 kuud",
                          "ru": null
                        },
                        "value": "up-to-three-months"
                      },
                      {
                        "title": {
                          "en": null,
                          "et": "Kuni 6 kuud",
                          "ru": null
                        },
                        "value": "up-to-six-months"
                      },
                      {
                        "title": {
                          "en": null,
                          "et": "Enam kui 6 kuud",
                          "ru": null
                        },
                        "value": "more-than-six-months"
                      },
                      {
                        "title": {
                          "en": null,
                          "et": "Enam kui 12 kuud",
                          "ru": null
                        },
                        "value": "more-than-twelve-months"
                      }
                    ],
                    "required": true,
                    "description": {
                      "en": null,
                      "et": "Valige üks järgnevatest vastustest",
                      "ru": null
                    }
                  },
                  {
                    "id": "logs-monitored",
                    "type": "radio",
                    "title": {
                      "en": null,
                      "et": "Kas logisid monitooritakse?",
                      "ru": null
                    },
                    "fields": [
                      {
                        "title": {
                          "en": null,
                          "et": "Jah",
                          "ru": null
                        },
                        "value": "true"
                      },
                      {
                        "title": {
                          "en": null,
                          "et": "Ei",
                          "ru": null
                        },
                        "value": "false"
                      }
                    ],
                    "required": true,
                    "description": {
                      "en": null,
                      "et": "Valige üks järgnevatest vastustest",
                      "ru": null
                    }
                  },
                  {
                    "id": "how-logs-stored",
                    "type": "radio",
                    "title": {
                      "en": null,
                      "et": "Kuidas logisid hoitakse?",
                      "ru": null
                    },
                    "fields": [
                      {
                        "title": {
                          "en": null,
                          "et": "Võrgu- ja infosüsteemiga samal andmekandjal",
                          "ru": null
                        },
                        "value": "same-carrier"
                      },
                      {
                        "title": {
                          "en": null,
                          "et": "Võrgu- ja infosüsteemist eraldi andmekandjal, kuid füüsiliselt samas asukohas",
                          "ru": null
                        },
                        "value": "separate-carrier-same-physical"
                      },
                      {
                        "title": {
                          "en": null,
                          "et": "Võrgu- ja infosüsteemist eraldi andmekandjal ning füüsiliselt teises asukohas",
                          "ru": null
                        },
                        "value": "separate-carrier-separate-physical"
                      },
                      {
                        "title": {
                          "en": null,
                          "et": "Muu lahendus",
                          "ru": null
                        },
                        "value": "other-solution"
                      }
                    ],
                    "required": true,
                    "description": {
                      "en": null,
                      "et": "Valige üks järgnevatest vastustest",
                      "ru": null
                    }
                  }
                ],
                "description": {
                  "en": null,
                  "et": "Valige üks järgnevatest vastustest",
                  "ru": null
                }
              },
              {
                "id": "critical-infosystem-load-test",
                "type": "radio",
                "title": {
                  "en": null,
                  "et": "Kas Teie organisatsioonis on tehtud internetti avatud kriitilisele infosüsteemile koormusteste?",
                  "ru": null
                },
                "fields": [
                  {
                    "title": {
                      "en": null,
                      "et": "Jah",
                      "ru": null
                    },
                    "value": "true"
                  },
                  {
                    "title": {
                      "en": null,
                      "et": "Ei",
                      "ru": null
                    },
                    "value": "false"
                  }
                ],
                "required": true,
                "description": {
                  "en": null,
                  "et": "Valige üks järgnevatest vastustest",
                  "ru": null
                }
              },
              {
                "id": "pentests-performed",
                "type": "radio",
                "title": {
                  "en": null,
                  "et": "Kas Teie organisatsioonis on tehtud läbistusteste?",
                  "ru": null
                },
                "fields": [
                  {
                    "title": {
                      "en": null,
                      "et": "Jah",
                      "ru": null
                    },
                    "value": "true"
                  },
                  {
                    "title": {
                      "en": null,
                      "et": "Ei",
                      "ru": null
                    },
                    "value": "false"
                  }
                ],
                "required": true,
                "description": {
                  "en": null,
                  "et": "Valige üks järgnevatest vastustest",
                  "ru": null
                }
              },
              {
                "id": "most-important-infosec-solutions",
                "type": "fieldset",
                "title": {
                  "en": null,
                  "et": "Millised on Teie organisatsiooni olulisemad infoturbelahendused?",
                  "ru": null
                },
                "fields": [
                  {
                    "id": "firewall",
                    "type": "checkbox",
                    "title": {
                      "en": null,
                      "et": "Tulemüür",
                      "ru": null
                    },
                    "fields": [
                      {
                        "id": "firewall-comment",
                        "rows": 2,
                        "type": "textarea",
                        "title": {
                          "en": null,
                          "et": "Lisage kommentaar",
                          "ru": null
                        },
                        "maxLength": 1000
                      }
                    ]
                  },
                  {
                    "id": "anti-malware",
                    "type": "checkbox",
                    "title": {
                      "en": null,
                      "et": "Pahavara tõrje",
                      "ru": null
                    },
                    "fields": [
                      {
                        "id": "anti-malware-comment",
                        "rows": 2,
                        "type": "textarea",
                        "title": {
                          "en": null,
                          "et": "Lisage kommentaar",
                          "ru": null
                        },
                        "maxLength": 1000
                      }
                    ]
                  },
                  {
                    "id": "siem",
                    "type": "checkbox",
                    "title": {
                      "en": null,
                      "et": "SIEM",
                      "ru": null
                    },
                    "fields": [
                      {
                        "id": "siem-comment",
                        "rows": 2,
                        "type": "textarea",
                        "title": {
                          "en": null,
                          "et": "Lisage kommentaar",
                          "ru": null
                        },
                        "maxLength": 1000
                      }
                    ]
                  },
                  {
                    "id": "vpn",
                    "type": "checkbox",
                    "title": {
                      "en": null,
                      "et": "VPN",
                      "ru": null
                    },
                    "fields": [
                      {
                        "id": "vpn-comment",
                        "rows": 2,
                        "type": "textarea",
                        "title": {
                          "en": null,
                          "et": "Lisage kommentaar",
                          "ru": null
                        },
                        "maxLength": 1000
                      }
                    ]
                  },
                  {
                    "id": "ips-ids",
                    "type": "checkbox",
                    "title": {
                      "en": null,
                      "et": "IPS/IDS",
                      "ru": null
                    },
                    "fields": [
                      {
                        "id": "ips-ids-comment",
                        "rows": 2,
                        "type": "textarea",
                        "title": {
                          "en": null,
                          "et": "Lisage kommentaar",
                          "ru": null
                        },
                        "maxLength": 1000
                      }
                    ]
                  },
                  {
                    "id": "info-sec-solutions-other",
                    "type": "checkbox",
                    "title": {
                      "en": null,
                      "et": "Muud lahendused",
                      "ru": null
                    },
                    "fields": [
                      {
                        "id": "info-sec-solutions-other-comment",
                        "rows": 2,
                        "type": "textarea",
                        "title": {
                          "en": null,
                          "et": "Lisage kommentaar",
                          "ru": null
                        },
                        "maxLength": 1000
                      }
                    ]
                  }
                ],
                "required": true
              },
              {
                "id": "cybersecurity-training",
                "type": "radio",
                "title": {
                  "en": null,
                  "et": "Kas Teie organisatsioonis toimuvad küberturbekoolitused?",
                  "ru": null
                },
                "fields": [
                  {
                    "title": {
                      "en": null,
                      "et": "Ei ole toimunud",
                      "ru": null
                    },
                    "value": "has-not-taken-place"
                  },
                  {
                    "title": {
                      "en": null,
                      "et": "Ei toimu regulaarselt",
                      "ru": null
                    },
                    "value": "not-regularly"
                  },
                  {
                    "title": {
                      "en": null,
                      "et": "Kord poole aasta jooksul",
                      "ru": null
                    },
                    "value": "every-six-months"
                  },
                  {
                    "title": {
                      "en": null,
                      "et": "Kord aastas",
                      "ru": null
                    },
                    "value": "once-a-year"
                  },
                  {
                    "title": {
                      "en": null,
                      "et": "Harvemini kui kord aastas",
                      "ru": null
                    },
                    "value": "less-than-once-a-year"
                  }
                ],
                "required": true,
                "description": {
                  "en": null,
                  "et": "Valige üks järgnevatest vastustest",
                  "ru": null
                }
              }
            ]
          },
          {
            "id": "networking",
            "title": {
              "en": null,
              "et": "Võrgustatus",
              "ru": null
            },
            "questions": [
              {
                "id": "ria-notifications-recommendations",
                "type": "radio",
                "title": {
                  "en": null,
                  "et": "Kas Teie organisatsioon on tellinud RIA-lt ohuteavitusi ja soovitusi?",
                  "ru": null
                },
                "fields": [
                  {
                    "title": {
                      "en": null,
                      "et": "Jah",
                      "ru": null
                    },
                    "value": "true"
                  },
                  {
                    "title": {
                      "en": null,
                      "et": "Ei",
                      "ru": null
                    },
                    "value": "false",
                    "makeVisible": [
                      "want-ria-notifications-recommendations"
                    ]
                  }
                ],
                "required": true,
                "questions": [
                  {
                    "id": "want-ria-notifications-recommendations",
                    "type": "radio",
                    "title": {
                      "en": null,
                      "et": "Kas Teie organisatsioon soovib saada RIA-lt ohuteavitusi ja soovitusi? Valimisoleku korral palume lisada kommentaari lahtrisse oma e-posti aadress.",
                      "ru": null
                    },
                    "fields": [
                      {
                        "title": {
                          "en": null,
                          "et": "Jah",
                          "ru": null
                        },
                        "value": "true",
                        "fields": [
                          {
                            "id": "want-ria-notifications-recommendations-email",
                            "rows": 1,
                            "type": "email",
                            "title": {
                              "en": null,
                              "et": "Email",
                              "ru": null
                            },
                            "maxLength": 100
                          }
                        ]
                      },
                      {
                        "title": {
                          "en": null,
                          "et": "Ei",
                          "ru": null
                        },
                        "value": "false"
                      }
                    ],
                    "required": true,
                    "description": {
                      "en": null,
                      "et": "Valige üks järgnevatest vastustest",
                      "ru": null
                    }
                  }
                ],
                "description": {
                  "en": null,
                  "et": "Valige üks järgnevatest vastustest",
                  "ru": null
                }
              },
              {
                "id": "ria-events",
                "type": "radio",
                "title": {
                  "en": null,
                  "et": "Kas olete osalenud mõnel RIA korraldataval üritusel?",
                  "ru": null
                },
                "fields": [
                  {
                    "title": {
                      "en": null,
                      "et": "Jah",
                      "ru": null
                    },
                    "value": "true",
                    "makeVisible": [
                      "which-ria-event"
                    ]
                  },
                  {
                    "title": {
                      "en": null,
                      "et": "Ei",
                      "ru": null
                    },
                    "value": "false"
                  }
                ],
                "required": true,
                "questions": [
                  {
                    "id": "which-ria-event",
                    "type": "fieldset",
                    "title": {
                      "en": null,
                      "et": "Millisel RIA üritusel on Teie ettevõte osalenud?",
                      "ru": null
                    },
                    "fields": [
                      {
                        "id": "ria-infoday",
                        "type": "checkbox",
                        "title": {
                          "en": null,
                          "et": "RIA infopäev",
                          "ru": null
                        },
                        "fields": [
                          {
                            "id": "ria-infoday-comment",
                            "rows": 2,
                            "type": "textarea",
                            "title": {
                              "en": null,
                              "et": "Lisage kommentaar",
                              "ru": null
                            },
                            "maxLength": 1000
                          }
                        ]
                      },
                      {
                        "id": "kii-infoday",
                        "type": "checkbox",
                        "title": {
                          "en": null,
                          "et": "KII infopäev",
                          "ru": null
                        },
                        "fields": [
                          {
                            "id": "kii-infoday-comment",
                            "rows": 2,
                            "type": "textarea",
                            "title": {
                              "en": null,
                              "et": "Lisage kommentaar",
                              "ru": null
                            },
                            "maxLength": 1000
                          }
                        ]
                      },
                      {
                        "id": "other-event",
                        "type": "checkbox",
                        "title": {
                          "en": null,
                          "et": "Muud üritused",
                          "ru": null
                        },
                        "fields": [
                          {
                            "id": "other-event-comment",
                            "rows": 2,
                            "type": "textarea",
                            "title": {
                              "en": null,
                              "et": "Lisage kommentaar",
                              "ru": null
                            },
                            "maxLength": 1000
                          }
                        ]
                      }
                    ],
                    "required": true
                  }
                ],
                "description": {
                  "en": null,
                  "et": "Valige üks järgnevatest vastustest",
                  "ru": null
                }
              },
              {
                "id": "ria-event-ideas",
                "type": "textinput",
                "title": {
                  "en": null,
                  "et": "Millistel teemadel võiks RIA üritusi korraldada?",
                  "ru": null
                },
                "fields": [
                  {
                    "rows": 5,
                    "type": "textarea",
                    "maxLength": 1000
                  }
                ],
                "required": true
              },
              {
                "id": "share-experience",
                "type": "radio",
                "title": {
                  "en": null,
                  "et": "Kas olete nõus jagama teistele teenuseosutajatele oma kogemusi ja parimaid praktikaid? Valimisoleku korral palume lisada kommentaari lahtrisse oma e-posti aadress.",
                  "ru": null
                },
                "fields": [
                  {
                    "title": {
                      "en": null,
                      "et": "Jah",
                      "ru": null
                    },
                    "value": "true",
                    "fields": [
                      {
                        "id": "share-experience-email",
                        "rows": 1,
                        "type": "email",
                        "title": {
                          "en": null,
                          "et": "Email",
                          "ru": null
                        },
                        "maxLength": 100
                      }
                    ]
                  },
                  {
                    "title": {
                      "en": null,
                      "et": "Ei",
                      "ru": null
                    },
                    "value": "false"
                  }
                ],
                "required": true,
                "description": {
                  "en": null,
                  "et": "Valige üks järgnevatest vastustest",
                  "ru": null
                }
              }
            ]
          }
        ],
        "generalInfo": {
          "title": {
            "en": null,
            "et": "Üldinfo",
            "ru": null
          },
          "description": {
            "en": null,
            "et": "Elutähtsa teenuse osutaja (ETO) ja olulise teenuse osutaja (OTO) ülesandeks on tagada ühiskonna toimimise seisukohast mõju omavate teenuse toimepidevus. Teenuse järjepideva toimimise tagamiseks tuleb arvestada erinevate teenust mõjutavate riskidega, muuhulgas küberriskidega.<br> <br> Küberküpsuse hindamise teenuse eesmärk on pakkuda ülevaadet teie organisatsiooni küberturvalisuse hetkeseisust. Ülevaate saamiseks on teil võimalus täita allolev küberküpsuse enesehindamise küsimustik. Täidetud küsimustik on nähtav üksnes Riigi Infosüsteemi Ametile ning ettevõtte poolt volitatud ankeedi täitjatele (andmekaitsetingimustega saab tutvuda siin: <a href='https://www.eesti.ee/static/files/kyberkypsuse-hindamise-andmekaitsetingimused.pdf'>andmekaitsetingimused</a>).",
            "ru": null
          }
        }
      }
    }

  formAnswers: any = {
    "id":14,
    "created":"2023-05-18T10:38:04.879729",
    "name":"EID2016 TESTNUMBER",
    "deleted":false,
    "quiz_id":"kikk-quiz",
    "quiz_version":1,
    "reg_code":70006317,
    "answer_data":[
      {
        "id":"overview-employees-count",
        "value":"up-to-10"
      },
      {
        "id":"overview-computer-count",
        "value":"up-to-10"
      },
      {
        "id":"not-methodically-organized",
        "value":"false"
      },
      {
        "id":"iske",
        "value":"false"
      },
      {
        "id":"iso27001",
        "value":"true"
      },
      {
        "id":"eits",
        "value":null
      },
      {
        "id":"company-internal",
        "value":null
      },
      {
        "id":"other",
        "value":null
      },
      {
        "id":"not-methodically-organized-comment",
        "value":"kommentaar1"
      },
      {
        "id":"iske-comment",
        "value":null
      },
      {
        "id":"iso27001-comment",
        "value":"ISO kommentaar Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur porta, nisi vel eleifend sollicitudin, diam dui accumsan dui, ut dignissim velit urna nec purus. Cras bibendum rutrum nulla, ac convallis orci aliquam nec. Nullam rutrum ut turpis quis condimentum. Etiam elit dolor, scelerisque eget rutrum scelerisque, maximus vel leo. Cras pretium sagittis urna. In vitae risus eget mauris faucibus luctus sed a nisl. Cras non risus lobortis, pellentesque nulla ac, convallis metus."
      },
      {
        "id":"eits-comment",
        "value":null
      },
      {
        "id":"company-internal-comment",
        "value":null
      },
      {
        "id":"other-comment",
        "value":null
      },
      {
        "id":"security-contact-assigned",
        "value":"true"
      },
      {
        "id":"information-security-contacts-name",
        "value":""
      },
      {
        "id":"information-security-contacts-position",
        "value":""
      },
      {
        "id":"information-security-contacts-phone",
        "value":""
      },
      {
        "id":"information-security-contacts-email",
        "value":""
      },
      {
        "id":"information-security-set-contacts-name",
        "value":"Mari Maasikas"
      },
      {
        "id":"information-security-set-contacts-position",
        "value":"Ametnik"
      },
      {
        "id":"information-security-set-contacts-phone",
        "value":"555555444"
      },
      {
        "id":"information-security-set-contacts-email",
        "value":"ametnik@email.ee"
      },
      {
        "id":"info-systems-affect-activities",
        "value":"true"
      },
      {
        "id":"internal-systems-used",
        "value":"true"
      },
      {
        "id":"external-systems-used",
        "value":null
      },
      {
        "id":"internal-systems-used-comment",
        "value":"commentinternalsystems"
      },
      {
        "id":"external-systems-used-comment",
        "value":"commentexternalsystems"
      },
      {
        "id":"main-acitivity-interrupted",
        "value":"true"
      },
      {
        "id":"external-services-depending-on",
        "value":"Infosüsteemid 123"
      },
      {
        "id":"domains-and-subdomains",
        "value":"Domeenid ja alamdomeenid"
      },
      {
        "id":"network-system-ip-addresses",
        "value":"Ip1\nIp2"
      },
      {
        "id":"internal-service-interruption",
        "value":"true"
      },
      {
        "id":"external-service-interruption",
        "value":null
      },
      {
        "id":"internal-data-loss",
        "value":null
      },
      {
        "id":"external-data-loss",
        "value":null
      },
      {
        "id":"cyberattack-ddos",
        "value":null
      },
      {
        "id":"cyberattack-deface",
        "value":null
      },
      {
        "id":"cyberattack-ransom",
        "value":null
      },
      {
        "id":"cyberattack-data-theft",
        "value":null
      },
      {
        "id":"cyberattack-malware",
        "value":"true"
      },
      {
        "id":"cyberrisk-other",
        "value":null
      },
      {
        "id":"internal-service-interruption-comment",
        "value":"Katkestus"
      },
      {
        "id":"external-service-interruption-comment",
        "value":null
      },
      {
        "id":"internal-data-loss-comment",
        "value":null
      },
      {
        "id":"external-data-loss-comment",
        "value":null
      },
      {
        "id":"cyberattack-ddos-comment",
        "value":null
      },
      {
        "id":"cyberattack-deface-comment",
        "value":null
      },
      {
        "id":"cyberattack-ransom-comment",
        "value":null
      },
      {
        "id":"cyberattack-data-theft-comment",
        "value":null
      },
      {
        "id":"cyberattack-malware-comment",
        "value":"Küberrünnak"
      },
      {
        "id":"cyberrisk-other-comment",
        "value":null
      },
      {
        "id":"cybersecurity-risk-analysis",
        "value":"true"
      },
      {
        "id":"main-cyberrisks-analysed",
        "value":"true"
      },
      {
        "id":"important-data-copies",
        "value":"true"
      },
      {
        "id":"data-copies-located",
        "value":"separate-carrier-same-physical"
      },
      {
        "id":"last-copy-recovery-test",
        "value":"last-year"
      },
      {
        "id":"system-logs-central-log-server",
        "value":"true"
      },
      {
        "id":"log-store-time",
        "value":"up-to-month"
      },
      {
        "id":"logs-monitored",
        "value":"false"
      },
      {
        "id":"how-logs-stored",
        "value":"separate-carrier-same-physical"
      },
      {
        "id":"critical-infosystem-load-test",
        "value":"false"
      },
      {
        "id":"pentests-performed",
        "value":"false"
      },
      {
        "id":"firewall",
        "value":"true"
      },
      {
        "id":"anti-malware",
        "value":null
      },
      {
        "id":"siem",
        "value":null
      },
      {
        "id":"vpn",
        "value":null
      },
      {
        "id":"ips-ids",
        "value":null
      },
      {
        "id":"other",
        "value":null
      },
      {
        "id":"firewall-comment",
        "value":"Tulemüür"
      },
      {
        "id":"anti-malware-comment",
        "value":null
      },
      {
        "id":"siem-comment",
        "value":null
      },
      {
        "id":"vpn-comment",
        "value":null
      },
      {
        "id":"ips-ids-comment",
        "value":null
      },
      {
        "id":"cybersecurity-training",
        "value":"has-not-taken-place"
      },
      {
        "id":"ria-notifications-recommendations",
        "value":"false"
      },
      {
        "id":"want-ria-notifications-recommendations",
        "value":"true"
      },
      {
        "id":"want-ria-notifications-recommendations-email",
        "value":"notification@email.ee"
      },
      {
        "id":"ria-events",
        "value":"true"
      },
      {
        "id":"ria-infoday",
        "value":"true"
      },
      {
        "id":"kii-infoday",
        "value":"true"
      },
      {
        "id":"other-event",
        "value":null
      },
      {
        "id":"ria-infoday-comment",
        "value":"Infopäev"
      },
      {
        "id":"kii-infoday-comment",
        "value":"KII"
      },
      {
        "id":"other-event-comment",
        "value":null
      },
      {
        "id":"ria-event-ideas",
        "value":"RIA uued üritused"
      },
      {
        "id":"share-experience",
        "value":"true"
      },
      {
        "id":"share-experience-email",
        "value":"sharing@email.ee"
      }
    ],
    "personal_code":60001017869
  }

}
