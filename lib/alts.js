var janin = {};
var networks = [

    {
        name: "Auroracoin",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.auroracoin;
            coin.versions.bip44 =85; return coin
        },
    },
    {
        name: "Bata",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.batacoin;
            coin.versions.bip44 =89; return coin
        },
    },
    {
        name: "Bitcoin",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.bitcoin;
            coin.versions.bip44 =0; return coin
        },
    },
    {
        name: "BitcoinCash",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.bitcoincash;
            coin.versions.bip44 =145; return coin
        },
    },
    {
        name: "BitcoinGold",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.bitcoingold;
            coin.versions.bip44 =156; return coin
        },
    },
    {
        name: "Blackcoin",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.blackcoin;
            coin.versions.bip44 =10; return coin
        },
    },
    {
        name: "Bitcoin Testnet",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.testnet;
            coin.versions.bip44 =1; return coin
        },
    },
    {
        name: "Clams",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.clam;
            coin.versions.bip44 =23; return coin
        },
    },
    {
        name: "Dash",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.dash;
            coin.versions.bip44 =5; return coin
        },
    },
    {
        name: "Dogecoin",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.dogecoin;
            coin.versions.bip44 =3; return coin
        },
    },
    {
        name: "NuBits",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.nubits;
            coin.versions.bip44 =12; return coin
        },
    },
    {
        name: "NuShares",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.nushares;
            coin.versions.bip44 =11; return coin
        },
    },
    {
        name: "Litecoin",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.litecoin;
            coin.versions.bip44 =2; return coin
        },
    },
    {
        name: "Potcoin",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.potcoin;
            coin.versions.bip44 =81; return coin
        },
    },
    {
        name: "Feathercoin",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.feathercoin;
            coin.versions.bip44 =8; return coin
        },
    },
    {
        name: "Gridcoin",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.gridcoin;
            coin.versions.bip44 =84; return coin
        },
    },
    {
        name: "Novacoin",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.novacoin;
            coin.versions.bip44 =50; return coin
        },
    },
    {
        name: "Cannacoin",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.cannacoin;
            coin.versions.bip44 =19; return coin
        },
    },
    {
         name: "Kobocoin",
         attachCoinPath: function(coin) {
            //network =bitcoin.networks.kobocoin;
            coin.versions.bip44 =196; return coin
        },
    },
    {
         name: "Komodo",
         attachCoinPath: function(coin) {
            //network =bitcoin.networks.komodo;
            coin.versions.bip44 =141; return coin
        },
    },
    {
        name: "Callisto",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.clo;
            coin.versions.bip44 =820; return coin
        },
    },
    {
        name: "Clubcoin",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.clubcoin;
            coin.versions.bip44 =79; return coin
        },
    },
    {
        name: "Digibyte",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.digibyte;
            coin.versions.bip44 =20; return coin
        },
    },
    {
        name: "Digitalcoin",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.digitalcoin;
            coin.versions.bip44 =18; return coin
        },
    },
    {
        name: "EDRCoin",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.edrcoin;
            coin.versions.bip44 =56; return coin
        },
    },
    {
        name: "E-Gulden",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.egulden;
            coin.versions.bip44 =78; return coin
        },
    },
    {
        name: "Gulden",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.gulden;
            coin.versions.bip44 =87; return coin
        },
    },
    {
        name: "GCRCoin",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.gcrcoin;
            coin.versions.bip44 =49; return coin
        },
    },
    {
        name: "Jumbucks",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.jumbucks;
            coin.versions.bip44 =26; return coin
        },
    },
    {
        name: "Monacoin",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.monacoin;
            coin.versions.bip44 =22; return coin
        },
    },
    {
        name: "Myriadcoin",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.myriadcoin;
            coin.versions.bip44 =90; return coin
        },
    },
    {
        name: "Neoscoin",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.neoscoin;
            coin.versions.bip44 =25; return coin
        },
    },
    {
        name: "ParkByte",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.parkbyte;
            coin.versions.bip44 =36; return coin
        },
    },
    {
        name: "Peercoin",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.peercoin;
            coin.versions.bip44 =6; return coin
        },
    },
    {
        name: "Pesobit",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.pesobit;
            coin.versions.bip44 =62; return coin
        },
    },
    {
        name: "Primecoin",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.primecoin;
            coin.versions.bip44 =24; return coin
        },
    },
    {
        name: "Reddcoin",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.reddcoin;
            coin.versions.bip44 =4; return coin
        },
    },
    {
        name: "Rubycoin",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.rubycoin;
            coin.versions.bip44 =16; return coin
        },
    },
            {
        name: "ShadowCash",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.shadow;
            coin.versions.bip44 =35; return coin
        },
    },
    {
        name: "ShadowCash Testnet",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.shadowtn;
            coin.versions.bip44 =1; return coin
        },
    },
    {
        name: "Smileycoin",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.smileycoin;
            coin.versions.bip44 =59; return coin
        },
    },
    {
        name: "Solarcoin",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.solarcoin;
            coin.versions.bip44 =58; return coin
        },
    },
    {
        name: "Syscoin",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.syscoin;
            coin.versions.bip44 =57; return coin
        },
    },
    {
        name: "Unobtanium",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.unobtanium;
            coin.versions.bip44 =92; return coin
        },
    },
    {
        name: "Vergecoin",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.vergecoin;
            coin.versions.bip44 =77; return coin
        },
    },
    {
        name: "Vertcoin",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.vertcoin;
            coin.versions.bip44 =28; return coin
        },
    },
            {
        name: "Viacoin",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.viacoin;
            coin.versions.bip44 =14; return coin
        },
    },
    {
        name: "Viacoin Testnet",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.viacointestnet;
            coin.versions.bip44 =1; return coin
        },
    },
    {
        name: "Vpncoin",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.vpncoin;
            coin.versions.bip44 =33; return coin
        },
    },
    {
        name: "Richcoin",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.richcoin;
            coin.versions.bip44 =80; return coin
        },
    },
    {
        name: "Ethereum",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.eth;
            coin.versions.bip44 =60; return coin
        },
    },
    {
        name: "Ethereum Classic",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.etc;
            coin.versions.bip44 =61; return coin
        },
    },
    {
        name: "PIVX",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.pivx;
            coin.versions.bip44 =119; return coin
        },
    },
    {
        name: "Abncoin",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.abncoin;
            coin.versions.bip44 =141; return coin
        },
    },
    {
        name: "Asiancoin",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.asiacoin;
            coin.versions.bip44 =51; return coin
        },
    },
    {
        name: "BitcoinPlus",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.bitcoinplus;
            coin.versions.bip44 =65; return coin
        },
    },
    {
        name: "Canada eCoin",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.canadaecoin;
            coin.versions.bip44 =34; return coin
        },
    },
    {
        name: "Einsteinium",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.einsteinium;
            coin.versions.bip44 =41; return coin
        },
    },
    {
        name: "Expanse",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.expanse;
            coin.versions.bip44 =40; return coin
        },
    },
    {
        name: "Gamecredits",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.gamecredits;
            coin.versions.bip44 =101; return coin
        },
    },
    {
        name: "Internet of People",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.iop;
            coin.versions.bip44 =66; return coin
        },
    },
    {
        name: "IXCoin",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.ixcoin;
            coin.versions.bip44 =86; return coin
        },
    },
    {
        name: "Landcoin",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.landcoin;
            coin.versions.bip44 =63; return coin
        },
    },
    {
        name: "Namecoin",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.namecoin;
            coin.versions.bip44 =7; return coin
        },
    },
    {
        name: "Navcoin",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.navcoin;
            coin.versions.bip44 =130; return coin
        },
    },
    {
        name: "OKCash",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.okcash;
            coin.versions.bip44 =69; return coin
        },
    },
    {
        name: "POSWcoin",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.posw;
            coin.versions.bip44 =47; return coin
        },
    },
    {
        name: "Stratis",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.stratis;
            coin.versions.bip44 =105; return coin
        },
    },
    {
        name: "ZCash",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.zcash;
            coin.versions.bip44 =133; return coin
        },
    },
    {
        name: "Bela",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.bela;
            coin.versions.bip44 =73; return coin
        },
    },
    {
        name: "Britcoin",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.britcoin;
            coin.versions.bip44 =70; return coin
        },
    },
    {
        name: "Compcoin",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.compcoin;
            coin.versions.bip44 =74; return coin
        },
    },
    {
        name: "LBRY",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.lbry;
            coin.versions.bip44 =140; return coin
        },
    },
    {
        name: "ZCoin",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.zcoin;
            coin.versions.bip44 =136; return coin
        },
    },
    {
        name: "Insane",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.insane;
            coin.versions.bip44 =68; return coin
        },
    },
    {
        name: "Ultimatesecurecash",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.ultimatesecurecash;
            coin.versions.bip44 =112; return coin
        },
    },
    {
        name: "Neurocoin",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.neurocoin;
            coin.versions.bip44 =110; return coin
        },
    },
    {
        name: "Hempcoin",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.hempcoin;
            coin.versions.bip44 =113; return coin
        },
    },
    {
        name: "Linxcoin",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.linxcoin;
            coin.versions.bip44 =114; return coin
        },
    },
    {
        name: "Ecoin",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.ecoin;
            coin.versions.bip44 =115; return coin
        },
    },
    {
        name: "Denarius",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.denarius;
            coin.versions.bip44 =116; return coin
        },
    },
    {
        name: "Pinkcoin",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.pinkcoin;
            coin.versions.bip44 =117; return coin
        },
    },
    {
        name: "Flashcoin",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.flashcoin;
            coin.versions.bip44 =120; return coin
        },
    },
    {
        name: "Defcoin",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.defcoin;
            coin.versions.bip44 =1337; return coin
        },
    },
    {
        name: "Zencash",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.zencash;
            coin.versions.bip44 =121; return coin
        },
    },
    {
        name: "Putincoin",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.putincoin;
            coin.versions.bip44 =122; return coin
        },
    },/*
    {
        name: "Smartcash",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.smartcash;
            coin.versions.bip44 =224; return coin
        },
    },*/
    {
        name: "Fujicoin",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.fujicoin;
            coin.versions.bip44 =75; return coin
        },
    },
    {
        name: "Mix",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.mix;
            coin.versions.bip44 =76; return coin
        },
    },
    {
        name: "Voxels",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.voxels;
            coin.versions.bip44 =129; return coin
        },
    },
    {
        name: "Crown",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.crown;
            coin.versions.bip44 =72; return coin
        },
    },
    {
        name: "Vcash",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.vcash;
            coin.versions.bip44 =127; return coin
        },
    },
    {
        name: "Bridgecoin",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.bridgecoin;
            coin.versions.bip44 =162; return coin
        },
    },
    {
        name: "Bitsend",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.bitsend;
            coin.versions.bip44 =91; return coin
        },
    },
    {
        name: "Bitcore",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.bitcore;
            coin.versions.bip44 =160; return coin
        },
    },
    {
        name: "Europecoin",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.europecoin;
            coin.versions.bip44 =151; return coin
        },
    },
    {
        name: "Toacoin",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.toacoin;
            coin.versions.bip44 =159; return coin
        },
    },
    {
        name: "Diamond",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.diamond;
            coin.versions.bip44 =152; return coin
        },
    },
    {
        name: "Adcoin",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.adcoin;
            coin.versions.bip44 =161; return coin
        },
    },
    {
        name: "Helleniccoin",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.helleniccoin;
            coin.versions.bip44 =168; return coin
        },
    },
    {
        name: "Firstcoin",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.firstcoin;
            coin.versions.bip44 =167; return coin
        },
    },
    {
        name: "Vivo",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.vivo;
            coin.versions.bip44 =166; return coin
        },
    },
    {
        name: "Whitecoin",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.whitecoin;
            coin.versions.bip44 =155; return coin
        },
    },
    {
        name: "Gobyte",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.gobyte;
            coin.versions.bip44 =176; return coin
        },
    },/*
    {
        name: "Groestlcoin",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.groestlcoin;
            coin.versions.bip44 =17; return coin
        },
    },*/
    {
        name: "Newyorkcoin",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.newyorkcoin;
            coin.versions.bip44 =179; return coin
        },
    },
    {
        name: "Omni",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.omni;
            coin.versions.bip44 =200; return coin
        },
    },
    {
        name: "Tether",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.tether;
            coin.versions.bip44 =200; return coin
        },
    },
    {
        name: "BitcoinZ",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.bitcoinz;
            coin.versions.bip44 =177; return coin
        },
    },
    {
        name: "Poa",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.poa;
            coin.versions.bip44 =178; return coin
        },
    },
    {
        name: "BitcoinAtom",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.bitcoinatom;
            coin.versions.bip44 =185; return coin
        },
    },
    {
        name: "Crave",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.crave;
            coin.versions.bip44 =186; return coin
        },
    },
    {
        name: "ExclusiveCoin",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.exclusivecoin;
            coin.versions.bip44 =190; return coin
        },
    },
    {
        name: "Lynx",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.lynx;
            coin.versions.bip44 =191; return coin
        },
    },
    {
        name: "Minexcoin",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.minexcoin;
            coin.versions.bip44 =182; return coin
        },
    },
    {
        name: "Musicoin",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.musicoin;
            coin.versions.bip44 =184; return coin
        },
    },
    {
        name: "Wincoin",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.wincoin;
            coin.versions.bip44 =181; return coin
        },
    },
    {
        name: "Zclassic",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.zclassic;
            coin.versions.bip44 =147; return coin
        },
    },
    {
        name: "Litecoincash",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.litecoincash;
            coin.versions.bip44 =192; return coin
        },
    },
    {
        name: "BitcoinPrivate",
        attachCoinPath: function(coin) {
            //network =bitcoin.networks.bitcoinprivate;
            coin.versions.bip44 =183; return coin
        },
    },
]  
janin.currency = {
    createCurrency: function (unit, name, networkVersion, privateKeyPrefix, WIF_Start, CWIF_Start, isPublic, isPrivate, msg, ethereum) {
        var networkCoinPath = networks.filter(function(network){return network.name.toLocaleLowerCase() === name})
        //console.log("COIN PATH", networkCoinPath, name)
        var currency = {};
        currency.unit = unit
        currency.name = name;
        currency.networkVersion = networkVersion;
        currency.privateKeyPrefix = privateKeyPrefix;
        currency.WIF_Start = WIF_Start;
        currency.CWIF_Start = CWIF_Start;
        currency.versions = {bip32:{}}
        currency.versions.bip32.public = isPublic
        currency.versions.bip32.private = isPrivate
        currency.public = networkVersion
        currency.private = privateKeyPrefix
        currency.scripthash = WIF_Start
        currency.isEthereum = ethereum
        currency.msgStart = msg
        currency.messagePrefix = msg
        if (networkCoinPath.length > 0){
            currency = networkCoinPath[0].attachCoinPath(currency)
        } else {
            currency.versions.bip44 = 0
        }
        return currency;
    },
    name: function() {
        return janin.selectedCurrency.name;
    },

    networkVersion: function() {
        return janin.selectedCurrency.networkVersion;
    },

    privateKeyPrefix: function() {
        return janin.selectedCurrency.privateKeyPrefix;
    },

    WIF_RegEx: function() {
        return new RegExp("^" + janin.selectedCurrency.WIF_Start + "[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{50}$");
    },

    CWIF_RegEx: function() {
        return new RegExp("^" + janin.selectedCurrency.CWIF_Start + "[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{51}$");
    },
};

