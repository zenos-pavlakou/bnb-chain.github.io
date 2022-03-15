"use strict";(self.webpackChunkbeta_BNB_Docs=self.webpackChunkbeta_BNB_Docs||[]).push([[775],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return d}});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=a.createContext({}),s=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=s(e.components);return a.createElement(l.Provider,{value:n},e.children)},h={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(t),d=i,m=p["".concat(l,".").concat(d)]||p[d]||h[d]||r;return t?a.createElement(m,o(o({ref:n},u),{},{components:t})):a.createElement(m,o({ref:n},u))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=p;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var s=2;s<r;s++)o[s]=t[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},36279:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return u},default:function(){return p}});var a=t(87462),i=t(63366),r=(t(67294),t(3905)),o=["components"],c={},l=void 0,s={unversionedId:"beaconchain/exchange-integration",id:"beaconchain/exchange-integration",isDocsHomePage:!1,title:"exchange-integration",description:"Public Services",source:"@site/docs/beaconchain/exchange-integration.md",sourceDirName:"beaconchain",slug:"/beaconchain/exchange-integration",permalink:"/bnb-chain.github.io/docs/beaconchain/exchange-integration",editUrl:"https://github.com/bnb-chain/bnb-chain.github.io/docs/docs/beaconchain/exchange-integration.md",tags:[],version:"current",frontMatter:{}},u=[{value:"Public Services",id:"public-services",children:[{value:"REST API",id:"rest-api",children:[],level:3},{value:"Node RPC",id:"node-rpc",children:[],level:3}],level:2},{value:"Running a Full Node",id:"running-a-full-node",children:[],level:2},{value:"Access via Node Command Line Interface (CLI)",id:"access-via-node-command-line-interface-cli",children:[],level:2},{value:"SDKs",id:"sdks",children:[],level:2},{value:"Important: Ensuring Transaction Finality",id:"important-ensuring-transaction-finality",children:[{value:"The Recommended Way (via WebSocket)",id:"the-recommended-way-via-websocket",children:[],level:3},{value:"The Alternative Way (via RPC Polling)",id:"the-alternative-way-via-rpc-polling",children:[],level:3}],level:2}],h={toc:u};function p(e){var n=e.components,t=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},h,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"public-services"},"Public Services"),(0,r.kt)("p",null,"There are public nodes running by BNB Chain community which will allow you to interact with the blockchain."),(0,r.kt)("h3",{id:"rest-api"},"REST API"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://docs.binance.org/faq.html#what-is-the-accelerated-node"},"Accelerated nodes")," provide advanced API services for the public.",(0,r.kt)("br",null),"\nList of all the Rest API information available on accelerated node can be found: ",(0,r.kt)("a",{parentName:"p",href:"/bnb-chain.github.io/docs/api-reference/dex-api/paths"},"here")),(0,r.kt)("h3",{id:"node-rpc"},"Node RPC"),(0,r.kt)("p",null,"There are multiple data seed node in the network which allow users to  perform low-level operations like executing ABCI queries, broadcasting a transaction or viewing network/consensus state.",(0,r.kt)("br",null),"\nIf you run a full node by yourself, you can also use those RPC functions.",(0,r.kt)("br",null),"\nList of all endpoints Node RPC service provides can be found: ",(0,r.kt)("a",{parentName:"p",href:"/bnb-chain.github.io/docs/api-reference/node-rpc"},"here")),(0,r.kt)("h2",{id:"running-a-full-node"},"Running a Full Node"),(0,r.kt)("p",null,"Running a full node requires considerable computational/bandwidth resources.",(0,r.kt)("br",null),"\nPlease refer to this guide about ",(0,r.kt)("a",{parentName:"p",href:"/bnb-chain.github.io/docs/beaconchain/fullnode"},"how to run your own node"),"."),(0,r.kt)("h2",{id:"access-via-node-command-line-interface-cli"},"Access via Node Command Line Interface (CLI)"),(0,r.kt)("p",null,"Command Line Interface is currently available for Linux, Mac and Windows.",(0,r.kt)("br",null),"\nPlease refer to the ",(0,r.kt)("a",{parentName:"p",href:"/bnb-chain.github.io/docs/api-reference/cli"},"CLI Reference"),"."),(0,r.kt)("h2",{id:"sdks"},"SDKs"),(0,r.kt)("p",null,"There are multiple advanced SDK solutions available for Binance chain.",(0,r.kt)("br",null),"\nMajority of SDKs provide simplified functions to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create wallets and manage keys"),(0,r.kt)("li",{parentName:"ul"},"Encode/sign transactions and submit to Binance Chain/DEX, including Transfer, New Order, Cancel Order, etc."),(0,r.kt)("li",{parentName:"ul"},"Communicate with Binance Chain/DEX via Node RPC calls through public node RPC services or your own private full nodes")),(0,r.kt)("p",null,"List of currently available SDKs and their respective documentations:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/binance-chain/go-sdk"},"Go")," - ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/binance-chain/go-sdk/wiki"},"Documentation")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/binance-chain/java-sdk"},"Java")," - ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/binance-chain/java-sdk/wiki"},"Documentation")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/binance-chain/javascript-sdk"},"JavaScript")," - ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/binance-chain/javascript-sdk/wiki"},"Documentation")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/binance-chain/cplusplus-sdk"},"C++")," - ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/binance-chain/cplusplus-sdk/wiki"},"Documentation")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/binance-chain/csharp-sdk"},"C#")," - ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/binance-chain/csharp-sdk"},"Documentation")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/binance-chain/python-sdk"},"Python")," - ",(0,r.kt)("a",{parentName:"li",href:"https://python-binance-chain.readthedocs.io/en/latest/binance-chain.html#module-binance_chain"},"Documentation")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/binance-chain/swift-sdk"},"Swift")," - ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/binance-chain/swift-sdk/blob/master/README.md"},"Documentation"))),(0,r.kt)("h2",{id:"important-ensuring-transaction-finality"},"Important: Ensuring Transaction Finality"),(0,r.kt)("p",null,'If you intend to add "deposit" and "withdrawal" functionalities to your implementation, it is important that you ensure that transactions are final before the backend system credits or deducts funds from a user account.'),(0,r.kt)("p",null,"In brief, transactions pass through several ",(0,r.kt)("a",{parentName:"p",href:"https://tendermint.com/docs/spec/abci/abci.html#overview"},"phases")," before they are finalised and included in a block."),(0,r.kt)("p",null,'The status "code" recorded for each of these phases can differ, so be sure to check that it is ',(0,r.kt)("inlineCode",{parentName:"p"},"0"),' (meaning success) for each of them. A non-zero "code" indicates that there was a problem with the transaction during processing.'),(0,r.kt)("p",null,"For example, ",(0,r.kt)("a",{parentName:"p",href:"https://explorer.binance.org/tx/F296E84917A92FC4876AFE77DE662CC9417F9D6F2EB8ED1AD723A5433EBB8362"},"this transaction")," was invalid because the order was already canceled. You can query that the code for this transaction is ",(0,r.kt)("inlineCode",{parentName:"p"},"405"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\ncode: 393621,\nhash: "F296E84917A92FC4876AFE77DE662CC9417F9D6F2EB8ED1AD723A5433EBB8362",\nheight: "30771453",\nlog: "{"codespace":6,"code":405,"abci_code":393621,"message":"Failed to find order [E0B781A5DA419E0E596D13FE8A06BF5F9CE9C37D-19450]"}",\nok: false,\ntx: {\ntype: "auth/StdTx",\nvalue: {\ndata: null,\nmemo: "",\nmsg: [\n{\ntype: "dex/CancelOrder",\nvalue: {\nrefid: "E0B781A5DA419E0E596D13FE8A06BF5F9CE9C37D-19450",\nsender: "bnb1uzmcrfw6gx0quktdz0lg5p4lt7wwnsmat6ksd6",\nsymbol: "BNB_TUSDB-888"\n}\n}\n],\nsignatures: [\n{\naccount_number: "153135",\npub_key: {\ntype: "tendermint/PubKeySecp256k1",\nvalue: "AzWMnQAwvCP9mbpNyaGuOtNVum1ktvlBb+XFy8D50xmh"\n},\nsequence: "19452",\nsignature: "y2FTS4rAqWvDmNWLxsOg+8vrz9XZ4gDXs/tGh/psnQwRMQBtw1x1a2TSCgc0G4qbvh0YICe5ZvJFRNvg/zGG7w=="\n}\n],\nsource: "889"\n}\n}\n}\n')),(0,r.kt)("p",null,"The two phases we should be concerned about are ",(0,r.kt)("inlineCode",{parentName:"p"},"CheckTx")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"DeliverTx"),"."),(0,r.kt)("p",null,"We recommend that you broadcast your transactions via ",(0,r.kt)("a",{parentName:"p",href:"#rest-api"},"REST API")," or, if you wish to run a ",(0,r.kt)("a",{parentName:"p",href:"#full-node"},"Full Node"),", ",(0,r.kt)("a",{parentName:"p",href:"#node-rpc"},"Node RPC")," via the ",(0,r.kt)("inlineCode",{parentName:"p"},"BroadcastTxSync")," command."),(0,r.kt)("p",null,"While there is an RPC command called ",(0,r.kt)("inlineCode",{parentName:"p"},"BroadcastTxCommit")," which will wait for both ",(0,r.kt)("inlineCode",{parentName:"p"},"CheckTx")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"DeliverTx")," and return with codes for both and a block height, it is unfortunately ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/tendermint/tendermint/blob/e3a97b09814bf9289e8c10420af38ce369160752/rpc/core/mempool.go#L154"},"not recommended for use in production"),"."),(0,r.kt)("p",null,"Instead, there are two ways that you can go about checking the status of your transaction after you have broadcasted it."),(0,r.kt)("p",null,"If you haven't received anything after a couple of blocks, resend the transaction. If the same happens again, send it to some other node. This is safe to do so long as you are broadcasting the ",(0,r.kt)("em",{parentName:"p"},"same")," transaction. Transactions are unique in the blockchain and you cannot spend the coins twice by retrying the send of the same data."),(0,r.kt)("h3",{id:"the-recommended-way-via-websocket"},"The Recommended Way (via WebSocket)"),(0,r.kt)("p",null,"If you want to be sure that the transaction is included in a block, you can subscribe for the result using JSONRPC via a websocket. See ",(0,r.kt)("a",{parentName:"p",href:"https://docs.binance.org/api-reference/node-rpc.html#631-subscribe"},"Subscribing to Events via WebSocket"),"."),(0,r.kt)("h3",{id:"the-alternative-way-via-rpc-polling"},"The Alternative Way (via RPC Polling)"),(0,r.kt)("p",null,"Some of the SDKs do not yet support WebSocket subscriptions for RPC queries, so this may be the preferable option in some use cases."),(0,r.kt)("p",null,"You can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"Tx")," RPC method to query for the transaction and get its block height. Here is an example using the JavaScript SDK:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"> rpc.tx({\n  hash: Buffer.from('B2EF71DAEB86385E64F6C0B923636ADE5510B3C34C07D19EE5A114FC9075273D', 'hex'),\n  prove:false\n}).then(x => console.log('',x))\n{\n  hash: 'B2EF71DAEB86385E64F6C0B923636ADE5510B3C34C07D19EE5A114FC9075273D',\n  height: '30261607',\n  index: 0,\n  tx_result: { log: 'Msg 0: ', tags: [ [Object], [Object], [Object] ] },\n  tx: '0AHwYl3uCkwqLIf6CiIKFLjeOPB9sCxE5v+lpkRhnPu+K1ahEgoKA0JOQhCMy5ZfEiIKFI6nDX0uqKFLorM9GNXfvW+uCm6oEgoKA0JOQhCMy5ZfEnEKJuta6YchA6Xy63LJBSKNsW1nkGMbPyvWl7VDeD/lVByJrtnB3v1kEkA243QKSCn5GxFSTFbh6EA8ZuqdO+0UTR8+Vq7CDikOzCIpuRo95Ww7zak0qXRmL3/shGkwHcvB4l9ofF61mSQgGKfQCSDDARoJMTAxNzg5MTEz'\n}\n")),(0,r.kt)("p",null,"If the Transaction does not yet exist in the blockchain, this attempt will return with an error."),(0,r.kt)("p",null,'You should check for an absent "code" field in the ',(0,r.kt)("inlineCode",{parentName:"p"},"tx_result"),": this indicates a code of ",(0,r.kt)("inlineCode",{parentName:"p"},"0"),". You could also perform further checks on the ",(0,r.kt)("inlineCode",{parentName:"p"},"log")," to make sure that it matches the expected value."))}p.isMDXComponent=!0}}]);