"use strict"

const defaultConfig = {
    lenguage:'es',
    contry:'MX',
    timeZone:-360,
}

module.exports = {
    defaultConfig,
    getTimeG,
    getTimeL,
}



function getTimeG(time){
    if (time) {
        if(!(time).toString().toLowerCase().includes('z')
        && !(time).toString().toLowerCase().includes('gmt')
        && !(time).toString().toLowerCase().includes('utc')
        && !(time).toString().includes(' -')
        && !(time).toString().includes('+')) time = (time).toString() + ' +0000'


        return new Date(time).getTime();

        /*var date = new Date(time);
        date = [date.getFullYear(),date.getMonth(),date.getDate(),date.getHours(),date.getMinutes(),date.getSeconds(),date.getMilliseconds()]

        return new Date(date[0], date[1], date[2], date[3], date[4], date[5], date[6]).getTime();*/
    }

    return new Date().getTime();
}

function getTimeL(time,timeZone){
    let offsetTimeZone = parseInt(timeZone)
    if(!offsetTimeZone && offsetTimeZone != 0) offsetTimeZone = defaultConfig.timeZone
    if(offsetTimeZone > 720) offsetTimeZone = 720
    if(offsetTimeZone < -720) offsetTimeZone = -720

    offsetTimeZone = offsetTimeZone * 60 *1000

    if (time) {
        if(!(time).toString().toLowerCase().includes('z')
        && !(time).toString().toLowerCase().includes('gmt')
        && !(time).toString().toLowerCase().includes('utc')
        && !(time).toString().includes(' -')
        && !(time).toString().includes('+')) time = (time).toString() + ' +0000'


        return (new Date(time).getTime() - offsetTimeZone);
    }

    return (new Date().getTime() -  offsetTimeZone);
}


