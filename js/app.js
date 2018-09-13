var paises = {
	"":"",
	"AF":"Afghanistan",
	"AL":"Albania",
	"DZ":"Algeria",
	"AS":"American Samoa",
	"AD":"Andorra",
	"AO":"Angola",
	"AI":"Anguilla",
	"AQ":"Antarctica",
	"AG":"Antigua and Barbuda",
	"AR":"Argentina",
	"AM":"Armenia",
	"AW":"Aruba",
	"AU":"Australia",
	"AT":"Austria",
	"AZ":"Azerbaijan",
	"BH":"Bahrain",
	"BD":"Bangladesh",
	"BB":"Barbados",
	"BY":"Belarus",
	"BE":"Belgium",
	"BZ":"Belize",
	"BJ":"Benin",
	"BM":"Bermuda",
	"BT":"Bhutan",
	"BO":"Bolivia",
	"BA":"Bosnia and Herzegovina",
	"BW":"Botswana",
	"BV":"Bouvet Island",
	"BR":"Brazil",
	"IO":"British Indian Ocean Territory",
	"VG":"British Virgin Islands",
	"BN":"Brunei",
	"BG":"Bulgaria",
	"BF":"Burkina Faso",
	"BI":"Burundi",
	"CI":"Côte d'Ivoire",
	"KH":"Cambodia",
	"CM":"Cameroon",
	"CA":"Canada",
	"CV":"Cape Verde",
	"KY":"Cayman Islands",
	"CF":"Central African Republic",
	"TD":"Chad",
	"CL":"Chile",
	"CN":"China",
	"CX":"Christmas Island",
	"CC":"Cocos (Keeling) Islands",
	"CO":"Colombia",
	"KM":"Comoros",
	"CG":"Congo",
	"CK":"Cook Islands",
	"CR":"Costa Rica",
	"HR":"Croatia",
	"CU":"Cuba",
	"CY":"Cyprus",
	"CZ":"Czech Republic",
	"CD":"Democratic Republic of the Congo",
	"DK":"Denmark",
	"DJ":"Djibouti",
	"DM":"Dominica",
	"DO":"Dominican Republic",
	"TP":"East Timor",
	"EC":"Ecuador",
	"EG":"Egypt",
	"SV":"El Salvador",
	"GQ":"Equatorial Guinea",
	"ER":"Eritrea",
	"EE":"Estonia",
	"ET":"Ethiopia",
	"FO":"Faeroe Islands",
	"FK":"Falkland Islands",
	"FJ":"Fiji",
	"FI":"Finland",
	"MK":"Former Yugoslav Republic of Macedonia",
	"FR":"France",
	"FX":"France, Metropolitan",
	"GF":"French Guiana",
	"PF":"French Polynesia",
	"TF":"French Southern Territories",
	"GA":"Gabon",
	"GE":"Georgia",
	"DE":"Germany",
	"GH":"Ghana",
	"GI":"Gibraltar",
	"GR":"Greece",
	"GL":"Greenland",
	"GD":"Grenada",
	"GP":"Guadeloupe",
	"GU":"Guam",
	"GT":"Guatemala",
	"GN":"Guinea",
	"GW":"Guinea-Bissau",
	"GY":"Guyana",
	"HT":"Haiti",
	"HM":"Heard and Mc Donald Islands",
	"HN":"Honduras",
	"HK":"Hong Kong",
	"HU":"Hungary",
	"IS":"Iceland",
	"IN":"India",
	"ID":"Indonesia",
	"IR":"Iran",
	"IQ":"Iraq",
	"IE":"Ireland",
	"IL":"Israel",
	"IT":"Italy",
	"JM":"Jamaica",
	"JP":"Japan",
	"JO":"Jordan",
	"KZ":"Kazakhstan",
	"KE":"Kenya",
	"KI":"Kiribati",
	"KW":"Kuwait",
	"KG":"Kyrgyzstan",
	"LA":"Laos",
	"LV":"Latvia",
	"LB":"Lebanon",
	"LS":"Lesotho",
	"LR":"Liberia",
	"LY":"Libya",
	"LI":"Liechtenstein",
	"LT":"Lithuania",
	"LU":"Luxembourg",
	"MO":"Macau",
	"MG":"Madagascar",
	"MW":"Malawi",
	"MY":"Malaysia",
	"MV":"Maldives",
	"ML":"Mali",
	"MT":"Malta",
	"MH":"Marshall Islands",
	"MQ":"Martinique",
	"MR":"Mauritania",
	"MU":"Mauritius",
	"YT":"Mayotte",
	"MX":"Mexico",
	"FM":"Micronesia",
	"MD":"Moldova",
	"MC":"Monaco",
	"MN":"Mongolia",
	"ME":"Montenegro",
	"MS":"Montserrat",
	"MA":"Morocco",
	"MZ":"Mozambique",
	"MM":"Myanmar",
	"NA":"Namibia",
	"NR":"Nauru",
	"NP":"Nepal",
	"NL":"Netherlands",
	"AN":"Netherlands Antilles",
	"NC":"New Caledonia",
	"NZ":"New Zealand",
	"NI":"Nicaragua",
	"NE":"Niger",
	"NG":"Nigeria",
	"NU":"Niue",
	"NF":"Norfolk Island",
	"KP":"North Korea",
	"MP":"Northern Marianas",
	"NO":"Norway",
	"OM":"Oman",
	"PK":"Pakistan",
	"PW":"Palau",
	"PS":"Palestine",
	"PA":"Panama",
	"PG":"Papua New Guinea",
	"PY":"Paraguay",
	"PE":"Peru",
	"PH":"Philippines",
	"PN":"Pitcairn Islands",
	"PL":"Poland",
	"PT":"Portugal",
	"PR":"Puerto Rico",
	"QA":"Qatar",
	"RE":"Reunion",
	"RO":"Romania",
	"RU":"Russia",
	"RW":"Rwanda",
	"ST":"São Tomé and Príncipe",
	"SH":"Saint Helena",
	"PM":"St. Pierre and Miquelon",
	"KN":"Saint Kitts and Nevis",
	"LC":"Saint Lucia",
	"VC":"Saint Vincent and the Grenadines",
	"WS":"Samoa",
	"SM":"San Marino",
	"SA":"Saudi Arabia",
	"SN":"Senegal",
	"RS":"Serbia",
	"SC":"Seychelles",
	"SL":"Sierra Leone",
	"SG":"Singapore",
	"SK":"Slovakia",
	"SI":"Slovenia",
	"SB":"Solomon Islands",
	"SO":"Somalia",
	"ZA":"South Africa",
	"GS":"South Georgia and the South Sandwich Islands",
	"KR":"South Korea",
	"ES":"Spain",
	"LK":"Sri Lanka",
	"SD":"Sudan",
	"SR":"Suriname",
	"SJ":"Svalbard and Jan Mayen Islands",
	"SZ":"Swaziland",
	"SE":"Sweden",
	"CH":"Switzerland",
	"SY":"Syria",
	"TW":"Taiwan",
	"TJ":"Tajikistan",
	"TZ":"Tanzania",
	"TH":"Thailand",
	"BS":"The Bahamas",
	"GM":"The Gambia",
	"TG":"Togo",
	"TK":"Tokelau",
	"TO":"Tonga",
	"TT":"Trinidad and Tobago",
	"TN":"Tunisia",
	"TR":"Turkey",
	"TM":"Turkmenistan",
	"TC":"Turks and Caicos Islands",
	"TV":"Tuvalu",
	"VI":"US Virgin Islands",
	"UG":"Uganda",
	"UA":"Ukraine",
	"AE":"United Arab Emirates",
	"GB":"United Kingdom",
	"US":"United States",
	"UM":"United States Minor Outlying Islands",
	"UY":"Uruguay",
	"UZ":"Uzbekistan",
	"VU":"Vanuatu",
	"VA":"Vatican City",
	"VE":"Venezuela",
	"VN":"Vietnam",
	"WF":"Wallis and Futuna Islands",
	"EH":"Western Sahara",
	"YE":"Yemen",
	"ZM":"Zambia",
	"ZW":"Zimbabwe"
}

