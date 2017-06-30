# lodestone
api wrapper for lodestone

![npm](https://img.shields.io/npm/v/lodestonejs.svg)
[![GitHub license](https://img.shields.io/badge/license-AGPL-blue.svg)](https://raw.githubusercontent.com/orctamer/lodestone/master/LICENSE)
![downloads](https://img.shields.io/github/downloads/lodestone/lodestone/total.svg)
[![GitHub stars](https://img.shields.io/github/stars/orctamer/lodestone.svg?style=social&label=Star)](https://github.com/orctamer/lodestone/stargazers)


An Lodestone API for grabbing character info

## Installing
Install via [npm](https://npmjs.com)

    $ npm install --save lodestonejs
 
## Running / Building
To run the example:

    $ npm install
    $ node examples/movie.js
    
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
  "title": "The Heart of the Party",
  "current_job": {
    "name": "Rogue",
    "url": "http://img.finalfantasyxiv.com/lds/h/y/wdwVVcptybfgSruoh8R344y_GA.png",
    "level": 6
  },
  "world": "Gilgamesh",
  "avatar": "http://img2.finalfantasyxiv.com/f/932a2145dccced31b5da747e853f9968_b937560c841465f7c4bc8eb47ea7948afc0_96x96.jpg?1498851199",
  "portrait": "http://img2.finalfantasyxiv.com/f/932a2145dccced31b5da747e853f9968_b937560c841465f7c4bc8eb47ea7948afl0_640x873.jpg?1498851199",
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
  "classjob": {
    "0": {
      "name": "Gladiator",
      "url": "http://img.finalfantasyxiv.com/lds/h/U/F5JzG9RPIKFSogtaKNBk455aYA.png",
      "level": "1",
      "exp": {
        "current": "0",
        "max": "300"
      }
    },
    "1": {
      "name": "Marauder",
      "url": "http://img.finalfantasyxiv.com/lds/h/N/St9rjDJB3xNKGYg-vwooZ4j6CM.png",
      "level": "1",
      "exp": {
        "current": "0",
        "max": "300"
      }
    },
    "2": {
      "name": "Dark Knight",
      "url": "http://img.finalfantasyxiv.com/lds/h/l/5CZEvDOMYMyVn2td9LZigsgw9s.png",
      "level": "30",
      "exp": {
        "current": "0",
        "max": "162500"
      }
    },
    "3": {
      "name": "Pugilist",
      "url": "http://img.finalfantasyxiv.com/lds/h/V/iW7IBKQ7oglB9jmbn6LwdZXkWw.png",
      "level": "1",
      "exp": {
        "current": "0",
        "max": "300"
      }
    },
    "4": {
      "name": "Lancer",
      "url": "http://img.finalfantasyxiv.com/lds/h/k/tYTpoSwFLuGYGDJMff8GEFuDQs.png",
      "level": "1",
      "exp": {
        "current": "0",
        "max": "300"
      }
    },
    "5": {
      "name": "Rogue",
      "url": "http://img.finalfantasyxiv.com/lds/h/y/wdwVVcptybfgSruoh8R344y_GA.png",
      "level": "6",
      "exp": {
        "current": "2060",
        "max": "4200"
      }
    },
    "6": {
      "name": "Samurai",
      "url": "http://img.finalfantasyxiv.com/lds/h/m/KndG72XtCFwaq1I1iqwcmO_0zc.png",
      "level": "50",
      "exp": {
        "current": "1752",
        "max": "864000"
      }
    },
    "7": {
      "name": "Conjurer",
      "url": "http://img.finalfantasyxiv.com/lds/h/s/gl62VOTBJrm7D_BmAZITngUEM8.png",
      "level": "8",
      "exp": {
        "current": "6014",
        "max": "7350"
      }
    },
    "8": {
      "name": "Scholar",
      "url": "http://img.finalfantasyxiv.com/lds/h/7/WdFey0jyHn9Nnt1Qnm-J3yTg5s.png",
      "level": "55",
      "exp": {
        "current": "998798",
        "max": "2217600"
      }
    },
    "9": {
      "name": "Astrologian",
      "url": "http://img.finalfantasyxiv.com/lds/h/1/erCgjnMSiab4LiHpWxVc-tXAqk.png",
      "level": "31",
      "exp": {
        "current": "78176",
        "max": "175900"
      }
    },
    "10": {
      "name": "Archer",
      "url": "http://img.finalfantasyxiv.com/lds/h/Q/ZpqEJWYHj9SvHGuV9cIyRNnIkk.png",
      "level": "16",
      "exp": {
        "current": "13679",
        "max": "35400"
      }
    },
    "11": {
      "name": "Machinist",
      "url": "http://img.finalfantasyxiv.com/lds/h/E/vmtbIlf6Uv8rVp2YFCWA25X0dc.png",
      "level": "30",
      "exp": {
        "current": "0",
        "max": "162500"
      }
    },
    "12": {
      "name": "Thaumaturge",
      "url": "http://img.finalfantasyxiv.com/lds/h/4/IM3PoP6p06GqEyReygdhZNh7fU.png",
      "level": "1",
      "exp": {
        "current": "0",
        "max": "300"
      }
    },
    "13": {
      "name": "Summoner",
      "url": "http://img.finalfantasyxiv.com/lds/h/h/4ghjpyyuNelzw1Bl0sM_PBA_FE.png",
      "level": "55",
      "exp": {
        "current": "998798",
        "max": "2217600"
      }
    },
    "14": {
      "name": "Red Mage",
      "url": "http://img.finalfantasyxiv.com/lds/h/q/s3MlLUKmRAHy0pH57PnFStHmIw.png",
      "level": "50",
      "exp": {
        "current": "519436",
        "max": "864000"
      }
    },
    "15": {
      "name": "Carpenter",
      "url": "http://img.finalfantasyxiv.com/lds/h/v/YCN6F-xiXf03Ts3pXoBihh2OBk.png",
      "level": "14",
      "exp": {
        "current": "1243",
        "max": "26400"
      }
    },
    "16": {
      "name": "Blacksmith",
      "url": "http://img.finalfantasyxiv.com/lds/h/5/EEHVV5cIPkOZ6v5ALaoN5XSVRU.png",
      "level": "11",
      "exp": {
        "current": "32",
        "max": "15600"
      }
    },
    "17": {
      "name": "Armorer",
      "url": "http://img.finalfantasyxiv.com/lds/h/G/Rq5wcK3IPEaAB8N-T9l6tBPxCY.png",
      "level": "13",
      "exp": {
        "current": "5457",
        "max": "23700"
      }
    },
    "18": {
      "name": "Goldsmith",
      "url": "http://img.finalfantasyxiv.com/lds/h/L/LbEjgw0cwO_2gQSmhta9z03pjM.png",
      "level": "15",
      "exp": {
        "current": "15309",
        "max": "30500"
      }
    },
    "19": {
      "name": "Leatherworker",
      "url": "http://img.finalfantasyxiv.com/lds/h/b/ACAcQe3hWFxbWRVPqxKj_MzDiY.png",
      "level": "12",
      "exp": {
        "current": "5572",
        "max": "19600"
      }
    },
    "20": {
      "name": "Weaver",
      "url": "http://img.finalfantasyxiv.com/lds/h/X/E69jrsOMGFvFpCX87F5wqgT_Vo.png",
      "level": "14",
      "exp": {
        "current": "14330",
        "max": "26400"
      }
    },
    "21": {
      "name": "Alchemist",
      "url": "http://img.finalfantasyxiv.com/lds/h/C/bBVQ9IFeXqjEdpuIxmKvSkqalE.png",
      "level": "16",
      "exp": {
        "current": "8735",
        "max": "35400"
      }
    },
    "22": {
      "name": "Culinarian",
      "url": "http://img.finalfantasyxiv.com/lds/h/m/1kMI2v_KEVgo30RFvdFCyySkFo.png",
      "level": "17",
      "exp": {
        "current": "10999",
        "max": "40500"
      }
    },
    "23": {
      "name": "Miner",
      "url": "http://img.finalfantasyxiv.com/lds/h/A/aM2Dd6Vo4HW_UGasK7tLuZ6fu4.png",
      "level": "25",
      "exp": {
        "current": "47982",
        "max": "95200"
      }
    },
    "24": {
      "name": "Botanist",
      "url": "http://img.finalfantasyxiv.com/lds/h/I/jGRnjIlwWridqM-mIPNew6bhHM.png",
      "level": "28",
      "exp": {
        "current": "13368",
        "max": "140200"
      }
    },
    "25": {
      "name": "Fisher",
      "url": "http://img.finalfantasyxiv.com/lds/h/x/B4Azydbn7Prubxt7OL9p1LZXZ0.png",
      "level": "34",
      "exp": {
        "current": "137711",
        "max": "217900"
      }
    }
  },
  "stats": {
    "attributes": {
      "strength": "27",
      "dexterity": "31",
      "vitality": "30",
      "intelligence": "19",
      "mind": "19"
    },
    "offensive": {
      "crit_hit_rate": "68",
      "determination": "28",
      "direct_hit_rate": "68"
    },
    "defensive": {
      "defense": "26",
      "magic_defense": "43"
    },
    "physical": {
      "attack_power": "31",
      "skill_speed": "68"
    },
    "mental": {
      "attack_magic_potency": "19",
      "healing_magic_potency": "19",
      "spell_speed": "68"
    },
    "role": {
      "tenacity": "68",
      "piety": "30"
    },
    "hp": "158",
    "mp": "57",
    "tp": "1000"
  },
  "mounts": {
    "0": {
      "name": "Company Chocobo",
      "url": "http://img.finalfantasyxiv.com/lds/pc/global/images/itemicon/49/4911a5bb2afb40de2a737cac98ecbe734698d26d.png?4.0"
    },
    "1": {
      "name": "Black Chocobo",
      "url": "http://img.finalfantasyxiv.com/lds/pc/global/images/itemicon/51/51920328db4361a6e01ea27ea472ee422259c6a8.png?4.0"
    },
    "2": {
      "name": "Magitek Armor",
      "url": "http://img.finalfantasyxiv.com/lds/pc/global/images/itemicon/1c/1ce3841890b1d22b689545ccba1c9572fe89c230.png?4.0"
    }
  },
  "minions": {
    "0": {
      "name": "Princely Hatchling",
      "url": "http://img.finalfantasyxiv.com/lds/pc/global/images/itemicon/61/6153430c6732bf57946ea72521bdb5e8b56cecc9.png?4.0"
    },
    "1": {
      "name": "Midgardsormr",
      "url": "http://img.finalfantasyxiv.com/lds/pc/global/images/itemicon/23/235672f770c82139b3b6232fab939f1cac1ebf2b.png?4.0"
    },
    "2": {
      "name": "Wide-eyed Fawn",
      "url": "http://img.finalfantasyxiv.com/lds/pc/global/images/itemicon/9c/9c0f9cc83a45fc13c3adf8a96edbfc0189f8ca35.png?4.0"
    },
    "3": {
      "name": "Wolf Pup",
      "url": "http://img.finalfantasyxiv.com/lds/pc/global/images/itemicon/ac/ac017d85b3abe6051f72496641eb27db12b905ce.png?4.0"
    },
    "4": {
      "name": "Coeurl Kitten",
      "url": "http://img.finalfantasyxiv.com/lds/pc/global/images/itemicon/f6/f694ebbe1332796e01c8c34475e8c563f7cda290.png?4.0"
    },
    "5": {
      "name": "Dust Bunny",
      "url": "http://img.finalfantasyxiv.com/lds/pc/global/images/itemicon/24/241475f4ce6ad0d8e6e3cc0a194a2f2aac9e2c1d.png?4.0"
    },
    "6": {
      "name": "Buffalo Calf",
      "url": "http://img.finalfantasyxiv.com/lds/pc/global/images/itemicon/a2/a251af27c7f27fc251f7b94546a45bd1fd7cd2a1.png?4.0"
    },
    "7": {
      "name": "Infant Imp",
      "url": "http://img.finalfantasyxiv.com/lds/pc/global/images/itemicon/eb/eb65f13b997a4adb2c0a81e5538628e3964b60b9.png?4.0"
    },
    "8": {
      "name": "Fledgling Dodo",
      "url": "http://img.finalfantasyxiv.com/lds/pc/global/images/itemicon/bc/bc178f5954463919d76a215510e6c942ed36ea35.png?4.0"
    },
    "9": {
      "name": "Goobbue Sproutling",
      "url": "http://img.finalfantasyxiv.com/lds/pc/global/images/itemicon/4d/4dbbe760eaf2cef5185c730a3df45878c5f4637a.png?4.0"
    },
    "10": {
      "name": "Wind-up Cursor",
      "url": "http://img.finalfantasyxiv.com/lds/pc/global/images/itemicon/ca/cab1fc80fa3ed978b5d53392277fa02244fbb8fd.png?4.0"
    },
    "11": {
      "name": "Wind-up Airship",
      "url": "http://img.finalfantasyxiv.com/lds/pc/global/images/itemicon/2a/2a4e9460876c31437cafb2ca72108ce97291c3cd.png?4.0"
    },
    "12": {
      "name": "Dress-up Thancred",
      "url": "http://img.finalfantasyxiv.com/lds/pc/global/images/itemicon/d4/d4c88f4891d4fe9b12dcab61f160492b4d189de9.png?4.0"
    },
    "13": {
      "name": "Wind-up Alphinaud",
      "url": "http://img.finalfantasyxiv.com/lds/pc/global/images/itemicon/60/606777bca6279c2e16b343ab424e2274da1b76be.png?4.0"
    },
    "14": {
      "name": "Wind-up Edda",
      "url": "http://img.finalfantasyxiv.com/lds/pc/global/images/itemicon/72/724c66be1da83d8037ee947d680d04a510ea4b21.png?4.0"
    }
  }
}
```