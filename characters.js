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
]

//PYRO CHARACTERS
const YOIMIYA = new character("Yoimiya", "Pyro Hypostasis", TALENT_BOOK_INFO[2]);
const HUTAO = new character("Hu Tao", "Primo Geovishap", TALENT_BOOK_INFO[4]);
const KLEE = new character("Klee", "Pyro Regisvine", TALENT_BOOK_INFO[1]);
const DILUC = new character("Diluc", "Pyro Regisvine", TALENT_BOOK_INFO[5]);
const THOMA = new character("Thoma", "Pyro Hypostasis", TALENT_BOOK_INFO[2]);
const XIANGLING = new character("Xiangling", "Pyro Regisvine", TALENT_BOOK_INFO[4]);
const YANFEI = new character("Yanfei", "Primo Geovishap", TALENT_BOOK_INFO[9]);
const XINYAN = new character("Xinyan", "Pyro Regisvine", TALENT_BOOK_INFO[9]);
const BENNETT = new character("Bennett", "Pyro Regisvine", TALENT_BOOK_INFO[5]);
const AMBER = new character("Amber", "Pyro Regisvine", TALENT_BOOK_INFO[1])

//HYDRO CHARACTERS
const NILOU = new character("Nilou", "Aeonblight Drake", TALENT_BOOK_INFO[11]);
const AYATO = new character("Kamisato Ayato", "Hydro Hypostasis", TALENT_BOOK_INFO[4]);
const YELAN = new character("Yelan", "Ruin Serpent", TALENT_BOOK_INFO[0]);
const MONA = new character("Mona", "Oceanid", TALENT_BOOK_INFO[5]);
const CHILDE = new character("Tartaglia", "Oceanid", TALENT_BOOK_INFO[1]);
const CANDACE = new character("Candace", "Algorithm of Semi-Intransient Matrix of Overseer Network", TALENT_BOOK_INFO[3]);
const XINGQIU = new character("Xingqiu", "Oceanid", TALENT_BOOK_INFO[9]);
const BARBARA = new character("Barbara", "Oceanid", TALENT_BOOK_INFO[8]);
const KOKOMI = new character("Sangonomiya Kokomi", "Hydro Hypostasis", TALENT_BOOK_INFO[2]);

//ANEMO CHARACTERS
const WANDERER = new character("Wanderer", "Aeonblight Drake", TALENT_BOOK_INFO[11]);
const KAZUHA = new character("Kaedehara Kazuha", "Maguu Kenki", TALENT_BOOK_INFO[4]);
const XIAO = new character("Xiao", "Primo Geovishap", TALENT_BOOK_INFO[0]);
const VENTI = new character("Venti", "Anemo Hypostasis", TALENT_BOOK_INFO[8]);
const JEAN = new character("Jean", "Anemo Hypostasis", TALENT_BOOK_INFO[5]);
const FARUZAN = new character("Faruzan", "Algorithm of Semi-Intransient Matrix of Overseer Network", TALENT_BOOK_INFO[3]);
const HEIZOU = new character("Shikanoin Heizou", "Ruin Serpent", TALENT_BOOK_INFO[2]);
const SAYU = new character("Sayu", "Maguu Kenki", TALENT_BOOK_INFO[10]);
const SUCROSE = new character("Sucrose", "Anemo Hypostasis", TALENT_BOOK_INFO[1]);

//SPECIAL CASE TALENTS FIXXXXXXXXXXXXXXXXXXXX
const ANEMO_LUMINE = new character("Lumine (Traveler)", "None", TALENT_BOOK_INFO[0]);
const ANEMO_AETHER = new character("Aether (Traveler", "None",TALENT_BOOK_INFO[0]);
///////////////////////////////////////////////////////////////////////

//ELECTRO CHARACTERS
const CYNO = new character("Cyno", "Electro Regisvine", TALENT_BOOK_INFO[3]);
const YAEMIKO = new character("Yae Miko", "Bathysmal Vishap Herd", TALENT_BOOK_INFO[10]);
const RAIDEN = new character("Raiden Shogun", "Thunder Manifestation", TALENT_BOOK_INFO[10]);
const KEQING = new character("Keqing", "Electro Hypostasis", TALENT_BOOK_INFO[0]);
const FISCHL = new character("Fischl", "Electro Hypostasis", TALENT_BOOK_INFO[8]);
const DORI = new character("Dori", "Electro Regisvine", TALENT_BOOK_INFO[7]);
const KUKI = new character("Kuki Shinobu", "Ruin Serpent", TALENT_BOOK_INFO[6]);
const SARA = new character("Kujou Sara", "Thunder Manifestation", TALENT_BOOK_INFO[6]);
const BEIDOU = new character("Bennett", "Electro Hypostasis", TALENT_BOOK_INFO[9]);
const RAZOR = new character("Razor", "Electro Hypostasis", TALENT_BOOK_INFO[5]);
const LISA = new character("Lisa", "Electro Hypostasis", TALENT_BOOK_INFO[8]);

