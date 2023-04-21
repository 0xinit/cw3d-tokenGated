# Token gated component for Alchemy University Early Access NFT.
&nbsp;

####  What is Create-Web3-Dapp?
CW3D is one of the most powerful tools for developers, enabling them to build a full-stack dapp in less than 4 minutes. Developers simply need to run `npx create-web3-dapp@latest` in their terminal and select their desired configuration. The configuration options range from using Hardhat to choosing the ERC standard.

CW3D significantly simplifies the process for developers to generate boilerplates and quickly start building their projects on top of this dApp. It is also an excellent tool for hackathons, as there is no need to worry about downloading any additional software—CW3D takes care of it all!

#### What can be expected from this components and its general workflow?

This token gated component verifies if users possess an Alchemy University Early Access NFT at contract address `0x60576A64851C5B42e8c57E3E4A5cF3CF4eEb2ED6`. Once verified, users will be presented with two options: mint a CW3D NFT or an Alchemy DAO token. If they do not have an AU NFT, they will be directed to a screen stating they do not own an AU NFT and, therefore, cannot access the minting pages. Currently, we are reusing the NFT Minter component developed by Vitto to mint CW3D tokens, and there are no DAO contracts set up, but it would be a great addition in the future.

#### How to use this token-gated component?

1. Copy Paste `tokenGated.js` in ./frontend/pages/api
2. Copy Paste `TokenGated.jsx` in ./components and `TokenGated.module.css` in ./styles/
3. Copy Paste additional components that are used by `TokenGated.jsx` component. These are the components and their respective stylings (place them into ./components/ and ./styles/ respectively):
    - `RestrictedAccess.jsx` component with `RestrictedAccess.module.css` -- the first page that users see before connecting their wallets. They wont be able to They won't be able to access the page without connecting their wallet and verify it.
    - `NoAuNft.jsx` component should be copied along with `NoAuNft.module.css`. -- displayed if the user doesn't own an AU NFT.
    - Add `AlchemyDaoMinter.jsx` component along with `AlchemyDaoMinter.module.css`.

After completing these steps, the code can be implemented. To consolidate the code into a single large component, transfer all code from smaller components to `TokenGated.jsx`. However, it's good practice to maintain separate, reusable components.
&nbsp;

#### But, Why would you need a component for Token Gating?

After brainstorming and conducting a Twitter poll, it became apparent that many projects in hackathons involve building NFTs, DAOs, and similar dApps. Often, these dApps are built on top of other protocols like Lens Protocol or Worldcoin, but there is no readily available code for token gating to authenticate NFT ownership. Due to the lack of resources, hackathon participants or builders must create their own token authentication, which can be time-consuming. Because of lack of resources, hackathon particpants or builders, in general, need to come up with something that authenticates for a token present in the wallet. The extra research, styling, and so on takes away a lot of time.

To address this issue, I developed a component that provides instant token gating for dApps with a simple copy and paste process.

This component can be used for anyone who are launching a new NFT or DAO, and people need to hold a token from the previous collection to authenticate. Mostly it's a great component for people launching a DAO or NFT and wants to add a token gate feature during their hackathons.

We utilize Alchemy's NFT APIs `verifyNftOwnership` to achieve this. The `verifyNftOwnership` function takes in the owner's wallet address and contract address to check if the user owns the NFT. It returns a boolean value (True or False).

#### But, where can I go and market this app, and what can I do to have most of the people use it? How can we expand its usecase?

I thought a lot about it, I think number one usecase for CW3D remains in every builders heart. It is not just specifically for any hackathon as such, but can be used by anyone from a student getting into web3 development to a team of professionals starting their new project. Same goes for a token-gated component that I have built. How so? Because I want to expand it further to fully be able to mint DAO tokens for any DAO. Imagine Alchemy University coming with its own DAO, and we use this token-gate component for people to first verify their holdings of AU NFT and then letting them mint the tokens. 

The use case can be further expanded to token-gating communities and other projects. For example, I envision expanding this component to DeFi dashboards. This would involve creating an analytical DeFi dashboard integrated with OpenSea sales and other trading dashboards, which users can access only if they own a specific NFT. Marketing the component to the right types of builders is crucial.

Integration with platforms like Dune Analytics could also be considered. If Dune ever introduces its own token, the token-gated component could be used to grant access to premium services exclusively for Dune token holders. This approach could expand the use of CW3D and the token-gated component from hackathon participants to enterprises.

A promising strategy to reach more users is to pitch this solution to builders in colleges and universities. The token-gated component is easy to implement, requiring only a few lines of code to be copied and pasted into their projects. By targeting educational institutions, we can introduce CW3D and the token-gated component to a wider audience and help streamline the development process for numerous web3 projects.