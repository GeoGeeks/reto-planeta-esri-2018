// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define({"widgets/GriddedReferenceGraphic/nls/strings":{_widgetLabel:"Referentna grafika u obliku mre\u017ee",newGRGFromAreaButtonLabel:"Defini\u0161i mre\u017eu iz oblasti",newGRGFromPointButtonLabel:"Defini\u0161i mre\u017eu iz ta\u010dke",newGRGFromAreaTitle:"Defini\u0161i mre\u017eu iz oblasti",newGRGFromPointTitle:"Defini\u0161i mre\u017eu iz ta\u010dke",newGRGBySizeButtonLabel:"Pomo\u0107u dimenzije",newGRGFromRefSystemButtonLabel:"Pomo\u0107u referentnog sistema",newGRGByTimeLabel:"Pomo\u0107u vremena i brzine",
newGRGFromNonStandardButtonLabel:"Defini\u0161i nestandardnu mre\u017eu",newGRGAreaBySizeTitle:"GRG iz oblasti pomo\u0107u dimenzije",newGRGAreaBySizeDefineAreaLabel:"GRG oblast",addGRGAreaPolygonToolTip:"Nacrtaj GRG oblast pomo\u0107u poligona",addGRGAreaExtentToolTip:"Nacrtaj GRG oblast pomo\u0107u obuhvata",rotation:"Rotacija mre\u017ee",numberRowsColumnsLabel:"Defini\u0161i broj redova i kolona",newGRGAreaByRefSystemTitle:"GRG iz oblasti pomo\u0107u referentnog sistema",gridSize:"Veli\u010dina mre\u017ee",
UTMZoneandBand:"Zona mre\u017ee","100000m":"100.000 metara","10000m":"10.000 metara","1000m":"1000 metara","100m":"100 metara","10m":"10 metara",clipGrid:"Iseci mre\u017eu na GRG oblast",newGRGAreaFromNonStandardTitle:"Novi NRG",newGRGPointBySizeTitle:"GRG iz ta\u010dke pomo\u0107u dimenzije",newGRGPointByRefSystemTitle:"GRG iz ta\u010dke pomo\u0107u referentnog sistema",newGRGPointByTimeTitle:"GRG iz ta\u010dke pomo\u0107u  vremena i brzine",time:"Vreme",rate:"Brzina",hours:"Sati",minutes:"Minuti",
seconds:"Sekunde",ftPerSec:"Stopa/sekundi",ftPerHour:"Stopa/sat",kmPerSec:"Kilometara/sekundi",kmPerHour:"Kilometara/sat",mPerSec:"Metara/sekundi",mPerHour:"Metara/sat",miPerSec:"Milja/sekundi",miPerHour:"Milja/sat",nMPerSec:"Nauti\u010dkih milja/sekundi",nMPerHour:"Nauti\u010dkih milja/sat",settingsTitle:"Postavke",labelSettingsLabel:"Postavke oznake",labelSettingsButtonLabel:"Konfiguri\u0161ite postavke oznake",gridSettingsLabel:"Postavke mre\u017ee",gridSettingsButtonLabel:"Konfiguri\u0161ite postavke mre\u017ee",
transparency:"Prozirnost",labelStyle:"Stil oznake",font:"Font",textSize:"Veli\u010dina teksta",textColor:"Boja teksta",halo:"Efekat oreola",show:"Prika\u017ei",lockSettings:"Vlasnik aplikacije je zaklju\u010dao postavke",gridSettings:{cellShape:"Oblik \u0107elije",cellUnits:"Jedinice \u0107elije",cellOutline:"Postavke kontura \u0107elije",cellFill:"Postavke popune \u0107elije",gridReferenceSystem:"Referentni sistem",gridDatum:"Datum: WGS84",labelStartPosition:"Po\u010detak oznake",labelType:"Vrsta oznake",
labelDirection:"Smer oznake",gridOrigin:"Koordinatni po\u010detak mre\u017ee","default":"Pravougaonik",hexagon:"\u0160estougaonik",miles:"Milje",kilometers:"Kilometri",feet:"Stope",meters:"Metri",yards:"Jardi","nautical-miles":"Nauti\u010dke milje",lowerLeft:"Dole levo",lowerRight:"Dole desno",upperLeft:"Gore levo",upperRight:"Gore desno",center:"Centar",alphaNumeric:"Alfanumeri\u010dki",alphaAlpha:"Abecedno-abecedni",numeric:"Broj\u010dano",horizontal:"Horizontalno",vertical:"Vertikalno",MGRS:"MGRS",
USNG:"USNG",showLabels:"Poka\u017ei oznake"},publishTitle:"Objavi GRG na portalu",publishGRGBtn:"Objavi",GRGLayerName:"Ime sloja objavljenog GRG",invalidGRGLayerName:"Ime sloja sme da sadr\u017ei samo alfanumeri\u010dke znakove i donje crte",missingGRGLayerName:"Morate da unesete ime za GRG",publishingFailedLayerExists:"Objavljivanje nije uspelo: Ve\u0107 imate servis geoobjekata sa imenom {0}. Odaberite drugo ime.",checkService:"Provera servisa: {0}",createService:"Kreiranje servisa: {0}",unableToCreate:"Kreiranje nije mogu\u0107e: {0}",
addToDefinition:"Dodaj u definiciju: {0}",successfullyPublished:"Uspe\u0161no objavljen veb sloj{0}Upravljaj veb slojem",userRole:"Kreiranje servisa nije mogu\u0107e, jer korisnik nema dozvole",createGRGBtn:"Kreiraj GRG",clearGRGBtn:"Obri\u0161i",labelFormat:"Format oznake",helpIconTooltip:"Z: Oznaka zone mre\u017ee (GZD)\nS: Identifikacija kvadrata mre\u017ee na 100.000 metara (GSID)\nX: Razdaljina u odnosu na Y osu (X koordinata)\nY: Razdaljina u odnosu na X osu (Y koordinata)\n\nPrimeri:\nZSXY je 15SWC8081751205\nZS X,Y je 15SWC 80817,51205",
addPointToolTip:"Dodaj GRG koordinatni po\u010detak",cellWidth:"\u0160irina \u0107elije (x)",cellHeight:"Visina \u0107elije (y)",invalidNumberMessage:"Uneta vrednost nije va\u017ee\u0107a",invalidRangeMessage:"Vrednost mora da bude ve\u0107a od 0",gridAngleInvalidRangeMessage:"Vrednost mora da bude izme\u0111u -89,9 i 89,9",formatIconTooltip:"Unos formata",coordInputLabel:"GRG koordinatni po\u010detak (DD)",setCoordFormat:"Postavi nisku formata koordinata",prefixNumbers:"Dodajte prefiks '+/-' pozitivnim i negativnim brojevima",
cancelBtn:"Otka\u017ei",applyBtn:"Primeni",comfirmInputNotation:"Proverite unesenu oznaku",notationsMatch:"oznake se podudaraju sa unosom potvrdite koje biste \u017eeleli da koristite:",numberOfCellsHorizontal:"br. horizontalnih \u0107elija",numberOfCellsVertical:"br. vertikalnih \u0107elija",gridAngle:"Rotacija mre\u017ee",tooManyCellsErrorMessage:"Poku\u0161avate da kreirate mre\u017eu koja se sastoji od vi\u0161e od 2000 \u0107elija. Preporu\u010dljivo je da smanjite broj \u0107elija koje se kreiraju promenom veli\u010dine mre\u017ee ili povr\u0161ine mre\u017ee.",
missingParametersMessage:"\x3cp\x3eObrazac za kreiranje GRG ima parametre koji nedostaju ili su neva\u017ee\u0107i. Uverite se da:\x3c/p\x3e\x3cul\x3e\x3cli\x3eGRG oblast je nacrtana.\x3c/li\x3e\x3cli\x3e\u0160irina i visina \u0107elije sadr\u017ee va\u017ee\u0107e vrednosti.\x3c/li\x3e\x3c/ul\x3e",missingOriginParametersMessage:"\x3cp\x3eObrazac za kreiranje GRG ima parametre koji nedostaju ili su neva\u017ee\u0107i. Uverite se da:\x3c/p\x3e\x3cul\x3e\x3cli\x3eGRG koordinatni po\u010detak je pode\u0161en.\x3c/li\x3e\x3cli\x3eUnosi za vreme, brzinu i ugao sadr\u017ee va\u017ee\u0107e vrednosti.\x3c/li\x3e\x3c/ul\x3e",
invalidWidthHeightParametersMessage:"\x3cp\x3eObrazac za kreiranje GRG ima parametre koji nedostaju ili su neva\u017ee\u0107i. Uverite se da unosi za \u0161irinu i visinu \u0107elije sadr\u017ee va\u017ee\u0107e vrednosti.\x3c/p\x3e",invalidHorizontalVerticalParametersMessage:"\x3cp\x3eObrazac za kreiranje GRG ima parametre koji nedostaju ili su neva\u017ee\u0107i. Uverite se da unosi za broj horizontalnih i vertikalnih \u0107elija sadr\u017ee va\u017ee\u0107e vrednosti.\x3c/p\x3e",drawPointToolTip:"Kliknite da biste GRG ta\u010dku koordinatnog po\u010detka",
missingLayerNameMessage:"Morate da unesete va\u017ee\u0107e ime sloja da biste mogli da objavite",parseCoordinatesError:"Ra\u0161\u010dlanjivanje koordinata nije mogu\u0107e. Proverite unos.",grgPolarRegionError:"GRG obuhvat je unutar polarne regije. \u0106elije koje upadnu u polarnu regiju se ne\u0107e kreirati.",grgPolarOriginError:"GRG ta\u010dka koordinatnog po\u010detka ne mo\u017ee da bude unutar polarne regije prilikom kreiranja GRG pomo\u0107u referentnog sistema.",deleteBtn:"Izbri\u0161i",
DD:"DD",DDM:"DDM",DMS:"DMS",DDRev:"DDRev",DDMRev:"DDMRev",DMSRev:"DMSRev",USNG:"USNG",MGRS:"MGRS",UTM_H:"Univerzalni Transverzalni Merkatorov koordinatni sistem (H)",UTM:"Univerzalni Transverzalni Merkatorov koordinatni sistem (UTM)",GARS:"GARS",GEOREF:"GEOREF",DDLatLongNotation:"Decimalni stepeni \u2013 geografska \u0161irina/du\u017eina",DDLongLatNotation:"Decimalni stepeni \u2013 geografska du\u017eina/\u0161irina",DDMLatLongNotation:"Decimalni stepeni minuti \u2013 geografska \u0161irina/du\u017eina",
DDMLongLatNotation:"Decimalni stepeni minuti \u2013 geografska du\u017eina/\u0161irina",DMSLatLongNotation:"Decimalni stepeni sekundi \u2013 geografska \u0161irina/du\u017eina",DMSLongLatNotation:"Decimalni stepeni sekundi \u2013 geografska du\u017eina/\u0161irina",GARSNotation:"GARS",GEOREFNotation:"GEOREF",MGRSNotation:"MGRS",USNGNotation:"USNG",UTMBandNotation:"UTM \u2013 slovo opsega",UTMHemNotation:"UTM \u2013 hemisfera (S/J)",_localized:{}}});