//SPECIAL CASE TALENTS FIXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
const ELECTRO_LUMINE = new character("Lumine (Traveler)", "None", TALENT_BOOK_INFO[0]);
const ELECTRO_TRAVELER = new character("Aether (Traveler)", "None", TALENT_BOOK_INFO[0]);
/////////////////////////////////////////////////////////////////////////////////

//DENDRO CHARACTERS
const ALHAITHAM = new character("Alhaitham", "Setekh Wenut", TALENT_BOOK_INFO[7]);
const NAHIDA = new character("Nahida", "Dendro Hypostasis", TALENT_BOOK_INFO[7]);
const TIGHNARI = new character("Tighnari", "Jadeplume Terrorshroom", TALENT_BOOK_INFO[3]);
const YAOYAO = new character("Yaoyao", "Dendro Hypostasis", TALENT_BOOK_INFO[4]);
const COLLEI = new character("Collei", "Jadeplume Terrorshroom", TALENT_BOOK_INFO[11]);

//SPECIAL CASE TALENTS FIXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
const DENDRO_LUMINE = new character("Lumine (Traveler)", "None", TALENT_BOOK_INFO[0]);
const DENDRO_TRAVELER = new character("Aether (Traveler)", "None", TALENT_BOOK_INFO[0]);
/////////////////////////////////////////////////////////////////////////////////


//CRYO CHARACTERS
const SHENHE = new character("Shenhe", "Bathysmal Vishap Herd", TALENT_BOOK_INFO[0]);
const EULA = new character("Eula", "Cryo Hypostasis", TALENT_BOOK_INFO[5]);
const GANYU = new character("Ganyu", "Cryo Regisvine", TALENT_BOOK_INFO[4]);
const QIQI = new character("Qiqi", "Cryo Hypostasis", TALENT_BOOK_INFO[0]);
const AYAKA = new character("Kamisato Ayaka", "Perpetual Mechanical Array", TALENT_BOOK_INFO[6]);
const LAYLA = new character("Layla", "Aeonblight Drake", TALENT_BOOK_INFO[7]);
const ROSARIA = new character("Rosaria", "Cryo Regisvine", TALENT_BOOK_INFO[8]);
const DIONA = new character("Diona", "Cryo Regisvine", TALENT_BOOK_INFO[1]);
const ALOY = new character("Aloy", "Cryo Hypostasis", TALENT_BOOK_INFO[1]);
const CHONGYUN = new character("Chongyun", "Cryo Regisvine", TALENT_BOOK_INFO[4]);
const KAEYA = new character("Kaeya", "Cryo Regisvine", TALENT_BOOK_INFO[8]);

//GEO CHARACTERS
const ITTO = new character("Arataki Itto", "Golden Wolflord", TALENT_BOOK_INFO[6]);
const ALBEDO = new character("Albedo", "Geo Hypostasis", TALENT_BOOK_INFO[8]);
const ZHONGLI = new character("Zhongli", "Geo Hypostasis", TALENT_BOOK_INFO[9]);
const YUNJIN = new character("Yun Jin", "Golden Wolflord", TALENT_BOOK_INFO[4]);
const GOROU = new character("Gorou", "Perpetual Mechanical Array", TALENT_BOOK_INFO[10]);
const NOELLE = new character("Noelle", "Geo Hypostasis", TALENT_BOOK_INFO[5]);
const NINGGUANG = new character("Ningguang", "Geo Hypostasis", TALENT_BOOK_INFO[0]);

//SPECIAL CASE TALENTS FIXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
const GEO_LUMINE = new character("Lumine (Traveler)", "None", TALENT_BOOK_INFO[0]);
const GEO_TRAVELER = new character("Aether (Traveler)", "None", TALENT_BOOK_INFO[0]);
/////////////////////////////////////////////////////////////////////////////////