{


    -660:['Niue','NUT','Niuē','Alofi','mataafi','tahileleki','patuoko','Samoa Americana','SST','American Samoa' ,'sam','pago pago','Amerika Sāmoa','Sāmoa Amelika'],
    -600:['Cook','CKT','avarua', 'Cook', 'Kuki ’Āirani', 'Hawaii',"Hawai'i", '‎Honolulu','HST', 'Polinesia Francesa', 'Polynésie Française', 'Porinetia Farani','TAHT'],
    -569:['Marquesas', 'Marquises', 'henua enana', 'Fenua enata','MART'],
    -540:['Metlakatla','Anchorage','alaska','Alax̂sxax̂','Alaasikaq','AKST','Alaskaq', 'Anáaski', 'Gambier','GAMT', 'HDT'],
    -480:['AKDT', 'Canadá/Pacífico', 'Estados Unidos/Pacífico', 'Canada/Pacific', 'United States/Pacific', 'PST', 'Pacific Standard Time','Hora estándar del Pacífico','Los Angeles','Vancouver', 'Pitcairn','Pitkern','PST'],
    -420:['Inuvik', 'Phoenix', 'Hermosillo','MST', 'PDT' 'Dawson'],
    -360:['Belice','Belize ', 'Resolute', 'Costa Rica', 'El Salvador', 'Menominee', 'Guatemala', 'Honduras', 'Matamoros', 'Nicaragua','CST' ,'Central Standard Time', 'Hora estándar Central', 'Chile/este','EAST', 'Galápagos','GALT', 'MDT'],
    -300:['Acre','Rio Branco','ACT', 'Toronto', 'New York', 'Eastern Standard Time', 'CDT', 'Colombia','COT', 'Cuba','CST', 'Guayaquil',EASST, 'Bahamas', Canadá, Estados Unidos, 'Haití', 'Caimán' 'Cayman', 'Turcas', 'Turks', 'Caicos','Cockburn', 'Jamaica', 'Cancún', 'Panamá', 'EST', 'ECT', 'Perú','PET'],
    -240:['Porto Velho','Amazon Time','Hora del Amazonas','AMT', 'Anguila', 'Antigua' , 'Barbuda', 'Aruba', 'Barbados', 'Bermudas', 'Bonaire', 'San Eustaquio'  'Saba', 'Blanc-Sablon', 'Curaçao', 'Dominica', 'Granada', 'Thule', 'Guadalupe', 'San Martín', 'Vírgenes', 'Vírgenes Americanas', 'Martinica', 'Montserrat', 'Puerto Rico', 'República Dominicana', 'San Bartolomé', 'San Cristóbal' 'Nieves', 'San Vicente' 'Granadinas', 'Santa Lucía', 'Sint Maarten', 'Trinidad', 'Tobago','AST', 'Bolivia','BOT', 'Santiago','CLT', 'CDT', 'EDT', 'Guayana','GYT', 'Paraguay','PYT', 'Venezuela','VET'],
    -209:['	St Johns','NST'],
    -180:['Bahia','AMST', 'Palmer', 'Argentina','ART', 'Antigua', 'Barbuda', 'Bermudas', 'Moncton', 'Nuuk', 'ADT', 'Manaus', 'BRT', 'CLST', 'Malvinas','FKT', 'Guayana Francesa','GFT', 'PYST', 'San Pedro', 'Miquelón', 'PMST', 'Surinam','SRT', 'Uruguay','UYT', 'WGT'],
    -149:[ 'NDT' ],
    -120:['BRST', 'PMDT', 'Georgia del Sur', 'Sandwich del Sur','GST', 'WGST'],
    -60:[Portugal,AZOT, Cabo Verde,CVT, Groenlandia,EGT],
    0:[Portugal,AZOST, Antártida, Bailía de Guernsey, Burkina Faso, Costa de Marfil, Gambia, Ghana, Groenlandia, Guinea, Guinea-Bissau, Irlanda, Isla de Man, Islandia, Jersey, Liberia, Malí,
      Mauritania, Reino Unido, Santa Elena, Ascensión y Tristán de Acuña, Senegal, Sierra Leona, Togo,GMT, Angola, Benín, Camerún, Chad, Congo, Gabón, Guinea Ecuatorial, Nigeria, Níger, República Centroafricana, República Democrática del Congo, Santo Tomé y Príncipe,WAT, España, Islas Feroe, Marruecos, Portugal, Sáhara Occidental,WET, Groenlandia,EGST],
    60:[Bailía de Guernsey, Isla de Man, Jersey, Reino Unido,BST,Svalbard, Jan Mayen, Túnez,CET, Irlanda,IST, España, Islas Feroe, Portugal,WEST],
    120:[Botsuana, Burundi, Malaui, Mozambique, Namibia, República Democrática del Congo, Ruanda, Sudán, Sudán del Sur, Zambia, Zimbabue,CAT, Albania, Alemania, Andorra, Antártida, Austria,
        Bosnia y Hercegovina, Bélgica, Chequia, Ciudad del Vaticano, Croacia, Dinamarca, Eslovaquia, Eslovenia, España, Francia, Gibraltar, Hungría, Isla Bouvet, Italia, Kosovo, Liechtenstein, Luxemburgo, Macedonia del Norte, Malta, Montenegro, Noruega, Países Bajos, Polonia, Principado de Mónaco, San Marino, Serbia, Suecia, Suiza, Svalbard y Jan Mayen,CEST, Israel,IST, Esuatini, Lesotho, Sudáfrica,SAST, Bulgaria, Chipre, Egipto, Estonia, Finlandia, Grecia, Islas Åland, Jordania, Letonia, Libia, Lituania, Líbano, Moldavia, Palestina, Rumania, Rusia, Siria, Ucrania,EET]
    180:[Comores, Madagascar, Mayotte,EAT, Eritrea, Etiopía, Kenia, Somalia, Tanzania, Uganda, Yibuti,EAT, Bulgaria, Chipre, Estonia, Finlandia, Grecia, Islas Åland, Jordania, Letonia, Lituania,
         Líbano, Moldavia, Palestina, Rumania, Siria, Ucrania,EEST, Israel,IDT, Belarús, Rusia, Ucrania,MSK, Turquía,TRT],
    210:[Irán,IRST],
    240:[Armenia,AMT, Azerbaiyán,AZT, Georgia,GET, Emiratos Árabes Unidos, Omán,GST, Isla Mauricio,MUT, Reunión,RET, Rusia,SAMT, Seychelles,SCT,],
    270:[Irán,IRDT, Afganistán,AFT],
    300:[Kazajstán,AQTT, Islas Heard y McDonald, Territorios Australes y Antárticos Franceses,TFT, Maldivas,MVT, Antártida,MAWT, Kazajstán,ORAT, Pakistán,PKT, Kazajstán,QYZT, Tayikistán,TJT,
        Turkmenistán,TMT, Uzbekistán,UZT],
    330:[India,IST, Sri Lanka,SLT],
    345:[Nepal,NPT],
    360:[Kazajstán,ALMT, Bangladesh,BST, Bután,BTT, Kirguistán,KGT, Rusia,OMST, Antártida,VOST, China,XJT, Territorio Británico del Océano Índico,ICT],
    390:[Islas Cocos,CCT, Myanmar,MMT],
    420:[Isla de Navidad,CXT, Antártida,DAVT, Mongolia,HOVT, Cambodia, Laos, Tailandia, Vietnam,ICT, Rusia,KRAT, Rusia,NOVT, Indonesia,WIT],
    480:[Australia,AWST, Brunéi,BNT, Albania, Alemania, Andorra, Argelia, Austria, Bosnia y Hercegovina, Bélgica, Chequia, Ciudad del Vaticano, Croacia, Dinamarca, Eslovaquia, Eslovenia, España,
         Francia, Gibraltar, Hungría, Isla Bouvet, Italia, Kosovo, Liechtenstein, Luxemburgo, Macedonia del Norte, Malta, Montenegro, Noruega, Países Bajos, Polonia, Principado de Mónaco, San Marino, Serbia, Suecia, Suiza, Indonesia,CIT, China, Macao, Taiwán,CST, Mongolia,CHOT, Hong Kong,HKT, Rusia,IRKT, Malasia,MYT, Filipinas,PHT, Singapur,SGT, Mongolia,ULAT],
    525:[Australia,ACWST],
    540:[Timor Oriental,TLT, Indonesia,EIT, Japón,JST, Corea del Norte, Corea del Sur,KST, Palaos,PWT, Rusia,YAKT, Rusia,YEKT],
    570:[Australia,ACST],
    600:[Australia,AEST, Guam, Islas Marianas del Norte,CHST, Estados Federados de Micronesia,CHUT, Antártida,DDUT, Papúa Nueva Guinea,PGT, Rusia,VLAT],
    630:[Australia,ACDT, Australia,LHST],
    660:[Antártida, Australia,AEDT, Antártida,CAST, Estados Federados de Micronesia,KOST, Nueva Caledonia,NCT, Isla Norfolk,NFT,Estados Federados de Micronesia,PONT, Rusia,SAKT, Vanuatu,VUT,
        Islas Salomón,SBT, Rusia,SRET],
    690:[Australia,LHDT],
    720:[Rusia,ANAT,Fiji,FJT, Kiribati,GILT, Rusia,PETT, Islas Marshall,MHT, Nauru,NRT, Antártida, Nueva Zelandia,NZST, Isla Norfolk,NFDT, Tuvalu,TVT, Wallis y Futuna,WFT],
    765:[Nueva Zelandia,CHAST],
    780:[Fiji,FJDT, Antártida, Nueva Zelandia,NZDT, Kiribati,PHOT, Tokelau,TKT, Tonga,TOT, Samoa,WST],
    825:[Nueva Zelandia,CHADT],
    840:[Kiribati,LINT, Samoa,WSDT],
}

for (var i = 0; i < array.length; i++) {
    array[i]
}
