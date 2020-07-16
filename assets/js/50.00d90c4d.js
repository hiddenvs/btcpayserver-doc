(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{565:function(e,r,t){"use strict";t.r(r);var a=t(26),o=Object(a.a)({},(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"dynamic-dns-service"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dynamic-dns-service"}},[e._v("#")]),e._v(" Dynamic DNS Service")]),e._v(" "),t("h2",{attrs:{id:"motivation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#motivation"}},[e._v("#")]),e._v(" Motivation")]),e._v(" "),t("p",[e._v("Dynamic DNS is needed if:")]),e._v(" "),t("ol",[t("li",[e._v("Install BTCPay Server on a host provider which do not provide a default domain for your server,")]),e._v(" "),t("li",[e._v("You don't want to buy your own domain name (ie, "),t("code",[e._v("mybusiness.com")]),e._v(")")]),e._v(" "),t("li",[e._v("Need to access your BTCPay Server over internet via HTTPS. (Your BTCPayServer is accessed by other internet users)")])]),e._v(" "),t("p",[e._v("Or")]),e._v(" "),t("ol",[t("li",[e._v("BTCPay Server is installed on a hosting provider which does not provide a default domain for your server.")]),e._v(" "),t("li",[e._v("Need to access your BTCPay Server over internet via HTTPS.")])]),e._v(" "),t("p",[e._v("Then you want to use BTCPayServer Dynamic DNS service.")]),e._v(" "),t("p",[e._v("You "),t("strong",[e._v("don't need")]),e._v(" Dynamic DNS Service if:")]),e._v(" "),t("ol",[t("li",[e._v("You host BTCPayServer at home and only access it via the local network (just using HTTP locally or using Tor is fine)")]),e._v(" "),t("li",[e._v("Your BTCPayServer should be only accessed by yourself (Just use Tor browser and the Tor address of you instance)")]),e._v(" "),t("li",[e._v("Your hosting provider provide some domain name for your server by default (ie, Lunanode for example provide a subdomain of "),t("code",[e._v(".lndyn.com")]),e._v(" for free, and Azure provides for "),t("code",[e._v(".azurewebsites.net")]),e._v(")")])]),e._v(" "),t("p",[e._v("A Dynamic DNS Providers allows you to have a free domain like "),t("code",[e._v("example.ddns.net")]),e._v(" for your server, additionally Dynamic DNS Providers exposes a simple API to update the DNS record automatically when your BTCPayServer instance change its external IP address.")]),e._v(" "),t("p",[e._v("BTCPayServer, when configured to use Dynamic DNS, will periodically check and update the DNS record if an external IP change is detected.")]),e._v(" "),t("h2",{attrs:{id:"how-to-use"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#how-to-use"}},[e._v("#")]),e._v(" How to use")]),e._v(" "),t("h3",{attrs:{id:"step-1-create-the-domain"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#step-1-create-the-domain"}},[e._v("#")]),e._v(" Step 1: Create the domain")]),e._v(" "),t("p",[e._v("First, create an account on a Dynamic DNS provider, the most popular providers are:")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://www.noip.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("noip"),t("OutboundLink")],1),e._v(" (free)")]),e._v(" "),t("li",[t("a",{attrs:{href:"https://www.duckdns.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("duckdns"),t("OutboundLink")],1),e._v(" (free)")]),e._v(" "),t("li",[t("a",{attrs:{href:"https://dyn.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("dyndns"),t("OutboundLink")],1),e._v(" (not free)")]),e._v(" "),t("li",[t("a",{attrs:{href:"https://domains.google.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("google"),t("OutboundLink")],1),e._v(" (not free)")])]),e._v(" "),t("p",[e._v("Once you created an account, you can create a free domain name through their website.")]),e._v(" "),t("h3",{attrs:{id:"step-2-configure-dynamic-dns-on-btcpayserver"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#step-2-configure-dynamic-dns-on-btcpayserver"}},[e._v("#")]),e._v(" Step 2: Configure Dynamic DNS on BTCPayServer")]),e._v(" "),t("p",[e._v("You need to be administrator of your instance, go to Server Settings / Services / Dynamic DNS.")]),e._v(" "),t("ul",[t("li",[e._v("Add a Dynamic DNS")]),e._v(" "),t("li",[e._v("Select your Dynamic DNS provider")]),e._v(" "),t("li",[e._v("Enter the domain that you created in step 1")]),e._v(" "),t("li",[e._v("Add the login and password that you created in step 1")]),e._v(" "),t("li",[e._v("Check the "),t("code",[e._v("enabled")]),e._v(" box")]),e._v(" "),t("li",[e._v("Save")])]),e._v(" "),t("h3",{attrs:{id:"step-3-configure-your-btcpay-docker-install-to-provide-https-certificates"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#step-3-configure-your-btcpay-docker-install-to-provide-https-certificates"}},[e._v("#")]),e._v(" Step 3: Configure your BTCPay docker install to provide HTTPS certificates")]),e._v(" "),t("p",[e._v("If you are using a docker deployment, you also need to update your BTCPayServer install.\nConnect via SSH to your instance and run:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("BTCPAY_ADDITIONAL_HOSTS")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"example.ddns.net"')]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(".")]),e._v(" btcpay-setup.sh -i\n")])])]),t("p",[e._v("If you have any other hosts in "),t("code",[e._v("BTCPAY_ADDITIONAL_HOSTS")]),e._v(", just separate them with "),t("code",[e._v(",")]),e._v(".")])])}),[],!1,null,null,null);r.default=o.exports}}]);