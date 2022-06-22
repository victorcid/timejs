const timejs = require('./timejs.js');

Date.prototype.fechaP = function () {
  return  this.getFullYear()+"/"+(((this.getMonth()+1) < 10)?"0":"") + (this.getMonth()+1) +"/"+((this.getDate() < 10)?"0":"") + this.getDate() + ' ' +
  ((this.getHours() < 10)?"0":"") + this.getHours() +":"+ ((this.getMinutes() < 10)?"0":"") + this.getMinutes() +":"+ ((this.getSeconds() < 10)?"0":"") + this.getSeconds();
}

console.log(timejs.getTimeG());
console.log(timejs.getTimeL());
console.log(timejs.getTimeL(-12));
console.log(timejs.getTimeL(0));
console.log(timejs.getTimeL(24));
console.log(timejs.getTimeL(25));
console.log(timejs.getTimeL(-24));
console.log(timejs.getTimeL(-25));

console.log();
console.log(new Date('1975-08-19T23:15:30.000Z').getTime());
console.log(timejs.getTimeG('1975-08-19T23:15:30.000Z')); //es la hora universal
console.log(timejs.getTimeG('August 20, 1975 06:15:30 GMT+07:00')); // respeta la hora
console.log(timejs.getTimeG('August 19, 1975 16:15:30 GMT-07:00')); // respeta la hora
console.log(timejs.getTimeG('August 19, 1975 17:15:30 GMT-06:00')); // respeta la hora
console.log(timejs.getTimeG('August 19, 1975 23:15:30')); //toma la hora local

console.log();
console.log(new Date(new Date('1975-08-19T23:15:30.000Z').getTime()));
console.log(new Date(timejs.getTimeG('1975-08-19T23:15:30.000Z')));
console.log(new Date(timejs.getTimeG('1975-08-19T23:15:30+0000')));
console.log(new Date(timejs.getTimeG('1975-08-19 23:15:30 +0000')));
console.log(new Date(timejs.getTimeG('1975-08-19 23:15:30+0000')));
console.log(new Date(timejs.getTimeG('1975-08-19 23:15:30-0000')));//da problemas
console.log(new Date(timejs.getTimeG('1975/08/19 23:15:30 +0000')));
console.log(new Date(timejs.getTimeG('1975/08/19 23:15:30 -0000')));
console.log(new Date(timejs.getTimeG('August 20, 1975 06:15:30 GMT+07:00')));
console.log(new Date(timejs.getTimeG('August 19, 1975 16:15:30 GMT-07:00')));
console.log(new Date(timejs.getTimeG('August 19, 1975 17:15:30 GMT-06:00')));
console.log(new Date(timejs.getTimeG('August 19, 1975 23:15:30')));

console.log();
console.log(new Date(timejs.getTimeL('1975-08-19T23:15:30.000Z')));
console.log(new Date(timejs.getTimeL('1975-08-19T23:15:30+0000')));
console.log(new Date(timejs.getTimeL('1975-08-19 23:15:30 +0000')));
console.log(new Date(timejs.getTimeL('1975-08-19 23:15:30+0000')));
console.log(new Date(timejs.getTimeL('1975-08-19 23:15:30-0000')));//da problemas
console.log(new Date(timejs.getTimeL('1975/08/19 23:15:30 +0000')));
console.log(new Date(timejs.getTimeL('1975/08/19 23:15:30 -0000')));
console.log(new Date(timejs.getTimeL('August 20, 1975 06:15:30 GMT+07:00')));
console.log(new Date(timejs.getTimeL('August 19, 1975 16:15:30 GMT-07:00')));
console.log(new Date(timejs.getTimeL('August 19, 1975 17:15:30 GMT-06:00')));
console.log(new Date(timejs.getTimeL('August 19, 1975 23:15:30')));
console.log(new Date(timejs.getTimeL('August 19, 1975 23:15:30')).fechaP());

console.log();
console.log(new Date(timejs.getTimeL(null)));
console.log(new Date(timejs.getTimeL(null,-5)));


-660:[Niue,NUT,Samoa Americana,SST],
-600:[Islas Cook,CKT, Estados Unidos,HST, Polinesia Francesa,TAHT],
-569:[Polinesia Francesa,MART],
-540:[Canadá, Estados Unidos,AKST, Polinesia Francesa,GAMT, Estados Unidos,HDT],
-480:[Canadá, Estados Unidos,AKDT, Canadá, Estados Unidos,PST, Islas Pitcairn,PST],
-420:[Canadá, Estados Unidos, México,MST, Canadá, Estados Unidos,PDT],
-360:[Belice, Canadá, Costa Rica, El Salvador, Estados Unidos, Guatemala, Honduras, México, Nicaragua,CST, Chile,EAST, Ecuador,GALT, Canadá, Estados Unidos, México,MDT],
-300:[Brasil,ACT, Canadá, Estados Unidos, México,CDT, Colombia,COT, Cuba,CST, Chile,EASST, Bahamas, Canadá, Estados Unidos, Haití, Islas Caimán, Islas Turcas y Caicos, Jamaica, México,
     Panamá,EST, Ecuador,ECT, Perú,PET],
-240:[Brasil,AMT,Anguila, Antigua y Barbuda, Aruba, Barbados, Bermudas, Bonaire, San Eustaquio y Saba, Canadá, Curaçao, Dominica, Granada, Groenlandia, Guadalupe, Isla de San Martín, Islas
     Vírgenes (UK), Islas Vírgenes Americanas, Martinica, Montserrat, Puerto Rico, República Dominicana, San Bartolomé, San Cristóbal y Nieves, San Vicente y las Granadinas, Santa Lucía, Sint Maarten, Trinidad y Tobago,AST, Bolivia,BOT, Chile,CLT, Cuba,CDT, Bahamas, Canadá, Estados Unidos, Haití, Islas Turcas y Caicos,EDT, Guayana,GYT, Paraguay,PYT, Venezuela,VET],
-209:[Canadá,NST],
-180:[Brasil,AMST, Antártida, Argentina,ART, Antigua y Barbuda, Bermudas, Canadá, Groenlandia,ADT, Brasil,BRT, Chile,CLST, Islas Malvinas,FKT, Guayana Francesa,GFT, Paraguay,PYST,
     San Pedro y Miquelón,PMST, Surinam,SRT, Uruguay,UYT, Groenlandia,WGT],
-149:[ Canadá,NDT ],
-120:[Brasil,BRST, San Pedro y Miquelón,PMDT, Georgia del Sur y las Islas Sandwich del Sur,GST, Groenlandia,WGST],
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
