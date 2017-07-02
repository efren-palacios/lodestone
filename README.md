# lodestone
api wrapper for lodestone

![npm](https://img.shields.io/npm/v/lodestonejs.svg)
[![GitHub license](https://img.shields.io/badge/license-AGPL-blue.svg)](https://raw.githubusercontent.com/orctamer/lodestone/master/LICENSE)
![downloads](https://img.shields.io/github/downloads/lodestone/lodestone/total.svg)
[![GitHub stars](https://img.shields.io/github/stars/orctamer/lodestone.svg?style=social&label=Star)](https://github.com/orctamer/lodestone/stargazers)


A Lodestone API for grabbing character info

## Installing
Install via [npm](https://npmjs.com)

    $ npm install --save lodestonejs
 
## Running / Building
To run the example:

    $ npm install
    $ node test.js
    
## API / Usage

Provide the character id to return the data

```javascript
const ls = require('lodestonejs')

ls('17035303', function (err, data) {
  console.log(data || err)
})
```

That will return an object similar to this:
```
{
  "id": "17035303",
  "name": "Oria Terik",
  "title": "The Redeemed",
  "current_job": {
    "name": "Scholar",
    "url": "http://img.finalfantasyxiv.com/lds/h/7/WdFey0jyHn9Nnt1Qnm-J3yTg5s.png",
    "level": 59
  },
  "world": "Gilgamesh",
  "avatar": "http://img2.finalfantasyxiv.com/f/932a2145dccced31b5da747e853f9968_b937560c841465f7c4bc8eb47ea7948afc0_96x96.jpg?1499000963",
  "portrait": "http://img2.finalfantasyxiv.com/f/932a2145dccced31b5da747e853f9968_b937560c841465f7c4bc8eb47ea7948afl0_640x873.jpg?1499000963",
  "race": "Au Ra",
  "clan": "Xaela",
  "gender": "female",
  "nameday": "4th Sun of the 2nd Astral Moon",
  "guardian": {
    "icon": "http://img.finalfantasyxiv.com/lds/h/8/8KYIoexgv9Jclf6-pWS10b-FxQ.png",
    "name": "Nymeia, the Spinner"
  },
  "city": {
    "icon": "http://img.finalfantasyxiv.com/lds/h/u/ZHuDKgNULSbEA_VTXdjeA9MlEs.png",
    "name": "Gridania"
  },
  "grand_company": {
    "icon": "http://img.finalfantasyxiv.com/lds/h/C/XTsRaZ6wYHAF_v0_tCXmsUFxX4.png",
    "name": "Immortal Flames",
    "rank": "Flame Corporal"
  },
  "classjob": [
    {
      "name": "Gladiator",
      "url": "http://img.finalfantasyxiv.com/lds/h/U/F5JzG9RPIKFSogtaKNBk455aYA.png",
      "level": "1",
      "exp": {
        "current": "0",
        "max": "300"
      }
    },
    {
      "name": "Marauder",
      "url": "http://img.finalfantasyxiv.com/lds/h/N/St9rjDJB3xNKGYg-vwooZ4j6CM.png",
      "level": "1",
      "exp": {
        "current": "0",
        "max": "300"
      }
    },
    {
      "name": "Dark Knight",
      "url": "http://img.finalfantasyxiv.com/lds/h/l/5CZEvDOMYMyVn2td9LZigsgw9s.png",
      "level": "30",
      "exp": {
        "current": "0",
        "max": "162500"
      }
    },
    {
      "name": "Pugilist",
      "url": "http://img.finalfantasyxiv.com/lds/h/V/iW7IBKQ7oglB9jmbn6LwdZXkWw.png",
      "level": "1",
      "exp": {
        "current": "0",
        "max": "300"
      }
    },
    {
      "name": "Lancer",
      "url": "http://img.finalfantasyxiv.com/lds/h/k/tYTpoSwFLuGYGDJMff8GEFuDQs.png",
      "level": "1",
      "exp": {
        "current": "0",
        "max": "300"
      }
    },
    {
      "name": "Rogue",
      "url": "http://img.finalfantasyxiv.com/lds/h/y/wdwVVcptybfgSruoh8R344y_GA.png",
      "level": "8",
      "exp": {
        "current": "5672",
        "max": "7350"
      }
    },
    {
      "name": "Samurai",
      "url": "http://img.finalfantasyxiv.com/lds/h/m/KndG72XtCFwaq1I1iqwcmO_0zc.png",
      "level": "50",
      "exp": {
        "current": "1752",
        "max": "864000"
      }
    },
    {
      "name": "Conjurer",
      "url": "http://img.finalfantasyxiv.com/lds/h/s/gl62VOTBJrm7D_BmAZITngUEM8.png",
      "level": "8",
      "exp": {
        "current": "6014",
        "max": "7350"
      }
    },
    {
      "name": "Scholar",
      "url": "http://img.finalfantasyxiv.com/lds/h/7/WdFey0jyHn9Nnt1Qnm-J3yTg5s.png",
      "level": "59",
      "exp": {
        "current": "1063279",
        "max": "3888000"
      }
    },
    {
      "name": "Astrologian",
      "url": "http://img.finalfantasyxiv.com/lds/h/1/erCgjnMSiab4LiHpWxVc-tXAqk.png",
      "level": "33",
      "exp": {
        "current": "43315",
        "max": "203500"
      }
    },
    {
      "name": "Archer",
      "url": "http://img.finalfantasyxiv.com/lds/h/Q/ZpqEJWYHj9SvHGuV9cIyRNnIkk.png",
      "level": "16",
      "exp": {
        "current": "13679",
        "max": "35400"
      }
    },
    {
      "name": "Machinist",
      "url": "http://img.finalfantasyxiv.com/lds/h/E/vmtbIlf6Uv8rVp2YFCWA25X0dc.png",
      "level": "30",
      "exp": {
        "current": "1680",
        "max": "162500"
      }
    },
    {
      "name": "Thaumaturge",
      "url": "http://img.finalfantasyxiv.com/lds/h/4/IM3PoP6p06GqEyReygdhZNh7fU.png",
      "level": "1",
      "exp": {
        "current": "0",
        "max": "300"
      }
    },
    {
      "name": "Summoner",
      "url": "http://img.finalfantasyxiv.com/lds/h/h/4ghjpyyuNelzw1Bl0sM_PBA_FE.png",
      "level": "59",
      "exp": {
        "current": "1063279",
        "max": "3888000"
      }
    },
    {
      "name": "Red Mage",
      "url": "http://img.finalfantasyxiv.com/lds/h/q/s3MlLUKmRAHy0pH57PnFStHmIw.png",
      "level": "50",
      "exp": {
        "current": "687436",
        "max": "864000"
      }
    },
    {
      "name": "Carpenter",
      "url": "http://img.finalfantasyxiv.com/lds/h/v/YCN6F-xiXf03Ts3pXoBihh2OBk.png",
      "level": "14",
      "exp": {
        "current": "1243",
        "max": "26400"
      }
    },
    {
      "name": "Blacksmith",
      "url": "http://img.finalfantasyxiv.com/lds/h/5/EEHVV5cIPkOZ6v5ALaoN5XSVRU.png",
      "level": "11",
      "exp": {
        "current": "32",
        "max": "15600"
      }
    },
    {
      "name": "Armorer",
      "url": "http://img.finalfantasyxiv.com/lds/h/G/Rq5wcK3IPEaAB8N-T9l6tBPxCY.png",
      "level": "13",
      "exp": {
        "current": "5457",
        "max": "23700"
      }
    },
    {
      "name": "Goldsmith",
      "url": "http://img.finalfantasyxiv.com/lds/h/L/LbEjgw0cwO_2gQSmhta9z03pjM.png",
      "level": "15",
      "exp": {
        "current": "15309",
        "max": "30500"
      }
    },
    {
      "name": "Leatherworker",
      "url": "http://img.finalfantasyxiv.com/lds/h/b/ACAcQe3hWFxbWRVPqxKj_MzDiY.png",
      "level": "12",
      "exp": {
        "current": "5572",
        "max": "19600"
      }
    },
    {
      "name": "Weaver",
      "url": "http://img.finalfantasyxiv.com/lds/h/X/E69jrsOMGFvFpCX87F5wqgT_Vo.png",
      "level": "14",
      "exp": {
        "current": "14330",
        "max": "26400"
      }
    },
    {
      "name": "Alchemist",
      "url": "http://img.finalfantasyxiv.com/lds/h/C/bBVQ9IFeXqjEdpuIxmKvSkqalE.png",
      "level": "16",
      "exp": {
        "current": "8735",
        "max": "35400"
      }
    },
    {
      "name": "Culinarian",
      "url": "http://img.finalfantasyxiv.com/lds/h/m/1kMI2v_KEVgo30RFvdFCyySkFo.png",
      "level": "17",
      "exp": {
        "current": "10999",
        "max": "40500"
      }
    },
    {
      "name": "Miner",
      "url": "http://img.finalfantasyxiv.com/lds/h/A/aM2Dd6Vo4HW_UGasK7tLuZ6fu4.png",
      "level": "25",
      "exp": {
        "current": "79010",
        "max": "95200"
      }
    },
    {
      "name": "Botanist",
      "url": "http://img.finalfantasyxiv.com/lds/h/I/jGRnjIlwWridqM-mIPNew6bhHM.png",
      "level": "28",
      "exp": {
        "current": "129454",
        "max": "140200"
      }
    },
    {
      "name": "Fisher",
      "url": "http://img.finalfantasyxiv.com/lds/h/x/B4Azydbn7Prubxt7OL9p1LZXZ0.png",
      "level": "35",
      "exp": {
        "current": "169975",
        "max": "232320"
      }
    }
  ],
  "stats": {
    "attributes": {
      "strength": "198",
      "dexterity": "217",
      "vitality": "507",
      "intelligence": "251",
      "mind": "681"
    },
    "offensive": {
      "crit_hit_rate": "468",
      "determination": "312",
      "direct_hit_rate": "352"
    },
    "defensive": {
      "defense": "343",
      "magic_defense": "666"
    },
    "physical": {
      "attack_power": "198",
      "skill_speed": "352"
    },
    "mental": {
      "attack_magic_potency": "681",
      "healing_magic_potency": "681",
      "spell_speed": "495"
    },
    "role": {
      "tenacity": "352",
      "piety": "408"
    },
    "hp": "8387",
    "mp": "10578",
    "tp": "1000"
  },
  "mounts": [
    {
      "name": "Company Chocobo",
      "url": "http://img.finalfantasyxiv.com/lds/pc/global/images/itemicon/49/4911a5bb2afb40de2a737cac98ecbe734698d26d.png?4.0"
    },
    {
      "name": "Black Chocobo",
      "url": "http://img.finalfantasyxiv.com/lds/pc/global/images/itemicon/51/51920328db4361a6e01ea27ea472ee422259c6a8.png?4.0"
    },
    {
      "name": "Magitek Armor",
      "url": "http://img.finalfantasyxiv.com/lds/pc/global/images/itemicon/1c/1ce3841890b1d22b689545ccba1c9572fe89c230.png?4.0"
    },
    {
      "name": "Manacutter",
      "url": "http://img.finalfantasyxiv.com/lds/pc/global/images/itemicon/98/9851d80779006c99599dc0ba368a2f8fb573f8d7.png?4.0"
    }
  ],
  "minions": [
    {
      "name": "Princely Hatchling",
      "url": "http://img.finalfantasyxiv.com/lds/pc/global/images/itemicon/61/6153430c6732bf57946ea72521bdb5e8b56cecc9.png?4.0"
    },
    {
      "name": "Midgardsormr",
      "url": "http://img.finalfantasyxiv.com/lds/pc/global/images/itemicon/23/235672f770c82139b3b6232fab939f1cac1ebf2b.png?4.0"
    },
    {
      "name": "Wide-eyed Fawn",
      "url": "http://img.finalfantasyxiv.com/lds/pc/global/images/itemicon/9c/9c0f9cc83a45fc13c3adf8a96edbfc0189f8ca35.png?4.0"
    },
    {
      "name": "Wolf Pup",
      "url": "http://img.finalfantasyxiv.com/lds/pc/global/images/itemicon/ac/ac017d85b3abe6051f72496641eb27db12b905ce.png?4.0"
    },
    {
      "name": "Coeurl Kitten",
      "url": "http://img.finalfantasyxiv.com/lds/pc/global/images/itemicon/f6/f694ebbe1332796e01c8c34475e8c563f7cda290.png?4.0"
    },
    {
      "name": "Dust Bunny",
      "url": "http://img.finalfantasyxiv.com/lds/pc/global/images/itemicon/24/241475f4ce6ad0d8e6e3cc0a194a2f2aac9e2c1d.png?4.0"
    },
    {
      "name": "Buffalo Calf",
      "url": "http://img.finalfantasyxiv.com/lds/pc/global/images/itemicon/a2/a251af27c7f27fc251f7b94546a45bd1fd7cd2a1.png?4.0"
    },
    {
      "name": "Infant Imp",
      "url": "http://img.finalfantasyxiv.com/lds/pc/global/images/itemicon/eb/eb65f13b997a4adb2c0a81e5538628e3964b60b9.png?4.0"
    },
    {
      "name": "Fledgling Dodo",
      "url": "http://img.finalfantasyxiv.com/lds/pc/global/images/itemicon/bc/bc178f5954463919d76a215510e6c942ed36ea35.png?4.0"
    },
    {
      "name": "Goobbue Sproutling",
      "url": "http://img.finalfantasyxiv.com/lds/pc/global/images/itemicon/4d/4dbbe760eaf2cef5185c730a3df45878c5f4637a.png?4.0"
    },
    {
      "name": "Wind-up Cursor",
      "url": "http://img.finalfantasyxiv.com/lds/pc/global/images/itemicon/ca/cab1fc80fa3ed978b5d53392277fa02244fbb8fd.png?4.0"
    },
    {
      "name": "Wind-up Airship",
      "url": "http://img.finalfantasyxiv.com/lds/pc/global/images/itemicon/2a/2a4e9460876c31437cafb2ca72108ce97291c3cd.png?4.0"
    },
    {
      "name": "Dress-up Thancred",
      "url": "http://img.finalfantasyxiv.com/lds/pc/global/images/itemicon/d4/d4c88f4891d4fe9b12dcab61f160492b4d189de9.png?4.0"
    },
    {
      "name": "Wind-up Alphinaud",
      "url": "http://img.finalfantasyxiv.com/lds/pc/global/images/itemicon/60/606777bca6279c2e16b343ab424e2274da1b76be.png?4.0"
    },
    {
      "name": "Wind-up Cid",
      "url": "http://img.finalfantasyxiv.com/lds/pc/global/images/itemicon/e4/e482932e3c8ce6571a2bef4f2ab14f6f7dc5c335.png?4.0"
    },
    {
      "name": "Wind-up Edda",
      "url": "http://img.finalfantasyxiv.com/lds/pc/global/images/itemicon/72/724c66be1da83d8037ee947d680d04a510ea4b21.png?4.0"
    }
  ],
  "gear": {
    "mainhand": {
      "name": "Noble's Picatrix",
      "url": "http://img.finalfantasyxiv.com/lds/pc/global/images/itemicon/41/41f95c0860b9f5452086dd7225456939b6cec010.png?4.0",
      "element": [],
      "level": 145,
      "specs": {
        "magicdamage": "84",
        "auto-attack": "62.93",
        "delay": "3.20"
      },
      "stats": {
        "vitality": 60,
        "mind": 67,
        "determination": 48,
        "piety": 31
      }
    },
    "head": {
      "name": "Orthodox Hat of Healing",
      "url": "http://img.finalfantasyxiv.com/lds/pc/global/images/itemicon/d3/d3a547ec7c916a1bfc50114beddfc8e1716de622.png?4.0",
      "element": [
        "Unique",
        "Untradable"
      ],
      "level": 136,
      "specs": {
        "defense": "52",
        "magicdefense": "86"
      },
      "stats": {
        "vitality": 33,
        "mind": 33,
        "spellspeed": 21,
        "piety": 23
      }
    },
    "body": {
      "name": "Halonic Priest's Alb",
      "url": "http://img.finalfantasyxiv.com/lds/pc/global/images/itemicon/4e/4e56cc54f2690af9e59008d514d1ea91e000735b.png?4.0",
      "element": [
        "Unique",
        "Untradable"
      ],
      "level": 142,
      "specs": {
        "defense": "74",
        "magicdefense": "161"
      },
      "stats": {
        "vitality": 55,
        "mind": 60,
        "spellspeed": 35,
        "piety": 40
      }
    },
    "hands": {
      "name": "Halonic Priest's Gloves",
      "url": "http://img.finalfantasyxiv.com/lds/pc/global/images/itemicon/a5/a56ecd44dd189358d27905db05fc53c07d84fe92.png?4.0",
      "element": [
        "Unique",
        "Untradable"
      ],
      "level": 142,
      "specs": {
        "defense": "53",
        "magicdefense": "115"
      },
      "stats": {
        "vitality": 34,
        "mind": 37,
        "criticalhit": 22,
        "determination": 26
      }
    },
    "waist": {
      "name": "Dhalmelskin Belt of Healing",
      "url": "http://img.finalfantasyxiv.com/lds/pc/global/images/itemicon/d9/d965dbba5fd60547689e45c3f6224231fb434f43.png?4.0",
      "element": [],
      "level": 133,
      "specs": {
        "defense": "40",
        "magicdefense": "67"
      },
      "stats": {
        "vitality": 22,
        "mind": 21,
        "criticalhit": 20,
        "spellspeed": 14
      }
    },
    "legs": {
      "name": "Hallowed Ramie Gaskins of Healing",
      "url": "http://img.finalfantasyxiv.com/lds/pc/global/images/itemicon/f3/f34a45792d37fa9cab40e07a29b6f4ac7d208afa.png?4.0",
      "element": [],
      "level": 139,
      "specs": {
        "defense": "74",
        "magicdefense": "142"
      },
      "stats": {
        "vitality": 54,
        "mind": 57,
        "spellspeed": 50,
        "piety": 27
      }
    },
    "feet": {
      "name": "Dragonskin Boots of Healing",
      "url": "http://img.finalfantasyxiv.com/lds/pc/global/images/itemicon/69/69d5dfc775708d50ed95a17103a0a76a5c4d8195.png?4.0",
      "element": [],
      "level": 139,
      "specs": {
        "defense": "47",
        "magicdefense": "92"
      },
      "stats": {
        "vitality": 30,
        "mind": 31,
        "criticalhit": 19,
        "piety": 21
      }
    },
    "earrings": {
      "name": "Orthodox Earrings of Healing",
      "url": "http://img.finalfantasyxiv.com/lds/pc/global/images/itemicon/29/294b8ddfea736749147435bc62ff5b77eb7b162f.png?4.0",
      "element": [
        "Unique",
        "Untradable"
      ],
      "level": 136,
      "specs": {
        "defense": "1",
        "magicdefense": "1"
      },
      "stats": {
        "mind": 25,
        "determination": 12,
        "spellspeed": 23
      }
    },
    "necklace": {
      "name": "Rainbow Ribbon of Healing",
      "url": "http://img.finalfantasyxiv.com/lds/pc/global/images/itemicon/1e/1eb45e70f8fd60c12ced451641fb2b8046cd498e.png?4.0",
      "element": [],
      "level": 115,
      "specs": {
        "defense": "0",
        "magicdefense": "0"
      },
      "stats": {
        "mind": 17,
        "determination": 9,
        "piety": 13
      }
    },
    "bracelets": {
      "name": "Woad Skydruid's Bangle",
      "url": "http://img.finalfantasyxiv.com/lds/pc/global/images/itemicon/fc/fce5f5656e5b0d68058df2d30f6e35c76ff8c49e.png?4.0",
      "element": [
        "Unique",
        "Untradable"
      ],
      "level": 130,
      "specs": {
        "defense": "1",
        "magicdefense": "1"
      },
      "stats": {
        "mind": 23,
        "criticalhit": 22,
        "piety": 12
      }
    },
    "ring": {
      "name": "Yeti Fang Ring of Healing",
      "url": "http://img.finalfantasyxiv.com/lds/pc/global/images/itemicon/68/682e274feb09452e0090cfbe15eeb2fd2e738263.png?4.0",
      "element": [],
      "level": 125,
      "specs": {
        "defense": "1",
        "magicdefense": "1"
      },
      "stats": {
        "mind": 22,
        "criticalhit": 21,
        "piety": 11
      }
    },
    "soulcrystal": {
      "name": "Soul of the Scholar",
      "url": "http://img.finalfantasyxiv.com/lds/pc/global/images/itemicon/0d/0d20f9dad2e3ffc8d7499a0c04badc60ad4dbb80.png?4.0",
      "element": [
        "Unique",
        "Untradable"
      ],
      "level": 30,
      "specs": {},
      "stats": {}
    }
  }
}
```