# adyen-api
Adyen api experimentation created by a Node noob. Do not use for production purposes


# Running the code
Starting with an API key and Merchant Account is mandatory to do any of the service calls to the adyen api. May not be required for running tests, though integration tests will fail.

The Api Key and Merchant Account name are read from environment variables. Two ways to set these:

1. Advised: Create an .env file in the root folder, and add your variables. Expects:
 ```
 ADYENAPIKEY=<yourapikey>
 ADYENMERCHANTACCOUNT=<merchantaccountname>
````

2. Set the environment variables on the command line:
```ADYENAPIKEY=<yourapikey> ADYENMERCHANTACCOUNT=<merchantaccountname> npm run start```

Ignoring the .env file, run with 
```NODE_ENV=production npm run start```

### Running for development purposes
Assuming you have an .env file, command below will run and reload on save:
```npm run dev```


### notes & links

https://jestjs.io/docs/en/mock-functions
http://www.albertgao.xyz/2017/05/24/how-to-test-expressjs-with-jest-and-supertest/
https://jestjs.io/docs/en/expect.html

Country codes: https://en.wikipedia.org/wiki/ISO_3166-1
Currency codes: https://docs.adyen.com/development-resources/currency-codes/

### Adyen api
Additional data specification: https://ca-test.adyen.com/ca/ca/config/accountapi.shtml


### Debugging in VSCode

To debug, setup a vs code configuration file.
1. Add the 'api' folder to workspace (if you pick another folder you will need to modify the below snippet)
2. create .vscode folder in root if not exists
3. Add a file launch.json
4. Add code:
```
{
    "version": "0.0.1",
    "configurations": [
        {
            "type": "node",
            "request": "launch",
            "name": "Jest Tests",
            "program": "${workspaceRoot}/node_modules/jest/bin/jest",
            "args": [
                "-i"
            ],
            "internalConsoleOptions": "openOnSessionStart",
        },
    ]
}
```
5. Click on debug button on the left. Ensure the debug profile is selected in the top dropdown


### Currency codes
for up to date check https://docs.adyen.com/development-resources/currency-codes/

```
Code	Currency	Decimal points
AED	UAE Dirham	2
ALL	Albanian Lek	2
AMD	Armenian Dram	2
ANG	Antillian Guilder	2
AOA	Angolan Kwanza	2
ARS	Nuevo Argentine Peso	2
AUD	Australian Dollar	2
AWG	Aruban Guilder	2
AZN	Azerbaijani manat	2
BAM	Bosnia and Herzegovina Convertible Marks	2
BBD	Barbados Dollar	2
BDT	Bangladesh Taka	2
BGN	New Bulgarian Lev	2
BHD	Bahraini Dinar	3
BMD	Bermudian Dollar	2
BND	Brunei Dollar	2
BOB	Bolivia Boliviano	2
BRL	Brazilian Real	2
BSD	Bahamian Dollar	2
BWP	Botswana Pula	2
BYN	New Belarusian Ruble	2
BZD	Belize Dollar	2
CAD	Canadian Dollar	2
CHF	Swiss Franc	2
CLP	Chilean Peso	2
CNY	Yuan Renminbi	2
COP	Colombian Peso	2
CRC	Costa Rican Colon	2
CSD	Serbian Dinar	2
CUP	Cuban Peso	2
CVE	Cape Verdi Escudo	0
CZK	Czech Koruna	2
DJF	Djibouti Franc	0
DKK	Danish Krone	2
DOP	Dominican Republic Peso	2
DZD	Algerian Dinar	2
EEK	Estonian Krone	2
EGP	Egyptian Pound	2
ETB	Ethiopian Birr	2
EUR	Euro	2
FJD	Fiji Dollar	2
FKP	Falkland Islands Pound	2
GBP	Pound Sterling	2
GEL	Georgian Lari	2
GHS	Ghanaian Cedi (3rd)	2
GIP	Gibraltar Pound	2
GMD	Gambia Delasi	2
GNF	Guinea Franc	0
GTQ	Guatemala Quetzal	2
GYD	Guyanese Dollar	2
HKD	Hong Kong Dollar	2
HNL	Honduras Lempira	2
HRK	Croatia Kuna	2
HTG	Haitian Gourde	2
HUF	Hungarian Forint	2
IDR	Indonesian Rupiah	0
ILS	New Israeli Scheqel	2
INR	Indian Rupee	2
IQD	Iraqi Dinar	3
ISK	Iceland Krona	2
JMD	Jamaican Dollar	2
JOD	Jordanian Dinar	3
JPY	Japanese Yen	0
KES	Kenyan Shilling	2
KGS	Kyrgyzstan Som	2
KHR	Cambodia Riel	2
KMF	Comoro Franc	0
KRW	South-Korean Won	0
KWD	Kuwaiti Dinar	3
KYD	Cayman Islands Dollar	2
KZT	Kazakhstani Tenge	2
LAK	Laos Kip	2
LBP	Lebanese Pound	2
LKR	Sri Lanka Rupee	2
LTL	Lithunianian Litas	2
LVL	Latvian Lats	2
LYD	Libyan Dinar	3
MAD	Moroccan Dirham	2
MDL	Moldovia Leu	2
MKD	Macedonian Denar	2
MMK	Myanmar Kyat	2
MNT	Mongolia Tugrik	2
MOP	Macau Pataca	2
MRU	Mauritania Ouguiya	2
MUR	Mauritius Rupee	2
MVR	Maldives Rufiyaa	2
MWK	Malawi Kwacha	2
MXN	Mexican Peso	2
MYR	Malaysian Ringgit	2
MZN	Mozambican Metical	2
NAD	Namibian Dollar	2
NGN	Nigerian Naira	2
NIO	Nicaragua Cordoba Oro	2
NOK	Norwegian Krone	2
NPR	Nepalese Rupee	2
NZD	New Zealand Dollar	2
OMR	Rial Omani	3
PAB	Panamanian Balboa	2
PEN	Peruvian Nuevo Sol	2
PGK	New Guinea Kina	2
PHP	Philippine Peso	2
PKR	Pakistan Rupee	2
PLN	New Polish Zloty	2
PYG	Paraguay Guarani	0
QAR	Qatari Rial	2
RON	New Romanian Lei	2
RSD	Serbian Dinar	2
RUB	Russian Ruble	2
RWF	Rwanda Franc	0
SAR	Saudi Riyal	2
SBD	Solomon Island Dollar	2
SCR	Seychelles Rupee	2
SEK	Swedish Krone	2
SGD	Singapore Dollar	2
SHP	St. Helena Pound	2
SKK	Slovak Koruna	2
SLL	Sierra Leone Leone	2
SOS	Somalia Shilling	2
SRD	Surinamese dollar	2
STN	Sao Tome & Principe Dobra	2
SVC	El Salvador Colón	2
SZL	Swaziland Lilangeni	2
THB	Thai Baht	2
TND	Tunisian Dinar	3
TOP	Tonga Pa'anga	2
TRY	New Turkish Lira	2
TTD	Trinidad & Tobago Dollar	2
TWD	New Taiwan Dollar	2
TZS	Tanzanian Shilling	2
UAH	Ukraine Hryvnia	2
UGX	Uganda Shilling	0
USD	US Dollars	2
UYU	Peso Uruguayo	2
UZS	Uzbekistani Som	2
VEF	Venezuelan Bolívar	2
VND	Vietnamese New Dong	0
VUV	Vanuatu Vatu	0
WST	Samoan Tala	2
XAF	CFA Franc BEAC	0
XCD	East Carribean Dollar	2
XOF	CFA Franc BCEAO	0
XPF	CFP Franc	0
YER	Yemeni Rial	2
ZAR	South African Rand	2
ZMW	Zambian Kwacha	2
```