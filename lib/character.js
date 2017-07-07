const cheerio = require('cheerio')
const request = require('request-promise')

module.exports = function (id, cb) {
  let url = `http://na.finalfantasyxiv.com/lodestone/character/${id}/`
  request(url).then(r => {
    let $ = cheerio.load(r)
    let character = {}
    let id = $('.g-plusone').data('href').split('/')
    const jobs = {
      'Archer': 'http://img.finalfantasyxiv.com/lds/h/Q/ZpqEJWYHj9SvHGuV9cIyRNnIkk.png',
      'Arcanist': 'http://img.finalfantasyxiv.com/lds/h/e/VYP1LKTDpt8uJVvUT7OKrXNL9E.png',
      'Conjurer': 'http://img.finalfantasyxiv.com/lds/h/s/gl62VOTBJrm7D_BmAZITngUEM8.png',
      'Lancer': 'http://img.finalfantasyxiv.com/lds/h/k/tYTpoSwFLuGYGDJMff8GEFuDQs.png',
      'Marauder': 'http://img.finalfantasyxiv.com/lds/h/N/St9rjDJB3xNKGYg-vwooZ4j6CM.png',
      'Gladiator': 'http://img.finalfantasyxiv.com/lds/h/U/F5JzG9RPIKFSogtaKNBk455aYA.png',
      'Pugilist': 'http://img.finalfantasyxiv.com/lds/h/l/5CZEvDOMYMyVn2td9LZigsgw9s.png',
      'Thaumaturge': 'http://img.finalfantasyxiv.com/lds/h/4/IM3PoP6p06GqEyReygdhZNh7fU.png',
      'Bard': 'http://img.finalfantasyxiv.com/lds/h/F/KWI-9P3RX_Ojjn_mwCS2N0-3TI.png',
      'Scholar': 'http://img.finalfantasyxiv.com/lds/h/7/WdFey0jyHn9Nnt1Qnm-J3yTg5s.png',
      'Summoner': 'http://img.finalfantasyxiv.com/lds/h/h/4ghjpyyuNelzw1Bl0sM_PBA_FE.png',
      'White Mage': 'http://img.finalfantasyxiv.com/lds/h/7/i20QvSPcSQTybykLZDbQCgPwMw.png',
      'Dragoon': 'http://img.finalfantasyxiv.com/lds/h/m/gX4OgBIHw68UcMU79P7LYCpldA.png',
      'Warrior': 'http://img.finalfantasyxiv.com/lds/h/y/A3UhbjZvDeN3tf_6nJ85VP0RY0.png',
      'Paladin': 'http://img.finalfantasyxiv.com/lds/h/E/d0Tx-vhnsMYfYpGe9MvslemEfg.png',
      'Monk': 'http://img.finalfantasyxiv.com/lds/h/K/HW6tKOg4SOJbL8Z20GnsAWNjjM.png',
      'Black Mage': 'http://img.finalfantasyxiv.com/lds/h/P/V01m8YRBYcIs5vgbRtpDiqltSE.png',
      'Red Mage': 'http://img.finalfantasyxiv.com/lds/h/q/s3MlLUKmRAHy0pH57PnFStHmIw.png',
      'Alchemist': 'http://img.finalfantasyxiv.com/lds/h/C/bBVQ9IFeXqjEdpuIxmKvSkqalE.png',
      'Armorer': 'http://img.finalfantasyxiv.com/lds/h/G/Rq5wcK3IPEaAB8N-T9l6tBPxCY.png',
      'Blacksmith': 'http://img.finalfantasyxiv.com/lds/h/5/EEHVV5cIPkOZ6v5ALaoN5XSVRU.png',
      'Carpenter': 'http://img.finalfantasyxiv.com/lds/h/v/YCN6F-xiXf03Ts3pXoBihh2OBk.png',
      'Culinarian': 'http://img.finalfantasyxiv.com/lds/h/m/1kMI2v_KEVgo30RFvdFCyySkFo.png',
      'Goldsmith': 'http://img.finalfantasyxiv.com/lds/h/L/LbEjgw0cwO_2gQSmhta9z03pjM.png',
      'Leatherworker': 'http://img.finalfantasyxiv.com/lds/h/b/ACAcQe3hWFxbWRVPqxKj_MzDiY.png',
      'Weaver': 'http://img.finalfantasyxiv.com/lds/h/X/E69jrsOMGFvFpCX87F5wqgT_Vo.png',
      'Botanist': 'http://img.finalfantasyxiv.com/lds/h/I/jGRnjIlwWridqM-mIPNew6bhHM.png',
      'Fisher': 'http://img.finalfantasyxiv.com/lds/h/x/B4Azydbn7Prubxt7OL9p1LZXZ0.png',
      'Miner': 'http://img.finalfantasyxiv.com/lds/h/A/aM2Dd6Vo4HW_UGasK7tLuZ6fu4.png',
      'Samurai': 'http://img.finalfantasyxiv.com/lds/h/m/KndG72XtCFwaq1I1iqwcmO_0zc.png',
      'Astrologian': 'http://img.finalfantasyxiv.com/lds/h/1/erCgjnMSiab4LiHpWxVc-tXAqk.png',
      'Machinist': 'http://img.finalfantasyxiv.com/lds/h/E/vmtbIlf6Uv8rVp2YFCWA25X0dc.png',
      'Ninja': 'http://img.finalfantasyxiv.com/lds/h/0/Fso5hanZVEEAaZ7OGWJsXpf3jw.png',
      'Rogue': 'http://img.finalfantasyxiv.com/lds/h/y/wdwVVcptybfgSruoh8R344y_GA.png'
    }
    const currentJob = $('.character__class_icon img').attr('src')
    const currentLevel = parseInt($('.character__class__data p').text().replace('LEVEL ', ''), 10)
    const attributes = $('.character__param__list tr td')
    const userinfo = $('.character-block__name')
    const userstats = $('.character__param span')
    const resistance = $('.character__param__element li')
    character = {
      id: id[id.length - 2],
      name: $('.frame__chara__name').text(),
      title: $('.frame__chara__title').text(),
      current_job: {
        name: Object.keys(jobs).find(key => jobs[key] === currentJob),
        url: currentJob,
        level: currentLevel
      },
      world: $('.frame__chara__world').text(),
      avatar: $('.character-block img').eq(0).attr('src'),
      portrait: $('.character__detail__image img').attr('src'),
      race: userinfo.first().html().split('<br>')[0].replace('&apos;', '\''),
      clan: userinfo.first().html().split('<br>')[1].split('/')[0].trim(),
      gender: $('.character-block__name').first().html().split('<br>')[1].split('/')[1].trim() === '&#x2640;' ? 'female' : 'male',
      nameday: $('.character-block__birth').text(),
      guardian: {
        icon: $('.character-block img').eq(1).attr('src'),
        name: userinfo.eq(1).text()
      },
      city: {
        icon: $('.character-block img').eq(2).attr('src'),
        name: userinfo.eq(2).text()
      },
      grand_company: {
        icon: $('.character-block img').eq(3).attr('src'),
        name: userinfo.eq(3).text().split('/')[0].trim(),
        rank: userinfo.eq(3).text().split('/')[1].trim()
      },
      classjob: [],
      stats: {
        attributes: {
          strength: attributes.eq(0).text(),
          dexterity: attributes.eq(1).text(),
          vitality: attributes.eq(2).text(),
          intelligence: attributes.eq(3).text(),
          mind: attributes.eq(4).text()
        },
        offensive: {
          crit_hit_rate: attributes.eq(5).text(),
          determination: attributes.eq(6).text(),
          direct_hit_rate: attributes.eq(7).text()
        },
        defensive: {
          defense: attributes.eq(8).text(),
          magic_defense: attributes.eq(9).text()
        },
        physical: {
          attack_power: attributes.eq(10).text(),
          skill_speed: attributes.eq(11).text()
        },
        mental: {
          attack_magic_potency: attributes.eq(12).text(),
          healing_magic_potency: attributes.eq(13).text(),
          spell_speed: attributes.eq(14).text()
        },
        role: {
          tenacity: attributes.eq(15).text(),
          piety: attributes.eq(16).text()
        },
        hp: userstats.eq(0).text(),
        mp: userstats.eq(1).text(),
        tp: userstats.eq(2).text(),
        resistance: {
          fire: parseInt(resistance.eq(0).text(), 10),
          ice: parseInt(resistance.eq(1).text(), 10),
          wind: parseInt(resistance.eq(2).text(), 10),
          earth: parseInt(resistance.eq(3).text(), 10),
          lightning: parseInt(resistance.eq(4).text(), 10),
          water: parseInt(resistance.eq(5).text(), 10)
        }
      },
      mounts: [],
      minions: [],
      gear: {}
    }
    $('.character__job li').each(function (i) {
      character.classjob[i] = {
        name: $(this).find($('.character__job__name')).text(),
        url: $(this).find($('.character__job__icon img')).attr('src'),
        level: $(this).find($('.character__job__level')).text(),
        exp: {
          current: $(this).find($('.character__job__exp')).text().split('/')[0].trim(),
          max: $(this).find($('.character__job__exp')).text().split('/')[1].trim()
        }
      }
    })
    $('.character__mounts li').each(function (i) {
      character.mounts[i] = {
        name: $(this).find($('.character__item_icon')).first().data('tooltip'),
        url: $(this).find($('.character__item_icon img')).attr('src')
      }
    })
    $('.character__minion li').each(function (i) {
      character.minions[i] = {
        name: $(this).find($('.character__item_icon')).first().data('tooltip'),
        url: $(this).find($('.character__item_icon img')).attr('src')
      }
    })

    const el = $('.character__content').eq(0)
    character.gear = getGear($, el.find.bind(el))

    cb(null, character)
  })
}

