import { parseCurrencyXML } from '../currencies';

const xmlString =
  '<wechselkurse xmlns="http://www.pwebapps.ezv.admin.ch/apps/rates" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.pwebapps.ezv.admin.ch/apps/rates http://www.pwebapps.ezv.admin.ch/apps/rates/dailyrates.xsd">\n' +
  '<datum>2017-12-27</datum>\n' +
  '<zeit>04:38:45</zeit>\n' +
  '<devise code="eur">\n' +
  '<land_de>Europäische Währungsunion</land_de>\n' +
  '<land_fr>Union monétaire européenne</land_fr>\n' +
  '<land_it>Unione Monetaria Europea</land_it>\n' +
  '<land_en>Euro Member</land_en>\n' +
  '<waehrung>1 EUR</waehrung>\n' +
  '<kurs>1.18548</kurs>\n' +
  '</devise>\n' +
  '<devise code="usd">\n' +
  '<land_de>USA</land_de>\n' +
  '<land_fr>USA</land_fr>\n' +
  '<land_it>USA</land_it>\n' +
  '<land_en>United States</land_en>\n' +
  '<waehrung>1 USD</waehrung>\n' +
  '<kurs>0.99929</kurs>\n' +
  '</devise>\n' +
  '<devise code="egp">\n' +
  '<land_de>Ägypten</land_de>\n' +
  '<land_fr>Egypte</land_fr>\n' +
  '<land_it>Egitto</land_it>\n' +
  '<land_en>Egypt</land_en>\n' +
  '<waehrung>100 EGP</waehrung>\n' +
  '<kurs>5.61464</kurs>\n' +
  '</devise>\n' +
  '<devise code="all">\n' +
  '<land_de>Albanien</land_de>\n' +
  '<land_fr>Albanie</land_fr>\n' +
  '<land_it>Albania</land_it>\n' +
  '<land_en>Albania</land_en>\n' +
  '<waehrung>100 ALL</waehrung>\n' +
  '<kurs>0.89663</kurs>\n' +
  '</devise>\n' +
  '<devise code="ars">\n' +
  '<land_de>Argentinien</land_de>\n' +
  '<land_fr>Argentine</land_fr>\n' +
  '<land_it>Argentina</land_it>\n' +
  '<land_en>Argentina</land_en>\n' +
  '<waehrung>1 ARS</waehrung>\n' +
  '<kurs>0.05454</kurs>\n' +
  '</devise>\n' +
  '<devise code="azn">\n' +
  '<land_de>Aserbaidschan</land_de>\n' +
  '<land_fr>Azerbaïdjan</land_fr>\n' +
  '<land_it>Azerbaigian</land_it>\n' +
  '<land_en>Azerbaijan New</land_en>\n' +
  '<waehrung>1 AZN</waehrung>\n' +
  '<kurs>0.59659</kurs>\n' +
  '</devise>\n' +
  '<devise code="etb">\n' +
  '<land_de>Äthiopien</land_de>\n' +
  '<land_fr>Ethiopie</land_fr>\n' +
  '<land_it>Etiopia</land_it>\n' +
  '<land_en>Ethiopia</land_en>\n' +
  '<waehrung>100 ETB</waehrung>\n' +
  '<kurs>3.67414</kurs>\n' +
  '</devise>\n' +
  '<devise code="aud">\n' +
  '<land_de>Australien</land_de>\n' +
  '<land_fr>Australie</land_fr>\n' +
  '<land_it>Australia</land_it>\n' +
  '<land_en>Australia</land_en>\n' +
  '<waehrung>1 AUD</waehrung>\n' +
  '<kurs>0.77355</kurs>\n' +
  '</devise>\n' +
  '<devise code="bhd">\n' +
  '<land_de>Bahrain</land_de>\n' +
  '<land_fr>Bahreïn</land_fr>\n' +
  '<land_it>Bahrein</land_it>\n' +
  '<land_en>Bahrain</land_en>\n' +
  '<waehrung>1 BHD</waehrung>\n' +
  '<kurs>2.66265</kurs>\n' +
  '</devise>\n' +
  '<devise code="bdt">\n' +
  '<land_de>Bangladesch</land_de>\n' +
  '<land_fr>Bangladesh</land_fr>\n' +
  '<land_it>Bangladesh</land_it>\n' +
  '<land_en>Bangladesh</land_en>\n' +
  '<waehrung>100 BDT</waehrung>\n' +
  '<kurs>1.20180</kurs>\n' +
  '</devise>\n' +
  '<devise code="bam">\n' +
  '<land_de>Bosnien-Herzegowina</land_de>\n' +
  '<land_fr>Bosnie-Herzégovine</land_fr>\n' +
  '<land_it>Bosnia-Erzegovina</land_it>\n' +
  '<land_en>Bosnia and Herzegovina</land_en>\n' +
  '<waehrung>100 BAM</waehrung>\n' +
  '<kurs>60.60000</kurs>\n' +
  '</devise>\n' +
  '<devise code="brl">\n' +
  '<land_de>Brasilien</land_de>\n' +
  '<land_fr>Brésil</land_fr>\n' +
  '<land_it>Brasile</land_it>\n' +
  '<land_en>Brazil</land_en>\n' +
  '<waehrung>100 BRL</waehrung>\n' +
  '<kurs>30.19471</kurs>\n' +
  '</devise>\n' +
  '<devise code="bgn">\n' +
  '<land_de>Bulgarien</land_de>\n' +
  '<land_fr>Bulgarie</land_fr>\n' +
  '<land_it>Bulgaria</land_it>\n' +
  '<land_en>Bulgaria</land_en>\n' +
  '<waehrung>100 BGN</waehrung>\n' +
  '<kurs>60.62941</kurs>\n' +
  '</devise>\n' +
  '<devise code="clp">\n' +
  '<land_de>Chile</land_de>\n' +
  '<land_fr>Chili</land_fr>\n' +
  '<land_it>Cile</land_it>\n' +
  '<land_en>Chile</land_en>\n' +
  '<waehrung>1000 CLP</waehrung>\n' +
  '<kurs>1.61568</kurs>\n' +
  '</devise>\n' +
  '<devise code="cny">\n' +
  '<land_de>China</land_de>\n' +
  '<land_fr>Chine</land_fr>\n' +
  '<land_it>Cina</land_it>\n' +
  '<land_en>China Yuan</land_en>\n' +
  '<waehrung>100 CNY</waehrung>\n' +
  '<kurs>15.23872</kurs>\n' +
  '</devise>\n' +
  '<devise code="crc">\n' +
  '<land_de>Costa Rica</land_de>\n' +
  '<land_fr>Costa Rica</land_fr>\n' +
  '<land_it>Costa Rica</land_it>\n' +
  '<land_en>Costa Rica</land_en>\n' +
  '<waehrung>1000 CRC</waehrung>\n' +
  '<kurs>1.77274</kurs>\n' +
  '</devise>\n' +
  '<devise code="dkk">\n' +
  '<land_de>Dänemark</land_de>\n' +
  '<land_fr>Danemark</land_fr>\n' +
  '<land_it>Danimarca</land_it>\n' +
  '<land_en>Denmark</land_en>\n' +
  '<waehrung>100 DKK</waehrung>\n' +
  '<kurs>15.92467</kurs>\n' +
  '</devise>\n' +
  '<devise code="dop">\n' +
  '<land_de>Dominikanische Rep.</land_de>\n' +
  '<land_fr>Dominicaine, Rép.</land_fr>\n' +
  '<land_it>Dominicana, Rep.</land_it>\n' +
  '<land_en>Dominican Republic</land_en>\n' +
  '<waehrung>100 DOP</waehrung>\n' +
  '<kurs>2.06508</kurs>\n' +
  '</devise>\n' +
  '<devise code="gbp">\n' +
  '<land_de>Grossbritannien</land_de>\n' +
  '<land_fr>Grande-Bretagne</land_fr>\n' +
  '<land_it>Gran Bretagna</land_it>\n' +
  '<land_en>United Kingdom</land_en>\n' +
  '<waehrung>1 GBP</waehrung>\n' +
  '<kurs>1.33658</kurs>\n' +
  '</devise>\n' +
  '<devise code="gtq">\n' +
  '<land_de>Guatemala</land_de>\n' +
  '<land_fr>Guatemala</land_fr>\n' +
  '<land_it>Guatemala</land_it>\n' +
  '<land_en>Guatemala</land_en>\n' +
  '<waehrung>100 GTQ</waehrung>\n' +
  '<kurs>13.60639</kurs>\n' +
  '</devise>\n' +
  '<devise code="hnl">\n' +
  '<land_de>Honduras</land_de>\n' +
  '<land_fr>Honduras</land_fr>\n' +
  '<land_it>Honduras</land_it>\n' +
  '<land_en>Honduras</land_en>\n' +
  '<waehrung>100 HNL</waehrung>\n' +
  '<kurs>4.23956</kurs>\n' +
  '</devise>\n' +
  '<devise code="hkd">\n' +
  '<land_de>Hong Kong</land_de>\n' +
  '<land_fr>Hong Kong</land_fr>\n' +
  '<land_it>Hong Kong</land_it>\n' +
  '<land_en>Hong Kong</land_en>\n' +
  '<waehrung>100 HKD</waehrung>\n' +
  '<kurs>12.79084</kurs>\n' +
  '</devise>\n' +
  '<devise code="inr">\n' +
  '<land_de>Indien</land_de>\n' +
  '<land_fr>Inde</land_fr>\n' +
  '<land_it>India</land_it>\n' +
  '<land_en>India</land_en>\n' +
  '<waehrung>100 INR</waehrung>\n' +
  '<kurs>1.55999</kurs>\n' +
  '</devise>\n' +
  '<devise code="idr">\n' +
  '<land_de>Indonesien</land_de>\n' +
  '<land_fr>Indonésie</land_fr>\n' +
  '<land_it>Indonesia</land_it>\n' +
  '<land_en>Indonesia</land_en>\n' +
  '<waehrung>10000 IDR</waehrung>\n' +
  '<kurs>0.73721</kurs>\n' +
  '</devise>\n' +
  '<devise code="isk">\n' +
  '<land_de>Island</land_de>\n' +
  '<land_fr>Islande</land_fr>\n' +
  '<land_it>Islanda</land_it>\n' +
  '<land_en>Iceland</land_en>\n' +
  '<waehrung>100 ISK</waehrung>\n' +
  '<kurs>0.94621</kurs>\n' +
  '</devise>\n' +
  '<devise code="ils">\n' +
  '<land_de>Israel</land_de>\n' +
  '<land_fr>Israël</land_fr>\n' +
  '<land_it>Israele</land_it>\n' +
  '<land_en>Israel</land_en>\n' +
  '<waehrung>1 ILS</waehrung>\n' +
  '<kurs>0.28723</kurs>\n' +
  '</devise>\n' +
  '<devise code="jpy">\n' +
  '<land_de>Japan</land_de>\n' +
  '<land_fr>Japon</land_fr>\n' +
  '<land_it>Giappone</land_it>\n' +
  '<land_en>Japan</land_en>\n' +
  '<waehrung>100 JPY</waehrung>\n' +
  '<kurs>0.88304</kurs>\n' +
  '</devise>\n' +
  '<devise code="kyd">\n' +
  '<land_de>Kaiman-Inseln</land_de>\n' +
  '<land_fr>Caïmanes, Iles</land_fr>\n' +
  '<land_it>Cayman, Isole</land_it>\n' +
  '<land_en>Cayman Islands</land_en>\n' +
  '<waehrung>1 KYD</waehrung>\n' +
  '<kurs>1.21865</kurs>\n' +
  '</devise>\n' +
  '<devise code="khr">\n' +
  '<land_de>Kambodscha</land_de>\n' +
  '<land_fr>Cambodge</land_fr>\n' +
  '<land_it>Cambogia</land_it>\n' +
  '<land_en>Cambodia</land_en>\n' +
  '<waehrung>10000 KHR</waehrung>\n' +
  '<kurs>2.46127</kurs>\n' +
  '</devise>\n' +
  '<devise code="cad">\n' +
  '<land_de>Kanada</land_de>\n' +
  '<land_fr>Canada</land_fr>\n' +
  '<land_it>Canada</land_it>\n' +
  '<land_en>Canada</land_en>\n' +
  '<waehrung>1 CAD</waehrung>\n' +
  '<kurs>0.78784</kurs>\n' +
  '</devise>\n' +
  '<devise code="kzt">\n' +
  '<land_de>Kasachstan</land_de>\n' +
  '<land_fr>Kazakhstan</land_fr>\n' +
  '<land_it>Kazakstan</land_it>\n' +
  '<land_en>Kazakhstan</land_en>\n' +
  '<waehrung>1000 KZT</waehrung>\n' +
  '<kurs>3.00892</kurs>\n' +
  '</devise>\n' +
  '<devise code="qar">\n' +
  '<land_de>Katar</land_de>\n' +
  '<land_fr>Qatar</land_fr>\n' +
  '<land_it>Qatar</land_it>\n' +
  '<land_en>Qatar</land_en>\n' +
  '<waehrung>100 QAR</waehrung>\n' +
  '<kurs>27.45313</kurs>\n' +
  '</devise>\n' +
  '<devise code="kes">\n' +
  '<land_de>Kenia</land_de>\n' +
  '<land_fr>Kenya</land_fr>\n' +
  '<land_it>Kenia</land_it>\n' +
  '<land_en>Kenya</land_en>\n' +
  '<waehrung>100 KES</waehrung>\n' +
  '<kurs>0.97066</kurs>\n' +
  '</devise>\n' +
  '<devise code="cop">\n' +
  '<land_de>Kolumbien</land_de>\n' +
  '<land_fr>Colombie</land_fr>\n' +
  '<land_it>Colombia</land_it>\n' +
  '<land_en>Colombia</land_en>\n' +
  '<waehrung>10000 COP</waehrung>\n' +
  '<kurs>3.37027</kurs>\n' +
  '</devise>\n' +
  '<devise code="hrk">\n' +
  '<land_de>Kroatien</land_de>\n' +
  '<land_fr>Croatie</land_fr>\n' +
  '<land_it>Croazia</land_it>\n' +
  '<land_en>Croatia</land_en>\n' +
  '<waehrung>100 HRK</waehrung>\n' +
  '<kurs>15.75180</kurs>\n' +
  '</devise>\n' +
  '<devise code="kwd">\n' +
  '<land_de>Kuwait</land_de>\n' +
  '<land_fr>Koweït</land_fr>\n' +
  '<land_it>Kuwait</land_it>\n' +
  '<land_en>Kuwait</land_en>\n' +
  '<waehrung>1 KWD</waehrung>\n' +
  '<kurs>3.31771</kurs>\n' +
  '</devise>\n' +
  '<devise code="lbp">\n' +
  '<land_de>Libanon</land_de>\n' +
  '<land_fr>Liban</land_fr>\n' +
  '<land_it>Libano</land_it>\n' +
  '<land_en>Lebanon</land_en>\n' +
  '<waehrung>10000 LBP</waehrung>\n' +
  '<kurs>6.60469</kurs>\n' +
  '</devise>\n' +
  '<devise code="lyd">\n' +
  '<land_de>Libyen</land_de>\n' +
  '<land_fr>Libye</land_fr>\n' +
  '<land_it>Libia</land_it>\n' +
  '<land_en>Libya</land_en>\n' +
  '<waehrung>1 LYD</waehrung>\n' +
  '<kurs>0.73478</kurs>\n' +
  '</devise>\n' +
  '<devise code="myr">\n' +
  '<land_de>Malaysia</land_de>\n' +
  '<land_fr>Malaisie</land_fr>\n' +
  '<land_it>Malaysia</land_it>\n' +
  '<land_en>Malaysia</land_en>\n' +
  '<waehrung>100 MYR</waehrung>\n' +
  '<kurs>24.46851</kurs>\n' +
  '</devise>\n' +
  '<devise code="mad">\n' +
  '<land_de>Marokko</land_de>\n' +
  '<land_fr>Maroc</land_fr>\n' +
  '<land_it>Marocco</land_it>\n' +
  '<land_en>Morocco</land_en>\n' +
  '<waehrung>1 MAD</waehrung>\n' +
  '<kurs>0.10666</kurs>\n' +
  '</devise>\n' +
  '<devise code="mur">\n' +
  '<land_de>Mauritius</land_de>\n' +
  '<land_fr>Maurice</land_fr>\n' +
  '<land_it>Maurizio</land_it>\n' +
  '<land_en>Mauritius</land_en>\n' +
  '<waehrung>100 MUR</waehrung>\n' +
  '<kurs>3.06250</kurs>\n' +
  '</devise>\n' +
  '<devise code="mxn">\n' +
  '<land_de>Mexiko</land_de>\n' +
  '<land_fr>Mexique</land_fr>\n' +
  '<land_it>Messico</land_it>\n' +
  '<land_en>Mexico</land_en>\n' +
  '<waehrung>1 MXN</waehrung>\n' +
  '<kurs>0.05034</kurs>\n' +
  '</devise>\n' +
  '<devise code="nzd">\n' +
  '<land_de>Neuseeland</land_de>\n' +
  '<land_fr>Nouvelle-Zélande</land_fr>\n' +
  '<land_it>Nuova Zelanda</land_it>\n' +
  '<land_en>New Zealand</land_en>\n' +
  '<waehrung>1 NZD</waehrung>\n' +
  '<kurs>0.70344</kurs>\n' +
  '</devise>\n' +
  '<devise code="ngn">\n' +
  '<land_de>Nigeria</land_de>\n' +
  '<land_fr>Nigéria</land_fr>\n' +
  '<land_it>Nigeria</land_it>\n' +
  '<land_en>Nigeria</land_en>\n' +
  '<waehrung>1000 NGN</waehrung>\n' +
  '<kurs>2.77581</kurs>\n' +
  '</devise>\n' +
  '<devise code="nok">\n' +
  '<land_de>Norwegen</land_de>\n' +
  '<land_fr>Norvège</land_fr>\n' +
  '<land_it>Norvegia</land_it>\n' +
  '<land_en>Norway</land_en>\n' +
  '<waehrung>100 NOK</waehrung>\n' +
  '<kurs>12.03345</kurs>\n' +
  '</devise>\n' +
  '<devise code="omr">\n' +
  '<land_de>Oman</land_de>\n' +
  '<land_fr>Oman</land_fr>\n' +
  '<land_it>Oman</land_it>\n' +
  '<land_en>Oman</land_en>\n' +
  '<waehrung>1 OMR</waehrung>\n' +
  '<kurs>2.60152</kurs>\n' +
  '</devise>\n' +
  '<devise code="pkr">\n' +
  '<land_de>Pakistan</land_de>\n' +
  '<land_fr>Pakistan</land_fr>\n' +
  '<land_it>Pakistan</land_it>\n' +
  '<land_en>Pakistan</land_en>\n' +
  '<waehrung>100 PKR</waehrung>\n' +
  '<kurs>0.90598</kurs>\n' +
  '</devise>\n' +
  '<devise code="pab">\n' +
  '<land_de>Panama</land_de>\n' +
  '<land_fr>Panama</land_fr>\n' +
  '<land_it>Panama</land_it>\n' +
  '<land_en>Panama</land_en>\n' +
  '<waehrung>1 PAB</waehrung>\n' +
  '<kurs>0.99929</kurs>\n' +
  '</devise>\n' +
  '<devise code="pen">\n' +
  '<land_de>Peru</land_de>\n' +
  '<land_fr>Pérou</land_fr>\n' +
  '<land_it>Perù</land_it>\n' +
  '<land_en>Peru Nuevo</land_en>\n' +
  '<waehrung>100 PEN</waehrung>\n' +
  '<kurs>30.87576</kurs>\n' +
  '</devise>\n' +
  '<devise code="php">\n' +
  '<land_de>Philippinen</land_de>\n' +
  '<land_fr>Philippines</land_fr>\n' +
  '<land_it>Filippine</land_it>\n' +
  '<land_en>Philippines</land_en>\n' +
  '<waehrung>100 PHP</waehrung>\n' +
  '<kurs>1.99999</kurs>\n' +
  '</devise>\n' +
  '<devise code="pln">\n' +
  '<land_de>Polen</land_de>\n' +
  '<land_fr>Pologne</land_fr>\n' +
  '<land_it>Polonia</land_it>\n' +
  '<land_en>Poland</land_en>\n' +
  '<waehrung>100 PLN</waehrung>\n' +
  '<kurs>28.24460</kurs>\n' +
  '</devise>\n' +
  '<devise code="ron">\n' +
  '<land_de>Rumänien</land_de>\n' +
  '<land_fr>Roumanie</land_fr>\n' +
  '<land_it>Romania</land_it>\n' +
  '<land_en>Romania New</land_en>\n' +
  '<waehrung>100 RON</waehrung>\n' +
  '<kurs>25.57571</kurs>\n' +
  '</devise>\n' +
  '<devise code="rub">\n' +
  '<land_de>Russland</land_de>\n' +
  '<land_fr>Russie</land_fr>\n' +
  '<land_it>Russa</land_it>\n' +
  '<land_en>Russia</land_en>\n' +
  '<waehrung>100 RUB</waehrung>\n' +
  '<kurs>1.73277</kurs>\n' +
  '</devise>\n' +
  '<devise code="sar">\n' +
  '<land_de>Saudi-Arabien</land_de>\n' +
  '<land_fr>Arabie Saoudite</land_fr>\n' +
  '<land_it>Arabia Saudita</land_it>\n' +
  '<land_en>Saudi Arabia</land_en>\n' +
  '<waehrung>100 SAR</waehrung>\n' +
  '<kurs>26.64784</kurs>\n' +
  '</devise>\n' +
  '<devise code="sek">\n' +
  '<land_de>Schweden</land_de>\n' +
  '<land_fr>Suède</land_fr>\n' +
  '<land_it>Svezia</land_it>\n' +
  '<land_en>Sweden</land_en>\n' +
  '<waehrung>100 SEK</waehrung>\n' +
  '<kurs>12.01607</kurs>\n' +
  '</devise>\n' +
  '<devise code="rsd">\n' +
  '<land_de>Serbien</land_de>\n' +
  '<land_fr>Serbie</land_fr>\n' +
  '<land_it>Serbia</land_it>\n' +
  '<land_en>Serbia</land_en>\n' +
  '<waehrung>100 RSD</waehrung>\n' +
  '<kurs>1.00432</kurs>\n' +
  '</devise>\n' +
  '<devise code="sgd">\n' +
  '<land_de>Singapur</land_de>\n' +
  '<land_fr>Singapour</land_fr>\n' +
  '<land_it>Singapore</land_it>\n' +
  '<land_en>Singapore</land_en>\n' +
  '<waehrung>1 SGD</waehrung>\n' +
  '<kurs>0.74452</kurs>\n' +
  '</devise>\n' +
  '<devise code="lkr">\n' +
  '<land_de>Sri Lanka</land_de>\n' +
  '<land_fr>Sri Lanka</land_fr>\n' +
  '<land_it>Sri Lanka</land_it>\n' +
  '<land_en>Sri Lanka</land_en>\n' +
  '<waehrung>1000 LKR</waehrung>\n' +
  '<kurs>6.54417</kurs>\n' +
  '</devise>\n' +
  '<devise code="krw">\n' +
  '<land_de>Süd-Korea</land_de>\n' +
  '<land_fr>Corée du Sud</land_fr>\n' +
  '<land_it>Corea del Sud</land_it>\n' +
  '<land_en>Korea (South)</land_en>\n' +
  '<waehrung>100 KRW</waehrung>\n' +
  '<kurs>0.09300</kurs>\n' +
  '</devise>\n' +
  '<devise code="zar">\n' +
  '<land_de>Südafrika</land_de>\n' +
  '<land_fr>Afrique du sud</land_fr>\n' +
  '<land_it>Africa del Sud</land_it>\n' +
  '<land_en>South Africa</land_en>\n' +
  '<waehrung>1 ZAR</waehrung>\n' +
  '<kurs>0.07995</kurs>\n' +
  '</devise>\n' +
  '<devise code="twd">\n' +
  '<land_de>Taiwan</land_de>\n' +
  '<land_fr>Taïwan</land_fr>\n' +
  '<land_it>Taiwan</land_it>\n' +
  '<land_en>Taiwan New</land_en>\n' +
  '<waehrung>100 TWD</waehrung>\n' +
  '<kurs>3.33966</kurs>\n' +
  '</devise>\n' +
  '<devise code="tzs">\n' +
  '<land_de>Tansania</land_de>\n' +
  '<land_fr>Tanzanie</land_fr>\n' +
  '<land_it>Tanzania</land_it>\n' +
  '<land_en>Tanzania</land_en>\n' +
  '<waehrung>1000 TZS</waehrung>\n' +
  '<kurs>0.44611</kurs>\n' +
  '</devise>\n' +
  '<devise code="thb">\n' +
  '<land_de>Thailand</land_de>\n' +
  '<land_fr>Thaïlande</land_fr>\n' +
  '<land_it>Thailandia</land_it>\n' +
  '<land_en>Thailand</land_en>\n' +
  '<waehrung>100 THB</waehrung>\n' +
  '<kurs>3.04477</kurs>\n' +
  '</devise>\n' +
  '<devise code="czk">\n' +
  '<land_de>Tschechien</land_de>\n' +
  '<land_fr>Tchèque, Rép.</land_fr>\n' +
  '<land_it>Ceca, Rep.</land_it>\n' +
  '<land_en>Czech Republic</land_en>\n' +
  '<waehrung>100 CZK</waehrung>\n' +
  '<kurs>4.60180</kurs>\n' +
  '</devise>\n' +
  '<devise code="tnd">\n' +
  '<land_de>Tunesien</land_de>\n' +
  '<land_fr>Tunisie</land_fr>\n' +
  '<land_it>Tunisia</land_it>\n' +
  '<land_en>Tunisia</land_en>\n' +
  '<waehrung>100 TND</waehrung>\n' +
  '<kurs>40.05186</kurs>\n' +
  '</devise>\n' +
  '<devise code="try">\n' +
  '<land_de>Türkei</land_de>\n' +
  '<land_fr>Turquie</land_fr>\n' +
  '<land_it>Turchia</land_it>\n' +
  '<land_en>Turkey</land_en>\n' +
  '<waehrung>100 TRY</waehrung>\n' +
  '<kurs>26.25024</kurs>\n' +
  '</devise>\n' +
  '<devise code="uah">\n' +
  '<land_de>Ukraine</land_de>\n' +
  '<land_fr>Ukraine</land_fr>\n' +
  '<land_it>Ucraina</land_it>\n' +
  '<land_en>Ukraine</land_en>\n' +
  '<waehrung>100 UAH</waehrung>\n' +
  '<kurs>3.60886</kurs>\n' +
  '</devise>\n' +
  '<devise code="huf">\n' +
  '<land_de>Ungarn</land_de>\n' +
  '<land_fr>Hongrie</land_fr>\n' +
  '<land_it>Ungheria</land_it>\n' +
  '<land_en>Hungary</land_en>\n' +
  '<waehrung>1000 HUF</waehrung>\n' +
  '<kurs>3.80538</kurs>\n' +
  '</devise>\n' +
  '<devise code="uyu">\n' +
  '<land_de>Uruguay</land_de>\n' +
  '<land_fr>Uruguay</land_fr>\n' +
  '<land_it>Uruguay</land_it>\n' +
  '<land_en>Uruguay</land_en>\n' +
  '<waehrung>100 UYU</waehrung>\n' +
  '<kurs>3.48916</kurs>\n' +
  '</devise>\n' +
  '<devise code="vef">\n' +
  '<land_de>Venezuela</land_de>\n' +
  '<land_fr>Venezuela</land_fr>\n' +
  '<land_it>Venezuela</land_it>\n' +
  '<land_en>Venezuela</land_en>\n' +
  '<waehrung>100 VEF</waehrung>\n' +
  '<kurs>9.94174</kurs>\n' +
  '</devise>\n' +
  '<devise code="aed">\n' +
  '<land_de>Vereinigte Arabische Emirate</land_de>\n' +
  '<land_fr>Emirats Arabes Unis</land_fr>\n' +
  '<land_it>Emirati Arabi Uniti</land_it>\n' +
  '<land_en>United Arab Emirates</land_en>\n' +
  '<waehrung>100 AED</waehrung>\n' +
  '<kurs>27.21389</kurs>\n' +
  '</devise>\n' +
  '<devise code="vnd">\n' +
  '<land_de>Viet Nam</land_de>\n' +
  '<land_fr>Viêt Nam</land_fr>\n' +
  '<land_it>Vietnam</land_it>\n' +
  '<land_en>Viet Nam</land_en>\n' +
  '<waehrung>10000 VND</waehrung>\n' +
  '<kurs>0.44107</kurs>\n' +
  '</devise>\n' +
  '</wechselkurse>';

