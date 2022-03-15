"use strict";(self.webpackChunkbeta_BNB_Docs=self.webpackChunkbeta_BNB_Docs||[]).push([[1854],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return p}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=c(n),p=r,h=m["".concat(s,".").concat(p)]||m[p]||u[p]||o;return n?a.createElement(h,l(l({ref:t},d),{},{components:n})):a.createElement(h,l({ref:t},d))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},75893:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return d},default:function(){return m}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),l=["components"],i={},s="Cross-Chain Transfer Token Transfer",c={unversionedId:"learn/cross-chain-transfer",id:"learn/cross-chain-transfer",isDocsHomePage:!1,title:"Cross-Chain Transfer Token Transfer",description:"Cross-chain transfers only support bound BEP2 or BEP8 tokens on BC and BEP20 tokens on BSC.",source:"@site/docs/learn/cross-chain-transfer.md",sourceDirName:"learn",slug:"/learn/cross-chain-transfer",permalink:"/bnb-chain.github.io/docs/learn/cross-chain-transfer",editUrl:"https://github.com/bnb-chain/bnb-chain.github.io/docs/docs/learn/cross-chain-transfer.md",tags:[],version:"current",frontMatter:{},sidebar:"bscSideBar",previous:{title:"Build-in System Contracts",permalink:"/bnb-chain.github.io/docs/learn/system-contract"},next:{title:"BSC Relayer",permalink:"/bnb-chain.github.io/docs/learn/bsc-relayer"}},d=[{value:"Verify Token Info",id:"verify-token-info",children:[],level:2},{value:"Transfer BNB from BC to BSC",id:"transfer-bnb-from-bc-to-bsc",children:[],level:2},{value:"Transfer BNB from BSC to BC",id:"transfer-bnb-from-bsc-to-bc",children:[{value:"transferOut",id:"transferout",children:[],level:3},{value:"batchTransferOutBNB",id:"batchtransferoutbnb",children:[],level:3}],level:2},{value:"Transfer BEP2 to BSC",id:"transfer-bep2-to-bsc",children:[],level:2},{value:"Transfer BEP20 to BC",id:"transfer-bep20-to-bc",children:[{value:"transferOut",id:"transferout-1",children:[],level:3},{value:"Mint",id:"mint",children:[{value:"Mint token on BC",id:"mint-token-on-bc",children:[],level:4},{value:"Mint token on BSC",id:"mint-token-on-bsc",children:[],level:4}],level:3}],level:2}],u={toc:d};function m(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"cross-chain-transfer-token-transfer"},"Cross-Chain Transfer Token Transfer"),(0,o.kt)("p",null,"Cross-chain transfers only support bound BEP2 or BEP8 tokens on BC and BEP20 tokens on BSC."),(0,o.kt)("h2",{id:"verify-token-info"},"Verify Token Info"),(0,o.kt)("p",null,"First, you should make sure that it's already bound. For example, you could see the binding info of ",(0,o.kt)("strong",{parentName:"p"},"BNB"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"## mainnet\nbnbcli token info --symbol BNB --trust-node --node http://dataseed4.binance.org:80\n\n## testnet\ntbnbcli token info --symbol BNB --trust-node --node http://data-seed-pre-0-s3.binance.org:80 \n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "bnbchain/Token",\n  "value": {\n    "name": "Binance Chain Native Token",\n    "symbol": "BNB",\n    "original_symbol": "BNB",\n    "total_supply": "200000000.00000000",\n    "owner": "tbnb1l9ffdr8e2pk7h4agvhwcslh2urwpuhqm2u82hy",\n    "mintable": false,\n    "contract_address": "0x0000000000000000000000000000000000000000",\n    "contract_decimals": 18\n  }\n}\n')),(0,o.kt)("p",null,"As BNB is the native token on both chains, so we use ",(0,o.kt)("inlineCode",{parentName:"p"},"0x0000000000000000000000000000000000000000")," as the corresponding contract address. Besides, on BSC, the native token decimals is 18, while the decimals on BC is 8. So if you transfer 1e8:BNB to BSC, the recipient balance will gain 1e18."),(0,o.kt)("h2",{id:"transfer-bnb-from-bc-to-bsc"},"Transfer BNB from BC to BSC"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"## mainnet\nbnbcli bridge transfer-out --to 0xEe9546E92e6876EdF6a234eFFbD72d75360d91f0 --expire-time 1597543193 --chain-id Binance-Chain-Tigris --from owner --amount 100000000:BNB --node http://dataseed4.binance.org:80\n\n## testnet\ntbnbcli bridge transfer-out --to 0xEe9546E92e6876EdF6a234eFFbD72d75360d91f0 --expire-time 1597543193 --chain-id Binance-Chain-Ganges --from owner --amount 100000000:BNB --node http://data-seed-pre-0-s3.binance.org:80\n")),(0,o.kt)("p",null,"Result:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"Committed at block 465899 (tx hash: 68FFF82197E27A3EC14AFF8C99A035FA9CA7120312AA55E98D11DFC0F8D9F3B9, response: {Code:0 Data:[] Log:Msg 0:  Info: GasWanted:0 GasUsed:0 Events:[{Type: Attributes:[{Key:[84 114 97 110 115 102 101 114 79 117 116 83 101 113 117 101 110 99 101] Value:[49 49] XXX_NoUnkeyedLiteral:{} XXX_unrecognized:[] XXX_sizecache:0} {Key:[69 120 112 105 114 101 84 105 109 101] Value:[49 53 57 55 53 52 51 49 57 51] XXX_NoUnkeyedLiteral:{} XXX_unrecognized:[] XXX_sizecache:0} {Key:[97 99 116 105 111 110] Value:[99 114 111 115 115 84 114 97 110 115 102 101 114 79 117 116] XXX_NoUnkeyedLiteral:{} XXX_unrecognized:[] XXX_sizecache:0}] XXX_NoUnkeyedLiteral:{} XXX_unrecognized:[] XXX_sizecache:0}] Codespace: XXX_NoUnkeyedLiteral:{} XXX_unrecognized:[] XXX_sizecache:0})\n")),(0,o.kt)("h2",{id:"transfer-bnb-from-bsc-to-bc"},"Transfer BNB from BSC to BC"),(0,o.kt)("h3",{id:"transferout"},"transferOut"),(0,o.kt)("p",null,"Call ",(0,o.kt)("strong",{parentName:"p"},"transferOut")," of ",(0,o.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/binance-chain/bsc-genesis-contract/master/abi/tokenhub.abi"},"TokenHub contract")," in ",(0,o.kt)("a",{parentName:"p",href:"https://www.myetherwallet.com/"},"MyEtherWallet"),":"),(0,o.kt)("img",{src:"https://lh3.googleusercontent.com/q8-nnt12h8gvYyMe6iwLalwzY-1jHfQ11BsSyIz3qkQPCjp_-D-dIzPxZ-HuMJngCxTs7pt65-zSUIYImpsoO8bJ_QC_pyfPMu_2O7Lh65uDvVXrkhKqOakI070vKuEK3UNnlk8m",alt:"img",style:{zoom:"20%"}}),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Parameter Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"contractAddr"),(0,o.kt)("td",{parentName:"tr",align:null},"address"),(0,o.kt)("td",{parentName:"tr",align:null},"for BNB, the value must be 0x0000000000000000000000000000000000000000")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"recipient"),(0,o.kt)("td",{parentName:"tr",align:null},"address"),(0,o.kt)("td",{parentName:"tr",align:null},"decode bech32 address, starting with ",(0,o.kt)("inlineCode",{parentName:"td"},"0x")," . To transfer to hex string. This is a online too to decode bech32: ",(0,o.kt)("a",{parentName:"td",href:"https://slowli.github.io/bech32-buffer/"},"https://slowli.github.io/bech32-buffer/"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"amount"),(0,o.kt)("td",{parentName:"tr",align:null},"uint256"),(0,o.kt)("td",{parentName:"tr",align:null},"The BNB decimals on  BSC is 18. If you want to transfer one BNB, then the value should be 1e18. Besides, the value must be N * 1e10")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"expireTime"),(0,o.kt)("td",{parentName:"tr",align:null},"uint256"),(0,o.kt)("td",{parentName:"tr",align:null},"Timestamp, counted by  second")))),(0,o.kt)("p",null,"The value here should follow this equation:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"txValue = (amount + RelayFee)/1e18\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"RelayFee")," should be 0.01BNB and it can be updated by on-chain governance. For example, if you transfer 1BNB from BSC to BC, the value should be at least 1.01BNB."),(0,o.kt)("p",null,"After all the above parameters have been set to proper values, users can click the transact button to build transactions, and metamask plugin will be ejected. Then users can click the confirm button in metamask to sign and broadcast transactions."),(0,o.kt)("h3",{id:"batchtransferoutbnb"},"batchTransferOutBNB"),(0,o.kt)("p",null,"Call ",(0,o.kt)("strong",{parentName:"p"},"batchTransferOutBNB")," of TokenHub contract in MyEtherWallet:"),(0,o.kt)("img",{src:"https://github.com/binance-chain/docs-site/raw/master/docs/assets/batchTransferOutBNB.png",alt:"img",style:{zoom:"20%"}}),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Parameter Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"recipientAddrs"),(0,o.kt)("td",{parentName:"tr",align:null},"address[]"),(0,o.kt)("td",{parentName:"tr",align:null},"decode bech32 address  to hex string. This is a online too to decode bech32: ",(0,o.kt)("a",{parentName:"td",href:"https://slowli.github.io/bech32-buffer/0"},"https://slowli.github.io/bech32-buffer/0"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"amounts"),(0,o.kt)("td",{parentName:"tr",align:null},"uint256[]"),(0,o.kt)("td",{parentName:"tr",align:null},"amount for each  recipient, should be N * 1e10")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"refundAddrs"),(0,o.kt)("td",{parentName:"tr",align:null},"address[]"),(0,o.kt)("td",{parentName:"tr",align:null},"sender can specify  some address as the refund address if the cross chain transfer is failed.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"expireTime"),(0,o.kt)("td",{parentName:"tr",align:null},"uint256"),(0,o.kt)("td",{parentName:"tr",align:null},"Timestamp, counted by  second")))),(0,o.kt)("p",null,"The value here should follow this equation:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"txValue = (sumOfAmounts + RelayFee * batchSize)/1e18\n")),(0,o.kt)("h2",{id:"transfer-bep2-to-bsc"},"Transfer BEP2 to BSC"),(0,o.kt)("p",null,"Execute the following command to transfer ABC-A64 token to BSC:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"## mainnet\nbnbcli bridge transfer-out --to 0xEe9546E92e6876EdF6a234eFFbD72d75360d91f0 --expire-time 1597543193 --chain-id Binance-Chain-Tigris --from owner --amount 10000000000:ABC-A64 --node http://dataseed4.binance.org:80\n\n## testnet\ntbnbcli bridge transfer-out --to 0xEe9546E92e6876EdF6a234eFFbD72d75360d91f0 --expire-time 1597543193 --chain-id Binance-Chain-Ganges --from owner --amount 10000000000:ABC-A64 --node http://data-seed-pre-0-s3.binance.org:80\n")),(0,o.kt)("h2",{id:"transfer-bep20-to-bc"},"Transfer BEP20 to BC"),(0,o.kt)("p",null,"Before calling ",(0,o.kt)("strong",{parentName:"p"},"transferOut")," or ",(0,o.kt)("strong",{parentName:"p"},"batchTransferOut"),", users need to call ",(0,o.kt)("strong",{parentName:"p"},"approve")," method to grant enough allowance to TokenHub contract. For ",(0,o.kt)("strong",{parentName:"p"},"transferOut")," method, the allowance should equal the transfer amount. For ",(0,o.kt)("strong",{parentName:"p"},"batchTransferOut"),", the allowance should be the sum of the amount array."),(0,o.kt)("h3",{id:"transferout-1"},"transferOut"),(0,o.kt)("img",{src:"https://lh3.googleusercontent.com/q8-nnt12h8gvYyMe6iwLalwzY-1jHfQ11BsSyIz3qkQPCjp_-D-dIzPxZ-HuMJngCxTs7pt65-zSUIYImpsoO8bJ_QC_pyfPMu_2O7Lh65uDvVXrkhKqOakI070vKuEK3UNnlk8m",alt:"img",style:{zoom:"25%"}}),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Parameter Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"contractAddr"),(0,o.kt)("td",{parentName:"tr",align:null},"address"),(0,o.kt)("td",{parentName:"tr",align:null},"BEP20 contract address")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"recipient"),(0,o.kt)("td",{parentName:"tr",align:null},"address"),(0,o.kt)("td",{parentName:"tr",align:null},"decode bech32 address  to hex string. This is a online too to decode bech32: ",(0,o.kt)("a",{parentName:"td",href:"https://slowli.github.io/bech32-buffer/"},"https://slowli.github.io/bech32-buffer/"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"amount"),(0,o.kt)("td",{parentName:"tr",align:null},"uint256"),(0,o.kt)("td",{parentName:"tr",align:null},"BEP20 token amount.  Here the decimals is 18, so the amount must be N * 1e10.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"expireTime"),(0,o.kt)("td",{parentName:"tr",align:null},"uint256"),(0,o.kt)("td",{parentName:"tr",align:null},"Timestamp, counted by  second")))),(0,o.kt)("p",null,"The value here should be RelayFee."),(0,o.kt)("h3",{id:"mint"},"Mint"),(0,o.kt)("p",null,"If both the BEP20 token and bep2 token are mintable, then token owners can still mint their tokens even after token binding. Besides, token owners need to ensure the total supply and the locked amount on both chains are still matched, otherwise, users might can\u2019t transfer their tokens to another chain."),(0,o.kt)("h4",{id:"mint-token-on-bc"},"Mint token on BC"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Execute the following command to mint 10000 ABC-A64:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"## mainnet\nbnbcli token mint --symbol ABC-A64 --amount 1000000000000 --from owner --chain-id Binance-Chain-Tigris --node http://dataseed4.binance.org:80\n\n## testnet\ntbnbcli token mint --symbol ABC-A64 --amount 1000000000000 --from owner --chain-id Binance-Chain-Ganges --node http://data-seed-pre-0-s3.binance.org:80\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Mint token on BSC and lock the new minted token:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Call ",(0,o.kt)("strong",{parentName:"li"},"mint")," method of BEP20 contract, the mint amount should be 1e22."),(0,o.kt)("li",{parentName:"ul"},"Transfer all minted ABC token to tokenHub contract: ",(0,o.kt)("inlineCode",{parentName:"li"},"0x0000000000000000000000000000000000001004"))),(0,o.kt)("h4",{id:"mint-token-on-bsc"},"Mint token on BSC"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Call ",(0,o.kt)("strong",{parentName:"li"},"mint")," of BEP20 contract to mint 10000 ABC, the mint amount should be 1e22(18 decimals)."),(0,o.kt)("li",{parentName:"ol"},"Mint token on BC and lock the new minted token:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Execute the following command to mint 10000 ABC-A64:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"## mainnet\nbnbcli token mint --symbol ABC-A64 --amount 1000000000000 --from owner --chain-id Binance-Chain-Tigris --node http://dataseed4.binance.org:80\n\n## testnet\ntbnbcli token mint --symbol ABC-A64 --amount 1000000000000 --from owner --chain-id Binance-Chain-Ganges --node http://data-seed-pre-0-s3.binance.org:80\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Transfer all minted ABC-A64 token to the pure-code-controlled address: ",(0,o.kt)("inlineCode",{parentName:"li"},"tbnb1v8vkkymvhe2sf7gd2092ujc6hweta38xnc4wpr"),"(mainnet address: ",(0,o.kt)("inlineCode",{parentName:"li"},"bnb1v8vkkymvhe2sf7gd2092ujc6hweta38xadu2pj"),")")))}m.isMDXComponent=!0}}]);