export const projects = [
    // Live Projects - Web3
    { 
      id: 1, 
      name: 'Lens Protocol', 
      description: 'A composable and decentralized social graph.', 
      category: 'Live', 
      rewards: '$10,000',
      contributors: [
        { name: 'Stani Kulechov', contributions: 200 },
        { name: 'Josh F', contributions: 120 },
        { name: 'Emma D', contributions: 100 },
      ],
      repoUrl: 'https://github.com/lens-protocol',
      imageUrl: 'https://static.images.dropstab.com/images/lens-protocol.png'
    },
    { 
      id: 2, 
      name: 'Uniswap V4', 
      description: 'A decentralized trading protocol with concentrated liquidity.', 
      category: 'Live', 
      rewards: '$15,000',
      contributors: [
        { name: 'Hayden Adams', contributions: 180 },
        { name: 'Sara Reynolds', contributions: 130 },
        { name: 'John Doe', contributions: 110 },
      ],
      repoUrl: 'https://github.com/Uniswap',
      imageUrl: 'https://cryptologos.cc/logos/uniswap-uni-logo.png'
    },
    { 
      id: 3, 
      name: 'The Graph', 
      description: 'A decentralized protocol for indexing blockchain data.', 
      category: 'Live', 
      rewards: '$8,000',
      contributors: [
        { name: 'Yaniv Tal', contributions: 200 },
        { name: 'Jannis Pohlmann', contributions: 140 },
        { name: 'Brandon Ramirez', contributions: 110 },
      ],
      repoUrl: 'https://github.com/graphprotocol/graph-node',
      imageUrl: 'https://cryptologos.cc/logos/the-graph-grt-logo.png'
    },
    { 
      id: 4, 
      name: 'Aave Protocol', 
      description: 'A decentralized non-custodial liquidity protocol.', 
      category: 'Live', 
      rewards: '$12,000',
      contributors: [
        { name: 'Stani Kulechov', contributions: 300 },
        { name: 'Jordan Lazaro', contributions: 200 },
        { name: 'Tomi Sivonen', contributions: 150 },
      ],
      repoUrl: 'https://github.com/aave/aave-v3-core',
      imageUrl: 'https://cryptologos.cc/logos/aave-aave-logo.png'
    },
    { 
      id: 5, 
      name: 'Optimism', 
      description: 'A layer-2 scaling solution for Ethereum.', 
      category: 'Live', 
      rewards: '$5,000',
      contributors: [
        { name: 'Ben Jones', contributions: 220 },
        { name: 'Jinglan Wang', contributions: 180 },
        { name: 'Kevin Ho', contributions: 150 },
      ],
      repoUrl: 'https://github.com/ethereum-optimism',
      imageUrl: 'https://th.bing.com/th/id/OIP.gmjj8j19v9A4UOvldq3jNgHaEb?rs=1&pid=ImgDetMain'
    },
    { 
      id: 6, 
      name: 'ZKSync Era', 
      description: 'A zk-rollup for scaling Ethereum with low fees.', 
      category: 'Live', 
      rewards: '$7,000',
      contributors: [
        { name: 'Alex Gluchowski', contributions: 250 },
        { name: 'Vlad Frolov', contributions: 200 },
        { name: 'Dmitry Shekhovtsov', contributions: 180 },
      ],
      repoUrl: 'https://github.com/matter-labs/zksync-era',
      imageUrl: 'https://lw3-teams-logos.s3.us-east-2.amazonaws.com/zkSync-team-logo'
    },
  
    // Live Projects - Non-Web3
    { 
      id: 7, 
      name: 'React', 
      description: 'A JavaScript library for building user interfaces.', 
      category: 'Live', 
      rewards: '$5000',
      contributors: [
        { name: 'Dan Abramov', contributions: 150 },
        { name: 'Andrew Clark', contributions: 120 },
        { name: 'Brian Vaughn', contributions: 100 },
      ],
      repoUrl: 'https://github.com/facebook/react',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg'
    },
    { 
      id: 8, 
      name: 'Next.js', 
      description: 'The React Framework for Production.', 
      category: 'Live', 
      rewards: '$3000',
      contributors: [
        { name: 'Tim Neutkens', contributions: 100 },
        { name: 'Jared Palmer', contributions: 80 },
        { name: 'Johann Schopplich', contributions: 70 },
      ],
      repoUrl: 'https://github.com/vercel/next.js',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg'
    },
    { 
      id: 9, 
      name: 'TensorFlow', 
      description: 'An end-to-end open-source platform for machine learning.', 
      category: 'Live', 
      rewards: '$7000',
      contributors: [
        { name: 'Martin Wicke', contributions: 200 },
        { name: 'Pete Warden', contributions: 150 },
        { name: 'Francois Chollet', contributions: 120 },
      ],
      repoUrl: 'https://github.com/tensorflow/tensorflow',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/2d/Tensorflow_logo.svg'
    },
    { 
      id: 10, 
      name: 'Kubernetes', 
      description: 'Production-grade container orchestration.', 
      category: 'Live', 
      rewards: '$8000',
      contributors: [
        { name: 'Brendan Burns', contributions: 250 },
        { name: 'Joe Beda', contributions: 230 },
        { name: 'Craig McLuckie', contributions: 180 },
      ],
      repoUrl: 'https://github.com/kubernetes/kubernetes',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/3/39/Kubernetes_logo_without_workmark.svg'
    },

    {
        id: 11,
        name: 'Sui Network',
        description: 'A high-performance Layer 1 blockchain optimized for speed and scalability.',
        category: 'Upcoming',
        rewards: '$20,000',
        contributors: [
          { name: 'Evan Cheng', contributions: 150 },
          { name: 'Sam Blackshear', contributions: 120 },
          { name: 'George Danezis', contributions: 100 },
        ],
        repoUrl: 'https://github.com/MystenLabs/sui',
        imageUrl: 'https://www.supercryptonews.com/wp-content/uploads/2023/05/suilogo.jpg'
      },
      {
        id: 12,
        name: 'Aptos',
        description: 'A scalable Layer 1 blockchain aiming to deliver safe and upgradeable infrastructure.',
        category: 'Upcoming',
        rewards: '$18,000',
        contributors: [
          { name: 'Mo Shaikh', contributions: 140 },
          { name: 'Avery Ching', contributions: 110 },
          { name: 'Josh Lind', contributions: 90 },
        ],
        repoUrl: 'https://github.com/aptos-labs/aptos-core',
        imageUrl: 'https://aptosfoundation.org/brandbook/logotype/PNG/Aptos_Primary_BLK.png'
      },
      {
        id: 13,
        name: 'Celestia',
        description: 'A modular consensus and data network to enable scalable and secure blockchains.',
        category: 'Upcoming',
        rewards: '$15,000',
        contributors: [
          { name: 'Mustafa Al-Bassam', contributions: 130 },
          { name: 'John Adler', contributions: 100 },
          { name: 'Ismail Khoffi', contributions: 80 },
        ],
        repoUrl: 'https://github.com/celestiaorg/celestia-node',
        imageUrl: 'https://ecoinomic.io/wp-content/uploads/2022/10/Celestia-Labs-Raises-55M-to-Build-Modular-Blockchain-Network.jpg'
      },
      {
        id: 14,
        name: 'StarkNet',
        description: 'A permissionless decentralized ZK-Rollup operating as an L2 network over Ethereum.',
        category: 'Upcoming',
        rewards: '$17,000',
        contributors: [
          { name: 'Eli Ben-Sasson', contributions: 160 },
          { name: 'Uri Kolodny', contributions: 130 },
          { name: 'Michael Riabzev', contributions: 110 },
        ],
        repoUrl: 'https://github.com/starkware-libs/starknet',
        imageUrl: 'https://th.bing.com/th/id/OIP.XMIYagY1el0stKHOv8RHOgHaHa?rs=1&pid=ImgDetMain'
      },
      {
        id: 15,
        name: 'Mina Protocol',
        description: 'The world’s lightest blockchain, powered by participants.',
        category: 'Upcoming',
        rewards: '$16,000',
        contributors: [
          { name: 'Evan Shapiro', contributions: 150 },
          { name: 'Izaak Meckler', contributions: 120 },
          { name: 'Brad Cohen', contributions: 100 },
        ],
        repoUrl: 'https://github.com/MinaProtocol/mina',
        imageUrl: 'https://static.vecteezy.com/system/resources/previews/014/295/628/original/mina-protocol-token-mina-icon-isolated-on-white-background-vector.jpg'
      },
    
      // Past Web3 Projects
      {
        id: 16,
        name: 'CryptoKitties',
        description: 'One of the earliest blockchain games that allowed players to purchase, collect, breed, and sell virtual cats.',
        category: 'Past',
        rewards: '$10,000',
        contributors: [
          { name: 'Roham Gharegozlou', contributions: 100 },
          { name: 'Benny Giang', contributions: 80 },
          { name: 'Mack Flavelle', contributions: 60 },
        ],
        repoUrl: 'https://github.com/cryptokitties',
        imageUrl: 'https://www.cryptokitties.co/images/kitty-eth.svg'
      },
      {
        id: 17,
        name: 'Augur',
        description: 'A decentralized oracle and prediction market protocol built on Ethereum.',
        category: 'Past',
        rewards: '$12,000',
        contributors: [
          { name: 'Joey Krug', contributions: 110 },
          { name: 'Jack Peterson', contributions: 90 },
          { name: 'Jeremy Gardner', contributions: 70 },
        ],
        repoUrl: 'https://github.com/AugurProject/augur',
        imageUrl: 'https://www.liblogo.com/img-logo/au2638ab97-augur-logo-augur-.png'
      },
      {
        id: 18,
        name: 'Golem',
        description: 'A decentralized marketplace for computing power.',
        category: 'Past',
        rewards: '$11,000',
        contributors: [
          { name: 'Julian Zawistowski', contributions: 120 },
          { name: 'Piotr Janiuk', contributions: 100 },
          { name: 'Andrzej Regulski', contributions: 80 },
        ],
        repoUrl: 'https://github.com/golemfactory/golem',
        imageUrl: 'https://i.pinimg.com/originals/fa/d3/cb/fad3cbc610d79ca7c2a4cfacdfeba65f.png'
      },
      {
        id: 19,
        name: 'Aragon',
        description: 'A platform for building and managing decentralized autonomous organizations (DAOs).',
        category: 'Past',
        rewards: '$13,000',
        contributors: [
          { name: 'Luis Cuende', contributions: 130 },
          { name: 'Jorge Izquierdo', contributions: 110 },
          { name: 'Tatu Kärki', contributions: 90 },
        ],
        repoUrl: 'https://github.com/aragon/aragon',
        imageUrl: 'https://striking-kindness-e0d93214bb.media.strapiapp.com/Aragon_AI_logo_394adfbcda.jpg'
      },

  ];
  



 
   
  
  