var generos = {
	"":"",
	M:"Masculino",
	F:"Femenino",
	T:"Transgénero",
}

var idiomas = {
	"":"",
	E: "Español",
	I: "English"
}

var categorias = {
	"":"",
	M: "Modelo",
	E: "Estudio",
	W: "Webmaster",
	O: "Otro"
}

function dias_restantes() {

	var today 		= new Date().getTime(),
	evento 			= new Date('2019-02-17 14:00:00').getTime(),
	tleft 			= Math.abs( ( evento - today ) / 1000),
	dleftN 			= tleft / ( 3600 * 24 ),
	dleft 			= Math.floor( dleftN ),
	hleftN 			= ( dleftN - dleft ) * 24,
	hleft 			= Math.floor( hleftN ),
	mleftN 			= ( hleftN - hleft ) * 60,
	mleft 			= Math.floor( mleftN );

	$('span#dias').html( dleft );
	$('span#horas').html( hleft );
	$('span#minutos').html( mleft );

};

$(document)
	.on( "mobileinit", function () {
		$.mobile.defaultPageTransition = 'flip';
		$.mobile.loadingMessage = "Cargando...";
		$.mobile.loadingMessageTextVisible = true;
		$.mobile.loadingMessageTheme = "b";
		$.mobile.pageLoadErrorMessage = "Disculpe, su solicitud no pudo ser procesada.";
		$.mobile.pageLoadErrorMessageTheme = "b";
	})
	.on( "pagechange", function ( toPage , options ) {
		switch( options.toPage[0].id )
		{
			case 'home':
				setInterval( function () {
					dias_restantes();
				}, 1000 );
			break;
			case 'registro':
				var html = "";
				for ( var gen in generos ) {
					html += "<option value="+gen+">"+generos[gen]+"</option>"	
				}
				$('#form-co_genero').html(html);

				var html = "";
				for ( var abrev in paises ) {
					html += "<option value="+abrev+">"+paises[abrev]+"</option>"	
				}
				$('#form-co_pais').html(html);

				var html = "";
				for ( var lang in idiomas ) {
					html += "<option value="+lang+">"+idiomas[lang]+"</option>"	
				}
				$('#form-co_idioma').html(html);

				var html = "";
				for ( var cat in categorias ) {
					html += "<option value="+cat+">"+categorias[cat]+"</option>"	
				}
				$('#form-co_categ').html(html);
			break;
		}
	})