function getGear ($, qs) {
  const allGear = {}
  qs('.db-tooltip').each((i, el) => {
    let elObj = $(el)
    let qs = elObj.find.bind(elObj)

    let category = i === 0 ? 'mainhand' : qs('.db-tooltip__item__category').text().toLowerCase().replace(/\s+/g, '')
    if (category === 'ring') {
      category = allGear['ring-r'] ? 'ring-l' : 'ring-r'
    }

    let gear = {
      name: qs('.db-tooltip__item__name').text(),
      url: qs('.db-tooltip__item__icon__item_image').attr('src'),
      element: qs('.db-tooltip__item__element').children('span').map((i, el) => $(el).text()).get(),
      level: parseInt(qs('.db-tooltip__item__level').text().replace('Item Level ', ''), 10),
      specs: {},
      stats: {}
    }

    let specValues = qs('.db-tooltip__item_spec__value')
    qs('.db-tooltip__item_spec__name').each((i, el) => {
      const name = $(el).text().toLowerCase().replace(/\s+/g, '')
      const value = specValues.eq(i).text()
      gear.specs[name] = value
    })

    qs('.db-tooltip__basic_bonus li').each((i, el) => {
      const name = $(el).children('span').text().toLowerCase().replace(/\s+/g, '')
      const value = parseInt($(el).text().match(/\d+/)[0], 10)
      gear.stats[name] = value
    })

    allGear[category] = gear
  })

  return allGear
}