describe('Currencies are parsed properly', () => {
  test('error case', () => {
    const dispatchMock = jest.fn();
    parseCurrencyXML('foo', { dispatch: dispatchMock });
    expect(dispatchMock).toBeCalledWith({
      currencyDate: new Date('2000-01-01'),
      currencyObject: {
        EUR: 1.17796,
        USD: 0.99205,
        CHF: 1,
        AED: 0.2649167,
        ALL: 0.008944,
        ARS: 0.05195,
        AUD: 0.77355,
        AZN: 0.58259,
        BAM: 0.6101806,
        BDT: 0.0117518,
        BGN: 0.6102572,
        BHD: 2.59435,
        BRL: 0.3026607,
        CAD: 0.78292,
        CLP: 0.00161429,
        CNY: 0.1513162,
        COP: 0.000340239,
        CRC: 0.00171896,
        CZK: 0.0468083,
        DKK: 0.1607132,
        DOP: 0.0200812,
        EGP: 0.0549555,
        ETB: 0.0357578,
        GBP: 1.34254,
        GTQ: 0.1325793,
        HKD: 0.124335,
        HNL: 0.0412188,
        HRK: 0.160991,
        HUF: 0.00386791,
        IDR: 0.000073038,
        ILS: 0.28701,
        INR: 0.0152953,
        ISK: 0.009519,
        JPY: 0.0088304,
        KES: 0.0094505,
        KHR: 0.000240016,
        KRW: 0.0009148,
        KWD: 3.24657,
        KYD: 1.1865,
        KZT: 0.0029631,
        LBP: 0.00064433,
        LKR: 0.00632967,
        LYD: 0.72607,
        MAD: 0.10617,
        MUR: 0.0307404,
        MXN: 0.05169,
        MYR: 0.246281,
        NGN: 0.0027139,
        NOK: 0.1234765,
        NZD: 0.71013,
        OMR: 2.53249,
        PAB: 0.97293,
        PEN: 0.3030944,
        PHP: 0.0193061,
        PKR: 0.0087885,
        PLN: 0.286039,
        QAR: 0.2672893,
        RON: 0.2576692,
        RSD: 0.0101189,
        RUB: 0.017273,
        SAR: 0.259428,
        SEK: 0.1219009,
        SGD: 0.73629,
        THB: 0.0304708,
        TND: 0.3989229,
        TRY: 0.2564737,
        TWD: 0.0329384,
        TZS: 0.00043415,
        UAH: 0.0343762,
        UYU: 0.034126,
        VEF: 0.0964561,
        VND: 0.000042925,
        ZAR: 0.07911,
      },
      type: 'UPDATE_CURRENCIES',
      validCurrencies: false,
    });
  });

  test('success case', () => {
    const dispatchMock = jest.fn();
    parseCurrencyXML(xmlString, { dispatch: dispatchMock });
    expect(dispatchMock).toBeCalledWith({
      currencyDate: new Date('2017-12-27'),
      currencyObject: {
        EUR: 1.17796,
        USD: 0.99205,
        CHF: 1,
        AED: 0.2649167,
        ALL: 0.008944,
        ARS: 0.05195,
        AUD: 0.77355,
        AZN: 0.58259,
        BAM: 0.6101806,
        BDT: 0.0117518,
        BGN: 0.6102572,
        BHD: 2.59435,
        BRL: 0.3026607,
        CAD: 0.78292,
        CLP: 0.00161429,
        CNY: 0.1513162,
        COP: 0.000340239,
        CRC: 0.00171896,
        CZK: 0.0468083,
        DKK: 0.1607132,
        DOP: 0.0200812,
        EGP: 0.0549555,
        ETB: 0.0357578,
        GBP: 1.34254,
        GTQ: 0.1325793,
        HKD: 0.124335,
        HNL: 0.0412188,
        HRK: 0.160991,
        HUF: 0.00386791,
        IDR: 0.000073038,
        ILS: 0.28701,
        INR: 0.0152953,
        ISK: 0.009519,
        JPY: 0.0088304,
        KES: 0.0094505,
        KHR: 0.000240016,
        KRW: 0.0009148,
        KWD: 3.24657,
        KYD: 1.1865,
        KZT: 0.0029631,
        LBP: 0.00064433,
        LKR: 0.00632967,
        LYD: 0.72607,
        MAD: 0.10617,
        MUR: 0.0307404,
        MXN: 0.05169,
        MYR: 0.246281,
        NGN: 0.0027139,
        NOK: 0.1234765,
        NZD: 0.71013,
        OMR: 2.53249,
        PAB: 0.97293,
        PEN: 0.3030944,
        PHP: 0.0193061,
        PKR: 0.0087885,
        PLN: 0.286039,
        QAR: 0.2672893,
        RON: 0.2576692,
        RSD: 0.0101189,
        RUB: 0.017273,
        SAR: 0.259428,
        SEK: 0.1219009,
        SGD: 0.73629,
        THB: 0.0304708,
        TND: 0.3989229,
        TRY: 0.2564737,
        TWD: 0.0329384,
        TZS: 0.00043415,
        UAH: 0.0343762,
        UYU: 0.034126,
        VEF: 0.0964561,
        VND: 0.000042925,
        ZAR: 0.07911,
      },
      type: 'UPDATE_CURRENCIES',
      validCurrencies: true,
    });
  });
});
