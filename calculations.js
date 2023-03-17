function resinForBossMat(level, toLevel) {
    const ASCENSION_LEVELS = [40, 50, 60, 70, 80];
    const CHARACTER_ASCENSION_BOSS_MATERIALS = [2,  4,  8,  12, 20];
    let bossRuns = {
        min:0,
        minResinNeeded: 0,
        minDays: 0,

        max:0,
        maxResinNeeded: 0,
        maxDays: 0,

        avg:0,
        avgResinNeeded: 0,
        avgDays:0
    }  

    let materialsNeeded = 0;

    for (let i in ASCENSION_LEVELS) {
        //assumes you have not ascended at current level 
        //and will not be ascending at desired level if at one of the ascension levels
        if (ASCENSION_LEVELS[i] < toLevel && ASCENSION_LEVELS[i] >= level) {
            materialsNeeded += CHARACTER_ASCENSION_BOSS_MATERIALS[i];
        }
    }
    bossRuns.min = Math.ceil(materialsNeeded / 3);
    bossRuns.minResinNeeded = bossRuns.min * 40;
    bossRuns.minDays = parseFloat((bossRuns.minResinNeeded / 180).toFixed(2));

    bossRuns.max = materialsNeeded / 2;
    bossRuns.maxResinNeeded = bossRuns.max * 40;
    bossRuns.maxDays = parseFloat((bossRuns.maxResinNeeded / 180).toFixed(2));

    bossRuns.avg = Math.ceil(materialsNeeded / 2.55);
    bossRuns.avgResinNeeded = bossRuns.avg * 40;
    bossRuns.avgDays = parseFloat((bossRuns.avgResinNeeded / 180).toFixed(2));

    return bossRuns;
}

function resinForTalents(talentLevels, booksInventory, xinqiuBonus, condensed) {
    const TALENT_BOOKS_BASE_VALUES = [3, 6, 12, 18, 27, 36, 54, 108, 144];
    const TALENT_BOOKS = [3, 2, 4, 6, 9, 4, 6, 12, 16];
    let talentBooksNeeded = {
        greenBooks: 0,
        blueBooks: 0,
        purpleBooks: 0
    }
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
    } 

    const WEEKLY_BOSS_MATS = [0, 0, 0, 0, 0, 1, 1, 2, 2];
    let weeklyBossRuns = {
        min:0,
        minResinNeeded: 0,

        max:0,
        maxResinNeeded: 0,

        avg:0,
        avgResinNeeded: 0
    }

    let bookValueNeeded = 0;
    let weeklyBossMatsNeeded = 0;
    for (let x = 0; x < talentLevels.length; x++) {
        for (let i = talentLevels[x][0] - 1; i < talentLevels[x][1] - 1; i++) {
            weeklyBossMatsNeeded += WEEKLY_BOSS_MATS[i];
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

    weeklyBossRuns.min = Math.ceil(weeklyBossMatsNeeded / 2);
    weeklyBossRuns.minResinNeeded = weeklyBossRuns.min * 30;

    weeklyBossRuns.max = Math.ceil(weeklyBossMatsNeeded / 3);
    weeklyBossRuns.maxResinNeeded =  weeklyBossRuns.max * 30;

    weeklyBossRuns.avg = Math.ceil(weeklyBossMatsNeeded / 2.4);
    weeklyBossRuns.avgResinNeeded =  weeklyBossRuns.avg * 30;

    return [bookValueNeeded, weeklyBossMatsNeeded, talentBooksNeeded, weeklyBossRuns, domainRuns];
}

console.log(resinForTalents([[8, 9], [5, 5], [1, 1]], [0,0,0], true, true));