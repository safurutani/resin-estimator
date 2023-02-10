class character{
    constructor(name, boss, talentInfo) {
        this.name = name;
        this.boss = boss;
        this.talentBook = talentBook;
    }
} 
const TALENT_BOOK_INFO = [
    ["Prosperity", "Mondays/Thursdays"],//0
    ["Freedom", "Mondays/Thursdays"],//1
    ["Transience", "Mondays/Thursdays"],//2
    ["Admonition", "Mondays/Thursdays"],//3

    ["Diligence", "Tuesdays/Fridays"],//4
    ["Resistance", "Tuesdays/Fridays"],//5
    ["Elegance", "Tuesdays/Fridays"],//6
    ["Ingenuity", "Tuesdays/Fridays"],//7

    ["Ballad", "Wednesdays/Saturdays"], //8
    ["Gold", "Wednesdays/Saturdays"], //9
    ["Light", "Wednesdays/Saturdays"], //10
    ["Praxis", "Wednesdays/Saturdays"] //11
];

const BOSS_MATERIAL_INFO = [
    ["Aeonblight Drake", "Perpetual Caliber"], 
    ["Algorithm Of Semi-Intransient Matrix of Overseer Network", "Light Guiding Tetrahedron"],
    ["Anemo Hypostasis", "Hurricane Seed"],
    ["Bathysmal Vishap Herd", "Dragonheir's False Fin"],
    ["Cryo Hypostasis", "Crystalline Bloom"],
    ["Cryo Regisvine", "Hoarfrost Core"],
    ["Dendro Hypostasis", "Quelled Creeper"],
    ["Electro Hypostasis", "Lightning Prism"],
    ["Electro Regisvine", "Thunderclap Fruitcore"],
    ["Geo Hypostasis", "Basalt Pillar"],
    ["Golden Wolflord", "Rifthorn Regalia"],
    ["Hydro Hypostasis", "Dew of Repudiation"],
    ["Jadeplume Terrorshroom", "Majestic Hooked Beak"],
    ["Maguu Kenki", "Marionetter Core"], 
    ["Oceanid", "Cleansing Heart"],
    ["Perpetual Mechanical Array", "Perpetual Heart"],
    ["Primo Geovishap", "Juvenile Jade"],
    ["Pyro Hypostasis", "Smoldering Pearl"],
    ["Pyro Regisvine", "Everflame Seed"],
    ["Ruin Serpent", "Runic Fang"],
    ["Setekh Wenut", "Pseudo-Stamens"],
    ["Thunder Manifestation", "Storm Beads"]
];

//PYRO CHARACTERS
const YOIMIYA = new character("Yoimiya", BOSS_MATERIAL_INFO[17], TALENT_BOOK_INFO[2]);
const HUTAO = new character("Hu Tao", BOSS_MATERIAL_INFO[16], TALENT_BOOK_INFO[4]);
const KLEE = new character("Klee", BOSS_MATERIAL_INFO[18], TALENT_BOOK_INFO[1]);
const DILUC = new character("Diluc", BOSS_MATERIAL_INFO[18], TALENT_BOOK_INFO[5]);
const THOMA = new character("Thoma", BOSS_MATERIAL_INFO[17], TALENT_BOOK_INFO[2]);
const XIANGLING = new character("Xiangling", BOSS_MATERIAL_INFO[18], TALENT_BOOK_INFO[4]);
const YANFEI = new character("Yanfei", BOSS_MATERIAL_INFO[16], TALENT_BOOK_INFO[9]);
const XINYAN = new character("Xinyan", BOSS_MATERIAL_INFO[18], TALENT_BOOK_INFO[9]);
const BENNETT = new character("Bennett", BOSS_MATERIAL_INFO[18], TALENT_BOOK_INFO[5]);
const AMBER = new character("Amber", BOSS_MATERIAL_INFO[18], TALENT_BOOK_INFO[1])

