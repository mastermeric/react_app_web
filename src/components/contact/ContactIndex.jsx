import React from "react";
import "../../App.css";
import BackKey from "../contact/BackKey";
import BackMain from "./BackMain";
//import MetaTags from 'react-meta-tags';
import {Helmet} from "react-helmet";

const ContactIndex = () => {
  return (
    <div className="application">
       <Helmet>
        <title>Contact</title>
        <meta data-react-helmet="true" name="description" content="trade, sales, abroad, Dubai, DUBAI, dubai, turkey, Turkey | TRADE-IST Brokerage and Trading | Afghanistan | Albania| Algeria| Andorra| Angola| Antigua and Barbuda| Argentina| Armenia| Australia| Austria| Azerbaijan| The Bahamas| Bahrain| Bangladesh| Barbados| Belarus| Belgium| Belize| Benin| Bhutan | Bolivia | Bosnia and Herzegovina|Botswana|Brazil|Brunei|Bulgaria|Burkina Faso|Burundi|Cambodia|Cameroon|Canada|Cape Verde|Central African Republic|Chad|Chile|China | Colombia|Comoros|Congo, Republic of the|Congo, Democratic Republic of the|Costa Rica|Cote d'Ivoire|Croatia|Cuba|Cyprus|Czech Republic|Denmark|Djibouti|Dominica|Dominican Republic|East Timor (Timor-Leste)|Ecuador|Egypt|El Salvador|Equatorial Guinea|Eritrea|Estonia|Ethiopia|Fiji|Finland|France|Gabon|The Gambia|Georgia|Germany|Ghana|Greece|Grenada|Guatemala|Guinea|Guinea-Bissau|Guyana|Haiti|Honduras|Hungary|Iceland|India|Indonesia|Iran|Iraq|Ireland|Israel|Italy|Jamaica|Japan|Jordan|Kazakhstan|Kenya|Kiribati|Korea, North|Korea, South|Kosovo|Kuwait|Kyrgyzstan|Laos|Latvia|Lebanon|Lesotho|Liberia|Libya|Liechtenstein|Lithuania|Luxembourg|Macedonia|Madagascar|Malawi|Malaysia|Maldives|Mali|Malta|Marshall Islands|Mauritania|Mauritius|Mexico|Micronesia, Federated States of|Moldova|Monaco|Mongolia|Montenegro|Morocco|Mozambique|Myanmar (Burma)|Namibia|Nauru|Nepal|Netherlands|New Zealand|Nicaragua|Niger|Nigeria|Norway|Oman|Pakistan|Palau|Panama|Papua New Guinea|Paraguay|Peru|Philippines|Poland|Portugal|Qatar|Romania|Russia|Rwanda|Saint Kitts and Nevis|Saint Lucia|Saint Vincent and the Grenadines|Samoa|San Marino|Sao Tome and Principe|Saudi Arabia|Senegal|Serbia|Seychelles|Sierra Leone|Singapore|Slovakia|Slovenia|Solomon Islands|Somalia|South Africa|South Sudan|Spain|Sri Lanka|Sudan|Suriname|Swaziland|Sweden|Switzerland|Syria|Taiwan|Tajikistan|Tanzania|Thailand|Togo|Tonga|Trinidad and Tobago|Tunisia|Turkey|Turkmenistan|Tuvalu|Uganda|Ukraine|United Arab Emirates|United Kingdom|United States of America|Uruguay|Uzbekistan|Vanuatu|Vatican City (Holy See)|Venezuela|Vietnam|Yemen|Zambia|Zimbabwe"/>
        <meta property="og:title" content="Contact" />
      </Helmet>
      <div className="family-button">
      <BackKey></BackKey>
      </div>
      <div className="contact-index">
      <div className="mapouter">
        <div className="gmap_canvas">
          <iframe width="100%" 
          height="500" 
          id="gmap_canvas" 
          src="https://maps.google.com/maps?q=dubai&t=&z=13&ie=UTF8&iwloc=&output=embed" 
          frameborder="0" 
          scrolling="no" 
          marginheight="0" 
          marginwidth="0">
        </iframe>
        <a href="https://123movies-to.org"></a>
        <br/>
      </div>
      </div>
      <div className="iletisimAdress">
      TRADE-IST Brokerage and Trading<br></br>
      Dubai / UAE | Tel UAE: +971 52 493 6606<br></br>  
      TR: +90 536 980 2782 <br></br>
      www.trade-ist.com| support@trade-ist.com<br></br>
      </div>
      </div>
    </div>
  );
};

export default ContactIndex;