janin.currencies = [
    janin.currency.createCurrency("2give","2give",39,167,6,"R",null,null,null,false),
    janin.currency.createCurrency("42","42coin",8,136,5,"M",null,null,null,false),
    janin.currency.createCurrency("abncoin","abncoin",25,153,85,null,76067358,76066276,"Abncoin Signed Message",false),
    janin.currency.createCurrency("acoin","acoin",23,230,8,"b",null,null,null,false),
    janin.currency.createCurrency("adcoin","adcoin",23,151,5,null,76067358,76066276,"AdCoin Signed Message",false),
    janin.currency.createCurrency("aga","agacoin",83,211,8,"Y",null,null,null,false),
    janin.currency.createCurrency("alf","alphacoin",82,210,8,"Y",null,null,null,false),
    janin.currency.createCurrency("alqo","alqo",23,193,7,"V",null,null,null,false),
    janin.currency.createCurrency("ani","animecoin",23,151,6,"P",null,null,null,false),
    janin.currency.createCurrency("anc","anoncoin",23,151,6,"P",null,null,null,false),
    janin.currency.createCurrency("apex","apexcoin",23,151,6,"P",null,null,null,false),
    janin.currency.createCurrency("arco","aquariuscoin",23,151,6,"P",null,null,null,false),
    janin.currency.createCurrency("asiacoin","asiacoin",23,151,8,null,76067358,76066276,"Asiacoin Signed Message",false),
    janin.currency.createCurrency("aur","auroracoin",23,151,5,"T",76067358,76066276,"Auroracoin Signed Message",false),
    janin.currency.createCurrency("axe","axe",75,203,7,"X",null,null,null,false),
    janin.currency.createCurrency("batacoin","batacoin",25,153,5,null,76067358,76066276,"Bata Signed Message",false),
    janin.currency.createCurrency("bqc","bbqcoin",85,213,6,"T",null,null,null,false),
    janin.currency.createCurrency("bela","bela",25,153,5,null,76067358,76066276,"Belacoin Signed Message",false),
    janin.currency.createCurrency("bbp","biblepay",25,182,7,"[TU]",null,null,null,false),
    janin.currency.createCurrency("brd","birdcoin",47,175,6,"[ST]",null,null,null,false),
    janin.currency.createCurrency("btc","bitcoin",0,128,5,"[LK]",76067358,76066276,"Bitcoin Signed Message",false),
    janin.currency.createCurrency("bitcoinatom","bitcoinatom",23,128,10,null,76067358,76066276,"Bitcoin Signed Message",false),
    janin.currency.createCurrency("bch","bitcoincash",0,128,5,"[LK]",76067358,76066276,"Bitcoin Signed Message",false),
    janin.currency.createCurrency("btcd","bitcoindark",60,188,7,"U",null,null,null,false),
    janin.currency.createCurrency("btg","bitcoingold",38,128,23,"[LK]",76067358,76066276,"Bitcoin Gold Signed Message",false),
    janin.currency.createCurrency("bitcoinplus","bitcoinplus",25,153,85,null,76067358,76066276,"Bitcoinplus Signed Message",false),
    janin.currency.createCurrency("btcp","bitcoinprivate",4901,128,5039,null,76067358,76066276,"Zcash Signed Message",false),
    janin.currency.createCurrency("bitcoinz","bitcoinz",7352,128,7357,null,76067358,76066276,"BitcoinZ Signed Message",false),
    janin.currency.createCurrency("bitcore","bitcore",0,128,5,null,76067358,76066276,"BitCore Signed Message",false),
    janin.currency.createCurrency("bitsend","bitsend",102,204,5,null,50221816,50221772,"Bitsend Signed Message",false),
    janin.currency.createCurrency("synq","bitsynq",63,191,7,"V",null,null,null,false),
    janin.currency.createCurrency("zny","bitzeny",81,128,5,"[LK]",null,null,null,false),
    janin.currency.createCurrency("blk","blackcoin",25,153,85,"P",76067358,76066276,"BlackCoin Signed Message",false),
    janin.currency.createCurrency("jack","blackjack",21,149,[56],"P",null,null,null,false),
    janin.currency.createCurrency("block","blocknet",26,154,6,"P",null,null,null,false),
    janin.currency.createCurrency("boli","bolivarcoin",85,213,8,"Y",null,null,null,false),
    janin.currency.createCurrency("boxy","boxycoin",75,203,7,"X",null,null,null,false),
    janin.currency.createCurrency("bridgecoin","bridgecoin",27,176,50,null,76067358,76066276,"bridgecoin Signed Message",false),
    janin.currency.createCurrency("britcoin","britcoin",25,153,85,null,76067358,76066276,"Britcoin Signed Message",false),
    janin.currency.createCurrency("bun","bunnycoin",26,154,6,"P",null,null,null,false),
    janin.currency.createCurrency("c2","c2coin",28,156,6,"Q",null,null,null,false),
    janin.currency.createCurrency("cage","cagecoin",31,159,6,"Q",null,null,null,false),
    janin.currency.createCurrency("cmpco","campuscoin",28,156,6,"Q",null,null,null,false),
    janin.currency.createCurrency("cdn","canadaecoin",28,156,5,"Q",76067358,76066276,"Canada eCoin Signed Message",false),
    janin.currency.createCurrency("cann","cannabiscoin",28,156,6,"Q",null,null,null,false),
    janin.currency.createCurrency("cannacoin","cannacoin",28,156,5,null,76067358,76066276,"Cannacoin Signed Message",false),
    janin.currency.createCurrency("cpc","capricoin",28,156,6,"Q",null,null,null,false),
    janin.currency.createCurrency("cash","cashcoin",34,162,6,"[QR]",null,null,null,false),
    janin.currency.createCurrency("cdt","cassubiandetk",30,158,6,"Q",null,null,null,false),
    janin.currency.createCurrency("cat","catcoin",21,149,[56],"P",null,null,null,false),
    janin.currency.createCurrency("chc","chaincoin",28,156,6,"Q",null,null,null,false),
    janin.currency.createCurrency("clam","clam",137,null,133,null,2831314276,2831251494,null,false),
    janin.currency.createCurrency("clo","clo",255,255,null,4294967295,4294967295,null,true),
    janin.currency.createCurrency("clubcoin","clubcoin",28,153,85,null,76067358,76066276,"Clubcoin Signed Message",false),
    janin.currency.createCurrency("colx","colossuscoinxt",30,212,5,"[LK]",null,null,null,false),
    janin.currency.createCurrency("compcoin","compcoin",28,156,5,null,76067358,76066276,"Compcoin Signed Message",false),
    janin.currency.createCurrency("rain","condensate",60,188,7,"U",null,null,null,false),
    janin.currency.createCurrency("xcpo","copico",28,144,5,"N",null,null,null,false),
    janin.currency.createCurrency("copper","coppercoin",28,156,6,"Q",null,null,null,false),
    janin.currency.createCurrency("corg","corgicoin",28,156,6,"Q",null,null,null,false),
    janin.currency.createCurrency("coval","coval",0,128,5,"[LK]",null,null,null,false),
    janin.currency.createCurrency("crave","crave",70,153,85,null,76067358,76066276,"DarkNet Signed Message",false),
    janin.currency.createCurrency("crown","crown",0,128,28,null,76067358,76066276,"Crown Signed Message",false),
    janin.currency.createCurrency("cbx","cryptobullion",11,139,5,"M",null,null,null,false),
    janin.currency.createCurrency("ccb","cryptoclub",35,163,6,"R",null,null,null,false),
    janin.currency.createCurrency("cesc","cryptoescudo",28,156,6,"Q",null,null,null,false),
    janin.currency.createCurrency("xcn","cryptonite",28,128,5,"[LK]",null,null,null,false),
    janin.currency.createCurrency("cwis","cryptowisdomcoin",73,135,5,"[LM]",null,null,null,false),
    janin.currency.createCurrency("dash","dash",76,204,16,"X",50221816,50221772,"DarkCoin Signed Message",false),
    janin.currency.createCurrency("deaf","deafdollars",48,176,6,"T",null,null,null,false),
    janin.currency.createCurrency("onion","deeponion",31,159,6,"Q",null,null,null,false),
    janin.currency.createCurrency("defcoin","defcoin",30,158,5,null,76067358,76066276,"defcoin Signed Message",false),
    janin.currency.createCurrency("denarius","denarius",30,158,90,null,76067358,76066276,"Denarius Signed Message",false),
    janin.currency.createCurrency("dem","deutsche emark",53,181,7,"T",null,null,null,false),
    janin.currency.createCurrency("dvc","devcoin",0,128,5,"[LK]",null,null,null,false),
    janin.currency.createCurrency("diamond","diamond",90,218,8,null,76067358,76066276,"Diamond Signed Message",false),
    janin.currency.createCurrency("dgb","digibyte",30,128,5,"Q",76067358,76066276,"Digibyte Signed Message",false),
    janin.currency.createCurrency("dgc","digitalcoin",30,158,5,"Q",76067358,76066276,"Digitalcoin Signed Message",false),
    janin.currency.createCurrency("dime","dimecoin",15,143,5,"N",null,null,null,false),
    janin.currency.createCurrency("note","dnotes",31,159,6,"Q",null,null,null,false),
    janin.currency.createCurrency("doge","dogecoin",30,158,22,"Q",49990397,49988504,"Dogecoin Signed Message",false),
    janin.currency.createCurrency("xvg","dogecoindark",30,158,6,"Q",null,null,null,false),
    janin.currency.createCurrency("ecoin","ecoin",92,220,20,null,76067358,76066276,"eCoin Signed Message",false),
    janin.currency.createCurrency("edrcoin","edrcoin",93,221,28,null,76067358,76066276,"EDRcoin Signed Message",false),
    janin.currency.createCurrency("efl","egulden",48,176,5,"T",76067358,76066276,"e-Gulden Signed Message",false),
    janin.currency.createCurrency("einsteinium","einsteinium",33,161,5,null,76067358,76066276,"Einsteinium Signed Message",false),
    janin.currency.createCurrency("krn","ekrona",45,173,6,"S",null,null,null,false),
    janin.currency.createCurrency("eca","electra",33,161,6,"Q",null,null,null,false),
    janin.currency.createCurrency("emb","ember",92,50,2,"8",null,null,null,false),
    janin.currency.createCurrency("emd","emerald",34,162,6,"[QR]",null,null,null,false),
    janin.currency.createCurrency("emc","emercoin",33,128,5,"[LK]",null,null,null,false),
    janin.currency.createCurrency("enrg","energycoin",92,220,8,"Z",null,null,null,false),
    janin.currency.createCurrency("esp","espers",33,144,5,"N",null,null,null,false),
    janin.currency.createCurrency("etc","etc",255,255,null,null,4294967295,4294967295,null,true),
    janin.currency.createCurrency("eth","eth",255,255,null,null,4294967295,4294967295,null,true),
    janin.currency.createCurrency("europecoin","europecoin",33,168,5,null,76067358,76066276,"Bitcoin Signed Message",false),
    janin.currency.createCurrency("exclusivecoin","exclusivecoin",33,161,137,null,76067358,76066276,"ExclusiveCoin Signed Message",false),
    janin.currency.createCurrency("expanse","expanse",255,255,null,4294967295,4294967295,null,true),
    janin.currency.createCurrency("fst","fastcoin",96,224,8,"a",null,null,null,false),
    janin.currency.createCurrency("ftc","feathercoin",14,142,5,"N",76067358,76066276,"Feathercoin Signed Message",false),
    janin.currency.createCurrency("tips","fedoracoin",33,128,5,"[KL]",null,null,null,false),
    janin.currency.createCurrency("fibre","fibre",35,163,6,"R",null,null,null,false),
    janin.currency.createCurrency("firstcoin","firstcoin",35,163,5,null,76067358,76066276,"FirstCoin Signed Message",false),
    janin.currency.createCurrency("flashcoin","flashcoin",68,196,130,null,76067358,76066276,"Flashcoin Signed Message",false),
    janin.currency.createCurrency("flo","florincoin",35,176,6,"T",null,null,null,false),
    janin.currency.createCurrency("flb","flurbo",35,48,6,"8",null,null,null,false),
    janin.currency.createCurrency("flt","fluttercoin",35,163,6,"R",null,null,null,false),
    janin.currency.createCurrency("fraz","frazcoin",35,163,6,"R",null,null,null,false),
    janin.currency.createCurrency("frc","freicoin",0,128,5,"[LK]",null,null,null,false),
    janin.currency.createCurrency("fud","fudcoin",35,163,6,"R",null,null,null,false),
    janin.currency.createCurrency("fc2","fuelcoin",36,128,5,"[KL]",null,null,null,false),
    janin.currency.createCurrency("fjc","fujicoin",36,164,16,"R",76067358,76066276,"FujiCoin Signed Message",false),
    janin.currency.createCurrency("gbn","gabencoin",16,144,5,"N",null,null,null,false),
    janin.currency.createCurrency("gamecredits","gamecredits",38,166,5,null,27108450,27106558,"Gamecredits Signed Message",false),
    janin.currency.createCurrency("grlc","garlicoin",38,176,6,"T",null,null,null,false),
    janin.currency.createCurrency("gcrcoin","gcrcoin",38,154,97,null,76067358,76066276,"GCR Signed Message",false),
    janin.currency.createCurrency("bsty","globalboost",38,166,6,"R",null,null,null,false),
    janin.currency.createCurrency("gobyte","gobyte",38,198,10,null,76067358,76066276,"DarkCoin Signed Message",false),
    janin.currency.createCurrency("good","goodcoin",38,166,6,"R",null,null,null,false),
    janin.currency.createCurrency("gridcoin","gridcoin",62,190,85,null,76067358,76066276,"Gridcoin Signed Message",false),
    janin.currency.createCurrency("grc","gridcoinresearch",62,190,7,"V",null,null,null,false),
    janin.currency.createCurrency("groestlcoin","groestlcoin",36,128,5,null,76067358,76066276,"GroestlCoin Signed Message",false),
    janin.currency.createCurrency("nlg","gulden",38,166,5,"R",76067358,76066276,"Gulden Signed Message",false),
    janin.currency.createCurrency("gun","guncoin",39,167,6,"R",null,null,null,false),
    janin.currency.createCurrency("ham","hamradiocoin",0,128,5,"LK",null,null,null,false),
    janin.currency.createCurrency("Helleniccoin","Helleniccoin",48,176,5,null,76067358,76066276,"helleniccoin Signed Message",false),
    janin.currency.createCurrency("hempcoin","hempcoin",40,168,8,null,76067358,76066276,"Hempcoin Signed Message",false),
    janin.currency.createCurrency("hfr","hfrcoin",16,144,5,"N",null,null,null,false),
    janin.currency.createCurrency("hodl","hodlcoin",40,168,5,"[LK]",null,null,null,false),
    janin.currency.createCurrency("html","htmlcoin",41,169,6,"S",null,null,null,false),
    janin.currency.createCurrency("hyp","hyperstake",117,245,9,"d",null,null,null,false),
    janin.currency.createCurrency("icash","icash",102,204,7,"X",null,null,null,false),
    janin.currency.createCurrency("mprm","imperiumcoin",48,176,6,"T",null,null,null,false),
    janin.currency.createCurrency("nka","incakoin",53,181,7,"T",null,null,null,false),
    janin.currency.createCurrency("icg","incognitocoin",0,128,5,"LK",null,null,null,false),
    janin.currency.createCurrency("infx","influxcoin",102,230,8,"b",null,null,null,false),
    janin.currency.createCurrency("insane","insane",102,55,57,null,76067358,76066276,"Insanecoin Signed Message",false),
    janin.currency.createCurrency("iop","iop",117,49,174,null,662737247,2922649334,"Internet of People Signed Message",false),
    janin.currency.createCurrency("ird","iridiumcoin",48,176,6,"T",null,null,null,false),
    janin.currency.createCurrency("ixc","ixcoin",138,128,5,"[LK]",76067358,76066276,"Ixcoin Signed Message",false),
    janin.currency.createCurrency("judge","judgecoin",43,171,6,"S",null,null,null,false),
    janin.currency.createCurrency("jumbucks","jumbucks",43,171,5,null,58353818,58352736,"Jumbucks Signed Message",false),
    janin.currency.createCurrency("khc","khcoin",48,176,6,"T",null,null,null,false),
    janin.currency.createCurrency("meow","kittehcoin",45,173,6,"S",null,null,null,false),
    janin.currency.createCurrency("kobocoin","kobocoin",35,163,28,null,76067358,76066276,"Kobocoin Signed Message",false),
    janin.currency.createCurrency("komodo","komodo",60,188,85,null,76067358,76066276,"Komodo Signed Message",false),
    janin.currency.createCurrency("lana","lanacoin",48,176,6,"T",null,null,null,false),
    janin.currency.createCurrency("landcoin","landcoin",48,176,122,null,76067358,76066276,"Landcoin Signed Message",false),
    janin.currency.createCurrency("lat","latium",23,128,5,"[LK]",null,null,null,false),
    janin.currency.createCurrency("lbry","lbry",85,28,122,null,27014479,27013400,"LBRYcrd Signed Message",false),
    janin.currency.createCurrency("lbry","lbry credits",85,128,5,"[LK]",null,null,null,false),
    janin.currency.createCurrency("linxcoin","linxcoin",75,203,5,null,76067358,76066276,"LinX Signed Message",false),
    janin.currency.createCurrency("ltc","litecoin",48,176,5,"T",27108450,27106558,"Litecoin Signed Message",false),
    janin.currency.createCurrency("litecoincash","litecoincash",28,176,50,null,76067358,76066276,"Litecoin Signed Message",false),
    janin.currency.createCurrency("ldoge","litedoge",90,171,6,"S",null,null,null,false),
    janin.currency.createCurrency("lmc","lomocoin",48,176,6,"T",null,null,null,false),
    janin.currency.createCurrency("lynx","lynx",45,173,50,null,76067358,76066276,"Lynx Signed Message",false),
    janin.currency.createCurrency("mbyt","madbytecoin",50,110,4,"H",null,null,null,false),
    janin.currency.createCurrency("mim","magicinternetmoney",48,176,6,"T",null,null,null,false),
    janin.currency.createCurrency("xmg","magicoin",20,148,5,"[NP]",null,null,null,false),
    janin.currency.createCurrency("mars","marscoin",50,178,6,"T",null,null,null,false),
    janin.currency.createCurrency("mxt","martexcoin",50,178,6,"T",null,null,null,false),
    janin.currency.createCurrency("MDOGE","masterdoge",51,139,5,"M",null,null,null,false),
    janin.currency.createCurrency("mzc","mazacoin",50,224,8,"a",null,null,null,false),
    janin.currency.createCurrency("mec","megacoin",50,178,6,"T",null,null,null,false),
    janin.currency.createCurrency("minexcoin","minexcoin",75,128,5,null,76067358,76066276,"Bitcoin Signed Message",false),
    janin.currency.createCurrency("mint","mintcoin",51,179,[67],"T",null,null,null,false),
    janin.currency.createCurrency("mix","mix",255,255,null,null,4294967295,4294967295,null,true),
    janin.currency.createCurrency("mobi","mobiuscoin",0,128,5,"[LK]",null,null,null,false),
    janin.currency.createCurrency("monacoin","monacoin",50,178,5,null,76067358,76066276,"Monacoin Signed Message",false),
    janin.currency.createCurrency("mu","monetaryunit",16,126,5,"K",null,null,null,false),
    janin.currency.createCurrency("mon","monocle",50,178,6,"T",null,null,null,false),
    janin.currency.createCurrency("moon","mooncoin",3,131,5,"L",null,null,null,false),
    janin.currency.createCurrency("musicoin","musicoin",255,255,null,null,4294967295,4294967295,null,true),
    janin.currency.createCurrency("xmy","myriadcoin",50,178,9,"T",76067358,76066276,"Myriadcoin Signed Message",false),
    janin.currency.createCurrency("nmc","namecoin",52,180,13,"[LK]",76067358,76066276,"Namecoin Signed Message",false),
    janin.currency.createCurrency("nav","navcoin",53,150,85,"P",76067358,76066276,"Navcoin Signed Message",false),
    janin.currency.createCurrency("ndc","needlecoin",53,181,7,"T",null,null,null,false),
    janin.currency.createCurrency("neet","neetcoin",53,181,7,"T",null,null,null,false),
    janin.currency.createCurrency("neos","neoscoin",53,177,5,"T",76067358,76066276,"Neoscoin Signed Message",false),
    janin.currency.createCurrency("neurocoin","neurocoin",53,181,117,null,76067358,76066276,"PPCoin Signed Message",false),
    janin.currency.createCurrency("neva","nevacoin",53,177,6,"T",null,null,null,false),
    janin.currency.createCurrency("newyorkcoin","newyorkcoin",60,188,22,null,76067358,76066276,"newyorkc Signed Message",false),
    janin.currency.createCurrency("nvc","novacoin",8,136,20,"M",76067358,76066276,"Novacoin Signed Message",false),
    janin.currency.createCurrency("usnbt","nubits",25,150,26,"V",76067358,76066276,"Nu Signed Message",false),
    janin.currency.createCurrency("nushares","nushares",63,149,64,null,76067358,76066276,"Nu Signed Message",false),
    janin.currency.createCurrency("nyan","nyancoin",45,173,6,"S",null,null,null,false),
    janin.currency.createCurrency("nyc","nyc",60,188,7,"U",null,null,null,false),
    janin.currency.createCurrency("ocupy","ocupy",115,243,9,"[cd]",null,null,null,false),
    janin.currency.createCurrency("okcash","okcash",55,183,28,null,63710167,63708275,"Okcash Signed Message",false),
    janin.currency.createCurrency("omni","omni",0,128,5,null,76067358,76066276,"Bitcoin Signed Message",false),
    janin.currency.createCurrency("omc","omnicoin",115,243,9,"[cd]",null,null,null,false),
    janin.currency.createCurrency("onyx","onyxcoin",115,243,9,"[cd]",null,null,null,false),
    janin.currency.createCurrency("pac","paccoin",24,152,6,"P",null,null,null,false),
    janin.currency.createCurrency("pnd","pandacoin",55,183,7,"U",null,null,null,false),
    janin.currency.createCurrency("pkb","parkbyte",55,183,28,"U",76067358,76066276,"ParkByte Signed Message",false),
    janin.currency.createCurrency("part","particl",56,108,4,"[HG]",null,null,null,false),
    janin.currency.createCurrency("xpy","paycoin",55,183,7,"U",null,null,null,false),
    janin.currency.createCurrency("ppc","peercoin",55,183,117,"U",76067358,76066276,"PPCoin Signed Message",false),
    janin.currency.createCurrency("ptc","pesetacoin",47,175,6,"[ST]",null,null,null,false),
    janin.currency.createCurrency("pesobit","pesobit",55,183,85,null,76067358,76066276,"Pesobit Signed Message",false),
    janin.currency.createCurrency("phc","phcoin",55,183,7,"U",null,null,null,false),
    janin.currency.createCurrency("pxc","phoenixcoin",56,184,7,"U",null,null,null,false),
    janin.currency.createCurrency("piggy","piggycoin",118,246,9,"d",null,null,null,false),
    janin.currency.createCurrency("pink","pinkcoin",3,131,28,"L",76067358,76066276,"Pinkcoin Signed Message",false),
    janin.currency.createCurrency("pivx","pivx",30,212,13,"Y",36513075,35729707,"PIVX Signed Message",false),
    janin.currency.createCurrency("poa","poa",255,255,null,null,4294967295,4294967295,null,true),
    janin.currency.createCurrency("posw","posw",55,183,85,null,76067358,76066276,"POSWcoin Signed Message",false),
    janin.currency.createCurrency("pot","potcoin",55,183,5,"U",76067358,76066276,"PotCoin Signed Message",false),
    janin.currency.createCurrency("xpm","primecoin",23,151,83,"P",76067358,76066276,"Primecoin Signed Message",false),
    janin.currency.createCurrency("prc","prospercoinclassic",58,186,7,"Q",null,null,null,false),
    janin.currency.createCurrency("putincoin","putincoin",55,183,20,null,76067358,76066276,"PutinCoin Signed Message",false),
    janin.currency.createCurrency("qrk","quark",58,186,7,"U",null,null,null,false),
    janin.currency.createCurrency("q2c","qubitcoin",38,224,8,"a",null,null,null,false),
    janin.currency.createCurrency("rdd","reddcoin",61,189,5,"[UV]",76067358,76066276,"Reddcoin Signed Message",false),
    janin.currency.createCurrency("richcoin","richcoin",61,128,9,null,76067358,76066276,"Richcoin Signed Message",false),
    janin.currency.createCurrency("ric","riecoin",60,128,5,"[LK]",null,null,null,false),
    janin.currency.createCurrency("rbt","rimbit",60,188,7,"U",null,null,null,false),
    janin.currency.createCurrency("roi","roicoin",60,128,5,"[LK]",null,null,null,false),
    janin.currency.createCurrency("rby","rubycoin",60,188,85,"U",76067358,76066276,"Rubycoin Signed Message",false),
    janin.currency.createCurrency("rupx","rupaya",60,188,7,"U",null,null,null,false),
    janin.currency.createCurrency("smb","sambacoin",62,190,7,"V",null,null,null,false),
    janin.currency.createCurrency("skc","seckcoin",63,191,7,"V",null,null,null,false),
    janin.currency.createCurrency("shadow","shadow",63,191,125,null,4001376362,4001378792,"ShadowCash Signed Message",false),
    janin.currency.createCurrency("shadowtn","shadowtn",127,255,196,null,1992359419,1992361850,"ShadowCash Signed Message",false),
    janin.currency.createCurrency("sib","sibcoin",63,128,5,"[LK]",null,null,null,false),
    janin.currency.createCurrency("611","sixeleven",52,128,5,"[LK]",null,null,null,false),
    janin.currency.createCurrency("smartcash","smartcash",63,191,18,null,76067358,76066276,"SmartCash Signed Message",false),
    janin.currency.createCurrency("smly","smileycoin",25,153,5,"P",76067358,76066276,"Smileycoin Signed Message",false),
    janin.currency.createCurrency("solarcoin","solarcoin",18,146,5,null,76067358,76066276,"SolarCoin Signed Message",false),
    janin.currency.createCurrency("song","songcoin",63,191,7,"V",null,null,null,false),
    janin.currency.createCurrency("spr","spreadcoin",63,191,7,"V",null,null,null,false),
    janin.currency.createCurrency("xst","stealthcoin",62,190,7,"V",null,null,null,false),
    janin.currency.createCurrency("strat","stratis",63,191,125,"V",76067358,76067549,"Stratis Signed Message",false),
    janin.currency.createCurrency("bucks","swagbucks",63,153,6,"P",null,null,null,false),
    janin.currency.createCurrency("sys","syscoin",63,191,5,"[LK]",76067358,76066276,"Syscoin Signed Message",false),
    janin.currency.createCurrency("taj","tajcoin",65,111,6,"H",null,null,null,false),
    janin.currency.createCurrency("trc","terracoin",0,128,5,"[LK]",null,null,null,false),
    janin.currency.createCurrency("testnet","testnet",111,239,196,null,70617039,70615956,"Bitcoin Signed Message",false),
    janin.currency.createCurrency("tether","tether",0,128,5,null,76067358,76066276,"Bitcoin Signed Message",false),
    janin.currency.createCurrency("tit","titcoin",0,128,5,"[LK]",null,null,null,false),
    janin.currency.createCurrency("ttc","tittiecoin",65,193,7,"V",null,null,null,false),
    janin.currency.createCurrency("toacoin","toacoin",65,193,23,null,76067358,76066276,"TOA Signed Message",false),
    janin.currency.createCurrency("top","topcoin",66,194,7,"V",null,null,null,false),
    janin.currency.createCurrency("tx","transfercoin",66,153,6,"P",null,null,null,false),
    janin.currency.createCurrency("tzc","trezarcoin",66,194,7,"V",null,null,null,false),
    janin.currency.createCurrency("ultimatesecurecash","ultimatesecurecash",68,137,125,null,4001376362,4001378792,"Ultimate Secure Cash Signed Message",false),
    janin.currency.createCurrency("uno","unobtanium",130,224,30,"a",76067358,76066276,"Unobtanium Signed Message",false),
    janin.currency.createCurrency("usde","usde",38,166,6,"R",null,null,null,false),
    janin.currency.createCurrency("xvc","vcash",71,199,8,"W",76067358,76066276,"Vcash Signed Message",false),
    janin.currency.createCurrency("xvg","vergecoin",30,158,33,"Q",76067358,76066276,"Vergecoin Signed Message",false),
    janin.currency.createCurrency("v","versioncoin",70,198,7,"W",null,null,null,false),
    janin.currency.createCurrency("vtc","vertcoin",71,199,5,"[LK]",76067358,76066276,"Vertcoin Signed Message",false),
    janin.currency.createCurrency("via","viacoin",71,199,33,"W",76067358,76066276,"Viacoin Signed Message",false),
    janin.currency.createCurrency("viacointestnet","viacointestnet",127,255,196,null,70617039,70615956,"Viacoin Signed Message",false),
    janin.currency.createCurrency("vik","vikingcoin",70,86,3,"D",null,null,null,false),
    janin.currency.createCurrency("vivo","vivo",70,198,10,null,76067358,76066276,"DarkCoin Signed Message",false),
    janin.currency.createCurrency("voxels","voxels",70,198,5,null,76067358,76066276,"Voxels Signed Message",false),
    janin.currency.createCurrency("vpncoin","vpncoin",71,199,5,null,76067358,76066276,"VpnCoin Signed Message",false),
    janin.currency.createCurrency("w2c","w2coin",73,201,7,"W",null,null,null,false),
    janin.currency.createCurrency("wac","wacoins",73,201,7,"W",null,null,null,false),
    janin.currency.createCurrency("wkc","wankcoin",0,128,5,"[LK]",null,null,null,false),
    janin.currency.createCurrency("wsx","wearesatoshicoin",135,151,6,"P",null,null,null,false),
    janin.currency.createCurrency("whitecoin","whitecoin",73,201,87,null,76067358,76066276,"Whitecoin Signed Message",false),
    janin.currency.createCurrency("wincoin","wincoin",73,201,83,null,76067358,76066276,"WinCoin Signed Message",false),
    janin.currency.createCurrency("wdc","worldcoin",73,201,7,"W",null,null,null,false),
    janin.currency.createCurrency("xp","xp",75,203,7,"X",null,null,null,false),
    janin.currency.createCurrency("ytn","yenten",78,123,5,"K",null,null,null,false),
    janin.currency.createCurrency("zec","zcash",7352,128,7357,"[LK]",76067358,76066276,"Zcash Signed Message",false),
    janin.currency.createCurrency("zclassic","zclassic",7352,128,7357,null,76067358,76066276,"Zcash Signed Message",false),
    janin.currency.createCurrency("zcoin","zcoin",82,210,7,null,76067358,76066276,"ZCoin Signed Message",false),
    janin.currency.createCurrency("zencash","zencash",8329,128,8342,null,76067358,76066276,"Zcash Signed Message",false),
    janin.currency.createCurrency("zet","zetacoin",80,224,9,"a",76067358,76066276,"Zetacoin Signed Message",false)
];
module.exports = janin.currencies