//HYDRO CHARACTERS
const NILOU = new character("Nilou", BOSS_MATERIAL_INFO[0], TALENT_BOOK_INFO[11]);
const AYATO = new character("Kamisato Ayato", BOSS_MATERIAL_INFO[11], TALENT_BOOK_INFO[4]);
const YELAN = new character("Yelan", BOSS_MATERIAL_INFO[19], TALENT_BOOK_INFO[0]);
const MONA = new character("Mona", BOSS_MATERIAL_INFO[14], TALENT_BOOK_INFO[5]);
const CHILDE = new character("Tartaglia", BOSS_MATERIAL_INFO[14], TALENT_BOOK_INFO[1]);
const CANDACE = new character("Candace", BOSS_MATERIAL_INFO[1], TALENT_BOOK_INFO[3]);
const XINGQIU = new character("Xingqiu", BOSS_MATERIAL_INFO[14], TALENT_BOOK_INFO[9]);
const BARBARA = new character("Barbara", BOSS_MATERIAL_INFO[14], TALENT_BOOK_INFO[8]);
const KOKOMI = new character("Sangonomiya Kokomi", BOSS_MATERIAL_INFO[11], TALENT_BOOK_INFO[2]);

//ANEMO CHARACTERS
const WANDERER = new character("Wanderer", BOSS_MATERIAL_INFO[0], TALENT_BOOK_INFO[11]);
const KAZUHA = new character("Kaedehara Kazuha", BOSS_MATERIAL_INFO[13], TALENT_BOOK_INFO[4]);
const XIAO = new character("Xiao", BOSS_MATERIAL_INFO[16], TALENT_BOOK_INFO[0]);
const VENTI = new character("Venti", BOSS_MATERIAL_INFO[2], TALENT_BOOK_INFO[8]);
const JEAN = new character("Jean", BOSS_MATERIAL_INFO[2], TALENT_BOOK_INFO[5]);
const FARUZAN = new character("Faruzan", BOSS_MATERIAL_INFO[1], TALENT_BOOK_INFO[3]);
const HEIZOU = new character("Shikanoin Heizou", BOSS_MATERIAL_INFO[19], TALENT_BOOK_INFO[2]);
const SAYU = new character("Sayu", BOSS_MATERIAL_INFO[13], TALENT_BOOK_INFO[10]);
const SUCROSE = new character("Sucrose", BOSS_MATERIAL_INFO[2], TALENT_BOOK_INFO[1]);

//SPECIAL CASE TALENTS FIXXXXXXXXXXXXXXXXXXXX
const ANEMO_LUMINE = new character("Lumine (Traveler)", null, TALENT_BOOK_INFO[0]);
const ANEMO_AETHER = new character("Aether (Traveler", null,TALENT_BOOK_INFO[0]);
///////////////////////////////////////////////////////////////////////

//ELECTRO CHARACTERS
const CYNO = new character("Cyno", BOSS_MATERIAL_INFO[8], TALENT_BOOK_INFO[3]);
const YAEMIKO = new character("Yae Miko", BOSS_MATERIAL_INFO[3], TALENT_BOOK_INFO[10]);
const RAIDEN = new character("Raiden Shogun", BOSS_MATERIAL_INFO[21], TALENT_BOOK_INFO[10]);
const KEQING = new character("Keqing", BOSS_MATERIAL_INFO[7], TALENT_BOOK_INFO[0]);
const FISCHL = new character("Fischl", BOSS_MATERIAL_INFO[7], TALENT_BOOK_INFO[8]);
const DORI = new character("Dori", BOSS_MATERIAL_INFO[8], TALENT_BOOK_INFO[7]);
const KUKI = new character("Kuki Shinobu", BOSS_MATERIAL_INFO[19], TALENT_BOOK_INFO[6]);
const SARA = new character("Kujou Sara", BOSS_MATERIAL_INFO[21], TALENT_BOOK_INFO[6]);
const BEIDOU = new character("Bennett", BOSS_MATERIAL_INFO[7], TALENT_BOOK_INFO[9]);
const RAZOR = new character("Razor", BOSS_MATERIAL_INFO[7], TALENT_BOOK_INFO[5]);
const LISA = new character("Lisa", BOSS_MATERIAL_INFO[7], TALENT_BOOK_INFO[8]);

