const ICON_DATA = [
  {
    "key": "adrenaline_shot",
    "name": "Adrenaline Shot",
    "image": "images/adrenaline_shot.png",
    "hasImage": true,
    "baseCategory": null,
    "rarity": "Common",
    "type": "Quick Use",
    "value": 300,
    "foundIn": null,
    "weightKg": 0.2,
    "stackSize": 5,
    "craftBench": "med_station",
    "recyclesInto": {
      "chemicals": 1,
      "plastic_parts": 1
    },
    "salvagesInto": {
      "chemicals": 1
    },
    "recipe": {
      "chemicals": 3,
      "plastic_parts": 3
    },
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "advanced_arc_powercell",
    "name": "Advanced ARC Powercell",
    "image": "images/advanced_arc_powercell.png",
    "hasImage": true,
    "baseCategory": "recycle",
    "rarity": "Rare",
    "type": "Topside Material",
    "value": 640,
    "foundIn": "ARC",
    "weightKg": 0.5,
    "stackSize": 5,
    "craftBench": null,
    "recyclesInto": {
      "arc_powercell": 2
    },
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": "Recycle",
    "reasons": [
      {
        "type": "recycle",
        "itemId": "advanced_arc_powercell",
        "recycleComponentId": "arc_powercell",
        "recycleComponentName": "ARC Powercell",
        "chain": [
          {
            "action": "recycle",
            "itemId": "advanced_arc_powercell",
            "itemName": "Advanced ARC Powercell",
            "targetId": "arc_powercell",
            "targetName": "ARC Powercell"
          },
          {
            "action": "use_in_workshop",
            "itemId": "arc_powercell",
            "itemName": "ARC Powercell",
            "workshopStation": "refiner",
            "workshopLevel": "1"
          }
        ]
      }
    ]
  },
  {
    "key": "advanced_electrical_components",
    "name": "Advanced Electrical Components",
    "image": "images/advanced_electrical_components.png",
    "hasImage": true,
    "baseCategory": "keep",
    "rarity": "Rare",
    "type": "Refined Material",
    "value": 1750,
    "foundIn": "Electrical",
    "weightKg": 1,
    "stackSize": 5,
    "craftBench": "refiner",
    "recyclesInto": {
      "electrical_components": 1,
      "wires": 1
    },
    "salvagesInto": {
      "electrical_components": 1
    },
    "recipe": {
      "wires": 3,
      "electrical_components": 2
    },
    "quest": false,
    "workstations": {
      "gear_bench": [
        3
      ],
      "utility_station": [
        3
      ]
    },
    "hasExpedition": true,
    "expeditionPhases": [
      4
    ],
    "reasonSummary": "Keep • Workstations: Gear Bench T3, Utility Station T3 • Expedition project (phase 4)",
    "reasons": [
      {
        "type": "workshop",
        "itemId": "advanced_electrical_components",
        "workshopStation": "gear_bench",
        "workshopLevel": "3"
      },
      {
        "type": "workshop",
        "itemId": "advanced_electrical_components",
        "workshopStation": "utility_station",
        "workshopLevel": "3"
      },
      {
        "type": "project",
        "itemId": "advanced_electrical_components",
        "projectId": "expedition_project",
        "projectName": "Expedition Project",
        "projectPhase": 4
      }
    ]
  },
  {
    "key": "advanced_mechanical_components",
    "name": "Advanced Mechanical Components",
    "image": "images/advanced_mechanical_components.png",
    "hasImage": true,
    "baseCategory": "keep",
    "rarity": "Rare",
    "type": "Refined Material",
    "value": 1750,
    "foundIn": "Mechanical",
    "weightKg": 1,
    "stackSize": 5,
    "craftBench": "refiner",
    "recyclesInto": {
      "mechanical_components": 1,
      "wires": 1
    },
    "salvagesInto": {},
    "recipe": {
      "steel_spring": 2,
      "mechanical_components": 2
    },
    "quest": false,
    "workstations": {
      "gunsmith": [
        3
      ]
    },
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": "Keep • Workstations: Gunsmith T3",
    "reasons": [
      {
        "type": "workshop",
        "itemId": "advanced_mechanical_components",
        "workshopStation": "gunsmith",
        "workshopLevel": "3"
      }
    ]
  },
  {
    "key": "agave",
    "name": "Agave",
    "image": "images/agave.png",
    "hasImage": true,
    "baseCategory": "sell",
    "rarity": "Uncommon",
    "type": "Nature",
    "value": 1000,
    "foundIn": "Nature",
    "weightKg": 0.2,
    "stackSize": 10,
    "craftBench": null,
    "recyclesInto": {},
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": "Sell",
    "reasons": []
  },
  {
    "key": "air_freshener",
    "name": "Air Freshener",
    "image": "images/air_freshener.png",
    "hasImage": true,
    "baseCategory": "sell",
    "rarity": "Uncommon",
    "type": "Trinket",
    "value": 2000,
    "foundIn": "Mechanical",
    "weightKg": 0.3,
    "stackSize": 5,
    "craftBench": null,
    "recyclesInto": {},
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": "Sell",
    "reasons": []
  },
  {
    "key": "alarm_clock",
    "name": "Alarm Clock",
    "image": "images/alarm_clock.png",
    "hasImage": true,
    "baseCategory": "recycle",
    "rarity": "Rare",
    "type": "Recyclable",
    "value": 1000,
    "foundIn": "Residential",
    "weightKg": 2,
    "stackSize": 3,
    "craftBench": null,
    "recyclesInto": {
      "plastic_parts": 6,
      "processor": 1
    },
    "salvagesInto": {
      "processor": 1
    },
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": "Recycle",
    "reasons": [
      {
        "type": "recycle",
        "itemId": "alarm_clock",
        "recycleComponentId": "plastic_parts",
        "recycleComponentName": "Plastic Parts",
        "chain": [
          {
            "action": "recycle",
            "itemId": "alarm_clock",
            "itemName": "Alarm Clock",
            "targetId": "plastic_parts",
            "targetName": "Plastic Parts"
          },
          {
            "action": "use_in_workshop",
            "itemId": "plastic_parts",
            "itemName": "Plastic Parts",
            "workshopStation": "gear_bench",
            "workshopLevel": "1"
          }
        ]
      }
    ]
  },
  {
    "key": "angled_grip_i",
    "name": "Angled Grip I",
    "image": "images/angled_grip_i.png",
    "hasImage": true,
    "baseCategory": null,
    "rarity": "Common",
    "type": "Modification",
    "value": 640,
    "foundIn": null,
    "weightKg": 0.25,
    "stackSize": null,
    "craftBench": "weapon_bench",
    "recyclesInto": {},
    "salvagesInto": {},
    "recipe": {
      "plastic_parts": 6,
      "duct_tape": 1
    },
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "angled_grip_ii",
    "name": "Angled Grip II",
    "image": "images/angled_grip_ii.png",
    "hasImage": true,
    "baseCategory": null,
    "rarity": "Uncommon",
    "type": "Modification",
    "value": 2000,
    "foundIn": null,
    "weightKg": 0.5,
    "stackSize": null,
    "craftBench": "weapon_bench",
    "recyclesInto": {
      "mechanical_components": 1,
      "duct_tape": 1
    },
    "salvagesInto": {},
    "recipe": {
      "mechanical_components": 2,
      "duct_tape": 3
    },
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "angled_grip_iii",
    "name": "Angled Grip III",
    "image": "images/angled_grip_iii.png",
    "hasImage": true,
    "baseCategory": null,
    "rarity": "Rare",
    "type": "Modification",
    "value": 5000,
    "foundIn": null,
    "weightKg": 0.75,
    "stackSize": null,
    "craftBench": null,
    "recyclesInto": {
      "mod_components": 1,
      "duct_tape": 2
    },
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "antiseptic",
    "name": "Antiseptic",
    "image": "images/antiseptic.png",
    "hasImage": true,
    "baseCategory": "keep",
    "rarity": "Rare",
    "type": "Refined Material",
    "value": 1000,
    "foundIn": "Medical",
    "weightKg": 1,
    "stackSize": 5,
    "craftBench": "refiner",
    "recyclesInto": {
      "chemicals": 10
    },
    "salvagesInto": {},
    "recipe": {
      "chemicals": 10,
      "great_mullein": 2
    },
    "quest": true,
    "workstations": {
      "medical_lab": [
        3
      ]
    },
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": "Keep • Quest item • Workstations: Medical Lab T3",
    "reasons": [
      {
        "type": "quest",
        "itemId": "antiseptic",
        "questId": "ss10c",
        "questName": "Doctor's Orders"
      },
      {
        "type": "workshop",
        "itemId": "antiseptic",
        "workshopStation": "medical_lab",
        "workshopLevel": "3"
      }
    ]
  },
  {
    "key": "anvil_blueprint",
    "name": "Anvil Blueprint",
    "image": "images/anvil_blueprint.png",
    "hasImage": true,
    "baseCategory": null,
    "rarity": "Legendary",
    "type": "Blueprint",
    "value": 5000,
    "foundIn": null,
    "weightKg": 0,
    "stackSize": null,
    "craftBench": null,
    "recyclesInto": {},
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "anvil_i",
    "name": "Anvil I",
    "image": "images/anvil_i.png",
    "hasImage": false,
    "baseCategory": null,
    "rarity": "Uncommon",
    "type": "Hand Cannon",
    "value": 5000,
    "foundIn": null,
    "weightKg": 5,
    "stackSize": null,
    "craftBench": "weapon_bench",
    "recyclesInto": {
      "mechanical_components": 2,
      "simple_gun_parts": 2
    },
    "salvagesInto": {
      "simple_gun_parts": 2
    },
    "recipe": {
      "mechanical_components": 5,
      "simple_gun_parts": 6
    },
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "anvil_ii",
    "name": "Anvil II",
    "image": "images/anvil_ii.png",
    "hasImage": false,
    "baseCategory": null,
    "rarity": "Uncommon",
    "type": "Hand Cannon",
    "value": 7000,
    "foundIn": null,
    "weightKg": 5,
    "stackSize": null,
    "craftBench": null,
    "recyclesInto": {
      "mechanical_components": 3,
      "simple_gun_parts": 3
    },
    "salvagesInto": {
      "simple_gun_parts": 3
    },
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "anvil_iii",
    "name": "Anvil III",
    "image": "images/anvil_iii.png",
    "hasImage": false,
    "baseCategory": null,
    "rarity": "Uncommon",
    "type": "Hand Cannon",
    "value": 10000,
    "foundIn": null,
    "weightKg": 5,
    "stackSize": null,
    "craftBench": null,
    "recyclesInto": {
      "mechanical_components": 4,
      "simple_gun_parts": 4
    },
    "salvagesInto": {
      "simple_gun_parts": 4
    },
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "anvil_iv",
    "name": "Anvil IV",
    "image": "images/anvil_iv.png",
    "hasImage": false,
    "baseCategory": null,
    "rarity": "Uncommon",
    "type": "Hand Cannon",
    "value": 13000,
    "foundIn": null,
    "weightKg": 5,
    "stackSize": null,
    "craftBench": null,
    "recyclesInto": {
      "mechanical_components": 5,
      "simple_gun_parts": 5
    },
    "salvagesInto": {
      "simple_gun_parts": 5
    },
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "anvil_splitter",
    "name": "Anvil Splitter",
    "image": "images/anvil_splitter.png",
    "hasImage": true,
    "baseCategory": null,
    "rarity": "Legendary",
    "type": "Modification",
    "value": 7000,
    "foundIn": null,
    "weightKg": 0.5,
    "stackSize": null,
    "craftBench": null,
    "recyclesInto": {
      "mod_components": 1,
      "processor": 1
    },
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "apricot",
    "name": "Apricot",
    "image": "images/apricot.png",
    "hasImage": true,
    "baseCategory": "keep",
    "rarity": "Uncommon",
    "type": "Nature",
    "value": 640,
    "foundIn": "Nature",
    "weightKg": 0.2,
    "stackSize": 10,
    "craftBench": null,
    "recyclesInto": {},
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {
      "scrappy": [
        3,
        5
      ]
    },
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": "Keep • Workstations: Scrappy T3,5",
    "reasons": [
      {
        "type": "workshop",
        "itemId": "apricot",
        "workshopStation": "scrappy",
        "workshopLevel": "3"
      },
      {
        "type": "workshop",
        "itemId": "apricot",
        "workshopStation": "scrappy",
        "workshopLevel": "5"
      }
    ]
  },
  {
    "key": "arc_alloy",
    "name": "ARC Alloy",
    "image": "images/arc_alloy.png",
    "hasImage": true,
    "baseCategory": "keep",
    "rarity": "Uncommon",
    "type": "Topside Material",
    "value": 200,
    "foundIn": "ARC",
    "weightKg": 0.25,
    "stackSize": 15,
    "craftBench": null,
    "recyclesInto": {
      "metal_parts": 2
    },
    "salvagesInto": {},
    "recipe": {},
    "quest": true,
    "workstations": {
      "medical_lab": [
        1
      ],
      "explosives_station": [
        1
      ],
      "utility_station": [
        1
      ]
    },
    "hasExpedition": true,
    "expeditionPhases": [
      1
    ],
    "reasonSummary": "Keep • Quest item • Workstations: Explosives Station T1, Medical Lab T1, Utility Station T1 • Expedition project (phase 1)",
    "reasons": [
      {
        "type": "quest",
        "itemId": "arc_alloy",
        "questId": "ss2",
        "questName": "Clearer Skies"
      },
      {
        "type": "workshop",
        "itemId": "arc_alloy",
        "workshopStation": "medical_lab",
        "workshopLevel": "1"
      },
      {
        "type": "workshop",
        "itemId": "arc_alloy",
        "workshopStation": "explosives_station",
        "workshopLevel": "1"
      },
      {
        "type": "workshop",
        "itemId": "arc_alloy",
        "workshopStation": "utility_station",
        "workshopLevel": "1"
      },
      {
        "type": "project",
        "itemId": "arc_alloy",
        "projectId": "expedition_project",
        "projectName": "Expedition Project",
        "projectPhase": 1
      }
    ]
  },
  {
    "key": "arc_circuitry",
    "name": "ARC Circuitry",
    "image": "images/arc_circuitry.png",
    "hasImage": true,
    "baseCategory": "keep",
    "rarity": "Rare",
    "type": "Topside Material",
    "value": 1000,
    "foundIn": "ARC",
    "weightKg": 0.3,
    "stackSize": 5,
    "craftBench": "refiner",
    "recyclesInto": {
      "arc_alloy": 2
    },
    "salvagesInto": {},
    "recipe": {
      "arc_alloy": 8
    },
    "quest": false,
    "workstations": {
      "refiner": [
        3
      ]
    },
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": "Keep • Workstations: Refiner T3",
    "reasons": [
      {
        "type": "workshop",
        "itemId": "arc_circuitry",
        "workshopStation": "refiner",
        "workshopLevel": "3"
      }
    ]
  },
  {
    "key": "arc_coolant",
    "name": "ARC Coolant",
    "image": "images/arc_coolant.png",
    "hasImage": true,
    "baseCategory": "recycle",
    "rarity": "Rare",
    "type": "Recyclable",
    "value": 1000,
    "foundIn": "ARC",
    "weightKg": 1,
    "stackSize": 3,
    "craftBench": null,
    "recyclesInto": {
      "chemicals": 16
    },
    "salvagesInto": {
      "chemicals": 9
    },
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": "Recycle",
    "reasons": [
      {
        "type": "recycle",
        "itemId": "arc_coolant",
        "recycleComponentId": "chemicals",
        "recycleComponentName": "Chemicals",
        "chain": [
          {
            "action": "recycle",
            "itemId": "arc_coolant",
            "itemName": "ARC Coolant",
            "targetId": "chemicals",
            "targetName": "Chemicals"
          },
          {
            "action": "use_in_workshop",
            "itemId": "chemicals",
            "itemName": "Chemicals",
            "workshopStation": "explosives_station",
            "workshopLevel": "1"
          }
        ]
      }
    ]
  },
  {
    "key": "arc_flex_rubber",
    "name": "ARC Flex Rubber",
    "image": "images/arc_flex_rubber.png",
    "hasImage": true,
    "baseCategory": "recycle",
    "rarity": "Rare",
    "type": "Recyclable",
    "value": 1000,
    "foundIn": "ARC",
    "weightKg": 1,
    "stackSize": 3,
    "craftBench": null,
    "recyclesInto": {
      "rubber_parts": 16
    },
    "salvagesInto": {
      "rubber_parts": 9
    },
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": "Recycle",
    "reasons": [
      {
        "type": "recycle",
        "itemId": "arc_flex_rubber",
        "recycleComponentId": "rubber_parts",
        "recycleComponentName": "Rubber Parts",
        "chain": [
          {
            "action": "recycle",
            "itemId": "arc_flex_rubber",
            "itemName": "ARC Flex Rubber",
            "targetId": "rubber_parts",
            "targetName": "Rubber Parts"
          },
          {
            "action": "use_in_workshop",
            "itemId": "rubber_parts",
            "itemName": "Rubber Parts",
            "workshopStation": "gunsmith",
            "workshopLevel": "1"
          }
        ]
      }
    ]
  },
  {
    "key": "arc_motion_core",
    "name": "ARC Motion Core",
    "image": "images/arc_motion_core.png",
    "hasImage": true,
    "baseCategory": "keep",
    "rarity": "Rare",
    "type": "Topside Material",
    "value": 1000,
    "foundIn": "ARC",
    "weightKg": 0.3,
    "stackSize": 5,
    "craftBench": "refiner",
    "recyclesInto": {
      "arc_alloy": 2
    },
    "salvagesInto": {},
    "recipe": {
      "arc_alloy": 8
    },
    "quest": false,
    "workstations": {
      "refiner": [
        2
      ]
    },
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": "Keep • Workstations: Refiner T2  • Wolfpack crafts",
    "reasons": [
      {
        "type": "workshop",
        "itemId": "arc_motion_core",
        "workshopStation": "refiner",
        "workshopLevel": "2"
      }
    ]
  },
  {
    "key": "arc_performance_steel",
    "name": "ARC Performance Steel",
    "image": "images/arc_performance_steel.png",
    "hasImage": true,
    "baseCategory": "recycle",
    "rarity": "Rare",
    "type": "Recyclable",
    "value": 1000,
    "foundIn": "ARC",
    "weightKg": 1,
    "stackSize": 3,
    "craftBench": null,
    "recyclesInto": {
      "metal_parts": 12
    },
    "salvagesInto": {
      "metal_parts": 7
    },
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": "Recycle",
    "reasons": [
      {
        "type": "recycle",
        "itemId": "arc_performance_steel",
        "recycleComponentId": "metal_parts",
        "recycleComponentName": "Metal Parts",
        "chain": [
          {
            "action": "recycle",
            "itemId": "arc_performance_steel",
            "itemName": "ARC Performance Steel",
            "targetId": "metal_parts",
            "targetName": "Metal Parts"
          },
          {
            "action": "use_in_workshop",
            "itemId": "metal_parts",
            "itemName": "Metal Parts",
            "workshopStation": "gunsmith",
            "workshopLevel": "1"
          }
        ]
      }
    ]
  },
  {
    "key": "arc_powercell",
    "name": "ARC Powercell",
    "image": "images/arc_powercell.png",
    "hasImage": true,
    "baseCategory": "keep",
    "rarity": "Common",
    "type": "Topside Material",
    "value": 270,
    "foundIn": "ARC",
    "weightKg": 0.5,
    "stackSize": 5,
    "craftBench": null,
    "recyclesInto": {},
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {
      "refiner": [
        1
      ]
    },
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": "Keep • Workstations: Refiner T1",
    "reasons": [
      {
        "type": "workshop",
        "itemId": "arc_powercell",
        "workshopStation": "refiner",
        "workshopLevel": "1"
      }
    ]
  },
  {
    "key": "arc_synthetic_resin",
    "name": "ARC Synthetic Resin",
    "image": "images/arc_synthetic_resin.png",
    "hasImage": true,
    "baseCategory": "recycle",
    "rarity": "Rare",
    "type": "Recyclable",
    "value": 1000,
    "foundIn": "ARC",
    "weightKg": 1,
    "stackSize": 3,
    "craftBench": null,
    "recyclesInto": {
      "plastic_parts": 14
    },
    "salvagesInto": {
      "plastic_parts": 8
    },
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": "Recycle",
    "reasons": [
      {
        "type": "recycle",
        "itemId": "arc_synthetic_resin",
        "recycleComponentId": "plastic_parts",
        "recycleComponentName": "Plastic Parts",
        "chain": [
          {
            "action": "recycle",
            "itemId": "arc_synthetic_resin",
            "itemName": "ARC Synthetic Resin",
            "targetId": "plastic_parts",
            "targetName": "Plastic Parts"
          },
          {
            "action": "use_in_workshop",
            "itemId": "plastic_parts",
            "itemName": "Plastic Parts",
            "workshopStation": "gear_bench",
            "workshopLevel": "1"
          }
        ]
      }
    ]
  },
  {
    "key": "arc_thermo_lining",
    "name": "ARC Thermo Lining",
    "image": "images/arc_thermo_lining.png",
    "hasImage": true,
    "baseCategory": "recycle",
    "rarity": "Rare",
    "type": "Recyclable",
    "value": 1000,
    "foundIn": "ARC",
    "weightKg": 1,
    "stackSize": 3,
    "craftBench": null,
    "recyclesInto": {
      "fabric": 16
    },
    "salvagesInto": {
      "fabric": 9
    },
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": "Recycle",
    "reasons": [
      {
        "type": "recycle",
        "itemId": "arc_thermo_lining",
        "recycleComponentId": "fabric",
        "recycleComponentName": "Fabric",
        "chain": [
          {
            "action": "recycle",
            "itemId": "arc_thermo_lining",
            "itemName": "ARC Thermo Lining",
            "targetId": "fabric",
            "targetName": "Fabric"
          },
          {
            "action": "use_in_workshop",
            "itemId": "fabric",
            "itemName": "Fabric",
            "workshopStation": "gear_bench",
            "workshopLevel": "1"
          }
        ]
      }
    ]
  },
  {
    "key": "arpeggio_i",
    "name": "Arpeggio I",
    "image": "images/arpeggio_i.png",
    "hasImage": false,
    "baseCategory": null,
    "rarity": "Uncommon",
    "type": "Assault Rifle",
    "value": 5500,
    "foundIn": null,
    "weightKg": 7,
    "stackSize": null,
    "craftBench": "weapon_bench",
    "recyclesInto": {},
    "salvagesInto": {},
    "recipe": {
      "mechanical_components": 6,
      "simple_gun_parts": 6
    },
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "arpeggio_ii",
    "name": "Arpeggio II",
    "image": "images/arpeggio_ii.png",
    "hasImage": false,
    "baseCategory": null,
    "rarity": "Uncommon",
    "type": "Assault Rifle",
    "value": 8000,
    "foundIn": null,
    "weightKg": 7,
    "stackSize": null,
    "craftBench": "weapon_bench",
    "recyclesInto": {},
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "arpeggio_iii",
    "name": "Arpeggio III",
    "image": "images/arpeggio_iii.png",
    "hasImage": false,
    "baseCategory": null,
    "rarity": "Uncommon",
    "type": "Assault Rifle",
    "value": 11500,
    "foundIn": null,
    "weightKg": 7,
    "stackSize": null,
    "craftBench": "weapon_bench",
    "recyclesInto": {},
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "arpeggio_iv",
    "name": "Arpeggio IV",
    "image": "images/arpeggio_iv.png",
    "hasImage": false,
    "baseCategory": null,
    "rarity": "Uncommon",
    "type": "Assault Rifle",
    "value": 15000,
    "foundIn": null,
    "weightKg": 7,
    "stackSize": null,
    "craftBench": "weapon_bench",
    "recyclesInto": {
      "mechanical_components": 5,
      "simple_gun_parts": 5
    },
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "assorted_seeds",
    "name": "Assorted Seeds",
    "image": "images/assorted_seeds.png",
    "hasImage": true,
    "baseCategory": "sell",
    "rarity": "Common",
    "type": "Nature",
    "value": 100,
    "foundIn": "Nature",
    "weightKg": 0.05,
    "stackSize": 100,
    "craftBench": null,
    "recyclesInto": {},
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": "Sell",
    "reasons": []
  },
  {
    "key": "backpack_black_hiker_color",
    "name": "Backpack (Black Hiker Color)",
    "image": "images/backpack_black_hiker_color.png",
    "hasImage": false,
    "baseCategory": null,
    "rarity": "Common",
    "type": "Cosmetic",
    "value": null,
    "foundIn": null,
    "weightKg": null,
    "stackSize": null,
    "craftBench": null,
    "recyclesInto": {},
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "banana",
    "name": "Banana",
    "image": "images/banana.png",
    "hasImage": true,
    "baseCategory": null,
    "rarity": "Common",
    "type": "Backpack Charm",
    "value": null,
    "foundIn": null,
    "weightKg": null,
    "stackSize": null,
    "craftBench": null,
    "recyclesInto": {},
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "bandage",
    "name": "Bandage",
    "image": "images/bandage.png",
    "hasImage": true,
    "baseCategory": null,
    "rarity": "Common",
    "type": "Quick Use",
    "value": 250,
    "foundIn": null,
    "weightKg": 0.1,
    "stackSize": 5,
    "craftBench": [
      "workbench",
      "med_station"
    ],
    "recyclesInto": {
      "fabric": 2
    },
    "salvagesInto": {},
    "recipe": {
      "fabric": 5
    },
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "barricade_kit",
    "name": "Barricade Kit",
    "image": "images/barricade_kit.png",
    "hasImage": true,
    "baseCategory": null,
    "rarity": "Uncommon",
    "type": "Quick Use",
    "value": 640,
    "foundIn": null,
    "weightKg": 0.4,
    "stackSize": 3,
    "craftBench": "utility_bench",
    "recyclesInto": {
      "metal_parts": 4
    },
    "salvagesInto": {},
    "recipe": {
      "mechanical_components": 1
    },
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "barricade_kit_blueprint",
    "name": "Barricade Kit Blueprint",
    "image": "images/barricade_kit_blueprint.png",
    "hasImage": false,
    "baseCategory": null,
    "rarity": "Legendary",
    "type": "Blueprint",
    "value": 5000,
    "foundIn": null,
    "weightKg": 0,
    "stackSize": null,
    "craftBench": null,
    "recyclesInto": {},
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "bastion_cell",
    "name": "Bastion Cell",
    "image": "images/bastion_cell.png",
    "hasImage": true,
    "baseCategory": "keep",
    "rarity": "Epic",
    "type": "Recyclable",
    "value": 5000,
    "foundIn": "ARC",
    "weightKg": 1,
    "stackSize": 3,
    "craftBench": null,
    "recyclesInto": {
      "arc_alloy": 2,
      "advanced_mechanical_components": 2
    },
    "salvagesInto": {
      "advanced_mechanical_components": 2
    },
    "recipe": {},
    "quest": false,
    "workstations": {
      "gear_bench": [
        3
      ]
    },
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": "Keep • Workstations: Gear Bench T3",
    "reasons": [
      {
        "type": "workshop",
        "itemId": "bastion_cell",
        "workshopStation": "gear_bench",
        "workshopLevel": "3"
      }
    ]
  },
  {
    "key": "battery",
    "name": "Battery",
    "image": "images/battery.png",
    "hasImage": true,
    "baseCategory": "keep",
    "rarity": "Uncommon",
    "type": "Topside Material",
    "value": 250,
    "foundIn": "Technological, Electrical",
    "weightKg": 0.25,
    "stackSize": 15,
    "craftBench": null,
    "recyclesInto": {
      "metal_parts": 2
    },
    "salvagesInto": {
      "metal_parts": 1
    },
    "recipe": {},
    "quest": true,
    "workstations": {},
    "hasExpedition": true,
    "expeditionPhases": [
      3
    ],
    "reasonSummary": "Keep • Quest item • Expedition project (phase 3)",
    "reasons": [
      {
        "type": "quest",
        "itemId": "battery",
        "questId": "ss10y",
        "questName": "After Rain Comes"
      },
      {
        "type": "quest",
        "itemId": "battery",
        "questId": "ss3",
        "questName": "Trash Into Treasure"
      },
      {
        "type": "project",
        "itemId": "battery",
        "projectId": "expedition_project",
        "projectName": "Expedition Project",
        "projectPhase": 3
      }
    ]
  },
  {
    "key": "bettina_blueprint",
    "name": "Bettina Blueprint",
    "image": "images/bettina_blueprint.png",
    "hasImage": true,
    "baseCategory": null,
    "rarity": "Legendary",
    "type": "Blueprint",
    "value": 5000,
    "foundIn": null,
    "weightKg": 0,
    "stackSize": null,
    "craftBench": null,
    "recyclesInto": {},
    "salvagesInto": {},
    "recipe": {
      "advanced_mechanical_components": 3,
      "heavy_gun_parts": 3,
      "canister": 3
    },
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "bettina_i",
    "name": "Bettina I",
    "image": "images/bettina_i.png",
    "hasImage": false,
    "baseCategory": null,
    "rarity": "Epic",
    "type": "Assault Rifle",
    "value": 8000,
    "foundIn": null,
    "weightKg": 11,
    "stackSize": null,
    "craftBench": "weapon_bench",
    "recyclesInto": {},
    "salvagesInto": {},
    "recipe": {
      "advanced_mechanical_components": 3,
      "heavy_gun_parts": 3,
      "canister": 3
    },
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "bettina_ii",
    "name": "Bettina II",
    "image": "images/bettina_ii.png",
    "hasImage": false,
    "baseCategory": null,
    "rarity": "Epic",
    "type": "Assault Rifle",
    "value": 11000,
    "foundIn": null,
    "weightKg": 11,
    "stackSize": null,
    "craftBench": "weapon_bench",
    "recyclesInto": {},
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "bettina_iii",
    "name": "Bettina III",
    "image": "images/bettina_iii.png",
    "hasImage": false,
    "baseCategory": null,
    "rarity": "Epic",
    "type": "Assault Rifle",
    "value": 14000,
    "foundIn": null,
    "weightKg": 11,
    "stackSize": null,
    "craftBench": "weapon_bench",
    "recyclesInto": {},
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "bettina_iv",
    "name": "Bettina IV",
    "image": "images/bettina_iv.png",
    "hasImage": false,
    "baseCategory": null,
    "rarity": "Epic",
    "type": "Assault Rifle",
    "value": 17000,
    "foundIn": null,
    "weightKg": 11,
    "stackSize": null,
    "craftBench": "weapon_bench",
    "recyclesInto": {},
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "bicycle_pump",
    "name": "Bicycle Pump",
    "image": "images/bicycle_pump.png",
    "hasImage": true,
    "baseCategory": "recycle",
    "rarity": "Rare",
    "type": "Recyclable",
    "value": 2000,
    "foundIn": "Residential",
    "weightKg": 3,
    "stackSize": 3,
    "craftBench": null,
    "recyclesInto": {
      "canister": 4,
      "metal_parts": 10
    },
    "salvagesInto": {
      "canister": 3
    },
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": "Recycle",
    "reasons": [
      {
        "type": "recycle",
        "itemId": "bicycle_pump",
        "recycleComponentId": "metal_parts",
        "recycleComponentName": "Metal Parts",
        "chain": [
          {
            "action": "recycle",
            "itemId": "bicycle_pump",
            "itemName": "Bicycle Pump",
            "targetId": "metal_parts",
            "targetName": "Metal Parts"
          },
          {
            "action": "use_in_workshop",
            "itemId": "metal_parts",
            "itemName": "Metal Parts",
            "workshopStation": "gunsmith",
            "workshopLevel": "1"
          }
        ]
      }
    ]
  },
  {
    "key": "binoculars",
    "name": "Binoculars",
    "image": "images/binoculars.png",
    "hasImage": true,
    "baseCategory": null,
    "rarity": "Common",
    "type": "Quick Use",
    "value": 640,
    "foundIn": null,
    "weightKg": 0.5,
    "stackSize": null,
    "craftBench": "utility_bench",
    "recyclesInto": {
      "rubber_parts": 2,
      "plastic_parts": 4
    },
    "salvagesInto": {},
    "recipe": {
      "plastic_parts": 8,
      "rubber_parts": 4
    },
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "blaze_grenade",
    "name": "Blaze Grenade",
    "image": "images/blaze_grenade.png",
    "hasImage": false,
    "baseCategory": null,
    "rarity": "Rare",
    "type": "Quick Use",
    "value": 1600,
    "foundIn": null,
    "weightKg": 0.2,
    "stackSize": 5,
    "craftBench": null,
    "recyclesInto": {
      "oil": 2,
      "metal_parts": 4
    },
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "blaze_grenade_blueprint",
    "name": "Blaze Grenade Blueprint",
    "image": "images/blaze_grenade_blueprint.png",
    "hasImage": false,
    "baseCategory": null,
    "rarity": "Legendary",
    "type": "Blueprint",
    "value": 5000,
    "foundIn": null,
    "weightKg": 0,
    "stackSize": null,
    "craftBench": null,
    "recyclesInto": {},
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "blaze_grenade_trap",
    "name": "Blaze Grenade Trap",
    "image": "images/blaze_grenade_trap.png",
    "hasImage": true,
    "baseCategory": null,
    "rarity": "Rare",
    "type": "Quick Use",
    "value": 1000,
    "foundIn": null,
    "weightKg": 0.3,
    "stackSize": 3,
    "craftBench": null,
    "recyclesInto": {},
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "bloated_tuna_can",
    "name": "Bloated Tuna Can",
    "image": "images/bloated_tuna_can.png",
    "hasImage": true,
    "baseCategory": "sell",
    "rarity": "Common",
    "type": "Trinket",
    "value": 1000,
    "foundIn": "Residential, Commercial",
    "weightKg": 0.2,
    "stackSize": 15,
    "craftBench": null,
    "recyclesInto": {},
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": "Sell",
    "reasons": []
  },
  {
    "key": "blue_gate_communication_tower_key",
    "name": "Blue Gate Communication Tower Key",
    "image": "images/blue_gate_communication_tower_key.png",
    "hasImage": false,
    "baseCategory": null,
    "rarity": "Rare",
    "type": "Key",
    "value": 100,
    "foundIn": null,
    "weightKg": 0.25,
    "stackSize": 1,
    "craftBench": null,
    "recyclesInto": {},
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "blue_gate_confiscation_room_key",
    "name": "Blue Gate Confiscation Room Key",
    "image": "images/blue_gate_confiscation_room_key.png",
    "hasImage": true,
    "baseCategory": null,
    "rarity": "Epic",
    "type": "Key",
    "value": 100,
    "foundIn": null,
    "weightKg": 0.25,
    "stackSize": null,
    "craftBench": null,
    "recyclesInto": {},
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "blue_light_stick",
    "name": "Blue Light Stick",
    "image": "images/blue_light_stick.png",
    "hasImage": true,
    "baseCategory": null,
    "rarity": "Common",
    "type": "Quick Use",
    "value": 150,
    "foundIn": null,
    "weightKg": 0.75,
    "stackSize": 5,
    "craftBench": null,
    "recyclesInto": {
      "chemicals": 1
    },
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "blue_light_stick_blueprint",
    "name": "Blue Light Stick Blueprint",
    "image": "images/blue_light_stick_blueprint.png",
    "hasImage": false,
    "baseCategory": null,
    "rarity": "Legendary",
    "type": "Blueprint",
    "value": 5000,
    "foundIn": "",
    "weightKg": 0,
    "stackSize": null,
    "craftBench": null,
    "recyclesInto": {},
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "blue_radio_renegade_color",
    "name": "Blue (Radio Renegade Color)",
    "image": "images/blue_radio_renegade_color.png",
    "hasImage": false,
    "baseCategory": null,
    "rarity": "Common",
    "type": "Cosmetic",
    "value": null,
    "foundIn": null,
    "weightKg": null,
    "stackSize": null,
    "craftBench": null,
    "recyclesInto": {},
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "bobcat_blueprint",
    "name": "Bobcat Blueprint",
    "image": "images/bobcat_blueprint.png",
    "hasImage": false,
    "baseCategory": null,
    "rarity": "Epic",
    "type": "Blueprint",
    "value": 15000,
    "foundIn": null,
    "weightKg": 0,
    "stackSize": null,
    "craftBench": null,
    "recyclesInto": {},
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "bobcat_i",
    "name": "Bobcat I",
    "image": "images/bobcat_i.png",
    "hasImage": false,
    "baseCategory": "recycle",
    "rarity": "Epic",
    "type": "SMG",
    "value": 13000,
    "foundIn": null,
    "weightKg": 7,
    "stackSize": null,
    "craftBench": [
      "weapon_bench"
    ],
    "recyclesInto": {
      "light_gun_parts": 2,
      "advanced_mechanical_components": 2
    },
    "salvagesInto": {
      "light_gun_parts": 2
    },
    "recipe": {
      "magnetic_accelerator": 1,
      "light_gun_parts": 3,
      "exodus_modules": 2
    },
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": "Recycle",
    "reasons": [
      {
        "type": "recycle",
        "itemId": "bobcat_i",
        "recycleComponentId": "advanced_mechanical_components",
        "recycleComponentName": "Advanced Mechanical Components",
        "chain": [
          {
            "action": "recycle",
            "itemId": "bobcat_i",
            "itemName": "Bobcat I",
            "targetId": "advanced_mechanical_components",
            "targetName": "Advanced Mechanical Components"
          },
          {
            "action": "use_in_workshop",
            "itemId": "advanced_mechanical_components",
            "itemName": "Advanced Mechanical Components",
            "workshopStation": "gunsmith",
            "workshopLevel": "3"
          }
        ]
      }
    ]
  },
  {
    "key": "bobcat_ii",
    "name": "Bobcat II",
    "image": "images/bobcat_ii.png",
    "hasImage": false,
    "baseCategory": "recycle",
    "rarity": "Epic",
    "type": "SMG",
    "value": 17000,
    "foundIn": null,
    "weightKg": 7,
    "stackSize": null,
    "craftBench": null,
    "recyclesInto": {
      "light_gun_parts": 3,
      "advanced_mechanical_components": 3
    },
    "salvagesInto": {
      "light_gun_parts": 3
    },
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": "Recycle",
    "reasons": [
      {
        "type": "recycle",
        "itemId": "bobcat_ii",
        "recycleComponentId": "advanced_mechanical_components",
        "recycleComponentName": "Advanced Mechanical Components",
        "chain": [
          {
            "action": "recycle",
            "itemId": "bobcat_ii",
            "itemName": "Bobcat II",
            "targetId": "advanced_mechanical_components",
            "targetName": "Advanced Mechanical Components"
          },
          {
            "action": "use_in_workshop",
            "itemId": "advanced_mechanical_components",
            "itemName": "Advanced Mechanical Components",
            "workshopStation": "gunsmith",
            "workshopLevel": "3"
          }
        ]
      }
    ]
  },
  {
    "key": "bobcat_iii",
    "name": "Bobcat III",
    "image": "images/bobcat_iii.png",
    "hasImage": false,
    "baseCategory": "recycle",
    "rarity": "Epic",
    "type": "SMG",
    "value": 22000,
    "foundIn": null,
    "weightKg": 7,
    "stackSize": null,
    "craftBench": null,
    "recyclesInto": {
      "light_gun_parts": 4,
      "advanced_mechanical_components": 4
    },
    "salvagesInto": {
      "light_gun_parts": 4
    },
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": "Recycle",
    "reasons": [
      {
        "type": "recycle",
        "itemId": "bobcat_iii",
        "recycleComponentId": "advanced_mechanical_components",
        "recycleComponentName": "Advanced Mechanical Components",
        "chain": [
          {
            "action": "recycle",
            "itemId": "bobcat_iii",
            "itemName": "Bobcat III",
            "targetId": "advanced_mechanical_components",
            "targetName": "Advanced Mechanical Components"
          },
          {
            "action": "use_in_workshop",
            "itemId": "advanced_mechanical_components",
            "itemName": "Advanced Mechanical Components",
            "workshopStation": "gunsmith",
            "workshopLevel": "3"
          }
        ]
      }
    ]
  },
  {
    "key": "bobcat_iv",
    "name": "Bobcat IV",
    "image": "images/bobcat_iv.png",
    "hasImage": false,
    "baseCategory": "recycle",
    "rarity": "Epic",
    "type": "SMG",
    "value": 27000,
    "foundIn": null,
    "weightKg": 7,
    "stackSize": null,
    "craftBench": null,
    "recyclesInto": {
      "light_gun_parts": 4,
      "advanced_mechanical_components": 5
    },
    "salvagesInto": {
      "light_gun_parts": 5
    },
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": "Recycle",
    "reasons": [
      {
        "type": "recycle",
        "itemId": "bobcat_iv",
        "recycleComponentId": "advanced_mechanical_components",
        "recycleComponentName": "Advanced Mechanical Components",
        "chain": [
          {
            "action": "recycle",
            "itemId": "bobcat_iv",
            "itemName": "Bobcat IV",
            "targetId": "advanced_mechanical_components",
            "targetName": "Advanced Mechanical Components"
          },
          {
            "action": "use_in_workshop",
            "itemId": "advanced_mechanical_components",
            "itemName": "Advanced Mechanical Components",
            "workshopStation": "gunsmith",
            "workshopLevel": "3"
          }
        ]
      }
    ]
  },
  {
    "key": "bombardier_cell",
    "name": "Bombardier Cell",
    "image": "images/bombardier_cell.png",
    "hasImage": true,
    "baseCategory": "keep",
    "rarity": "Epic",
    "type": "Recyclable",
    "value": 5000,
    "foundIn": "ARC",
    "weightKg": 1,
    "stackSize": 3,
    "craftBench": null,
    "recyclesInto": {
      "advanced_mechanical_components": 2,
      "arc_alloy": 2
    },
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {
      "refiner": [
        3
      ]
    },
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": "Keep • Workstations: Refiner T3",
    "reasons": [
      {
        "type": "workshop",
        "itemId": "bombardier_cell",
        "workshopStation": "refiner",
        "workshopLevel": "3"
      }
    ]
  },
  {
    "key": "breathtaking_snow_globe",
    "name": "Breathtaking Snow Globe",
    "image": "images/breathtaking_snow_globe.png",
    "hasImage": true,
    "baseCategory": "sell",
    "rarity": "Epic",
    "type": "Trinket",
    "value": 7000,
    "foundIn": "Residential, Old World, Commercial",
    "weightKg": 0.2,
    "stackSize": 1,
    "craftBench": null,
    "recyclesInto": {},
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": "Sell",
    "reasons": []
  },
  {
    "key": "broken_flashlight",
    "name": "Broken Flashlight",
    "image": "images/broken_flashlight.png",
    "hasImage": true,
    "baseCategory": "recycle",
    "rarity": "Rare",
    "type": "Recyclable",
    "value": 1000,
    "foundIn": "Security",
    "weightKg": 2,
    "stackSize": 3,
    "craftBench": null,
    "recyclesInto": {
      "battery": 2,
      "metal_parts": 6
    },
    "salvagesInto": {
      "metal_parts": 7
    },
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": "Recycle",
    "reasons": [
      {
        "type": "recycle",
        "itemId": "broken_flashlight",
        "recycleComponentId": "battery",
        "recycleComponentName": "Battery",
        "chain": [
          {
            "action": "recycle",
            "itemId": "broken_flashlight",
            "itemName": "Broken Flashlight",
            "targetId": "battery",
            "targetName": "Battery"
          },
          {
            "action": "use_in_quest",
            "itemId": "battery",
            "itemName": "Battery",
            "questId": "ss10y",
            "questName": "After Rain Comes"
          }
        ]
      },
      {
        "type": "recycle",
        "itemId": "broken_flashlight",
        "recycleComponentId": "metal_parts",
        "recycleComponentName": "Metal Parts",
        "chain": [
          {
            "action": "recycle",
            "itemId": "broken_flashlight",
            "itemName": "Broken Flashlight",
            "targetId": "metal_parts",
            "targetName": "Metal Parts"
          },
          {
            "action": "use_in_workshop",
            "itemId": "metal_parts",
            "itemName": "Metal Parts",
            "workshopStation": "gunsmith",
            "workshopLevel": "1"
          }
        ]
      }
    ]
  },
  {
    "key": "broken_guidance_system",
    "name": "Broken Guidance System",
    "image": "images/broken_guidance_system.png",
    "hasImage": true,
    "baseCategory": "sell",
    "rarity": "Rare",
    "type": "Recyclable",
    "value": 2000,
    "foundIn": "Exodus",
    "weightKg": 3,
    "stackSize": 3,
    "craftBench": null,
    "recyclesInto": {
      "processor": 4
    },
    "salvagesInto": {
      "processor": 2
    },
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": "Sell",
    "reasons": []
  },
  {
    "key": "broken_handheld_radio",
    "name": "Broken Handheld Radio",
    "image": "images/broken_handheld_radio.png",
    "hasImage": true,
    "baseCategory": "recycle",
    "rarity": "Rare",
    "type": "Recyclable",
    "value": 2000,
    "foundIn": "Security",
    "weightKg": 3,
    "stackSize": 3,
    "craftBench": null,
    "recyclesInto": {
      "sensors": 3,
      "wires": 2
    },
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": "Recycle",
    "reasons": [
      {
        "type": "recycle",
        "itemId": "broken_handheld_radio",
        "recycleComponentId": "sensors",
        "recycleComponentName": "Sensors",
        "chain": [
          {
            "action": "recycle",
            "itemId": "broken_handheld_radio",
            "itemName": "Broken Handheld Radio",
            "targetId": "sensors",
            "targetName": "Sensors"
          }
        ]
      },
      {
        "type": "recycle",
        "itemId": "broken_handheld_radio",
        "recycleComponentId": "wires",
        "recycleComponentName": "Wires",
        "chain": [
          {
            "action": "recycle",
            "itemId": "broken_handheld_radio",
            "itemName": "Broken Handheld Radio",
            "targetId": "wires",
            "targetName": "Wires"
          },
          {
            "action": "use_in_quest",
            "itemId": "wires",
            "itemName": "Wires",
            "questId": "ss10y",
            "questName": "After Rain Comes"
          }
        ]
      }
    ]
  },
  {
    "key": "broken_taser",
    "name": "Broken Taser",
    "image": "images/broken_taser.png",
    "hasImage": true,
    "baseCategory": "recycle",
    "rarity": "Rare",
    "type": "Recyclable",
    "value": 1000,
    "foundIn": "Security",
    "weightKg": 2,
    "stackSize": 3,
    "craftBench": null,
    "recyclesInto": {
      "battery": 2,
      "wires": 2
    },
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": "Recycle",
    "reasons": [
      {
        "type": "recycle",
        "itemId": "broken_taser",
        "recycleComponentId": "battery",
        "recycleComponentName": "Battery",
        "chain": [
          {
            "action": "recycle",
            "itemId": "broken_taser",
            "itemName": "Broken Taser",
            "targetId": "battery",
            "targetName": "Battery"
          },
          {
            "action": "use_in_quest",
            "itemId": "battery",
            "itemName": "Battery",
            "questId": "ss10y",
            "questName": "After Rain Comes"
          }
        ]
      },
      {
        "type": "recycle",
        "itemId": "broken_taser",
        "recycleComponentId": "wires",
        "recycleComponentName": "Wires",
        "chain": [
          {
            "action": "recycle",
            "itemId": "broken_taser",
            "itemName": "Broken Taser",
            "targetId": "wires",
            "targetName": "Wires"
          },
          {
            "action": "use_in_quest",
            "itemId": "wires",
            "itemName": "Wires",
            "questId": "ss10y",
            "questName": "After Rain Comes"
          }
        ]
      }
    ]
  },
  {
    "key": "burgerboy",
    "name": "Burgerboy",
    "image": "images/burgerboy.png",
    "hasImage": true,
    "baseCategory": null,
    "rarity": "Common",
    "type": "Backpack Charm",
    "value": null,
    "foundIn": null,
    "weightKg": null,
    "stackSize": null,
    "craftBench": null,
    "recyclesInto": {},
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "buried_city_hospital_key",
    "name": "Buried City Hospital Key",
    "image": "images/buried_city_hospital_key.png",
    "hasImage": false,
    "baseCategory": null,
    "rarity": "Rare",
    "type": "Key",
    "value": 100,
    "foundIn": null,
    "weightKg": 0.25,
    "stackSize": null,
    "craftBench": null,
    "recyclesInto": {},
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "buried_city_residential_master_key",
    "name": "Buried City Residential Master Key",
    "image": "images/buried_city_residential_master_key.png",
    "hasImage": false,
    "baseCategory": null,
    "rarity": "Uncommon",
    "type": "Key",
    "value": 100,
    "foundIn": null,
    "weightKg": 0.25,
    "stackSize": 1,
    "craftBench": null,
    "recyclesInto": {},
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "buried_city_town_hall_key",
    "name": "Buried City Town Hall Key",
    "image": "images/buried_city_town_hall_key.png",
    "hasImage": true,
    "baseCategory": null,
    "rarity": "Epic",
    "type": "Key",
    "value": 100,
    "foundIn": null,
    "weightKg": 0.25,
    "stackSize": null,
    "craftBench": null,
    "recyclesInto": {},
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "burletta_blueprint",
    "name": "Burletta Blueprint",
    "image": "images/burletta_blueprint.png",
    "hasImage": false,
    "baseCategory": null,
    "rarity": "Legendary",
    "type": "Blueprint",
    "value": null,
    "foundIn": null,
    "weightKg": null,
    "stackSize": null,
    "craftBench": null,
    "recyclesInto": {},
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "burletta_i",
    "name": "Burletta I",
    "image": "images/burletta_i.png",
    "hasImage": false,
    "baseCategory": null,
    "rarity": "Uncommon",
    "type": "Pistol",
    "value": 2900,
    "foundIn": null,
    "weightKg": 4,
    "stackSize": null,
    "craftBench": "weapon_bench",
    "recyclesInto": {
      "mechanical_components": 1,
      "simple_gun_parts": 2
    },
    "salvagesInto": {},
    "recipe": {
      "mechanical_components": 3,
      "simple_gun_parts": 3
    },
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "burletta_ii",
    "name": "Burletta II",
    "image": "images/burletta_ii.png",
    "hasImage": false,
    "baseCategory": null,
    "rarity": "Uncommon",
    "type": "Pistol",
    "value": 5000,
    "foundIn": null,
    "weightKg": 4,
    "stackSize": null,
    "craftBench": null,
    "recyclesInto": {
      "mechanical_components": 2,
      "simple_gun_parts": 2
    },
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "burletta_iii",
    "name": "Burletta III",
    "image": "images/burletta_iii.png",
    "hasImage": false,
    "baseCategory": null,
    "rarity": "Uncommon",
    "type": "Pistol",
    "value": 7000,
    "foundIn": null,
    "weightKg": 4,
    "stackSize": null,
    "craftBench": null,
    "recyclesInto": {
      "mechanical_components": 3,
      "simple_gun_parts": 3
    },
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "burletta_iv",
    "name": "Burletta IV",
    "image": "images/burletta_iv.png",
    "hasImage": false,
    "baseCategory": null,
    "rarity": "Uncommon",
    "type": "Pistol",
    "value": 10000,
    "foundIn": null,
    "weightKg": 4,
    "stackSize": null,
    "craftBench": null,
    "recyclesInto": {
      "mechanical_components": 4,
      "simple_gun_parts": 4
    },
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "burned_arc_circuitry",
    "name": "Burned Arc Circuitry",
    "image": "images/burned_arc_circuitry.png",
    "hasImage": true,
    "baseCategory": "recycle",
    "rarity": "Uncommon",
    "type": "Recyclable",
    "value": 640,
    "foundIn": "ARC",
    "weightKg": 1,
    "stackSize": 3,
    "craftBench": null,
    "recyclesInto": {
      "arc_alloy": 2
    },
    "salvagesInto": {
      "arc_alloy": 1
    },
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": "Recycle",
    "reasons": [
      {
        "type": "recycle",
        "itemId": "burned_arc_circuitry",
        "recycleComponentId": "arc_alloy",
        "recycleComponentName": "ARC Alloy",
        "chain": [
          {
            "action": "recycle",
            "itemId": "burned_arc_circuitry",
            "itemName": "Burned Arc Circuitry",
            "targetId": "arc_alloy",
            "targetName": "ARC Alloy"
          },
          {
            "action": "use_in_quest",
            "itemId": "arc_alloy",
            "itemName": "ARC Alloy",
            "questId": "ss2",
            "questName": "Clearer Skies"
          }
        ]
      }
    ]
  },
  {
    "key": "camera_lens",
    "name": "Camera Lens",
    "image": "images/camera_lens.png",
    "hasImage": true,
    "baseCategory": "recycle",
    "rarity": "Uncommon",
    "type": "Recyclable",
    "value": 640,
    "foundIn": "Security",
    "weightKg": 0.8,
    "stackSize": 5,
    "craftBench": null,
    "recyclesInto": {
      "plastic_parts": 8
    },
    "salvagesInto": {
      "plastic_parts": 4
    },
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": "Recycle",
    "reasons": [
      {
        "type": "recycle",
        "itemId": "camera_lens",
        "recycleComponentId": "plastic_parts",
        "recycleComponentName": "Plastic Parts",
        "chain": [
          {
            "action": "recycle",
            "itemId": "camera_lens",
            "itemName": "Camera Lens",
            "targetId": "plastic_parts",
            "targetName": "Plastic Parts"
          },
          {
            "action": "use_in_workshop",
            "itemId": "plastic_parts",
            "itemName": "Plastic Parts",
            "workshopStation": "gear_bench",
            "workshopLevel": "1"
          }
        ]
      }
    ]
  },
  {
    "key": "candle_holder",
    "name": "Candle Holder",
    "image": "images/candle_holder.png",
    "hasImage": true,
    "baseCategory": "recycle",
    "rarity": "Uncommon",
    "type": "Recyclable",
    "value": 640,
    "foundIn": "Residential",
    "weightKg": 2,
    "stackSize": 3,
    "craftBench": null,
    "recyclesInto": {
      "metal_parts": 8
    },
    "salvagesInto": {
      "metal_parts": 4
    },
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": "Recycle",
    "reasons": [
      {
        "type": "recycle",
        "itemId": "candle_holder",
        "recycleComponentId": "metal_parts",
        "recycleComponentName": "Metal Parts",
        "chain": [
          {
            "action": "recycle",
            "itemId": "candle_holder",
            "itemName": "Candle Holder",
            "targetId": "metal_parts",
            "targetName": "Metal Parts"
          },
          {
            "action": "use_in_workshop",
            "itemId": "metal_parts",
            "itemName": "Metal Parts",
            "workshopStation": "gunsmith",
            "workshopLevel": "1"
          }
        ]
      }
    ]
  },
  {
    "key": "canister",
    "name": "Canister",
    "image": "images/canister.png",
    "hasImage": true,
    "baseCategory": "recycle",
    "rarity": "Uncommon",
    "type": "Topside Material",
    "value": 300,
    "foundIn": "Commercial",
    "weightKg": 0.25,
    "stackSize": 15,
    "craftBench": null,
    "recyclesInto": {
      "plastic_parts": 3
    },
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": "Recycle",
    "reasons": [
      {
        "type": "recycle",
        "itemId": "canister",
        "recycleComponentId": "plastic_parts",
        "recycleComponentName": "Plastic Parts",
        "chain": [
          {
            "action": "recycle",
            "itemId": "canister",
            "itemName": "Canister",
            "targetId": "plastic_parts",
            "targetName": "Plastic Parts"
          },
          {
            "action": "use_in_workshop",
            "itemId": "plastic_parts",
            "itemName": "Plastic Parts",
            "workshopStation": "gear_bench",
            "workshopLevel": "1"
          }
        ]
      }
    ]
  },
  {
    "key": "cans_backpack_attachment",
    "name": "Cans Backpack Attachment",
    "image": "images/cans_backpack_attachment.png",
    "hasImage": false,
    "baseCategory": null,
    "rarity": "Common",
    "type": "Cosmetic",
    "value": null,
    "foundIn": null,
    "weightKg": null,
    "stackSize": null,
    "craftBench": null,
    "recyclesInto": {},
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "cat_bed",
    "name": "Cat Bed",
    "image": "images/cat_bed.png",
    "hasImage": true,
    "baseCategory": "keep",
    "rarity": "Uncommon",
    "type": "Trinket",
    "value": 1000,
    "foundIn": "Residential, Commercial",
    "weightKg": 0.5,
    "stackSize": 3,
    "craftBench": null,
    "recyclesInto": {},
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {
      "scrappy": [
        4
      ]
    },
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": "Keep • Workstations: Scrappy T4",
    "reasons": [
      {
        "type": "workshop",
        "itemId": "cat_bed",
        "workshopStation": "scrappy",
        "workshopLevel": "4"
      }
    ]
  },
  {
    "key": "celeste_journal",
    "name": "Celeste's Journal",
    "image": "images/celeste_journal.png",
    "hasImage": false,
    "baseCategory": "keep",
    "rarity": "Common",
    "type": "Trinket",
    "value": null,
    "foundIn": null,
    "weightKg": 0.25,
    "stackSize": null,
    "craftBench": null,
    "recyclesInto": {},
    "salvagesInto": {},
    "recipe": {},
    "quest": true,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": "Keep • Quest item",
    "reasons": [
      {
        "type": "quest",
        "itemId": "celeste_journal",
        "questId": "ss10t",
        "questName": "Celeste's Journals"
      }
    ]
  },
  {
    "key": "celestes_journal",
    "name": "Celeste's Journal",
    "image": "images/celestes_journal.png",
    "hasImage": false,
    "baseCategory": "sell",
    "rarity": "Common",
    "type": "Trinket",
    "value": null,
    "foundIn": null,
    "weightKg": 0.25,
    "stackSize": null,
    "craftBench": null,
    "recyclesInto": {},
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": "Sell",
    "reasons": []
  },
  {
    "key": "cheer",
    "name": "Cheer",
    "image": "images/cheer.png",
    "hasImage": true,
    "baseCategory": null,
    "rarity": "Common",
    "type": "Cosmetic",
    "value": null,
    "foundIn": null,
    "weightKg": null,
    "stackSize": null,
    "craftBench": null,
    "recyclesInto": {},
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "chemicals",
    "name": "Chemicals",
    "image": "images/chemicals.png",
    "hasImage": true,
    "baseCategory": "keep",
    "rarity": "Common",
    "type": "Basic Material",
    "value": 50,
    "foundIn": "Medical, Residential, Mechanical",
    "weightKg": 0.15,
    "stackSize": 50,
    "craftBench": null,
    "recyclesInto": {},
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {
      "explosives_station": [
        1
      ]
    },
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": "Keep • Workstations: Explosives Station T1",
    "reasons": [
      {
        "type": "workshop",
        "itemId": "chemicals",
        "workshopStation": "explosives_station",
        "workshopLevel": "1"
      }
    ]
  },
  {
    "key": "coffee_pot",
    "name": "Coffee Pot",
    "image": "images/coffee_pot.png",
    "hasImage": true,
    "baseCategory": "sell",
    "rarity": "Common",
    "type": "Trinket",
    "value": 1000,
    "foundIn": "Residential",
    "weightKg": 0.3,
    "stackSize": 3,
    "craftBench": null,
    "recyclesInto": {},
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": "Sell",
    "reasons": []
  },
  {
    "key": "combat_mk1",
    "name": "Combat Mk. 1",
    "image": "images/combat_mk1.png",
    "hasImage": false,
    "baseCategory": null,
    "rarity": "Uncommon",
    "type": "Augment",
    "value": 640,
    "foundIn": null,
    "weightKg": 2,
    "stackSize": null,
    "craftBench": "equipment_bench",
    "recyclesInto": {
      "plastic_parts": 3,
      "rubber_parts": 3
    },
    "salvagesInto": {},
    "recipe": {
      "plastic_parts": 6,
      "rubber_parts": 6
    },
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "combat_mk2",
    "name": "Combat Mk. 2",
    "image": "images/combat_mk2.png",
    "hasImage": false,
    "baseCategory": null,
    "rarity": "Rare",
    "type": "Augment",
    "value": 2000,
    "foundIn": null,
    "weightKg": 3,
    "stackSize": null,
    "craftBench": "equipment_bench",
    "recyclesInto": {
      "magnet": 1,
      "electrical_components": 1
    },
    "salvagesInto": {},
    "recipe": {
      "electrical_components": 2,
      "magnet": 3
    },
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "combat_mk3_aggressive",
    "name": "Combat Mk. 3 (Aggressive)",
    "image": "images/combat_mk3_aggressive.png",
    "hasImage": false,
    "baseCategory": null,
    "rarity": "Epic",
    "type": "Augment",
    "value": 5000,
    "foundIn": null,
    "weightKg": 5,
    "stackSize": null,
    "craftBench": "equipment_bench",
    "recyclesInto": {
      "advanced_electrical_components": 1,
      "processor": 1
    },
    "salvagesInto": {},
    "recipe": {
      "advanced_electrical_components": 2,
      "processor": 3
    },
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "combat_mk3_aggressive_blueprint",
    "name": "Combat Mk. 3 (Aggressive) Blueprint",
    "image": "images/combat_mk3_aggressive_blueprint.png",
    "hasImage": false,
    "baseCategory": null,
    "rarity": "Legendary",
    "type": "Blueprint",
    "value": 5000,
    "foundIn": null,
    "weightKg": 0,
    "stackSize": null,
    "craftBench": null,
    "recyclesInto": {},
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "compensator_i",
    "name": "Compensator I",
    "image": "images/compensator_i.png",
    "hasImage": false,
    "baseCategory": null,
    "rarity": "Common",
    "type": "Modification",
    "value": 640,
    "foundIn": null,
    "weightKg": 0.25,
    "stackSize": null,
    "craftBench": "weapon_bench",
    "recyclesInto": {
      "metal_parts": 5
    },
    "salvagesInto": {
      "metal_parts": 3
    },
    "recipe": {
      "metal_parts": 6,
      "wires": 1
    },
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "compensator_ii",
    "name": "Compensator II",
    "image": "images/compensator_ii.png",
    "hasImage": true,
    "baseCategory": null,
    "rarity": "Uncommon",
    "type": "Modification",
    "value": 2000,
    "foundIn": null,
    "weightKg": 0.5,
    "stackSize": null,
    "craftBench": "weapon_bench",
    "recyclesInto": {
      "mechanical_components": 1,
      "wires": 1
    },
    "salvagesInto": {},
    "recipe": {
      "mechanical_components": 2,
      "wires": 4
    },
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "compensator_ii_blueprint",
    "name": "Compensator II Blueprint",
    "image": "images/compensator_ii_blueprint.png",
    "hasImage": true,
    "baseCategory": null,
    "rarity": "Legendary",
    "type": "Blueprint",
    "value": 5000,
    "foundIn": null,
    "weightKg": 0,
    "stackSize": null,
    "craftBench": null,
    "recyclesInto": {},
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "compensator_iii",
    "name": "Compensator III",
    "image": "images/compensator_iii.png",
    "hasImage": false,
    "baseCategory": null,
    "rarity": "Uncommon",
    "type": "Modification",
    "value": 5000,
    "foundIn": null,
    "weightKg": 0.75,
    "stackSize": null,
    "craftBench": "weapon_bench",
    "recyclesInto": {
      "mechanical_components": 1,
      "wires": 2
    },
    "salvagesInto": {},
    "recipe": {
      "mechanical_components": 2,
      "wires": 8
    },
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "complex_gun_parts",
    "name": "Complex Gun Parts",
    "image": "images/complex_gun_parts.png",
    "hasImage": true,
    "baseCategory": "keep",
    "rarity": "Epic",
    "type": "Topside Material",
    "value": 3000,
    "foundIn": "Security",
    "weightKg": 1,
    "stackSize": 3,
    "craftBench": "refiner",
    "recyclesInto": {
      "simple_gun_parts": 3
    },
    "salvagesInto": {},
    "recipe": {
      "light_gun_parts": 2,
      "medium_gun_parts": 2,
      "heavy_gun_parts": 2
    },
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": "Sell",
    "reasons": []
  },
  {
    "key": "complex_gun_parts_blueprint",
    "name": "Complex Gun Parts Blueprint",
    "image": "images/complex_gun_parts_blueprint.png",
    "hasImage": true,
    "baseCategory": null,
    "rarity": "Legendary",
    "type": "Blueprint",
    "value": 5000,
    "foundIn": null,
    "weightKg": 0,
    "stackSize": null,
    "craftBench": null,
    "recyclesInto": {},
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "coolant",
    "name": "Coolant",
    "image": "images/coolant.png",
    "hasImage": true,
    "baseCategory": "recycle",
    "rarity": "Rare",
    "type": "Recyclable",
    "value": 1000,
    "foundIn": "Mechanical",
    "weightKg": 2,
    "stackSize": 3,
    "craftBench": null,
    "recyclesInto": {
      "chemicals": 5,
      "oil": 2
    },
    "salvagesInto": {
      "oil": 2
    },
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": "Recycle",
    "reasons": [
      {
        "type": "recycle",
        "itemId": "coolant",
        "recycleComponentId": "chemicals",
        "recycleComponentName": "Chemicals",
        "chain": [
          {
            "action": "recycle",
            "itemId": "coolant",
            "itemName": "Coolant",
            "targetId": "chemicals",
            "targetName": "Chemicals"
          },
          {
            "action": "use_in_workshop",
            "itemId": "chemicals",
            "itemName": "Chemicals",
            "workshopStation": "explosives_station",
            "workshopLevel": "1"
          }
        ]
      }
    ]
  },
  {
    "key": "cooling_coil",
    "name": "Cooling Coil",
    "image": "images/cooling_coil.png",
    "hasImage": true,
    "baseCategory": "recycle",
    "rarity": "Rare",
    "type": "Recyclable",
    "value": 1000,
    "foundIn": "Industrial",
    "weightKg": 2,
    "stackSize": null,
    "craftBench": null,
    "recyclesInto": {
      "chemicals": 6,
      "steel_spring": 2
    },
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": "Recycle",
    "reasons": [
      {
        "type": "recycle",
        "itemId": "cooling_coil",
        "recycleComponentId": "chemicals",
        "recycleComponentName": "Chemicals",
        "chain": [
          {
            "action": "recycle",
            "itemId": "cooling_coil",
            "itemName": "Cooling Coil",
            "targetId": "chemicals",
            "targetName": "Chemicals"
          },
          {
            "action": "use_in_workshop",
            "itemId": "chemicals",
            "itemName": "Chemicals",
            "workshopStation": "explosives_station",
            "workshopLevel": "1"
          }
        ]
      },
      {
        "type": "recycle",
        "itemId": "cooling_coil",
        "recycleComponentId": "steel_spring",
        "recycleComponentName": "Steel Spring",
        "chain": [
          {
            "action": "recycle",
            "itemId": "cooling_coil",
            "itemName": "Cooling Coil",
            "targetId": "steel_spring",
            "targetName": "Steel Spring"
          }
        ]
      }
    ]
  },
  {
    "key": "cooling_fan",
    "name": "Cooling Fan",
    "image": "images/cooling_fan.png",
    "hasImage": true,
    "baseCategory": "keep",
    "rarity": "Rare",
    "type": "Recyclable",
    "value": 2000,
    "foundIn": "Technological",
    "weightKg": 3,
    "stackSize": null,
    "craftBench": null,
    "recyclesInto": {
      "plastic_parts": 14,
      "battery": 4
    },
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": true,
    "expeditionPhases": [
      2
    ],
    "reasonSummary": "Keep • Expedition project (phase 2)",
    "reasons": [
      {
        "type": "project",
        "itemId": "cooling_fan",
        "projectId": "expedition_project",
        "projectName": "Expedition Project",
        "projectPhase": 2
      }
    ]
  },
  {
    "key": "cracked_bioscanner",
    "name": "Cracked Bioscanner",
    "image": "images/cracked_bioscanner.png",
    "hasImage": true,
    "baseCategory": "keep",
    "rarity": "Rare",
    "type": "Recyclable",
    "value": 1000,
    "foundIn": "Medical",
    "weightKg": 2,
    "stackSize": 3,
    "craftBench": null,
    "recyclesInto": {
      "rubber_parts": 3,
      "battery": 3
    },
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {
      "medical_lab": [
        2
      ]
    },
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": "Keep • Workstations: Medical Lab T2",
    "reasons": [
      {
        "type": "workshop",
        "itemId": "cracked_bioscanner",
        "workshopStation": "medical_lab",
        "workshopLevel": "2"
      }
    ]
  },
  {
    "key": "crude_explosives",
    "name": "Crude Explosives",
    "image": "images/crude_explosives.png",
    "hasImage": true,
    "baseCategory": "keep",
    "rarity": "Uncommon",
    "type": "Refined Material",
    "value": 270,
    "foundIn": "Industrial, Security",
    "weightKg": 0.5,
    "stackSize": 10,
    "craftBench": "refiner",
    "recyclesInto": {
      "chemicals": 3
    },
    "salvagesInto": {
      "chemicals": 2
    },
    "recipe": {
      "chemicals": 6
    },
    "quest": false,
    "workstations": {
      "explosives_station": [
        2
      ]
    },
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": "Keep • Workstations: Explosives Station T2",
    "reasons": [
      {
        "type": "workshop",
        "itemId": "crude_explosives",
        "workshopStation": "explosives_station",
        "workshopLevel": "2"
      }
    ]
  },
  {
    "key": "crumpled_plastic_bottle",
    "name": "Crumpled Plastic Bottle",
    "image": "images/crumpled_plastic_bottle.png",
    "hasImage": true,
    "baseCategory": "recycle",
    "rarity": "Uncommon",
    "type": "Recyclable",
    "value": 270,
    "foundIn": "Residential",
    "weightKg": 0.8,
    "stackSize": 3,
    "craftBench": null,
    "recyclesInto": {
      "plastic_parts": 4
    },
    "salvagesInto": {
      "plastic_parts": 1
    },
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": "Recycle",
    "reasons": [
      {
        "type": "recycle",
        "itemId": "crumpled_plastic_bottle",
        "recycleComponentId": "plastic_parts",
        "recycleComponentName": "Plastic Parts",
        "chain": [
          {
            "action": "recycle",
            "itemId": "crumpled_plastic_bottle",
            "itemName": "Crumpled Plastic Bottle",
            "targetId": "plastic_parts",
            "targetName": "Plastic Parts"
          },
          {
            "action": "use_in_workshop",
            "itemId": "plastic_parts",
            "itemName": "Plastic Parts",
            "workshopStation": "gear_bench",
            "workshopLevel": "1"
          }
        ]
      }
    ]
  },
  {
    "key": "dam_control_tower_key",
    "name": "Dam Control Tower Key",
    "image": "images/dam_control_tower_key.png",
    "hasImage": true,
    "baseCategory": null,
    "rarity": "Epic",
    "type": "Key",
    "value": 100,
    "foundIn": null,
    "weightKg": 0.25,
    "stackSize": null,
    "craftBench": null,
    "recyclesInto": {},
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "dam_staff_room_key",
    "name": "Dam Staff Room Key",
    "image": "images/dam_staff_room_key.png",
    "hasImage": false,
    "baseCategory": null,
    "rarity": "Uncommon",
    "type": "Key",
    "value": 100,
    "foundIn": null,
    "weightKg": 0.25,
    "stackSize": 1,
    "craftBench": null,
    "recyclesInto": {},
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "dam_surveillance_key",
    "name": "Dam Surveillance Key",
    "image": "images/dam_surveillance_key.png",
    "hasImage": true,
    "baseCategory": null,
    "rarity": "Uncommon",
    "type": "Key",
    "value": 100,
    "foundIn": null,
    "weightKg": 0.25,
    "stackSize": null,
    "craftBench": null,
    "recyclesInto": {},
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "dam_testing_annex_key",
    "name": "Dam Testing Annex Key",
    "image": "images/dam_testing_annex_key.png",
    "hasImage": true,
    "baseCategory": null,
    "rarity": "Rare",
    "type": "Key",
    "value": 100,
    "foundIn": null,
    "weightKg": 0.25,
    "stackSize": null,
    "craftBench": null,
    "recyclesInto": {},
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "dam_utility_key",
    "name": "Dam Utility Key",
    "image": "images/dam_utility_key.png",
    "hasImage": false,
    "baseCategory": null,
    "rarity": "Uncommon",
    "type": "Key",
    "value": 100,
    "foundIn": null,
    "weightKg": 0.25,
    "stackSize": 1,
    "craftBench": null,
    "recyclesInto": {},
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "damaged_arc_motion_core",
    "name": "Damaged ARC Motion Core",
    "image": "images/damaged_arc_motion_core.png",
    "hasImage": true,
    "baseCategory": "recycle",
    "rarity": "Uncommon",
    "type": "Recyclable",
    "value": 640,
    "foundIn": "ARC",
    "weightKg": 0.25,
    "stackSize": 5,
    "craftBench": null,
    "recyclesInto": {
      "arc_alloy": 2
    },
    "salvagesInto": {
      "arc_alloy": 1
    },
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": "Recycle",
    "reasons": [
      {
        "type": "recycle",
        "itemId": "damaged_arc_motion_core",
        "recycleComponentId": "arc_alloy",
        "recycleComponentName": "ARC Alloy",
        "chain": [
          {
            "action": "recycle",
            "itemId": "damaged_arc_motion_core",
            "itemName": "Damaged ARC Motion Core",
            "targetId": "arc_alloy",
            "targetName": "ARC Alloy"
          },
          {
            "action": "use_in_quest",
            "itemId": "arc_alloy",
            "itemName": "ARC Alloy",
            "questId": "ss2",
            "questName": "Clearer Skies"
          }
        ]
      }
    ]
  },
  {
    "key": "damaged_arc_powercell",
    "name": "Damaged ARC Powercell",
    "image": "images/damaged_arc_powercell.png",
    "hasImage": true,
    "baseCategory": "recycle",
    "rarity": "Common",
    "type": "Recyclable",
    "value": 293,
    "foundIn": "ARC",
    "weightKg": 0.25,
    "stackSize": 5,
    "craftBench": null,
    "recyclesInto": {
      "arc_alloy": 2
    },
    "salvagesInto": {
      "metal_parts": 1
    },
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": "Recycle",
    "reasons": [
      {
        "type": "recycle",
        "itemId": "damaged_arc_powercell",
        "recycleComponentId": "arc_alloy",
        "recycleComponentName": "ARC Alloy",
        "chain": [
          {
            "action": "recycle",
            "itemId": "damaged_arc_powercell",
            "itemName": "Damaged ARC Powercell",
            "targetId": "arc_alloy",
            "targetName": "ARC Alloy"
          },
          {
            "action": "use_in_quest",
            "itemId": "arc_alloy",
            "itemName": "ARC Alloy",
            "questId": "ss2",
            "questName": "Clearer Skies"
          }
        ]
      },
      {
        "type": "recycle",
        "itemId": "damaged_arc_powercell",
        "recycleComponentId": "metal_parts",
        "recycleComponentName": "Metal Parts",
        "chain": [
          {
            "action": "recycle",
            "itemId": "damaged_arc_powercell",
            "itemName": "Damaged ARC Powercell",
            "targetId": "metal_parts",
            "targetName": "Metal Parts"
          },
          {
            "action": "use_in_workshop",
            "itemId": "metal_parts",
            "itemName": "Metal Parts",
            "workshopStation": "gunsmith",
            "workshopLevel": "1"
          }
        ]
      }
    ]
  },
  {
    "key": "damaged_fireball_burner",
    "name": "Damaged Fireball Burner",
    "image": "images/damaged_fireball_burner.png",
    "hasImage": true,
    "baseCategory": "sell",
    "rarity": "Common",
    "type": "Recyclable",
    "value": null,
    "foundIn": "ARC",
    "weightKg": 1,
    "stackSize": 3,
    "craftBench": null,
    "recyclesInto": {},
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": "Sell",
    "reasons": []
  },
  {
    "key": "damaged_heat_sink",
    "name": "Damaged Heat Sink",
    "image": "images/damaged_heat_sink.png",
    "hasImage": true,
    "baseCategory": "keep",
    "rarity": "Rare",
    "type": "Recyclable",
    "value": 1000,
    "foundIn": "Technological",
    "weightKg": 2,
    "stackSize": 3,
    "craftBench": null,
    "recyclesInto": {
      "metal_parts": 6,
      "wires": 2
    },
    "salvagesInto": {
      "wires": 3
    },
    "recipe": {},
    "quest": false,
    "workstations": {
      "utility_station": [
        2
      ]
    },
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": "Keep • Workstations: Utility Station T2",
    "reasons": [
      {
        "type": "workshop",
        "itemId": "damaged_heat_sink",
        "workshopStation": "utility_station",
        "workshopLevel": "2"
      }
    ]
  },
  {
    "key": "damaged_hornet_driver",
    "name": "Damaged Hornet Driver",
    "image": "images/damaged_hornet_driver.png",
    "hasImage": true,
    "baseCategory": "recycle",
    "rarity": "Common",
    "type": "Recyclable",
    "value": 640,
    "foundIn": "ARC",
    "weightKg": 0.3,
    "stackSize": 3,
    "craftBench": null,
    "recyclesInto": {
      "arc_alloy": 2
    },
    "salvagesInto": {
      "arc_alloy": 1
    },
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": "Recycle",
    "reasons": [
      {
        "type": "recycle",
        "itemId": "damaged_hornet_driver",
        "recycleComponentId": "arc_alloy",
        "recycleComponentName": "ARC Alloy",
        "chain": [
          {
            "action": "recycle",
            "itemId": "damaged_hornet_driver",
            "itemName": "Damaged Hornet Driver",
            "targetId": "arc_alloy",
            "targetName": "ARC Alloy"
          },
          {
            "action": "use_in_quest",
            "itemId": "arc_alloy",
            "itemName": "ARC Alloy",
            "questId": "ss2",
            "questName": "Clearer Skies"
          }
        ]
      }
    ]
  },
  {
    "key": "damaged_rocketeer_driver",
    "name": "Damaged Rocketeer Driver",
    "image": "images/damaged_rocketeer_driver.png",
    "hasImage": true,
    "baseCategory": "recycle",
    "rarity": "Common",
    "type": "Recyclable",
    "value": 2000,
    "foundIn": "ARC",
    "weightKg": 0.25,
    "stackSize": 3,
    "craftBench": null,
    "recyclesInto": {
      "arc_alloy": 3
    },
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": "Recycle",
    "reasons": [
      {
        "type": "recycle",
        "itemId": "damaged_rocketeer_driver",
        "recycleComponentId": "arc_alloy",
        "recycleComponentName": "ARC Alloy",
        "chain": [
          {
            "action": "recycle",
            "itemId": "damaged_rocketeer_driver",
            "itemName": "Damaged Rocketeer Driver",
            "targetId": "arc_alloy",
            "targetName": "ARC Alloy"
          },
          {
            "action": "use_in_quest",
            "itemId": "arc_alloy",
            "itemName": "ARC Alloy",
            "questId": "ss2",
            "questName": "Clearer Skies"
          }
        ]
      }
    ]
  },
  {
    "key": "damaged_tick_pod",
    "name": "Damaged Tick Pod",
    "image": "images/damaged_tick_pod.png",
    "hasImage": true,
    "baseCategory": "sell",
    "rarity": "Common",
    "type": "Recyclable",
    "value": 90,
    "foundIn": "ARC",
    "weightKg": 0.083,
    "stackSize": 3,
    "craftBench": null,
    "recyclesInto": {},
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": "Sell",
    "reasons": []
  },
  {
    "key": "damaged_wasp_driver",
    "name": "Damaged Wasp Driver",
    "image": "images/damaged_wasp_driver.png",
    "hasImage": true,
    "baseCategory": "sell",
    "rarity": "Common",
    "type": "Recyclable",
    "value": 270,
    "foundIn": "ARC",
    "weightKg": 0.25,
    "stackSize": null,
    "craftBench": null,
    "recyclesInto": {},
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": "Sell",
    "reasons": []
  },
  {
    "key": "dart_board",
    "name": "Dart Board",
    "image": "images/dart_board.png",
    "hasImage": true,
    "baseCategory": "sell",
    "rarity": "Uncommon",
    "type": "Trinket",
    "value": 2000,
    "foundIn": "Residential, Commercial",
    "weightKg": 1,
    "stackSize": 3,
    "craftBench": null,
    "recyclesInto": {},
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": "Sell",
    "reasons": []
  },
  {
    "key": "deadline",
    "name": "Deadline",
    "image": "images/deadline.png",
    "hasImage": false,
    "baseCategory": null,
    "rarity": "Epic",
    "type": "Quick Use",
    "value": 5000,
    "foundIn": null,
    "weightKg": 1,
    "stackSize": 1,
    "craftBench": "explosives_bench",
    "recyclesInto": {
      "explosive_compound": 1
    },
    "salvagesInto": {},
    "recipe": {
      "explosive_compound": 3,
      "arc_circuitry": 2
    },
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "deadline_blueprint",
    "name": "Deadline Blueprint",
    "image": "images/deadline_blueprint.png",
    "hasImage": false,
    "baseCategory": null,
    "rarity": "Legendary",
    "type": "Blueprint",
    "value": 5000,
    "foundIn": null,
    "weightKg": 0,
    "stackSize": 1,
    "craftBench": null,
    "recyclesInto": {},
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "defibrillator",
    "name": "Defibrillator",
    "image": "images/defibrillator.png",
    "hasImage": true,
    "baseCategory": null,
    "rarity": "Rare",
    "type": "Quick Use",
    "value": 1000,
    "foundIn": null,
    "weightKg": 0.75,
    "stackSize": 3,
    "craftBench": "med_station",
    "recyclesInto": {
      "plastic_parts": 1,
      "moss": 1
    },
    "salvagesInto": {},
    "recipe": {
      "plastic_parts": 9,
      "moss": 1
    },
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "defibrillator_blueprint",
    "name": "Defibrillator Blueprint",
    "image": "images/defibrillator_blueprint.png",
    "hasImage": false,
    "baseCategory": null,
    "rarity": "Legendary",
    "type": "Blueprint",
    "value": 5000,
    "foundIn": null,
    "weightKg": 0,
    "stackSize": 1,
    "craftBench": null,
    "recyclesInto": {},
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "deflated_football",
    "name": "Deflated Football",
    "image": "images/deflated_football.png",
    "hasImage": true,
    "baseCategory": "recycle",
    "rarity": "Uncommon",
    "type": "Recyclable",
    "value": 1000,
    "foundIn": "Residential",
    "weightKg": 0.8,
    "stackSize": 3,
    "craftBench": null,
    "recyclesInto": {
      "rubber_parts": 15
    },
    "salvagesInto": {
      "rubber_parts": 9
    },
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": "Recycle",
    "reasons": [
      {
        "type": "recycle",
        "itemId": "deflated_football",
        "recycleComponentId": "rubber_parts",
        "recycleComponentName": "Rubber Parts",
        "chain": [
          {
            "action": "recycle",
            "itemId": "deflated_football",
            "itemName": "Deflated Football",
            "targetId": "rubber_parts",
            "targetName": "Rubber Parts"
          },
          {
            "action": "use_in_workshop",
            "itemId": "rubber_parts",
            "itemName": "Rubber Parts",
            "workshopStation": "gunsmith",
            "workshopLevel": "1"
          }
        ]
      }
    ]
  },
  {
    "key": "degraded_arc_rubber",
    "name": "Degraded ARC Rubber",
    "image": "images/degraded_arc_rubber.png",
    "hasImage": true,
    "baseCategory": "recycle",
    "rarity": "Uncommon",
    "type": "Recyclable",
    "value": 640,
    "foundIn": "ARC",
    "weightKg": 1,
    "stackSize": 3,
    "craftBench": null,
    "recyclesInto": {
      "rubber_parts": 11
    },
    "salvagesInto": {
      "rubber_parts": 5
    },
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": "Recycle",
    "reasons": [
      {
        "type": "recycle",
        "itemId": "degraded_arc_rubber",
        "recycleComponentId": "rubber_parts",
        "recycleComponentName": "Rubber Parts",
        "chain": [
          {
            "action": "recycle",
            "itemId": "degraded_arc_rubber",
            "itemName": "Degraded ARC Rubber",
            "targetId": "rubber_parts",
            "targetName": "Rubber Parts"
          },
          {
            "action": "use_in_workshop",
            "itemId": "rubber_parts",
            "itemName": "Rubber Parts",
            "workshopStation": "gunsmith",
            "workshopLevel": "1"
          }
        ]
      }
    ]
  },
  {
    "key": "diving_goggles",
    "name": "Diving Goggles",
    "image": "images/diving_goggles.png",
    "hasImage": true,
    "baseCategory": "recycle",
    "rarity": "Rare",
    "type": "Recyclable",
    "value": 640,
    "foundIn": "Residential",
    "weightKg": 2,
    "stackSize": 3,
    "craftBench": null,
    "recyclesInto": {
      "rubber_parts": 12
    },
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": "Recycle",
    "reasons": [
      {
        "type": "recycle",
        "itemId": "diving_goggles",
        "recycleComponentId": "rubber_parts",
        "recycleComponentName": "Rubber Parts",
        "chain": [
          {
            "action": "recycle",
            "itemId": "diving_goggles",
            "itemName": "Diving Goggles",
            "targetId": "rubber_parts",
            "targetName": "Rubber Parts"
          },
          {
            "action": "use_in_workshop",
            "itemId": "rubber_parts",
            "itemName": "Rubber Parts",
            "workshopStation": "gunsmith",
            "workshopLevel": "1"
          }
        ]
      }
    ]
  },
  {
    "key": "dog_collar",
    "name": "Dog Collar",
    "image": "images/dog_collar.png",
    "hasImage": true,
    "baseCategory": "keep",
    "rarity": "Rare",
    "type": "Recyclable",
    "value": 640,
    "foundIn": "Residential",
    "weightKg": 0.8,
    "stackSize": 3,
    "craftBench": null,
    "recyclesInto": {
      "fabric": 8,
      "metal_parts": 1
    },
    "salvagesInto": {
      "fabric": 5
    },
    "recipe": {},
    "quest": false,
    "workstations": {
      "scrappy": [
        2
      ]
    },
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": "Keep • Workstations: Scrappy T2",
    "reasons": [
      {
        "type": "workshop",
        "itemId": "dog_collar",
        "workshopStation": "scrappy",
        "workshopLevel": "2"
      }
    ]
  },
  {
    "key": "door_blocker",
    "name": "Door Blocker",
    "image": "images/door_blocker.png",
    "hasImage": true,
    "baseCategory": null,
    "rarity": "Common",
    "type": "Quick Use",
    "value": 270,
    "foundIn": null,
    "weightKg": 0.2,
    "stackSize": 3,
    "craftBench": "utility_bench",
    "recyclesInto": {
      "metal_parts": 2
    },
    "salvagesInto": {},
    "recipe": {
      "metal_parts": 3,
      "rubber_parts": 3
    },
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "dried_out_arc_resin",
    "name": "Dried-Out ARC Resin",
    "image": "images/dried_out_arc_resin.png",
    "hasImage": true,
    "baseCategory": "sell",
    "rarity": "Uncommon",
    "type": "Recyclable",
    "value": null,
    "foundIn": "ARC",
    "weightKg": 1,
    "stackSize": 3,
    "craftBench": null,
    "recyclesInto": {},
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": "Sell",
    "reasons": []
  },
  {
    "key": "duct_tape",
    "name": "Duct Tape",
    "image": "images/duct_tape.png",
    "hasImage": true,
    "baseCategory": "recycle",
    "rarity": "Uncommon",
    "type": "Topside Material",
    "value": 300,
    "foundIn": "Residential, Commercial",
    "weightKg": 0.25,
    "stackSize": 15,
    "craftBench": null,
    "recyclesInto": {
      "fabric": 3
    },
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": "Recycle",
    "reasons": [
      {
        "type": "recycle",
        "itemId": "duct_tape",
        "recycleComponentId": "fabric",
        "recycleComponentName": "Fabric",
        "chain": [
          {
            "action": "recycle",
            "itemId": "duct_tape",
            "itemName": "Duct Tape",
            "targetId": "fabric",
            "targetName": "Fabric"
          },
          {
            "action": "use_in_workshop",
            "itemId": "fabric",
            "itemName": "Fabric",
            "workshopStation": "gear_bench",
            "workshopLevel": "1"
          }
        ]
      }
    ]
  },
  {
    "key": "durable_cloth",
    "name": "Durable Cloth",
    "image": "images/durable_cloth.png",
    "hasImage": true,
    "baseCategory": "keep",
    "rarity": "Uncommon",
    "type": "Refined Material",
    "value": 640,
    "foundIn": "Medical, Commercial",
    "weightKg": 0.25,
    "stackSize": 10,
    "craftBench": "refiner",
    "recyclesInto": {
      "fabric": 6
    },
    "salvagesInto": {},
    "recipe": {
      "fabric": 14
    },
    "quest": true,
    "workstations": {
      "medical_lab": [
        2
      ]
    },
    "hasExpedition": true,
    "expeditionPhases": [
      2
    ],
    "reasonSummary": "Keep • Quest item • Workstations: Medical Lab T2 • Expedition project (phase 2)",
    "reasons": [
      {
        "type": "quest",
        "itemId": "durable_cloth",
        "questId": "ss10c",
        "questName": "Doctor's Orders"
      },
      {
        "type": "workshop",
        "itemId": "durable_cloth",
        "workshopStation": "medical_lab",
        "workshopLevel": "2"
      },
      {
        "type": "project",
        "itemId": "durable_cloth",
        "projectId": "expedition_project",
        "projectName": "Expedition Project",
        "projectPhase": 2
      }
    ]
  },
  {
    "key": "electrical_components",
    "name": "Electrical Components",
    "image": "images/electrical_components.png",
    "hasImage": true,
    "baseCategory": "keep",
    "rarity": "Uncommon",
    "type": "Refined Material",
    "value": 640,
    "foundIn": "Electrical",
    "weightKg": 0.5,
    "stackSize": 10,
    "craftBench": "refiner",
    "recyclesInto": {
      "plastic_parts": 3,
      "rubber_parts": 3
    },
    "salvagesInto": {
      "plastic_parts": 3
    },
    "recipe": {
      "plastic_parts": 8,
      "rubber_parts": 4
    },
    "quest": false,
    "workstations": {
      "gear_bench": [
        2
      ],
      "utility_station": [
        2
      ]
    },
    "hasExpedition": true,
    "expeditionPhases": [
      2
    ],
    "reasonSummary": "Keep • Workstations: Gear Bench T2, Utility Station T2 • Expedition project (phase 2)",
    "reasons": [
      {
        "type": "workshop",
        "itemId": "electrical_components",
        "workshopStation": "gear_bench",
        "workshopLevel": "2"
      },
      {
        "type": "workshop",
        "itemId": "electrical_components",
        "workshopStation": "utility_station",
        "workshopLevel": "2"
      },
      {
        "type": "project",
        "itemId": "electrical_components",
        "projectId": "expedition_project",
        "projectName": "Expedition Project",
        "projectPhase": 2
      }
    ]
  },
  {
    "key": "empty_wine_bottle",
    "name": "Empty Wine Bottle",
    "image": "images/empty_wine_bottle.png",
    "hasImage": true,
    "baseCategory": "sell",
    "rarity": "Common",
    "type": "Trinket",
    "value": 1000,
    "foundIn": "Residential, Commercial",
    "weightKg": 0.2,
    "stackSize": 5,
    "craftBench": null,
    "recyclesInto": {},
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": "Sell",
    "reasons": []
  },
  {
    "key": "energy_clip",
    "name": "Energy Clip",
    "image": "images/energy_clip.png",
    "hasImage": false,
    "baseCategory": null,
    "rarity": "Rare",
    "type": "Ammunition",
    "value": 5,
    "foundIn": null,
    "weightKg": 0.3,
    "stackSize": 5,
    "craftBench": "workbench",
    "recyclesInto": {},
    "salvagesInto": {},
    "recipe": {
      "advanced_arc_powercell": 1,
      "battery": 2
    },
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "equalizer",
    "name": "Equalizer",
    "image": "images/equalizer.png",
    "hasImage": false,
    "baseCategory": null,
    "rarity": "Legendary",
    "type": "LMG",
    "value": 27500,
    "foundIn": null,
    "weightKg": 14,
    "stackSize": null,
    "craftBench": "weapon_bench",
    "recyclesInto": {
      "magnetic_accelerator": 2,
      "complex_gun_parts": 1
    },
    "salvagesInto": {
      "magnetic_accelerator": 1
    },
    "recipe": {
      "magnetic_accelerator": 3,
      "complex_gun_parts": 3,
      "queen_reactor": 1
    },
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "equalizer_blueprint",
    "name": "Equalizer Blueprint",
    "image": "images/equalizer_blueprint.png",
    "hasImage": false,
    "baseCategory": null,
    "rarity": "Legendary",
    "type": "Blueprint",
    "value": 5000,
    "foundIn": null,
    "weightKg": 0,
    "stackSize": null,
    "craftBench": null,
    "recyclesInto": {},
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "esr_analyzer",
    "name": "ESR Analyzer",
    "image": "images/esr_analyzer.png",
    "hasImage": false,
    "baseCategory": "sell",
    "rarity": "Common",
    "type": "Trinket",
    "value": null,
    "foundIn": null,
    "weightKg": 0.25,
    "stackSize": null,
    "craftBench": null,
    "recyclesInto": {},
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": "Sell",
    "reasons": []
  },
  {
    "key": "exodus_modules",
    "name": "Exodus Modules",
    "image": "images/exodus_modules.png",
    "hasImage": true,
    "baseCategory": "keep",
    "rarity": "Epic",
    "type": "Topside Material",
    "value": 2750,
    "foundIn": "Exodus",
    "weightKg": 1,
    "stackSize": 3,
    "craftBench": null,
    "recyclesInto": {
      "magnet": 2,
      "processor": 2
    },
    "salvagesInto": {
      "processor": 2
    },
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": true,
    "expeditionPhases": [
      3
    ],
    "reasonSummary": "Keep • Expedition project (phase 3)",
    "reasons": [
      {
        "type": "project",
        "itemId": "exodus_modules",
        "projectId": "expedition_project",
        "projectName": "Expedition Project",
        "projectPhase": 3
      }
    ]
  },
  {
    "key": "experimental_seed_sample",
    "name": "Experimental Seed Sample",
    "image": "images/experimental_seed_sample.png",
    "hasImage": false,
    "baseCategory": "sell",
    "rarity": "Common",
    "type": "Trinket",
    "value": null,
    "foundIn": null,
    "weightKg": 0.25,
    "stackSize": null,
    "craftBench": null,
    "recyclesInto": {},
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": "Sell",
    "reasons": []
  },
  {
    "key": "expired_pasta",
    "name": "Expired Pasta",
    "image": "images/expired_pasta.png",
    "hasImage": true,
    "baseCategory": "sell",
    "rarity": "Common",
    "type": "Trinket",
    "value": 1000,
    "foundIn": "Commercial, Residential",
    "weightKg": 0.1,
    "stackSize": 15,
    "craftBench": null,
    "recyclesInto": {},
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": "Sell",
    "reasons": []
  },
  {
    "key": "expired_respirator",
    "name": "Expired Respirator",
    "image": "images/expired_respirator.png",
    "hasImage": true,
    "baseCategory": "recycle",
    "rarity": "Rare",
    "type": "Recyclable",
    "value": 640,
    "foundIn": "Medical",
    "weightKg": 2,
    "stackSize": 3,
    "craftBench": null,
    "recyclesInto": {
      "rubber_parts": 8,
      "fabric": 4
    },
    "salvagesInto": {
      "rubber_parts": 5
    },
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": "Recycle",
    "reasons": [
      {
        "type": "recycle",
        "itemId": "expired_respirator",
        "recycleComponentId": "rubber_parts",
        "recycleComponentName": "Rubber Parts",
        "chain": [
          {
            "action": "recycle",
            "itemId": "expired_respirator",
            "itemName": "Expired Respirator",
            "targetId": "rubber_parts",
            "targetName": "Rubber Parts"
          },
          {
            "action": "use_in_workshop",
            "itemId": "rubber_parts",
            "itemName": "Rubber Parts",
            "workshopStation": "gunsmith",
            "workshopLevel": "1"
          }
        ]
      },
      {
        "type": "recycle",
        "itemId": "expired_respirator",
        "recycleComponentId": "fabric",
        "recycleComponentName": "Fabric",
        "chain": [
          {
            "action": "recycle",
            "itemId": "expired_respirator",
            "itemName": "Expired Respirator",
            "targetId": "fabric",
            "targetName": "Fabric"
          },
          {
            "action": "use_in_workshop",
            "itemId": "fabric",
            "itemName": "Fabric",
            "workshopStation": "gear_bench",
            "workshopLevel": "1"
          }
        ]
      }
    ]
  },
  {
    "key": "explosive_compound",
    "name": "Explosive Compound",
    "image": "images/explosive_compound.png",
    "hasImage": true,
    "baseCategory": "keep",
    "rarity": "Rare",
    "type": "Refined Material",
    "value": 1000,
    "foundIn": "Industrial, Security",
    "weightKg": 0.3,
    "stackSize": 5,
    "craftBench": "refiner",
    "recyclesInto": {
      "chemicals": 2
    },
    "salvagesInto": {},
    "recipe": {
      "crude_explosives": 2,
      "oil": 2
    },
    "quest": false,
    "workstations": {
      "explosives_station": [
        3
      ]
    },
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": "Keep • Workstations: Explosives Station T3",
    "reasons": [
      {
        "type": "workshop",
        "itemId": "explosive_compound",
        "workshopStation": "explosives_station",
        "workshopLevel": "3"
      }
    ]
  },
  {
    "key": "extended_barrel",
    "name": "Extended Barrel",
    "image": "images/extended_barrel.png",
    "hasImage": false,
    "baseCategory": null,
    "rarity": "Epic",
    "type": "Modification",
    "value": 5000,
    "foundIn": null,
    "weightKg": 0.5,
    "stackSize": null,
    "craftBench": null,
    "recyclesInto": {
      "mod_components": 1,
      "wires": 1
    },
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "extended_light_mag_i",
    "name": "Extended Light Mag I",
    "image": "images/extended_light_mag_i.png",
    "hasImage": false,
    "baseCategory": null,
    "rarity": "Common",
    "type": "Modification",
    "value": 640,
    "foundIn": null,
    "weightKg": 0.25,
    "stackSize": null,
    "craftBench": "weapon_bench",
    "recyclesInto": {
      "plastic_parts": 6
    },
    "salvagesInto": {
      "plastic_parts": 3
    },
    "recipe": {
      "plastic_parts": 6,
      "steel_spring": 1
    },
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "extended_light_mag_ii",
    "name": "Extended Light Mag II",
    "image": "images/extended_light_mag_ii.png",
    "hasImage": true,
    "baseCategory": null,
    "rarity": "Uncommon",
    "type": "Modification",
    "value": 2000,
    "foundIn": null,
    "weightKg": 0.5,
    "stackSize": null,
    "craftBench": null,
    "recyclesInto": {
      "steel_spring": 1,
      "mechanical_components": 1
    },
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "extended_light_mag_iii",
    "name": "Extended Light Mag III",
    "image": "images/extended_light_mag_iii.png",
    "hasImage": true,
    "baseCategory": null,
    "rarity": "Rare",
    "type": "Modification",
    "value": 5000,
    "foundIn": null,
    "weightKg": 0.75,
    "stackSize": null,
    "craftBench": null,
    "recyclesInto": {
      "mod_components": 1,
      "steel_spring": 2
    },
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "extended_medium_mag_i",
    "name": "Extended Medium Mag I",
    "image": "images/extended_medium_mag_i.png",
    "hasImage": false,
    "baseCategory": null,
    "rarity": "Common",
    "type": "Modification",
    "value": 640,
    "foundIn": null,
    "weightKg": 0.25,
    "stackSize": null,
    "craftBench": "weapon_bench",
    "recyclesInto": {},
    "salvagesInto": {},
    "recipe": {
      "plastic_parts": 6,
      "steel_spring": 1
    },
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "extended_medium_mag_ii",
    "name": "Extended Medium Mag II",
    "image": "images/extended_medium_mag_ii.png",
    "hasImage": true,
    "baseCategory": null,
    "rarity": "Uncommon",
    "type": "Modification",
    "value": 2000,
    "foundIn": null,
    "weightKg": 0.5,
    "stackSize": null,
    "craftBench": "weapon_bench",
    "recyclesInto": {},
    "salvagesInto": {},
    "recipe": {
      "mechanical_components": 2,
      "steel_spring": 3
    },
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "extended_medium_mag_ii_blueprint",
    "name": "Extended Medium Mag II Blueprint",
    "image": "images/extended_medium_mag_ii_blueprint.png",
    "hasImage": false,
    "baseCategory": null,
    "rarity": "Legendary",
    "type": "Blueprint",
    "value": 5000,
    "foundIn": null,
    "weightKg": 0,
    "stackSize": null,
    "craftBench": null,
    "recyclesInto": {},
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "extended_medium_mag_iii",
    "name": "Extended Medium Mag III",
    "image": "images/extended_medium_mag_iii.png",
    "hasImage": true,
    "baseCategory": null,
    "rarity": "Rare",
    "type": "Modification",
    "value": 5000,
    "foundIn": null,
    "weightKg": 0.75,
    "stackSize": null,
    "craftBench": "weapon_bench",
    "recyclesInto": {
      "mod_components": 1,
      "steel_spring": 2
    },
    "salvagesInto": {},
    "recipe": {
      "mod_components": 2,
      "steel_spring": 5
    },
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "extended_medium_mag_iii_blueprint",
    "name": "Extended Medium Mag III Blueprint",
    "image": "images/extended_medium_mag_iii_blueprint.png",
    "hasImage": false,
    "baseCategory": null,
    "rarity": "Legendary",
    "type": "Blueprint",
    "value": 5000,
    "foundIn": null,
    "weightKg": 0,
    "stackSize": 1,
    "craftBench": null,
    "recyclesInto": {},
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "extended_shotgun_mag_i",
    "name": "Extended Shotgun Mag I",
    "image": "images/extended_shotgun_mag_i.png",
    "hasImage": true,
    "baseCategory": null,
    "rarity": "Common",
    "type": "Modification",
    "value": 640,
    "foundIn": null,
    "weightKg": 0.25,
    "stackSize": null,
    "craftBench": "weapon_bench",
    "recyclesInto": {
      "plastic_parts": 6
    },
    "salvagesInto": {},
    "recipe": {
      "plastic_parts": 6,
      "steel_spring": 1
    },
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "extended_shotgun_mag_ii",
    "name": "Extended Shotgun Mag II",
    "image": "images/extended_shotgun_mag_ii.png",
    "hasImage": true,
    "baseCategory": null,
    "rarity": "Uncommon",
    "type": "Modification",
    "value": 2000,
    "foundIn": null,
    "weightKg": 0.5,
    "stackSize": null,
    "craftBench": null,
    "recyclesInto": {},
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "extended_shotgun_mag_ii_blueprint",
    "name": "Extended Shotgun Mag II Blueprint",
    "image": "images/extended_shotgun_mag_ii_blueprint.png",
    "hasImage": false,
    "baseCategory": null,
    "rarity": "Legendary",
    "type": "Blueprint",
    "value": 5000,
    "foundIn": null,
    "weightKg": 0,
    "stackSize": 1,
    "craftBench": null,
    "recyclesInto": {},
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "extended_shotgun_mag_iii",
    "name": "Extended Shotgun Mag III",
    "image": "images/extended_shotgun_mag_iii.png",
    "hasImage": false,
    "baseCategory": null,
    "rarity": "Rare",
    "type": "Modification",
    "value": 5000,
    "foundIn": null,
    "weightKg": 0.75,
    "stackSize": null,
    "craftBench": null,
    "recyclesInto": {},
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "extended_shotgun_mag_iii_blueprint",
    "name": "Extended Shotgun Mag III Blueprint",
    "image": "images/extended_shotgun_mag_iii_blueprint.png",
    "hasImage": false,
    "baseCategory": null,
    "rarity": "Legendary",
    "type": "Blueprint",
    "value": 5000,
    "foundIn": null,
    "weightKg": 0,
    "stackSize": 1,
    "craftBench": null,
    "recyclesInto": {},
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "fabric",
    "name": "Fabric",
    "image": "images/fabric.png",
    "hasImage": true,
    "baseCategory": "keep",
    "rarity": "Common",
    "type": "Basic Material",
    "value": 50,
    "foundIn": "Commercial, Medical, Residential",
    "weightKg": 0.1,
    "stackSize": 50,
    "craftBench": null,
    "recyclesInto": {},
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {
      "gear_bench": [
        1
      ],
      "medical_lab": [
        1
      ]
    },
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": "Keep • Workstations: Gear Bench T1, Medical Lab T1",
    "reasons": [
      {
        "type": "workshop",
        "itemId": "fabric",
        "workshopStation": "gear_bench",
        "workshopLevel": "1"
      },
      {
        "type": "workshop",
        "itemId": "fabric",
        "workshopStation": "medical_lab",
        "workshopLevel": "1"
      }
    ]
  },
  {
    "key": "faded_photograph",
    "name": "Faded Photograph",
    "image": "images/faded_photograph.png",
    "hasImage": true,
    "baseCategory": "sell",
    "rarity": "Common",
    "type": "Trinket",
    "value": 640,
    "foundIn": "Residential",
    "weightKg": 0.3,
    "stackSize": 15,
    "craftBench": null,
    "recyclesInto": {},
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": "Sell",
    "reasons": []
  },
  {
    "key": "ferro_i",
    "name": "Ferro I",
    "image": "images/ferro_i.png",
    "hasImage": false,
    "baseCategory": null,
    "rarity": "Common",
    "type": "Battle Rifle",
    "value": 475,
    "foundIn": null,
    "weightKg": 8,
    "stackSize": null,
    "craftBench": [
      "workbench",
      "weapon_bench"
    ],
    "recyclesInto": {
      "metal_parts": 2,
      "rubber_parts": 1
    },
    "salvagesInto": {
      "metal_parts": 2
    },
    "recipe": {
      "metal_parts": 5,
      "rubber_parts": 2
    },
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "ferro_ii",
    "name": "Ferro II",
    "image": "images/ferro_ii.png",
    "hasImage": false,
    "baseCategory": null,
    "rarity": "Common",
    "type": "Battle Rifle",
    "value": 1000,
    "foundIn": null,
    "weightKg": 8,
    "stackSize": null,
    "craftBench": null,
    "recyclesInto": {
      "metal_parts": 4,
      "simple_gun_parts": 3
    },
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "ferro_iii",
    "name": "Ferro III",
    "image": "images/ferro_iii.png",
    "hasImage": false,
    "baseCategory": null,
    "rarity": "Common",
    "type": "Battle Rifle",
    "value": 2000,
    "foundIn": null,
    "weightKg": 8,
    "stackSize": null,
    "craftBench": null,
    "recyclesInto": {
      "metal_parts": 6,
      "simple_gun_parts": 1
    },
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "ferro_iv",
    "name": "Ferro IV",
    "image": "images/ferro_iv.png",
    "hasImage": false,
    "baseCategory": null,
    "rarity": "Common",
    "type": "Battle Rifle",
    "value": 2900,
    "foundIn": null,
    "weightKg": 8,
    "stackSize": null,
    "craftBench": null,
    "recyclesInto": {
      "mechanical_components": 1,
      "simple_gun_parts": 2
    },
    "salvagesInto": {
      "metal_parts": 2
    },
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "fertilizer",
    "name": "Fertilizer",
    "image": "images/fertilizer.png",
    "hasImage": true,
    "baseCategory": "keep",
    "rarity": "Uncommon",
    "type": "Nature",
    "value": 1000,
    "foundIn": "Nature",
    "weightKg": 0.4,
    "stackSize": 5,
    "craftBench": null,
    "recyclesInto": {
      "assorted_seeds": 2
    },
    "salvagesInto": {},
    "recipe": {},
    "quest": true,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": "Keep • Quest item",
    "reasons": [
      {
        "type": "quest",
        "itemId": "fertilizer",
        "questId": "ss10q",
        "questName": "Unexpected Initiative"
      }
    ]
  },
  {
    "key": "film_reel",
    "name": "Film Reel",
    "image": "images/film_reel.png",
    "hasImage": true,
    "baseCategory": "sell",
    "rarity": "Rare",
    "type": "Trinket",
    "value": 2000,
    "foundIn": "Old World, Residential",
    "weightKg": 0.2,
    "stackSize": 3,
    "craftBench": null,
    "recyclesInto": {},
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": "Sell",
    "reasons": []
  },
  {
    "key": "fine_wristwatch",
    "name": "Fine Wristwatch",
    "image": "images/fine_wristwatch.png",
    "hasImage": true,
    "baseCategory": "sell",
    "rarity": "Rare",
    "type": "Trinket",
    "value": 3000,
    "foundIn": "Residential, Commercial",
    "weightKg": 0.2,
    "stackSize": 3,
    "craftBench": null,
    "recyclesInto": {},
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": "Sell",
    "reasons": []
  },
  {
    "key": "fireball_burner",
    "name": "Fireball Burner",
    "image": "images/fireball_burner.png",
    "hasImage": true,
    "baseCategory": "keep",
    "rarity": "Uncommon",
    "type": "Recyclable",
    "value": 640,
    "foundIn": "ARC",
    "weightKg": 0.5,
    "stackSize": 3,
    "craftBench": null,
    "recyclesInto": {
      "arc_alloy": 1,
      "crude_explosives": 1
    },
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {
      "refiner": [
        2
      ]
    },
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": "Keep • Workstations: Refiner T2",
    "reasons": [
      {
        "type": "workshop",
        "itemId": "fireball_burner",
        "workshopStation": "refiner",
        "workshopLevel": "2"
      }
    ]
  },
  {
    "key": "first_wave_compass",
    "name": "First Wave Compass",
    "image": "images/first_wave_compass.png",
    "hasImage": false,
    "baseCategory": "keep",
    "rarity": "Common",
    "type": "Trinket",
    "value": null,
    "foundIn": null,
    "weightKg": 0.25,
    "stackSize": null,
    "craftBench": null,
    "recyclesInto": {},
    "salvagesInto": {},
    "recipe": {},
    "quest": true,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": "Keep • Quest item",
    "reasons": [
      {
        "type": "quest",
        "itemId": "first_wave_compass",
        "questId": "ss10h",
        "questName": "Broken Monument"
      }
    ]
  },
  {
    "key": "first_wave_rations",
    "name": "First Wave Rations",
    "image": "images/first_wave_rations.png",
    "hasImage": false,
    "baseCategory": "keep",
    "rarity": "Common",
    "type": "Trinket",
    "value": null,
    "foundIn": null,
    "weightKg": 0.25,
    "stackSize": null,
    "craftBench": null,
    "recyclesInto": {},
    "salvagesInto": {},
    "recipe": {},
    "quest": true,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": "Keep • Quest item",
    "reasons": [
      {
        "type": "quest",
        "itemId": "first_wave_rations",
        "questId": "ss10h",
        "questName": "Broken Monument"
      }
    ]
  },
  {
    "key": "first_wave_tape",
    "name": "First Wave Tape",
    "image": "images/first_wave_tape.png",
    "hasImage": false,
    "baseCategory": "keep",
    "rarity": "Common",
    "type": "Trinket",
    "value": null,
    "foundIn": null,
    "weightKg": 0.25,
    "stackSize": null,
    "craftBench": null,
    "recyclesInto": {},
    "salvagesInto": {},
    "recipe": {},
    "quest": true,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": "Keep • Quest item",
    "reasons": [
      {
        "type": "quest",
        "itemId": "first_wave_tape",
        "questId": "ss10h",
        "questName": "Broken Monument"
      }
    ]
  },
  {
    "key": "flame_spray",
    "name": "Flame Spray",
    "image": "images/flame_spray.png",
    "hasImage": true,
    "baseCategory": null,
    "rarity": "Uncommon",
    "type": "Quick Use",
    "value": 640,
    "foundIn": null,
    "weightKg": 1,
    "stackSize": null,
    "craftBench": null,
    "recyclesInto": {},
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "flow_controller",
    "name": "Flow Controller",
    "image": "images/flow_controller.png",
    "hasImage": false,
    "baseCategory": "keep",
    "rarity": "Rare",
    "type": "Recyclable",
    "value": 3000,
    "foundIn": "Exodus",
    "weightKg": 1.5,
    "stackSize": 3,
    "craftBench": null,
    "recyclesInto": {
      "advanced_mechanical_components": 1,
      "sensors": 1
    },
    "salvagesInto": {},
    "recipe": {},
    "quest": true,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": "Keep • Quest item",
    "reasons": [
      {
        "type": "quest",
        "itemId": "flow_controller",
        "questId": "12_snap_and_salvage",
        "questName": "Snap and Salvage"
      }
    ]
  },
  {
    "key": "free_loadout_augment",
    "name": "Free Loadout Augment",
    "image": "images/free_loadout_augment.png",
    "hasImage": true,
    "baseCategory": null,
    "rarity": "Common",
    "type": "Augment",
    "value": 100,
    "foundIn": null,
    "weightKg": 1,
    "stackSize": null,
    "craftBench": null,
    "recyclesInto": {},
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "frequency_modulation_box",
    "name": "Frequency Modulation Box",
    "image": "images/frequency_modulation_box.png",
    "hasImage": true,
    "baseCategory": "recycle",
    "rarity": "Rare",
    "type": "Recyclable",
    "value": 3000,
    "foundIn": "Exodus",
    "weightKg": 1.5,
    "stackSize": 3,
    "craftBench": null,
    "recyclesInto": {
      "advanced_electrical_components": 1,
      "speaker_component": 1
    },
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": "Recycle",
    "reasons": [
      {
        "type": "recycle",
        "itemId": "frequency_modulation_box",
        "recycleComponentId": "advanced_electrical_components",
        "recycleComponentName": "Advanced Electrical Components",
        "chain": [
          {
            "action": "recycle",
            "itemId": "frequency_modulation_box",
            "itemName": "Frequency Modulation Box",
            "targetId": "advanced_electrical_components",
            "targetName": "Advanced Electrical Components"
          },
          {
            "action": "use_in_workshop",
            "itemId": "advanced_electrical_components",
            "itemName": "Advanced Electrical Components",
            "workshopStation": "gear_bench",
            "workshopLevel": "3"
          }
        ]
      }
    ]
  },
  {
    "key": "fried_motherboard",
    "name": "Fried Motherboard",
    "image": "images/fried_motherboard.png",
    "hasImage": true,
    "baseCategory": "keep",
    "rarity": "Rare",
    "type": "Recyclable",
    "value": 1000,
    "foundIn": "Technological",
    "weightKg": 3,
    "stackSize": null,
    "craftBench": null,
    "recyclesInto": {
      "plastic_parts": 5,
      "electrical_components": 2
    },
    "salvagesInto": {
      "wires": 5
    },
    "recipe": {},
    "quest": false,
    "workstations": {
      "utility_station": [
        3
      ]
    },
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": "Keep • Workstations: Utility Station T3",
    "reasons": [
      {
        "type": "workshop",
        "itemId": "fried_motherboard",
        "workshopStation": "utility_station",
        "workshopLevel": "3"
      }
    ]
  },
  {
    "key": "fruit_mix",
    "name": "Fruit Mix",
    "image": "images/fruit_mix.png",
    "hasImage": false,
    "baseCategory": null,
    "rarity": "Uncommon",
    "type": "Quick Use",
    "value": 1800,
    "foundIn": null,
    "weightKg": 0.3,
    "stackSize": 5,
    "craftBench": "Inventory",
    "recyclesInto": {},
    "salvagesInto": {},
    "recipe": {
      "lemon": 1,
      "apricot": 1,
      "prickly_pear": 1
    },
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "frying_pan",
    "name": "Frying Pan",
    "image": "images/frying_pan.png",
    "hasImage": true,
    "baseCategory": "recycle",
    "rarity": "Rare",
    "type": "Recyclable",
    "value": 640,
    "foundIn": "Residential",
    "weightKg": 2,
    "stackSize": 3,
    "craftBench": null,
    "recyclesInto": {
      "metal_parts": 8
    },
    "salvagesInto": {
      "metal_parts": 4
    },
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": "Recycle",
    "reasons": [
      {
        "type": "recycle",
        "itemId": "frying_pan",
        "recycleComponentId": "metal_parts",
        "recycleComponentName": "Metal Parts",
        "chain": [
          {
            "action": "recycle",
            "itemId": "frying_pan",
            "itemName": "Frying Pan",
            "targetId": "metal_parts",
            "targetName": "Metal Parts"
          },
          {
            "action": "use_in_workshop",
            "itemId": "metal_parts",
            "itemName": "Metal Parts",
            "workshopStation": "gunsmith",
            "workshopLevel": "1"
          }
        ]
      }
    ]
  },
  {
    "key": "garlic_press",
    "name": "Garlic Press",
    "image": "images/garlic_press.png",
    "hasImage": true,
    "baseCategory": "recycle",
    "rarity": "Uncommon",
    "type": "Recyclable",
    "value": 1000,
    "foundIn": "Residential, Commercial",
    "weightKg": 0.8,
    "stackSize": 3,
    "craftBench": null,
    "recyclesInto": {
      "metal_parts": 12
    },
    "salvagesInto": {
      "metal_parts": 7
    },
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": "Recycle",
    "reasons": [
      {
        "type": "recycle",
        "itemId": "garlic_press",
        "recycleComponentId": "metal_parts",
        "recycleComponentName": "Metal Parts",
        "chain": [
          {
            "action": "recycle",
            "itemId": "garlic_press",
            "itemName": "Garlic Press",
            "targetId": "metal_parts",
            "targetName": "Metal Parts"
          },
          {
            "action": "use_in_workshop",
            "itemId": "metal_parts",
            "itemName": "Metal Parts",
            "workshopStation": "gunsmith",
            "workshopLevel": "1"
          }
        ]
      }
    ]
  },
  {
    "key": "gas_grenade",
    "name": "Gas Grenade",
    "image": "images/gas_grenade.png",
    "hasImage": true,
    "baseCategory": null,
    "rarity": "Common",
    "type": "Quick Use",
    "value": 270,
    "foundIn": null,
    "weightKg": 0.2,
    "stackSize": 3,
    "craftBench": "explosives_bench",
    "recyclesInto": {
      "chemicals": 1,
      "rubber_parts": 1
    },
    "salvagesInto": {},
    "recipe": {
      "chemicals": 4,
      "rubber_parts": 2
    },
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "gas_grenade_trap",
    "name": "Gas Grenade Trap",
    "image": "images/gas_grenade_trap.png",
    "hasImage": true,
    "baseCategory": null,
    "rarity": "Common",
    "type": "Quick Use",
    "value": 300,
    "foundIn": null,
    "weightKg": 0.25,
    "stackSize": 3,
    "craftBench": null,
    "recyclesInto": {},
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "gas_mine",
    "name": "Gas Mine",
    "image": "images/gas_mine.png",
    "hasImage": false,
    "baseCategory": null,
    "rarity": "Common",
    "type": "Quick Use",
    "value": 270,
    "foundIn": null,
    "weightKg": 0.25,
    "stackSize": 3,
    "craftBench": null,
    "recyclesInto": {
      "chemicals": 1,
      "rubber_parts": 1
    },
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "geiger_counter",
    "name": "Geiger Counter",
    "image": "images/geiger_counter.png",
    "hasImage": true,
    "baseCategory": "recycle",
    "rarity": "Epic",
    "type": "Recyclable",
    "value": 3500,
    "foundIn": "Exodus",
    "weightKg": 1.5,
    "stackSize": 3,
    "craftBench": null,
    "recyclesInto": {
      "battery": 3,
      "exodus_modules": 1
    },
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": "Recycle",
    "reasons": [
      {
        "type": "recycle",
        "itemId": "geiger_counter",
        "recycleComponentId": "battery",
        "recycleComponentName": "Battery",
        "chain": [
          {
            "action": "recycle",
            "itemId": "geiger_counter",
            "itemName": "Geiger Counter",
            "targetId": "battery",
            "targetName": "Battery"
          },
          {
            "action": "use_in_quest",
            "itemId": "battery",
            "itemName": "Battery",
            "questId": "ss10y",
            "questName": "After Rain Comes"
          }
        ]
      },
      {
        "type": "recycle",
        "itemId": "geiger_counter",
        "recycleComponentId": "exodus_modules",
        "recycleComponentName": "Exodus Modules",
        "chain": [
          {
            "action": "recycle",
            "itemId": "geiger_counter",
            "itemName": "Geiger Counter",
            "targetId": "exodus_modules",
            "targetName": "Exodus Modules"
          }
        ]
      }
    ]
  },
  {
    "key": "great_mullein",
    "name": "Great Mullein",
    "image": "images/great_mullein.png",
    "hasImage": true,
    "baseCategory": "keep",
    "rarity": "Uncommon",
    "type": "Topside Material",
    "value": 300,
    "foundIn": "Nature",
    "weightKg": 0.25,
    "stackSize": 15,
    "craftBench": null,
    "recyclesInto": {
      "assorted_seeds": 2
    },
    "salvagesInto": {},
    "recipe": {},
    "quest": true,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": "Keep • Quest item",
    "reasons": [
      {
        "type": "quest",
        "itemId": "great_mullein",
        "questId": "ss10c",
        "questName": "Doctor's Orders"
      }
    ]
  },
  {
    "key": "green_light_stick",
    "name": "Green Light Stick",
    "image": "images/green_light_stick.png",
    "hasImage": true,
    "baseCategory": null,
    "rarity": "Common",
    "type": "Quick Use",
    "value": 150,
    "foundIn": null,
    "weightKg": 0.15,
    "stackSize": 5,
    "craftBench": "utility_bench",
    "recyclesInto": {},
    "salvagesInto": {},
    "recipe": {
      "chemicals": 3
    },
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "green_light_stick_blueprint",
    "name": "Green Light Stick Blueprint",
    "image": "images/green_light_stick_blueprint.png",
    "hasImage": true,
    "baseCategory": null,
    "rarity": "Legendary",
    "type": "Blueprint",
    "value": 5000,
    "foundIn": null,
    "weightKg": 0,
    "stackSize": 1,
    "craftBench": null,
    "recyclesInto": {},
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "hairpin_i",
    "name": "Hairpin I",
    "image": "images/hairpin_i.png",
    "hasImage": true,
    "baseCategory": null,
    "rarity": "Common",
    "type": "Pistol",
    "value": 450,
    "foundIn": null,
    "weightKg": 3,
    "stackSize": null,
    "craftBench": [
      "workbench",
      "weapon_bench"
    ],
    "recyclesInto": {
      "metal_parts": 2,
      "rubber_parts": 1
    },
    "salvagesInto": {
      "metal_parts": 2
    },
    "recipe": {
      "metal_parts": 2,
      "plastic_parts": 5
    },
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "hairpin_ii",
    "name": "Hairpin II",
    "image": "images/hairpin_ii.png",
    "hasImage": false,
    "baseCategory": null,
    "rarity": "Common",
    "type": "Pistol",
    "value": 1000,
    "foundIn": null,
    "weightKg": 3,
    "stackSize": null,
    "craftBench": "weapon_bench",
    "recyclesInto": {
      "metal_parts": 4,
      "plastic_parts": 4
    },
    "salvagesInto": {
      "metal_parts": 4
    },
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "hairpin_iii",
    "name": "Hairpin III",
    "image": "images/hairpin_iii.png",
    "hasImage": false,
    "baseCategory": null,
    "rarity": "Common",
    "type": "Pistol",
    "value": 2000,
    "foundIn": null,
    "weightKg": 3,
    "stackSize": null,
    "craftBench": "weapon_bench",
    "recyclesInto": {
      "metal_parts": 6,
      "simple_gun_parts": 1
    },
    "salvagesInto": {
      "simple_gun_parts": 1
    },
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "hairpin_iv",
    "name": "Hairpin IV",
    "image": "images/hairpin_iv.png",
    "hasImage": false,
    "baseCategory": null,
    "rarity": "Common",
    "type": "Pistol",
    "value": 2900,
    "foundIn": null,
    "weightKg": 3,
    "stackSize": null,
    "craftBench": "weapon_bench",
    "recyclesInto": {
      "mechanical_components": 1,
      "simple_gun_parts": 2
    },
    "salvagesInto": {
      "simple_gun_parts": 2
    },
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "headphones",
    "name": "Headphones",
    "image": "images/headphones.png",
    "hasImage": true,
    "baseCategory": "recycle",
    "rarity": "Rare",
    "type": "Recyclable",
    "value": 1000,
    "foundIn": "Residential, Commercial",
    "weightKg": 2,
    "stackSize": 3,
    "craftBench": null,
    "recyclesInto": {
      "rubber_parts": 7,
      "speaker_component": 1
    },
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": "Recycle",
    "reasons": [
      {
        "type": "recycle",
        "itemId": "headphones",
        "recycleComponentId": "rubber_parts",
        "recycleComponentName": "Rubber Parts",
        "chain": [
          {
            "action": "recycle",
            "itemId": "headphones",
            "itemName": "Headphones",
            "targetId": "rubber_parts",
            "targetName": "Rubber Parts"
          },
          {
            "action": "use_in_workshop",
            "itemId": "rubber_parts",
            "itemName": "Rubber Parts",
            "workshopStation": "gunsmith",
            "workshopLevel": "1"
          }
        ]
      }
    ]
  },
  {
    "key": "heavy_ammo",
    "name": "Heavy Ammo",
    "image": "images/heavy_ammo.png",
    "hasImage": true,
    "baseCategory": null,
    "rarity": "Common",
    "type": "Ammunition",
    "value": 12,
    "foundIn": null,
    "weightKg": 0.05,
    "stackSize": 40,
    "craftBench": "workbench",
    "recyclesInto": {},
    "salvagesInto": {},
    "recipe": {
      "metal_parts": 3,
      "chemicals": 2
    },
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "heavy_fuze_grenade",
    "name": "Heavy Fuze Grenade",
    "image": "images/heavy_fuze_grenade.png",
    "hasImage": true,
    "baseCategory": null,
    "rarity": "Rare",
    "type": "Quick Use",
    "value": 1600,
    "foundIn": null,
    "weightKg": 0.2,
    "stackSize": 3,
    "craftBench": "explosives_bench",
    "recyclesInto": {
      "oil": 1,
      "rubber_parts": 2
    },
    "salvagesInto": {},
    "recipe": {
      "explosive_compound": 1,
      "canister": 2
    },
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "heavy_gun_parts",
    "name": "Heavy Gun Parts",
    "image": "images/heavy_gun_parts.png",
    "hasImage": true,
    "baseCategory": "keep",
    "rarity": "Rare",
    "type": "Topside Material",
    "value": 700,
    "foundIn": "Security, Raider",
    "weightKg": 0.5,
    "stackSize": 5,
    "craftBench": "refiner",
    "recyclesInto": {
      "simple_gun_parts": 2
    },
    "salvagesInto": {},
    "recipe": {
      "simple_gun_parts": 4
    },
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": "Sell",
    "reasons": []
  },
  {
    "key": "heavy_gun_parts_blueprint",
    "name": "Heavy Gun Parts Blueprint",
    "image": "images/heavy_gun_parts_blueprint.png",
    "hasImage": true,
    "baseCategory": null,
    "rarity": "Legendary",
    "type": "Blueprint",
    "value": 5000,
    "foundIn": null,
    "weightKg": 0,
    "stackSize": 1,
    "craftBench": null,
    "recyclesInto": {},
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "heavy_shield",
    "name": "Heavy Shield",
    "image": "images/heavy_shield.png",
    "hasImage": true,
    "baseCategory": null,
    "rarity": "Epic",
    "type": "Shield",
    "value": 5500,
    "foundIn": null,
    "weightKg": 9,
    "stackSize": null,
    "craftBench": "equipment_bench",
    "recyclesInto": {},
    "salvagesInto": {},
    "recipe": {
      "power_rod": 1,
      "voltage_converter": 2
    },
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "herbal_bandage",
    "name": "Herbal Bandage",
    "image": "images/herbal_bandage.png",
    "hasImage": true,
    "baseCategory": null,
    "rarity": "Uncommon",
    "type": "Quick Use",
    "value": 640,
    "foundIn": null,
    "weightKg": 0.15,
    "stackSize": 5,
    "craftBench": "med_station",
    "recyclesInto": {
      "assorted_seeds": 2,
      "fabric": 5
    },
    "salvagesInto": {},
    "recipe": {
      "durable_cloth": 1,
      "great_mullein": 1
    },
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "horizontal_grip",
    "name": "Horizontal Grip",
    "image": "images/horizontal_grip.png",
    "hasImage": false,
    "baseCategory": null,
    "rarity": "Epic",
    "type": "Modification",
    "value": 7000,
    "foundIn": null,
    "weightKg": 0.5,
    "stackSize": null,
    "craftBench": "weapon_bench",
    "recyclesInto": {
      "mod_components": 1,
      "duct_tape": 2
    },
    "salvagesInto": {
      "mechanical_components": 2
    },
    "recipe": {
      "mod_components": 2,
      "duct_tape": 5
    },
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "horizontal_grip_blueprint",
    "name": "Horizontal Grip Blueprint",
    "image": "images/horizontal_grip_blueprint.png",
    "hasImage": false,
    "baseCategory": null,
    "rarity": "Legendary",
    "type": "Blueprint",
    "value": 5000,
    "foundIn": null,
    "weightKg": 0,
    "stackSize": null,
    "craftBench": null,
    "recyclesInto": {},
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "hornet_driver",
    "name": "Hornet Driver",
    "image": "images/hornet_driver.png",
    "hasImage": true,
    "baseCategory": "keep",
    "rarity": "Rare",
    "type": "Recyclable",
    "value": 2000,
    "foundIn": "ARC",
    "weightKg": 0.75,
    "stackSize": 3,
    "craftBench": null,
    "recyclesInto": {
      "arc_alloy": 2,
      "electrical_components": 2
    },
    "salvagesInto": {
      "electrical_components": 2
    },
    "recipe": {},
    "quest": true,
    "workstations": {
      "gear_bench": [
        2
      ]
    },
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": "Keep • Quest item • Workstations: Gear Bench T2",
    "reasons": [
      {
        "type": "quest",
        "itemId": "hornet_driver",
        "questId": "ss9",
        "questName": "The Trifecta"
      },
      {
        "type": "workshop",
        "itemId": "hornet_driver",
        "workshopStation": "gear_bench",
        "workshopLevel": "2"
      }
    ]
  },
  {
    "key": "household_cleaner",
    "name": "Household Cleaner",
    "image": "images/household_cleaner.png",
    "hasImage": true,
    "baseCategory": "recycle",
    "rarity": "Uncommon",
    "type": "Recyclable",
    "value": 640,
    "foundIn": "Residential",
    "weightKg": 0.8,
    "stackSize": 3,
    "craftBench": null,
    "recyclesInto": {
      "chemicals": 11
    },
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": "Recycle",
    "reasons": [
      {
        "type": "recycle",
        "itemId": "household_cleaner",
        "recycleComponentId": "chemicals",
        "recycleComponentName": "Chemicals",
        "chain": [
          {
            "action": "recycle",
            "itemId": "household_cleaner",
            "itemName": "Household Cleaner",
            "targetId": "chemicals",
            "targetName": "Chemicals"
          },
          {
            "action": "use_in_workshop",
            "itemId": "chemicals",
            "itemName": "Chemicals",
            "workshopStation": "explosives_station",
            "workshopLevel": "1"
          }
        ]
      }
    ]
  },
  {
    "key": "hullcracker_blueprint",
    "name": "Hullcracker Blueprint",
    "image": "images/hullcracker_blueprint.png",
    "hasImage": false,
    "baseCategory": null,
    "rarity": "Legendary",
    "type": "Blueprint",
    "value": 5000,
    "foundIn": null,
    "weightKg": 0,
    "stackSize": null,
    "craftBench": null,
    "recyclesInto": {},
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "hullcracker_i",
    "name": "Hullcracker I",
    "image": "images/hullcracker_i.png",
    "hasImage": false,
    "baseCategory": null,
    "rarity": "Epic",
    "type": "Special",
    "value": 10000,
    "foundIn": null,
    "weightKg": 7,
    "stackSize": 1,
    "craftBench": "weapon_bench",
    "recyclesInto": {
      "advanced_mechanical_components": 2,
      "heavy_gun_parts": 2
    },
    "salvagesInto": {},
    "recipe": {
      "magnetic_accelerator": 1,
      "heavy_gun_parts": 3,
      "exodus_modules": 1
    },
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "hullcracker_ii",
    "name": "Hullcracker II",
    "image": "images/hullcracker_ii.png",
    "hasImage": false,
    "baseCategory": null,
    "rarity": "Epic",
    "type": "Special",
    "value": 13000,
    "foundIn": null,
    "weightKg": 7,
    "stackSize": null,
    "craftBench": "weapon_bench",
    "recyclesInto": {
      "advanced_mechanical_components": 2,
      "heavy_gun_parts": 3
    },
    "salvagesInto": {
      "heavy_gun_parts": 3
    },
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "hullcracker_iii",
    "name": "Hullcracker III",
    "image": "images/hullcracker_iii.png",
    "hasImage": false,
    "baseCategory": null,
    "rarity": "Epic",
    "type": "Special",
    "value": 17000,
    "foundIn": null,
    "weightKg": 7,
    "stackSize": null,
    "craftBench": "weapon_bench",
    "recyclesInto": {
      "advanced_mechanical_components": 3,
      "heavy_gun_parts": 4
    },
    "salvagesInto": {
      "heavy_gun_parts": 4
    },
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "hullcracker_iv",
    "name": "Hullcracker IV",
    "image": "images/hullcracker_iv.png",
    "hasImage": false,
    "baseCategory": null,
    "rarity": "Epic",
    "type": "Special",
    "value": 22000,
    "foundIn": null,
    "weightKg": 7,
    "stackSize": null,
    "craftBench": "weapon_bench",
    "recyclesInto": {
      "advanced_mechanical_components": 4,
      "heavy_gun_parts": 5
    },
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "humidifier",
    "name": "Humidifier",
    "image": "images/humidifier.png",
    "hasImage": true,
    "baseCategory": "keep",
    "rarity": "Rare",
    "type": "Recyclable",
    "value": 1000,
    "foundIn": "Residential",
    "weightKg": 2,
    "stackSize": 3,
    "craftBench": null,
    "recyclesInto": {
      "canister": 3,
      "wires": 2
    },
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": true,
    "expeditionPhases": [
      4
    ],
    "reasonSummary": "Keep • Expedition project (phase 4)",
    "reasons": [
      {
        "type": "project",
        "itemId": "humidifier",
        "projectId": "expedition_project",
        "projectName": "Expedition Project",
        "projectPhase": 4
      }
    ]
  },
  {
    "key": "ice_cream_scooper",
    "name": "Ice Cream Scooper",
    "image": "images/ice_cream_scooper.png",
    "hasImage": true,
    "baseCategory": "recycle",
    "rarity": "Uncommon",
    "type": "Recyclable",
    "value": 640,
    "foundIn": "Commercial",
    "weightKg": 0.8,
    "stackSize": 3,
    "craftBench": null,
    "recyclesInto": {
      "metal_parts": 7
    },
    "salvagesInto": {
      "metal_parts": 3
    },
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": "Recycle",
    "reasons": [
      {
        "type": "recycle",
        "itemId": "ice_cream_scooper",
        "recycleComponentId": "metal_parts",
        "recycleComponentName": "Metal Parts",
        "chain": [
          {
            "action": "recycle",
            "itemId": "ice_cream_scooper",
            "itemName": "Ice Cream Scooper",
            "targetId": "metal_parts",
            "targetName": "Metal Parts"
          },
          {
            "action": "use_in_workshop",
            "itemId": "metal_parts",
            "itemName": "Metal Parts",
            "workshopStation": "gunsmith",
            "workshopLevel": "1"
          }
        ]
      }
    ]
  },
  {
    "key": "il_toro_blueprint",
    "name": "Il Toro Blueprint",
    "image": "images/il_toro_blueprint.png",
    "hasImage": true,
    "baseCategory": null,
    "rarity": "Legendary",
    "type": "Blueprint",
    "value": 5000,
    "foundIn": null,
    "weightKg": 0,
    "stackSize": 1,
    "craftBench": null,
    "recyclesInto": {},
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "il_toro_i",
    "name": "Il Toro I",
    "image": "images/il_toro_i.png",
    "hasImage": false,
    "baseCategory": null,
    "rarity": "Uncommon",
    "type": "Shotgun",
    "value": 5000,
    "foundIn": null,
    "weightKg": 8,
    "stackSize": null,
    "craftBench": "weapon_bench",
    "recyclesInto": {
      "mechanical_components": 2,
      "simple_gun_parts": 2
    },
    "salvagesInto": {},
    "recipe": {
      "mechanical_components": 5,
      "simple_gun_parts": 6
    },
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "il_toro_ii",
    "name": "Il Toro II",
    "image": "images/il_toro_ii.png",
    "hasImage": false,
    "baseCategory": null,
    "rarity": "Uncommon",
    "type": "Shotgun",
    "value": 7000,
    "foundIn": null,
    "weightKg": 8,
    "stackSize": null,
    "craftBench": "weapon_bench",
    "recyclesInto": {},
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "il_toro_iii",
    "name": "Il Toro III",
    "image": "images/il_toro_iii.png",
    "hasImage": false,
    "baseCategory": null,
    "rarity": "Uncommon",
    "type": "Shotgun",
    "value": 10000,
    "foundIn": null,
    "weightKg": 8,
    "stackSize": null,
    "craftBench": "weapon_bench",
    "recyclesInto": {
      "mechanical_components": 4,
      "simple_gun_parts": 4
    },
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "il_toro_iv",
    "name": "Il Toro IV",
    "image": "images/il_toro_iv.png",
    "hasImage": false,
    "baseCategory": null,
    "rarity": "Uncommon",
    "type": "Shotgun",
    "value": 13000,
    "foundIn": null,
    "weightKg": 8,
    "stackSize": null,
    "craftBench": "weapon_bench",
    "recyclesInto": {
      "mechanical_components": 5,
      "simple_gun_parts": 5
    },
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "impure_arc_coolant",
    "name": "Impure ARC Coolant",
    "image": "images/impure_arc_coolant.png",
    "hasImage": true,
    "baseCategory": "recycle",
    "rarity": "Uncommon",
    "type": "Recyclable",
    "value": 640,
    "foundIn": "ARC",
    "weightKg": 0.33,
    "stackSize": 3,
    "craftBench": null,
    "recyclesInto": {
      "chemicals": 13
    },
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": "Recycle",
    "reasons": [
      {
        "type": "recycle",
        "itemId": "impure_arc_coolant",
        "recycleComponentId": "chemicals",
        "recycleComponentName": "Chemicals",
        "chain": [
          {
            "action": "recycle",
            "itemId": "impure_arc_coolant",
            "itemName": "Impure ARC Coolant",
            "targetId": "chemicals",
            "targetName": "Chemicals"
          },
          {
            "action": "use_in_workshop",
            "itemId": "chemicals",
            "itemName": "Chemicals",
            "workshopStation": "explosives_station",
            "workshopLevel": "1"
          }
        ]
      }
    ]
  },
  {
    "key": "industrial_battery",
    "name": "Industrial Battery",
    "image": "images/industrial_battery.png",
    "hasImage": true,
    "baseCategory": "keep",
    "rarity": "Rare",
    "type": "Recyclable",
    "value": 1000,
    "foundIn": "Industrial",
    "weightKg": 2,
    "stackSize": 3,
    "craftBench": null,
    "recyclesInto": {
      "chemicals": 7,
      "battery": 2
    },
    "salvagesInto": {
      "battery": 2
    },
    "recipe": {},
    "quest": false,
    "workstations": {
      "gear_bench": [
        3
      ]
    },
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": "Keep • Workstations: Gear Bench T3",
    "reasons": [
      {
        "type": "workshop",
        "itemId": "industrial_battery",
        "workshopStation": "gear_bench",
        "workshopLevel": "3"
      }
    ]
  },
  {
    "key": "industrial_charger",
    "name": "Industrial Charger",
    "image": "images/industrial_charger.png",
    "hasImage": true,
    "baseCategory": "recycle",
    "rarity": "Rare",
    "type": "Recyclable",
    "value": 1000,
    "foundIn": "Industrial",
    "weightKg": 2,
    "stackSize": 3,
    "craftBench": null,
    "recyclesInto": {
      "metal_parts": 5,
      "voltage_converter": 1
    },
    "salvagesInto": {
      "voltage_converter": 1
    },
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": "Recycle",
    "reasons": [
      {
        "type": "recycle",
        "itemId": "industrial_charger",
        "recycleComponentId": "metal_parts",
        "recycleComponentName": "Metal Parts",
        "chain": [
          {
            "action": "recycle",
            "itemId": "industrial_charger",
            "itemName": "Industrial Charger",
            "targetId": "metal_parts",
            "targetName": "Metal Parts"
          },
          {
            "action": "use_in_workshop",
            "itemId": "metal_parts",
            "itemName": "Metal Parts",
            "workshopStation": "gunsmith",
            "workshopLevel": "1"
          }
        ]
      }
    ]
  },
  {
    "key": "industrial_magnet",
    "name": "Industrial Magnet",
    "image": "images/industrial_magnet.png",
    "hasImage": true,
    "baseCategory": "recycle",
    "rarity": "Rare",
    "type": "Recyclable",
    "value": 1000,
    "foundIn": "Industrial",
    "weightKg": 2,
    "stackSize": 3,
    "craftBench": null,
    "recyclesInto": {
      "magnet": 2,
      "metal_parts": 4
    },
    "salvagesInto": {
      "magnet": 2
    },
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": "Recycle",
    "reasons": [
      {
        "type": "recycle",
        "itemId": "industrial_magnet",
        "recycleComponentId": "metal_parts",
        "recycleComponentName": "Metal Parts",
        "chain": [
          {
            "action": "recycle",
            "itemId": "industrial_magnet",
            "itemName": "Industrial Magnet",
            "targetId": "metal_parts",
            "targetName": "Metal Parts"
          },
          {
            "action": "use_in_workshop",
            "itemId": "metal_parts",
            "itemName": "Metal Parts",
            "workshopStation": "gunsmith",
            "workshopLevel": "1"
          }
        ]
      }
    ]
  },
  {
    "key": "ion_sputter",
    "name": "Ion Sputter",
    "image": "images/ion_sputter.png",
    "hasImage": true,
    "baseCategory": "recycle",
    "rarity": "Epic",
    "type": "Recyclable",
    "value": 6000,
    "foundIn": "Exodus",
    "weightKg": 1.5,
    "stackSize": 3,
    "craftBench": null,
    "recyclesInto": {
      "voltage_converter": 4,
      "exodus_modules": 1
    },
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": "Recycle",
    "reasons": [
      {
        "type": "recycle",
        "itemId": "ion_sputter",
        "recycleComponentId": "exodus_modules",
        "recycleComponentName": "Exodus Modules",
        "chain": [
          {
            "action": "recycle",
            "itemId": "ion_sputter",
            "itemName": "Ion Sputter",
            "targetId": "exodus_modules",
            "targetName": "Exodus Modules"
          }
        ]
      }
    ]
  },
  {
    "key": "jolt_mine",
    "name": "Jolt Mine",
    "image": "images/jolt_mine.png",
    "hasImage": true,
    "baseCategory": null,
    "rarity": "Rare",
    "type": "Quick Use",
    "value": 850,
    "foundIn": null,
    "weightKg": 0.2,
    "stackSize": 3,
    "craftBench": "explosives_bench",
    "recyclesInto": {
      "battery": 1,
      "plastic_parts": 2
    },
    "salvagesInto": {},
    "recipe": {
      "electrical_components": 1,
      "battery": 1
    },
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "jolt_mine_blueprint",
    "name": "Jolt Mine Blueprint",
    "image": "images/jolt_mine_blueprint.png",
    "hasImage": true,
    "baseCategory": null,
    "rarity": "Legendary",
    "type": "Blueprint",
    "value": 5000,
    "foundIn": null,
    "weightKg": 0,
    "stackSize": 1,
    "craftBench": null,
    "recyclesInto": {},
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "junior_outfit",
    "name": "Junior Outfit",
    "image": "images/junior_outfit.png",
    "hasImage": false,
    "baseCategory": null,
    "rarity": "Common",
    "type": "Cosmetic",
    "value": null,
    "foundIn": null,
    "weightKg": null,
    "stackSize": null,
    "craftBench": null,
    "recyclesInto": {},
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "jupiter",
    "name": "Jupiter",
    "image": "images/jupiter.png",
    "hasImage": false,
    "baseCategory": null,
    "rarity": "Legendary",
    "type": "Sniper Rifle",
    "value": 27500,
    "foundIn": null,
    "weightKg": 9,
    "stackSize": null,
    "craftBench": "weapon_bench",
    "recyclesInto": {
      "magnetic_accelerator": 2,
      "complex_gun_parts": 1
    },
    "salvagesInto": {
      "advanced_mechanical_components": 3
    },
    "recipe": {
      "magnetic_accelerator": 3,
      "complex_gun_parts": 3,
      "queen_reactor": 1
    },
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "jupiter_blueprint",
    "name": "Jupiter Blueprint",
    "image": "images/jupiter_blueprint.png",
    "hasImage": false,
    "baseCategory": null,
    "rarity": "Legendary",
    "type": "Blueprint",
    "value": 5000,
    "foundIn": null,
    "weightKg": 0,
    "stackSize": null,
    "craftBench": null,
    "recyclesInto": {},
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "kettle_i",
    "name": "Kettle I",
    "image": "images/kettle_i.png",
    "hasImage": false,
    "baseCategory": null,
    "rarity": "Common",
    "type": "Assault Rifle",
    "value": 840,
    "foundIn": null,
    "weightKg": 7,
    "stackSize": null,
    "craftBench": [
      "workbench",
      "weapon_bench"
    ],
    "recyclesInto": {
      "plastic_parts": 3,
      "rubber_parts": 2
    },
    "salvagesInto": {},
    "recipe": {
      "metal_parts": 6,
      "rubber_parts": 8
    },
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "kettle_ii",
    "name": "Kettle II",
    "image": "images/kettle_ii.png",
    "hasImage": false,
    "baseCategory": null,
    "rarity": "Common",
    "type": "Assault Rifle",
    "value": 840,
    "foundIn": null,
    "weightKg": 7,
    "stackSize": null,
    "craftBench": null,
    "recyclesInto": {
      "plastic_parts": 6,
      "rubber_parts": 6
    },
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "kettle_iii",
    "name": "Kettle III",
    "image": "images/kettle_iii.png",
    "hasImage": false,
    "baseCategory": null,
    "rarity": "Common",
    "type": "Assault Rifle",
    "value": 3000,
    "foundIn": null,
    "weightKg": 7,
    "stackSize": null,
    "craftBench": null,
    "recyclesInto": {},
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "kettle_iv",
    "name": "Kettle IV",
    "image": "images/kettle_iv.png",
    "hasImage": false,
    "baseCategory": null,
    "rarity": "Common",
    "type": "Assault Rifle",
    "value": 5000,
    "foundIn": null,
    "weightKg": 7,
    "stackSize": null,
    "craftBench": null,
    "recyclesInto": {},
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "kinetic_converter",
    "name": "Kinetic Converter",
    "image": "images/kinetic_converter.png",
    "hasImage": true,
    "baseCategory": null,
    "rarity": "Legendary",
    "type": "Modification",
    "value": 7000,
    "foundIn": null,
    "weightKg": 0.75,
    "stackSize": null,
    "craftBench": null,
    "recyclesInto": {
      "mod_components": 1,
      "duct_tape": 2
    },
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "laboratory_reagents",
    "name": "Laboratory Reagents",
    "image": "images/laboratory_reagents.png",
    "hasImage": true,
    "baseCategory": "keep",
    "rarity": "Rare",
    "type": "Recyclable",
    "value": 2000,
    "foundIn": "Medical",
    "weightKg": 3,
    "stackSize": null,
    "craftBench": null,
    "recyclesInto": {
      "chemicals": 2,
      "crude_explosives": 2
    },
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {
      "explosives_station": [
        3
      ]
    },
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": "Keep • Workstations: Explosives Station T3",
    "reasons": [
      {
        "type": "workshop",
        "itemId": "laboratory_reagents",
        "workshopStation": "explosives_station",
        "workshopLevel": "3"
      }
    ]
  },
  {
    "key": "lances_mixtape_5th_edition",
    "name": "Lance's Mixtape (5th Edition)",
    "image": "images/lances_mixtape_5th_edition.png",
    "hasImage": true,
    "baseCategory": "sell",
    "rarity": "Epic",
    "type": "Trinket",
    "value": 10000,
    "foundIn": "Residential, Commercial",
    "weightKg": 0.2,
    "stackSize": 3,
    "craftBench": null,
    "recyclesInto": {},
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": "Sell",
    "reasons": []
  },
  {
    "key": "launcher_ammo",
    "name": "Launcher Ammo",
    "image": "images/launcher_ammo.png",
    "hasImage": true,
    "baseCategory": null,
    "rarity": "Rare",
    "type": "Ammunition",
    "value": 250,
    "foundIn": null,
    "weightKg": 0.1,
    "stackSize": 24,
    "craftBench": "workbench",
    "recyclesInto": {},
    "salvagesInto": {},
    "recipe": {
      "arc_motion_core": 1,
      "crude_explosives": 2
    },
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "launcher_ammo_blueprint",
    "name": "Launcher Ammo (Hullcracker) Blueprint",
    "image": "images/launcher_ammo_blueprint.png",
    "hasImage": true,
    "baseCategory": null,
    "rarity": "Legendary",
    "type": "Blueprint",
    "value": 5000,
    "foundIn": null,
    "weightKg": 0,
    "stackSize": null,
    "craftBench": null,
    "recyclesInto": {},
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "leaper_pulse_unit",
    "name": "Leaper Pulse Unit",
    "image": "images/leaper_pulse_unit.png",
    "hasImage": true,
    "baseCategory": "keep",
    "rarity": "Epic",
    "type": "Recyclable",
    "value": 5000,
    "foundIn": "ARC",
    "weightKg": 1,
    "stackSize": 3,
    "craftBench": null,
    "recyclesInto": {
      "advanced_mechanical_components": 2,
      "arc_alloy": 3
    },
    "salvagesInto": {},
    "recipe": {},
    "quest": true,
    "workstations": {
      "utility_station": [
        3
      ]
    },
    "hasExpedition": true,
    "expeditionPhases": [
      4
    ],
    "reasonSummary": "Keep • Quest item • Workstations: Utility Station T3 • Expedition project (phase 4)",
    "reasons": [
      {
        "type": "quest",
        "itemId": "leaper_pulse_unit",
        "questId": "ss10x5",
        "questName": "Into the Fray"
      },
      {
        "type": "workshop",
        "itemId": "leaper_pulse_unit",
        "workshopStation": "utility_station",
        "workshopLevel": "3"
      },
      {
        "type": "project",
        "itemId": "leaper_pulse_unit",
        "projectId": "expedition_project",
        "projectName": "Expedition Project",
        "projectPhase": 4
      }
    ]
  },
  {
    "key": "lemon",
    "name": "Lemon",
    "image": "images/lemon.png",
    "hasImage": true,
    "baseCategory": "keep",
    "rarity": "Uncommon",
    "type": "Nature",
    "value": 640,
    "foundIn": "Nature",
    "weightKg": 0.2,
    "stackSize": 10,
    "craftBench": null,
    "recyclesInto": {},
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {
      "scrappy": [
        3
      ]
    },
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": "Keep • Workstations: Scrappy T3",
    "reasons": [
      {
        "type": "workshop",
        "itemId": "lemon",
        "workshopStation": "scrappy",
        "workshopLevel": "3"
      }
    ]
  },
  {
    "key": "li_l_smoke_grenade",
    "name": "Li'l Smoke Grenade",
    "image": "images/li_l_smoke_grenade.png",
    "hasImage": true,
    "baseCategory": null,
    "rarity": "Common",
    "type": "Quick Use",
    "value": 1,
    "foundIn": null,
    "weightKg": 0.15,
    "stackSize": 5,
    "craftBench": null,
    "recyclesInto": {},
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "lidar_scanner",
    "name": "Lidar Scanner",
    "image": "images/lidar_scanner.png",
    "hasImage": false,
    "baseCategory": "sell",
    "rarity": "Common",
    "type": "Trinket",
    "value": null,
    "foundIn": null,
    "weightKg": 0.25,
    "stackSize": null,
    "craftBench": null,
    "recyclesInto": {},
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": "Sell",
    "reasons": []
  },
  {
    "key": "light_ammo",
    "name": "Light Ammo",
    "image": "images/light_ammo.png",
    "hasImage": true,
    "baseCategory": null,
    "rarity": "Common",
    "type": "Ammunition",
    "value": 0.76,
    "foundIn": null,
    "weightKg": 0.00323,
    "stackSize": 100,
    "craftBench": "workbench",
    "recyclesInto": {},
    "salvagesInto": {},
    "recipe": {
      "metal_parts": 3,
      "chemicals": 2
    },
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "light_bulb",
    "name": "Light Bulb",
    "image": "images/light_bulb.png",
    "hasImage": true,
    "baseCategory": "keep",
    "rarity": "Uncommon",
    "type": "Trinket",
    "value": 2000,
    "foundIn": "Electrical",
    "weightKg": 0.2,
    "stackSize": 3,
    "craftBench": null,
    "recyclesInto": {},
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": true,
    "expeditionPhases": [
      3
    ],
    "reasonSummary": "Keep • Expedition project (phase 3)",
    "reasons": [
      {
        "type": "project",
        "itemId": "light_bulb",
        "projectId": "expedition_project",
        "projectName": "Expedition Project",
        "projectPhase": 3
      }
    ]
  },
  {
    "key": "light_gun_parts",
    "name": "Light Gun Parts",
    "image": "images/light_gun_parts.png",
    "hasImage": true,
    "baseCategory": "keep",
    "rarity": "Rare",
    "type": "Topside Material",
    "value": 700,
    "foundIn": "Raider, Security",
    "weightKg": 0.3,
    "stackSize": 5,
    "craftBench": "refiner",
    "recyclesInto": {
      "simple_gun_parts": 2
    },
    "salvagesInto": {},
    "recipe": {
      "simple_gun_parts": 4
    },
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": "Sell",
    "reasons": []
  },
  {
    "key": "light_gun_parts_blueprint",
    "name": "Light Gun Parts Blueprint",
    "image": "images/light_gun_parts_blueprint.png",
    "hasImage": true,
    "baseCategory": null,
    "rarity": "Legendary",
    "type": "Blueprint",
    "value": 5000,
    "foundIn": null,
    "weightKg": 0,
    "stackSize": null,
    "craftBench": null,
    "recyclesInto": {},
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "light_impact_grenade",
    "name": "Light Impact Grenade",
    "image": "images/light_impact_grenade.png",
    "hasImage": false,
    "baseCategory": null,
    "rarity": "Common",
    "type": "Quick Use",
    "value": 270,
    "foundIn": null,
    "weightKg": 0.1,
    "stackSize": 5,
    "craftBench": [
      "workbench",
      "explosives_bench"
    ],
    "recyclesInto": {
      "chemicals": 1,
      "plastic_parts": 1
    },
    "salvagesInto": {
      "chemicals": 1
    },
    "recipe": {
      "chemicals": 3,
      "plastic_parts": 2
    },
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "light_shield",
    "name": "Light Shield",
    "image": "images/light_shield.png",
    "hasImage": false,
    "baseCategory": null,
    "rarity": "Uncommon",
    "type": "Shield",
    "value": 640,
    "foundIn": null,
    "weightKg": 5,
    "stackSize": null,
    "craftBench": [
      "workbench",
      "equipment_bench"
    ],
    "recyclesInto": {
      "plastic_parts": 4
    },
    "salvagesInto": {},
    "recipe": {
      "arc_alloy": 2,
      "plastic_parts": 4
    },
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "lightweight_stock",
    "name": "Lightweight Stock",
    "image": "images/lightweight_stock.png",
    "hasImage": true,
    "baseCategory": null,
    "rarity": "Epic",
    "type": "Modification",
    "value": 5000,
    "foundIn": null,
    "weightKg": 0.25,
    "stackSize": null,
    "craftBench": "weapon_bench",
    "recyclesInto": {},
    "salvagesInto": {},
    "recipe": {
      "mod_components": 2,
      "duct_tape": 5
    },
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "lightweight_stock_blueprint",
    "name": "Lightweight Stock Blueprint",
    "image": "images/lightweight_stock_blueprint.png",
    "hasImage": true,
    "baseCategory": null,
    "rarity": "Legendary",
    "type": "Blueprint",
    "value": 5000,
    "foundIn": null,
    "weightKg": 0,
    "stackSize": null,
    "craftBench": null,
    "recyclesInto": {},
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "lil_smoke_grenade",
    "name": "Li'l Smoke Grenade",
    "image": "images/lil_smoke_grenade.png",
    "hasImage": true,
    "baseCategory": null,
    "rarity": "Common",
    "type": "Quick Use",
    "value": 300,
    "foundIn": null,
    "weightKg": 0.15,
    "stackSize": 5,
    "craftBench": "utility_bench",
    "recyclesInto": {
      "chemicals": 1,
      "plastic_parts": 1
    },
    "salvagesInto": {},
    "recipe": {
      "chemicals": 5,
      "plastic_parts": 1
    },
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "looting_mk1",
    "name": "Looting Mk. 1",
    "image": "images/looting_mk1.png",
    "hasImage": true,
    "baseCategory": null,
    "rarity": "Uncommon",
    "type": "Augment",
    "value": 640,
    "foundIn": null,
    "weightKg": 1,
    "stackSize": null,
    "craftBench": [
      "equipment_bench",
      "workbench"
    ],
    "recyclesInto": {
      "rubber_parts": 3,
      "plastic_parts": 3
    },
    "salvagesInto": {},
    "recipe": {
      "plastic_parts": 6,
      "rubber_parts": 6
    },
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "looting_mk2",
    "name": "Looting Mk. 2",
    "image": "images/looting_mk2.png",
    "hasImage": true,
    "baseCategory": null,
    "rarity": "Rare",
    "type": "Augment",
    "value": 2000,
    "foundIn": null,
    "weightKg": 2,
    "stackSize": null,
    "craftBench": "equipment_bench",
    "recyclesInto": {
      "magnet": 1,
      "electrical_components": 1
    },
    "salvagesInto": {},
    "recipe": {
      "electrical_components": 2,
      "magnet": 3
    },
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "looting_mk3_cautious",
    "name": "Looting Mk. 3 (Cautious)",
    "image": "images/looting_mk3_cautious.png",
    "hasImage": true,
    "baseCategory": null,
    "rarity": "Epic",
    "type": "Augment",
    "value": 5000,
    "foundIn": null,
    "weightKg": 3,
    "stackSize": null,
    "craftBench": "equipment_bench",
    "recyclesInto": {},
    "salvagesInto": {},
    "recipe": {
      "advanced_electrical_components": 2,
      "processor": 3
    },
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "looting_mk3_survivor",
    "name": "Looting Mk. 3 (Survivor)",
    "image": "images/looting_mk3_survivor.png",
    "hasImage": false,
    "baseCategory": null,
    "rarity": "Epic",
    "type": "Augment",
    "value": 5000,
    "foundIn": null,
    "weightKg": 4,
    "stackSize": 1,
    "craftBench": "equipment_bench",
    "recyclesInto": {
      "advanced_electrical_components": 1,
      "processor": 1
    },
    "salvagesInto": {},
    "recipe": {
      "advanced_mechanical_components": 2,
      "processor": 2
    },
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "looting_mk3_survivor_blueprint",
    "name": "Looting Mk. 3 (Survivor) Blueprint",
    "image": "images/looting_mk3_survivor_blueprint.png",
    "hasImage": false,
    "baseCategory": null,
    "rarity": "Legendary",
    "type": "Blueprint",
    "value": 5000,
    "foundIn": null,
    "weightKg": 0,
    "stackSize": null,
    "craftBench": null,
    "recyclesInto": {},
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "lure_grenade",
    "name": "Lure Grenade",
    "image": "images/lure_grenade.png",
    "hasImage": true,
    "baseCategory": null,
    "rarity": "Uncommon",
    "type": "Quick Use",
    "value": 1000,
    "foundIn": null,
    "weightKg": 0.4,
    "stackSize": null,
    "craftBench": "utility_bench",
    "recyclesInto": {
      "speaker_component": 1
    },
    "salvagesInto": {},
    "recipe": {
      "speaker_component": 1,
      "electrical_components": 1
    },
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "lure_grenade_blueprint",
    "name": "Lure Grenade Blueprint",
    "image": "images/lure_grenade_blueprint.png",
    "hasImage": true,
    "baseCategory": null,
    "rarity": "Legendary",
    "type": "Blueprint",
    "value": 5000,
    "foundIn": null,
    "weightKg": 0,
    "stackSize": null,
    "craftBench": null,
    "recyclesInto": {},
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "lure_grenade_trap",
    "name": "Lure Grenade Trap",
    "image": "images/lure_grenade_trap.png",
    "hasImage": true,
    "baseCategory": null,
    "rarity": "Uncommon",
    "type": "Quick Use",
    "value": 1000,
    "foundIn": null,
    "weightKg": 0.25,
    "stackSize": 3,
    "craftBench": null,
    "recyclesInto": {},
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "magnet",
    "name": "Magnet",
    "image": "images/magnet.png",
    "hasImage": true,
    "baseCategory": "recycle",
    "rarity": "Uncommon",
    "type": "Topside Material",
    "value": 300,
    "foundIn": "Exodus",
    "weightKg": 0.25,
    "stackSize": 15,
    "craftBench": null,
    "recyclesInto": {
      "metal_parts": 2
    },
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": "Recycle",
    "reasons": [
      {
        "type": "recycle",
        "itemId": "magnet",
        "recycleComponentId": "metal_parts",
        "recycleComponentName": "Metal Parts",
        "chain": [
          {
            "action": "recycle",
            "itemId": "magnet",
            "itemName": "Magnet",
            "targetId": "metal_parts",
            "targetName": "Metal Parts"
          },
          {
            "action": "use_in_workshop",
            "itemId": "metal_parts",
            "itemName": "Metal Parts",
            "workshopStation": "gunsmith",
            "workshopLevel": "1"
          }
        ]
      }
    ]
  },
  {
    "key": "magnetic_accelerator",
    "name": "Magnetic Accelerator",
    "image": "images/magnetic_accelerator.png",
    "hasImage": true,
    "baseCategory": "keep",
    "rarity": "Epic",
    "type": "Refined Material",
    "value": 5500,
    "foundIn": "Exodus",
    "weightKg": 1,
    "stackSize": 3,
    "craftBench": "refiner",
    "recyclesInto": {
      "advanced_mechanical_components": 1,
      "arc_motion_core": 1
    },
    "salvagesInto": {},
    "recipe": {
      "advanced_mechanical_components": 2,
      "arc_motion_core": 2
    },
    "quest": false,
    "workstations": {},
    "hasExpedition": true,
    "expeditionPhases": [
      4
    ],
    "reasonSummary": "Keep • Expedition project (phase 4)",
    "reasons": [
      {
        "type": "project",
        "itemId": "magnetic_accelerator",
        "projectId": "expedition_project",
        "projectName": "Expedition Project",
        "projectPhase": 4
      }
    ]
  },
  {
    "key": "magnetron",
    "name": "Magnetron",
    "image": "images/magnetron.png",
    "hasImage": true,
    "baseCategory": "keep",
    "rarity": "Epic",
    "type": "Recyclable",
    "value": 6000,
    "foundIn": "Exodus",
    "weightKg": 1.5,
    "stackSize": 3,
    "craftBench": null,
    "recyclesInto": {
      "magnetic_accelerator": 1,
      "steel_spring": 1
    },
    "salvagesInto": {},
    "recipe": {},
    "quest": true,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": "Keep • Quest item",
    "reasons": [
      {
        "type": "quest",
        "itemId": "magnetron",
        "questId": "12_snap_and_salvage",
        "questName": "Snap and Salvage"
      }
    ]
  },
  {
    "key": "major_aivas_patch",
    "name": "Major Aiva's Patch",
    "image": "images/major_aivas_patch.png",
    "hasImage": false,
    "baseCategory": "sell",
    "rarity": "Common",
    "type": "Trinket",
    "value": null,
    "foundIn": null,
    "weightKg": 0.25,
    "stackSize": null,
    "craftBench": null,
    "recyclesInto": {},
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": "Sell",
    "reasons": []
  },
  {
    "key": "matriarch_reactor",
    "name": "Matriarch Reactor",
    "image": "images/matriarch_reactor.png",
    "hasImage": true,
    "baseCategory": "recycle",
    "rarity": "Legendary",
    "type": "Material",
    "value": 13000,
    "foundIn": null,
    "weightKg": 10,
    "stackSize": 1,
    "craftBench": null,
    "recyclesInto": {
      "power_rod": 1,
      "magnetic_accelerator": 1
    },
    "salvagesInto": {
      "power_rod": 1
    },
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": "Recycle",
    "reasons": [
      {
        "type": "recycle",
        "itemId": "matriarch_reactor",
        "recycleComponentId": "power_rod",
        "recycleComponentName": "Power Rod",
        "chain": [
          {
            "action": "recycle",
            "itemId": "matriarch_reactor",
            "itemName": "Matriarch Reactor",
            "targetId": "power_rod",
            "targetName": "Power Rod"
          },
          {
            "action": "use_in_quest",
            "itemId": "power_rod",
            "itemName": "Power Rod",
            "questId": "ss10x15",
            "questName": "Tribute to Toledo"
          }
        ]
      },
      {
        "type": "recycle",
        "itemId": "matriarch_reactor",
        "recycleComponentId": "magnetic_accelerator",
        "recycleComponentName": "Magnetic Accelerator",
        "chain": [
          {
            "action": "recycle",
            "itemId": "matriarch_reactor",
            "itemName": "Matriarch Reactor",
            "targetId": "magnetic_accelerator",
            "targetName": "Magnetic Accelerator"
          }
        ]
      }
    ]
  },
  {
    "key": "mechanical_components",
    "name": "Mechanical Components",
    "image": "images/mechanical_components.png",
    "hasImage": true,
    "baseCategory": "keep",
    "rarity": "Uncommon",
    "type": "Refined Material",
    "value": 640,
    "foundIn": "Mechanical",
    "weightKg": 0.5,
    "stackSize": 10,
    "craftBench": "refiner",
    "recyclesInto": {
      "metal_parts": 3,
      "rubber_parts": 2
    },
    "salvagesInto": {},
    "recipe": {
      "metal_parts": 7,
      "rubber_parts": 3
    },
    "quest": false,
    "workstations": {
      "gunsmith": [
        2
      ]
    },
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": "Keep • Workstations: Gunsmith T2",
    "reasons": [
      {
        "type": "workshop",
        "itemId": "mechanical_components",
        "workshopStation": "gunsmith",
        "workshopLevel": "2"
      }
    ]
  },
  {
    "key": "medium_ammo",
    "name": "Medium Ammo",
    "image": "images/medium_ammo.png",
    "hasImage": false,
    "baseCategory": null,
    "rarity": "Common",
    "type": "Ammunition",
    "value": 6,
    "foundIn": null,
    "weightKg": 0.025,
    "stackSize": 80,
    "craftBench": "workbench",
    "recyclesInto": {},
    "salvagesInto": {},
    "recipe": {
      "metal_parts": 3,
      "chemicals": 2
    },
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "medium_gun_parts",
    "name": "Medium Gun Parts",
    "image": "images/medium_gun_parts.png",
    "hasImage": true,
    "baseCategory": "sell",
    "rarity": "Rare",
    "type": "Topside Material",
    "value": 700,
    "foundIn": "Raider, Security",
    "weightKg": 0.4,
    "stackSize": 5,
    "craftBench": "refiner",
    "recyclesInto": {
      "simple_gun_parts": 2
    },
    "salvagesInto": {},
    "recipe": {
      "simple_gun_parts": 4
    },
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": "Sell",
    "reasons": []
  },
  {
    "key": "medium_gun_parts_blueprint",
    "name": "Medium Gun Parts Blueprint",
    "image": "images/medium_gun_parts_blueprint.png",
    "hasImage": true,
    "baseCategory": null,
    "rarity": "Legendary",
    "type": "Blueprint",
    "value": 5000,
    "foundIn": null,
    "weightKg": 0,
    "stackSize": null,
    "craftBench": null,
    "recyclesInto": {},
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "medium_shield",
    "name": "Medium Shield",
    "image": "images/medium_shield.png",
    "hasImage": true,
    "baseCategory": null,
    "rarity": "Rare",
    "type": "Shield",
    "value": 2000,
    "foundIn": null,
    "weightKg": 7,
    "stackSize": null,
    "craftBench": "equipment_bench",
    "recyclesInto": {
      "arc_circuitry": 1
    },
    "salvagesInto": {},
    "recipe": {
      "arc_circuitry": 1,
      "battery": 4
    },
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "metal_brackets",
    "name": "Metal Brackets",
    "image": "images/metal_brackets.png",
    "hasImage": true,
    "baseCategory": "recycle",
    "rarity": "Uncommon",
    "type": "Recyclable",
    "value": 640,
    "foundIn": "Mechanical, Electrical",
    "weightKg": 0.8,
    "stackSize": 3,
    "craftBench": null,
    "recyclesInto": {
      "metal_parts": 8
    },
    "salvagesInto": {
      "metal_parts": 4
    },
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": "Recycle",
    "reasons": [
      {
        "type": "recycle",
        "itemId": "metal_brackets",
        "recycleComponentId": "metal_parts",
        "recycleComponentName": "Metal Parts",
        "chain": [
          {
            "action": "recycle",
            "itemId": "metal_brackets",
            "itemName": "Metal Brackets",
            "targetId": "metal_parts",
            "targetName": "Metal Parts"
          },
          {
            "action": "use_in_workshop",
            "itemId": "metal_parts",
            "itemName": "Metal Parts",
            "workshopStation": "gunsmith",
            "workshopLevel": "1"
          }
        ]
      }
    ]
  },
  {
    "key": "metal_parts",
    "name": "Metal Parts",
    "image": "images/metal_parts.png",
    "hasImage": true,
    "baseCategory": "keep",
    "rarity": "Common",
    "type": "Basic Material",
    "value": 75,
    "foundIn": "Mechanical, Industrial, Electrical, Technological",
    "weightKg": 0.1,
    "stackSize": 50,
    "craftBench": null,
    "recyclesInto": {},
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {
      "gunsmith": [
        1
      ],
      "refiner": [
        1
      ]
    },
    "hasExpedition": true,
    "expeditionPhases": [
      1
    ],
    "reasonSummary": "Keep • Workstations: Gunsmith T1, Refiner T1 • Expedition project (phase 1)",
    "reasons": [
      {
        "type": "workshop",
        "itemId": "metal_parts",
        "workshopStation": "gunsmith",
        "workshopLevel": "1"
      },
      {
        "type": "workshop",
        "itemId": "metal_parts",
        "workshopStation": "refiner",
        "workshopLevel": "1"
      },
      {
        "type": "project",
        "itemId": "metal_parts",
        "projectId": "expedition_project",
        "projectName": "Expedition Project",
        "projectPhase": 1
      }
    ]
  },
  {
    "key": "microscope",
    "name": "Microscope",
    "image": "images/microscope.png",
    "hasImage": true,
    "baseCategory": "recycle",
    "rarity": "Rare",
    "type": "Recyclable",
    "value": 3000,
    "foundIn": "Exodus",
    "weightKg": 1.5,
    "stackSize": 3,
    "craftBench": null,
    "recyclesInto": {
      "advanced_mechanical_components": 1,
      "magnet": 3
    },
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": "Recycle",
    "reasons": [
      {
        "type": "recycle",
        "itemId": "microscope",
        "recycleComponentId": "advanced_mechanical_components",
        "recycleComponentName": "Advanced Mechanical Components",
        "chain": [
          {
            "action": "recycle",
            "itemId": "microscope",
            "itemName": "Microscope",
            "targetId": "advanced_mechanical_components",
            "targetName": "Advanced Mechanical Components"
          },
          {
            "action": "use_in_workshop",
            "itemId": "advanced_mechanical_components",
            "itemName": "Advanced Mechanical Components",
            "workshopStation": "gunsmith",
            "workshopLevel": "3"
          }
        ]
      }
    ]
  },
  {
    "key": "mini_centrifuge",
    "name": "Mini Centrifuge",
    "image": "images/mini_centrifuge.png",
    "hasImage": true,
    "baseCategory": "recycle",
    "rarity": "Rare",
    "type": "Recyclable",
    "value": 3000,
    "foundIn": "Exodus",
    "weightKg": 1.5,
    "stackSize": 3,
    "craftBench": null,
    "recyclesInto": {
      "advanced_mechanical_components": 1,
      "canister": 2
    },
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": "Recycle",
    "reasons": [
      {
        "type": "recycle",
        "itemId": "mini_centrifuge",
        "recycleComponentId": "advanced_mechanical_components",
        "recycleComponentName": "Advanced Mechanical Components",
        "chain": [
          {
            "action": "recycle",
            "itemId": "mini_centrifuge",
            "itemName": "Mini Centrifuge",
            "targetId": "advanced_mechanical_components",
            "targetName": "Advanced Mechanical Components"
          },
          {
            "action": "use_in_workshop",
            "itemId": "advanced_mechanical_components",
            "itemName": "Advanced Mechanical Components",
            "workshopStation": "gunsmith",
            "workshopLevel": "3"
          }
        ]
      }
    ]
  },
  {
    "key": "mod_components",
    "name": "Mod Components",
    "image": "images/mod_components.png",
    "hasImage": true,
    "baseCategory": "keep",
    "rarity": "Rare",
    "type": "Refined Material",
    "value": 1750,
    "foundIn": "Security",
    "weightKg": 1,
    "stackSize": 5,
    "craftBench": "refiner",
    "recyclesInto": {
      "mechanical_components": 1,
      "steel_spring": 1
    },
    "salvagesInto": {},
    "recipe": {
      "steel_spring": 2,
      "mechanical_components": 2
    },
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": "Recycle",
    "reasons": [
      {
        "type": "recycle",
        "itemId": "mod_components",
        "recycleComponentId": "mechanical_components",
        "recycleComponentName": "Mechanical Components",
        "chain": [
          {
            "action": "recycle",
            "itemId": "mod_components",
            "itemName": "Mod Components",
            "targetId": "mechanical_components",
            "targetName": "Mechanical Components"
          },
          {
            "action": "use_in_workshop",
            "itemId": "mechanical_components",
            "itemName": "Mechanical Components",
            "workshopStation": "gunsmith",
            "workshopLevel": "2"
          }
        ]
      },
      {
        "type": "recycle",
        "itemId": "mod_components",
        "recycleComponentId": "steel_spring",
        "recycleComponentName": "Steel Spring",
        "chain": [
          {
            "action": "recycle",
            "itemId": "mod_components",
            "itemName": "Mod Components",
            "targetId": "steel_spring",
            "targetName": "Steel Spring"
          }
        ]
      }
    ]
  },
  {
    "key": "moss",
    "name": "Moss",
    "image": "images/moss.png",
    "hasImage": true,
    "baseCategory": "sell",
    "rarity": "Rare",
    "type": "Topside Material",
    "value": 500,
    "foundIn": "Nature",
    "weightKg": 0.3,
    "stackSize": 10,
    "craftBench": null,
    "recyclesInto": {
      "assorted_seeds": 3
    },
    "salvagesInto": {
      "assorted_seeds": 2
    },
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": "Sell",
    "reasons": []
  },
  {
    "key": "motor",
    "name": "Motor",
    "image": "images/motor.png",
    "hasImage": true,
    "baseCategory": "keep",
    "rarity": "Rare",
    "type": "Recyclable",
    "value": 1000,
    "foundIn": "Mechanical",
    "weightKg": 3,
    "stackSize": null,
    "craftBench": null,
    "recyclesInto": {
      "oil": 2,
      "mechanical_components": 1
    },
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {
      "refiner": [
        3
      ]
    },
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": "Keep • Workstations: Refiner T3",
    "reasons": [
      {
        "type": "workshop",
        "itemId": "motor",
        "workshopStation": "refiner",
        "workshopLevel": "3"
      }
    ]
  },
  {
    "key": "mushroom",
    "name": "Mushroom",
    "image": "images/mushroom.png",
    "hasImage": true,
    "baseCategory": "keep",
    "rarity": "Uncommon",
    "type": "Nature",
    "value": 1000,
    "foundIn": "Nature",
    "weightKg": 0.2,
    "stackSize": null,
    "craftBench": null,
    "recyclesInto": {},
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {
      "scrappy": [
        5
      ]
    },
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": "Keep • Workstations: Scrappy T5",
    "reasons": [
      {
        "type": "workshop",
        "itemId": "mushroom",
        "workshopStation": "scrappy",
        "workshopLevel": "5"
      }
    ]
  },
  {
    "key": "music_album",
    "name": "Music Album",
    "image": "images/music_album.png",
    "hasImage": true,
    "baseCategory": "sell",
    "rarity": "Rare",
    "type": "Trinket",
    "value": 3000,
    "foundIn": "Residential, Commercial",
    "weightKg": 0.3,
    "stackSize": 3,
    "craftBench": null,
    "recyclesInto": {},
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": "Sell",
    "reasons": []
  },
  {
    "key": "music_box",
    "name": "Music Box",
    "image": "images/music_box.png",
    "hasImage": true,
    "baseCategory": "sell",
    "rarity": "Rare",
    "type": "Trinket",
    "value": 5000,
    "foundIn": "Old World, Residential, Commercial",
    "weightKg": 0.4,
    "stackSize": 3,
    "craftBench": null,
    "recyclesInto": {},
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": "Sell",
    "reasons": []
  },
  {
    "key": "muzzle_brake_i",
    "name": "Muzzle Brake I",
    "image": "images/muzzle_brake_i.png",
    "hasImage": false,
    "baseCategory": null,
    "rarity": "Common",
    "type": "Modification",
    "value": 640,
    "foundIn": null,
    "weightKg": 0.25,
    "stackSize": null,
    "craftBench": "weapon_bench",
    "recyclesInto": {
      "metal_parts": 5
    },
    "salvagesInto": {},
    "recipe": {
      "metal_parts": 6,
      "wires": 1
    },
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "muzzle_brake_ii",
    "name": "Muzzle Brake II",
    "image": "images/muzzle_brake_ii.png",
    "hasImage": true,
    "baseCategory": null,
    "rarity": "Uncommon",
    "type": "Modification",
    "value": 2000,
    "foundIn": null,
    "weightKg": 0.5,
    "stackSize": null,
    "craftBench": "weapon_bench",
    "recyclesInto": {
      "mechanical_components": 1,
      "wires": 1
    },
    "salvagesInto": {},
    "recipe": {
      "mechanical_components": 2,
      "wires": 4
    },
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "muzzle_brake_ii_blueprint",
    "name": "Muzzle Brake II Blueprint",
    "image": "images/muzzle_brake_ii_blueprint.png",
    "hasImage": false,
    "baseCategory": null,
    "rarity": "Legendary",
    "type": "Blueprint",
    "value": 5000,
    "foundIn": null,
    "weightKg": 0,
    "stackSize": null,
    "craftBench": null,
    "recyclesInto": {},
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "muzzle_brake_iii",
    "name": "Muzzle Brake III",
    "image": "images/muzzle_brake_iii.png",
    "hasImage": true,
    "baseCategory": null,
    "rarity": "Rare",
    "type": "Modification",
    "value": 5000,
    "foundIn": null,
    "weightKg": 0.75,
    "stackSize": null,
    "craftBench": null,
    "recyclesInto": {},
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "noisemaker",
    "name": "Noisemaker",
    "image": "images/noisemaker.png",
    "hasImage": true,
    "baseCategory": null,
    "rarity": "Common",
    "type": "Quick Use",
    "value": 640,
    "foundIn": null,
    "weightKg": 0.3,
    "stackSize": 3,
    "craftBench": null,
    "recyclesInto": {},
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "number_plate",
    "name": "Number Plate",
    "image": "images/number_plate.png",
    "hasImage": true,
    "baseCategory": "recycle",
    "rarity": "Uncommon",
    "type": "Recyclable",
    "value": 270,
    "foundIn": "Mechanical",
    "weightKg": 0.8,
    "stackSize": 3,
    "craftBench": null,
    "recyclesInto": {
      "metal_parts": 3
    },
    "salvagesInto": {
      "metal_parts": 1
    },
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": "Recycle",
    "reasons": [
      {
        "type": "recycle",
        "itemId": "number_plate",
        "recycleComponentId": "metal_parts",
        "recycleComponentName": "Metal Parts",
        "chain": [
          {
            "action": "recycle",
            "itemId": "number_plate",
            "itemName": "Number Plate",
            "targetId": "metal_parts",
            "targetName": "Metal Parts"
          },
          {
            "action": "use_in_workshop",
            "itemId": "metal_parts",
            "itemName": "Metal Parts",
            "workshopStation": "gunsmith",
            "workshopLevel": "1"
          }
        ]
      }
    ]
  },
  {
    "key": "oil",
    "name": "Oil",
    "image": "images/oil.png",
    "hasImage": true,
    "baseCategory": "recycle",
    "rarity": "Uncommon",
    "type": "Topside Material",
    "value": 300,
    "foundIn": "Mechanical",
    "weightKg": 0.25,
    "stackSize": 15,
    "craftBench": null,
    "recyclesInto": {
      "chemicals": 3
    },
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": "Recycle",
    "reasons": [
      {
        "type": "recycle",
        "itemId": "oil",
        "recycleComponentId": "chemicals",
        "recycleComponentName": "Chemicals",
        "chain": [
          {
            "action": "recycle",
            "itemId": "oil",
            "itemName": "Oil",
            "targetId": "chemicals",
            "targetName": "Chemicals"
          },
          {
            "action": "use_in_workshop",
            "itemId": "chemicals",
            "itemName": "Chemicals",
            "workshopStation": "explosives_station",
            "workshopLevel": "1"
          }
        ]
      }
    ]
  },
  {
    "key": "olives",
    "name": "Olives",
    "image": "images/olives.png",
    "hasImage": true,
    "baseCategory": "keep",
    "rarity": "Uncommon",
    "type": "Nature",
    "value": 640,
    "foundIn": "Nature",
    "weightKg": 0.2,
    "stackSize": 10,
    "craftBench": null,
    "recyclesInto": {
      "assorted_seeds": 2
    },
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {
      "scrappy": [
        4
      ]
    },
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": "Keep • Workstations: Scrappy T4",
    "reasons": [
      {
        "type": "workshop",
        "itemId": "olives",
        "workshopStation": "scrappy",
        "workshopLevel": "4"
      }
    ]
  },
  {
    "key": "osprey_blueprint",
    "name": "Osprey Blueprint",
    "image": "images/osprey_blueprint.png",
    "hasImage": true,
    "baseCategory": null,
    "rarity": "Legendary",
    "type": "Blueprint",
    "value": 5000,
    "foundIn": null,
    "weightKg": 0,
    "stackSize": null,
    "craftBench": null,
    "recyclesInto": {},
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "osprey_i",
    "name": "Osprey I",
    "image": "images/osprey_i.png",
    "hasImage": false,
    "baseCategory": null,
    "rarity": "Rare",
    "type": "Sniper Rifle",
    "value": 7000,
    "foundIn": null,
    "weightKg": 7,
    "stackSize": null,
    "craftBench": "weapon_bench",
    "recyclesInto": {},
    "salvagesInto": {},
    "recipe": {
      "advanced_mechanical_components": 2,
      "medium_gun_parts": 3,
      "wires": 7
    },
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "osprey_ii",
    "name": "Osprey II",
    "image": "images/osprey_ii.png",
    "hasImage": false,
    "baseCategory": null,
    "rarity": "Rare",
    "type": "Sniper Rifle",
    "value": 10000,
    "foundIn": null,
    "weightKg": 7,
    "stackSize": null,
    "craftBench": "weapon_bench",
    "recyclesInto": {
      "advanced_mechanical_components": 2,
      "medium_gun_parts": 2
    },
    "salvagesInto": {
      "medium_gun_parts": 2
    },
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "osprey_iii",
    "name": "Osprey III",
    "image": "images/osprey_iii.png",
    "hasImage": false,
    "baseCategory": null,
    "rarity": "Rare",
    "type": "Sniper Rifle",
    "value": 13000,
    "foundIn": null,
    "weightKg": 7,
    "stackSize": null,
    "craftBench": "weapon_bench",
    "recyclesInto": {
      "advanced_mechanical_components": 2,
      "medium_gun_parts": 3
    },
    "salvagesInto": {
      "medium_gun_parts": 3
    },
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "osprey_iv",
    "name": "Osprey IV",
    "image": "images/osprey_iv.png",
    "hasImage": false,
    "baseCategory": null,
    "rarity": "Rare",
    "type": "Sniper Rifle",
    "value": 17000,
    "foundIn": null,
    "weightKg": 7,
    "stackSize": null,
    "craftBench": "weapon_bench",
    "recyclesInto": {
      "advanced_mechanical_components": 3,
      "medium_gun_parts": 3
    },
    "salvagesInto": {
      "medium_gun_parts": 3
    },
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "padded_stock",
    "name": "Padded Stock",
    "image": "images/padded_stock.png",
    "hasImage": false,
    "baseCategory": null,
    "rarity": "Epic",
    "type": "Modification",
    "value": 5000,
    "foundIn": null,
    "weightKg": 0.5,
    "stackSize": null,
    "craftBench": null,
    "recyclesInto": {},
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "padded_stock_blueprint",
    "name": "Padded Stock Blueprint",
    "image": "images/padded_stock_blueprint.png",
    "hasImage": false,
    "baseCategory": null,
    "rarity": "Legendary",
    "type": "Blueprint",
    "value": 5000,
    "foundIn": null,
    "weightKg": 0,
    "stackSize": null,
    "craftBench": null,
    "recyclesInto": {},
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "painted_box",
    "name": "Painted Box",
    "image": "images/painted_box.png",
    "hasImage": true,
    "baseCategory": "sell",
    "rarity": "Uncommon",
    "type": "Trinket",
    "value": 2000,
    "foundIn": "Old World",
    "weightKg": 0.3,
    "stackSize": 3,
    "craftBench": null,
    "recyclesInto": {},
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": "Sell",
    "reasons": []
  },
  {
    "key": "photoelectric_cloak",
    "name": "Photoelectric Cloak",
    "image": "images/photoelectric_cloak.png",
    "hasImage": true,
    "baseCategory": null,
    "rarity": "Epic",
    "type": "Quick Use",
    "value": 5000,
    "foundIn": null,
    "weightKg": 1,
    "stackSize": null,
    "craftBench": "utility_bench",
    "recyclesInto": {
      "advanced_electrical_components": 1,
      "speaker_component": 1
    },
    "salvagesInto": {
      "advanced_electrical_components": 1
    },
    "recipe": {
      "advanced_electrical_components": 2,
      "speaker_component": 4
    },
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "plastic_parts",
    "name": "Plastic Parts",
    "image": "images/plastic_parts.png",
    "hasImage": true,
    "baseCategory": "keep",
    "rarity": "Common",
    "type": "Basic Material",
    "value": 60,
    "foundIn": "Commercial, Residential, Technological",
    "weightKg": 0.1,
    "stackSize": 50,
    "craftBench": null,
    "recyclesInto": {},
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {
      "gear_bench": [
        1
      ],
      "utility_station": [
        1
      ]
    },
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": "Keep • Workstations: Gear Bench T1, Utility Station T1",
    "reasons": [
      {
        "type": "workshop",
        "itemId": "plastic_parts",
        "workshopStation": "gear_bench",
        "workshopLevel": "1"
      },
      {
        "type": "workshop",
        "itemId": "plastic_parts",
        "workshopStation": "utility_station",
        "workshopLevel": "1"
      }
    ]
  },
  {
    "key": "playing_cards",
    "name": "Playing Cards",
    "image": "images/playing_cards.png",
    "hasImage": true,
    "baseCategory": "sell",
    "rarity": "Rare",
    "type": "Trinket",
    "value": 5000,
    "foundIn": "Residential, Commercial",
    "weightKg": 0.2,
    "stackSize": 3,
    "craftBench": null,
    "recyclesInto": {},
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": "Sell",
    "reasons": []
  },
  {
    "key": "polluted_air_filter",
    "name": "Polluted Air Filter",
    "image": "images/polluted_air_filter.png",
    "hasImage": true,
    "baseCategory": "recycle",
    "rarity": "Rare",
    "type": "Recyclable",
    "value": 1000,
    "foundIn": "Industrial",
    "weightKg": 0.8,
    "stackSize": 3,
    "craftBench": null,
    "recyclesInto": {
      "fabric": 6,
      "oil": 2
    },
    "salvagesInto": {
      "oil": 2
    },
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": "Recycle",
    "reasons": [
      {
        "type": "recycle",
        "itemId": "polluted_air_filter",
        "recycleComponentId": "fabric",
        "recycleComponentName": "Fabric",
        "chain": [
          {
            "action": "recycle",
            "itemId": "polluted_air_filter",
            "itemName": "Polluted Air Filter",
            "targetId": "fabric",
            "targetName": "Fabric"
          },
          {
            "action": "use_in_workshop",
            "itemId": "fabric",
            "itemName": "Fabric",
            "workshopStation": "gear_bench",
            "workshopLevel": "1"
          }
        ]
      }
    ]
  },
  {
    "key": "pop_trigger",
    "name": "Pop Trigger",
    "image": "images/pop_trigger.png",
    "hasImage": true,
    "baseCategory": "keep",
    "rarity": "Common",
    "type": "Recyclable",
    "value": 640,
    "foundIn": "ARC",
    "weightKg": 0.5,
    "stackSize": 3,
    "craftBench": null,
    "recyclesInto": {
      "crude_explosives": 1,
      "arc_alloy": 1
    },
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {
      "explosives_station": [
        2
      ]
    },
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": "Keep • Workstations: Explosives Station T2",
    "reasons": [
      {
        "type": "workshop",
        "itemId": "pop_trigger",
        "workshopStation": "explosives_station",
        "workshopLevel": "2"
      }
    ]
  },
  {
    "key": "portable_tv",
    "name": "Portable TV",
    "image": "images/portable_tv.png",
    "hasImage": true,
    "baseCategory": "recycle",
    "rarity": "Rare",
    "type": "Recyclable",
    "value": 2000,
    "foundIn": "Residential",
    "weightKg": 3,
    "stackSize": null,
    "craftBench": null,
    "recyclesInto": {
      "battery": 2,
      "wires": 6
    },
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": "Recycle",
    "reasons": [
      {
        "type": "recycle",
        "itemId": "portable_tv",
        "recycleComponentId": "battery",
        "recycleComponentName": "Battery",
        "chain": [
          {
            "action": "recycle",
            "itemId": "portable_tv",
            "itemName": "Portable TV",
            "targetId": "battery",
            "targetName": "Battery"
          },
          {
            "action": "use_in_quest",
            "itemId": "battery",
            "itemName": "Battery",
            "questId": "ss10y",
            "questName": "After Rain Comes"
          }
        ]
      },
      {
        "type": "recycle",
        "itemId": "portable_tv",
        "recycleComponentId": "wires",
        "recycleComponentName": "Wires",
        "chain": [
          {
            "action": "recycle",
            "itemId": "portable_tv",
            "itemName": "Portable TV",
            "targetId": "wires",
            "targetName": "Wires"
          },
          {
            "action": "use_in_quest",
            "itemId": "wires",
            "itemName": "Wires",
            "questId": "ss10y",
            "questName": "After Rain Comes"
          }
        ]
      }
    ]
  },
  {
    "key": "poster_of_natural_wonders",
    "name": "Poster of Natural Wonders",
    "image": "images/poster_of_natural_wonders.png",
    "hasImage": true,
    "baseCategory": "sell",
    "rarity": "Uncommon",
    "type": "Trinket",
    "value": 2000,
    "foundIn": "Residential, Commercial",
    "weightKg": 0.3,
    "stackSize": 3,
    "craftBench": null,
    "recyclesInto": {},
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": "Sell",
    "reasons": []
  },
  {
    "key": "pottery",
    "name": "Pottery",
    "image": "images/pottery.png",
    "hasImage": true,
    "baseCategory": "sell",
    "rarity": "Uncommon",
    "type": "Trinket",
    "value": 2000,
    "foundIn": "Old World, Residential",
    "weightKg": 0.3,
    "stackSize": 3,
    "craftBench": null,
    "recyclesInto": {},
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": "Sell",
    "reasons": []
  },
  {
    "key": "power_bank",
    "name": "Power Bank",
    "image": "images/power_bank.png",
    "hasImage": true,
    "baseCategory": "recycle",
    "rarity": "Rare",
    "type": "Recyclable",
    "value": 1000,
    "foundIn": "Electrical, Residential, Commercial",
    "weightKg": 2,
    "stackSize": 3,
    "craftBench": null,
    "recyclesInto": {
      "battery": 2,
      "wires": 2
    },
    "salvagesInto": {
      "battery": 2
    },
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": "Recycle",
    "reasons": [
      {
        "type": "recycle",
        "itemId": "power_bank",
        "recycleComponentId": "battery",
        "recycleComponentName": "Battery",
        "chain": [
          {
            "action": "recycle",
            "itemId": "power_bank",
            "itemName": "Power Bank",
            "targetId": "battery",
            "targetName": "Battery"
          },
          {
            "action": "use_in_quest",
            "itemId": "battery",
            "itemName": "Battery",
            "questId": "ss10y",
            "questName": "After Rain Comes"
          }
        ]
      },
      {
        "type": "recycle",
        "itemId": "power_bank",
        "recycleComponentId": "wires",
        "recycleComponentName": "Wires",
        "chain": [
          {
            "action": "recycle",
            "itemId": "power_bank",
            "itemName": "Power Bank",
            "targetId": "wires",
            "targetName": "Wires"
          },
          {
            "action": "use_in_quest",
            "itemId": "wires",
            "itemName": "Wires",
            "questId": "ss10y",
            "questName": "After Rain Comes"
          }
        ]
      }
    ]
  },
  {
    "key": "power_cable",
    "name": "Power Cable",
    "image": "images/power_cable.png",
    "hasImage": true,
    "baseCategory": "keep",
    "rarity": "Rare",
    "type": "Recyclable",
    "value": 1000,
    "foundIn": "Electrical, Residential, Commercial",
    "weightKg": 2,
    "stackSize": 3,
    "craftBench": null,
    "recyclesInto": {
      "wires": 4
    },
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {
      "gear_bench": [
        2
      ]
    },
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": "Keep • Workstations: Gear Bench T2",
    "reasons": [
      {
        "type": "workshop",
        "itemId": "power_cable",
        "workshopStation": "gear_bench",
        "workshopLevel": "2"
      }
    ]
  },
  {
    "key": "power_rod",
    "name": "Power Rod",
    "image": "images/power_rod.png",
    "hasImage": true,
    "baseCategory": "keep",
    "rarity": "Epic",
    "type": "Refined Material",
    "value": 5500,
    "foundIn": "Exodus",
    "weightKg": 2,
    "stackSize": null,
    "craftBench": "refiner",
    "recyclesInto": {
      "advanced_electrical_components": 1,
      "arc_circuitry": 1
    },
    "salvagesInto": {},
    "recipe": {
      "advanced_electrical_components": 2,
      "arc_circuitry": 2
    },
    "quest": true,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": "Keep • Quest item",
    "reasons": [
      {
        "type": "quest",
        "itemId": "power_rod",
        "questId": "ss10x15",
        "questName": "Tribute to Toledo"
      }
    ]
  },
  {
    "key": "prickly_pear",
    "name": "Prickly Pear",
    "image": "images/prickly_pear.png",
    "hasImage": true,
    "baseCategory": "keep",
    "rarity": "Common",
    "type": "Nature",
    "value": 640,
    "foundIn": "Nature",
    "weightKg": null,
    "stackSize": null,
    "craftBench": null,
    "recyclesInto": {},
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {
      "scrappy": [
        4
      ]
    },
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": "Keep • Workstations: Scrappy T4",
    "reasons": [
      {
        "type": "workshop",
        "itemId": "prickly_pear",
        "workshopStation": "scrappy",
        "workshopLevel": "4"
      }
    ]
  },
  {
    "key": "processor",
    "name": "Processor",
    "image": "images/processor.png",
    "hasImage": true,
    "baseCategory": "recycle",
    "rarity": "Rare",
    "type": "Topside Material",
    "value": 500,
    "foundIn": "Technological",
    "weightKg": 0.2,
    "stackSize": 5,
    "craftBench": null,
    "recyclesInto": {
      "wires": 1,
      "plastic_parts": 1
    },
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": "Recycle",
    "reasons": [
      {
        "type": "recycle",
        "itemId": "processor",
        "recycleComponentId": "wires",
        "recycleComponentName": "Wires",
        "chain": [
          {
            "action": "recycle",
            "itemId": "processor",
            "itemName": "Processor",
            "targetId": "wires",
            "targetName": "Wires"
          },
          {
            "action": "use_in_quest",
            "itemId": "wires",
            "itemName": "Wires",
            "questId": "ss10y",
            "questName": "After Rain Comes"
          }
        ]
      },
      {
        "type": "recycle",
        "itemId": "processor",
        "recycleComponentId": "plastic_parts",
        "recycleComponentName": "Plastic Parts",
        "chain": [
          {
            "action": "recycle",
            "itemId": "processor",
            "itemName": "Processor",
            "targetId": "plastic_parts",
            "targetName": "Plastic Parts"
          },
          {
            "action": "use_in_workshop",
            "itemId": "plastic_parts",
            "itemName": "Plastic Parts",
            "workshopStation": "gear_bench",
            "workshopLevel": "1"
          }
        ]
      }
    ]
  },
  {
    "key": "projector",
    "name": "Projector",
    "image": "images/projector.png",
    "hasImage": true,
    "baseCategory": "recycle",
    "rarity": "Rare",
    "type": "Recyclable",
    "value": 1000,
    "foundIn": "Residential",
    "weightKg": 2,
    "stackSize": 3,
    "craftBench": null,
    "recyclesInto": {
      "wires": 2,
      "processor": 1
    },
    "salvagesInto": {
      "processor": 1
    },
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": "Recycle",
    "reasons": [
      {
        "type": "recycle",
        "itemId": "projector",
        "recycleComponentId": "wires",
        "recycleComponentName": "Wires",
        "chain": [
          {
            "action": "recycle",
            "itemId": "projector",
            "itemName": "Projector",
            "targetId": "wires",
            "targetName": "Wires"
          },
          {
            "action": "use_in_quest",
            "itemId": "wires",
            "itemName": "Wires",
            "questId": "ss10y",
            "questName": "After Rain Comes"
          }
        ]
      }
    ]
  },
  {
    "key": "pulse_mine",
    "name": "Pulse Mine",
    "image": "images/pulse_mine.png",
    "hasImage": false,
    "baseCategory": null,
    "rarity": "Uncommon",
    "type": "Quick Use",
    "value": 470,
    "foundIn": null,
    "weightKg": 0.25,
    "stackSize": 3,
    "craftBench": null,
    "recyclesInto": {
      "chemicals": 6
    },
    "salvagesInto": {
      "chemicals": 3
    },
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "queen_reactor",
    "name": "Queen Reactor",
    "image": "images/queen_reactor.png",
    "hasImage": true,
    "baseCategory": "recycle",
    "rarity": "Legendary",
    "type": "Recyclable",
    "value": 13000,
    "foundIn": "ARC",
    "weightKg": 10,
    "stackSize": null,
    "craftBench": null,
    "recyclesInto": {
      "power_rod": 1,
      "magnetic_accelerator": 1
    },
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": "Recycle",
    "reasons": [
      {
        "type": "recycle",
        "itemId": "queen_reactor",
        "recycleComponentId": "power_rod",
        "recycleComponentName": "Power Rod",
        "chain": [
          {
            "action": "recycle",
            "itemId": "queen_reactor",
            "itemName": "Queen Reactor",
            "targetId": "power_rod",
            "targetName": "Power Rod"
          },
          {
            "action": "use_in_quest",
            "itemId": "power_rod",
            "itemName": "Power Rod",
            "questId": "ss10x15",
            "questName": "Tribute to Toledo"
          }
        ]
      },
      {
        "type": "recycle",
        "itemId": "queen_reactor",
        "recycleComponentId": "magnetic_accelerator",
        "recycleComponentName": "Magnetic Accelerator",
        "chain": [
          {
            "action": "recycle",
            "itemId": "queen_reactor",
            "itemName": "Queen Reactor",
            "targetId": "magnetic_accelerator",
            "targetName": "Magnetic Accelerator"
          }
        ]
      }
    ]
  },
  {
    "key": "radio",
    "name": "Radio",
    "image": "images/radio.png",
    "hasImage": true,
    "baseCategory": "recycle",
    "rarity": "Rare",
    "type": "Recyclable",
    "value": 1000,
    "foundIn": "Commercial, Residential",
    "weightKg": 2,
    "stackSize": 3,
    "craftBench": null,
    "recyclesInto": {
      "speaker_component": 1,
      "sensors": 1
    },
    "salvagesInto": {
      "speaker_component": 1
    },
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": "Recycle",
    "reasons": [
      {
        "type": "recycle",
        "itemId": "radio",
        "recycleComponentId": "sensors",
        "recycleComponentName": "Sensors",
        "chain": [
          {
            "action": "recycle",
            "itemId": "radio",
            "itemName": "Radio",
            "targetId": "sensors",
            "targetName": "Sensors"
          }
        ]
      }
    ]
  },
  {
    "key": "radio_relay",
    "name": "Radio Relay",
    "image": "images/radio_relay.png",
    "hasImage": true,
    "baseCategory": "recycle",
    "rarity": "Rare",
    "type": "Recyclable",
    "value": 3000,
    "foundIn": "Exodus",
    "weightKg": 1.5,
    "stackSize": 3,
    "craftBench": null,
    "recyclesInto": {
      "speaker_component": 2,
      "sensors": 2
    },
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": "Recycle",
    "reasons": [
      {
        "type": "recycle",
        "itemId": "radio_relay",
        "recycleComponentId": "sensors",
        "recycleComponentName": "Sensors",
        "chain": [
          {
            "action": "recycle",
            "itemId": "radio_relay",
            "itemName": "Radio Relay",
            "targetId": "sensors",
            "targetName": "Sensors"
          }
        ]
      }
    ]
  },
  {
    "key": "radio_renegade",
    "name": "Radio Renegade",
    "image": "images/radio_renegade.png",
    "hasImage": true,
    "baseCategory": null,
    "rarity": "Common",
    "type": "Outfit",
    "value": null,
    "foundIn": null,
    "weightKg": null,
    "stackSize": null,
    "craftBench": null,
    "recyclesInto": {},
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "raider_hatch_key",
    "name": "Raider Hatch Key",
    "image": "images/raider_hatch_key.png",
    "hasImage": true,
    "baseCategory": null,
    "rarity": "Rare",
    "type": "Key",
    "value": 1000,
    "foundIn": null,
    "weightKg": 0.01,
    "stackSize": null,
    "craftBench": "utility_bench",
    "recyclesInto": {},
    "salvagesInto": {},
    "recipe": {
      "advanced_electrical_components": 1,
      "sensors": 3
    },
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "rattler_i",
    "name": "Rattler I",
    "image": "images/rattler_i.png",
    "hasImage": true,
    "baseCategory": null,
    "rarity": "Common",
    "type": "Assault Rifle",
    "value": 1750,
    "foundIn": null,
    "weightKg": 6,
    "stackSize": null,
    "craftBench": "weapon_bench",
    "recyclesInto": {
      "metal_parts": 8
    },
    "salvagesInto": {},
    "recipe": {
      "metal_parts": 16,
      "rubber_parts": 12
    },
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "rattler_ii",
    "name": "Rattler II",
    "image": "images/rattler_ii.png",
    "hasImage": false,
    "baseCategory": null,
    "rarity": "Common",
    "type": "Assault Rifle",
    "value": 3000,
    "foundIn": null,
    "weightKg": 6,
    "stackSize": null,
    "craftBench": "weapon_bench",
    "recyclesInto": {
      "metal_parts": 12
    },
    "salvagesInto": {
      "metal_parts": 8
    },
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "rattler_iii",
    "name": "Rattler III",
    "image": "images/rattler_iii.png",
    "hasImage": false,
    "baseCategory": null,
    "rarity": "Common",
    "type": "Assault Rifle",
    "value": 5000,
    "foundIn": null,
    "weightKg": 6,
    "stackSize": null,
    "craftBench": "weapon_bench",
    "recyclesInto": {},
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "rattler_iv",
    "name": "Rattler IV",
    "image": "images/rattler_iv.png",
    "hasImage": false,
    "baseCategory": null,
    "rarity": "Common",
    "type": "Assault Rifle",
    "value": 7000,
    "foundIn": null,
    "weightKg": 6,
    "stackSize": null,
    "craftBench": "weapon_bench",
    "recyclesInto": {
      "mechanical_components": 4,
      "simple_gun_parts": 2
    },
    "salvagesInto": {
      "metal_parts": 14
    },
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "recorder",
    "name": "Recorder",
    "image": "images/recorder.png",
    "hasImage": false,
    "baseCategory": null,
    "rarity": "Uncommon",
    "type": "Quick Use",
    "value": 1000,
    "foundIn": "Residential",
    "weightKg": 0.2,
    "stackSize": null,
    "craftBench": null,
    "recyclesInto": {
      "plastic_parts": 10
    },
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "red_coral_jewelry",
    "name": "Red Coral Jewelry",
    "image": "images/red_coral_jewelry.png",
    "hasImage": true,
    "baseCategory": "sell",
    "rarity": "Rare",
    "type": "Trinket",
    "value": 5000,
    "foundIn": "Residential, Old World, Commercial",
    "weightKg": 0.3,
    "stackSize": 3,
    "craftBench": null,
    "recyclesInto": {},
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": "Sell",
    "reasons": []
  },
  {
    "key": "red_light_stick",
    "name": "Red Light Stick",
    "image": "images/red_light_stick.png",
    "hasImage": true,
    "baseCategory": null,
    "rarity": "Common",
    "type": "Quick Use",
    "value": 150,
    "foundIn": null,
    "weightKg": 0.15,
    "stackSize": 5,
    "craftBench": null,
    "recyclesInto": {
      "chemicals": 1
    },
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "remote_control",
    "name": "Remote Control",
    "image": "images/remote_control.png",
    "hasImage": true,
    "baseCategory": "recycle",
    "rarity": "Rare",
    "type": "Recyclable",
    "value": 1000,
    "foundIn": "Residential",
    "weightKg": 0.8,
    "stackSize": 3,
    "craftBench": null,
    "recyclesInto": {
      "plastic_parts": 7,
      "sensors": 1
    },
    "salvagesInto": {
      "sensors": 1
    },
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": "Recycle",
    "reasons": [
      {
        "type": "recycle",
        "itemId": "remote_control",
        "recycleComponentId": "plastic_parts",
        "recycleComponentName": "Plastic Parts",
        "chain": [
          {
            "action": "recycle",
            "itemId": "remote_control",
            "itemName": "Remote Control",
            "targetId": "plastic_parts",
            "targetName": "Plastic Parts"
          },
          {
            "action": "use_in_workshop",
            "itemId": "plastic_parts",
            "itemName": "Plastic Parts",
            "workshopStation": "gear_bench",
            "workshopLevel": "1"
          }
        ]
      },
      {
        "type": "recycle",
        "itemId": "remote_control",
        "recycleComponentId": "sensors",
        "recycleComponentName": "Sensors",
        "chain": [
          {
            "action": "recycle",
            "itemId": "remote_control",
            "itemName": "Remote Control",
            "targetId": "sensors",
            "targetName": "Sensors"
          }
        ]
      }
    ]
  },
  {
    "key": "remote_raider_flare",
    "name": "Remote Raider Flare",
    "image": "images/remote_raider_flare.png",
    "hasImage": false,
    "baseCategory": null,
    "rarity": "Common",
    "type": "Quick Use",
    "value": 270,
    "foundIn": null,
    "weightKg": 0.2,
    "stackSize": 3,
    "craftBench": "utility_bench",
    "recyclesInto": {
      "chemicals": 1,
      "rubber_parts": 1
    },
    "salvagesInto": {},
    "recipe": {
      "chemicals": 2,
      "rubber_parts": 4
    },
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "remote_raider_flare_blueprint",
    "name": "Remote Raider Flare Blueprint",
    "image": "images/remote_raider_flare_blueprint.png",
    "hasImage": false,
    "baseCategory": null,
    "rarity": "Legendary",
    "type": "Blueprint",
    "value": 5000,
    "foundIn": null,
    "weightKg": 0,
    "stackSize": null,
    "craftBench": null,
    "recyclesInto": {},
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "renegade_i",
    "name": "Renegade I",
    "image": "images/renegade_i.png",
    "hasImage": false,
    "baseCategory": null,
    "rarity": "Rare",
    "type": "Battle Rifle",
    "value": 7000,
    "foundIn": null,
    "weightKg": 10,
    "stackSize": null,
    "craftBench": "weapon_bench",
    "recyclesInto": {
      "advanced_mechanical_components": 1,
      "medium_gun_parts": 2
    },
    "salvagesInto": {},
    "recipe": {
      "advanced_mechanical_components": 2,
      "medium_gun_parts": 3,
      "oil": 5
    },
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "renegade_ii",
    "name": "Renegade II",
    "image": "images/renegade_ii.png",
    "hasImage": false,
    "baseCategory": null,
    "rarity": "Rare",
    "type": "Battle Rifle",
    "value": 10000,
    "foundIn": null,
    "weightKg": 10,
    "stackSize": null,
    "craftBench": "weapon_bench",
    "recyclesInto": {},
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "renegade_iii",
    "name": "Renegade III",
    "image": "images/renegade_iii.png",
    "hasImage": false,
    "baseCategory": null,
    "rarity": "Rare",
    "type": "Battle Rifle",
    "value": 13000,
    "foundIn": null,
    "weightKg": 10,
    "stackSize": null,
    "craftBench": "weapon_bench",
    "recyclesInto": {},
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "renegade_iv",
    "name": "Renegade IV",
    "image": "images/renegade_iv.png",
    "hasImage": false,
    "baseCategory": null,
    "rarity": "Rare",
    "type": "Battle Rifle",
    "value": 17000,
    "foundIn": null,
    "weightKg": 10,
    "stackSize": null,
    "craftBench": "weapon_bench",
    "recyclesInto": {},
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "resin",
    "name": "Resin",
    "image": "images/resin.png",
    "hasImage": true,
    "baseCategory": "sell",
    "rarity": "Common",
    "type": "Nature",
    "value": 1000,
    "foundIn": "Nature",
    "weightKg": 0.4,
    "stackSize": 10,
    "craftBench": null,
    "recyclesInto": {},
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": "Sell",
    "reasons": []
  },
  {
    "key": "ripped_safety_vest",
    "name": "Ripped Safety Vest",
    "image": "images/ripped_safety_vest.png",
    "hasImage": true,
    "baseCategory": null,
    "rarity": "Uncommon",
    "type": "Recyclable",
    "value": 640,
    "foundIn": null,
    "weightKg": 0.8,
    "stackSize": 3,
    "craftBench": null,
    "recyclesInto": {
      "durable_cloth": 1,
      "magnet": 1
    },
    "salvagesInto": {
      "fabric": 8
    },
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "rocket_thruster",
    "name": "Rocket Thruster",
    "image": "images/rocket_thruster.png",
    "hasImage": true,
    "baseCategory": "recycle",
    "rarity": "Rare",
    "type": "Recyclable",
    "value": 2000,
    "foundIn": "Exodus",
    "weightKg": 3,
    "stackSize": 3,
    "craftBench": null,
    "recyclesInto": {
      "synthesized_fuel": 2,
      "metal_parts": 6
    },
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": "Recycle",
    "reasons": [
      {
        "type": "recycle",
        "itemId": "rocket_thruster",
        "recycleComponentId": "synthesized_fuel",
        "recycleComponentName": "Synthesized Fuel",
        "chain": [
          {
            "action": "recycle",
            "itemId": "rocket_thruster",
            "itemName": "Rocket Thruster",
            "targetId": "synthesized_fuel",
            "targetName": "Synthesized Fuel"
          },
          {
            "action": "use_in_workshop",
            "itemId": "synthesized_fuel",
            "itemName": "Synthesized Fuel",
            "workshopStation": "explosives_station",
            "workshopLevel": "2"
          }
        ]
      },
      {
        "type": "recycle",
        "itemId": "rocket_thruster",
        "recycleComponentId": "metal_parts",
        "recycleComponentName": "Metal Parts",
        "chain": [
          {
            "action": "recycle",
            "itemId": "rocket_thruster",
            "itemName": "Rocket Thruster",
            "targetId": "metal_parts",
            "targetName": "Metal Parts"
          },
          {
            "action": "use_in_workshop",
            "itemId": "metal_parts",
            "itemName": "Metal Parts",
            "workshopStation": "gunsmith",
            "workshopLevel": "1"
          }
        ]
      }
    ]
  },
  {
    "key": "rocketeer_driver",
    "name": "Rocketeer Driver",
    "image": "images/rocketeer_driver.png",
    "hasImage": true,
    "baseCategory": "keep",
    "rarity": "Epic",
    "type": "Recyclable",
    "value": 5000,
    "foundIn": "ARC",
    "weightKg": 1,
    "stackSize": 3,
    "craftBench": null,
    "recyclesInto": {
      "advanced_electrical_components": 2,
      "arc_alloy": 3
    },
    "salvagesInto": {},
    "recipe": {},
    "quest": true,
    "workstations": {
      "explosives_station": [
        3
      ]
    },
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": "Keep • Quest item • Workstations: Explosives Station T3",
    "reasons": [
      {
        "type": "quest",
        "itemId": "rocketeer_driver",
        "questId": "ss10v",
        "questName": "Out of the Shadows"
      },
      {
        "type": "workshop",
        "itemId": "rocketeer_driver",
        "workshopStation": "explosives_station",
        "workshopLevel": "3"
      }
    ]
  },
  {
    "key": "roots",
    "name": "Roots",
    "image": "images/roots.png",
    "hasImage": true,
    "baseCategory": "sell",
    "rarity": "Uncommon",
    "type": "Nature",
    "value": 640,
    "foundIn": "Nature",
    "weightKg": 0.2,
    "stackSize": 10,
    "craftBench": null,
    "recyclesInto": {
      "assorted_seeds": 1
    },
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": "Sell",
    "reasons": []
  },
  {
    "key": "rope",
    "name": "Rope",
    "image": "images/rope.png",
    "hasImage": true,
    "baseCategory": "recycle",
    "rarity": "Rare",
    "type": "Topside Material",
    "value": 500,
    "foundIn": "Residential, Commercial",
    "weightKg": 0.3,
    "stackSize": 5,
    "craftBench": null,
    "recyclesInto": {
      "fabric": 5
    },
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": "Recycle",
    "reasons": [
      {
        "type": "recycle",
        "itemId": "rope",
        "recycleComponentId": "fabric",
        "recycleComponentName": "Fabric",
        "chain": [
          {
            "action": "recycle",
            "itemId": "rope",
            "itemName": "Rope",
            "targetId": "fabric",
            "targetName": "Fabric"
          },
          {
            "action": "use_in_workshop",
            "itemId": "fabric",
            "itemName": "Fabric",
            "workshopStation": "gear_bench",
            "workshopLevel": "1"
          }
        ]
      }
    ]
  },
  {
    "key": "rosary",
    "name": "Rosary",
    "image": "images/rosary.png",
    "hasImage": true,
    "baseCategory": "sell",
    "rarity": "Rare",
    "type": "Trinket",
    "value": 2000,
    "foundIn": "Old World, Residential",
    "weightKg": 0.3,
    "stackSize": 3,
    "craftBench": null,
    "recyclesInto": {},
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": "Sell",
    "reasons": []
  },
  {
    "key": "rotary_encoder",
    "name": "Rotary Encoder",
    "image": "images/rotary_encoder.png",
    "hasImage": true,
    "baseCategory": "recycle",
    "rarity": "Rare",
    "type": "Recyclable",
    "value": 3000,
    "foundIn": "Exodus",
    "weightKg": 1.5,
    "stackSize": 3,
    "craftBench": null,
    "recyclesInto": {
      "electrical_components": 2,
      "processor": 2
    },
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": "Recycle",
    "reasons": [
      {
        "type": "recycle",
        "itemId": "rotary_encoder",
        "recycleComponentId": "electrical_components",
        "recycleComponentName": "Electrical Components",
        "chain": [
          {
            "action": "recycle",
            "itemId": "rotary_encoder",
            "itemName": "Rotary Encoder",
            "targetId": "electrical_components",
            "targetName": "Electrical Components"
          },
          {
            "action": "use_in_workshop",
            "itemId": "electrical_components",
            "itemName": "Electrical Components",
            "workshopStation": "gear_bench",
            "workshopLevel": "2"
          }
        ]
      }
    ]
  },
  {
    "key": "rubber_duck",
    "name": "Rubber Duck",
    "image": "images/rubber_duck.png",
    "hasImage": true,
    "baseCategory": "sell",
    "rarity": "Common",
    "type": "Trinket",
    "value": 1000,
    "foundIn": null,
    "weightKg": 0.3,
    "stackSize": 15,
    "craftBench": null,
    "recyclesInto": {},
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": "Sell",
    "reasons": []
  },
  {
    "key": "rubber_pad",
    "name": "Rubber Pad",
    "image": "images/rubber_pad.png",
    "hasImage": true,
    "baseCategory": "recycle",
    "rarity": "Rare",
    "type": "Recyclable",
    "value": 1000,
    "foundIn": "Electrical",
    "weightKg": 2,
    "stackSize": 3,
    "craftBench": null,
    "recyclesInto": {
      "rubber_parts": 18
    },
    "salvagesInto": {
      "rubber_parts": 9
    },
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": "Recycle",
    "reasons": [
      {
        "type": "recycle",
        "itemId": "rubber_pad",
        "recycleComponentId": "rubber_parts",
        "recycleComponentName": "Rubber Parts",
        "chain": [
          {
            "action": "recycle",
            "itemId": "rubber_pad",
            "itemName": "Rubber Pad",
            "targetId": "rubber_parts",
            "targetName": "Rubber Parts"
          },
          {
            "action": "use_in_workshop",
            "itemId": "rubber_parts",
            "itemName": "Rubber Parts",
            "workshopStation": "gunsmith",
            "workshopLevel": "1"
          }
        ]
      }
    ]
  },
  {
    "key": "rubber_parts",
    "name": "Rubber Parts",
    "image": "images/rubber_parts.png",
    "hasImage": true,
    "baseCategory": "keep",
    "rarity": "Common",
    "type": "Basic Material",
    "value": 50,
    "foundIn": "Mechanical, Industrial, Electrical",
    "weightKg": 0.1,
    "stackSize": 50,
    "craftBench": null,
    "recyclesInto": {},
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {
      "gunsmith": [
        1
      ]
    },
    "hasExpedition": true,
    "expeditionPhases": [
      1
    ],
    "reasonSummary": "Keep • Workstations: Gunsmith T1 • Expedition project (phase 1)",
    "reasons": [
      {
        "type": "workshop",
        "itemId": "rubber_parts",
        "workshopStation": "gunsmith",
        "workshopLevel": "1"
      },
      {
        "type": "project",
        "itemId": "rubber_parts",
        "projectId": "expedition_project",
        "projectName": "Expedition Project",
        "projectPhase": 1
      }
    ]
  },
  {
    "key": "ruined_accordion",
    "name": "Ruined Accordion",
    "image": "images/ruined_accordion.png",
    "hasImage": true,
    "baseCategory": "recycle",
    "rarity": "Rare",
    "type": "Recyclable",
    "value": 2000,
    "foundIn": "Residential",
    "weightKg": 3,
    "stackSize": 3,
    "craftBench": null,
    "recyclesInto": {
      "rubber_parts": 18,
      "steel_spring": 3
    },
    "salvagesInto": {
      "rubber_parts": 13
    },
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": "Recycle",
    "reasons": [
      {
        "type": "recycle",
        "itemId": "ruined_accordion",
        "recycleComponentId": "rubber_parts",
        "recycleComponentName": "Rubber Parts",
        "chain": [
          {
            "action": "recycle",
            "itemId": "ruined_accordion",
            "itemName": "Ruined Accordion",
            "targetId": "rubber_parts",
            "targetName": "Rubber Parts"
          },
          {
            "action": "use_in_workshop",
            "itemId": "rubber_parts",
            "itemName": "Rubber Parts",
            "workshopStation": "gunsmith",
            "workshopLevel": "1"
          }
        ]
      },
      {
        "type": "recycle",
        "itemId": "ruined_accordion",
        "recycleComponentId": "steel_spring",
        "recycleComponentName": "Steel Spring",
        "chain": [
          {
            "action": "recycle",
            "itemId": "ruined_accordion",
            "itemName": "Ruined Accordion",
            "targetId": "steel_spring",
            "targetName": "Steel Spring"
          }
        ]
      }
    ]
  },
  {
    "key": "ruined_baton",
    "name": "Ruined Baton",
    "image": "images/ruined_baton.png",
    "hasImage": true,
    "baseCategory": "sell",
    "rarity": "Uncommon",
    "type": "Recyclable",
    "value": 640,
    "foundIn": "Security",
    "weightKg": 0.8,
    "stackSize": null,
    "craftBench": null,
    "recyclesInto": {},
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": "Sell",
    "reasons": []
  },
  {
    "key": "ruined_handcuffs",
    "name": "Ruined Handcuffs",
    "image": "images/ruined_handcuffs.png",
    "hasImage": true,
    "baseCategory": "sell",
    "rarity": "Uncommon",
    "type": "Recyclable",
    "value": 640,
    "foundIn": "Security",
    "weightKg": 0.8,
    "stackSize": 3,
    "craftBench": null,
    "recyclesInto": {},
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": "Sell",
    "reasons": []
  },
  {
    "key": "ruined_parachute",
    "name": "Ruined Parachute",
    "image": "images/ruined_parachute.png",
    "hasImage": true,
    "baseCategory": "sell",
    "rarity": "Uncommon",
    "type": "Recyclable",
    "value": 640,
    "foundIn": "Exodus",
    "weightKg": 0.8,
    "stackSize": 3,
    "craftBench": null,
    "recyclesInto": {},
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": "Sell",
    "reasons": []
  },
  {
    "key": "ruined_riot_shield",
    "name": "Ruined Riot Shield",
    "image": "images/ruined_riot_shield.png",
    "hasImage": true,
    "baseCategory": "recycle",
    "rarity": "Rare",
    "type": "Recyclable",
    "value": 1000,
    "foundIn": "Security",
    "weightKg": 2,
    "stackSize": null,
    "craftBench": null,
    "recyclesInto": {
      "plastic_parts": 10,
      "rubber_parts": 6
    },
    "salvagesInto": {
      "plastic_parts": 10
    },
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": "Recycle",
    "reasons": [
      {
        "type": "recycle",
        "itemId": "ruined_riot_shield",
        "recycleComponentId": "plastic_parts",
        "recycleComponentName": "Plastic Parts",
        "chain": [
          {
            "action": "recycle",
            "itemId": "ruined_riot_shield",
            "itemName": "Ruined Riot Shield",
            "targetId": "plastic_parts",
            "targetName": "Plastic Parts"
          },
          {
            "action": "use_in_workshop",
            "itemId": "plastic_parts",
            "itemName": "Plastic Parts",
            "workshopStation": "gear_bench",
            "workshopLevel": "1"
          }
        ]
      },
      {
        "type": "recycle",
        "itemId": "ruined_riot_shield",
        "recycleComponentId": "rubber_parts",
        "recycleComponentName": "Rubber Parts",
        "chain": [
          {
            "action": "recycle",
            "itemId": "ruined_riot_shield",
            "itemName": "Ruined Riot Shield",
            "targetId": "rubber_parts",
            "targetName": "Rubber Parts"
          },
          {
            "action": "use_in_workshop",
            "itemId": "rubber_parts",
            "itemName": "Rubber Parts",
            "workshopStation": "gunsmith",
            "workshopLevel": "1"
          }
        ]
      }
    ]
  },
  {
    "key": "ruined_tactical_vest",
    "name": "Ruined Tactical Vest",
    "image": "images/ruined_tactical_vest.png",
    "hasImage": true,
    "baseCategory": "recycle",
    "rarity": "Uncommon",
    "type": "Recyclable",
    "value": 640,
    "foundIn": "Security",
    "weightKg": 0.8,
    "stackSize": 3,
    "craftBench": null,
    "recyclesInto": {
      "fabric": 5,
      "magnet": 1
    },
    "salvagesInto": {
      "fabric": 5
    },
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": "Recycle",
    "reasons": [
      {
        "type": "recycle",
        "itemId": "ruined_tactical_vest",
        "recycleComponentId": "fabric",
        "recycleComponentName": "Fabric",
        "chain": [
          {
            "action": "recycle",
            "itemId": "ruined_tactical_vest",
            "itemName": "Ruined Tactical Vest",
            "targetId": "fabric",
            "targetName": "Fabric"
          },
          {
            "action": "use_in_workshop",
            "itemId": "fabric",
            "itemName": "Fabric",
            "workshopStation": "gear_bench",
            "workshopLevel": "1"
          }
        ]
      }
    ]
  },
  {
    "key": "rusted_bolts",
    "name": "Rusted Bolts",
    "image": "images/rusted_bolts.png",
    "hasImage": true,
    "baseCategory": "recycle",
    "rarity": "Uncommon",
    "type": "Recyclable",
    "value": 640,
    "foundIn": "Industrial, Mechanical",
    "weightKg": 0.8,
    "stackSize": 3,
    "craftBench": null,
    "recyclesInto": {
      "metal_parts": 8
    },
    "salvagesInto": {
      "metal_parts": 4
    },
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": "Recycle",
    "reasons": [
      {
        "type": "recycle",
        "itemId": "rusted_bolts",
        "recycleComponentId": "metal_parts",
        "recycleComponentName": "Metal Parts",
        "chain": [
          {
            "action": "recycle",
            "itemId": "rusted_bolts",
            "itemName": "Rusted Bolts",
            "targetId": "metal_parts",
            "targetName": "Metal Parts"
          },
          {
            "action": "use_in_workshop",
            "itemId": "metal_parts",
            "itemName": "Metal Parts",
            "workshopStation": "gunsmith",
            "workshopLevel": "1"
          }
        ]
      }
    ]
  },
  {
    "key": "rusted_gear",
    "name": "Rusted Gear",
    "image": "images/rusted_gear.png",
    "hasImage": true,
    "baseCategory": "keep",
    "rarity": "Rare",
    "type": "Recyclable",
    "value": 2000,
    "foundIn": "Industrial",
    "weightKg": 3,
    "stackSize": 3,
    "craftBench": null,
    "recyclesInto": {
      "metal_parts": 4,
      "mechanical_components": 2
    },
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {
      "gunsmith": [
        3
      ]
    },
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": "Keep • Workstations: Gunsmith T3",
    "reasons": [
      {
        "type": "workshop",
        "itemId": "rusted_gear",
        "workshopStation": "gunsmith",
        "workshopLevel": "3"
      }
    ]
  },
  {
    "key": "rusted_shut_medical_kit",
    "name": "Rusted Shut Medical Kit",
    "image": "images/rusted_shut_medical_kit.png",
    "hasImage": true,
    "baseCategory": "keep",
    "rarity": "Rare",
    "type": "Recyclable",
    "value": 1000,
    "foundIn": "Medical",
    "weightKg": 3,
    "stackSize": null,
    "craftBench": null,
    "recyclesInto": {
      "syringe": 2,
      "antiseptic": 1
    },
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {
      "medical_lab": [
        3
      ]
    },
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": "Keep • Workstations: Medical Lab T3",
    "reasons": [
      {
        "type": "workshop",
        "itemId": "rusted_shut_medical_kit",
        "workshopStation": "medical_lab",
        "workshopLevel": "3"
      }
    ]
  },
  {
    "key": "rusted_tools",
    "name": "Rusted Tools",
    "image": "images/rusted_tools.png",
    "hasImage": true,
    "baseCategory": "keep",
    "rarity": "Rare",
    "type": "Recyclable",
    "value": 1000,
    "foundIn": "Mechanical",
    "weightKg": 2,
    "stackSize": null,
    "craftBench": null,
    "recyclesInto": {
      "metal_parts": 8,
      "steel_spring": 1
    },
    "salvagesInto": {
      "metal_parts": 7
    },
    "recipe": {},
    "quest": false,
    "workstations": {
      "gunsmith": [
        2
      ]
    },
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": "Keep • Workstations: Gunsmith T2",
    "reasons": [
      {
        "type": "workshop",
        "itemId": "rusted_tools",
        "workshopStation": "gunsmith",
        "workshopLevel": "2"
      }
    ]
  },
  {
    "key": "rusty_arc_steel",
    "name": "Rusty ARC Steel",
    "image": "images/rusty_arc_steel.png",
    "hasImage": true,
    "baseCategory": "recycle",
    "rarity": "Uncommon",
    "type": "Recyclable",
    "value": 640,
    "foundIn": "ARC",
    "weightKg": 1,
    "stackSize": 3,
    "craftBench": null,
    "recyclesInto": {
      "metal_parts": 8
    },
    "salvagesInto": {
      "metal_parts": 3
    },
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": "Recycle",
    "reasons": [
      {
        "type": "recycle",
        "itemId": "rusty_arc_steel",
        "recycleComponentId": "metal_parts",
        "recycleComponentName": "Metal Parts",
        "chain": [
          {
            "action": "recycle",
            "itemId": "rusty_arc_steel",
            "itemName": "Rusty ARC Steel",
            "targetId": "metal_parts",
            "targetName": "Metal Parts"
          },
          {
            "action": "use_in_workshop",
            "itemId": "metal_parts",
            "itemName": "Metal Parts",
            "workshopStation": "gunsmith",
            "workshopLevel": "1"
          }
        ]
      }
    ]
  },
  {
    "key": "sample_cleaner",
    "name": "Sample Cleaner",
    "image": "images/sample_cleaner.png",
    "hasImage": true,
    "baseCategory": "recycle",
    "rarity": "Rare",
    "type": "Recyclable",
    "value": 3000,
    "foundIn": "Exodus",
    "weightKg": 1.5,
    "stackSize": 3,
    "craftBench": null,
    "recyclesInto": {
      "electrical_components": 2,
      "assorted_seeds": 14
    },
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": "Recycle",
    "reasons": [
      {
        "type": "recycle",
        "itemId": "sample_cleaner",
        "recycleComponentId": "electrical_components",
        "recycleComponentName": "Electrical Components",
        "chain": [
          {
            "action": "recycle",
            "itemId": "sample_cleaner",
            "itemName": "Sample Cleaner",
            "targetId": "electrical_components",
            "targetName": "Electrical Components"
          },
          {
            "action": "use_in_workshop",
            "itemId": "electrical_components",
            "itemName": "Electrical Components",
            "workshopStation": "gear_bench",
            "workshopLevel": "2"
          }
        ]
      }
    ]
  },
  {
    "key": "seeker_grenade",
    "name": "Seeker Grenade",
    "image": "images/seeker_grenade.png",
    "hasImage": false,
    "baseCategory": null,
    "rarity": "Uncommon",
    "type": "Quick Use",
    "value": 640,
    "foundIn": null,
    "weightKg": 0.2,
    "stackSize": 5,
    "craftBench": null,
    "recyclesInto": {
      "chemicals": 1
    },
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "sensors",
    "name": "Sensors",
    "image": "images/sensors.png",
    "hasImage": true,
    "baseCategory": "keep",
    "rarity": "Rare",
    "type": "Topside Material",
    "value": 500,
    "foundIn": "Security, Technological",
    "weightKg": 0.3,
    "stackSize": 5,
    "craftBench": null,
    "recyclesInto": {
      "wires": 1,
      "metal_parts": 1
    },
    "salvagesInto": {
      "wires": 1
    },
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": true,
    "expeditionPhases": [
      3
    ],
    "reasonSummary": "Keep • Expedition project (phase 3)",
    "reasons": [
      {
        "type": "project",
        "itemId": "sensors",
        "projectId": "expedition_project",
        "projectName": "Expedition Project",
        "projectPhase": 3
      }
    ]
  },
  {
    "key": "sentinel_firing_core",
    "name": "Sentinel Firing Core",
    "image": "images/sentinel_firing_core.png",
    "hasImage": true,
    "baseCategory": "keep",
    "rarity": "Rare",
    "type": "Recyclable",
    "value": 3000,
    "foundIn": "ARC",
    "weightKg": 1,
    "stackSize": 3,
    "craftBench": null,
    "recyclesInto": {
      "arc_alloy": 2,
      "mechanical_components": 3
    },
    "salvagesInto": {
      "mechanical_components": 2
    },
    "recipe": {},
    "quest": false,
    "workstations": {
      "gunsmith": [
        3
      ]
    },
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": "Keep • Workstations: Gunsmith T3",
    "reasons": [
      {
        "type": "workshop",
        "itemId": "sentinel_firing_core",
        "workshopStation": "gunsmith",
        "workshopLevel": "3"
      }
    ]
  },
  {
    "key": "shield_recharger",
    "name": "Shield Recharger",
    "image": "images/shield_recharger.png",
    "hasImage": true,
    "baseCategory": null,
    "rarity": "Uncommon",
    "type": "Quick Use",
    "value": 520,
    "foundIn": null,
    "weightKg": 0.15,
    "stackSize": 5,
    "craftBench": [
      "workbench",
      "med_station"
    ],
    "recyclesInto": {
      "rubber_parts": 4
    },
    "salvagesInto": {},
    "recipe": {
      "rubber_parts": 5,
      "arc_powercell": 1
    },
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "shotgun_ammo",
    "name": "Shotgun Ammo",
    "image": "images/shotgun_ammo.png",
    "hasImage": true,
    "baseCategory": null,
    "rarity": "Common",
    "type": "Ammunition",
    "value": 20,
    "foundIn": null,
    "weightKg": 0.085,
    "stackSize": 20,
    "craftBench": "workbench",
    "recyclesInto": {},
    "salvagesInto": {},
    "recipe": {
      "metal_parts": 3,
      "chemicals": 2
    },
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "shotgun_choke_i",
    "name": "Shotgun Choke I",
    "image": "images/shotgun_choke_i.png",
    "hasImage": true,
    "baseCategory": null,
    "rarity": "Common",
    "type": "Modification",
    "value": 640,
    "foundIn": null,
    "weightKg": 0.25,
    "stackSize": null,
    "craftBench": "weapon_bench",
    "recyclesInto": {},
    "salvagesInto": {},
    "recipe": {
      "metal_parts": 6,
      "wires": 1
    },
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "shotgun_choke_ii",
    "name": "Shotgun Choke II",
    "image": "images/shotgun_choke_ii.png",
    "hasImage": true,
    "baseCategory": null,
    "rarity": "Uncommon",
    "type": "Modification",
    "value": 2000,
    "foundIn": null,
    "weightKg": 0.5,
    "stackSize": null,
    "craftBench": null,
    "recyclesInto": {
      "mechanical_components": 1,
      "wires": 1
    },
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "shotgun_choke_iii",
    "name": "Shotgun Choke III",
    "image": "images/shotgun_choke_iii.png",
    "hasImage": true,
    "baseCategory": null,
    "rarity": "Rare",
    "type": "Modification",
    "value": 5000,
    "foundIn": null,
    "weightKg": 0.75,
    "stackSize": null,
    "craftBench": null,
    "recyclesInto": {},
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "shotgun_silencer",
    "name": "Shotgun Silencer",
    "image": "images/shotgun_silencer.png",
    "hasImage": true,
    "baseCategory": null,
    "rarity": "Epic",
    "type": "Modification",
    "value": 5000,
    "foundIn": null,
    "weightKg": 0.5,
    "stackSize": null,
    "craftBench": null,
    "recyclesInto": {},
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "showstopper",
    "name": "Showstopper",
    "image": "images/showstopper.png",
    "hasImage": true,
    "baseCategory": null,
    "rarity": "Rare",
    "type": "Quick Use",
    "value": 2200,
    "foundIn": null,
    "weightKg": 0.4,
    "stackSize": 5,
    "craftBench": null,
    "recyclesInto": {
      "electrical_components": 1,
      "battery": 2
    },
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "shrapnel_grenade",
    "name": "Shrapnel Grenade",
    "image": "images/shrapnel_grenade.png",
    "hasImage": true,
    "baseCategory": null,
    "rarity": "Uncommon",
    "type": "Quick Use",
    "value": 800,
    "foundIn": null,
    "weightKg": 0.15,
    "stackSize": 5,
    "craftBench": "explosives_bench",
    "recyclesInto": {
      "crude_explosives": 1,
      "metal_parts": 1
    },
    "salvagesInto": {},
    "recipe": {
      "crude_explosives": 1,
      "steel_spring": 2
    },
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "shredder_gyro",
    "name": "Shredder Gyro",
    "image": "images/shredder_gyro.png",
    "hasImage": true,
    "baseCategory": "recycle",
    "rarity": "Uncommon",
    "type": "Recyclable",
    "value": 3000,
    "foundIn": "ARC",
    "weightKg": 1,
    "stackSize": 3,
    "craftBench": null,
    "recyclesInto": {
      "mechanical_components": 3,
      "arc_alloy": 3
    },
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": "Recycle",
    "reasons": [
      {
        "type": "recycle",
        "itemId": "shredder_gyro",
        "recycleComponentId": "mechanical_components",
        "recycleComponentName": "Mechanical Components",
        "chain": [
          {
            "action": "recycle",
            "itemId": "shredder_gyro",
            "itemName": "Shredder Gyro",
            "targetId": "mechanical_components",
            "targetName": "Mechanical Components"
          },
          {
            "action": "use_in_workshop",
            "itemId": "mechanical_components",
            "itemName": "Mechanical Components",
            "workshopStation": "gunsmith",
            "workshopLevel": "2"
          }
        ]
      },
      {
        "type": "recycle",
        "itemId": "shredder_gyro",
        "recycleComponentId": "arc_alloy",
        "recycleComponentName": "ARC Alloy",
        "chain": [
          {
            "action": "recycle",
            "itemId": "shredder_gyro",
            "itemName": "Shredder Gyro",
            "targetId": "arc_alloy",
            "targetName": "ARC Alloy"
          },
          {
            "action": "use_in_quest",
            "itemId": "arc_alloy",
            "itemName": "ARC Alloy",
            "questId": "ss2",
            "questName": "Clearer Skies"
          }
        ]
      }
    ]
  },
  {
    "key": "signal_amplifier",
    "name": "Signal Amplifier",
    "image": "images/signal_amplifier.png",
    "hasImage": true,
    "baseCategory": "recycle",
    "rarity": "Rare",
    "type": "Recyclable",
    "value": 3000,
    "foundIn": "Exodus",
    "weightKg": 1.5,
    "stackSize": 3,
    "craftBench": null,
    "recyclesInto": {
      "electrical_components": 2,
      "voltage_converter": 2
    },
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": "Recycle",
    "reasons": [
      {
        "type": "recycle",
        "itemId": "signal_amplifier",
        "recycleComponentId": "electrical_components",
        "recycleComponentName": "Electrical Components",
        "chain": [
          {
            "action": "recycle",
            "itemId": "signal_amplifier",
            "itemName": "Signal Amplifier",
            "targetId": "electrical_components",
            "targetName": "Electrical Components"
          },
          {
            "action": "use_in_workshop",
            "itemId": "electrical_components",
            "itemName": "Electrical Components",
            "workshopStation": "gear_bench",
            "workshopLevel": "2"
          }
        ]
      }
    ]
  },
  {
    "key": "silencer_i",
    "name": "Silencer I",
    "image": "images/silencer_i.png",
    "hasImage": true,
    "baseCategory": null,
    "rarity": "Uncommon",
    "type": "Modification",
    "value": 2000,
    "foundIn": null,
    "weightKg": 0.25,
    "stackSize": null,
    "craftBench": null,
    "recyclesInto": {},
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "silencer_i_blueprint",
    "name": "Silencer I Blueprint",
    "image": "images/silencer_i_blueprint.png",
    "hasImage": false,
    "baseCategory": null,
    "rarity": "Legendary",
    "type": "Blueprint",
    "value": 5000,
    "foundIn": null,
    "weightKg": 0,
    "stackSize": null,
    "craftBench": null,
    "recyclesInto": {},
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "silencer_ii",
    "name": "Silencer II",
    "image": "images/silencer_ii.png",
    "hasImage": true,
    "baseCategory": null,
    "rarity": "Rare",
    "type": "Modification",
    "value": 5000,
    "foundIn": null,
    "weightKg": 0.5,
    "stackSize": null,
    "craftBench": null,
    "recyclesInto": {},
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "silencer_ii_blueprint",
    "name": "Silencer II Blueprint",
    "image": "images/silencer_ii_blueprint.png",
    "hasImage": false,
    "baseCategory": null,
    "rarity": "Legendary",
    "type": "Blueprint",
    "value": 5000,
    "foundIn": null,
    "weightKg": 0,
    "stackSize": null,
    "craftBench": null,
    "recyclesInto": {},
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "silencer_iii",
    "name": "Silencer III",
    "image": "images/silencer_iii.png",
    "hasImage": false,
    "baseCategory": null,
    "rarity": "Epic",
    "type": "Modification",
    "value": 7000,
    "foundIn": null,
    "weightKg": 0.75,
    "stackSize": null,
    "craftBench": "weapon_bench",
    "recyclesInto": {
      "mod_components": 1,
      "wires": 3
    },
    "salvagesInto": {
      "mod_components": 1
    },
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "silver_teaspoon_set",
    "name": "Silver Teaspoon Set",
    "image": "images/silver_teaspoon_set.png",
    "hasImage": true,
    "baseCategory": "sell",
    "rarity": "Rare",
    "type": "Trinket",
    "value": 3000,
    "foundIn": "Residential, Old World, Commercial",
    "weightKg": 0.3,
    "stackSize": 3,
    "craftBench": null,
    "recyclesInto": {},
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": "Sell",
    "reasons": []
  },
  {
    "key": "simple_gun_parts",
    "name": "Simple Gun Parts",
    "image": "images/simple_gun_parts.png",
    "hasImage": true,
    "baseCategory": "recycle",
    "rarity": "Uncommon",
    "type": "Topside Material",
    "value": 330,
    "foundIn": "Raider, Security",
    "weightKg": 0.3,
    "stackSize": 10,
    "craftBench": null,
    "recyclesInto": {
      "metal_parts": 2
    },
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": "Recycle",
    "reasons": [
      {
        "type": "recycle",
        "itemId": "simple_gun_parts",
        "recycleComponentId": "metal_parts",
        "recycleComponentName": "Metal Parts",
        "chain": [
          {
            "action": "recycle",
            "itemId": "simple_gun_parts",
            "itemName": "Simple Gun Parts",
            "targetId": "metal_parts",
            "targetName": "Metal Parts"
          },
          {
            "action": "use_in_workshop",
            "itemId": "metal_parts",
            "itemName": "Metal Parts",
            "workshopStation": "gunsmith",
            "workshopLevel": "1"
          }
        ]
      }
    ]
  },
  {
    "key": "smoke_grenade",
    "name": "Smoke Grenade",
    "image": "images/smoke_grenade.png",
    "hasImage": true,
    "baseCategory": null,
    "rarity": "Rare",
    "type": "Quick Use",
    "value": 1000,
    "foundIn": null,
    "weightKg": 0.2,
    "stackSize": 3,
    "craftBench": null,
    "recyclesInto": {
      "chemicals": 2,
      "canister": 1
    },
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "smoke_grenade_trap",
    "name": "Smoke Grenade Trap",
    "image": "images/smoke_grenade_trap.png",
    "hasImage": true,
    "baseCategory": null,
    "rarity": "Rare",
    "type": "Quick Use",
    "value": null,
    "foundIn": null,
    "weightKg": 0.3,
    "stackSize": 3,
    "craftBench": null,
    "recyclesInto": {},
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "snap_blast_grenade",
    "name": "Snap Blast Grenade",
    "image": "images/snap_blast_grenade.png",
    "hasImage": true,
    "baseCategory": null,
    "rarity": "Uncommon",
    "type": "Quick Use",
    "value": 800,
    "foundIn": null,
    "weightKg": 0.2,
    "stackSize": 3,
    "craftBench": "explosives_bench",
    "recyclesInto": {
      "chemicals": 1,
      "magnet": 1
    },
    "salvagesInto": {},
    "recipe": {
      "crude_explosives": 2,
      "magnet": 1
    },
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "snap_hook",
    "name": "Snap Hook",
    "image": "images/snap_hook.png",
    "hasImage": false,
    "baseCategory": null,
    "rarity": "Legendary",
    "type": "Quick Use",
    "value": 14000,
    "foundIn": null,
    "weightKg": 5,
    "stackSize": null,
    "craftBench": "utility_bench",
    "recyclesInto": {
      "power_rod": 1,
      "rope": 3
    },
    "salvagesInto": {},
    "recipe": {
      "power_rod": 1,
      "exodus_modules": 1
    },
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "snap_hook_blueprint",
    "name": "Snap Hook Blueprint",
    "image": "images/snap_hook_blueprint.png",
    "hasImage": false,
    "baseCategory": null,
    "rarity": "Legendary",
    "type": "Blueprint",
    "value": 5000,
    "foundIn": null,
    "weightKg": 0,
    "stackSize": null,
    "craftBench": null,
    "recyclesInto": {},
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "snitch_scanner",
    "name": "Snitch Scanner",
    "image": "images/snitch_scanner.png",
    "hasImage": true,
    "baseCategory": "keep",
    "rarity": "Uncommon",
    "type": "Recyclable",
    "value": 2000,
    "foundIn": "ARC",
    "weightKg": 0.75,
    "stackSize": 3,
    "craftBench": null,
    "recyclesInto": {
      "arc_alloy": 1,
      "electrical_components": 2
    },
    "salvagesInto": {
      "electrical_components": 1
    },
    "recipe": {},
    "quest": true,
    "workstations": {
      "utility_station": [
        2
      ]
    },
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": "Keep • Quest item • Workstations: Utility Station T2",
    "reasons": [
      {
        "type": "quest",
        "itemId": "snitch_scanner",
        "questId": "ss9",
        "questName": "The Trifecta"
      },
      {
        "type": "workshop",
        "itemId": "snitch_scanner",
        "workshopStation": "utility_station",
        "workshopLevel": "2"
      }
    ]
  },
  {
    "key": "spaceport_container_storage_key",
    "name": "Spaceport Container Storage Key",
    "image": "images/spaceport_container_storage_key.png",
    "hasImage": false,
    "baseCategory": null,
    "rarity": "Rare",
    "type": "Key",
    "value": 100,
    "foundIn": null,
    "weightKg": 0.25,
    "stackSize": 1,
    "craftBench": null,
    "recyclesInto": {},
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "spaceport_control_tower_key",
    "name": "Spaceport Control Tower Key",
    "image": "images/spaceport_control_tower_key.png",
    "hasImage": false,
    "baseCategory": null,
    "rarity": "Rare",
    "type": "Key",
    "value": 100,
    "foundIn": null,
    "weightKg": 0.25,
    "stackSize": null,
    "craftBench": null,
    "recyclesInto": {},
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "spaceport_trench_tower_key",
    "name": "Spaceport Trench Tower Key",
    "image": "images/spaceport_trench_tower_key.png",
    "hasImage": false,
    "baseCategory": null,
    "rarity": "Uncommon",
    "type": "Key",
    "value": 100,
    "foundIn": null,
    "weightKg": 0.25,
    "stackSize": null,
    "craftBench": null,
    "recyclesInto": {},
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "spaceport_warehouse_key",
    "name": "Spaceport Warehouse Key",
    "image": "images/spaceport_warehouse_key.png",
    "hasImage": false,
    "baseCategory": null,
    "rarity": "Uncommon",
    "type": "Key",
    "value": 100,
    "foundIn": null,
    "weightKg": 0.25,
    "stackSize": null,
    "craftBench": null,
    "recyclesInto": {},
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "speaker_component",
    "name": "Speaker Component",
    "image": "images/speaker_component.png",
    "hasImage": true,
    "baseCategory": "recycle",
    "rarity": "Rare",
    "type": "Topside Material",
    "value": 500,
    "foundIn": "Commercial",
    "weightKg": 0.3,
    "stackSize": 5,
    "craftBench": null,
    "recyclesInto": {
      "plastic_parts": 2,
      "rubber_parts": 3
    },
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": "Recycle",
    "reasons": [
      {
        "type": "recycle",
        "itemId": "speaker_component",
        "recycleComponentId": "plastic_parts",
        "recycleComponentName": "Plastic Parts",
        "chain": [
          {
            "action": "recycle",
            "itemId": "speaker_component",
            "itemName": "Speaker Component",
            "targetId": "plastic_parts",
            "targetName": "Plastic Parts"
          },
          {
            "action": "use_in_workshop",
            "itemId": "plastic_parts",
            "itemName": "Plastic Parts",
            "workshopStation": "gear_bench",
            "workshopLevel": "1"
          }
        ]
      },
      {
        "type": "recycle",
        "itemId": "speaker_component",
        "recycleComponentId": "rubber_parts",
        "recycleComponentName": "Rubber Parts",
        "chain": [
          {
            "action": "recycle",
            "itemId": "speaker_component",
            "itemName": "Speaker Component",
            "targetId": "rubber_parts",
            "targetName": "Rubber Parts"
          },
          {
            "action": "use_in_workshop",
            "itemId": "rubber_parts",
            "itemName": "Rubber Parts",
            "workshopStation": "gunsmith",
            "workshopLevel": "1"
          }
        ]
      }
    ]
  },
  {
    "key": "spectrometer",
    "name": "Spectrometer",
    "image": "images/spectrometer.png",
    "hasImage": true,
    "baseCategory": "recycle",
    "rarity": "Rare",
    "type": "Recyclable",
    "value": 3000,
    "foundIn": "Exodus",
    "weightKg": 1.5,
    "stackSize": 3,
    "craftBench": null,
    "recyclesInto": {
      "advanced_electrical_components": 1,
      "sensors": 1
    },
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": "Recycle",
    "reasons": [
      {
        "type": "recycle",
        "itemId": "spectrometer",
        "recycleComponentId": "advanced_electrical_components",
        "recycleComponentName": "Advanced Electrical Components",
        "chain": [
          {
            "action": "recycle",
            "itemId": "spectrometer",
            "itemName": "Spectrometer",
            "targetId": "advanced_electrical_components",
            "targetName": "Advanced Electrical Components"
          },
          {
            "action": "use_in_workshop",
            "itemId": "advanced_electrical_components",
            "itemName": "Advanced Electrical Components",
            "workshopStation": "gear_bench",
            "workshopLevel": "3"
          }
        ]
      },
      {
        "type": "recycle",
        "itemId": "spectrometer",
        "recycleComponentId": "sensors",
        "recycleComponentName": "Sensors",
        "chain": [
          {
            "action": "recycle",
            "itemId": "spectrometer",
            "itemName": "Spectrometer",
            "targetId": "sensors",
            "targetName": "Sensors"
          }
        ]
      }
    ]
  },
  {
    "key": "spectrum_analyzer",
    "name": "Spectrum Analyzer",
    "image": "images/spectrum_analyzer.png",
    "hasImage": true,
    "baseCategory": "recycle",
    "rarity": "Epic",
    "type": "Recyclable",
    "value": 3500,
    "foundIn": "Exodus",
    "weightKg": 1.5,
    "stackSize": null,
    "craftBench": null,
    "recyclesInto": {
      "sensors": 1,
      "exodus_modules": 1
    },
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": "Recycle",
    "reasons": [
      {
        "type": "recycle",
        "itemId": "spectrum_analyzer",
        "recycleComponentId": "sensors",
        "recycleComponentName": "Sensors",
        "chain": [
          {
            "action": "recycle",
            "itemId": "spectrum_analyzer",
            "itemName": "Spectrum Analyzer",
            "targetId": "sensors",
            "targetName": "Sensors"
          }
        ]
      },
      {
        "type": "recycle",
        "itemId": "spectrum_analyzer",
        "recycleComponentId": "exodus_modules",
        "recycleComponentName": "Exodus Modules",
        "chain": [
          {
            "action": "recycle",
            "itemId": "spectrum_analyzer",
            "itemName": "Spectrum Analyzer",
            "targetId": "exodus_modules",
            "targetName": "Exodus Modules"
          }
        ]
      }
    ]
  },
  {
    "key": "spotter_relay",
    "name": "Spotter Relay",
    "image": "images/spotter_relay.png",
    "hasImage": true,
    "baseCategory": "recycle",
    "rarity": "Uncommon",
    "type": "Recyclable",
    "value": 2000,
    "foundIn": "ARC",
    "weightKg": 1,
    "stackSize": 3,
    "craftBench": null,
    "recyclesInto": {
      "electrical_components": 2,
      "arc_alloy": 1
    },
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": "Recycle",
    "reasons": [
      {
        "type": "recycle",
        "itemId": "spotter_relay",
        "recycleComponentId": "electrical_components",
        "recycleComponentName": "Electrical Components",
        "chain": [
          {
            "action": "recycle",
            "itemId": "spotter_relay",
            "itemName": "Spotter Relay",
            "targetId": "electrical_components",
            "targetName": "Electrical Components"
          },
          {
            "action": "use_in_workshop",
            "itemId": "electrical_components",
            "itemName": "Electrical Components",
            "workshopStation": "gear_bench",
            "workshopLevel": "2"
          }
        ]
      },
      {
        "type": "recycle",
        "itemId": "spotter_relay",
        "recycleComponentId": "arc_alloy",
        "recycleComponentName": "ARC Alloy",
        "chain": [
          {
            "action": "recycle",
            "itemId": "spotter_relay",
            "itemName": "Spotter Relay",
            "targetId": "arc_alloy",
            "targetName": "ARC Alloy"
          },
          {
            "action": "use_in_quest",
            "itemId": "arc_alloy",
            "itemName": "ARC Alloy",
            "questId": "ss2",
            "questName": "Clearer Skies"
          }
        ]
      }
    ]
  },
  {
    "key": "spring_cushion",
    "name": "Spring Cushion",
    "image": "images/spring_cushion.png",
    "hasImage": true,
    "baseCategory": "recycle",
    "rarity": "Rare",
    "type": "Recyclable",
    "value": 2000,
    "foundIn": "Residential, Commercial",
    "weightKg": 2,
    "stackSize": 3,
    "craftBench": null,
    "recyclesInto": {
      "durable_cloth": 2,
      "steel_spring": 2
    },
    "salvagesInto": {
      "steel_spring": 2
    },
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": "Recycle",
    "reasons": [
      {
        "type": "recycle",
        "itemId": "spring_cushion",
        "recycleComponentId": "durable_cloth",
        "recycleComponentName": "Durable Cloth",
        "chain": [
          {
            "action": "recycle",
            "itemId": "spring_cushion",
            "itemName": "Spring Cushion",
            "targetId": "durable_cloth",
            "targetName": "Durable Cloth"
          },
          {
            "action": "use_in_quest",
            "itemId": "durable_cloth",
            "itemName": "Durable Cloth",
            "questId": "ss10c",
            "questName": "Doctor's Orders"
          }
        ]
      },
      {
        "type": "recycle",
        "itemId": "spring_cushion",
        "recycleComponentId": "steel_spring",
        "recycleComponentName": "Steel Spring",
        "chain": [
          {
            "action": "recycle",
            "itemId": "spring_cushion",
            "itemName": "Spring Cushion",
            "targetId": "steel_spring",
            "targetName": "Steel Spring"
          }
        ]
      }
    ]
  },
  {
    "key": "stable_stock_i",
    "name": "Stable Stock I",
    "image": "images/stable_stock_i.png",
    "hasImage": false,
    "baseCategory": null,
    "rarity": "Common",
    "type": "Modification",
    "value": 640,
    "foundIn": null,
    "weightKg": 0.25,
    "stackSize": null,
    "craftBench": "weapon_bench",
    "recyclesInto": {
      "rubber_parts": 6
    },
    "salvagesInto": {
      "rubber_parts": 3
    },
    "recipe": {
      "rubber_parts": 6,
      "duct_tape": 1
    },
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "stable_stock_ii",
    "name": "Stable Stock II",
    "image": "images/stable_stock_ii.png",
    "hasImage": true,
    "baseCategory": null,
    "rarity": "Uncommon",
    "type": "Modification",
    "value": 2000,
    "foundIn": null,
    "weightKg": 0.5,
    "stackSize": null,
    "craftBench": null,
    "recyclesInto": {
      "mechanical_components": 1,
      "duct_tape": 1
    },
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "stable_stock_iii",
    "name": "Stable Stock III",
    "image": "images/stable_stock_iii.png",
    "hasImage": true,
    "baseCategory": null,
    "rarity": "Rare",
    "type": "Modification",
    "value": 5000,
    "foundIn": null,
    "weightKg": 0.75,
    "stackSize": null,
    "craftBench": null,
    "recyclesInto": {},
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "statuette",
    "name": "Statuette",
    "image": "images/statuette.png",
    "hasImage": true,
    "baseCategory": "sell",
    "rarity": "Rare",
    "type": "Trinket",
    "value": 3000,
    "foundIn": "Old World, Residential",
    "weightKg": 0.3,
    "stackSize": 3,
    "craftBench": null,
    "recyclesInto": {},
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": "Sell",
    "reasons": []
  },
  {
    "key": "steel_spring",
    "name": "Steel Spring",
    "image": "images/steel_spring.png",
    "hasImage": true,
    "baseCategory": "keep",
    "rarity": "Uncommon",
    "type": "Topside Material",
    "value": 300,
    "foundIn": "Industrial",
    "weightKg": 0.25,
    "stackSize": 15,
    "craftBench": null,
    "recyclesInto": {
      "metal_parts": 2
    },
    "salvagesInto": {
      "metal_parts": 2
    },
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": true,
    "expeditionPhases": [
      1
    ],
    "reasonSummary": "Keep • Expedition project (phase 1)",
    "reasons": [
      {
        "type": "project",
        "itemId": "steel_spring",
        "projectId": "expedition_project",
        "projectName": "Expedition Project",
        "projectPhase": 1
      }
    ]
  },
  {
    "key": "stella_montis_archives_key",
    "name": "Stella Montis Archives Key",
    "image": "images/stella_montis_archives_key.png",
    "hasImage": false,
    "baseCategory": null,
    "rarity": "Uncommon",
    "type": "Key",
    "value": 100,
    "foundIn": null,
    "weightKg": 0.25,
    "stackSize": 1,
    "craftBench": null,
    "recyclesInto": {},
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "stella_montis_assembly_admin_key",
    "name": "Stella Montis Assembly Admin Key",
    "image": "images/stella_montis_assembly_admin_key.png",
    "hasImage": false,
    "baseCategory": null,
    "rarity": "Uncommon",
    "type": "Key",
    "value": 100,
    "foundIn": null,
    "weightKg": 0.25,
    "stackSize": null,
    "craftBench": null,
    "recyclesInto": {},
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "stella_montis_medical_storage_key",
    "name": "Stella Montis Medical Storage Key",
    "image": "images/stella_montis_medical_storage_key.png",
    "hasImage": false,
    "baseCategory": null,
    "rarity": "Epic",
    "type": "Key",
    "value": 100,
    "foundIn": null,
    "weightKg": 0.25,
    "stackSize": 1,
    "craftBench": null,
    "recyclesInto": {},
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "stella_montis_security_checkpoint_key",
    "name": "Stella Montis Security Checkpoint Key",
    "image": "images/stella_montis_security_checkpoint_key.png",
    "hasImage": false,
    "baseCategory": null,
    "rarity": "Rare",
    "type": "Key",
    "value": 100,
    "foundIn": null,
    "weightKg": 0.25,
    "stackSize": null,
    "craftBench": null,
    "recyclesInto": {},
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "sterilized_bandage",
    "name": "Sterilized Bandage",
    "image": "images/sterilized_bandage.png",
    "hasImage": true,
    "baseCategory": null,
    "rarity": "Rare",
    "type": "Quick Use",
    "value": 2000,
    "foundIn": null,
    "weightKg": 0.2,
    "stackSize": 3,
    "craftBench": "med_station",
    "recyclesInto": {},
    "salvagesInto": {},
    "recipe": {
      "antiseptic": 1,
      "durable_cloth": 2
    },
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "stitcher_i",
    "name": "Stitcher I",
    "image": "images/stitcher_i.png",
    "hasImage": false,
    "baseCategory": "recycle",
    "rarity": "Common",
    "type": "SMG",
    "value": 800,
    "foundIn": null,
    "weightKg": 5,
    "stackSize": null,
    "craftBench": [
      "workbench",
      "weapon_bench"
    ],
    "recyclesInto": {
      "metal_parts": 3,
      "rubber_parts": 2
    },
    "salvagesInto": {
      "metal_parts": 3
    },
    "recipe": {
      "metal_parts": 8,
      "rubber_parts": 4
    },
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": "Recycle",
    "reasons": [
      {
        "type": "recycle",
        "itemId": "stitcher_i",
        "recycleComponentId": "metal_parts",
        "recycleComponentName": "Metal Parts",
        "chain": [
          {
            "action": "recycle",
            "itemId": "stitcher_i",
            "itemName": "Stitcher I",
            "targetId": "metal_parts",
            "targetName": "Metal Parts"
          },
          {
            "action": "use_in_workshop",
            "itemId": "metal_parts",
            "itemName": "Metal Parts",
            "workshopStation": "gunsmith",
            "workshopLevel": "1"
          }
        ]
      },
      {
        "type": "recycle",
        "itemId": "stitcher_i",
        "recycleComponentId": "rubber_parts",
        "recycleComponentName": "Rubber Parts",
        "chain": [
          {
            "action": "recycle",
            "itemId": "stitcher_i",
            "itemName": "Stitcher I",
            "targetId": "rubber_parts",
            "targetName": "Rubber Parts"
          },
          {
            "action": "use_in_workshop",
            "itemId": "rubber_parts",
            "itemName": "Rubber Parts",
            "workshopStation": "gunsmith",
            "workshopLevel": "1"
          }
        ]
      }
    ]
  },
  {
    "key": "stitcher_ii",
    "name": "Stitcher II",
    "image": "images/stitcher_ii.png",
    "hasImage": false,
    "baseCategory": "recycle",
    "rarity": "Common",
    "type": "SMG",
    "value": 2000,
    "foundIn": null,
    "weightKg": 5,
    "stackSize": null,
    "craftBench": null,
    "recyclesInto": {
      "metal_parts": 6,
      "rubber_parts": 6
    },
    "salvagesInto": {
      "metal_parts": 6
    },
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": "Recycle",
    "reasons": [
      {
        "type": "recycle",
        "itemId": "stitcher_ii",
        "recycleComponentId": "metal_parts",
        "recycleComponentName": "Metal Parts",
        "chain": [
          {
            "action": "recycle",
            "itemId": "stitcher_ii",
            "itemName": "Stitcher II",
            "targetId": "metal_parts",
            "targetName": "Metal Parts"
          },
          {
            "action": "use_in_workshop",
            "itemId": "metal_parts",
            "itemName": "Metal Parts",
            "workshopStation": "gunsmith",
            "workshopLevel": "1"
          }
        ]
      },
      {
        "type": "recycle",
        "itemId": "stitcher_ii",
        "recycleComponentId": "rubber_parts",
        "recycleComponentName": "Rubber Parts",
        "chain": [
          {
            "action": "recycle",
            "itemId": "stitcher_ii",
            "itemName": "Stitcher II",
            "targetId": "rubber_parts",
            "targetName": "Rubber Parts"
          },
          {
            "action": "use_in_workshop",
            "itemId": "rubber_parts",
            "itemName": "Rubber Parts",
            "workshopStation": "gunsmith",
            "workshopLevel": "1"
          }
        ]
      }
    ]
  },
  {
    "key": "stitcher_iii",
    "name": "Stitcher III",
    "image": "images/stitcher_iii.png",
    "hasImage": false,
    "baseCategory": "recycle",
    "rarity": "Uncommon",
    "type": "SMG",
    "value": 3000,
    "foundIn": null,
    "weightKg": 5,
    "stackSize": null,
    "craftBench": null,
    "recyclesInto": {
      "metal_parts": 12,
      "simple_gun_parts": 1
    },
    "salvagesInto": {
      "simple_gun_parts": 1
    },
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": "Recycle",
    "reasons": [
      {
        "type": "recycle",
        "itemId": "stitcher_iii",
        "recycleComponentId": "metal_parts",
        "recycleComponentName": "Metal Parts",
        "chain": [
          {
            "action": "recycle",
            "itemId": "stitcher_iii",
            "itemName": "Stitcher III",
            "targetId": "metal_parts",
            "targetName": "Metal Parts"
          },
          {
            "action": "use_in_workshop",
            "itemId": "metal_parts",
            "itemName": "Metal Parts",
            "workshopStation": "gunsmith",
            "workshopLevel": "1"
          }
        ]
      }
    ]
  },
  {
    "key": "stitcher_iv",
    "name": "Stitcher IV",
    "image": "images/stitcher_iv.png",
    "hasImage": false,
    "baseCategory": "recycle",
    "rarity": "Uncommon",
    "type": "SMG",
    "value": 5000,
    "foundIn": null,
    "weightKg": 5,
    "stackSize": null,
    "craftBench": null,
    "recyclesInto": {
      "mechanical_components": 2,
      "simple_gun_parts": 2
    },
    "salvagesInto": {
      "simple_gun_parts": 2
    },
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": "Recycle",
    "reasons": [
      {
        "type": "recycle",
        "itemId": "stitcher_iv",
        "recycleComponentId": "mechanical_components",
        "recycleComponentName": "Mechanical Components",
        "chain": [
          {
            "action": "recycle",
            "itemId": "stitcher_iv",
            "itemName": "Stitcher IV",
            "targetId": "mechanical_components",
            "targetName": "Mechanical Components"
          },
          {
            "action": "use_in_workshop",
            "itemId": "mechanical_components",
            "itemName": "Mechanical Components",
            "workshopStation": "gunsmith",
            "workshopLevel": "2"
          }
        ]
      }
    ]
  },
  {
    "key": "surge_shield_recharger",
    "name": "Surge Shield Recharger",
    "image": "images/surge_shield_recharger.png",
    "hasImage": true,
    "baseCategory": null,
    "rarity": "Rare",
    "type": "Quick Use",
    "value": 1200,
    "foundIn": null,
    "weightKg": 0.2,
    "stackSize": 5,
    "craftBench": "med_station",
    "recyclesInto": {
      "electrical_components": 1
    },
    "salvagesInto": {},
    "recipe": {
      "electrical_components": 1,
      "advanced_arc_powercell": 1
    },
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "surveyor_vault",
    "name": "Surveyor Vault",
    "image": "images/surveyor_vault.png",
    "hasImage": true,
    "baseCategory": "keep",
    "rarity": "Rare",
    "type": "Recyclable",
    "value": 2000,
    "foundIn": "ARC",
    "weightKg": 1,
    "stackSize": 3,
    "craftBench": null,
    "recyclesInto": {
      "mechanical_components": 2,
      "arc_alloy": 2
    },
    "salvagesInto": {
      "mechanical_components": 2
    },
    "recipe": {},
    "quest": true,
    "workstations": {
      "medical_lab": [
        3
      ]
    },
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": "Keep • Quest item • Workstations: Medical Lab T3",
    "reasons": [
      {
        "type": "quest",
        "itemId": "surveyor_vault",
        "questId": "ss10d",
        "questName": "Mixed Signals"
      },
      {
        "type": "workshop",
        "itemId": "surveyor_vault",
        "workshopStation": "medical_lab",
        "workshopLevel": "3"
      }
    ]
  },
  {
    "key": "synthesized_fuel",
    "name": "Synthesized Fuel",
    "image": "images/synthesized_fuel.png",
    "hasImage": true,
    "baseCategory": "keep",
    "rarity": "Rare",
    "type": "Topside Material",
    "value": 700,
    "foundIn": "Exodus",
    "weightKg": 0.5,
    "stackSize": null,
    "craftBench": null,
    "recyclesInto": {
      "oil": 1,
      "plastic_parts": 1
    },
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {
      "explosives_station": [
        2
      ]
    },
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": "Keep • Workstations: Explosives Station T2",
    "reasons": [
      {
        "type": "workshop",
        "itemId": "synthesized_fuel",
        "workshopStation": "explosives_station",
        "workshopLevel": "2"
      }
    ]
  },
  {
    "key": "syringe",
    "name": "Syringe",
    "image": "images/syringe.png",
    "hasImage": true,
    "baseCategory": "keep",
    "rarity": "Rare",
    "type": "Topside Material",
    "value": 500,
    "foundIn": "Medical",
    "weightKg": 0.3,
    "stackSize": 5,
    "craftBench": null,
    "recyclesInto": {
      "plastic_parts": 3,
      "chemicals": 2
    },
    "salvagesInto": {
      "plastic_parts": 2
    },
    "recipe": {},
    "quest": true,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": "Keep • Quest item",
    "reasons": [
      {
        "type": "quest",
        "itemId": "syringe",
        "questId": "ss10c",
        "questName": "Doctor's Orders"
      }
    ]
  },
  {
    "key": "tactical_mk1",
    "name": "Tactical Mk. 1",
    "image": "images/tactical_mk1.png",
    "hasImage": false,
    "baseCategory": null,
    "rarity": "Uncommon",
    "type": "Augment",
    "value": 640,
    "foundIn": null,
    "weightKg": 2,
    "stackSize": null,
    "craftBench": "equipment_bench",
    "recyclesInto": {
      "plastic_parts": 3,
      "rubber_parts": 3
    },
    "salvagesInto": {},
    "recipe": {
      "plastic_parts": 6,
      "rubber_parts": 6
    },
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "tactical_mk2",
    "name": "Tactical Mk. 2",
    "image": "images/tactical_mk2.png",
    "hasImage": false,
    "baseCategory": null,
    "rarity": "Rare",
    "type": "Augment",
    "value": 2000,
    "foundIn": null,
    "weightKg": 2,
    "stackSize": null,
    "craftBench": "equipment_bench",
    "recyclesInto": {
      "advanced_electrical_components": 1,
      "processor": 1
    },
    "salvagesInto": {},
    "recipe": {
      "electrical_components": 2,
      "magnet": 3
    },
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "tactical_mk3_defensive",
    "name": "Tactical Mk. 3 (Defensive)",
    "image": "images/tactical_mk3_defensive.png",
    "hasImage": true,
    "baseCategory": null,
    "rarity": "Epic",
    "type": "Augment",
    "value": 5000,
    "foundIn": null,
    "weightKg": 5,
    "stackSize": null,
    "craftBench": "equipment_bench",
    "recyclesInto": {
      "advanced_electrical_components": 1,
      "processor": 1
    },
    "salvagesInto": {},
    "recipe": {
      "advanced_electrical_components": 2,
      "processor": 3
    },
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "tactical_mk3_healing",
    "name": "Tactical Mk. 3 (Healing)",
    "image": "images/tactical_mk3_healing.png",
    "hasImage": false,
    "baseCategory": null,
    "rarity": "Epic",
    "type": "Augment",
    "value": 5000,
    "foundIn": null,
    "weightKg": 4,
    "stackSize": null,
    "craftBench": null,
    "recyclesInto": {
      "advanced_electrical_components": 1,
      "processor": 1
    },
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "tactical_mk3_healing_blueprint",
    "name": "Tactical Mk. 3 (Healing) Blueprint",
    "image": "images/tactical_mk3_healing_blueprint.png",
    "hasImage": false,
    "baseCategory": null,
    "rarity": "Legendary",
    "type": "Blueprint",
    "value": 5000,
    "foundIn": null,
    "weightKg": 0,
    "stackSize": null,
    "craftBench": null,
    "recyclesInto": {},
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "tagging_grenade",
    "name": "Tagging Grenade",
    "image": "images/tagging_grenade.png",
    "hasImage": true,
    "baseCategory": null,
    "rarity": "Rare",
    "type": "Quick Use",
    "value": 1000,
    "foundIn": null,
    "weightKg": 0.4,
    "stackSize": 3,
    "craftBench": "utility_bench",
    "recyclesInto": {
      "plastic_parts": 1,
      "sensors": 1
    },
    "salvagesInto": {
      "sensors": 1
    },
    "recipe": {
      "electrical_components": 1,
      "sensors": 1
    },
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "tattered_arc_lining",
    "name": "Tattered Arc Lining",
    "image": "images/tattered_arc_lining.png",
    "hasImage": true,
    "baseCategory": "recycle",
    "rarity": "Uncommon",
    "type": "Recyclable",
    "value": 640,
    "foundIn": "ARC",
    "weightKg": 1,
    "stackSize": 3,
    "craftBench": null,
    "recyclesInto": {
      "fabric": 12
    },
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": "Recycle",
    "reasons": [
      {
        "type": "recycle",
        "itemId": "tattered_arc_lining",
        "recycleComponentId": "fabric",
        "recycleComponentName": "Fabric",
        "chain": [
          {
            "action": "recycle",
            "itemId": "tattered_arc_lining",
            "itemName": "Tattered Arc Lining",
            "targetId": "fabric",
            "targetName": "Fabric"
          },
          {
            "action": "use_in_workshop",
            "itemId": "fabric",
            "itemName": "Fabric",
            "workshopStation": "gear_bench",
            "workshopLevel": "1"
          }
        ]
      }
    ]
  },
  {
    "key": "tattered_clothes",
    "name": "Tattered Clothes",
    "image": "images/tattered_clothes.png",
    "hasImage": true,
    "baseCategory": "recycle",
    "rarity": "Uncommon",
    "type": "Recyclable",
    "value": 270,
    "foundIn": "Residential",
    "weightKg": null,
    "stackSize": null,
    "craftBench": null,
    "recyclesInto": {
      "fabric": 11
    },
    "salvagesInto": {
      "fabric": 5
    },
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": "Recycle",
    "reasons": [
      {
        "type": "recycle",
        "itemId": "tattered_clothes",
        "recycleComponentId": "fabric",
        "recycleComponentName": "Fabric",
        "chain": [
          {
            "action": "recycle",
            "itemId": "tattered_clothes",
            "itemName": "Tattered Clothes",
            "targetId": "fabric",
            "targetName": "Fabric"
          },
          {
            "action": "use_in_workshop",
            "itemId": "fabric",
            "itemName": "Fabric",
            "workshopStation": "gear_bench",
            "workshopLevel": "1"
          }
        ]
      }
    ]
  },
  {
    "key": "telemetry_transceiver",
    "name": "Telemetry Transceiver",
    "image": "images/telemetry_transceiver.png",
    "hasImage": true,
    "baseCategory": "recycle",
    "rarity": "Rare",
    "type": "Recyclable",
    "value": 3000,
    "foundIn": "Exodus",
    "weightKg": 1.5,
    "stackSize": 3,
    "craftBench": null,
    "recyclesInto": {
      "advanced_electrical_components": 1,
      "processor": 1
    },
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": "Recycle",
    "reasons": [
      {
        "type": "recycle",
        "itemId": "telemetry_transceiver",
        "recycleComponentId": "advanced_electrical_components",
        "recycleComponentName": "Advanced Electrical Components",
        "chain": [
          {
            "action": "recycle",
            "itemId": "telemetry_transceiver",
            "itemName": "Telemetry Transceiver",
            "targetId": "advanced_electrical_components",
            "targetName": "Advanced Electrical Components"
          },
          {
            "action": "use_in_workshop",
            "itemId": "advanced_electrical_components",
            "itemName": "Advanced Electrical Components",
            "workshopStation": "gear_bench",
            "workshopLevel": "3"
          }
        ]
      }
    ]
  },
  {
    "key": "tempest_i",
    "name": "Tempest I",
    "image": "images/tempest_i.png",
    "hasImage": false,
    "baseCategory": null,
    "rarity": "Epic",
    "type": "Assault Rifle",
    "value": 13000,
    "foundIn": null,
    "weightKg": 11,
    "stackSize": null,
    "craftBench": "weapon_bench",
    "recyclesInto": {
      "advanced_mechanical_components": 2,
      "medium_gun_parts": 2
    },
    "salvagesInto": {},
    "recipe": {
      "advanced_mechanical_components": 2,
      "medium_gun_parts": 1
    },
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "tempest_ii",
    "name": "Tempest II",
    "image": "images/tempest_ii.png",
    "hasImage": false,
    "baseCategory": null,
    "rarity": "Epic",
    "type": "Assault Rifle",
    "value": 17000,
    "foundIn": null,
    "weightKg": 11,
    "stackSize": null,
    "craftBench": "weapon_bench",
    "recyclesInto": {
      "advanced_mechanical_components": 3,
      "medium_gun_parts": 3
    },
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "tempest_iii",
    "name": "Tempest III",
    "image": "images/tempest_iii.png",
    "hasImage": false,
    "baseCategory": null,
    "rarity": "Epic",
    "type": "Assault Rifle",
    "value": 22000,
    "foundIn": null,
    "weightKg": 11,
    "stackSize": null,
    "craftBench": "weapon_bench",
    "recyclesInto": {
      "advanced_mechanical_components": 4,
      "medium_gun_parts": 4
    },
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "tempest_iv",
    "name": "Tempest IV",
    "image": "images/tempest_iv.png",
    "hasImage": false,
    "baseCategory": null,
    "rarity": "Epic",
    "type": "Assault Rifle",
    "value": 22000,
    "foundIn": null,
    "weightKg": 11,
    "stackSize": null,
    "craftBench": "weapon_bench",
    "recyclesInto": {
      "advanced_mechanical_components": 5,
      "medium_gun_parts": 4
    },
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "thermostat",
    "name": "Thermostat",
    "image": "images/thermostat.png",
    "hasImage": true,
    "baseCategory": "recycle",
    "rarity": "Rare",
    "type": "Recyclable",
    "value": 1000,
    "foundIn": "Residential",
    "weightKg": 2,
    "stackSize": 3,
    "craftBench": null,
    "recyclesInto": {
      "rubber_parts": 6,
      "sensors": 2
    },
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": "Recycle",
    "reasons": [
      {
        "type": "recycle",
        "itemId": "thermostat",
        "recycleComponentId": "rubber_parts",
        "recycleComponentName": "Rubber Parts",
        "chain": [
          {
            "action": "recycle",
            "itemId": "thermostat",
            "itemName": "Thermostat",
            "targetId": "rubber_parts",
            "targetName": "Rubber Parts"
          },
          {
            "action": "use_in_workshop",
            "itemId": "rubber_parts",
            "itemName": "Rubber Parts",
            "workshopStation": "gunsmith",
            "workshopLevel": "1"
          }
        ]
      },
      {
        "type": "recycle",
        "itemId": "thermostat",
        "recycleComponentId": "sensors",
        "recycleComponentName": "Sensors",
        "chain": [
          {
            "action": "recycle",
            "itemId": "thermostat",
            "itemName": "Thermostat",
            "targetId": "sensors",
            "targetName": "Sensors"
          }
        ]
      }
    ]
  },
  {
    "key": "tick_pod",
    "name": "Tick Pod",
    "image": "images/tick_pod.png",
    "hasImage": true,
    "baseCategory": "keep",
    "rarity": "Uncommon",
    "type": "Recyclable",
    "value": 640,
    "foundIn": "ARC",
    "weightKg": 0.5,
    "stackSize": 3,
    "craftBench": null,
    "recyclesInto": {
      "arc_alloy": 1,
      "metal_parts": 1
    },
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {
      "medical_lab": [
        2
      ]
    },
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": "Keep • Workstations: Medical Lab T2",
    "reasons": [
      {
        "type": "workshop",
        "itemId": "tick_pod",
        "workshopStation": "medical_lab",
        "workshopLevel": "2"
      }
    ]
  },
  {
    "key": "toaster",
    "name": "Toaster",
    "image": "images/toaster.png",
    "hasImage": true,
    "baseCategory": "keep",
    "rarity": "Rare",
    "type": "Recyclable",
    "value": 1000,
    "foundIn": "Residential",
    "weightKg": 2,
    "stackSize": 3,
    "craftBench": null,
    "recyclesInto": {
      "plastic_parts": 5,
      "wires": 3
    },
    "salvagesInto": {
      "wires": 3
    },
    "recipe": {},
    "quest": false,
    "workstations": {
      "refiner": [
        2
      ]
    },
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": "Keep • Workstations: Refiner T2",
    "reasons": [
      {
        "type": "workshop",
        "itemId": "toaster",
        "workshopStation": "refiner",
        "workshopLevel": "2"
      }
    ]
  },
  {
    "key": "torn_blanket",
    "name": "Torn Blanket",
    "image": "images/torn_blanket.png",
    "hasImage": true,
    "baseCategory": "recycle",
    "rarity": "Rare",
    "type": "Recyclable",
    "value": 640,
    "foundIn": "Residential, Medical",
    "weightKg": 2,
    "stackSize": 3,
    "craftBench": null,
    "recyclesInto": {
      "fabric": 12
    },
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": "Recycle",
    "reasons": [
      {
        "type": "recycle",
        "itemId": "torn_blanket",
        "recycleComponentId": "fabric",
        "recycleComponentName": "Fabric",
        "chain": [
          {
            "action": "recycle",
            "itemId": "torn_blanket",
            "itemName": "Torn Blanket",
            "targetId": "fabric",
            "targetName": "Fabric"
          },
          {
            "action": "use_in_workshop",
            "itemId": "fabric",
            "itemName": "Fabric",
            "workshopStation": "gear_bench",
            "workshopLevel": "1"
          }
        ]
      }
    ]
  },
  {
    "key": "torn_book",
    "name": "Torn Book",
    "image": "images/torn_book.png",
    "hasImage": true,
    "baseCategory": "sell",
    "rarity": "Common",
    "type": "Trinket",
    "value": 1000,
    "foundIn": "Residential, Old World",
    "weightKg": 0.3,
    "stackSize": 5,
    "craftBench": null,
    "recyclesInto": {},
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": "Sell",
    "reasons": []
  },
  {
    "key": "torrente_blueprint",
    "name": "Torrente Blueprint",
    "image": "images/torrente_blueprint.png",
    "hasImage": true,
    "baseCategory": null,
    "rarity": "Legendary",
    "type": "Blueprint",
    "value": 5000,
    "foundIn": null,
    "weightKg": 0,
    "stackSize": null,
    "craftBench": null,
    "recyclesInto": {},
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "torrente_i",
    "name": "Torrente I",
    "image": "images/torrente_i.png",
    "hasImage": false,
    "baseCategory": null,
    "rarity": "Rare",
    "type": "LMG",
    "value": 7000,
    "foundIn": null,
    "weightKg": 12,
    "stackSize": null,
    "craftBench": "weapon_bench",
    "recyclesInto": {
      "advanced_mechanical_components": 1,
      "medium_gun_parts": 2
    },
    "salvagesInto": {},
    "recipe": {
      "advanced_mechanical_components": 2,
      "medium_gun_parts": 3,
      "steel_spring": 6
    },
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "torrente_ii",
    "name": "Torrente II",
    "image": "images/torrente_ii.png",
    "hasImage": false,
    "baseCategory": null,
    "rarity": "Rare",
    "type": "LMG",
    "value": 10000,
    "foundIn": null,
    "weightKg": 12,
    "stackSize": null,
    "craftBench": null,
    "recyclesInto": {
      "advanced_mechanical_components": 2,
      "medium_gun_parts": 2
    },
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "torrente_iii",
    "name": "Torrente III",
    "image": "images/torrente_iii.png",
    "hasImage": false,
    "baseCategory": null,
    "rarity": "Rare",
    "type": "LMG",
    "value": 13000,
    "foundIn": null,
    "weightKg": 12,
    "stackSize": null,
    "craftBench": null,
    "recyclesInto": {
      "advanced_mechanical_components": 2,
      "medium_gun_parts": 3
    },
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "torrente_iv",
    "name": "Torrente IV",
    "image": "images/torrente_iv.png",
    "hasImage": false,
    "baseCategory": null,
    "rarity": "Rare",
    "type": "LMG",
    "value": 16000,
    "foundIn": null,
    "weightKg": 12,
    "stackSize": null,
    "craftBench": null,
    "recyclesInto": {
      "advanced_mechanical_components": 3,
      "medium_gun_parts": 3
    },
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "trailblazer",
    "name": "Trailblazer",
    "image": "images/trailblazer.png",
    "hasImage": false,
    "baseCategory": null,
    "rarity": "Rare",
    "type": "Quick Use",
    "value": 1600,
    "foundIn": null,
    "weightKg": 1,
    "stackSize": 3,
    "craftBench": null,
    "recyclesInto": {
      "crude_explosives": 2
    },
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "trigger_nade",
    "name": "Trigger 'Nade",
    "image": "images/trigger_nade.png",
    "hasImage": true,
    "baseCategory": null,
    "rarity": "Rare",
    "type": "Quick Use",
    "value": 1000,
    "foundIn": null,
    "weightKg": 0.4,
    "stackSize": 3,
    "craftBench": "explosives_bench",
    "recyclesInto": {
      "chemicals": 1,
      "processor": 1
    },
    "salvagesInto": {},
    "recipe": {
      "crude_explosives": 2,
      "processor": 1
    },
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "trigger_nade_blueprint",
    "name": "Trigger Nade Blueprint",
    "image": "images/trigger_nade_blueprint.png",
    "hasImage": true,
    "baseCategory": null,
    "rarity": "Legendary",
    "type": "Blueprint",
    "value": 5000,
    "foundIn": null,
    "weightKg": 0,
    "stackSize": null,
    "craftBench": null,
    "recyclesInto": {},
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "turbo_pump",
    "name": "Turbo Pump",
    "image": "images/turbo_pump.png",
    "hasImage": true,
    "baseCategory": "recycle",
    "rarity": "Rare",
    "type": "Recyclable",
    "value": 2000,
    "foundIn": "Exodus",
    "weightKg": 3,
    "stackSize": 3,
    "craftBench": null,
    "recyclesInto": {
      "mechanical_components": 1,
      "oil": 3
    },
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": "Recycle",
    "reasons": [
      {
        "type": "recycle",
        "itemId": "turbo_pump",
        "recycleComponentId": "mechanical_components",
        "recycleComponentName": "Mechanical Components",
        "chain": [
          {
            "action": "recycle",
            "itemId": "turbo_pump",
            "itemName": "Turbo Pump",
            "targetId": "mechanical_components",
            "targetName": "Mechanical Components"
          },
          {
            "action": "use_in_workshop",
            "itemId": "mechanical_components",
            "itemName": "Mechanical Components",
            "workshopStation": "gunsmith",
            "workshopLevel": "2"
          }
        ]
      }
    ]
  },
  {
    "key": "unusable_weapon",
    "name": "Unusable Weapon",
    "image": "images/unusable_weapon.png",
    "hasImage": true,
    "baseCategory": "recycle",
    "rarity": "Rare",
    "type": "Recyclable",
    "value": 2000,
    "foundIn": "Security",
    "weightKg": 3,
    "stackSize": null,
    "craftBench": null,
    "recyclesInto": {
      "metal_parts": 4,
      "simple_gun_parts": 5
    },
    "salvagesInto": {
      "simple_gun_parts": 3
    },
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": "Recycle",
    "reasons": [
      {
        "type": "recycle",
        "itemId": "unusable_weapon",
        "recycleComponentId": "metal_parts",
        "recycleComponentName": "Metal Parts",
        "chain": [
          {
            "action": "recycle",
            "itemId": "unusable_weapon",
            "itemName": "Unusable Weapon",
            "targetId": "metal_parts",
            "targetName": "Metal Parts"
          },
          {
            "action": "use_in_workshop",
            "itemId": "metal_parts",
            "itemName": "Metal Parts",
            "workshopStation": "gunsmith",
            "workshopLevel": "1"
          }
        ]
      }
    ]
  },
  {
    "key": "vase",
    "name": "Vase",
    "image": "images/vase.png",
    "hasImage": true,
    "baseCategory": "sell",
    "rarity": "Rare",
    "type": "Trinket",
    "value": 3000,
    "foundIn": "Old World, Residential, Commercial",
    "weightKg": 0.3,
    "stackSize": 3,
    "craftBench": null,
    "recyclesInto": {},
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": "Sell",
    "reasons": []
  },
  {
    "key": "venator_blueprint",
    "name": "Venator Blueprint",
    "image": "images/venator_blueprint.png",
    "hasImage": false,
    "baseCategory": null,
    "rarity": "Legendary",
    "type": "Blueprint",
    "value": 5000,
    "foundIn": null,
    "weightKg": null,
    "stackSize": null,
    "craftBench": null,
    "recyclesInto": {},
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "venator_i",
    "name": "Venator I",
    "image": "images/venator_i.png",
    "hasImage": false,
    "baseCategory": null,
    "rarity": "Rare",
    "type": "Pistol",
    "value": 7000,
    "foundIn": null,
    "weightKg": 5,
    "stackSize": null,
    "craftBench": "weapon_bench",
    "recyclesInto": {
      "advanced_mechanical_components": 1,
      "medium_gun_parts": 2
    },
    "salvagesInto": {},
    "recipe": {
      "advanced_mechanical_components": 2,
      "medium_gun_parts": 3,
      "magnet": 5
    },
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "venator_ii",
    "name": "Venator II",
    "image": "images/venator_ii.png",
    "hasImage": false,
    "baseCategory": null,
    "rarity": "Rare",
    "type": "Pistol",
    "value": 10000,
    "foundIn": null,
    "weightKg": 5,
    "stackSize": null,
    "craftBench": "weapon_bench",
    "recyclesInto": {
      "advanced_mechanical_components": 2,
      "medium_gun_parts": 2
    },
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "venator_iii",
    "name": "Venator III",
    "image": "images/venator_iii.png",
    "hasImage": false,
    "baseCategory": null,
    "rarity": "Rare",
    "type": "Pistol",
    "value": 13000,
    "foundIn": null,
    "weightKg": 5,
    "stackSize": null,
    "craftBench": "weapon_bench",
    "recyclesInto": {
      "advanced_mechanical_components": 2,
      "medium_gun_parts": 3
    },
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "venator_iv",
    "name": "Venator IV",
    "image": "images/venator_iv.png",
    "hasImage": false,
    "baseCategory": null,
    "rarity": "Rare",
    "type": "Pistol",
    "value": 17000,
    "foundIn": null,
    "weightKg": 5,
    "stackSize": null,
    "craftBench": "weapon_bench",
    "recyclesInto": {
      "advanced_mechanical_components": 3,
      "medium_gun_parts": 3
    },
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "vertical_grip_i",
    "name": "Vertical Grip I",
    "image": "images/vertical_grip_i.png",
    "hasImage": true,
    "baseCategory": null,
    "rarity": "Common",
    "type": "Modification",
    "value": 640,
    "foundIn": null,
    "weightKg": 0.25,
    "stackSize": null,
    "craftBench": "weapon_bench",
    "recyclesInto": {},
    "salvagesInto": {},
    "recipe": {
      "plastic_parts": 6,
      "duct_tape": 1
    },
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "vertical_grip_ii",
    "name": "Vertical Grip II",
    "image": "images/vertical_grip_ii.png",
    "hasImage": true,
    "baseCategory": null,
    "rarity": "Uncommon",
    "type": "Modification",
    "value": 2000,
    "foundIn": null,
    "weightKg": 0.5,
    "stackSize": null,
    "craftBench": null,
    "recyclesInto": {
      "mechanical_components": 1,
      "duct_tape": 1
    },
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "vertical_grip_iii",
    "name": "Vertical Grip III",
    "image": "images/vertical_grip_iii.png",
    "hasImage": false,
    "baseCategory": null,
    "rarity": "Rare",
    "type": "Modification",
    "value": 5000,
    "foundIn": null,
    "weightKg": 0.75,
    "stackSize": null,
    "craftBench": "weapon_bench",
    "recyclesInto": {},
    "salvagesInto": {},
    "recipe": {
      "mod_components": 2,
      "duct_tape": 5
    },
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "vertical_grip_iii_blueprint",
    "name": "Vertical Grip III Blueprint",
    "image": "images/vertical_grip_iii_blueprint.png",
    "hasImage": false,
    "baseCategory": null,
    "rarity": "Legendary",
    "type": "Blueprint",
    "value": 5000,
    "foundIn": null,
    "weightKg": 0,
    "stackSize": null,
    "craftBench": null,
    "recyclesInto": {},
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "very_comfortable_pillow",
    "name": "Very Comfortable Pillow",
    "image": "images/very_comfortable_pillow.png",
    "hasImage": true,
    "baseCategory": "keep",
    "rarity": "Uncommon",
    "type": "Trinket",
    "value": 2000,
    "foundIn": "Residential, Commercial",
    "weightKg": 0.3,
    "stackSize": 3,
    "craftBench": null,
    "recyclesInto": {},
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {
      "scrappy": [
        5
      ]
    },
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": "Keep • Workstations: Scrappy T5",
    "reasons": [
      {
        "type": "workshop",
        "itemId": "very_comfortable_pillow",
        "workshopStation": "scrappy",
        "workshopLevel": "5"
      }
    ]
  },
  {
    "key": "vita_shot",
    "name": "Vita Shot",
    "image": "images/vita_shot.png",
    "hasImage": true,
    "baseCategory": null,
    "rarity": "Rare",
    "type": "Quick Use",
    "value": 2000,
    "foundIn": null,
    "weightKg": 0.4,
    "stackSize": 3,
    "craftBench": null,
    "recyclesInto": {
      "chemicals": 4,
      "syringe": 1
    },
    "salvagesInto": {},
    "recipe": {
      "antiseptic": 1,
      "syringe": 1
    },
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "vita_shot_blueprint",
    "name": "Vita Shot Blueprint",
    "image": "images/vita_shot_blueprint.png",
    "hasImage": false,
    "baseCategory": null,
    "rarity": "Legendary",
    "type": "Blueprint",
    "value": 5000,
    "foundIn": null,
    "weightKg": 0,
    "stackSize": null,
    "craftBench": null,
    "recyclesInto": {},
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "vita_spray",
    "name": "Vita Spray",
    "image": "images/vita_spray.png",
    "hasImage": true,
    "baseCategory": null,
    "rarity": "Epic",
    "type": "Quick Use",
    "value": 3000,
    "foundIn": null,
    "weightKg": 1,
    "stackSize": 1,
    "craftBench": "med_station",
    "recyclesInto": {
      "antiseptic": 1,
      "canister": 2
    },
    "salvagesInto": {
      "antiseptic": 1
    },
    "recipe": {
      "antiseptic": 3,
      "canister": 1
    },
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "vita_spray_blueprint",
    "name": "Vita Spray Blueprint",
    "image": "images/vita_spray_blueprint.png",
    "hasImage": false,
    "baseCategory": null,
    "rarity": "Legendary",
    "type": "Blueprint",
    "value": 5000,
    "foundIn": null,
    "weightKg": null,
    "stackSize": null,
    "craftBench": null,
    "recyclesInto": {},
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "volcanic_rock",
    "name": "Volcanic Rock",
    "image": "images/volcanic_rock.png",
    "hasImage": true,
    "baseCategory": null,
    "rarity": "Common",
    "type": "Misc",
    "value": 270,
    "foundIn": "Nature",
    "weightKg": 0.5,
    "stackSize": 5,
    "craftBench": null,
    "recyclesInto": {},
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "voltage_converter",
    "name": "Voltage Converter",
    "image": "images/voltage_converter.png",
    "hasImage": true,
    "baseCategory": "recycle",
    "rarity": "Rare",
    "type": "Topside Material",
    "value": 500,
    "foundIn": "Electrical",
    "weightKg": 0.3,
    "stackSize": 5,
    "craftBench": null,
    "recyclesInto": {
      "wires": 1,
      "rubber_parts": 1
    },
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": "Recycle",
    "reasons": [
      {
        "type": "recycle",
        "itemId": "voltage_converter",
        "recycleComponentId": "wires",
        "recycleComponentName": "Wires",
        "chain": [
          {
            "action": "recycle",
            "itemId": "voltage_converter",
            "itemName": "Voltage Converter",
            "targetId": "wires",
            "targetName": "Wires"
          },
          {
            "action": "use_in_quest",
            "itemId": "wires",
            "itemName": "Wires",
            "questId": "ss10y",
            "questName": "After Rain Comes"
          }
        ]
      },
      {
        "type": "recycle",
        "itemId": "voltage_converter",
        "recycleComponentId": "rubber_parts",
        "recycleComponentName": "Rubber Parts",
        "chain": [
          {
            "action": "recycle",
            "itemId": "voltage_converter",
            "itemName": "Voltage Converter",
            "targetId": "rubber_parts",
            "targetName": "Rubber Parts"
          },
          {
            "action": "use_in_workshop",
            "itemId": "rubber_parts",
            "itemName": "Rubber Parts",
            "workshopStation": "gunsmith",
            "workshopLevel": "1"
          }
        ]
      }
    ]
  },
  {
    "key": "vulcano_i",
    "name": "Vulcano I",
    "image": "images/vulcano_i.png",
    "hasImage": false,
    "baseCategory": null,
    "rarity": "Epic",
    "type": "Shotgun",
    "value": 10000,
    "foundIn": null,
    "weightKg": 8,
    "stackSize": null,
    "craftBench": "weapon_bench",
    "recyclesInto": {
      "advanced_mechanical_components": 2,
      "heavy_gun_parts": 2
    },
    "salvagesInto": {},
    "recipe": {
      "magnetic_accelerator": 1,
      "heavy_gun_parts": 3,
      "exodus_modules": 1
    },
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "vulcano_ii",
    "name": "Vulcano II",
    "image": "images/vulcano_ii.png",
    "hasImage": false,
    "baseCategory": null,
    "rarity": "Epic",
    "type": "Shotgun",
    "value": 13000,
    "foundIn": null,
    "weightKg": 9.25,
    "stackSize": 1,
    "craftBench": "weapon_bench",
    "recyclesInto": {
      "advanced_mechanical_components": 2,
      "heavy_gun_parts": 3
    },
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "vulcano_iii",
    "name": "Vulcano III",
    "image": "images/vulcano_iii.png",
    "hasImage": false,
    "baseCategory": null,
    "rarity": "Epic",
    "type": "Shotgun",
    "value": 17000,
    "foundIn": null,
    "weightKg": 8,
    "stackSize": null,
    "craftBench": "weapon_bench",
    "recyclesInto": {
      "advanced_mechanical_components": 3,
      "heavy_gun_parts": 4
    },
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "vulcano_iv",
    "name": "Vulcano IV",
    "image": "images/vulcano_iv.png",
    "hasImage": false,
    "baseCategory": null,
    "rarity": "Epic",
    "type": "Shotgun",
    "value": 22000,
    "foundIn": null,
    "weightKg": 8,
    "stackSize": null,
    "craftBench": "weapon_bench",
    "recyclesInto": {
      "advanced_mechanical_components": 4,
      "heavy_gun_parts": 5
    },
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "wasp_driver",
    "name": "Wasp Driver",
    "image": "images/wasp_driver.png",
    "hasImage": true,
    "baseCategory": "keep",
    "rarity": "Rare",
    "type": "Recyclable",
    "value": 1000,
    "foundIn": "ARC",
    "weightKg": 0.6,
    "stackSize": 3,
    "craftBench": null,
    "recyclesInto": {
      "arc_alloy": 1,
      "electrical_components": 1
    },
    "salvagesInto": {
      "electrical_components": 1
    },
    "recipe": {},
    "quest": true,
    "workstations": {
      "gunsmith": [
        2
      ]
    },
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": "Keep • Quest item • Workstations: Gunsmith T2",
    "reasons": [
      {
        "type": "quest",
        "itemId": "wasp_driver",
        "questId": "ss9",
        "questName": "The Trifecta"
      },
      {
        "type": "workshop",
        "itemId": "wasp_driver",
        "workshopStation": "gunsmith",
        "workshopLevel": "2"
      }
    ]
  },
  {
    "key": "water_filter",
    "name": "Water Filter",
    "image": "images/water_filter.png",
    "hasImage": true,
    "baseCategory": "recycle",
    "rarity": "Rare",
    "type": "Recyclable",
    "value": 1000,
    "foundIn": "Industrial",
    "weightKg": 2,
    "stackSize": 3,
    "craftBench": null,
    "recyclesInto": {
      "rubber_parts": 2,
      "canister": 3
    },
    "salvagesInto": {
      "canister": 2
    },
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": "Recycle",
    "reasons": [
      {
        "type": "recycle",
        "itemId": "water_filter",
        "recycleComponentId": "rubber_parts",
        "recycleComponentName": "Rubber Parts",
        "chain": [
          {
            "action": "recycle",
            "itemId": "water_filter",
            "itemName": "Water Filter",
            "targetId": "rubber_parts",
            "targetName": "Rubber Parts"
          },
          {
            "action": "use_in_workshop",
            "itemId": "rubber_parts",
            "itemName": "Rubber Parts",
            "workshopStation": "gunsmith",
            "workshopLevel": "1"
          }
        ]
      }
    ]
  },
  {
    "key": "water_pump",
    "name": "Water Pump",
    "image": "images/water_pump.png",
    "hasImage": true,
    "baseCategory": "keep",
    "rarity": "Rare",
    "type": "Recyclable",
    "value": 1000,
    "foundIn": "Mechanical, Industrial",
    "weightKg": 2,
    "stackSize": 3,
    "craftBench": null,
    "recyclesInto": {
      "metal_parts": 4,
      "oil": 2
    },
    "salvagesInto": {
      "oil": 2
    },
    "recipe": {},
    "quest": true,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": "Keep • Quest item",
    "reasons": [
      {
        "type": "quest",
        "itemId": "water_pump",
        "questId": "ss10q",
        "questName": "Unexpected Initiative"
      }
    ]
  },
  {
    "key": "wires",
    "name": "Wires",
    "image": "images/wires.png",
    "hasImage": true,
    "baseCategory": "keep",
    "rarity": "Uncommon",
    "type": "Topside Material",
    "value": 200,
    "foundIn": "Electrical, Technological",
    "weightKg": 0.25,
    "stackSize": 15,
    "craftBench": null,
    "recyclesInto": {
      "rubber_parts": 2
    },
    "salvagesInto": {
      "rubber_parts": 1
    },
    "recipe": {},
    "quest": true,
    "workstations": {},
    "hasExpedition": true,
    "expeditionPhases": [
      2
    ],
    "reasonSummary": "Keep • Quest item • Expedition project (phase 2)",
    "reasons": [
      {
        "type": "quest",
        "itemId": "wires",
        "questId": "ss10y",
        "questName": "After Rain Comes"
      },
      {
        "type": "quest",
        "itemId": "wires",
        "questId": "ss3",
        "questName": "Trash Into Treasure"
      },
      {
        "type": "project",
        "itemId": "wires",
        "projectId": "expedition_project",
        "projectName": "Expedition Project",
        "projectPhase": 2
      }
    ]
  },
  {
    "key": "wolfpack",
    "name": "Wolfpack",
    "image": "images/wolfpack.png",
    "hasImage": true,
    "baseCategory": null,
    "rarity": "Epic",
    "type": "Quick Use",
    "value": 5000,
    "foundIn": null,
    "weightKg": 1,
    "stackSize": 1,
    "craftBench": "explosives_bench",
    "recyclesInto": {
      "crude_explosives": 1,
      "arc_motion_core": 1
    },
    "salvagesInto": {},
    "recipe": {
      "explosive_compound": 3,
      "arc_motion_core": 2
    },
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "wolfpack_blueprint",
    "name": "Wolfpack Blueprint",
    "image": "images/wolfpack_blueprint.png",
    "hasImage": true,
    "baseCategory": null,
    "rarity": "Legendary",
    "type": "Blueprint",
    "value": 5000,
    "foundIn": null,
    "weightKg": 0,
    "stackSize": null,
    "craftBench": null,
    "recyclesInto": {},
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "yellow_light_stick",
    "name": "Yellow Light Stick",
    "image": "images/yellow_light_stick.png",
    "hasImage": true,
    "baseCategory": null,
    "rarity": "Common",
    "type": "Quick Use",
    "value": 150,
    "foundIn": null,
    "weightKg": 0.15,
    "stackSize": 5,
    "craftBench": null,
    "recyclesInto": {
      "chemicals": 1
    },
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "yellow_light_stick_blueprint",
    "name": "Yellow Light Stick Blueprint",
    "image": "images/yellow_light_stick_blueprint.png",
    "hasImage": false,
    "baseCategory": null,
    "rarity": "Legendary",
    "type": "Blueprint",
    "value": 5000,
    "foundIn": null,
    "weightKg": 0,
    "stackSize": 1,
    "craftBench": null,
    "recyclesInto": {},
    "salvagesInto": {},
    "recipe": {},
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  },
  {
    "key": "zipline",
    "name": "Zipline",
    "image": "images/zipline.png",
    "hasImage": true,
    "baseCategory": null,
    "rarity": "Rare",
    "type": "Quick Use",
    "value": 1000,
    "foundIn": null,
    "weightKg": 0.4,
    "stackSize": null,
    "craftBench": "utility_bench",
    "recyclesInto": {
      "rope": 1,
      "metal_parts": 1
    },
    "salvagesInto": {},
    "recipe": {
      "rope": 1,
      "mechanical_components": 1
    },
    "quest": false,
    "workstations": {},
    "hasExpedition": false,
    "expeditionPhases": [],
    "reasonSummary": null,
    "reasons": []
  }
];

if (typeof window !== 'undefined') {
  window.ICON_DATA = ICON_DATA;
}
