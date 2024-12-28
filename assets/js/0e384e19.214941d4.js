"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[976],{619:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>r});var s=n(4848),t=n(8453);const a={sidebar_position:1},c="Event Tracking",o={id:"intro",title:"Event Tracking",description:"Event Tracking is a universal solution for tracking progress for web3 games. It provides infrastructure for handling on-chain & off-chain game events.",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/docs/intro",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",next:{title:"API Oriented Methods",permalink:"/docs/category/api-oriented-methods"}},l={},r=[{value:"Main advantages:",id:"main-advantages",level:4},{value:"Actions",id:"actions",level:2},{value:"Mental Model",id:"mental-model",level:3},{value:"Action Anatomy",id:"action-anatomy",level:3},{value:"Data Sources",id:"data-sources",level:3},{value:"On-chain Action Dispatcher",id:"on-chain-action-dispatcher",level:4},{value:"On-chain Data Indexing",id:"on-chain-data-indexing",level:4},{value:"Game Contract Whitelist",id:"game-contract-whitelist",level:3},{value:"Quest Limitations",id:"quest-limitations",level:3},{value:"Overview",id:"overview",level:4},{value:"Validation Rules",id:"validation-rules",level:4},{value:"Sub-quests",id:"sub-quests",level:4},{value:"Database",id:"database",level:3},{value:"Implementation",id:"implementation",level:3},{value:"Integration",id:"integration",level:3}];function d(e){const i={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.header,{children:(0,s.jsx)(i.h1,{id:"event-tracking",children:"Event Tracking"})}),"\n",(0,s.jsx)(i.p,{children:"Event Tracking is a universal solution for tracking progress for web3 games. It provides infrastructure for handling on-chain & off-chain game events."}),"\n",(0,s.jsx)(i.h4,{id:"main-advantages",children:"Main advantages:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:"Push-based architecture"}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:"Granular configuration"}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:"Scalable"}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:"Supports several data sources"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"actions",children:"Actions"}),"\n",(0,s.jsx)(i.h3,{id:"mental-model",children:"Mental Model"}),"\n",(0,s.jsx)(i.p,{children:"Event Tracking introduces separation of activities & actions concepts."}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"Activity"})," is a game-specific domain logic that has nothing in common with gg.xyz. Players play games and all their in-game interactions lead to some game-specific activities. For example player is playing some slasher. Player kills zombie and this is an in-game \u201czombie killed\u201c activity. Player kills skeleton -> \u201cskeleton killed\u201d activity. This may have been used for quests like \u201cKill 10 zombies\u201d or \u201cKill 15 skeletons\u201d. Problems come when we have quests like \u201cKill 25 monsters\u201d. System should somehow understand that \u201czombie killed\u201d activity should be handled for both \u201cKill 10 zombies\u201d and \u201cKill 25 monsters\u201d quests. To overcome this issue actions are introduced."]}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"Action"})," is an atomic part of each activity. Activities could consist from one or several actions. Event Tracking tracks only actions not activities. By doing so Event Tracking could effectively track progress in several quests for a single game-specific activity. In the above example \u201czombie killed\u201d activity could consist of 2 different actions:"]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:"kill zombie"}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:"kill monster"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(i.p,{children:["Amount of actions associated with some activity is limited by each game needs.\n",(0,s.jsx)(i.img,{alt:"action schema",src:n(8723).A+"",width:"1440",height:"486"})]}),"\n",(0,s.jsx)(i.h3,{id:"action-anatomy",children:"Action Anatomy"}),"\n",(0,s.jsxs)(i.p,{children:["Action is a keccak256 hash of any human-readable string. All actions are unique within single game. Game Developers should predefine actions before creating quests. Actions could be created with ",(0,s.jsx)(i.code,{children:"POST /api/v2/actions"})," endpoint (see Swagger). For example \u201cKill Zombie\u201c action will be represented as ",(0,s.jsx)(i.code,{children:"0xbfd74c70c46a298db3c6c7a0e70fbb2755351afa6bf0946b98e677159235ed2d"})," hash. API provide a CRUD for actions (see ",(0,s.jsx)(i.a,{href:"https://api.gg.quest/api/v2/docs#/",children:"Swagger"}),")."]}),"\n",(0,s.jsx)(i.h3,{id:"data-sources",children:"Data Sources"}),"\n",(0,s.jsx)(i.p,{children:"Event Tracking could be used with different data sources. This allows to be as flexible as possible and cover all major use cases."}),"\n",(0,s.jsx)(i.h4,{id:"on-chain-action-dispatcher",children:"On-chain Action Dispatcher"}),"\n",(0,s.jsxs)(i.p,{children:["This approach utilizes smart contracts for dispatching events. This could be used ONLY with new or upgradable game smart contracts. It uses singleton ",(0,s.jsx)(i.code,{children:"ActionDispatcher"})," smart contract to dispatch on-chain actions."]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{children:"interface IActionDispatcher {\n    event ActionDispatched(uint256 indexed _gameId, address indexed _player, bytes32[] _actions, bytes _data);\n    function dispatch(uint256 _gameId, address _player, bytes32[] calldata _actions) external;\n    function dispatch(uint256 _gameId, address _player, string[] calldata _actions) external;\n}\n"})}),"\n",(0,s.jsx)(i.p,{children:"See interface and implementation source code for more details."}),"\n",(0,s.jsx)(i.p,{children:"Flow:"}),"\n",(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:"Game contract calls ActionDispatcher contract"}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:"ActionDispatcher contract emits event"}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:"gg.xyz backend listens for events and puts them in queue"}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:"gg.xyz backend processes all actions from queue"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(i.h4,{id:"on-chain-data-indexing",children:"On-chain Data Indexing"}),"\n",(0,s.jsxs)(i.p,{children:["This approach utilizes third-party indexing solutions like The ",(0,s.jsx)(i.a,{href:"https://thegraph.com/",children:"Graph"})," or ",(0,s.jsx)(i.a,{href:"https://ponder.sh/",children:"Ponder"}),". This could be used for existing smart contracts that can not be upgraded or do not use ",(0,s.jsx)(i.code,{children:"ActionDispatcher"})," for any other reason. Game-specific smart contract events should be adopted to GraphQL ",(0,s.jsx)(i.code,{children:"Action"})," type."]}),"\n",(0,s.jsx)(i.p,{children:"Flow:"}),"\n",(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:"Game makes HTTP request to gg.xyz public API"}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:"gg.xyz backend processes requests and put actions in queue"}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:"gg.xyz backend processes all actions from queue"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"game-contract-whitelist",children:"Game Contract Whitelist"}),"\n",(0,s.jsx)(i.p,{children:"TBD"}),"\n",(0,s.jsx)(i.h3,{id:"quest-limitations",children:"Quest Limitations"}),"\n",(0,s.jsx)(i.p,{children:"Quest Limitations are a set of options that could be used to configure a quest. Using Quest Limitations allows to build highly customizable quest systems in different games."}),"\n",(0,s.jsx)(i.h4,{id:"overview",children:"Overview"}),"\n",(0,s.jsx)(i.p,{children:"TBD"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"shema",src:n(8389).A+"",width:"1920",height:"714"})}),"\n",(0,s.jsx)(i.h4,{id:"validation-rules",children:"Validation Rules"}),"\n",(0,s.jsx)(i.p,{children:"TBD"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"alt text",src:n(8014).A+"",width:"1098",height:"1046"})}),"\n",(0,s.jsx)(i.h4,{id:"sub-quests",children:"Sub-quests"}),"\n",(0,s.jsx)(i.p,{children:"Sub-quest is a core mechanism to associate specific actions with quests. Sub-quest should be considered as steps to complete the quest. Each sub-quest has only one associated action with it. Each quest must have at least one sub-quest."}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{children:"class SubquestDto {\n  actionId: string;\n  title: string;\n  description: string | null;\n  target: number;\n  priority: number | null;\n}\n"})}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:"actionId is used to associate sub-quest with specific action. Associating sub-quest with action means that system will track quest progress with this sub-quest"}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:"title is used to display some sub-quest name"}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:"description could be used to provide some additional info about sub-quest. Could be used if sub-quest is not trivial and using only title is insufficient"}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:"target indicates how many times some action should be dispatched to finish sub-quest. Quest is finished automatically one all quest's sub-quests are finished"}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:"priority is used to provide a strict order in which sub-quests should be finished. This field must be used only with dedicated limitation"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"database",children:"Database"}),"\n",(0,s.jsx)(i.p,{children:"TBD"}),"\n",(0,s.jsx)(i.h3,{id:"implementation",children:"Implementation"}),"\n",(0,s.jsx)(i.p,{children:"TBD"}),"\n",(0,s.jsx)(i.h3,{id:"integration",children:"Integration"}),"\n",(0,s.jsx)(i.p,{children:"TBD"})]})}function h(e={}){const{wrapper:i}={...(0,t.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8389:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/image-1-fea3e48072c33f02d19ce02a3d2a4369.png"},8014:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/image-2-a9648d8d2b23c2576e91956a3ced6256.png"},8723:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/image-ede5fdd1a8298ef629dd279fb7ca5b83.png"},8453:(e,i,n)=>{n.d(i,{R:()=>c,x:()=>o});var s=n(6540);const t={},a=s.createContext(t);function c(e){const i=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),s.createElement(a.Provider,{value:i},e.children)}}}]);