//SPECIAL CASE TALENTS FIXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
const ELECTRO_LUMINE = new character("Lumine (Traveler)", null, TALENT_BOOK_INFO[0]);
const ELECTRO_TRAVELER = new character("Aether (Traveler)", null, TALENT_BOOK_INFO[0]);
/////////////////////////////////////////////////////////////////////////////////

//DENDRO CHARACTERS
const ALHAITHAM = new character("Alhaitham", BOSS_MATERIAL_INFO[20], TALENT_BOOK_INFO[7]);
const NAHIDA = new character("Nahida", BOSS_MATERIAL_INFO[6], TALENT_BOOK_INFO[7]);
const TIGHNARI = new character("Tighnari", BOSS_MATERIAL_INFO[12], TALENT_BOOK_INFO[3]);
const YAOYAO = new character("Yaoyao", BOSS_MATERIAL_INFO[6], TALENT_BOOK_INFO[4]);
const COLLEI = new character("Collei", BOSS_MATERIAL_INFO[12], TALENT_BOOK_INFO[11]);

//SPECIAL CASE TALENTS FIXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
const DENDRO_LUMINE = new character("Lumine (Traveler)", null, TALENT_BOOK_INFO[0]);
const DENDRO_TRAVELER = new character("Aether (Traveler)", null, TALENT_BOOK_INFO[0]);
/////////////////////////////////////////////////////////////////////////////////


//CRYO CHARACTERS
const SHENHE = new character("Shenhe", BOSS_MATERIAL_INFO[3], TALENT_BOOK_INFO[0]);
const EULA = new character("Eula", BOSS_MATERIAL_INFO[4], TALENT_BOOK_INFO[5]);
const GANYU = new character("Ganyu", BOSS_MATERIAL_INFO[5], TALENT_BOOK_INFO[4]);
const QIQI = new character("Qiqi", BOSS_MATERIAL_INFO[5], TALENT_BOOK_INFO[0]);
const AYAKA = new character("Kamisato Ayaka", BOSS_MATERIAL_INFO[15], TALENT_BOOK_INFO[6]);
const LAYLA = new character("Layla", BOSS_MATERIAL_INFO[0], TALENT_BOOK_INFO[7]);
const ROSARIA = new character("Rosaria", BOSS_MATERIAL_INFO[5], TALENT_BOOK_INFO[8]);
const DIONA = new character("Diona", BOSS_MATERIAL_INFO[5], TALENT_BOOK_INFO[1]);
const ALOY = new character("Aloy", BOSS_MATERIAL_INFO[4], TALENT_BOOK_INFO[1]);
const CHONGYUN = new character("Chongyun", BOSS_MATERIAL_INFO[5], TALENT_BOOK_INFO[4]);
const KAEYA = new character("Kaeya", BOSS_MATERIAL_INFO[5], TALENT_BOOK_INFO[8]);

//GEO CHARACTERS
const ITTO = new character("Arataki Itto", BOSS_MATERIAL_INFO[10], TALENT_BOOK_INFO[6]);
const ALBEDO = new character("Albedo", BOSS_MATERIAL_INFO[9], TALENT_BOOK_INFO[8]);
const ZHONGLI = new character("Zhongli", BOSS_MATERIAL_INFO[9], TALENT_BOOK_INFO[9]);
const YUNJIN = new character("Yun Jin", BOSS_MATERIAL_INFO[10], TALENT_BOOK_INFO[4]);
const GOROU = new character("Gorou", BOSS_MATERIAL_INFO[15], TALENT_BOOK_INFO[10]);
const NOELLE = new character("Noelle", BOSS_MATERIAL_INFO[9], TALENT_BOOK_INFO[5]);
const NINGGUANG = new character("Ningguang", BOSS_MATERIAL_INFO[9], TALENT_BOOK_INFO[0]);

//SPECIAL CASE TALENTS FIXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
const GEO_LUMINE = new character("Lumine (Traveler)", null, TALENT_BOOK_INFO[0]);
const GEO_TRAVELER = new character("Aether (Traveler)", null, TALENT_BOOK_INFO[0]);
/////////////////////////////////////////////////////////////////////////////////