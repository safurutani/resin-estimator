function showContent() {
    let charSelection = [
      "alphabetical",
      "pyro",
      "hydro",
      "anemo",
      "electro",
      "dendro",
      "cryo",
      "geo"
    ];
    let sortingButtons = [
      "sort_alphabet",
      "sort_pyro",
      "sort_hydro",
      "sort_anemo",
      "sort_electro",
      "sort_dendro",
      "sort_cryo",
      "sort_geo"
    ];
    for (let i = 0; i < 9; i++) {
      if (document.getElementById(sortingButtons[i]).checked) {
        for (let x in charSelection) {
          if (x == i) {
            document.getElementById(charSelection[x]).style.display = "block";
          } else {
            document.getElementById(charSelection[x]).style.display = "none";
          }
        }
      }
    }
  }
  function initialDisplay() {
    document.getElementById("sort_alphabet").click();
  }
  function resinForTalents(talentLevels, booksInventory, xinqiuBonus, condensed) {
      const TALENT_BOOKS_BASE_VALUES = [3, 6, 12, 18, 27, 36, 54, 108, 144];
      const TALENT_BOOKS = [3, 2, 4, 6, 9, 4, 6, 12, 16];
      let talentBooksNeeded = {
          greenBooks: 0,
          blueBooks: 0,
          purpleBooks: 0
      };
      let domainRuns = {
          min:0,
          minResinNeeded: 0,
          minDays: 0,
  
          max:0,
          maxResinNeeded: 0,
          maxDays: 0,
  
          avg:0,
          avgResinNeeded: 0,
          avgDays:0
      } ;
  
      const WEEKLY_BOSS_MATS = [0, 0, 0, 0, 0, 1, 1, 2, 2];
      let weeklyBossRuns = {
          min:0,
          minResinNeeded: 0,
  
          max:0,
          maxResinNeeded: 0,
  
          avg:0,
          avgResinNeeded: 0,
        
          weeklyBossMatsNeeded: 0
      };
  
      let bookValueNeeded = 0;
      for (let x = 0; x < talentLevels.length; x++) {
          for (let i = talentLevels[x][0] - 1; i < talentLevels[x][1] - 1; i++) {
              weeklyBossRuns.weeklyBossMatsNeeded += WEEKLY_BOSS_MATS[i];
              bookValueNeeded += TALENT_BOOKS_BASE_VALUES[i];
              if (i == 0) {
                  talentBooksNeeded.greenBooks += TALENT_BOOKS[i];
              }
              else if (i > 0 && i < 5) {
                  talentBooksNeeded.blueBooks += TALENT_BOOKS[i];
              }
              else {
                  talentBooksNeeded.purpleBooks += TALENT_BOOKS[i];
              }
          }
      }
      let bookValueInventory = booksInventory[0] + (booksInventory[1] * 3) + (booksInventory[2] * 9);
      bookValueNeeded -= bookValueInventory;
  
      domainRuns.min = Math.ceil(bookValueNeeded / 39);
      domainRuns.max = Math.ceil(bookValueNeeded / 8);
      domainRuns.avg = Math.ceil(bookValueNeeded / 10.18);
      
      if (xinqiuBonus) {
          domainRuns.min = Math.ceil((bookValueNeeded - (domainRuns.min * 2)) / 39);
          domainRuns.max = Math.ceil((bookValueNeeded - (domainRuns.min * 2)) / 8);
          domainRuns.avg = Math.ceil((bookValueNeeded - (domainRuns.min * 2)) / 10.18);
      }
  
      domainRuns.minResinNeeded = domainRuns.min * 20;
      domainRuns.minDays = parseFloat((domainRuns.minResinNeeded / 180).toFixed(2));
  
      domainRuns.avgResinNeeded = domainRuns.avg * 20;
      domainRuns.avgDays = parseFloat((domainRuns.avgResinNeeded / 180).toFixed(2));
  
      domainRuns.maxResinNeeded = domainRuns.max * 20;
      domainRuns.maxDays = parseFloat((domainRuns.maxResinNeeded / 180).toFixed(2));
  
      if (condensed) {
          domainRuns.min = Math.ceil(domainRuns.min/2);
          if (domainRuns.minResinNeeded % 40 == 0) {
              domainRuns.minOriginalResinRun = false;
          }
          else {
              domainRuns.minOriginalResinRun = true;
          }
  
          domainRuns.max = Math.ceil(domainRuns.max/2);
          if (domainRuns.maxResinNeeded % 40 == 0) {
              domainRuns.maxOriginalResinRun = false;
          }
          else {
              domainRuns.maxOriginalResinRun = true;
          }
  
          domainRuns.avg = Math.ceil(domainRuns.avg/2);
          if (domainRuns.avgResinNeeded % 40 == 0) {
              domainRuns.avgOriginalResinRun = false;
          }
          else {
              domainRuns.avgOriginalResinRun = true;
          }
      }
  
      weeklyBossRuns.min = Math.ceil(weeklyBossRuns.weeklyBossMatsNeeded / 2);
      weeklyBossRuns.minResinNeeded = weeklyBossRuns.min * 30;
  
      weeklyBossRuns.max = Math.ceil(weeklyBossRuns.weeklyBossMatsNeeded / 3);
      weeklyBossRuns.maxResinNeeded =  weeklyBossRuns.max * 30;
  
      weeklyBossRuns.avg = Math.ceil(weeklyBossRuns.weeklyBossMatsNeeded / 2.4);
      weeklyBossRuns.avgResinNeeded =  weeklyBossRuns.avg * 30;
  
      return {talentBooksNeeded, weeklyBossRuns, domainRuns};
  }
  function resinForBossMat(level, toLevel, matInventory) {
    const ASCENSION_LEVELS = [40, 50, 60, 70, 80];
    const CHARACTER_ASCENSION_BOSS_MATERIALS = [2, 4, 8, 12, 20];
    let bossRuns = {
      min: 0,
      minResinNeeded: 0,
      minDays: 0,
  
      max: 0,
      maxResinNeeded: 0,
      maxDays: 0,
  
      avg: 0,
      avgResinNeeded: 0,
      avgDays: 0,
  
      materialsNeeded: 0
    };
  
    bossRuns.materialsNeeded = -matInventory;
  
    for (let i in ASCENSION_LEVELS) {
      //assumes you have not ascended at current level
      //and will not be ascending at desired level if at one of the ascension levels
      if (ASCENSION_LEVELS[i] < toLevel && ASCENSION_LEVELS[i] >= level) {
        bossRuns.materialsNeeded += CHARACTER_ASCENSION_BOSS_MATERIALS[i];
      }
    }
    bossRuns.min = Math.ceil(bossRuns.materialsNeeded / 3);
    bossRuns.minResinNeeded = bossRuns.min * 40;
    bossRuns.minDays = parseFloat((bossRuns.minResinNeeded / 180).toFixed(2));
  
    bossRuns.max = bossRuns.materialsNeeded / 2;
    bossRuns.maxResinNeeded = bossRuns.max * 40;
    bossRuns.maxDays = parseFloat((bossRuns.maxResinNeeded / 180).toFixed(2));
  
    bossRuns.avg = Math.ceil(bossRuns.materialsNeeded / 2.55);
    bossRuns.avgResinNeeded = bossRuns.avg * 40;
    bossRuns.avgDays = parseFloat((bossRuns.avgResinNeeded / 180).toFixed(2));
  
    return bossRuns;
  }
  
  function displayTalentInfo() {
    var currentNa = parseInt(document.getElementById("currentNa").value);
    var desiredNa = parseInt(document.getElementById("desiredNa").value);
    var currentSkill = parseInt(document.getElementById("currentSkill").value);
    var desiredSkill = parseInt(document.getElementById("desiredSkill").value);
    var currentBurst = parseInt(document.getElementById("currentBurst").value);
    var desiredBurst = parseInt(document.getElementById("desiredBurst").value);
    var greenBooks = parseInt(document.getElementById("greenBooks").value);
    var blueBooks = parseInt(document.getElementById("blueBooks").value);
    var purpleBooks = parseInt(document.getElementById("purpleBooks").value);
    var xingqiuBonus = document.getElementById("xingqiuBonus").checked;
    var condensedResin = document.getElementById("condensedResin").checked;
    let levelTalents = resinForTalents([[currentNa, desiredNa], [currentSkill, desiredSkill], [currentBurst, desiredBurst]], [greenBooks, blueBooks, purpleBooks], xingqiuBonus, condensedResin);
    
    document.getElementById("matsNeeded").innerHTML =
      "Green Books: " +
      levelTalents.talentBooksNeeded.greenBooks + 
      "<br>Blue Books: " +
      levelTalents.talentBooksNeeded.blueBooks + 
      "<br>Purple Books: " +
      levelTalents.talentBooksNeeded.purpleBooks +
      "<br><br>Weekly Boss Drops: " + 
      levelTalents.weeklyBossRuns.weeklyBossMatsNeeded;
    document.getElementById("weeklyBossRuns").innerHTML =
      "Min: " +
      levelTalents.weeklyBossRuns.min + 
      "<br>Avg: " +
      levelTalents.weeklyBossRuns.avg +
      "<br> Max: " +
      levelTalents.weeklyBossRuns.max;
    document.getElementById("domainRuns").innerHTML =
      "Min: " +
      levelTalents.domainRuns.min +
      "<br>Avg: " +
      levelTalents.domainRuns.avg +
      "<br> Max: " +
      levelTalents.domainRuns.max;
    document.getElementById("domainResin").innerHTML =
      "Min: " +
      levelTalents.domainRuns.minResinNeeded +
      "<br>Avg: " +
      levelTalents.domainRuns.avgResinNeeded +
      "<br> Max: " +
      levelTalents.domainRuns.maxResinNeeded;
    document.getElementById("daysTalents").innerHTML =
      "Min: " +
      levelTalents.domainRuns.minDays +
      "<br>Avg: " +
      levelTalents.domainRuns.avgDays +
      "<br> Max: " +
      levelTalents.domainRuns.maxDays;
  }
  
  function displayBossInfo() {
    var currentLvl = parseInt(document.getElementById("currentLvl").value);
    var desiredLvl = parseInt(document.getElementById("desiredLvl").value);
    var invBossMats = parseInt(document.getElementById("invBossMats").value);
    let charAscension = resinForBossMat(currentLvl, desiredLvl, invBossMats);
  
    document.getElementById("boss-drops").innerHTML =
      charAscension.materialsNeeded;
    document.getElementById("bossRuns").innerHTML =
      "Min: " +
      charAscension.min +
      "<br>Avg: " +
      charAscension.avg +
      "<br> Max: " +
      charAscension.max;
    document.getElementById("bossResin").innerHTML =
      "Min: " +
      charAscension.minResinNeeded +
      "<br>Avg: " +
      charAscension.avgResinNeeded +
      "<br> Max: " +
      charAscension.maxResinNeeded;
  }
  