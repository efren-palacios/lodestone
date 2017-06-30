const cheerio = require('cheerio')
const request = require('request-promise')
module.exports = function (id, cb) {
  let url = `http://na.finalfantasyxiv.com/lodestone/character/${id}/`
  request(url).then(body => {
    let $ = cheerio.load(body)
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
    let currentJob = $('.character__class_icon img').attr('src')
    let currentLevel = parseInt($('.character__class__data p').text().replace('LEVEL ', ''), 10)
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
      race: $('.character-block__name').first().html().split('<br>')[0].replace('&apos;', '\''),
      clan: $('.character-block__name').first().html().split('<br>')[1].split('/')[0].trim(),
      gender: $('.character-block__name').first().html().split('<br>')[1].split('/')[1].trim() === '&#x2640;' ? 'female' : 'male',
      nameday: $('.character-block__birth').text(),
      guardian: {
        icon: $('.character-block img').eq(1).attr('src'),
        name: $('.character-block__name').eq(1).text()
      },
      city: {
        icon: $('.character-block img').eq(2).attr('src'),
        name: $('.character-block__name').eq(2).text()
      },
      grand_company: {
        icon: $('.character-block img').eq(3).attr('src'),
        name: $('.character-block__name').eq(3).text().split('/')[0].trim(),
        rank: $('.character-block__name').eq(3).text().split('/')[1].trim()
      },
      classjob: {},
      stats: {
        attributes: {
          strength: $('.character__param__list tr td').eq(0).text(),
          dexterity: $('.character__param__list tr td').eq(1).text(),
          vitality: $('.character__param__list tr td').eq(2).text(),
          intelligence: $('.character__param__list tr td').eq(3).text(),
          mind: $('.character__param__list tr td').eq(4).text()
        },
        offensive: {
          crit_hit_rate: $('.character__param__list tr td').eq(5).text(),
          determination: $('.character__param__list tr td').eq(6).text(),
          direct_hit_rate: $('.character__param__list tr td').eq(7).text()
        },
        defensive: {
          defense: $('.character__param__list tr td').eq(8).text(),
          magic_defense: $('.character__param__list tr td').eq(9).text()
        },
        physical: {
          attack_power: $('.character__param__list tr td').eq(10).text(),
          skill_speed: $('.character__param__list tr td').eq(11).text()
        },
        mental: {
          attack_magic_potency: $('.character__param__list tr td').eq(12).text(),
          healing_magic_potency: $('.character__param__list tr td').eq(13).text(),
          spell_speed: $('.character__param__list tr td').eq(14).text()
        },
        role: {
          tenacity: $('.character__param__list tr td').eq(15).text(),
          piety: $('.character__param__list tr td').eq(16).text()
        },
        hp: $('.character__param span').eq(0).text(),
        mp: $('.character__param span').eq(1).text(),
        tp: $('.character__param span').eq(2).text()
      },
      mounts: {},
      minions: {}
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
    cb(null, character)
  })
}
