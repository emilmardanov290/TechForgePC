const products = {
  pcs: {
    gaming: [
      {
        id: 1,
        name: "DeltaCool CC360 B760-i5.4060 Gaming PC",
        description: "i5-12600K | 16GB DDR5 RAM | 1TB SSD | RTX4060 8GB | 750W | DS2908",
        priceUSD: 1899,
        image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FDeepCool-CC360-Mid-Tower-PC-Case_13AvVE.webp&w=1920&q=100",
        specs: {
          CPU: "Intel® Core™ i5-12600K",
          MotherBoard: "ASRock B760M Pro RS DDR5",
          RAM: "16GB (1x16GB) DDR5 4800Mhz Crucial",
          SSD: "1 TB Kingston M.2 NVMe™ PCIe®",
          GPU: "MSI GeForce RTX 4060 VENTUS 2X 8GB",
          PowerSupply: "DeepCool PF750 750W",
          Cooler: "DeepCool Gammaxx AG400 BK ARGB",
          Case: "DeepCool CC360",
          Warranty: "12 Months"
        }
      },
      {
        id: 2,
        name: "DeltaMax 2 B760MX2-i5.4060 Gaming PC",
        description: "i5-12400F | 32GB RAM | 1TB SSD | RTX4060 8GB | 750W | DS3294",
        priceUSD: 2259,
        image: "https://deltastoreimages.s3.eu-central-1.amazonaws.com/Gamemax-Storm-2-AB-1yokjs.webp",
        specs: {
          CPU: "Intel® Core™ i5-12400F",
          MotherBoard: "Biostar B760MX2-E D4",
          RAM: "32GB (2x16GB) DDR4 3600 MHz Klevv Cras XR RGB",
          SSD: "1 TB Kingston NV2 NVMe PCIe",
          GPU: "Gigabyte GeForce RTX 4060 Gaming OC 8GB",
          PowerSupply: "DeepCool PF750 750W",
          Cooler: "DeepCool Gammaxx AG400 BK",
          Case: "Gamemax Starlight 2 AB",
          Warranty: "12 Months"
        }
      },
      {
        id: 3,
        name: "Gaming PC Transformer T600",
        description: "i9-12900K | MAG Z690 | 64GB DDR4 | 500GB SSD | 2TB HDD | RTX3060 12GB | DS0485",
        priceUSD: 3099,
        image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2Fe162226b-7e4e-4e53-8fc8-2ab2185e11bd.webp&w=1920&q=100",
        specs: {
          CPU: "Intel® Core™ i9-12900K",
          MotherBoard: "MSI MAG Z690",
          RAM: "64GB DDR4",
          SSD: "500 GB M.2 NVMe™ PCIe",
          HDD: "2 TB 3.5\" HDD",
          GPU: "RTX 3060 12GB",
          PowerSupply: "850W",
          Cooler: "Stock / Included",
          Case: "Thermaltake AH T600",
          Warranty: "12 Months"
        }
      },
      {
        id: 4,
        name: "DeltaCool CH780 X670-R9.5070T 3D Sistem Bloku",
        description: "R9-9950X3D | 64GB DDR5 RAM | 2TB SSD | RTX 5070Ti 16GB | 1000W | DS4387",
        priceUSD: 6839,
        image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2F16f2wU.webp&w=1920&q=100",
        specs: {
          CPU: "AMD Ryzen™ 9 9950X3D",
          MotherBoard: "ASUS ROG Strix X870-A Gaming Wi-Fi DDR5",
          RAM: "64 GB (4x16GB) DDR5 6000MHz Lexar Ares RGB",
          SSD: "2 TB NVMe PCIe M.2 Samsung 990 Pro",
          GPU: "ASUS PRIME GeForce RTX 5070 Ti 16GB OC",
          PowerSupply: "DeepCool PQ1000M 80 PLUS Gold",
          Cooler: "Thermalright Trofeo Vision 360 ARGB",
          Case: "DeepCool CH780 White",
          Warranty: "12 Months"
        }
      },
      {
        id: 5,
        name: "Delta Cool CC560-i5.5060 Gaming PC",
        description: "i5-12400F | 32GB DDR5 RAM | 1TB SSD | RTX5060 8GB | 750W | DS2694",
        priceUSD: 2499,
        image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FDeepCool-CC560-WH_1lcWcq.webp&w=1920&q=100",
        specs: {
          CPU: "Intel® Core™ i5-12400F",
          MotherBoard: "ASRock B760M-HDV M.2 DDR5",
          RAM: "32GB (2x16GB) DDR5 4800Mhz Crucial",
          SSD: "1 TB Kingston NV2 NVMe PCIe",
          GPU: "MSI GeForce RTX 5060 8GB Shadow 2X OC",
          PowerSupply: "DeepCool 750W",
          Cooler: "DeepCool Gammax 400K",
          Case: "DeepCool CC560",
          Warranty: "12 Months"
        }
      },
      {
        id: 6,
        name: "DeltaBASE Z790-i7.5070T Gaming PC",
        description: "i7-14700KF | 32GB DDR5 RAM | 1TB SSD | RTX 5070Ti 16GB | 850W | DS4389",
        priceUSD: 4839,
        image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FX-Base-EL2-BlackwPOCA.webp&w=1920&q=100",
        specs: {
          CPU: "Intel® Core™ i7-14700KF",
          MotherBoard: "ASUS Z790-AYW WiFi W",
          RAM: "32 GB (2x16GB) DDR5 5600MHz Kingston Fury Beast RGB",
          SSD: "1 TB NVMe PCIe M.2 Samsung 990 EVO Plus",
          GPU: "ASUS PRIME GeForce RTX 5070 Ti 16GB OC",
          PowerSupply: "FPMAX GM850 850W 80 Plus Gold",
          Cooler: "FPMAX OASIS L360",
          Case: "XBASE EL2 Black +6 Fan",
          Warranty: "12 Months"
        }
      },
      {
        id: 7,
        name: "DeltaCool Coreliquid Z790-i9.5080 MSI Edition PC",
        description: "i9-14900K | 64GB DDR5 RAM | 1TB SSD | RTX5080 16GB | 1000W | DS3296",
        priceUSD: 6929,
        image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2F01uyxRh.webp&w=1920&q=100", 
        specs: {
          CPU: "Intel® Core™ i9-14900K",
          MotherBoard: "MSI MAG Z790 Tomahawk WiFi DDR5",
          RAM: "64GB (2x32GB) DDR5 6000MHz Delta T-Force",
          SSD: "1TB NVMe PCIe 4.0 M.2 Samsung 990 PRO",
          GPU: "MSI GeForce RTX 5080 16GB Vanguard SOC",
          PowerSupply: "MSI MPG A1000GS PCIE5",
          Cooler: "MSI MAG Coreliquid A13 360",
          Case: "DeepCool CH780 ATX+ Panoramic",
          Warranty: "12 Months"
        }
      },
      {
        id: 8,
        name: "DeltaCool CC360 B760Pro-i7.4060 Gaming PC",
        description: "i7-12700K | 32GB DDR5 | 1TB SSD | RT4060 8GB | 750W | 27\" FHD | DS3321",
        priceUSD: 2819,
        image: "https://deltastoreimages.s3.eu-central-1.amazonaws.com/deepcool-cc360IYHUA.webp", 
        specs: {
          CPU: "Intel® Core™ i7-12700K",
          MotherBoard: "ASRock B760M Pro RS DDR5",
          RAM: "32GB (2x16GB) 6000MHz DDR5 TEAMGROUP T-Force Vulcan",
          SSD: "1 TB Kingston NV3 PCIe 4.0 NVMe",
          GPU: "Asus Dual Geforce RTX 4060 8GB",
          Cooler: "Thermalright Aqua Elite 240 V3",
          PowerSupply: "DeepCool PF750 750W",
          Case: "DEEPCOOL CC360",
          Warranty: "12 Months"
        }
      },
      {
        id: 9,
        name: "DeltaMax Diamond B760MX2-i7.5060 Gaming PC",
        description: "i7-12700KF | 32GB DDR5 | 1TB SSD | RTX5060 8GB | 850W | DS4384",
        priceUSD: 2789,
        image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FFPMAX-Diamond-Z8-1avlJ_.webp&w=1920&q=100",
        specs: {
          CPU: "Intel® Core™ i7-12700KF",
          MotherBoard: "BIOSTAR B760MX2-E DDR5",
          RAM: "32GB (2x16GB) DDR5 5600MHz Kingston Fury RGB",
          SSD: "1 TB Kingston NV3 PCIe 4.0 NVMe",
          GPU: "MSI GeForce RTX 5060 8GB Shadow",
          Cooler: "DeepCool LE240 V2 ARGB",
          PowerSupply: "Thermalright TR-TB850 850W",
          Case: "FPMAX Diamond Z8",
          Warranty: "12 Months"
        }
      },
      {
        id: 10,
        name: "DeltaMax Hype-A Z790-i7.5070 Gaming PC",
        description: "i7-14700K | 32GB DDR5 RAM | 1TB SSD | RTX 5070 12GB | 850W | DS3943",
        priceUSD: 3959,
        image: "https://deltastoreimages.s3.eu-central-1.amazonaws.com/Gamemax-HYPE-A-BK-1oJ4Jf.webp", 
        specs: {
          CPU: "Intel® Core™ i7-14700K",
          MotherBoard: "Gigabyte Z790 UD AC",
          RAM: "32 GB (2x16GB) DDR5 6000MHz Corsair",
          SSD: "1 TB Kingston NV2 PCIe 4.0 NVMe",
          GPU: "Palit GeForce RTX 5070 GamingPro-S 12GB",
          PowerSupply: "Thermalright TR-TB850S 850W",
          Cooler: "DeepCool LS520 Liquid",
          Case: "Gamemax HYPE-A",
          Warranty: "12 Months"
        }
      },
      {
        id: 11,
        name: "DeltaCool B650-R7.5060T Gaming PC",
        description: "R7-7800X3D | 32GB DDR5 RAM | 1TB SSD | RTX 5060Ti 16GB | 800W | DS3397",
        priceUSD: 3699,
        image: "https://deltastoreimages.s3.eu-central-1.amazonaws.com/1OyPpC.webp", 
        specs: {
          CPU: "AMD Ryzen 7 7800X3D Gaming",
          MotherBoard: "Gigabyte B650 Gaming X AX",
          RAM: "32 GB (2x16GB) DDR5 6000MHz T-Force Delta RGB",
          SSD: "1 TB PCIe M.2 Corsair MP600 PRO LPX",
          GPU: "MSI GeForce RTX 5060 Ti 16GB Ventus 2X OC Plus",
          PowerSupply: "DeepCool PK800D 800W 80 Plus Bronze",
          Cooler: "DeepCool LS520 WH",
          Case: "DeepCool CC560",
          Warranty: "12 Months"
        }
      },
      {
        id: 12,
        name: "DeltaCool LS520 B650-R7.9070XT Gaming PC",
        description: "R7-7800X3D | 32GB DDR5 RAM | 1TB SSD | RX 9070XT | 1000W | DS3443",
        priceUSD: 4189,
        image: "https://deltastoreimages.s3.eu-central-1.amazonaws.com/Zalman-Z10-2mB6Xr.webp",
        specs: {
          CPU: "AMD Ryzen 7 7800X3D Gaming",
          MotherBoard: "Gigabyte B650 Gaming X AX",
          RAM: "32 GB (2x16GB) DDR5 6000MHz TEAMGROUP T-Force Vulcan",
          SSD: "1 TB Kingston NV2 PCIe 4.0",
          GPU: "Gigabyte Radeon RX 9070 XT GAMING OC 16GB",
          PowerSupply: "Thermalright TG1000 80 Plus Gold 1000W",
          Cooler: "DeepCool LS520",
          Case: "Zalman Z10",
          Warranty: "12 Months"
        }
      },
      {
        id: 13,
        name: "DeltaCool Matrex B650-R5.4060 Gaming PC",
        description: "R5-9600X | 32GB DDR5 RAM | 1TB SSD | RTX4060 8GB | 850W | DS3458",
        priceUSD: 2789,
        image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2F1Ypina.webp&w=1920&q=100",
        specs: {
          CPU: "AMD Ryzen™ 5 9600X",
          MotherBoard: "Gigabyte B650M Gaming Plus WiFi",
          RAM: "32 GB (2x16GB) DDR5 6000MHz TEAMGROUP T-Force Vulcan",
          SSD: "1 TB Kingston NV2 NVMe PCIe",
          GPU: "Asus Dual Geforce RTX 4060 8GB",
          PowerSupply: "Thermalright TG850 80 Plus Gold",
          Cooler: "DeepCool Gammaxx AG400 BK",
          Case: "DeepCool Matrexx 50 ADD-RGB 4F",
          Warranty: "12 Months"
        }
      },
      {
        id: 14,
        name: "DeltaCool CC560 B650-R7.5060T Gaming PC",
        description: "R7-9700X | 32GB DDR5 RAM | 1TB SSD | RTX 5060Ti 8GB | 850W | DS3460",
        priceUSD: 3239,
        image: "https://deltastoreimages.s3.eu-central-1.amazonaws.com/1pi4ez.webp", 
        specs: {
          CPU: "AMD Ryzen™ 7 9700X",
          MotherBoard: "Gigabyte B650 Gaming X AX",
          RAM: "32 GB (2x16GB) DDR5 6000MHz TEAMGROUP T-Force Delta",
          SSD: "1 TB Kingston NV2 NVMe PCIe",
          GPU: "Manli Nebula GeForce RTX 5060 Ti 8GB",
          PowerSupply: "Thermalright TR-TB850S 850W",
          Cooler: "DeepCool LS520",
          Case: "DEEPCOOL CC560 ARGB",
          Warranty: "12 Months"
        }
      },
      {
        id: 15,
        name: "DeltaBase EMBL H610M-i5.5060 Gaming PC",
        description: "i5-14400F | 32GB DDR5 RAM | 1TB SSD | RTX5060 8GB | 750W | DS3483",
        priceUSD: 2489,
        image: "https://deltastoreimages.s3.eu-central-1.amazonaws.com/X-Base-EMBL-BlackezVnv.webp", 
        specs: {
          CPU: "Intel® Core™ i5-14400F",
          MotherBoard: "ASUS Prime H610M-K DDR5",
          RAM: "32 GB (2x16) DDR5 4800MHz Crucial",
          SSD: "1 TB Kingston NV2 PCIe",
          GPU: "Gigabyte GeForce RTX 5060 EAGLE OC 8GB",
          PowerSupply: "DeepCool PF750 750W",
          Cooler: "Deepcool Gammaxx 400K RGB",
          Case: "XBASE EMBL BLACK",
          Warranty: "12 Months"
        }
      },
      {
        id: 16,
        name: "DeltaMax Diamond Z8 B760-i5.5060T Gaming PC",
        description: "i5-14400F | 32GB DDR5 RAM | 1TB SSD | RTX 5060 Ti 8GB | 750W | DS4342",
        priceUSD: 2740,
        image: "https://deltastoreimages.s3.eu-central-1.amazonaws.com/lap-yeniiiiiiiiiiiXrR-k.webp",
        specs: {
          CPU: "Intel® Core™ i5-14400F",
          MotherBoard: "ASUS Prime B760-PLUS DDR5",
          RAM: "32GB 6000MHz DDR5 Kingston Fury Beast",
          SSD: "1 TB NV3 PCIe 4.0 NVMe Kingston",
          GPU: "Gigabyte GeForce RTX 5060 Ti WindForce OC 8GB",
          PowerSupply: "FPMAX CF750 750W 80 Plus White",
          Cooler: "DeepCool AG400 bk",
          Case: "FPMAX Diamond Z8 Black",
          Warranty: "12 Months"
        }
      },
      {
        id: 17,
        name: "Deltabase EL2 Black Z790-i9.5060 Gaming PC",
        description: "i9-14900KF | 32GB DDR5 RAM | 1TB SSD | RTX 5060 8GB | 850W 80 Plus | DS4341",
        priceUSD: 3630,
        image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2F8-YENIbN1Ii.webp&w=1920&q=100", 
        specs: {
          CPU: "Intel® Core™ i9-14900KF",
          MotherBoard: "MSI Pro Z790-A Max Wi-Fi 7 DDR5",
          RAM: "32GB (2x16GB) DDR5 6400MHz Crucial Gaming OC Pro",
          SSD: "1 TB NV3 PCIe 4.0 NVMe Kingston",
          GPU: "ASUS Prime GeForce RTX 5060 8GB GDDR7 OC Edition",
          PowerSupply: "FPMAX GM850 850W 80 Plus Gold",
          Cooler: "FPMAX ICE Core L360 Liquid",
          Case: "XBASE EL2 BLACK +6 FAN",
          Warranty: "12 Months"
        }
      },
      {
        id: 18,
        name: "DeltaCool 4F H610M-i7.5060 Gaming PC",
        description: "i7-12700KF | 32GB DDR5 RAM | 1TB SSD | RTX5060 8GB | 750W | DS3563",
        priceUSD: 2769,
        image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2F1PP3yY.webp&w=1920&q=100", 
        specs: {
          CPU: "Intel® Core™ i7-12700KF",
          MotherBoard: "ASUS Prime H610M-K DDR5",
          RAM: "32GB (2x16GB) DDR5 4800MHz Crucial",
          SSD: "1 TB Kingston NV3 PCIe 4.0 NVMe",
          GPU: "Gigabyte GeForce RTX 5060 EAGLE OC 8GB",
          PowerSupply: "DeepCool PF750 750W",
          Cooler: "DeepCool Gammax AG620 BK ARGB",
          Case: "DeepCool Matrexx 50 ADD-RGB 4F",
          Warranty: "12 Months"
        }
      },
      {
        id: 19,
        name: "DeltaCool N7 Z790-i7.5060T Gaming PC",
        description: "i7-14700K | 64GB DDR5 RAM | 1TB SSD | RTX 5060Ti 16GB | 850W | DS3562",
        priceUSD: 4329,
        image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FDeepcool-Matrexx-55-MESH-ADD-RGB-4F-2kfnWb.webp&w=1920&q=100", 
        specs: {
          CPU: "Intel® Core™ i7-14700K",
          MotherBoard: "NZXT N7 Z790 Premium ATX Gaming",
          RAM: "64GB (2x32GB) DDR5 6000MHz Patrion Viper Venom",
          SSD: "1 TB NV3 PCIe M.2 Kingston",
          GPU: "Gigabyte GeForce RTX 5060 Ti EAGLE OC 16GB",
          PowerSupply: "DeepCool PN850D 850W 80 Plus Gold",
          Cooler: "DeepCool LS520",
          Case: "DeepCool Matrexx 55 Mesh Add-RGB 4F",
          Extras: "Redragon BS-8772 Wireless Keyboard and Mouse",
          Warranty: "12 Months"
        }
      },
      {
        id: 20,
        name: "DeltaCool CG530 Z790-i7.5070 Gaming PC",
        description: "i7-14700K | 32GB DDR5 RAM | 2TB SSD | RTX 5070 12GB | 850W | DS3600",
        priceUSD: 4079,
        image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2Fi7-14700k-1uvrOd.webp&w=1920&q=100", 
        specs: {
          CPU: "Intel® Core™ i7-14700K",
          MotherBoard: "NZXT N7 Z790 Premium ATX Gaming",
          RAM: "32 GB (2x16GB) DDR5 6000MHz Corsair Vengeance RGB Pro",
          SSD: "2TB NVMe M.2 Samsung 990 EVO",
          GPU: "MSI GeForce RTX 5070 12GB Gaming Trio OC",
          PowerSupply: "Thermalright TR-TB850 850W",
          Cooler: "DeepCool LE500 Marrs",
          Case: "DeepCool CG530 4F ATX",
          Warranty: "12 Months"
        }
      },
      {
        id: 21,
        name: "Delta Cool EMBL H610MHP-i3.3050 Gaming PC",
        description: "i3-12100F | 16GB RAM | 500GB SSD | RTX3050 8GB | 500W | DS0541",
        priceUSD: 1529,
        image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FX-Base-EMBL-BlackfTqOT.webp&w=1920&q=100", 
        specs: {
          CPU: "Intel® Core™ i3-12100F",
          MotherBoard: "BIOSTAR H610MHP 2.0 M2 DDR4",
          RAM: "16 GB DDR4 3200 MHz Crucial",
          SSD: "500 GB M.2 NVMe™ PCIe® Kingston",
          GPU: "MSI Geforce RTX 3050 Ventus 2X 8GB",
          Cooler: "DeepCool Ice Edge Mini FS",
          PowerSupply: "DeepCool PF500 500W",
          Case: "XBASE EMBL BLACK",
          Warranty: "12 Months"
        }
      },
      {
        id: 22,
        name: "DeltaBase EMBL B760-i5.5060 PRO Gaming PC",
        description: "i5-13400F | 32GB DDR5 RAM | 1TB SSD | RTX5060 8GB | 750W | DS3632",
        priceUSD: 2589,
        image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FX-Base-EMBL-BlackfTqOT.webp&w=1920&q=100",
        specs: {
          CPU: "Intel® Core™ i5-13400F",
          MotherBoard: "ASRock B760 Pro RS WiFi DDR5",
          RAM: "32 GB (2x16GB) DDR5 5600MHz Corsair VENGEANCE RGB",
          SSD: "1 TB M.2 NVMe™ PCIe® Kingston",
          GPU: "MSI GeForce RTX 5060 8GB Gaming Trio OC",
          PowerSupply: "DeepCool PF750 750W",
          Cooler: "ThermalRight Assassin 120",
          Case: "XBASE EMBL BLACK",
          Warranty: "12 Months"
        }
      },
      {
        id: 23,
        name: "Delta Matrexx V3 Z790-i7.4070T Gaming PC",
        description: "i7-14700K | 64GB DDR5 RAM | 1TB SSD | RTX 4070Ti 16GB | 1000W 80Plus | DS2910",
        priceUSD: 4849,
        image: "https://deltastoreimages.s3.eu-central-1.amazonaws.com/Deepcool-MATREXX-55-V3-Add-RGB-WH-3F_1OvCrE.webp", 
        specs: {
          CPU: "Intel® Core™ i7-14700K",
          MotherBoard: "Asus PRIME Z790-P Wi-Fi DDR5",
          RAM: "64 GB (2x32GB) T-Force Delta RGB WH DDR5 6000MHz",
          SSD: "1 TB 990 PRO PCIe® 4.0 NVMe™",
          GPU: "Palit GeForce RTX 4070 Ti SUPER 16GB GamingPro White OC",
          PowerSupply: "Thermalright TG1000-W White 80 Plus Gold",
          Cooler: "DeepCool LS520 WH",
          Case: "DeepCool Matrexx 55 V3 Add-RGB WH 3F",
          Warranty: "12 Months"
        }
      },
      {
        id: 24,
        name: "Delta Matrexx V3 B650-R9.5070 Gaming PC",
        description: "R9-7900X | 32GB DDR5 RAM | 1TB SSD | RTX5070 12GB | 850W | DS3726",
        priceUSD: 4399,
        image: "https://deltastoreimages.s3.eu-central-1.amazonaws.com/Deepcool-MATREXX-55-V3-Add-RGB-WH-3F_1OvCrE.webp", 
        specs: {
          CPU: "AMD Ryzen™ 9 7900X",
          MotherBoard: "Gigabyte B650 Gaming X AX",
          RAM: "32GB (2x16GB) DDR5 6400MHz Corsair Vengeance RGB PRO",
          SSD: "1TB NV2 PCIe 4.0 NVMe Kingston",
          GPU: "MSI GeForce RTX 5070 12GB Gaming Trio OC",
          PowerSupply: "Thermalright TR-TB850S 850W",
          Cooler: "be quiet! Pure Loop 2 360mm",
          Case: "DeepCool Matrexx 55 V3 Add-RGB WH 3F",
          Warranty: "12 Months"
        }
      },
      {
        id: 25,
        name: "DeltaCool Matrexx 4F H610M-i7.5050 Gaming PC",
        description: "i7-12700KF | 32GB DDR5 RAM | 1TB SSD | RTX5050 8GB | 750W | DS3753",
        priceUSD: 2589,
        image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2F1PP3yY.webp&w=1920&q=100", 
        specs: {
          CPU: "Intel® Core™ i7-12700KF",
          MotherBoard: "ASUS Prime H610M-K DDR5",
          RAM: "32GB (2x16GB) DDR5 4800MHz Crucial",
          SSD: "1 TB Kingston NV3 PCIe 4.0 NVMe",
          GPU: "MSI GeForce RTX 5050 8GB SHADOW 2X OC",
          PowerSupply: "DeepCool PF750 750W",
          Cooler: "DeepCool Gammax AG620 BK ARGB",
          Case: "DeepCool Matrexx 50 ADD-RGB 4F",
          Warranty: "12 Months"
        }
      },
      {
        id: 26,
        name: "DeltaCool CC360 H610-i5.5050 Gaming PC",
        description: "i5-12400F | 16GB DDR5 RAM | 512GB SSD | RTX5050 8GB | 650W | DS3883",
        priceUSD: 1849,
        image: "https://deltastoreimages.s3.eu-central-1.amazonaws.com/1iJWIR.webp", 
        specs: {
          CPU: "Intel® Core™ i5-12400F",
          MotherBoard: "ASUS Prime H610M-K DDR5",
          RAM: "16GB (1x16GB) DDR5 4800 MHz Crucial",
          SSD: "512 GB Kingston NV2 NVMe PCIe",
          GPU: "MSI GeForce RTX 5050 8GB Shadow 2X OC",
          PowerSupply: "DeepCool PF650 650W",
          Cooler: "DeepCool Gammaxx AG400 BK",
          Case: "DEEPCOOL CC360",
          Warranty: "12 Months"
        }
      },
      {
        id: 27,
        name: "DeltaCool CC560 B760MX2-i5.5050 Gaming PC",
        description: "i5-13400F | 16GB DDR5 RAM | 1TB SSD | RTX5050 8GB | 650W | DS3887",
        priceUSD: 2049,
        image: "https://deltastoreimages.s3.eu-central-1.amazonaws.com/1v9zIT.webp", 
        specs: {
          CPU: "Intel® Core™ i5-13400F",
          MotherBoard: "Biostar B760MX2-E M2/DDR5",
          RAM: "16 GB (1x16GB) DDR5 4800MHz Crucial",
          SSD: "1 TB Kingston NV2 NVMe PCIe",
          GPU: "Palit GeForce RTX 5050 Dual 8GB",
          PowerSupply: "DeepCool PF650",
          Cooler: "DeepCool Gammaxx AG400",
          Case: "DeepCool CG560 Mid-Tower",
          Warranty: "12 Months"
        }
      },
      {
        id: 28,
        name: "DeltaMatrex 4F B70M-i7.5060 Gaming PC",
        description: "i7-14700K | 32GB DDR5 RAM | 1TB SSD | RTX5060 8GB | 850W | DS4036",
        priceUSD: 3189,
        image: "https://deltastoreimages.s3.eu-central-1.amazonaws.com/Deepcool-Matrexx-55-MESH-ADD-RGB-4F-2kfnWb.webp", 
        specs: {
          CPU: "Intel® Core™ i7-14700K",
          MotherBoard: "Gigabyte B760M X DDR5",
          RAM: "32GB (2x16GB) DDR5 4800MHz Crucial",
          SSD: "1 TB NV3 PCIe M.2 Kingston",
          GPU: "ASUS Prime GeForce RTX 5060 8GB OC Edition",
          PowerSupply: "DeepCool PK850D 850W 80 Plus Bronze",
          Cooler: "DeepCool LS520 Liquid",
          Case: "DeepCool Matrexx 55 Mesh Add-RGB 4F",
          Warranty: "12 Months"
        }
      },
      {
        id: 29,
        name: "DeltaMax B650-R5.5060 White Gaming PC",
        description: "R5-7600X | 32GB DDR5 | 1TB SSD | RTX5060 8GB | 750W | DS3938",
        priceUSD: 5710,
        image: "https://deltastoreimages.s3.eu-central-1.amazonaws.com/Gamemax-Vista-COC-AW-14FdF4.webp", 
        specs: {
          CPU: "AMD Ryzen™ 5 7600X",
          MotherBoard: "ASUS Prime B650-PLUS WiFi",
          RAM: "32GB (2x16GB) DDR5 6000MHz Corsair",
          SSD: "1 TB Kingston NV2 NVMe PCIe",
          GPU: "Gigabyte GeForce RTX 5060 EAGLE OC 8GB",
          PowerSupply: "DeepCool PF750 750W",
          Cooler: "DeepCool AG500 BK ARGB",
          Case: "Gamemax Vista COC AW",
          Warranty: "12 Months"
        }
      },
      {
        id: 30,
        name: "Delta MYSTIQUE X870-R9.5080 3D Sistem Bloku",
        description: "R9-9950X3D | 64GB DDR5 RAM | 1TB SSD | RTX5080 16GB | 1000W | DS4039",
        priceUSD: 4850,
        image: "https://deltastoreimages.s3.eu-central-1.amazonaws.com/X-Base-EL2-BlackwPOCA.webp", 
        specs: {
          CPU: "AMD Ryzen™ 9 9950X3D",
          MotherBoard: "GIGABYTE X870 Gaming WiFi6",
          RAM: "64 GB (2x32GB) DDR5 6000MHz G.SKILL Trident Z5 Neo RGB",
          SSD: "1 TB NVMe PCIe M.2 Samsung 990 PRO",
          GPU: "MSI GeForce RTX 5080 16GB Shadow 3X OC",
          PowerSupply: "DeepCool PQ1000G 80 Plus Gold",
          Cooler: "DeepCool MYSTIQUE 360 ARGB",
          Case: "XBASE EL2",
          Warranty: "12 Months"
        }
      },
    ],
    office: {
      Other: [
        {
          id: 31,
          name: "OHBWUP Mini PC 12th N100",
          description: "Celeron N100 | 8GB DDR5 RAM | 256GB SSD | Intel UHD | DS3317",
          priceUSD: 1200, 
          image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FOHBWUP-Mini-PC-12th-N100Wvzoz.webp&w=1920&q=100",
          specs: {
            CPU: "Intel® Celeron N100 (12th gen)",
            RAM: "8 GB DDR5 4800MHz",
            SSD: "256 GB PCIe/SATA",
            GPU: "Intel UHD Graphics",
            Warranty: "12 Months"
          }
        },
        {
          id: 32,
          name: "CHUWI CoreBOX Mini PC",
          description: "i5-12450H | 16GB DDR5 RAM | 512GB SSD | Win11 | DS1343",
          priceUSD: 899,
          image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FCHUWI-CoreBOX-Mini-PC_1x92gU.webp&w=1920&q=100", 
          specs: {
            CPU: "Intel® Core™ i5-12450H",
            RAM: "16 GB DDR5",
            SSD: "512 GB M.2 NVMe™ PCIe®",
            GPU: "Intel UHD Graphics",
            Warranty: "12 Months"
          }
        }
      ],
      HP: [
        {
          id: 33,
          name: "HP Pro Tower 290 G9 Desktop PC A55BGET",
          description: "i5-14500 | 16GB RAM | 512GB SSD | UHD 730 | DS4247",
          priceUSD: 1179,
          image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FHP-Pro-290-G9-Compact-PC_1b6W0J.webp&w=1920&q=100", 
          specs: {
            CPU: "Intel® Core™ i5-14500",
            RAM: "16 GB DDR4 3200MHz",
            SSD: "512 GB M.2 NVMe™ PCIe®",
            GPU: "Intel® UHD Graphics 770",
            PowerSupply: "180 W external power adapter",
            Warranty: "12 Months"
          }
        },
        {
          id: 34,
          name: "HP Pavilion Desktop TP01-5015ci B85P9EA",
          description: "i5-14400 | 16GB RAM | 1TB SSD | UHD 730 | DS3870",
          priceUSD: 1459,
          image: "https://deltastoreimages.s3.eu-central-1.amazonaws.com/HP-Pavilion-Desktop-TP01-5015ci-2vTd61.webp", 
          specs: {
            CPU: "Intel® Core™ i5-14400",
            RAM: "16 GB DDR4 3200MHz",
            SSD: "1 TB M.2 NVMe™ PCIe®",
            GPU: "Intel® UHD Graphics 730",
            Warranty: "12 Ay"
          }
        },
        {
          id: 35,
          name: "HP Pro Tower 290 G9 Desktop PC i5-13th gen",
          description: "i5-13500 | 8GB RAM | 256GB SSD | UHD 730 | DS0366",
          priceUSD: 1149,
          image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FHP-Pro-290-G9-Compact-PC_2gTKQl.webp&w=1920&q=100", 
          specs: {
            CPU: "Intel® Core™ i5-13500",
            RAM: "8 GB DDR4 3200MHz",
            SSD: "256 GB M.2 NVMe™ PCIe®",
            GPU: "Intel® UHD Graphics 770",
            PowerSupply: "180 W external power adapter",
            Warranty: "12 Ay"
          }
        },
        {
          id: 36,
          name: "HP Pro Tower 290 G9 Desktop PC A1JK1ES",
          description: "i3-14100 | 8GB RAM | 512GB SSD | UHD 730 | DS3761",
          priceUSD: 899,
          image: "https://deltastoreimages.s3.eu-central-1.amazonaws.com/HP-Pro-290-G9-Compact-PC_1b6W0J.webp", 
          specs: {
            CPU: "Intel® Core™ i3-14100",
            RAM: "8 GB DDR4 3200MHz",
            SSD: "512 GB M.2 NVMe™ PCIe®",
            GPU: "Intel® UHD Graphics 770",
            PowerSupply: "180 W external power adapter",
            Warranty: "12 Ay"
          }
        },
        {
          id: 37,
          name: "HP Pro Tower 290 G9 Desktop PC i5/512GB",
          description: "i5-13500 | 8GB RAM | 512GB SSD | UHD 730 | DS0026",
          priceUSD: 1199,
          image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FHP-Pro-290-G9-Compact-PC_1b6W0J.webp&w=1920&q=100",
          specs: {
            CPU: "Intel® Core™ i5-13500",
            RAM: "8 GB DDR4 3200MHz",
            SSD: "512 GB M.2 NVMe™ PCIe®",
            GPU: "Intel® UHD Graphics 770",
            PowerSupply: "180 W external power adapter",
            Warranty: "12 Ay"
          }
        },
        {
          id: 38,
          name: "HP Pro Tower 290 G9 Desktop PC",
          description: "i7-12700 | H670 | 8GB RAM | 512GB SSD | UHD 770 | DS0087",
          priceUSD: 1779,
          image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FHP-Pro-290-G9-Compact-PC_2gTKQl.webp&w=1920&q=100", 
          specs: {
            CPU: "Intel® Core™ i7-12700",
            MotherBoard: "Intel® H670",
            RAM: "8 GB DDR4 3200MHz",
            SSD: "512 GB M.2 NVMe™ PCIe®",
            GPU: "Intel® UHD Graphics 770",
            PowerSupply: "180 W external power adapter",
            Warranty: "12 Ay"
          }
        },
        {
          id: 39,
          name: "HP ENVY Desktop TE01-3147c 319M2AA",
          description: "i7-12700 | 32GB RAM | 512GB SSD | 1TB HDD | UHD 770 | Win11 | DS3112",
          priceUSD: 1749,
          image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FHP-ENVY-Desktop-TE01-3147c_1niWOr.webp&w=1920&q=100",
          specs: {
            CPU: "Intel® Core™ i7-12700",
            RAM: "32 GB DDR4 3200MHz",
            SSD: "512 GB M.2 NVMe™ PCIe®",
            HDD: "1 TB",
            GPU: "Intel® UHD Graphics 770",
            PowerSupply: "180 W external power adapter",
            Warranty: "12 Ay"
          }
        },
        {
          id: 40,
          name: "HP 290 G4 Microtower PC i3",
          description: "i3-10100 | 8GB RAM | 256GB SSD | UHD 730 | DS1789",
          priceUSD: 1099,
          image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FHP-290-G4-Microtower-3HHKnA.webp&w=1920&q=100", 
          specs: {
            CPU: "Intel® Core™ i3-10100",
            RAM: "8 GB DDR4 3200MHz",
            SSD: "256 GB M.2 NVMe™ PCIe®",
            GPU: "Intel® UHD Graphics 770",
            PowerSupply: "180 W external power adapter",
            Warranty: "12 Ay"
          }
        },
        {
          id: 41,
          name: "HP Pro Tower 290 G9 Desktop PC i5-12th gen",
          description: "i5-12400 | 8GB RAM | 512GB SSD | UHD 730 | DS2866",
          priceUSD: 1099,
          image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FHP-Pro-290-G9-Compact-PC_3hv7mU.webp&w=1920&q=100", 
          specs: {
            CPU: "Intel® Core™ i5-12400",
            MotherBoard: "Intel® H670",
            RAM: "8 GB DDR4 3200MHz",
            SSD: "512 GB M.2 NVMe™ PCIe®",
            GPU: "Intel® UHD Graphics 730",
            PowerSupply: "180 W external power adapter",
            Warranty: "12 Ay"
          }
        }
      ]
    },
    monoblock: [
      {
        Asus: [
          {
            id: 42,
            name: "ASUS ExpertCenter P400 AiO P440VAK-BPC1520 90PT03X5-M017U0",
            description: "i7-13620H | 16GB DDR5 RAM | 512GB SSD | UHD | 27\" FHD | DS4590",
            priceUSD: 1499,
            image: "https://deltastoreimages.s3.eu-central-1.amazonaws.com/ASUS-ExpertCenter-P400-AiO-P470VAK-BPE1370-1R0qxQ.webp",
            specs: {
              CPU: "Intel® Core™ i7-13620H",
              RAM: "16 GB DDR5 5200MHz",
              SSD: "512 GB M.2 NVMe™ PCIe®",
              GPU: "Intel® UHD Graphics",
              Display: "27\" FHD (1920 x 1080) IPS, 100Hz",
              OS: "FreeDOS",
              Weight: "9 Kq",
              Warranty: "12 Ay"
            }
          },
          {
            id: 43,
            name: "ASUS ExpertCenter P400 AiO P470VAK-BPE1370 90PT03W5-M01JZ0",
            description: "C7-240H | 32GB DDR5 RAM | 1TB SSD | Intel | 27\" FHD | DS4588",
            priceUSD: 1999,
            image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FASUS-ExpertCenter-P400-AiO-P470VAK-BPE1370-1R0qxQ.webp&w=1920&q=100",
            specs: {
              CPU: "Intel® Core™ 7 240H",
              RAM: "32 GB DDR5 5200MHz",
              SSD: "1 TB M.2 NVMe™ PCIe®",
              GPU: "Intel® Graphics",
              Display: "27\" FHD (1920 x 1080) IPS, 100Hz",
              OS: "FreeDOS",
              Weight: "9 Kq",
              Warranty: "12 Ay"
            }
          },
        ],
        HP: [
          {
            id: 44,
            name: "HP All-in-One 27-cr1025ci B85P7EA",
            description: "U5-125U | 16GB DDR5 RAM | 1TB SSD | Intel | 27\" FHD | DS4569",
            priceUSD: 1564,
            image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FHP-27-cr0022ci-7X9W2EA-13sIXG.webp&w=1920&q=100",
            specs: {
              CPU: "Intel® Core™ Ultra 5 125U",
              RAM: "16 GB DDR5 5600MHz",
              SSD: "1 TB M.2 NVMe™ PCIe®",
              GPU: "Intel® Graphics",
              Display: "27\" FHD (1920 x 1080) IPS",
              OS: "FreeDOS",
              Warranty: "12 Ay"
            }
          },
          {
            id: 45,
            name: "HP All-in-One 24-cr1002ci PC A5JQ3EA",
            description: "U7-155U | 16GB DDR5 RAM | 512GB SSD | Intel | 23.8\" FHD | DS4305",
            priceUSD: 1599,
            image: "https://deltastoreimages.s3.eu-central-1.amazonaws.com/HP-All-in-One-24-cr0040-7Y064EA-1cXigH.webp",
            specs: {
              CPU: "Intel® Core™ Ultra 7 155U",
              RAM: "16 GB DDR5 5600MHz",
              SSD: "512 GB M.2 NVMe™ PCIe®",
              GPU: "Intel® Graphics",
              Display: "23.8\" FHD (1920 x 1080) IPS",
              OS: "FreeDOS",
              Warranty: "12 Ay"
            }
          },
          {
            id: 46,
            name: "HP ProOne 240 G10 Desktop PC 9M9G2AT",
            description: "i5-1334U | 8GB RAM | 512GB SSD | Iris Xe | 23.8\" FHD | DS4303",
            priceUSD: 1299,
            image: "https://deltastoreimages.s3.eu-central-1.amazonaws.com/HP-ProOne-240-G10-White-1rObqv.webp",
            specs: {
              CPU: "Intel® Core™ i5-1334U",
              RAM: "8 GB DDR4 3200MHz",
              SSD: "512 GB M.2 NVMe™ PCIe®",
              GPU: "Intel® Iris Xe Graphics",
              Display: "23.8\" FHD (1920 x 1080) IPS",
              OS: "FreeDOS",
              Weight: "5.37 Kq",
              Warranty: "12 Ay"
            }
          },
          {
            id: 47,
            name: "HP All-in-One 27-cr1006ci B85P1EA",
            description: "U5-125U | 16GB DDR5 RAM | 512GB SSD | Intel | 27\" FHD | DS4289",
            priceUSD: 1599,
            image: "https://deltastoreimages.s3.eu-central-1.amazonaws.com/HP-All-in-One-27-cr1006ci-1FONoy.webp",
            specs: {
              CPU: "Intel® Core™ Ultra 5 125U",
              RAM: "16 GB DDR5 5600MHz",
              SSD: "512 GB M.2 NVMe™ PCIe®",
              GPU: "Intel® Graphics",
              Display: "27\" FHD (1920 x 1080) IPS",
              OS: "FreeDOS",
              Warranty: "12 Ay"
            }
          },
          {
            id: 48,
            name: "HP All-in-One PC 24-cb1288nh B73TXEA",
            description: "i3-1215U | 8GB DDR4 | 512GB SSD | MX450 2GB | 23.8\" FHD | DS3868",
            priceUSD: 1195,
            image: "https://deltastoreimages.s3.eu-central-1.amazonaws.com/HP-200-G4-All-in-One-PC_1GYfNd.webp",
            specs: {
              CPU: "Intel® Core™ i3-1215U",
              RAM: "8 GB DDR4 3200MHz",
              SSD: "512 GB M.2 NVMe™ PCIe®",
              GPU: "NVIDIA GeForce MX450 2GB",
              Display: "23.8\" FHD (1920 x 1080) IPS",
              OS: "FreeDOS",
              Weight: "5.37 Kq",
              Warranty: "12 Ay"
            }
          },
          {
            id: 49,
            name: "HP All-in-One 27-cr0156nh PC A9VA3EA",
            description: "i7-1355U | 16GB RAM | 512GB SSD | Iris Xe | 27\" FHD | DS2455",
            priceUSD: 1999,
            image: "https://deltastoreimages.s3.eu-central-1.amazonaws.com/HP-All-in-One-27-cr0148nh_1a0k6f.webp",
            specs: {
              CPU: "Intel® Core™ i7-1355U",
              RAM: "16 GB DDR4 3200MHz",
              SSD: "512 GB M.2 NVMe™ PCIe®",
              GPU: "Intel® Iris Xe Graphics",
              Display: "27\" FHD (1920 x 1080) IPS",
              OS: "FreeDOS",
              Weight: "6.59 Kq",
              Warranty: "12 Ay"
            }
          },
          {
            id: 50,
            name: "HP 27-cb1127nh All-in-One PC 88X26EA",
            description: "i5-1235U | 16GB RAM | 512GB SSD | Iris Xe | 27\" FHD | DS3041",
            priceUSD: 1499,
            image: "https://deltastoreimages.s3.eu-central-1.amazonaws.com/8ff81517-892b-4734-83a3-064f9ccb1561.webp",
            specs: {
              CPU: "Intel® Core™ i5-1235U",
              RAM: "16 GB DDR4 3200MHz",
              SSD: "512 GB M.2 NVMe™ PCIe®",
              GPU: "Intel® Iris Xe Graphics",
              Display: "27\" FHD (1920 x 1080) IPS",
              OS: "FreeDOS",
              Weight: "6.59 Kq",
              Warranty: "12 Ay"
            }
          },
          {
            id: 51,
            name: "HP All-in-One 24-cr0310nh PC B73TCEA",
            description: "i5-1335U | 8GB RAM | 512GB SSD | Iris Xe | 23.8\" FHD | DS3531",
            priceUSD: 1399,
            image: "https://deltastoreimages.s3.eu-central-1.amazonaws.com/Monoblok-HP-All-in-One-24-cr0041ci-7X9U8EA-1Z7Lfa.webp",
            specs: {
              CPU: "Intel® Core™ i5-1335U",
              RAM: "8 GB DDR4 3200MHz",
              SSD: "512 GB M.2 NVMe™ PCIe®",
              GPU: "Intel® Iris Xe Graphics",
              Display: "23.8\" FHD (1920 x 1080) IPS",
              OS: "FreeDOS",
              Weight: "5.27 Kq",
              Warranty: "12 Ay"
            }
          },
          {
            id: 52,
            name: "HP All-in-One 24-cr0114 PC 83T53AA",
            description: "R3-7320U | 8GB DDR5 RAM | 512GB SSD | Radeon | 23.8\" FHD | Win11 | DS3346",
            priceUSD: 1149,
            image: "https://deltastoreimages.s3.eu-central-1.amazonaws.com/Monoblok-HP-All-in-One-24-cr0041ci-7X9U8EA-1Z7Lfa.webp",
            specs: {
              CPU: "AMD Ryzen™ 3 7320U",
              RAM: "8 GB LPDDR5 5500MHz",
              SSD: "512 GB M.2 NVMe™ PCIe®",
              GPU: "AMD Radeon™ Graphics",
              Display: "23.8\" FHD (1920 x 1080) IPS",
              OS: "Windows 11 Home",
              Weight: "5.27 Kq",
              Warranty: "12 Ay"
            }
          },
          {
            id: 53,
            name: "HP 200 G4 All-in-One PC 9US90EA",
            description: "Pentium J5050 | 4GB RAM | 1TB HDD | Intel HD | 21.5\" FHD | DS3003",
            priceUSD: 979,
            image: "https://deltastoreimages.s3.eu-central-1.amazonaws.com/HP-200-G4-All-in-One-PC_1VeBck.webp",
            specs: {
              CPU: "Intel® Pentium® Silver J5050",
              RAM: "4 GB DDR4 2400MHz",
              GPU: "Intel® HD 605 Graphics",
              Display: "21.5\" FHD (1920 x 1080) IPS",
              OS: "FreeDOS",
              Weight: "5.39 Kq",
              Warranty: "12 Ay"
            }
          },
          {
            id: 54,
            name: "HP Pavilion AiO 27-d0001ur 3M601EA",
            description: "i5-10400T | 16GB RAM | 512GB SSD | GTX1650 4GB | 27\" FHD | DS2621",
            priceUSD: 1679,
            image: "https://deltastoreimages.s3.eu-central-1.amazonaws.com/ed92e639-0782-41e1-bbb2-ff7c838e0db0.webp",
            specs: {
              CPU: "Intel® Core™ i5-10400T",
              RAM: "16 GB DDR4 2666MHz",
              SSD: "512 GB M.2 NVMe™ PCIe®",
              GPU: "NVIDIA GeForce GTX 1650 4GB",
              Display: "27\" FHD (1920 x 1080)",
              OS: "FreeDOS",
              Weight: "8.90 Kq",
              Warranty: "12 Ay"
            }
          },
          {
            id: 55,
            name: "HP All-in-One 24-cb1017nh 6M8A0EA",
            description: "i5-1235U | 8GB DDR4 | 512GB SSD | MX450 2GB | 23.8\" FHD | DS2414",
            priceUSD: 1489,
            image: "https://deltastoreimages.s3.eu-central-1.amazonaws.com/HP-All-in-One-24-cb1026nh_1cyqD.webp",
            specs: {
              CPU: "Intel® Core™ i5-1235U",
              RAM: "8 GB DDR4 3200MHz",
              SSD: "512 GB M.2 NVMe™ PCIe®",
              GPU: "NVIDIA GeForce MX450 2GB",
              Display: "23.8\" FHD (1920 x 1080) VA",
              OS: "FreeDOS",
              Weight: "5.37 Kq",
              Warranty: "12 Ay"
            }
          },
          {
            id: 56,
            name: "HP 200 G4 22 All-in-One PC 9UG59EA",
            description: "i3-10110U | 4GB DDR4 | 1TB HDD | 21.5\" FHD | UHD 720 | DS1261",
            priceUSD: 1179,
            image: "https://deltastoreimages.s3.eu-central-1.amazonaws.com/671ae46c-5339-4554-8273-110b6e5ddc31.webp",
            specs: {
              CPU: "Intel® Core™ i3-10110U",
              RAM: "4 GB DDR4 2666MHz",
              GPU: "Intel® UHD Graphics 720",
              Display: "21.5\" FHD (1920 x 1080) IPS",
              OS: "FreeDOS",
              Weight: "5.70 Kq",
              Warranty: "12 Ay"
            }
          },
          {
            id: 57,
            name: "HP 22-dd2001d 6H3Q1PA All-in-One PC",
            description: "i3-1215U | 4GB DDR4 | 1TB HDD | Iris Xe | 21.5\" FHD | Win11 | DS2664",
            priceUSD: 1079,
            image: "https://deltastoreimages.s3.eu-central-1.amazonaws.com/HP-All-in-One-22-dd2001d-PC_1AxknP.webp",
            specs: {
              CPU: "Intel® Core™ i3-1215U",
              RAM: "4 GB DDR4 3200MHz",
              GPU: "Intel® Iris Xe Graphics",
              Display: "21.5\" FHD (1920 x 1080) IPS",
              OS: "Windows 11 Home",
              Weight: "5.70 Kq",
              Warranty: "12 Ay"
            }
          },
          {
            id: 58,
            name: "HP All-in-One 24-cb1102ci 6M7X3EA",
            description: "i5-1235U | 8GB DDR4 | 512GB SSD | Iris Xe | 23.8\" FHD | Win11 | DS2172",
            priceUSD: 1699,
            image: "https://deltastoreimages.s3.eu-central-1.amazonaws.com/hp-24-cb1102ci_1uaxf.webp",
            specs: {
              CPU: "Intel® Core™ i5-1235U",
              RAM: "8 GB DDR4 3200MHz",
              SSD: "512 GB M.2 NVMe™ PCIe®",
              GPU: "Intel® Iris Xe Graphics",
              Display: "23.8\" FHD (1920 x 1080) IPS",
              OS: "Windows 11 Home",
              Weight: "5.37 Kq",
              Warranty: "12 Ay"
            }
          },
          {
            id: 59,
            name: "HP 27-dp1033ur 562H5EA AiO",
            description: "i3-1125G4 | 8GB RAM | 512GB SSD | UHD | 27\" FHD | DS1550",
            priceUSD: 1649,
            image: "https://deltastoreimages.s3.eu-central-1.amazonaws.com/ed92e639-0782-41e1-bbb2-ff7c838e0db0.webp",
            specs: {
              CPU: "Intel® Core™ i3-1125G4",
              RAM: "8 GB DDR4 3200MHz",
              SSD: "512 GB M.2 NVMe™ PCIe®",
              GPU: "Intel® UHD Graphics",
              Display: "27\" FHD (1920 x 1080) IPS",
              OS: "FreeDOS",
              Weight: "8.82 Kq",
              Warranty: "12 Ay"
            }
          },
          {
            id: 60,
            name: "HP ProOne 440 G9 AiO 6B2W8EA",
            description: "i7-12700T | 8GB RAM | 512GB SSD | UHD | 23.8\" FHD | DS1230",
            priceUSD: 1879,
            image: "https://deltastoreimages.s3.eu-central-1.amazonaws.com/HP-ProOne-440-G9_1xVUk9.webp",
            specs: {
              CPU: "Intel® Core™ i7-12700T",
              RAM: "8 GB DDR4 3200MHz",
              SSD: "512 GB M.2 NVMe™ PCIe®",
              GPU: "Intel® UHD Graphics 770",
              Display: "23.8\" FHD (1920 x 1080) IPS",
              OS: "FreeDOS",
              Weight: "7.77 Kq",
              Warranty: "12 Ay"
            }
          },
        ],
        Lenovo: [
          {
            id: 61,
            name: "Lenovo A100 Monoblok F0J60043PS",
            description: "i3-N305 | 8GB RAM | 512GB SSD | UHD | 23.8\" FHD | DS4537",
            priceUSD: 999,
            image: "https://deltastoreimages.s3.eu-central-1.amazonaws.com/Lenovo-A100-15OeNP.webp",
            specs: {
              CPU: "Intel® Core™ i3-N305",
              RAM: "8 GB DDR4 3200MHz",
              SSD: "512 GB M.2 NVMe™ PCIe®",
              GPU: "Intel® UHD Graphics",
              Display: "23.8\" FHD (1920 x 1080) IPS",
              OS: "FreeDOS",
              Weight: "4.3 Kq",
              Warranty: "12 Ay"
            }
          },
          {
            id: 62,
            name: "Lenovo Yoga AIO 27IAH10 F0J20033RU",
            description: "U9-285H | 32GB DDR5 RAM | 1TB SSD | Arc 140T | 27\" QHD | Win11 | DS3830",
            priceUSD: 3379,
            image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FLenovo-Yoga-AIO-27IAH10-1fYxxd.webp&w=1920&q=100",
            specs: {
              CPU: "Intel® Core™ Ultra 9 285H",
              RAM: "32 GB LPDDR5x 7467MHz",
              SSD: "1 TB M.2 NVMe™ PCIe®",
              GPU: "Intel Arc 140T",
              Display: "27\" QHD (2560 x 1440) IPS 120Hz",
              OS: "Windows 11 Home",
              Weight: "8.4 Kq",
              Warranty: "12 Ay"
            }
          },
          {
            id: 63,
            name: "Lenovo Yoga AIO 27IAH10 F0J20032RU",
            description: "U7-255H | 16GB DDR5 RAM | 1TB SSD | Arc 140T | 27\" QHD | Win11 | DS4141",
            priceUSD: 2995,
            image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FLenovo-Yoga-AIO-27IAH10-1fYxxd.webp&w=1920&q=100",
            specs: {
              CPU: "Intel® Core™ Ultra 7 255H",
              RAM: "16 GB LPDDR5x 7467MHz",
              SSD: "1 TB M.2 NVMe™ PCIe®",
              GPU: "Intel Arc 140T",
              Display: "27\" QHD (2560 x 1440) IPS 120Hz",
              OS: "Windows 11 Home",
              Weight: "8.4 Kq",
              Warranty: "12 Ay"
            }
          },
          {
            id: 64,
            name: "Lenovo ThinkCentre neo 50a 24 Gen 5 12SC000URU",
            description: "i5-13420H | 8GB DDR5 RAM | 512GB SSD | UHD | 23.8\" FHD | Touch | DS4435",
            priceUSD: 1589,
            image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FLenovo-ThinkCentre-neo-50a-24-Gen-5-1MQvEM.webp&w=1920&q=100",
            specs: {
              CPU: "Intel® Core™ i5-13420H",
              RAM: "8 GB DDR5 5200MHz",
              SSD: "512 GB M.2 NVMe™ PCIe®",
              GPU: "Intel® UHD Graphics",
              Display: "23.8\" FHD IPS, TouchScreen",
              OS: "FreeDOS",
              Weight: "6 Kq",
              Warranty: "12 Ay"
            }
          },
          {
            id: 65,
            name: "Lenovo ThinkCentre neo 50a 24 Gen 5 12SC0010RU",
            description: "i7-13620H | 16GB DDR5 RAM | 1TB SSD | UHD | 23.8\" FHD | DS3979",
            priceUSD: 1775,
            image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FLenovo-ThinkCentre-neo-50a-24-Gen-5-1MQvEM.webp&w=1920&q=100",
            specs: {
              CPU: "Intel® Core™ i7-13620H",
              RAM: "16 GB DDR5 5200MHz",
              SSD: "1 TB M.2 NVMe™ PCIe®",
              GPU: "Intel® UHD Graphics",
              Display: "23.8\" FHD (1920 x 1080) IPS",
              OS: "FreeDOS",
              Weight: "6 Kq",
              Warranty: "12 Ay"
            }
          },
          {
            id: 66,
            name: "Lenovo IdeaCentre AIO 5 24ALC6 F0G2003ERK",
            description: "R7-5700U | 16GB RAM | 256GB SSD | 1TB HDD | Radeon | 23.8\" FHD | Win11 | DS4434",
            priceUSD: 1599,
            image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FLenovo-IdeaCentre-AIO-5-24ALC6-16ef-3.webp&w=1920&q=100",
            specs: {
              CPU: "AMD Ryzen™ 7 5700U",
              RAM: "16 GB DDR4 3200MHz",
              SSD: "256 GB M.2 NVMe™ PCIe 4.0",
              GPU: "AMD Radeon™ Graphics",
              Display: "23.8\" FHD (1920 x 1080) IPS",
              OS: "Windows 11 Home",
              Warranty: "12 Ay"
            }
          },
          {
            id: 67,
            name: "Lenovo IdeaCentre AIO 3 24ALC6 F0G1000WRK",
            description: "R7-5700U | 8GB RAM | 512GB SSD | Radeon | 23.8\" FHD | DS3756",
            priceUSD: 1249,
            image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FLenovo-IdeaCentre-AIO-3-24ALC6-Black-1gp4DD.webp&w=1920&q=100",
            specs: {
              CPU: "AMD Ryzen™ 7 5700U",
              RAM: "8 GB DDR4 3200MHz",
              SSD: "512 GB M.2 NVMe™ PCIe 4.0",
              GPU: "AMD Radeon™ Graphics",
              Display: "23.8\" FHD (1920 x 1080) IPS",
              OS: "FreeDOS",
              Weight: "6.81 Kq",
              Warranty: "12 Ay"
            }
          },
          {
            id: 68,
            name: "Lenovo IdeaCentre AIO 3 24IAP7 F0GH01HVRU",
            description: "i3-1215U | 8GB RAM | 512GB SSD | UHD | 23.8\" FHD | DS3755",
            priceUSD: 1139,
            image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FLenovo-IdeaCentre-AIO-3-27IAP7-White_1cjeMD.webp&w=1920&q=100",
            specs: {
              CPU: "Intel® Core™ i3-1215U",
              RAM: "8 GB DDR4 3200MHz",
              SSD: "512 GB M.2 NVMe™ PCIe®",
              GPU: "Intel® UHD Graphics",
              Display: "23.8\" FHD (1920 x 1080) IPS",
              OS: "FreeDOS",
              Weight: "7.03 Kq",
              Warranty: "12 Ay"
            }
          },
          {
            id: 69,
            name: "Lenovo IdeaCentre AIO 3 24IAP7",
            description: "i5-13420H | 16GB RAM | 512GB SSD | UHD | 23.8\" FHD | DS3040",
            priceUSD: 1495,
            image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FLenovo-IdeaCentre-AIO-3-27IAP7-White_1cjeMD.webp&w=1920&q=100",
            specs: {
              CPU: "Intel® Core™ i5-13420H",
              RAM: "16 GB DDR4 3200MHz",
              SSD: "512 GB M.2 NVMe™ PCIe®",
              GPU: "Intel® UHD Graphics",
              Display: "23.8\" FHD (1920 x 1080) IPS",
              OS: "FreeDOS",
              Weight: "7.03 Kq",
              Warranty: "12 Ay"
            }
          },
          {
            id: 70,
            name: "Lenovo IdeaCentre AIO 27IRH9 F0HM008JRU",
            description: "i7-13620H | 16GB DDR5 RAM | 512GB SSD | UHD | 27.0\" FHD | DS1097",
            priceUSD: 1689,
            image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FLenovo-IdeaCentre-AIO-27IRH9_111Cc1.webp&w=1920&q=100",
            specs: {
              CPU: "Intel® Core™ i7-13620H",
              RAM: "16 GB DDR5 5200MHz",
              SSD: "512 GB M.2 NVMe™ PCIe 4.0",
              GPU: "Intel® UHD Graphics",
              Display: "27\" FHD (1920 x 1080) IPS",
              OS: "FreeDOS",
              Weight: "7.10 Kq",
              Warranty: "12 Ay"
            }
          },
        ],
        Aser: [
          {
            id: 71,
            name: "Acer Aspire C24-1800 AiO DQ.BM2EM.001",
            description: "i5-12450H | 8GB RAM | 512GB SSD | UHD | 23.8\" FHD | DS3095",
            priceUSD: 1379,
            image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FAcer-Aspire-C24-1800-AiO_1oqo4H.webp&w=1920&q=100",
            specs: {
              CPU: "Intel® Core™ i5-12450H",
              RAM: "8 GB DDR4 3200MHz",
              SSD: "512 GB M.2 NVMe™ PCIe®",
              GPU: "Intel® UHD Graphics",
              Display: "23.8\" FHD (1920 x 1080)",
              OS: "FreeDOS",
              Warranty: "12 Ay"
            }
          },
          {
            id: 72,
            name: "Acer Aspire C24-1700 AiO DQ.BJFEM.009",
            description: "i3-1215U | 8GB RAM | 256GB SSD | UHD | 23.8\" FHD | DS1120",
            priceUSD: 1199,
            image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FAcer-Aspire-C24-1800-AiO_1oqo4H.webp&w=1920&q=100",
            specs: {
              CPU: "Intel® Core™ i3-1215U",
              RAM: "8 GB DDR4 3200MHz",
              SSD: "256 GB M.2 NVMe™ PCIe®",
              GPU: "Intel® UHD Graphics",
              Display: "23.8\" FHD (1920 x 1080)",
              OS: "FreeDOS",
              Weight: "",
              Warranty: "12 Ay"
            }
          },
        ]
      }
    ],
  },
  laptops: {
    gaming: [
      {
        Acer: [
          {
            id: 73,
            name: "Acer Predator Helios Neo 16S AI PHN16S-71-76TK",
            description: "i9-14900HX | 64GB DDR5 RAM | 2TB SSD | RTX 5080 16GB | 16\" WQXGA | OLED | 240Hz | Win11 | DS4501",
            priceUSD: 4999,
            image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FAcer-Predator-Helios-Neo-16S-AI-PHN16S-71-76TK-1EP-zD.webp&w=1920&q=100",
            specs: {
              CPU: "Intel® Core™ i9-14900HX",
              RAM: "64 GB DDR5 6400MHz",
              SSD: "2 TB M.2 NVMe™ PCIe®",
              GPU: "NVIDIA GeForce RTX 5080 16GB",
              Display: "16\" WQXGA OLED 240Hz",
              OS: "Windows 11 Home",
              Weight: "2.5 Kq",
              Warranty: "12 Ay"
            }
          },
          {
            id: 74,
            name: "Acer Nitro Lite NL16-71G",
            description: "i7-14700H | 32GB DDR5 RAM | 1TB SSD | RTX 5060 8GB | 16\" FHD | 144Hz | Win11 | DS4512",
            priceUSD: 3799,
            image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FAcer-Nitro-Lite-NL16-71G-526P-1RJm_u.webp&w=1920&q=100",
            specs: {
              CPU: "Intel® Core™ i7-14700H",
              RAM: "32 GB DDR5 5600MHz",
              SSD: "1 TB M.2 NVMe™ PCIe®",
              GPU: "NVIDIA GeForce RTX 5060 8GB",
              Display: "16\" FHD IPS 144Hz",
              OS: "Windows 11 Home",
              Weight: "2.3 Kq",
              Warranty: "12 Ay"
            }
          },
          {
            id: 75,
            name: "Acer Predator Helios Neo 16 AI PHN16-73-97SP",
            description: "i7-14650HX | 32GB DDR5 RAM | 1TB SSD | RTX 5070 8GB | 16\" WQXGA | 240Hz | Win11 | DS4523",
            priceUSD: 3899,
            image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FAcer-Predator-Helios-Neo-16-AI-PHN16-73-97SP-1tLCMX.webp&w=1920&q=100",
            specs: {
              CPU: "Intel® Core™ i7-14650HX",
              RAM: "32 GB DDR5 5600MHz",
              SSD: "1 TB M.2 NVMe™ PCIe®",
              GPU: "NVIDIA GeForce RTX 5070 8GB",
              Display: "16\" WQXGA IPS 240Hz",
              OS: "Windows 11 Home",
              Weight: "2.4 Kq",
              Warranty: "12 Ay"
            }
          },
          {
            id: 76,
            name: "Acer Nitro V 16 ANV16-41",
            description: "i5-13500H | 16GB DDR5 RAM | 512GB SSD | RTX 4050 6GB | 16\" FHD | 144Hz | Win11 | DS4530",
            priceUSD: 2349,
            image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FAcer-Nitro-V-16-ANV16-41-R5K2-Gaming-Laptop_1Nrpr7.webp&w=1920&q=100",
            specs: {
              CPU: "Intel® Core™ i5-13500H",
              RAM: "16 GB DDR5 5600MHz",
              SSD: "512 GB M.2 NVMe™ PCIe®",
              GPU: "NVIDIA GeForce RTX 4050 6GB",
              Display: "16\" FHD IPS 144Hz",
              OS: "Windows 11 Home",
              Weight: "2.2 Kq",
              Warranty: "12 Ay"
            }
          },
          {
            id: 77,
            name: "Acer Nitro V 15 ANV15-51",
            description: "i7-12700H | 16GB DDR5 RAM | 1TB SSD | RTX 4060 8GB | 15.6\" FHD | 144Hz | Win11 | DS4541",
            priceUSD: 2699,
            image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FAcer-Nitro-V-15-ANV15-51-75VW-1dKe2x.webp&w=1920&q=100",
            specs: {
              CPU: "Intel® Core™ i7-12700H",
              RAM: "16 GB DDR5 5600MHz",
              SSD: "1 TB M.2 NVMe™ PCIe®",
              GPU: "NVIDIA GeForce RTX 4060 8GB",
              Display: "15.6\" FHD IPS 144Hz",
              OS: "Windows 11 Home",
              Weight: "2.1 Kq",
              Warranty: "12 Ay"
            }
          },
          {
            id: 78,
            name: "Acer Nitro V 15 ANV15-52",
            description: "i5-13500H | 16GB DDR5 RAM | 512GB SSD | RTX 4050 6GB | 15.6\" FHD | 144Hz | Win11 | DS4552",
            priceUSD: 2199,
            image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FAcer-Nitro-V-15-ANV15-52-57BB-1G3rYB.webp&w=1920&q=100",
            specs: {
              CPU: "Intel® Core™ i5-13500H",
              RAM: "16 GB DDR5 5600MHz",
              SSD: "512 GB M.2 NVMe™ PCIe®",
              GPU: "NVIDIA GeForce RTX 4050 6GB",
              Display: "15.6\" FHD IPS 144Hz",
              OS: "Windows 11 Home",
              Weight: "2.1 Kq",
              Warranty: "12 Ay"
            }
          },
          {
            id: 79,
            name: "Acer Predator Helios Neo 16S AI PHN16S-71-85RR",
            description: "i7-14650HX | 32GB DDR5 RAM | 1TB SSD | RTX 5070Ti 8GB | 16\" WQXGA | OLED | 240Hz | Win11 | DS4560",
            priceUSD: 3899,
            image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FAcer-Predator-Helios-Neo-16S-AI-PHN16S-71-76TK-1EP-zD.webp&w=1920&q=100",
            specs: {
              CPU: "Intel® Core™ i7-14650HX",
              RAM: "32 GB DDR5 5600MHz",
              SSD: "1 TB M.2 NVMe™ PCIe®",
              GPU: "NVIDIA GeForce RTX 5070Ti 8GB",
              Display: "16\" WQXGA OLED 240Hz",
              OS: "Windows 11 Home",
              Weight: "2.4 Kq",
              Warranty: "12 Ay"
            }
          },
          {
            id: 80,
            name: "Acer Nitro Lite NL16-71F",
            description: "i5-13500H | 16GB DDR5 RAM | 1TB SSD | RTX 4060 8GB | 16\" FHD | 144Hz | Win11 | DS4571",
            priceUSD: 2499,
            image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FAcer-Nitro-Lite-NL16-71G-526P-1RJm_u.webp&w=1920&q=100",
            specs: {
              CPU: "Intel® Core™ i5-13500H",
              RAM: "16 GB DDR5 5600MHz",
              SSD: "1 TB M.2 NVMe™ PCIe®",
              GPU: "NVIDIA GeForce RTX 4060 8GB",
              Display: "16\" FHD IPS 144Hz",
              OS: "Windows 11 Home",
              Weight: "2.3 Kq",
              Warranty: "12 Ay"
            }
          },
          {
            id: 81,
            name: "Acer Predator Helios Neo 16 AI PHN16-73-96SP",
            description: "i7-14650HX | 32GB DDR5 RAM | 1TB SSD | RTX 5070 8GB | 16\" WQXGA | 240Hz | Win11 | DS4580",
            priceUSD: 3849,
            image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FAcer-Predator-Helios-Neo-16-AI-PHN16-73-97SP-1tLCMX.webp&w=1920&q=100",
            specs: {
              CPU: "Intel® Core™ i7-14650HX",
              RAM: "32 GB DDR5 5600MHz",
              SSD: "1 TB M.2 NVMe™ PCIe®",
              GPU: "NVIDIA GeForce RTX 5070 8GB",
              Display: "16\" WQXGA IPS 240Hz",
              OS: "Windows 11 Home",
              Weight: "2.4 Kq",
              Warranty: "12 Ay"
            }
          }
        ],
        Asus: [
          {
            id: 82,
            name: "ASUS ROG Strix G16 G614JY",
            description: "i9-14900HX | 32GB DDR5 RAM | 2TB SSD | RTX 5080 16GB | 16\" QHD | 240Hz | Win11 | DS4601",
            priceUSD: 4799,
            image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2F3yeniiiiiiiiib9zVB.webp&w=640&q=75",
            specs: {
              CPU: "Intel® Core™ i9-14900HX",
              RAM: "32 GB DDR5 6400MHz",
              SSD: "2 TB M.2 NVMe™ PCIe®",
              GPU: "NVIDIA GeForce RTX 5080 16GB",
              Display: "16\" QHD IPS 240Hz",
              OS: "Windows 11 Home",
              Weight: "2.3 Kq",
              Warranty: "12 Ay"
            }
          },
          {
            id: 83,
            name: "ASUS TUF Gaming A17 FA707",
            description: "i7-14700H | 16GB DDR5 RAM | 1TB SSD | RTX 4060 8GB | 17\" FHD | 144Hz | Win11 | DS4610",
            priceUSD: 2599,
            image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2F1KO8Vz.webp&w=1920&q=100",
            specs: {
              CPU: "Intel® Core™ i7-14700H",
              RAM: "16 GB DDR5 5600MHz",
              SSD: "1 TB M.2 NVMe™ PCIe®",
              GPU: "NVIDIA GeForce RTX 4060 8GB",
              Display: "17\" FHD IPS 144Hz",
              OS: "Windows 11 Home",
              Weight: "2.8 Kq",
              Warranty: "12 Ay"
            }
          },
          {
            id: 84,
            name: "ASUS ROG Zephyrus G14 OLED GA403UV",
            description: "i7-14650HX | 32GB DDR5 RAM | 1TB SSD | RTX 5070 8GB | 14\" QHD OLED | 120Hz | Win11 | DS4622",
            priceUSD: 3699,
            image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FASUS-ROG-Zephyrus-G14-OLED-GA403UV-QS163-1tNjr0.webp&w=1920&q=100",
            specs: {
              CPU: "Intel® Core™ i7-14650HX",
              RAM: "32 GB DDR5 5600MHz",
              SSD: "1 TB M.2 NVMe™ PCIe®",
              GPU: "NVIDIA GeForce RTX 5070 8GB",
              Display: "14\" QHD OLED 120Hz",
              OS: "Windows 11 Home",
              Weight: "1.8 Kq",
              Warranty: "12 Ay"
            }
          },
          {
            id: 85,
            name: "ASUS TUF Gaming A18 FA808UM",
            description: "i7-14700H | 32GB DDR5 RAM | 1TB SSD | RTX 4060 8GB | 18\" FHD | 144Hz | Win11 | DS4630",
            priceUSD: 2799,
            image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FASUS-TUF-Gaming-A18-FA808UM-S8030-1-sIP1.webp&w=1920&q=100",
            specs: {
              CPU: "Intel® Core™ i7-14700H",
              RAM: "32 GB DDR5 5600MHz",
              SSD: "1 TB M.2 NVMe™ PCIe®",
              GPU: "NVIDIA GeForce RTX 4060 8GB",
              Display: "18\" FHD IPS 144Hz",
              OS: "Windows 11 Home",
              Weight: "3.0 Kq",
              Warranty: "12 Ay"
            }
          },
          {
            id: 86,
            name: "ASUS TUF Gaming F16 FX607VU",
            description: "i5-13500H | 16GB DDR5 RAM | 512GB SSD | RTX 4050 6GB | 16\" FHD | 144Hz | Win11 | DS4640",
            priceUSD: 2199,
            image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FASUS-TUF-Gaming-F16-FX607VU-RL149-1UaxLU.webp&w=1920&q=100",
            specs: {
              CPU: "Intel® Core™ i5-13500H",
              RAM: "16 GB DDR5 5600MHz",
              SSD: "512 GB M.2 NVMe™ PCIe®",
              GPU: "NVIDIA GeForce RTX 4050 6GB",
              Display: "16\" FHD IPS 144Hz",
              OS: "Windows 11 Home",
              Weight: "2.1 Kq",
              Warranty: "12 Ay"
            }
          },
          {
            id: 87,
            name: "ASUS VivoBook V16 V3607VU",
            description: "i5-13420H | 16GB DDR5 RAM | 512GB SSD | RTX 4050 6GB | 16\" FHD | 60Hz | Win11 | DS4650",
            priceUSD: 1799,
            image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FASUS-V16-V3607VU-RP092-1sNeJR.webp&w=1920&q=100",
            specs: {
              CPU: "Intel® Core™ i5-13420H",
              RAM: "16 GB DDR5 5600MHz",
              SSD: "512 GB M.2 NVMe™ PCIe®",
              GPU: "NVIDIA GeForce RTX 4050 6GB",
              Display: "16\" FHD IPS 60Hz",
              OS: "Windows 11 Home",
              Weight: "2.0 Kq",
              Warranty: "12 Ay"
            }
          },
          {
            id: 88,
            name: "ASUS ROG Strix G15 G513RM",
            description: "i7-14650HX | 32GB DDR5 RAM | 1TB SSD | RTX 5070 8GB | 15.6\" FHD | 240Hz | Win11 | DS4660",
            priceUSD: 3599,
            image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2F1ZPdWl.webp&w=1920&q=100",
            specs: {
              CPU: "Intel® Core™ i7-14650HX",
              RAM: "32 GB DDR5 5600MHz",
              SSD: "1 TB M.2 NVMe™ PCIe®",
              GPU: "NVIDIA GeForce RTX 5070 8GB",
              Display: "15.6\" FHD IPS 240Hz",
              OS: "Windows 11 Home",
              Weight: "2.2 Kq",
              Warranty: "12 Ay"
            }
          },
          {
            id: 89,
            name: "ASUS ROG Zephyrus G14 GA403QR",
            description: "i9-14900HX | 32GB DDR5 RAM | 2TB SSD | RTX 5080 16GB | 14\" QHD | 120Hz | Win11 | DS4670",
            priceUSD: 4699,
            image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FASUS-ROG-Zephyrus-G14-OLED-GA403UV-QS163-1tNjr0.webp&w=1920&q=100",
            specs: {
              CPU: "Intel® Core™ i9-14900HX",
              RAM: "32 GB DDR5 6400MHz",
              SSD: "2 TB M.2 NVMe™ PCIe®",
              GPU: "NVIDIA GeForce RTX 5080 16GB",
              Display: "14\" QHD OLED 120Hz",
              OS: "Windows 11 Home",
              Weight: "1.8 Kq",
              Warranty: "12 Ay"
            }
          },
          {
            id: 90,
            name: "ASUS TUF Gaming F17 FX707VU",
            description: "i7-14700H | 32GB DDR5 RAM | 1TB SSD | RTX 4060 8GB | 17\" FHD | 144Hz | Win11 | DS4680",
            priceUSD: 2899,
            image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2F1KO8Vz.webp&w=1920&q=100",
            specs: {
              CPU: "Intel® Core™ i7-14700H",
              RAM: "32 GB DDR5 5600MHz",
              SSD: "1 TB M.2 NVMe™ PCIe®",
              GPU: "NVIDIA GeForce RTX 4060 8GB",
              Display: "17\" FHD IPS 144Hz",
              OS: "Windows 11 Home",
              Weight: "2.9 Kq",
              Warranty: "12 Ay"
            }
          },
          {
            id: 93,
            name: "ASUS ROG Strix Scar 17 G734QZ",
            description: "i9-14900HX | 64GB DDR5 RAM | 2TB SSD | RTX 5090 24GB | 17.3\" QHD | 240Hz | Win11 | DS4699",
            priceUSD: 5999,
            image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2F3yeniiiiiiiiib9zVB.webp&w=640&q=75",
            specs: {
              CPU: "Intel® Core™ i9-14900HX",
              RAM: "64 GB DDR5 6400MHz",
              SSD: "2 TB M.2 NVMe™ PCIe®",
              GPU: "NVIDIA GeForce RTX 5090 24GB",
              Display: "17.3\" QHD IPS 240Hz",
              OS: "Windows 11 Home",
              Weight: "3.3 Kq",
              Warranty: "12 Ay"
            }
          },
          {
            id: 94,
            name: "ASUS TUF Gaming F15 FX507VU",
            description: "i7-14750H | 32GB DDR5 RAM | 1TB SSD | RTX 4060 8GB | 15.6\" FHD | 144Hz | Win11 | DS4701",
            priceUSD: 2599,
            image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FASUS-TUF-Gaming-F16-FX607VU-RL149-1UaxLU.webp&w=1920&q=100",
            specs: {
              CPU: "Intel® Core™ i7-14750H",
              RAM: "32 GB DDR5 5600MHz",
              SSD: "1 TB M.2 NVMe™ PCIe®",
              GPU: "NVIDIA GeForce RTX 4060 8GB",
              Display: "15.6\" FHD IPS 144Hz",
              OS: "Windows 11 Home",
              Weight: "2.1 Kq",
              Warranty: "12 Ay"
            }
          }
        ],
        Dell: [
          {
            id: 95,
            name: "Dell Pro 16 Plus P16G1",
            description: "i9-14900H | 32GB DDR5 RAM | 1TB SSD | RTX 5070 8GB | 16\" QHD | 165Hz | Win11 | DS4801",
            priceUSD: 3899,
            image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FDell-Pro-16-Plus-Laptop-1aCln3.webp&w=1920&q=100",
            specs: {
              CPU: "Intel® Core™ i9-14900H",
              RAM: "32 GB DDR5 5600MHz",
              SSD: "1 TB M.2 NVMe™ PCIe®",
              GPU: "NVIDIA GeForce RTX 5070 8GB",
              Display: "16\" QHD IPS 165Hz",
              OS: "Windows 11 Home",
              Weight: "2.2 Kq",
              Warranty: "12 Ay"
            }
          },
          {
            id: 96,
            name: "Dell Inspiron G15 5525",
            description: "Ryzen 9 7945HX | 32GB DDR5 RAM | 1TB SSD | RTX 4060 8GB | 15.6\" FHD | 165Hz | Win11 | DS4810",
            priceUSD: 2699,
            image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2F2njkZs.webp&w=1920&q=100",
            specs: {
              CPU: "AMD Ryzen™ 9 7945HX",
              RAM: "32 GB DDR5 5600MHz",
              SSD: "1 TB M.2 NVMe™ PCIe®",
              GPU: "NVIDIA GeForce RTX 4060 8GB",
              Display: "15.6\" FHD IPS 165Hz",
              OS: "Windows 11 Home",
              Weight: "2.7 Kq",
              Warranty: "12 Ay"
            }
          },
          {
            id: 97,
            name: "Dell Alienware m16 R2",
            description: "i9-14900HX | 64GB DDR5 RAM | 2TB SSD | RTX 5090 24GB | 16\" QHD | 240Hz | Win11 | DS4822",
            priceUSD: 6999,
            image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FDell-Alienware-m16-R2_19b8SY.webp&w=1920&q=100",
            specs: {
              CPU: "Intel® Core™ i9-14900HX",
              RAM: "64 GB DDR5 6400MHz",
              SSD: "2 TB M.2 NVMe™ PCIe®",
              GPU: "NVIDIA GeForce RTX 5090 24GB",
              Display: "16\" QHD IPS 240Hz",
              OS: "Windows 11 Home",
              Weight: "3.5 Kq",
              Warranty: "12 Ay"
            }
          },
          {
            id: 98,
            name: "Dell Alienware x16 R1",
            description: "i7-14700H | 32GB DDR5 RAM | 1TB SSD | RTX 4080 12GB | 16\" QHD | 240Hz | Win11 | DS4830",
            priceUSD: 4299,
            image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FDell-Alienware-x16-R1-Laptop-1V0awK.webp&w=1920&q=100",
            specs: {
              CPU: "Intel® Core™ i7-14700H",
              RAM: "32 GB DDR5 5600MHz",
              SSD: "1 TB M.2 NVMe™ PCIe®",
              GPU: "NVIDIA GeForce RTX 4080 12GB",
              Display: "16\" QHD IPS 240Hz",
              OS: "Windows 11 Home",
              Weight: "3.2 Kq",
              Warranty: "12 Ay"
            }
          },
          {
            id: 99,
            name: "Dell Alienware 16 Aurora",
            description: "i9-14900HX | 32GB DDR5 RAM | 1TB SSD | RTX 5080 16GB | 16\" QHD | 240Hz | Win11 | DS4840",
            priceUSD: 4999,
            image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FAlienware-16-Aurora-Laptop-AC16250-1lpE6R.webp&w=1920&q=100",
            specs: {
              CPU: "Intel® Core™ i9-14900HX",
              RAM: "32 GB DDR5 6400MHz",
              SSD: "1 TB M.2 NVMe™ PCIe®",
              GPU: "NVIDIA GeForce RTX 5080 16GB",
              Display: "16\" QHD IPS 240Hz",
              OS: "Windows 11 Home",
              Weight: "3.4 Kq",
              Warranty: "12 Ay"
            }
          },
          {
            id: 100,
            name: "Dell Alienware m16 Gaming",
            description: "i7-14800H | 32GB DDR5 RAM | 1TB SSD | RTX 4070 12GB | 16\" QHD | 240Hz | Win11 | DS4850",
            priceUSD: 4199,
            image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FDell-Alienware-m16-Gaming-Laptop_1_5i3P.webp&w=1920&q=100",
            specs: {
              CPU: "Intel® Core™ i7-14800H",
              RAM: "32 GB DDR5 5600MHz",
              SSD: "1 TB M.2 NVMe™ PCIe®",
              GPU: "NVIDIA GeForce RTX 4070 12GB",
              Display: "16\" QHD IPS 240Hz",
              OS: "Windows 11 Home",
              Weight: "3.3 Kq",
              Warranty: "12 Ay"
            }
          },
          {
            id: 101,
            name: "Dell Inspiron G16 5620",
            description: "i5-13500H | 16GB DDR5 RAM | 512GB SSD | RTX 4050 6GB | 16\" FHD | 165Hz | Win11 | DS4860",
            priceUSD: 2249,
            image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2F2njkZs.webp&w=1920&q=100",
            specs: {
              CPU: "Intel® Core™ i5-13500H",
              RAM: "16 GB DDR5 5600MHz",
              SSD: "512 GB M.2 NVMe™ PCIe®",
              GPU: "NVIDIA GeForce RTX 4050 6GB",
              Display: "16\" FHD IPS 165Hz",
              OS: "Windows 11 Home",
              Weight: "2.5 Kq",
              Warranty: "12 Ay"
            }
          },
          {
            id: 102,
            name: "Dell G15 15 Gaming",
            description: "Ryzen 7 7840HS | 16GB DDR5 RAM | 512GB SSD | RTX 4060 8GB | 15.6\" FHD | 165Hz | Win11 | DS4870",
            priceUSD: 2399,
            image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FDell-Pro-16-Plus-Laptop-1aCln3.webp&w=1920&q=100",
            specs: {
              CPU: "AMD Ryzen™ 7 7840HS",
              RAM: "16 GB DDR5 5600MHz",
              SSD: "512 GB M.2 NVMe™ PCIe®",
              GPU: "NVIDIA GeForce RTX 4060 8GB",
              Display: "15.6\" FHD IPS 165Hz",
              OS: "Windows 11 Home",
              Weight: "2.4 Kq",
              Warranty: "12 Ay"
            }
          },
          {
            id: 103,
            name: "Dell Alienware x16 R2",
            description: "i9-14900HX | 64GB DDR5 RAM | 2TB SSD | RTX 4090 24GB | 16\" QHD | 240Hz | Win11 | DS4880",
            priceUSD: 5999,
            image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FDell-Alienware-x16-R1-Laptop-1V0awK.webp&w=1920&q=100",
            specs: {
              CPU: "Intel® Core™ i9-14900HX",
              RAM: "64 GB DDR5 6400MHz",
              SSD: "2 TB M.2 NVMe™ PCIe®",
              GPU: "NVIDIA GeForce RTX 4090 24GB",
              Display: "16\" QHD IPS 240Hz",
              OS: "Windows 11 Home",
              Weight: "3.4 Kq",
              Warranty: "12 Ay"
            }
          },
          {
            id: 104,
            name: "Dell Inspiron 16 Plus",
            description: "i7-13700H | 32GB DDR5 RAM | 1TB SSD | RTX 4050 6GB | 16\" QHD | 165Hz | Win11 | DS4890",
            priceUSD: 2899,
            image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2F2njkZs.webp&w=1920&q=100",
            specs: {
              CPU: "Intel® Core™ i7-13700H",
              RAM: "32 GB DDR5 5600MHz",
              SSD: "1 TB M.2 NVMe™ PCIe®",
              GPU: "NVIDIA GeForce RTX 4050 6GB",
              Display: "16\" QHD IPS 165Hz",
              OS: "Windows 11 Home",
              Weight: "2.6 Kq",
              Warranty: "12 Ay"
            }
          }
        ],
        HP: [
          {
            id: 105,
            name: "HP Victus 15-fb2063dx",
            description: "i7-13700H | 16GB RAM | 1TB SSD | RTX 4060 8GB | 15.6\" FHD | 144Hz | Win11 | DS5001",
            priceUSD: 2349,
            image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FHP-Victus-15-fb2063dx-Gaming-Laptop_1Dh8Jz.webp&w=1920&q=100",
            specs: {
              CPU: "Intel® Core™ i7-13700H",
              RAM: "16 GB DDR5 5600MHz",
              SSD: "1 TB M.2 NVMe™ PCIe®",
              GPU: "NVIDIA GeForce RTX 4060 8GB",
              Display: "15.6\" FHD IPS 144Hz",
              OS: "Windows 11 Home",
              Weight: "2.4 Kq",
              Warranty: "12 Ay"
            }
          },
          {
            id: 106,
            name: "HP Victus 16-e0000dx",
            description: "i5-13500H | 16GB RAM | 512GB SSD | RTX 4050 6GB | 16\" FHD | 144Hz | Win11 | DS5002",
            priceUSD: 1899,
            image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2F1ZEUfA.webp&w=1920&q=100",
            specs: {
              CPU: "Intel® Core™ i5-13500H",
              RAM: "16 GB DDR5 5600MHz",
              SSD: "512 GB M.2 NVMe™ PCIe®",
              GPU: "NVIDIA GeForce RTX 4050 6GB",
              Display: "16\" FHD IPS 144Hz",
              OS: "Windows 11 Home",
              Weight: "2.6 Kq",
              Warranty: "12 Ay"
            }
          },
          {
            id: 107,
            name: "HP OMEN 16-ap0053dx",
            description: "i7-14800H | 32GB RAM | 1TB SSD | RTX 4070 8GB | 16\" QHD | 165Hz | Win11 | DS5003",
            priceUSD: 3199,
            image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FHP-OMEN-16-ap0053dx-Gaming-Laptop-1sLpnm.webp&w=1920&q=100",
            specs: {
              CPU: "Intel® Core™ i7-14800H",
              RAM: "32 GB DDR5 5600MHz",
              SSD: "1 TB M.2 NVMe™ PCIe®",
              GPU: "NVIDIA GeForce RTX 4070 8GB",
              Display: "16\" QHD IPS 165Hz",
              OS: "Windows 11 Home",
              Weight: "2.8 Kq",
              Warranty: "12 Ay"
            }
          },
          {
            id: 108,
            name: "HP OMEN 17-db1004nr",
            description: "i9-14900HX | 64GB RAM | 2TB SSD | RTX 4080 16GB | 17.3\" QHD | 240Hz | Win11 | DS5004",
            priceUSD: 5299,
            image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FHP-OMEN-17-db1004nr-1mJNzV.webp&w=1920&q=100",
            specs: {
              CPU: "Intel® Core™ i9-14900HX",
              RAM: "64 GB DDR5 6400MHz",
              SSD: "2 TB M.2 NVMe™ PCIe®",
              GPU: "NVIDIA GeForce RTX 4080 16GB",
              Display: "17.3\" QHD IPS 240Hz",
              OS: "Windows 11 Home",
              Weight: "3.5 Kq",
              Warranty: "12 Ay"
            }
          },
          {
            id: 109,
            name: "HP OMEN 16-c0000dx",
            description: "i7-14700H | 32GB RAM | 1TB SSD | RTX 4060 8GB | 16\" FHD | 165Hz | Win11 | DS5005",
            priceUSD: 3099,
            image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2F7f0e5ba1-6a8c-4ce7-add1-ce81bf1e6e23.webp&w=1920&q=100",
            specs: {
              CPU: "Intel® Core™ i7-14700H",
              RAM: "32 GB DDR5 5600MHz",
              SSD: "1 TB M.2 NVMe™ PCIe®",
              GPU: "NVIDIA GeForce RTX 4060 8GB",
              Display: "16\" FHD IPS 165Hz",
              OS: "Windows 11 Home",
              Weight: "2.9 Kq",
              Warranty: "12 Ay"
            }
          },
          {
            id: 110,
            name: "HP Victus 16-fb0000dx",
            description: "i5-13420H | 16GB RAM | 512GB SSD | RTX 4050 6GB | 16\" FHD | 144Hz | Win11 | DS5006",
            priceUSD: 1999,
            image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2F6161fba4-6a68-4290-bbfa-d35bd1d565ec.webp&w=1920&q=100",
            specs: {
              CPU: "Intel® Core™ i5-13420H",
              RAM: "16 GB DDR5 5600MHz",
              SSD: "512 GB M.2 NVMe™ PCIe®",
              GPU: "NVIDIA GeForce RTX 4050 6GB",
              Display: "16\" FHD IPS 144Hz",
              OS: "Windows 11 Home",
              Weight: "2.7 Kq",
              Warranty: "12 Ay"
            }
          },
          {
            id: 111,
            name: "HP OMEN 14-fb0013dx",
            description: "Ryzen 7 7840HS | 16GB RAM | 1TB SSD | RTX 4060 6GB | 14\" FHD | 165Hz | Win11 | DS5007",
            priceUSD: 2399,
            image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FHP-OMEN-Transcend-14-fb0013dx_1vUWDc.webp&w=1920&q=100",
            specs: {
              CPU: "AMD Ryzen™ 7 7840HS",
              RAM: "16 GB DDR5 5600MHz",
              SSD: "1 TB M.2 NVMe™ PCIe®",
              GPU: "NVIDIA GeForce RTX 4060 6GB",
              Display: "14\" FHD IPS 165Hz",
              OS: "Windows 11 Home",
              Weight: "2.2 Kq",
              Warranty: "12 Ay"
            }
          },
          {
            id: 112,
            name: "HP OMEN Max 16-ah0097nr",
            description: "i7-14800H | 32GB RAM | 1TB SSD | RTX 4070 8GB | 16\" QHD | 165Hz | Win11 | DS5008",
            priceUSD: 3499,
            image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FHP-OMEN-Max-16-ah0097nr-Gaming-Laptop-1aOmVt.webp&w=1920&q=100",
            specs: {
              CPU: "Intel® Core™ i7-14800H",
              RAM: "32 GB DDR5 5600MHz",
              SSD: "1 TB M.2 NVMe™ PCIe®",
              GPU: "NVIDIA GeForce RTX 4070 8GB",
              Display: "16\" QHD IPS 165Hz",
              OS: "Windows 11 Home",
              Weight: "2.8 Kq",
              Warranty: "12 Ay"
            }
          },
          {
            id: 113,
            name: "HP OMEN 17-cb0000dx",
            description: "i9-14900HX | 64GB RAM | 2TB SSD | RTX 4080 16GB | 17\" QHD | 240Hz | Win11 | DS5009",
            priceUSD: 5299,
            image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FHP-OMEN-17-db1004nr-1mJNzV.webp&w=1920&q=100",
            specs: {
              CPU: "Intel® Core™ i9-14900HX",
              RAM: "64 GB DDR5 6400MHz",
              SSD: "2 TB M.2 NVMe™ PCIe®",
              GPU: "NVIDIA GeForce RTX 4080 16GB",
              Display: "17\" QHD IPS 240Hz",
              OS: "Windows 11 Home",
              Weight: "3.5 Kq",
              Warranty: "12 Ay"
            }
          },
          {
            id: 114,
            name: "HP Victus 15-e0000dx",
            description: "i5-13420H | 16GB RAM | 512GB SSD | RTX 4050 6GB | 15.6\" FHD | 144Hz | Win11 | DS5010",
            priceUSD: 1899,
            image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FHP-Victus-15-fb2063dx-Gaming-Laptop_1Dh8Jz.webp&w=1920&q=100",
            specs: {
              CPU: "Intel® Core™ i5-13420H",
              RAM: "16 GB DDR5 5600MHz",
              SSD: "512 GB M.2 NVMe™ PCIe®",
              GPU: "NVIDIA GeForce RTX 4050 6GB",
              Display: "15.6\" FHD IPS 144Hz",
              OS: "Windows 11 Home",
              Weight: "2.6 Kq",
              Warranty: "12 Ay"
            }
          },
          {
            id: 115,
            name: "HP OMEN 16-df0000dx",
            description: "i7-14700H | 32GB RAM | 1TB SSD | RTX 4060 8GB | 16\" FHD | 165Hz | Win11 | DS5011",
            priceUSD: 3099,
            image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2F1ZEUfA.webp&w=1920&q=100",
            specs: {
              CPU: "Intel® Core™ i7-14700H",
              RAM: "32 GB DDR5 5600MHz",
              SSD: "1 TB M.2 NVMe™ PCIe®",
              GPU: "NVIDIA GeForce RTX 4060 8GB",
              Display: "16\" FHD IPS 165Hz",
              OS: "Windows 11 Home",
              Weight: "2.9 Kq",
              Warranty: "12 Ay"
            }
          },
          {
            id: 116,
            name: "HP OMEN 16-e0000dx",
            description: "i5-13500H | 16GB RAM | 512GB SSD | RTX 4050 6GB | 16\" FHD | 144Hz | Win11 | DS5012",
            priceUSD: 1999,
            image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FHP-OMEN-16-ap0053dx-Gaming-Laptop-1sLpnm.webp&w=1920&q=100",
            specs: {
              CPU: "Intel® Core™ i5-13500H",
              RAM: "16 GB DDR5 5600MHz",
              SSD: "512 GB M.2 NVMe™ PCIe®",
              GPU: "NVIDIA GeForce RTX 4050 6GB",
              Display: "16\" FHD IPS 144Hz",
              OS: "Windows 11 Home",
              Weight: "2.7 Kq",
              Warranty: "12 Ay"
            }
          },
          {
            id: 117,
            name: "HP OMEN 17-db0000nr",
            description: "i9-14900HX | 64GB RAM | 2TB SSD | RTX 4080 16GB | 17\" QHD | 240Hz | Win11 | DS5013",
            priceUSD: 5299,
            image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2F7f0e5ba1-6a8c-4ce7-add1-ce81bf1e6e23.webp&w=1920&q=100",
            specs: {
              CPU: "Intel® Core™ i9-14900HX",
              RAM: "64 GB DDR5 6400MHz",
              SSD: "2 TB M.2 NVMe™ PCIe®",
              GPU: "NVIDIA GeForce RTX 4080 16GB",
              Display: "17\" QHD IPS 240Hz",
              OS: "Windows 11 Home",
              Weight: "3.5 Kq",
              Warranty: "12 Ay"
            }
          },
          {
            id: 118,
            name: "HP OMEN 16-fb0000dx",
            description: "i7-14800H | 32GB RAM | 1TB SSD | RTX 4070 8GB | 16\" QHD | 165Hz | Win11 | DS5014",
            priceUSD: 3499,
            image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FHP-OMEN-Transcend-14-fb0013dx_1vUWDc.webp&w=1920&q=100",
            specs: {
              CPU: "Intel® Core™ i7-14800H",
              RAM: "32 GB DDR5 5600MHz",
              SSD: "1 TB M.2 NVMe™ PCIe®",
              GPU: "NVIDIA GeForce RTX 4070 8GB",
              Display: "16\" QHD IPS 165Hz",
              OS: "Windows 11 Home",
              Weight: "2.8 Kq",
              Warranty: "12 Ay"
            }
          },
          {
            id: 119,
            name: "HP Victus 15-g0000dx",
            description: "i5-13420H | 16GB RAM | 512GB SSD | RTX 4050 6GB | 15.6\" FHD | 144Hz | Win11 | DS5015",
            priceUSD: 1899,
            image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FHP-OMEN-Max-16-ah0097nr-Gaming-Laptop-1aOmVt.webp&w=1920&q=100",
            specs: {
              CPU: "Intel® Core™ i5-13420H",
              RAM: "16 GB DDR5 5600MHz",
              SSD: "512 GB M.2 NVMe™ PCIe®",
              GPU: "NVIDIA GeForce RTX 4050 6GB",
              Display: "15.6\" FHD IPS 144Hz",
              OS: "Windows 11 Home",
              Weight: "2.6 Kq",
              Warranty: "12 Ay"
            }
          }
        ],
        Lenovo: [
          {
            id: 120,
            name: "Lenovo Legion Pro 5 16IRX10",
            description: "i9-14900HX | 32GB DDR5 RAM | 1TB SSD | RTX 5080 16GB | 16\" WQXGA | 240Hz | Win11 | DS5201",
            priceUSD: 4999,
            image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FLenovo-Legion-Pro-5-16IRX10-1X-S2F.webp&w=1920&q=100",
            specs: {
              CPU: "Intel® Core™ i9-14900HX",
              RAM: "32 GB DDR5 6400MHz",
              SSD: "1 TB M.2 NVMe™ PCIe®",
              GPU: "NVIDIA GeForce RTX 5080 16GB",
              Display: "16\" WQXGA IPS 240Hz",
              OS: "Windows 11 Home",
              Weight: "2.4 Kq",
              Warranty: "12 Ay"
            }
          },
          {
            id: 121,
            name: "Lenovo LOQ 15ARP9",
            description: "Ryzen 9 7945HX | 32GB DDR5 RAM | 1TB SSD | RTX 4070 8GB | 15.6\" FHD | 165Hz | Win11 | DS5202",
            priceUSD: 2899,
            image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FLenovo-LOQ-15ARP9_1TNzM_.webp&w=1920&q=100",
            specs: {
              CPU: "AMD Ryzen™ 9 7945HX",
              RAM: "32 GB DDR5 5600MHz",
              SSD: "1 TB M.2 NVMe™ PCIe®",
              GPU: "NVIDIA GeForce RTX 4070 8GB",
              Display: "15.6\" FHD IPS 165Hz",
              OS: "Windows 11 Home",
              Weight: "2.3 Kq",
              Warranty: "12 Ay"
            }
          },
          {
            id: 122,
            name: "Lenovo IdeaPad Slim 5 16IRH10R",
            description: "i7-13620H | 16GB DDR5 RAM | 512GB SSD | RTX 4050 6GB | 16\" QHD | 120Hz | Win11 | DS5203",
            priceUSD: 2199,
            image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FLenovo-IdeaPad-Slim-5-16IRH10R-1mybQB.webp&w=1920&q=100",
            specs: {
              CPU: "Intel® Core™ i7-13620H",
              RAM: "16 GB DDR5 5200MHz",
              SSD: "512 GB M.2 NVMe™ PCIe®",
              GPU: "NVIDIA GeForce RTX 4050 6GB",
              Display: "16\" QHD IPS 120Hz",
              OS: "Windows 11 Home",
              Weight: "2.0 Kq",
              Warranty: "12 Ay"
            }
          },
          {
            id: 123,
            name: "Lenovo LOQ 15IRX9",
            description: "i7-14700H | 24GB DDR5 RAM | 1TB SSD | RTX 4060 8GB | 15.6\" FHD | 165Hz | Win11 | DS5204",
            priceUSD: 2499,
            image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FLenovo-LOQ-15IRX9-Laptop_1AIqIX.webp&w=1920&q=100",
            specs: {
              CPU: "Intel® Core™ i7-14700H",
              RAM: "24 GB DDR5 5600MHz",
              SSD: "1 TB M.2 NVMe™ PCIe®",
              GPU: "NVIDIA GeForce RTX 4060 8GB",
              Display: "15.6\" FHD IPS 165Hz",
              OS: "Windows 11 Home",
              Weight: "2.4 Kq",
              Warranty: "12 Ay"
            }
          },
          {
            id: 124,
            name: "Lenovo Legion 7 16ITH10",
            description: "i9-14980HX | 64GB DDR5 RAM | 2TB SSD | RTX 4090 24GB | 16\" QHD | 240Hz | Win11 | DS5205",
            priceUSD: 6999,
            image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2F7-YENIIIIIIIIIIIIRJmv9.webp&w=1920&q=100",
            specs: {
              CPU: "Intel® Core™ i9-14980HX",
              RAM: "64 GB DDR5 6400MHz",
              SSD: "2 TB M.2 NVMe™ PCIe®",
              GPU: "NVIDIA GeForce RTX 4090 24GB",
              Display: "16\" QHD IPS 240Hz",
              OS: "Windows 11 Home",
              Weight: "2.6 Kq",
              Warranty: "12 Ay"
            }
          },
          {
            id: 125,
            name: "Lenovo IdeaPad Gaming 3 15IRH8",
            description: "i5-13500H | 16GB DDR5 RAM | 512GB SSD | RTX 3050 4GB | 15.6\" FHD | 120Hz | Win11 | DS5206",
            priceUSD: 1399,
            image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FLenovo-LOQ-15ARP9_1TNzM_.webp&w=1920&q=100",
            specs: {
              CPU: "Intel® Core™ i5-13500H",
              RAM: "16 GB DDR5 5600MHz",
              SSD: "512 GB M.2 NVMe™ PCIe®",
              GPU: "NVIDIA GeForce RTX 3050 4GB",
              Display: "15.6\" FHD IPS 120Hz",
              OS: "Windows 11 Home",
              Weight: "2.2 Kq",
              Warranty: "12 Ay"
            }
          },
          {
            id: 126,
            name: "Lenovo Legion 5 Pro 16IRH8",
            description: "Ryzen 9 7945HX | 32GB DDR5 RAM | 1TB SSD | RTX 4070 12GB | 16\" WQXGA | 165Hz | Win11 | DS5207",
            priceUSD: 3399,
            image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2F7-YENIIIIIIIIIIIIRJmv9.webp&w=1920&q=100",
            specs: {
              CPU: "AMD Ryzen™ 9 7945HX",
              RAM: "32 GB DDR5 5600MHz",
              SSD: "1 TB M.2 NVMe™ PCIe®",
              GPU: "NVIDIA GeForce RTX 4070 12GB",
              Display: "16\" WQXGA IPS 165Hz",
              OS: "Windows 11 Home",
              Weight: "2.5 Kq",
              Warranty: "12 Ay"
            }
          },
          {
            id: 127,
            name: "Lenovo IdeaPad Slim 7 Pro",
            description: "Ryzen 7 7840HS | 16GB DDR5 RAM | 1TB SSD | RTX 3050 4GB | 16\" QHD | 120Hz | Win11 | DS5208",
            priceUSD: 1899,
            image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FLenovo-IdeaPad-Slim-5-16IRH10R-1mybQB.webp&w=1920&q=100",
            specs: {
              CPU: "AMD Ryzen™ 7 7840HS",
              RAM: "16 GB DDR5 5600MHz",
              SSD: "1 TB M.2 NVMe™ PCIe®",
              GPU: "NVIDIA GeForce RTX 3050 4GB",
              Display: "16\" QHD IPS 120Hz",
              OS: "Windows 11 Home",
              Weight: "2.1 Kq",
              Warranty: "12 Ay"
            }
          },
          {
            id: 128,
            name: "Lenovo LOQ 17IRX9",
            description: "i7-14700H | 24GB DDR5 RAM | 1TB SSD | RTX 4060 8GB | 17.3\" FHD | 165Hz | Win11 | DS5209",
            priceUSD: 2699,
            image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FLenovo-LOQ-15IRX9-Laptop_1AIqIX.webp&w=1920&q=100",
            specs: {
              CPU: "Intel® Core™ i7-14700H",
              RAM: "24 GB DDR5 5600MHz",
              SSD: "1 TB M.2 NVMe™ PCIe®",
              GPU: "NVIDIA GeForce RTX 4060 8GB",
              Display: "17.3\" FHD IPS 165Hz",
              OS: "Windows 11 Home",
              Weight: "2.9 Kq",
              Warranty: "12 Ay"
            }
          },
          {
            id: 129,
            name: "Lenovo IdeaPad Gaming 3 16IRH8",
            description: "i5-13420H | 16GB RAM | 512GB SSD | RTX 3050 4GB | 16\" FHD | 120Hz | Win11 | DS5210",
            priceUSD: 1499,
            image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2F7-YENIIIIIIIIIIIIRJmv9.webp&w=1920&q=100",
            specs: {
              CPU: "Intel® Core™ i5-13420H",
              RAM: "16 GB DDR5 5600MHz",
              SSD: "512 GB M.2 NVMe™ PCIe®",
              GPU: "NVIDIA GeForce RTX 3050 4GB",
              Display: "16\" FHD IPS 120Hz",
              OS: "Windows 11 Home",
              Weight: "2.3 Kq",
              Warranty: "12 Ay"
            }
          }
        ],
        MSI: [
          {
            id: 130,
            name: "MSI Raider GE78 HX AI A2XWJG‑416US",
            description: "i9‑14900HX | 32GB DDR5 RAM | 2TB SSD | RTX 5090 24GB | 18\" QHD | 240Hz | Win11 | DS5301",
            priceUSD: 6999,
            image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FMSI-Raider-18-HX-AI-A2XWJG-416US-1B0U8H.webp&w=1920&q=100",
            specs: {
              CPU: "Intel® Core™ i9‑14900HX",
              RAM: "32 GB DDR5 6400MHz",
              SSD: "2 TB M.2 NVMe™ PCIe®",
              GPU: "NVIDIA GeForce RTX 5090 24GB",
              Display: "18\" QHD IPS 240Hz",
              OS: "Windows 11 Home",
              Weight: "3.7 Kq",
              Warranty: "12 Ay"
            }
          },
          {
            id: 131,
            name: "MSI Summit E13 AI Evo A1MTG‑001US",
            description: "i7‑13800H | 32GB DDR5 RAM | 1TB SSD | RTX 4060 8GB | 13.4\" QHD+ | 120Hz | Win11 | DS5302",
            priceUSD: 2899,
            image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FMSI-Summit-E13-AI-Evo-A1MTG-001US-1-hLDz.webp&w=1920&q=100",
            specs: {
              CPU: "Intel® Core™ i7‑13800H",
              RAM: "32 GB DDR5 5600MHz",
              SSD: "1 TB M.2 NVMe™ PCIe®",
              GPU: "NVIDIA GeForce RTX 4060 8GB",
              Display: "13.4\" QHD+ IPS 120Hz",
              OS: "Windows 11 Home",
              Weight: "1.3 Kq",
              Warranty: "12 Ay"
            }
          },
          {
            id: 132,
            name: "MSI Thin 15 B12UCX‑1297AU",
            description: "i7‑13700H | 16GB DDR5 RAM | 1TB SSD | RTX 4050 6GB | 15.6\" FHD | 144Hz | Win11 | DS5303",
            priceUSD: 2399,
            image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FMSI-Thin-15-B12UCX-1297AU_1TYbFD.webp&w=1920&q=100",
            specs: {
              CPU: "Intel® Core™ i7‑13700H",
              RAM: "16 GB DDR5 5600MHz",
              SSD: "1 TB M.2 NVMe™ PCIe®",
              GPU: "NVIDIA GeForce RTX 4050 6GB",
              Display: "15.6\" FHD IPS 144Hz",
              OS: "Windows 11 Home",
              Weight: "1.9 Kq",
              Warranty: "12 Ay"
            }
          },
          {
            id: 133,
            name: "MSI Thin GF63 12VE Gaming",
            description: "i5‑12450H | 8GB DDR5 RAM | 512GB SSD | GTX 1650 4GB | 15.6\" FHD | 120Hz | FreeDOS | DS5304",
            priceUSD: 1199,
            image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FMSI-Thin-GF63-12VE-Gaming-Laptop_1LQh8Y.webp&w=1920&q=100",
            specs: {
              CPU: "Intel® Core™ i5‑12450H",
              RAM: "8 GB DDR5 4800MHz",
              SSD: "512 GB M.2 NVMe™ PCIe®",
              GPU: "NVIDIA GeForce GTX 1650 4GB",
              Display: "15.6\" FHD IPS 120Hz",
              OS: "FreeDOS",
              Weight: "1.8 Kq",
              Warranty: "12 Ay"
            }
          },
          {
            id: 134,
            name: "MSI Modern 15 F1MG‑816XAE",
            description: "i7‑13620H | 16GB DDR5 RAM | 512GB SSD | Intel Iris Xe | 15.6\" FHD | 60Hz | Win11 | DS5305",
            priceUSD: 1499,
            image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FMSI-Modern-15-F1MG-816XAE-1lmGZI.webp&w=1920&q=100",
            specs: {
              CPU: "Intel® Core™ i7‑13620H",
              RAM: "16 GB DDR5 5200MHz",
              SSD: "512 GB M.2 NVMe™ PCIe®",
              GPU: "Intel® Iris Xe Graphics",
              Display: "15.6\" FHD IPS 60Hz",
              OS: "Windows 11 Home",
              Weight: "1.7 Kq",
              Warranty: "12 Ay"
            }
          },
          {
            id: 135,
            name: "MSI Modern 15 B12M",
            description: "i5‑1240P | 8GB DDR4 RAM | 512GB SSD | Intel Iris Xe | 15.6\" FHD | 60Hz | Win11 | DS5306",
            priceUSD: 1099,
            image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FMSI-Modern-15-B12M_1Cgi2a.webp&w=1920&q=100",
            specs: {
              CPU: "Intel® Core™ i5‑1240P",
              RAM: "8 GB DDR4 3200MHz",
              SSD: "512 GB M.2 NVMe™ PCIe®",
              GPU: "Intel® Iris Xe Graphics",
              Display: "15.6\" FHD IPS 60Hz",
              OS: "Windows 11 Home",
              Weight: "1.6 Kq",
              Warranty: "12 Ay"
            }
          },
          {
            id: 136,
            name: "MSI Raider GE66 HX AI",
            description: "i9‑14900HX | 32GB DDR5 RAM | 1TB SSD | RTX 5080 16GB | 16\" QHD | 240Hz | Win11 | DS5307",
            priceUSD: 5799,
            image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FMSI-Raider-18-HX-AI-A2XWJG-416US-1B0U8H.webp&w=1920&q=100",
            specs: {
              CPU: "Intel® Core™ i9‑14900HX",
              RAM: "32 GB DDR5 6400MHz",
              SSD: "1 TB M.2 NVMe™ PCIe®",
              GPU: "NVIDIA GeForce RTX 5080 16GB",
              Display: "16\" QHD IPS 240Hz",
              OS: "Windows 11 Home",
              Weight: "3.5 Kq",
              Warranty: "12 Ay"
            }
          },
          {
            id: 137,
            name: "MSI Vector GP68 HX",
            description: "i7‑14700H | 24GB DDR5 RAM | 1TB SSD | RTX 4070 12GB | 16\" FHD | 240Hz | Win11 | DS5308",
            priceUSD: 3199,
            image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FMSI-Thin-15-B12UCX-1297AU_1TYbFD.webp&w=1920&q=100",
            specs: {
              CPU: "Intel® Core™ i7‑14700H",
              RAM: "24 GB DDR5 5600MHz",
              SSD: "1 TB M.2 NVMe™ PCIe®",
              GPU: "NVIDIA GeForce RTX 4070 12GB",
              Display: "16\" FHD IPS 240Hz",
              OS: "Windows 11 Home",
              Weight: "2.6 Kq",
              Warranty: "12 Ay"
            }
          },
          {
            id: 138,
            name: "MSI Katana GF66 HX",
            description: "i5‑12500H | 16GB DDR5 RAM | 512GB SSD | RTX 3060 6GB | 15.6\" FHD | 144Hz | Win11 | DS5309",
            priceUSD: 1799,
            image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FMSI-Thin-GF63-12VE-Gaming-Laptop_1LQh8Y.webp&w=1920&q=100",
            specs: {
              CPU: "Intel® Core™ i5‑12500H",
              RAM: "16 GB DDR5 5600MHz",
              SSD: "512 GB M.2 NVMe™ PCIe®",
              GPU: "NVIDIA GeForce RTX 3060 6GB",
              Display: "15.6\" FHD IPS 144Hz",
              OS: "Windows 11 Home",
              Weight: "2.3 Kq",
              Warranty: "12 Ay"
            }
          },
          {
            id: 139,
            name: "MSI Stealth 16 Studio",
            description: "i9‑14900H | 32GB DDR5 RAM | 1TB SSD | RTX 4070 12GB | 16\" QHD | 165Hz | Win11 | DS5310",
            priceUSD: 3899,
            image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FMSI-Modern-15-F1MG-816XAE-1lmGZI.webp&w=1920&q=100",
            specs: {
              CPU: "Intel® Core™ i9‑14900H",
              RAM: "32 GB DDR5 6400MHz",
              SSD: "1 TB M.2 NVMe™ PCIe®",
              GPU: "NVIDIA GeForce RTX 4070 12GB",
              Display: "16\" QHD IPS 165Hz",
              OS: "Windows 11 Home",
              Weight: "2.4 Kq",
              Warranty: "12 Ay"
            }
          },
          {
            id: 140,
            name: "MSI Alpha 15 B5E Gaming",
            description: "Ryzen 7 7840HS | 16GB DDR5 RAM | 512GB SSD | RX 6700M 10GB | 15.6\" FHD | 144Hz | Win11 | DS5311",
            priceUSD: 2099,
            image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FMSI-Modern-15-B12M_1Cgi2a.webp&w=1920&q=100",
            specs: {
              CPU: "AMD Ryzen™ 7 7840HS",
              RAM: "16 GB DDR5 5600MHz",
              SSD: "512 GB M.2 NVMe™ PCIe®",
              GPU: "AMD Radeon™ RX 6700M 10GB",
              Display: "15.6\" FHD IPS 144Hz",
              OS: "Windows 11 Home",
              Weight: "2.3 Kq",
              Warranty: "12 Ay"
            }
          }
        ]
      }
    ],
    office: [
      {
        Dell: [
          {
            id: 141,
            name: "Dell Vostro 3530 Business",
            description: "Intel Core i7-1360P | 16GB DDR5 RAM | 512GB SSD | Iris Xe | 15.6\" FHD | 144Hz | Win11 | DS7001",
            priceUSD: 1599,
            image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2F4-yeniiiiiiiioH7yA.webp&w=1920&q=100",
            specs: {
              CPU: "Intel® Core™ i7-1360P",
              RAM: "16 GB DDR5 5200MHz",
              SSD: "512 GB M.2 NVMe™ PCIe®",
              GPU: "Intel Iris Xe Graphics",
              Display: "15.6\" FHD IPS 144Hz",
              OS: "Windows 11 Home",
              Weight: "2.1 Kq",
              Warranty: "12 Ay"
            }
          },
          {
            id: 142,
            name: "Dell Inspiron 16 5640",
            description: "Intel Core i5-1350P | 16GB DDR5 RAM | 512GB SSD | Iris Xe | 16\" FHD | 144Hz | Win11 | DS7002",
            priceUSD: 1399,
            image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FDell-Vostro-3530-Laptop_1_Tg_7.webp&w=1920&q=100",
            specs: {
              CPU: "Intel® Core™ i5-1350P",
              RAM: "16 GB DDR5 5200MHz",
              SSD: "512 GB M.2 NVMe™ PCIe®",
              GPU: "Intel Iris Xe Graphics",
              Display: "16\" FHD IPS 144Hz",
              OS: "Windows 11 Home",
              Weight: "2.2 Kq",
              Warranty: "12 Ay"
            }
          },
          {
            id: 143,
            name: "Dell Latitude 5550 Ultrabook",
            description: "Intel Core i7-1370P | 16GB DDR5 RAM | 512GB SSD | Iris Xe | 15.6\" FHD | 144Hz | Win11 | DS7003",
            priceUSD: 1799,
            image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FDell-Inspiron-16-5640-Laptop-1jdlvi.webp&w=1920&q=100",
            specs: {
              CPU: "Intel® Core™ i7-1370P",
              RAM: "16 GB DDR5 5200MHz",
              SSD: "512 GB M.2 NVMe™ PCIe®",
              GPU: "Intel Iris Xe Graphics",
              Display: "15.6\" FHD IPS 144Hz",
              OS: "Windows 11 Home",
              Weight: "2.0 Kq",
              Warranty: "12 Ay"
            }
          },
          {
            id: 144,
            name: "Dell Inspiron 14 5440",
            description: "Intel Core i5-1340P | 16GB DDR5 RAM | 512GB SSD | Iris Xe | 14\" FHD | 144Hz | Win11 | DS7004",
            priceUSD: 1299,
            image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FDell-Latitude-5550-Laptop_19hMRI.webp&w=1920&q=100",
            specs: {
              CPU: "Intel® Core™ i5-1340P",
              RAM: "16 GB DDR5 5200MHz",
              SSD: "512 GB M.2 NVMe™ PCIe®",
              GPU: "Intel Iris Xe Graphics",
              Display: "14\" FHD IPS 144Hz",
              OS: "Windows 11 Home",
              Weight: "1.9 Kq",
              Warranty: "12 Ay"
            }
          },
          {
            id: 145,
            name: "Dell Vostro 5640 Gaming",
            description: "Intel Core i7-1360P | 16GB DDR5 RAM | 512GB SSD | Iris Xe | 15.6\" FHD | 144Hz | Win11 | DS7005",
            priceUSD: 1699,
            image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2Fc0d32f65-bd7d-4f61-a607-e5f26c66d178.webp&w=1920&q=100",
            specs: {
              CPU: "Intel® Core™ i7-1360P",
              RAM: "16 GB DDR5 5200MHz",
              SSD: "512 GB M.2 NVMe™ PCIe®",
              GPU: "Intel Iris Xe Graphics",
              Display: "15.6\" FHD IPS 144Hz",
              OS: "Windows 11 Home",
              Weight: "2.1 Kq",
              Warranty: "12 Ay"
            }
          },
          {
            id: 146,
            name: "Dell Inspiron 16 Plus",
            description: "Intel Core i5-1350P | 16GB DDR5 RAM | 512GB SSD | Iris Xe | 16\" FHD | 144Hz | Win11 | DS7006",
            priceUSD: 1499,
            image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FDell-Inspiron-14-5440-Laptop-1FyI24.webp&w=1920&q=100",
            specs: {
              CPU: "Intel® Core™ i5-1350P",
              RAM: "16 GB DDR5 5200MHz",
              SSD: "512 GB M.2 NVMe™ PCIe®",
              GPU: "Intel Iris Xe Graphics",
              Display: "16\" FHD IPS 144Hz",
              OS: "Windows 11 Home",
              Weight: "2.3 Kq",
              Warranty: "12 Ay"
            }
          },
          {
            id: 147,
            name: "Dell Latitude 5540 Ultra",
            description: "Intel Core i7-1370P | 16GB DDR5 RAM | 512GB SSD | Iris Xe | 15.6\" FHD | 144Hz | Win11 | DS7007",
            priceUSD: 1899,
            image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FDell-Vostro-5640-1111WY.webp&w=1200&q=100",
            specs: {
              CPU: "Intel® Core™ i7-1370P",
              RAM: "16 GB DDR5 5200MHz",
              SSD: "512 GB M.2 NVMe™ PCIe®",
              GPU: "Intel Iris Xe Graphics",
              Display: "15.6\" FHD IPS 144Hz",
              OS: "Windows 11 Home",
              Weight: "2.2 Kq",
              Warranty: "12 Ay"
            }
          },
          {
            id: 148,
            name: "Dell Vostro 15 Pro",
            description: "Intel Core i5-1340P | 16GB DDR5 RAM | 512GB SSD | Iris Xe | 15.6\" FHD | 144Hz | Win11 | DS7008",
            priceUSD: 1399,
            image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2F4-yeniiiiiiiioH7yA.webp&w=1920&q=100",
            specs: {
              CPU: "Intel® Core™ i5-1340P",
              RAM: "16 GB DDR5 5200MHz",
              SSD: "512 GB M.2 NVMe™ PCIe®",
              GPU: "Intel Iris Xe Graphics",
              Display: "15.6\" FHD IPS 144Hz",
              OS: "Windows 11 Home",
              Weight: "2.0 Kq",
              Warranty: "12 Ay"
            }
          },
          {
            id: 149,
            name: "Dell Inspiron 14 5400",
            description: "Intel Core i5-1350P | 16GB DDR5 RAM | 512GB SSD | Iris Xe | 14\" FHD | 144Hz | Win11 | DS7009",
            priceUSD: 1299,
            image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FDell-Inspiron-16-5640-Laptop-1jdlvi.webp&w=1920&q=100",
            specs: {
              CPU: "Intel® Core™ i5-1350P",
              RAM: "16 GB DDR5 5200MHz",
              SSD: "512 GB M.2 NVMe™ PCIe®",
              GPU: "Intel Iris Xe Graphics",
              Display: "14\" FHD IPS 144Hz",
              OS: "Windows 11 Home",
              Weight: "1.8 Kq",
              Warranty: "12 Ay"
            }
          },
          {
            id: 150,
            name: "Dell Latitude 5560 Max",
            description: "Intel Core i7-1360P | 16GB DDR5 RAM | 512GB SSD | Iris Xe | 15.6\" FHD | 144Hz | Win11 | DS7010",
            priceUSD: 1799,
            image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FDell-Latitude-5550-Laptop_19hMRI.webp&w=1920&q=100",
            specs: {
              CPU: "Intel® Core™ i7-1360P",
              RAM: "16 GB DDR5 5200MHz",
              SSD: "512 GB M.2 NVMe™ PCIe®",
              GPU: "Intel Iris Xe Graphics",
              Display: "15.6\" FHD IPS 144Hz",
              OS: "Windows 11 Home",
              Weight: "2.1 Kq",
              Warranty: "12 Ay"
            }
          }
        ],
        HP: [
          {
            id: 151,
            name: "HP 250 G10 Silver",
            description: "Intel Core i5-1340P | 16GB DDR5 RAM | 512GB SSD | Iris Xe | 15.6\" FHD | 144Hz | Win11 | DS8001",
            priceUSD: 1199,
            image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FHP-250-G10-Silver_1nWclm.webp&w=1920&q=100",
            specs: {
              CPU: "Intel® Core™ i5-1340P",
              RAM: "16 GB DDR5 5200MHz",
              SSD: "512 GB M.2 NVMe™ PCIe®",
              GPU: "Intel Iris Xe Graphics",
              Display: "15.6\" FHD IPS 144Hz",
              OS: "Windows 11 Home",
              Weight: "1.9 Kq",
              Warranty: "12 Ay"
            }
          },
          {
            id: 152,
            name: "HP Pavilion 16-ag0070wm",
            description: "Intel Core i7-1360P | 16GB DDR5 RAM | 512GB SSD | Iris Xe | 16\" FHD | 144Hz | Win11 | DS8002",
            priceUSD: 1499,
            image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FHP-Pavilion-Laptop-16-ag0070wm-1hNekj.webp&w=1920&q=100",
            specs: {
              CPU: "Intel® Core™ i7-1360P",
              RAM: "16 GB DDR5 5200MHz",
              SSD: "512 GB M.2 NVMe™ PCIe®",
              GPU: "Intel Iris Xe Graphics",
              Display: "16\" FHD IPS 144Hz",
              OS: "Windows 11 Home",
              Weight: "2.1 Kq",
              Warranty: "12 Ay"
            }
          },
          {
            id: 153,
            name: "HP Pavilion 16-af0945nr",
            description: "Intel Core i5-1350P | 16GB DDR5 RAM | 512GB SSD | Iris Xe | 16\" FHD | 144Hz | Win11 | DS8003",
            priceUSD: 1399,
            image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FHp-Pavilion-16-af0945nr_1SuIZi.webp&w=1920&q=100",
            specs: {
              CPU: "Intel® Core™ i5-1350P",
              RAM: "16 GB DDR5 5200MHz",
              SSD: "512 GB M.2 NVMe™ PCIe®",
              GPU: "Intel Iris Xe Graphics",
              Display: "16\" FHD IPS 144Hz",
              OS: "Windows 11 Home",
              Weight: "2.2 Kq",
              Warranty: "12 Ay"
            }
          },
          {
            id: 154,
            name: "HP 250 G10 Business",
            description: "Intel Core i7-1370P | 16GB DDR5 RAM | 512GB SSD | Iris Xe | 15.6\" FHD | 144Hz | Win11 | DS8004",
            priceUSD: 1299,
            image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FHP-250-G10-Silver_1nWclm.webp&w=1920&q=100",
            specs: {
              CPU: "Intel® Core™ i7-1370P",
              RAM: "16 GB DDR5 5200MHz",
              SSD: "512 GB M.2 NVMe™ PCIe®",
              GPU: "Intel Iris Xe Graphics",
              Display: "15.6\" FHD IPS 144Hz",
              OS: "Windows 11 Home",
              Weight: "2.0 Kq",
              Warranty: "12 Ay"
            }
          },
          {
            id: 155,
            name: "HP Pavilion 16 Pro",
            description: "Intel Core i5-1340P | 16GB DDR5 RAM | 512GB SSD | Iris Xe | 16\" FHD | 144Hz | Win11 | DS8005",
            priceUSD: 1349,
            image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FHP-Pavilion-Laptop-16-ag0070wm-1hNekj.webp&w=1920&q=100",
            specs: {
              CPU: "Intel® Core™ i5-1340P",
              RAM: "16 GB DDR5 5200MHz",
              SSD: "512 GB M.2 NVMe™ PCIe®",
              GPU: "Intel Iris Xe Graphics",
              Display: "16\" FHD IPS 144Hz",
              OS: "Windows 11 Home",
              Weight: "2.1 Kq",
              Warranty: "12 Ay"
            }
          }
        ],
        Lenovo: [
          {
            id: 156,
            name: "Lenovo V15 G5 IRL",
            description: "Intel Core i5-1340P | 16GB DDR5 RAM | 512GB SSD | Iris Xe | 15.6\" FHD IPS | Win11 | DS9001",
            priceUSD: 1199,
            image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FLenovo-V15-G5-IRL-1DBnb_.webp&w=1920&q=100",
            specs: {
              CPU: "Intel® Core™ i5-1340P",
              RAM: "16 GB DDR5 5200MHz",
              SSD: "512 GB M.2 NVMe™ PCIe®",
              GPU: "Intel Iris Xe Graphics",
              Display: "15.6\" FHD IPS",
              OS: "Windows 11 Home",
              Weight: "1.8 Kq",
              Warranty: "12 Ay"
            }
          },
          {
            id: 157,
            name: "Lenovo IdeaPad Slim 3 15IRU8",
            description: "Intel Core i7-1360P | 16GB DDR5 RAM | 512GB SSD | Iris Xe | 15.6\" FHD IPS | Win11 | DS9002",
            priceUSD: 1299,
            image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FLenovo-IdeaPad-Slim-3-15IRU8-Gray_1tbqZg.webp&w=1920&q=100",
            specs: {
              CPU: "Intel® Core™ i7-1360P",
              RAM: "16 GB DDR5 5200MHz",
              SSD: "512 GB M.2 NVMe™ PCIe®",
              GPU: "Intel Iris Xe Graphics",
              Display: "15.6\" FHD IPS",
              OS: "Windows 11 Home",
              Weight: "1.7 Kq",
              Warranty: "12 Ay"
            }
          },
          {
            id: 158,
            name: "Lenovo IdeaPad 5 2‑in‑1 14IAL10",
            description: "Intel Core i5-1350P | 16GB DDR5 RAM | 512GB SSD | Iris Xe | 14\" FHD Touch | Win11 | DS9003",
            priceUSD: 1399,
            image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FLenovo-IdeaPad-5-2-in-1-14IAL10-Gray-7YYrWg.webp&w=1920&q=100",
            specs: {
              CPU: "Intel® Core™ i5-1350P",
              RAM: "16 GB DDR5 5200MHz",
              SSD: "512 GB M.2 NVMe™ PCIe®",
              GPU: "Intel Iris Xe Graphics",
              Display: "14\" FHD Touch",
              OS: "Windows 11 Home",
              Weight: "1.5 Kq",
              Warranty: "12 Ay"
            }
          },
          {
            id: 159,
            name: "Lenovo Yoga 9 2‑in‑1 14ILL10",
            description: "Intel Core i7-1370P | 16GB DDR5 RAM | 512GB SSD | Iris Xe | 14\" FHD Touch | Win11 | DS9004",
            priceUSD: 1699,
            image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FLenovo-Yoga-9-2-in-1-14ILL10-Blue-12gFXy.webp&w=1920&q=100",
            specs: {
              CPU: "Intel® Core™ i7-1370P",
              RAM: "16 GB DDR5 5200MHz",
              SSD: "512 GB M.2 NVMe™ PCIe®",
              GPU: "Intel Iris Xe Graphics",
              Display: "14\" FHD Touch",
              OS: "Windows 11 Home",
              Weight: "1.6 Kq",
              Warranty: "12 Ay"
            }
          },
          {
            id: 160,
            name: "Lenovo Yoga 7 2‑in‑1 16IML9",
            description: "Intel Core i7-1360P | 16GB DDR5 RAM | 512GB SSD | Iris Xe | 16\" FHD Touch | Win11 | DS9005",
            priceUSD: 1799,
            image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FLenovo-Yoga-7-2-in-1-16IML9_10RV0e.webp&w=1920&q=100",
            specs: {
              CPU: "Intel® Core™ i7-1360P",
              RAM: "16 GB DDR5 5200MHz",
              SSD: "512 GB M.2 NVMe™ PCIe®",
              GPU: "Intel Iris Xe Graphics",
              Display: "16\" FHD Touch",
              OS: "Windows 11 Home",
              Weight: "1.9 Kq",
              Warranty: "12 Ay"
            }
          },
          {
            id: 161,
            name: "Lenovo V15 G5 Plus",
            description: "Intel Core i5-1340P | 16GB DDR5 RAM | 512GB SSD | Iris Xe | 15.6\" FHD IPS | Win11 | DS9006",
            priceUSD: 1249,
            image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FLenovo-V15-G5-IRL-1DBnb_.webp&w=1920&q=100",
            specs: {
              CPU: "Intel® Core™ i5-1340P",
              RAM: "16 GB DDR5 5200MHz",
              SSD: "512 GB M.2 NVMe™ PCIe®",
              GPU: "Intel Iris Xe Graphics",
              Display: "15.6\" FHD IPS",
              OS: "Windows 11 Home",
              Weight: "1.8 Kq",
              Warranty: "12 Ay"
            }
          },
          {
            id: 162,
            name: "Lenovo IdeaPad Slim 3 Plus",
            description: "Intel Core i7-1360P | 16GB DDR5 RAM | 512GB SSD | Iris Xe | 15.6\" FHD IPS | Win11 | DS9007",
            priceUSD: 1349,
            image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FLenovo-IdeaPad-Slim-3-15IRU8-Gray_1tbqZg.webp&w=1920&q=100",
            specs: {
              CPU: "Intel® Core™ i7-1360P",
              RAM: "16 GB DDR5 5200MHz",
              SSD: "512 GB M.2 NVMe™ PCIe®",
              GPU: "Intel Iris Xe Graphics",
              Display: "15.6\" FHD IPS",
              OS: "Windows 11 Home",
              Weight: "1.7 Kq",
              Warranty: "12 Ay"
            }
          }
        ],
      }
    ],
  },
  parts: {
    components: {
      cpu: [
        {
          Intel: [
            {
              i5: [
                {
                  id: 163,
                  name: "Intel Core i5-12400F",
                  description: "6C | 12T | 4.4GHz | 18MB Cache | 65W | 128GB RAM | 68 GB/s",
                  priceUSD: 220,
                  image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FIntel-Core-i5-14400F-ProcessordqHyQ.webp&w=1920&q=100",
                  specs: {
                    TotalCores: 6,
                    TotalThreads: 12,
                    MaxTurboFrequency: "4.40 GHz",
                    BaseFrequency: "2.50 GHz",
                    Cache: "18 MB Intel® Smart Cache",
                    TDP: "65 W",
                    MaxMemorySize: "128 GB",
                    MemoryTypes: "DDR4-3200, DDR5-4800",
                    MaxMemoryBandwidth: "68 GB/s",
                    SupportedSockets: "FCLGA1700",
                    Warranty: "12 Ay"
                  }
                },
                {
                  id: 164,
                  name: "Intel Core i5-12500",
                  description: "6C | 12T | 4.6GHz | 18MB Cache | 65W | 128GB RAM | 72 GB/s",
                  priceUSD: 230,
                  image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FIntel-Core-i5-14400F-ProcessordqHyQ.webp&w=1920&q=100",
                  specs: {
                    TotalCores: 6,
                    TotalThreads: 12,
                    MaxTurboFrequency: "4.60 GHz",
                    BaseFrequency: "2.60 GHz",
                    Cache: "18 MB Intel® Smart Cache",
                    TDP: "65 W",
                    MaxMemorySize: "128 GB",
                    MemoryTypes: "DDR4-3200, DDR5-4800",
                    MaxMemoryBandwidth: "72 GB/s",
                    SupportedSockets: "FCLGA1700",
                    Warranty: "12 Ay"
                  }
                },
                {
                  id: 165,
                  name: "Intel Core i5-12600",
                  description: "6C | 12T | 4.8GHz | 20MB Cache | 65W | 128GB RAM | 74 GB/s",
                  priceUSD: 245,
                  image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FIntel-Core-i5-14400F-ProcessordqHyQ.webp&w=1920&q=100",
                  specs: {
                    TotalCores: 6,
                    TotalThreads: 12,
                    MaxTurboFrequency: "4.80 GHz",
                    BaseFrequency: "2.70 GHz",
                    Cache: "20 MB Intel® Smart Cache",
                    TDP: "65 W",
                    MaxMemorySize: "128 GB",
                    MemoryTypes: "DDR4-3200, DDR5-4800",
                    MaxMemoryBandwidth: "74 GB/s",
                    SupportedSockets: "FCLGA1700",
                    Warranty: "12 Ay"
                  }
                },
                {
                  id: 166,
                  name: "Intel Core i5-13400",
                  description: "10C | 16T | 4.6GHz | 20MB Cache | 65W | 128GB RAM | 75 GB/s",
                  priceUSD: 265,
                  image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FIntel-Core-i5-14400F-ProcessordqHyQ.webp&w=1920&q=100",
                  specs: {
                    TotalCores: 10,
                    TotalThreads: 16,
                    MaxTurboFrequency: "4.60 GHz",
                    BaseFrequency: "2.50 GHz",
                    Cache: "20 MB Intel® Smart Cache",
                    TDP: "65 W",
                    MaxMemorySize: "128 GB",
                    MemoryTypes: "DDR4-3200, DDR5-4800",
                    MaxMemoryBandwidth: "75 GB/s",
                    SupportedSockets: "FCLGA1700",
                    Warranty: "12 Ay"
                  }
                },
                {
                  id: 167,
                  name: "Intel Core i5-14400",
                  description: "10C | 20T | 4.9GHz | 24MB Cache | 65W | 128GB RAM | 76 GB/s",
                  priceUSD: 280,
                  image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FIntel-Core-i5-14400F-ProcessordqHyQ.webp&w=1920&q=100",
                  specs: {
                    TotalCores: 10,
                    TotalThreads: 20,
                    MaxTurboFrequency: "4.90 GHz",
                    BaseFrequency: "2.60 GHz",
                    Cache: "24 MB Intel® Smart Cache",
                    TDP: "65 W",
                    MaxMemorySize: "128 GB",
                    MemoryTypes: "DDR4-3200, DDR5-4800",
                    MaxMemoryBandwidth: "76 GB/s",
                    SupportedSockets: "FCLGA1700",
                    Warranty: "12 Ay"
                  }
                },
                {
                  id: 168,
                  name: "Intel Core i5-12510",
                  description: "6C | 12T | 4.5GHz | 18MB Cache | 65W | 128GB RAM | 70 GB/s",
                  priceUSD: 240,
                  image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FIntel-Core-i5-14400F-ProcessordqHyQ.webp&w=1920&q=100",
                  specs: {
                    TotalCores: 6,
                    TotalThreads: 12,
                    MaxTurboFrequency: "4.50 GHz",
                    BaseFrequency: "2.55 GHz",
                    Cache: "18 MB Intel® Smart Cache",
                    TDP: "65 W",
                    MaxMemorySize: "128 GB",
                    MemoryTypes: "DDR4-3200, DDR5-4800",
                    MaxMemoryBandwidth: "70 GB/s",
                    SupportedSockets: "FCLGA1700",
                    Warranty: "12 Ay"
                  }
                },
                {
                  id: 169,
                  name: "Intel Core i5-12610",
                  description: "6C | 12T | 4.7GHz | 20MB Cache | 65W | 128GB RAM | 73 GB/s",
                  priceUSD: 255,
                  image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FIntel-Core-i5-14400F-ProcessordqHyQ.webp&w=1920&q=100",
                  specs: {
                    TotalCores: 6,
                    TotalThreads: 12,
                    MaxTurboFrequency: "4.70 GHz",
                    BaseFrequency: "2.65 GHz",
                    Cache: "20 MB Intel® Smart Cache",
                    TDP: "65 W",
                    MaxMemorySize: "128 GB",
                    MemoryTypes: "DDR4-3200, DDR5-4800",
                    MaxMemoryBandwidth: "73 GB/s",
                    SupportedSockets: "FCLGA1700",
                    Warranty: "12 Ay"
                  }
                },
                {
                  id: 170,
                  name: "Intel Core i5-12700",
                  description: "8C | 16T | 4.8GHz | 20MB Cache | 65W | 128GB RAM | 74 GB/s",
                  priceUSD: 265,
                  image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FIntel-Core-i5-14400F-ProcessordqHyQ.webp&w=1920&q=100",
                  specs: {
                    TotalCores: 8,
                    TotalThreads: 16,
                    MaxTurboFrequency: "4.80 GHz",
                    BaseFrequency: "2.60 GHz",
                    Cache: "20 MB Intel® Smart Cache",
                    TDP: "65 W",
                    MaxMemorySize: "128 GB",
                    MemoryTypes: "DDR4-3200, DDR5-4800",
                    MaxMemoryBandwidth: "74 GB/s",
                    SupportedSockets: "FCLGA1700",
                    Warranty: "12 Ay"
                  }
                },
                {
                  id: 171,
                  name: "Intel Core i5-12800",
                  description: "8C | 16T | 4.9GHz | 24MB Cache | 65W | 128GB RAM | 76 GB/s",
                  priceUSD: 275,
                  image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FIntel-Core-i5-14400F-ProcessordqHyQ.webp&w=1920&q=100",
                  specs: {
                    TotalCores: 8,
                    TotalThreads: 16,
                    MaxTurboFrequency: "4.90 GHz",
                    BaseFrequency: "2.70 GHz",
                    Cache: "24 MB Intel® Smart Cache",
                    TDP: "65 W",
                    MaxMemorySize: "128 GB",
                    MemoryTypes: "DDR4-3200, DDR5-4800",
                    MaxMemoryBandwidth: "76 GB/s",
                    SupportedSockets: "FCLGA1700",
                    Warranty: "12 Ay"
                  }
                },
                {
                  id: 172,
                  name: "Intel Core i5-12900",
                  description: "10C | 16T | 5.0GHz | 24MB Cache | 65W | 128GB RAM | 78 GB/s",
                  priceUSD: 285,
                  image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FIntel-Core-i5-14400F-ProcessordqHyQ.webp&w=1920&q=100",
                  specs: {
                    TotalCores: 10,
                    TotalThreads: 16,
                    MaxTurboFrequency: "5.00 GHz",
                    BaseFrequency: "2.80 GHz",
                    Cache: "24 MB Intel® Smart Cache",
                    TDP: "65 W",
                    MaxMemorySize: "128 GB",
                    MemoryTypes: "DDR4-3200, DDR5-4800",
                    MaxMemoryBandwidth: "78 GB/s",
                    SupportedSockets: "FCLGA1700",
                    Warranty: "12 Ay"
                  }
                },
                {
                  id: 173,
                  name: "Intel Core i5-13410",
                  description: "10C | 20T | 5.0GHz | 24MB Cache | 65W | 128GB RAM | 79 GB/s",
                  priceUSD: 295,
                  image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FIntel-Core-i5-14400F-ProcessordqHyQ.webp&w=1920&q=100",
                  specs: {
                    TotalCores: 10,
                    TotalThreads: 20,
                    MaxTurboFrequency: "5.00 GHz",
                    BaseFrequency: "2.90 GHz",
                    Cache: "24 MB Intel® Smart Cache",
                    TDP: "65 W",
                    MaxMemorySize: "128 GB",
                    MemoryTypes: "DDR4-3200, DDR5-4800",
                    MaxMemoryBandwidth: "79 GB/s",
                    SupportedSockets: "FCLGA1700",
                    Warranty: "12 Ay"
                  }
                },
                {
                  id: 174,
                  name: "Intel Core i5-13500",
                  description: "10C | 20T | 5.1GHz | 24MB Cache | 65W | 128GB RAM | 80 GB/s",
                  priceUSD: 300,
                  image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FIntel-Core-i5-14400F-ProcessordqHyQ.webp&w=1920&q=100",
                  specs: {
                    TotalCores: 10,
                    TotalThreads: 20,
                    MaxTurboFrequency: "5.10 GHz",
                    BaseFrequency: "3.00 GHz",
                    Cache: "24 MB Intel® Smart Cache",
                    TDP: "65 W",
                    MaxMemorySize: "128 GB",
                    MemoryTypes: "DDR4-3200, DDR5-4800",
                    MaxMemoryBandwidth: "80 GB/s",
                    SupportedSockets: "FCLGA1700",
                    Warranty: "12 Ay"
                  }
                }
              ],
              i7: [
                {
                  id: 175,
                  name: "Intel Core i7-12700",
                  description: "12C | 20T | 4.9GHz | 25MB Cache | 65W | 128GB RAM | 76.8 GB/s",
                  priceUSD: 470,
                  image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FIntel-Core-i7-12700-Processor_1GqrTT.webp&w=1920&q=100",
                  specs: {
                    TotalCores: 12,
                    TotalThreads: 20,
                    MaxTurboFrequency: "4.90 GHz",
                    BaseFrequency: "2.10 GHz",
                    Cache: "25 MB Intel® Smart Cache",
                    TDP: "65 W",
                    MaxMemorySize: "128 GB",
                    MemoryTypes: "DDR4-3200, DDR5-4800",
                    MaxMemoryBandwidth: "76.8 GB/s",
                    SupportedSockets: "FCLGA1700",
                    Warranty: "12 Ay"
                  }
                },
                {
                  id: 176,
                  name: "Intel Core i7-12710",
                  description: "12C | 20T | 5.0GHz | 25MB Cache | 65W | 128GB RAM | 77 GB/s",
                  priceUSD: 480,
                  image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FIntel-Core-i7-12700-Processor_1GqrTT.webp&w=1920&q=100",
                  specs: {
                    TotalCores: 12,
                    TotalThreads: 20,
                    MaxTurboFrequency: "5.00 GHz",
                    BaseFrequency: "2.20 GHz",
                    Cache: "25 MB Intel® Smart Cache",
                    TDP: "65 W",
                    MaxMemorySize: "128 GB",
                    MemoryTypes: "DDR4-3200, DDR5-4800",
                    MaxMemoryBandwidth: "77 GB/s",
                    SupportedSockets: "FCLGA1700",
                    Warranty: "12 Ay"
                  }
                },
                {
                  id: 177,
                  name: "Intel Core i7-12720",
                  description: "12C | 24T | 5.1GHz | 30MB Cache | 65W | 128GB RAM | 78 GB/s",
                  priceUSD: 495,
                  image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FIntel-Core-i7-12700-Processor_1GqrTT.webp&w=1920&q=100",
                  specs: {
                    TotalCores: 12,
                    TotalThreads: 24,
                    MaxTurboFrequency: "5.10 GHz",
                    BaseFrequency: "2.30 GHz",
                    Cache: "30 MB Intel® Smart Cache",
                    TDP: "65 W",
                    MaxMemorySize: "128 GB",
                    MemoryTypes: "DDR4-3200, DDR5-4800",
                    MaxMemoryBandwidth: "78 GB/s",
                    SupportedSockets: "FCLGA1700",
                    Warranty: "12 Ay"
                  }
                },
                {
                  id: 178,
                  name: "Intel Core i7-12730",
                  description: "14C | 24T | 5.0GHz | 30MB Cache | 65W | 128GB RAM | 79 GB/s",
                  priceUSD: 510,
                  image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FIntel-Core-i7-12700-Processor_1GqrTT.webp&w=1920&q=100",
                  specs: {
                    TotalCores: 14,
                    TotalThreads: 24,
                    MaxTurboFrequency: "5.00 GHz",
                    BaseFrequency: "2.30 GHz",
                    Cache: "30 MB Intel® Smart Cache",
                    TDP: "65 W",
                    MaxMemorySize: "128 GB",
                    MemoryTypes: "DDR4-3200, DDR5-4800",
                    MaxMemoryBandwidth: "79 GB/s",
                    SupportedSockets: "FCLGA1700",
                    Warranty: "12 Ay"
                  }
                },
                {
                  id: 179,
                  name: "Intel Core i7-12740",
                  description: "14C | 24T | 5.1GHz | 30MB Cache | 65W | 128GB RAM | 80 GB/s",
                  priceUSD: 520,
                  image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FIntel-Core-i7-12700-Processor_1GqrTT.webp&w=1920&q=100",
                  specs: {
                    TotalCores: 14,
                    TotalThreads: 24,
                    MaxTurboFrequency: "5.10 GHz",
                    BaseFrequency: "2.40 GHz",
                    Cache: "30 MB Intel® Smart Cache",
                    TDP: "65 W",
                    MaxMemorySize: "128 GB",
                    MemoryTypes: "DDR4-3200, DDR5-4800",
                    MaxMemoryBandwidth: "80 GB/s",
                    SupportedSockets: "FCLGA1700",
                    Warranty: "12 Ay"
                  }
                },
                {
                  id: 180,
                  name: "Intel Core i7-12750",
                  description: "16C | 24T | 5.2GHz | 32MB Cache | 65W | 128GB RAM | 82 GB/s",
                  priceUSD: 540,
                  image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FIntel-Core-i7-12700-Processor_1GqrTT.webp&w=1920&q=100",
                  specs: {
                    TotalCores: 16,
                    TotalThreads: 24,
                    MaxTurboFrequency: "5.20 GHz",
                    BaseFrequency: "2.50 GHz",
                    Cache: "32 MB Intel® Smart Cache",
                    TDP: "65 W",
                    MaxMemorySize: "128 GB",
                    MemoryTypes: "DDR4-3200, DDR5-4800",
                    MaxMemoryBandwidth: "82 GB/s",
                    SupportedSockets: "FCLGA1700",
                    Warranty: "12 Ay"
                  }
                },
                {
                  id: 181,
                  name: "Intel Core i7-12760",
                  description: "16C | 32T | 5.2GHz | 32MB Cache | 65W | 128GB RAM | 84 GB/s",
                  priceUSD: 555,
                  image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FIntel-Core-i7-12700-Processor_1GqrTT.webp&w=1920&q=100",
                  specs: {
                    TotalCores: 16,
                    TotalThreads: 32,
                    MaxTurboFrequency: "5.20 GHz",
                    BaseFrequency: "2.60 GHz",
                    Cache: "32 MB Intel® Smart Cache",
                    TDP: "65 W",
                    MaxMemorySize: "128 GB",
                    MemoryTypes: "DDR4-3200, DDR5-4800",
                    MaxMemoryBandwidth: "84 GB/s",
                    SupportedSockets: "FCLGA1700",
                    Warranty: "12 Ay"
                  }
                },
                {
                  id: 182,
                  name: "Intel Core i7-12800",
                  description: "16C | 32T | 5.3GHz | 32MB Cache | 65W | 128GB RAM | 85 GB/s",
                  priceUSD: 570,
                  image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FIntel-Core-i7-12700-Processor_1GqrTT.webp&w=1920&q=100",
                  specs: {
                    TotalCores: 16,
                    TotalThreads: 32,
                    MaxTurboFrequency: "5.30 GHz",
                    BaseFrequency: "2.70 GHz",
                    Cache: "32 MB Intel® Smart Cache",
                    TDP: "65 W",
                    MaxMemorySize: "128 GB",
                    MemoryTypes: "DDR4-3200, DDR5-4800",
                    MaxMemoryBandwidth: "85 GB/s",
                    SupportedSockets: "FCLGA1700",
                    Warranty: "12 Ay"
                  }
                },
                {
                  id: 183,
                  name: "Intel Core i7-12810",
                  description: "16C | 32T | 5.4GHz | 32MB Cache | 65W | 128GB RAM | 87 GB/s",
                  priceUSD: 585,
                  image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FIntel-Core-i7-12700-Processor_1GqrTT.webp&w=1920&q=100",
                  specs: {
                    TotalCores: 16,
                    TotalThreads: 32,
                    MaxTurboFrequency: "5.40 GHz",
                    BaseFrequency: "2.80 GHz",
                    Cache: "32 MB Intel® Smart Cache",
                    TDP: "65 W",
                    MaxMemorySize: "128 GB",
                    MemoryTypes: "DDR4-3200, DDR5-4800",
                    MaxMemoryBandwidth: "87 GB/s",
                    SupportedSockets: "FCLGA1700",
                    Warranty: "12 Ay"
                  }
                }
              ],
              i7ultra: [
                {
                  id: 184,
                  name: "Intel Core i7 Ultra-13700KF",
                  description: "16C | 32T | 5.5GHz | 36MB Cache | 125W | 128GB RAM | 96 GB/s",
                  priceUSD: 780,
                  image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FU7-265KFQbwN_.webp&w=1920&q=100",
                  specs: {
                    TotalCores: 16,
                    TotalThreads: 32,
                    MaxTurboFrequency: "5.50 GHz",
                    BaseFrequency: "3.20 GHz",
                    Cache: "36 MB Intel® Smart Cache",
                    TDP: "125 W",
                    MaxMemorySize: "128 GB",
                    MemoryTypes: "DDR5-4800",
                    MaxMemoryBandwidth: "96 GB/s",
                    SupportedSockets: "FCLGA1700",
                    Warranty: "12 Ay"
                  }
                },
                {
                  id: 185,
                  name: "Intel Core i7 Ultra-13710KF",
                  description: "16C | 32T | 5.6GHz | 36MB Cache | 125W | 128GB RAM | 98 GB/s",
                  priceUSD: 800,
                  image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FU7-265KFQbwN_.webp&w=1920&q=100",
                  specs: {
                    TotalCores: 16,
                    TotalThreads: 32,
                    MaxTurboFrequency: "5.60 GHz",
                    BaseFrequency: "3.30 GHz",
                    Cache: "36 MB Intel® Smart Cache",
                    TDP: "125 W",
                    MaxMemorySize: "128 GB",
                    MemoryTypes: "DDR5-4800",
                    MaxMemoryBandwidth: "98 GB/s",
                    SupportedSockets: "FCLGA1700",
                    Warranty: "12 Ay"
                  }
                },
                {
                  id: 186,
                  name: "Intel Core i7 Ultra-13720KF",
                  description: "16C | 32T | 5.7GHz | 36MB Cache | 125W | 128GB RAM | 100 GB/s",
                  priceUSD: 820,
                  image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FU7-265KFQbwN_.webp&w=1920&q=100",
                  specs: {
                    TotalCores: 16,
                    TotalThreads: 32,
                    MaxTurboFrequency: "5.70 GHz",
                    BaseFrequency: "3.40 GHz",
                    Cache: "36 MB Intel® Smart Cache",
                    TDP: "125 W",
                    MaxMemorySize: "128 GB",
                    MemoryTypes: "DDR5-4800",
                    MaxMemoryBandwidth: "100 GB/s",
                    SupportedSockets: "FCLGA1700",
                    Warranty: "12 Ay"
                  }
                },
                {
                  id: 187,
                  name: "Intel Core i7 Ultra-13730KF",
                  description: "16C | 32T | 5.8GHz | 36MB Cache | 125W | 128GB RAM | 102 GB/s",
                  priceUSD: 840,
                  image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FU7-265KFQbwN_.webp&w=1920&q=100",
                  specs: {
                    TotalCores: 16,
                    TotalThreads: 32,
                    MaxTurboFrequency: "5.80 GHz",
                    BaseFrequency: "3.50 GHz",
                    Cache: "36 MB Intel® Smart Cache",
                    TDP: "125 W",
                    MaxMemorySize: "128 GB",
                    MemoryTypes: "DDR5-4800",
                    MaxMemoryBandwidth: "102 GB/s",
                    SupportedSockets: "FCLGA1700",
                    Warranty: "12 Ay"
                  }
                },
                {
                  id: 188,
                  name: "Intel Core i7 Ultra-13740KF",
                  description: "16C | 32T | 5.9GHz | 36MB Cache | 125W | 128GB RAM | 104 GB/s",
                  priceUSD: 860,
                  image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FU7-265KFQbwN_.webp&w=1920&q=100",
                  specs: {
                    TotalCores: 16,
                    TotalThreads: 32,
                    MaxTurboFrequency: "5.90 GHz",
                    BaseFrequency: "3.60 GHz",
                    Cache: "36 MB Intel® Smart Cache",
                    TDP: "125 W",
                    MaxMemorySize: "128 GB",
                    MemoryTypes: "DDR5-4800",
                    MaxMemoryBandwidth: "104 GB/s",
                    SupportedSockets: "FCLGA1700",
                    Warranty: "12 Ay"
                  }
                }
              ],
              i9: [
                {
                  id: 189,
                  name: "Intel Core i9-14900KF",
                  description: "24C | 32T | 6.0GHz | 36MB Cache | 125W | 128GB RAM | 112 GB/s",
                  priceUSD: 1200,
                  image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FIntel-Core-i9-14900KF-processorZFF4b.webp&w=1920&q=100",
                  specs: {
                    TotalCores: 24,
                    TotalThreads: 32,
                    MaxTurboFrequency: "6.00 GHz",
                    BaseFrequency: "3.50 GHz",
                    Cache: "36 MB Intel® Smart Cache",
                    TDP: "125 W",
                    MaxMemorySize: "128 GB",
                    MemoryTypes: "DDR5-4800",
                    MaxMemoryBandwidth: "112 GB/s",
                    SupportedSockets: "FCLGA1700",
                    Warranty: "12 Ay"
                  }
                },
                {
                  id: 190,
                  name: "Intel Core i9-14910KF",
                  description: "24C | 32T | 6.1GHz | 36MB Cache | 125W | 128GB RAM | 114 GB/s",
                  priceUSD: 1230,
                  image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FIntel-Core-i9-14900KF-processorZFF4b.webp&w=1920&q=100",
                  specs: {
                    TotalCores: 24,
                    TotalThreads: 32,
                    MaxTurboFrequency: "6.10 GHz",
                    BaseFrequency: "3.60 GHz",
                    Cache: "36 MB Intel® Smart Cache",
                    TDP: "125 W",
                    MaxMemorySize: "128 GB",
                    MemoryTypes: "DDR5-4800",
                    MaxMemoryBandwidth: "114 GB/s",
                    SupportedSockets: "FCLGA1700",
                    Warranty: "12 Ay"
                  }
                },
                {
                  id: 191,
                  name: "Intel Core i9-14920KF",
                  description: "24C | 32T | 6.2GHz | 36MB Cache | 125W | 128GB RAM | 116 GB/s",
                  priceUSD: 1260,
                  image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FIntel-Core-i9-14900KF-processorZFF4b.webp&w=1920&q=100",
                  specs: {
                    TotalCores: 24,
                    TotalThreads: 32,
                    MaxTurboFrequency: "6.20 GHz",
                    BaseFrequency: "3.70 GHz",
                    Cache: "36 MB Intel® Smart Cache",
                    TDP: "125 W",
                    MaxMemorySize: "128 GB",
                    MemoryTypes: "DDR5-4800",
                    MaxMemoryBandwidth: "116 GB/s",
                    SupportedSockets: "FCLGA1700",
                    Warranty: "12 Ay"
                  }
                },
                {
                  id: 192,
                  name: "Intel Core i9-14930KF",
                  description: "24C | 32T | 6.3GHz | 36MB Cache | 125W | 128GB RAM | 118 GB/s",
                  priceUSD: 1290,
                  image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FIntel-Core-i9-14900KF-processorZFF4b.webp&w=1920&q=100",
                  specs: {
                    TotalCores: 24,
                    TotalThreads: 32,
                    MaxTurboFrequency: "6.30 GHz",
                    BaseFrequency: "3.80 GHz",
                    Cache: "36 MB Intel® Smart Cache",
                    TDP: "125 W",
                    MaxMemorySize: "128 GB",
                    MemoryTypes: "DDR5-4800",
                    MaxMemoryBandwidth: "118 GB/s",
                    SupportedSockets: "FCLGA1700",
                    Warranty: "12 Ay"
                  }
                },
                {
                  id: 193,
                  name: "Intel Core i9-14940KF",
                  description: "24C | 32T | 6.4GHz | 36MB Cache | 125W | 128GB RAM | 120 GB/s",
                  priceUSD: 1320,
                  image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FIntel-Core-i9-14900KF-processorZFF4b.webp&w=1920&q=100",
                  specs: {
                    TotalCores: 24,
                    TotalThreads: 32,
                    MaxTurboFrequency: "6.40 GHz",
                    BaseFrequency: "3.90 GHz",
                    Cache: "36 MB Intel® Smart Cache",
                    TDP: "125 W",
                    MaxMemorySize: "128 GB",
                    MemoryTypes: "DDR5-4800",
                    MaxMemoryBandwidth: "120 GB/s",
                    SupportedSockets: "FCLGA1700",
                    Warranty: "12 Ay"
                  }
                }
              ],
            }
          ],
          Ryzen: [
            {
              r5:[
                {
                  id: 194,
                  name: "AMD Ryzen 5 7500F",
                  description: "6C | 12T | 4.5GHz | 35MB Cache | 65W | 128GB RAM | 76 GB/s",
                  priceUSD: 220,
                  image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FAMD-Ryzen-5-7500F-1SZRl2.webp&w=1920&q=100",
                  specs: {
                    TotalCores: 6,
                    TotalThreads: 12,
                    MaxTurboFrequency: "4.50 GHz",
                    BaseFrequency: "3.20 GHz",
                    Cache: "35 MB AMD Smart Cache",
                    TDP: "65 W",
                    MaxMemorySize: "128 GB",
                    MemoryTypes: "DDR4-3200, DDR5-4800",
                    MaxMemoryBandwidth: "76 GB/s",
                    SupportedSockets: "AM5",
                    Warranty: "12 Ay"
                  }
                },
                {
                  id: 195,
                  name: "AMD Ryzen 5 7600F",
                  description: "6C | 12T | 4.6GHz | 36MB Cache | 65W | 128GB RAM | 78 GB/s",
                  priceUSD: 235,
                  image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FAMD-Ryzen-5-7500F-1SZRl2.webp&w=1920&q=100",
                  specs: {
                    TotalCores: 6,
                    TotalThreads: 12,
                    MaxTurboFrequency: "4.60 GHz",
                    BaseFrequency: "3.30 GHz",
                    Cache: "36 MB AMD Smart Cache",
                    TDP: "65 W",
                    MaxMemorySize: "128 GB",
                    MemoryTypes: "DDR4-3200, DDR5-4800",
                    MaxMemoryBandwidth: "78 GB/s",
                    SupportedSockets: "AM5",
                    Warranty: "12 Ay"
                  }
                },
                {
                  id: 196,
                  name: "AMD Ryzen 5 7700F",
                  description: "6C | 12T | 4.7GHz | 36MB Cache | 65W | 128GB RAM | 80 GB/s",
                  priceUSD: 250,
                  image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FAMD-Ryzen-5-7500F-1SZRl2.webp&w=1920&q=100",
                  specs: {
                    TotalCores: 6,
                    TotalThreads: 12,
                    MaxTurboFrequency: "4.70 GHz",
                    BaseFrequency: "3.40 GHz",
                    Cache: "36 MB AMD Smart Cache",
                    TDP: "65 W",
                    MaxMemorySize: "128 GB",
                    MemoryTypes: "DDR4-3200, DDR5-4800",
                    MaxMemoryBandwidth: "80 GB/s",
                    SupportedSockets: "AM5",
                    Warranty: "12 Ay"
                  }
                },
                {
                  id: 197,
                  name: "AMD Ryzen 5 7800F",
                  description: "6C | 12T | 4.8GHz | 36MB Cache | 65W | 128GB RAM | 82 GB/s",
                  priceUSD: 265,
                  image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FAMD-Ryzen-5-7500F-1SZRl2.webp&w=1920&q=100",
                  specs: {
                    TotalCores: 6,
                    TotalThreads: 12,
                    MaxTurboFrequency: "4.80 GHz",
                    BaseFrequency: "3.50 GHz",
                    Cache: "36 MB AMD Smart Cache",
                    TDP: "65 W",
                    MaxMemorySize: "128 GB",
                    MemoryTypes: "DDR4-3200, DDR5-4800",
                    MaxMemoryBandwidth: "82 GB/s",
                    SupportedSockets: "AM5",
                    Warranty: "12 Ay"
                  }
                },
                {
                  id: 198,
                  name: "AMD Ryzen 5 7900F",
                  description: "6C | 12T | 4.9GHz | 36MB Cache | 65W | 128GB RAM | 84 GB/s",
                  priceUSD: 280,
                  image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FAMD-Ryzen-5-7500F-1SZRl2.webp&w=1920&q=100",
                  specs: {
                    TotalCores: 6,
                    TotalThreads: 12,
                    MaxTurboFrequency: "4.90 GHz",
                    BaseFrequency: "3.60 GHz",
                    Cache: "36 MB AMD Smart Cache",
                    TDP: "65 W",
                    MaxMemorySize: "128 GB",
                    MemoryTypes: "DDR4-3200, DDR5-4800",
                    MaxMemoryBandwidth: "84 GB/s",
                    SupportedSockets: "AM5",
                    Warranty: "12 Ay"
                  }
                }
              ],
              r7:[
                {
                  id: 199,
                  name: "AMD Ryzen 7 7700X",
                  description: "8C | 16T | 5.4GHz | 36MB Cache | 105W | 128GB RAM | 100 GB/s",
                  priceUSD: 400,
                  image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2F0c99f9d2-bd21-4e2d-ab99-63c184cd2231.webp&w=1920&q=100",
                  specs: {
                    TotalCores: 8,
                    TotalThreads: 16,
                    MaxTurboFrequency: "5.40 GHz",
                    BaseFrequency: "3.60 GHz",
                    Cache: "36 MB AMD Smart Cache",
                    TDP: "105 W",
                    MaxMemorySize: "128 GB",
                    MemoryTypes: "DDR5-4800, DDR4-3200",
                    MaxMemoryBandwidth: "100 GB/s",
                    SupportedSockets: "AM5",
                    Warranty: "12 Ay"
                  }
                },
                {
                  id: 200,
                  name: "AMD Ryzen 7 7800X",
                  description: "8C | 16T | 5.5GHz | 36MB Cache | 105W | 128GB RAM | 102 GB/s",
                  priceUSD: 420,
                  image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2F0c99f9d2-bd21-4e2d-ab99-63c184cd2231.webp&w=1920&q=100",
                  specs: {
                    TotalCores: 8,
                    TotalThreads: 16,
                    MaxTurboFrequency: "5.50 GHz",
                    BaseFrequency: "3.70 GHz",
                    Cache: "36 MB AMD Smart Cache",
                    TDP: "105 W",
                    MaxMemorySize: "128 GB",
                    MemoryTypes: "DDR5-4800, DDR4-3200",
                    MaxMemoryBandwidth: "102 GB/s",
                    SupportedSockets: "AM5",
                    Warranty: "12 Ay"
                  }
                },
                {
                  id: 201,
                  name: "AMD Ryzen 7 7900X",
                  description: "12C | 24T | 5.6GHz | 38MB Cache | 105W | 128GB RAM | 104 GB/s",
                  priceUSD: 450,
                  image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2F0c99f9d2-bd21-4e2d-ab99-63c184cd2231.webp&w=1920&q=100",
                  specs: {
                    TotalCores: 12,
                    TotalThreads: 24,
                    MaxTurboFrequency: "5.60 GHz",
                    BaseFrequency: "3.80 GHz",
                    Cache: "38 MB AMD Smart Cache",
                    TDP: "105 W",
                    MaxMemorySize: "128 GB",
                    MemoryTypes: "DDR5-4800, DDR4-3200",
                    MaxMemoryBandwidth: "104 GB/s",
                    SupportedSockets: "AM5",
                    Warranty: "12 Ay"
                  }
                },
                {
                  id: 202,
                  name: "AMD Ryzen 7 7950X",
                  description: "16C | 32T | 5.7GHz | 38MB Cache | 120W | 128GB RAM | 106 GB/s",
                  priceUSD: 500,
                  image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2F0c99f9d2-bd21-4e2d-ab99-63c184cd2231.webp&w=1920&q=100",
                  specs: {
                    TotalCores: 16,
                    TotalThreads: 32,
                    MaxTurboFrequency: "5.70 GHz",
                    BaseFrequency: "3.90 GHz",
                    Cache: "38 MB AMD Smart Cache",
                    TDP: "120 W",
                    MaxMemorySize: "128 GB",
                    MemoryTypes: "DDR5-4800, DDR4-3200",
                    MaxMemoryBandwidth: "106 GB/s",
                    SupportedSockets: "AM5",
                    Warranty: "12 Ay"
                  }
                },
                {
                  id: 203,
                  name: "AMD Ryzen 7 7950X3D",
                  description: "16C | 32T | 5.8GHz | 100MB Cache | 120W | 128GB RAM | 108 GB/s",
                  priceUSD: 580,
                  image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2F0c99f9d2-bd21-4e2d-ab99-63c184cd2231.webp&w=1920&q=100",
                  specs: {
                    TotalCores: 16,
                    TotalThreads: 32,
                    MaxTurboFrequency: "5.80 GHz",
                    BaseFrequency: "4.00 GHz",
                    Cache: "100 MB AMD 3D V-Cache",
                    TDP: "120 W",
                    MaxMemorySize: "128 GB",
                    MemoryTypes: "DDR5-4800, DDR4-3200",
                    MaxMemoryBandwidth: "108 GB/s",
                    SupportedSockets: "AM5",
                    Warranty: "12 Ay"
                  }
                },
                {
                  id: 204,
                  name: "AMD Ryzen 7 7900",
                  description: "12C | 24T | 5.6GHz | 38MB Cache | 105W | 128GB RAM | 105 GB/s",
                  priceUSD: 460,
                  image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2F0c99f9d2-bd21-4e2d-ab99-63c184cd2231.webp&w=1920&q=100",
                  specs: {
                    TotalCores: 12,
                    TotalThreads: 24,
                    MaxTurboFrequency: "5.60 GHz",
                    BaseFrequency: "3.80 GHz",
                    Cache: "38 MB AMD Smart Cache",
                    TDP: "105 W",
                    MaxMemorySize: "128 GB",
                    MemoryTypes: "DDR5-4800, DDR4-3200",
                    MaxMemoryBandwidth: "105 GB/s",
                    SupportedSockets: "AM5",
                    Warranty: "12 Ay"
                  }
                }
              ],
              r9:[
                {
                  id: 205,
                  name: "AMD Ryzen 9 7900X",
                  description: "12C | 24T | 5.6GHz | 64MB Cache | 105W | 128GB RAM | 120 GB/s",
                  priceUSD: 600,
                  image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FAMD-Ryzen-9-7950X3D_1kO1eB.webp&w=1920&q=100",
                  specs: {
                    TotalCores: 12,
                    TotalThreads: 24,
                    MaxTurboFrequency: "5.60 GHz",
                    BaseFrequency: "3.80 GHz",
                    Cache: "64 MB AMD Smart Cache",
                    TDP: "105 W",
                    MaxMemorySize: "128 GB",
                    MemoryTypes: "DDR5-4800, DDR4-3200",
                    MaxMemoryBandwidth: "120 GB/s",
                    SupportedSockets: "AM5",
                    Warranty: "12 Ay"
                  }
                },
                {
                  id: 206,
                  name: "AMD Ryzen 9 7950X",
                  description: "16C | 32T | 5.7GHz | 80MB Cache | 120W | 128GB RAM | 125 GB/s",
                  priceUSD: 750,
                  image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FAMD-Ryzen-9-7950X3D_1kO1eB.webp&w=1920&q=100",
                  specs: {
                    TotalCores: 16,
                    TotalThreads: 32,
                    MaxTurboFrequency: "5.70 GHz",
                    BaseFrequency: "4.00 GHz",
                    Cache: "80 MB AMD Smart Cache",
                    TDP: "120 W",
                    MaxMemorySize: "128 GB",
                    MemoryTypes: "DDR5-4800, DDR4-3200",
                    MaxMemoryBandwidth: "125 GB/s",
                    SupportedSockets: "AM5",
                    Warranty: "12 Ay"
                  }
                },
                {
                  id: 207,
                  name: "AMD Ryzen 9 7950X3D",
                  description: "16C | 32T | 5.8GHz | 144MB Cache | 120W | 128GB RAM | 128 GB/s",
                  priceUSD: 850,
                  image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FAMD-Ryzen-9-7950X3D_1kO1eB.webp&w=1920&q=100",
                  specs: {
                    TotalCores: 16,
                    TotalThreads: 32,
                    MaxTurboFrequency: "5.80 GHz",
                    BaseFrequency: "4.10 GHz",
                    Cache: "144 MB AMD 3D V-Cache",
                    TDP: "120 W",
                    MaxMemorySize: "128 GB",
                    MemoryTypes: "DDR5-4800, DDR4-3200",
                    MaxMemoryBandwidth: "128 GB/s",
                    SupportedSockets: "AM5",
                    Warranty: "12 Ay"
                  }
                },
                {
                  id: 208,
                  name: "AMD Ryzen 9 7900",
                  description: "12C | 24T | 5.6GHz | 64MB Cache | 105W | 128GB RAM | 122 GB/s",
                  priceUSD: 620,
                  image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FAMD-Ryzen-9-7950X3D_1kO1eB.webp&w=1920&q=100",
                  specs: {
                    TotalCores: 12,
                    TotalThreads: 24,
                    MaxTurboFrequency: "5.60 GHz",
                    BaseFrequency: "3.80 GHz",
                    Cache: "64 MB AMD Smart Cache",
                    TDP: "105 W",
                    MaxMemorySize: "128 GB",
                    MemoryTypes: "DDR5-4800, DDR4-3200",
                    MaxMemoryBandwidth: "122 GB/s",
                    SupportedSockets: "AM5",
                    Warranty: "12 Ay"
                  }
                },
                {
                  id: 209,
                  name: "AMD Ryzen 9 7950",
                  description: "16C | 32T | 5.7GHz | 80MB Cache | 120W | 128GB RAM | 126 GB/s",
                  priceUSD: 770,
                  image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FAMD-Ryzen-9-7950X3D_1kO1eB.webp&w=1920&q=100",
                  specs: {
                    TotalCores: 16,
                    TotalThreads: 32,
                    MaxTurboFrequency: "5.70 GHz",
                    BaseFrequency: "4.00 GHz",
                    Cache: "80 MB AMD Smart Cache",
                    TDP: "120 W",
                    MaxMemorySize: "128 GB",
                    MemoryTypes: "DDR5-4800, DDR4-3200",
                    MaxMemoryBandwidth: "126 GB/s",
                    SupportedSockets: "AM5",
                    Warranty: "12 Ay"
                  }
                }
              ],
            }
          ]
        }
      ],                 
      ram: [
        {
          id: 210,
          name: "Crucial Gaming OC Pro 32GB (2x16GB) DDR4 3600MHz",
          description: "2x16GB | DDR4 | 3600MHz | CL16 | Desktop RAM",
          priceUSD: 329,
          image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FCrucial-Gaming-OC-Pro-32GB-2WpP3P.webp&w=1920&q=100",
          specs: {
            Brand: "Crucial",
            TotalMemory: "32 GB (2x16GB)",
            MemoryType: "DDR4",
            Frequency: "3600 MHz",
            CASLatency: "CL16-18-18-36",
            Voltage: "1.35 V",
            Compatibility: "Desktop",
            IntelSupportedChipsets: "Z490 / Z590 / Z690",
            AMDSupportedChipsets: "B550 / X570",
            PartNumber: "CT2K16G4DFD8366",
            Warranty: "12 Ay"
          }
        },
        {
          id: 211,
          name: "Corsair Vengeance LPX 32GB (2x16GB) DDR4 3200MHz",
          description: "2x16GB | DDR4 | 3200MHz | CL16 | Desktop RAM",
          priceUSD: 299,
          image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FCorsair-Vengeance-LPX-DDR4-32GB-(2x16GB)-3200MHz-1_Nu5k.webp&w=1920&q=100",
          specs: {
            Brand: "Corsair",
            TotalMemory: "32 GB (2x16GB)",
            MemoryType: "DDR4",
            Frequency: "3200 MHz",
            CASLatency: "CL16-18-18-36",
            Voltage: "1.35 V",
            Compatibility: "Desktop",
            IntelSupportedChipsets: "Z390 / Z490 / Z590",
            AMDSupportedChipsets: "B450 / B550 / X570",
            PartNumber: "CMK32GX4M2B3200C16",
            Warranty: "12 Ay"
          }
        },
        {
          id: 212,
          name: "Lexar Ares RGB 32GB DDR5 6000MHz",
          description: "2x16GB | DDR5 | 6000MHz | CL36 | Desktop RAM",
          priceUSD: 449,
          image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FLexar-Ares-RGB-32GB-DDR5-6000MHz5cTi9.webp&w=1920&q=100",
          specs: {
            Brand: "Lexar",
            TotalMemory: "32 GB (2x16GB)",
            MemoryType: "DDR5",
            Frequency: "6000 MHz",
            CASLatency: "CL36-36-36-76",
            Voltage: "1.25 V",
            Compatibility: "Desktop",
            IntelSupportedChipsets: "Z690 / Z790",
            AMDSupportedChipsets: "X670 / B650",
            PartNumber: "LAR32G6000C36A",
            Warranty: "12 Ay"
          }
        },
        {
          id: 213,
          name: "Corsair Dominator Platinum RGB 32GB DDR5 5200MHz",
          description: "2x16GB | DDR5 | 5200MHz | CL38 | Desktop RAM",
          priceUSD: 479,
          image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FCorsair-Dominator-Platinum-RGB-32GB_1W7unW.webp&w=1920&q=100",
          specs: {
            Brand: "Corsair",
            TotalMemory: "32 GB (2x16GB)",
            MemoryType: "DDR5",
            Frequency: "5200 MHz",
            CASLatency: "CL38-38-38-76",
            Voltage: "1.25 V",
            Compatibility: "Desktop",
            IntelSupportedChipsets: "Z690 / Z790",
            AMDSupportedChipsets: "X670 / B650",
            PartNumber: "CMT32GX5M2K5200C38",
            Warranty: "12 Ay"
          }
        },
        {
          id: 214,
          name: "G.SKILL Trident Z5 Neo RGB 32GB DDR5 6000MHz",
          description: "2x16GB | DDR5 | 6000MHz | CL36 | Desktop RAM",
          priceUSD: 459,
          image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FG.SKILL-Trident-Z5-Neo-RGB-32GB-DDR5-6000-MHz-1j19Ax.webp&w=1920&q=100",
          specs: {
            Brand: "G.SKILL",
            TotalMemory: "32 GB (2x16GB)",
            MemoryType: "DDR5",
            Frequency: "6000 MHz",
            CASLatency: "CL36-36-36-76",
            Voltage: "1.25 V",
            Compatibility: "Desktop",
            IntelSupportedChipsets: "Z690 / Z790",
            AMDSupportedChipsets: "X670 / B650",
            PartNumber: "F5-6000J3636F16GX2-TZ5N",
            Warranty: "12 Ay"
          }
        },
        {
          id: 215,
          name: "TeamGroup T-Force Delta RGB 32GB DDR5 6000MHz",
          description: "2x16GB | DDR5 | 6000MHz | CL38 | Desktop RAM",
          priceUSD: 439,
          image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FTeamgroup-T-Force-Delta-RGB-32GB-6000MHz-1J8YOp.webp&w=1920&q=100",
          specs: {
            Brand: "TeamGroup",
            TotalMemory: "32 GB (2x16GB)",
            MemoryType: "DDR5",
            Frequency: "6000 MHz",
            CASLatency: "CL38-38-38-76",
            Voltage: "1.25 V",
            Compatibility: "Desktop",
            IntelSupportedChipsets: "Z690 / Z790",
            AMDSupportedChipsets: "X670 / B650",
            PartNumber: "TF11D432G6000HC38ADC01",
            Warranty: "12 Ay"
          }
        },
        {
          id: 216,
          name: "Klevv Cras XR RGB 32GB DDR4 3600MHz",
          description: "2x16GB | DDR4 | 3600MHz | CL18 | Desktop RAM",
          priceUSD: 309,
          image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FKlevv-Cras-XR-RGB-DDR4-32GBcGdm9.webp&w=1920&q=100",
          specs: {
            Brand: "Klevv",
            TotalMemory: "32 GB (2x16GB)",
            MemoryType: "DDR4",
            Frequency: "3600 MHz",
            CASLatency: "CL18-20-20-40",
            Voltage: "1.35 V",
            Compatibility: "Desktop",
            IntelSupportedChipsets: "Z490 / Z590 / Z690",
            AMDSupportedChipsets: "B550 / X570",
            PartNumber: "KX4U3600C18D32XR",
            Warranty: "12 Ay"
          }
        },
        {
          id: 217,
          name: "TEAMGROUP T-Force Xtreem 16GB (2x8GB) DDR4 3600MHz",
          description: "2x8GB | DDR4 | 3600MHz | CL14 | Desktop RAM",
          priceUSD: 279,
          image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FTEAMGROUP-T-Force-Xtreem-16GB-(2x8GB)_19MrqZ.webp&w=1920&q=100",
          specs: {
            Brand: "TeamGroup",
            TotalMemory: "16 GB (2x8GB)",
            MemoryType: "DDR4",
            Frequency: "3600 MHz",
            CASLatency: "CL14-15-15-35",
            Voltage: "1.45 V",
            Compatibility: "Desktop",
            IntelSupportedChipsets: "Z390 / Z490 / Z590",
            AMDSupportedChipsets: "B550 / X570",
            PartNumber: "TF10D416G3600HC14CDC01",
            Warranty: "12 Ay"
          }
        },
        {
          id: 218,
          name: "G.SKILL Trident Z RGB 16GB (2x8GB) DDR4 4000MHz",
          description: "2x8GB | DDR4 | 4000MHz | CL17 | Desktop RAM",
          priceUSD: 199,
          image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2F85bf04be-418a-4eb0-ac57-083025b0919b.webp&w=1920&q=100",
          specs: {
            Brand: "G.SKILL",
            TotalMemory: "16 GB (2x8GB)",
            MemoryType: "DDR4",
            Frequency: "4000 MHz",
            CASLatency: "CL17-19-19-39",
            Voltage: "1.35 V",
            Compatibility: "Desktop",
            IntelSupportedChipsets: "Z490 / Z590 / Z690",
            AMDSupportedChipsets: "B550 / X570",
            PartNumber: "F4-4000C17D16GTZRX",
            Warranty: "12 Ay"
          }
        },
        {
          id: 219,
          name: "Crucial Ballistix 32GB (2x16GB) DDR4 3600MHz",
          description: "2x16GB | DDR4 | 3600MHz | CL16 | Desktop RAM",
          priceUSD: 319,
          image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FCrucial-Gaming-OC-Pro-32GB-2WpP3P.webp&w=1920&q=100",
          specs: {
            Brand: "Crucial",
            TotalMemory: "32 GB (2x16GB)",
            MemoryType: "DDR4",
            Frequency: "3600 MHz",
            CASLatency: "CL16-18-18-36",
            Voltage: "1.35 V",
            Compatibility: "Desktop",
            IntelSupportedChipsets: "Z490 / Z590 / Z690",
            AMDSupportedChipsets: "B550 / X570",
            PartNumber: "BL32G36C16U4B",
            Warranty: "12 Ay"
          }
        },
        {
          id: 220,
          name: "Corsair Vengeance RGB Pro 16GB (2x8GB) DDR4 3600MHz",
          description: "2x8GB | DDR4 | 3600MHz | CL18 | Desktop RAM",
          priceUSD: 229,
          image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FCorsair-Vengeance-LPX-DDR4-32GB-(2x16GB)-3200MHz-1_Nu5k.webp&w=1920&q=100",
          specs: {
            Brand: "Corsair",
            TotalMemory: "16 GB (2x8GB)",
            MemoryType: "DDR4",
            Frequency: "3600 MHz",
            CASLatency: "CL18-22-22-42",
            Voltage: "1.35 V",
            Compatibility: "Desktop",
            IntelSupportedChipsets: "Z390 / Z490 / Z590",
            AMDSupportedChipsets: "B450 / B550",
            PartNumber: "CMW16GX4M2D3600C18",
            Warranty: "12 Ay"
          }
        },
        {
          id: 221,
          name: "TeamGroup T-Force Delta RGB 16GB (2x8GB) DDR5 5600MHz",
          description: "2x8GB | DDR5 | 5600MHz | CL40 | Desktop RAM",
          priceUSD: 249,
          image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FTeamgroup-T-Force-Delta-RGB-32GB-6000MHz-1J8YOp.webp&w=1920&q=100",
          specs: {
            Brand: "TeamGroup",
            TotalMemory: "16 GB (2x8GB)",
            MemoryType: "DDR5",
            Frequency: "5600 MHz",
            CASLatency: "CL40-40-40-76",
            Voltage: "1.25 V",
            Compatibility: "Desktop",
            IntelSupportedChipsets: "Z690 / Z790",
            AMDSupportedChipsets: "X670 / B650",
            PartNumber: "TF11D416G5600HC40ADC01",
            Warranty: "12 Ay"
          }
        },
        {
          id: 222,
          name: "G.SKILL Ripjaws V 32GB (2x16GB) DDR4 3200MHz",
          description: "2x16GB | DDR4 | 3200MHz | CL16 | Desktop RAM",
          priceUSD: 279,
          image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2F85bf04be-418a-4eb0-ac57-083025b0919b.webp&w=1920&q=100",
          specs: {
            Brand: "G.SKILL",
            TotalMemory: "32 GB (2x16GB)",
            MemoryType: "DDR4",
            Frequency: "3200 MHz",
            CASLatency: "CL16-18-18-38",
            Voltage: "1.35 V",
            Compatibility: "Desktop",
            IntelSupportedChipsets: "Z490 / Z590",
            AMDSupportedChipsets: "B450 / B550",
            PartNumber: "F4-3200C16D-32GVK",
            Warranty: "12 Ay"
          }
        },
        {
          id: 223,
          name: "Lexar Ares 16GB (2x8GB) DDR5 6200MHz",
          description: "2x8GB | DDR5 | 6200MHz | CL34 | Desktop RAM",
          priceUSD: 269,
          image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FLexar-Ares-RGB-32GB-DDR5-6000MHz5cTi9.webp&w=1920&q=100",
          specs: {
            Brand: "Lexar",
            TotalMemory: "16 GB (2x8GB)",
            MemoryType: "DDR5",
            Frequency: "6200 MHz",
            CASLatency: "CL34-36-36-76",
            Voltage: "1.25 V",
            Compatibility: "Desktop",
            IntelSupportedChipsets: "Z690 / Z790",
            AMDSupportedChipsets: "X670 / B650",
            PartNumber: "LAR16G6200C34A",
            Warranty: "12 Ay"
          }
        },
        {
          id: 224,
          name: "Corsair Dominator Platinum RGB 16GB (2x8GB) DDR5 6000MHz",
          description: "2x8GB | DDR5 | 6000MHz | CL36 | Desktop RAM",
          priceUSD: 299,
          image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FCorsair-Dominator-Platinum-RGB-32GB_1W7unW.webp&w=1920&q=100",
          specs: {
            Brand: "Corsair",
            TotalMemory: "16 GB (2x8GB)",
            MemoryType: "DDR5",
            Frequency: "6000 MHz",
            CASLatency: "CL36-36-36-72",
            Voltage: "1.25 V",
            Compatibility: "Desktop",
            IntelSupportedChipsets: "Z690 / Z790",
            AMDSupportedChipsets: "X670 / B650",
            PartNumber: "CMT16GX5M2K6000C36",
            Warranty: "12 Ay"
          }
        },
        {
          id: 225,
          name: "TeamGroup T-Force Xtreem 32GB (2x16GB) DDR4 3800MHz",
          description: "2x16GB | DDR4 | 3800MHz | CL16 | Desktop RAM",
          priceUSD: 389,
          image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FTEAMGROUP-T-Force-Xtreem-16GB-(2x8GB)_19MrqZ.webp&w=1920&q=100",
          specs: {
            Brand: "TeamGroup",
            TotalMemory: "32 GB (2x16GB)",
            MemoryType: "DDR4",
            Frequency: "3800 MHz",
            CASLatency: "CL16-18-18-38",
            Voltage: "1.40 V",
            Compatibility: "Desktop",
            IntelSupportedChipsets: "Z490 / Z590 / Z690",
            AMDSupportedChipsets: "B550 / X570",
            PartNumber: "TF10D432G3800HC16CDC01",
            Warranty: "12 Ay"
          }
        },
        {
          id: 226,
          name: "G.SKILL Trident Z5 RGB 32GB (2x16GB) DDR5 6200MHz",
          description: "2x16GB | DDR5 | 6200MHz | CL34 | Desktop RAM",
          priceUSD: 499,
          image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FG.SKILL-Trident-Z5-Neo-RGB-32GB-DDR5-6000-MHz-1j19Ax.webp&w=1920&q=100",
          specs: {
            Brand: "G.SKILL",
            TotalMemory: "32 GB (2x16GB)",
            MemoryType: "DDR5",
            Frequency: "6200 MHz",
            CASLatency: "CL34-34-34-76",
            Voltage: "1.25 V",
            Compatibility: "Desktop",
            IntelSupportedChipsets: "Z690 / Z790",
            AMDSupportedChipsets: "X670 / B650",
            PartNumber: "F5-6200J3436F16GX2-TZ5",
            Warranty: "12 Ay"
          }
        },
        {
          id: 227,
          name: "Klevv Cras XR RGB 16GB (2x8GB) DDR4 4000MHz",
          description: "2x8GB | DDR4 | 4000MHz | CL18 | Desktop RAM",
          priceUSD: 219,
          image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FKlevv-Cras-XR-RGB-DDR4-32GBcGdm9.webp&w=1920&q=100",
          specs: {
            Brand: "Klevv",
            TotalMemory: "16 GB (2x8GB)",
            MemoryType: "DDR4",
            Frequency: "4000 MHz",
            CASLatency: "CL18-22-22-42",
            Voltage: "1.35 V",
            Compatibility: "Desktop",
            IntelSupportedChipsets: "Z490 / Z590",
            AMDSupportedChipsets: "B550 / X570",
            PartNumber: "KX4U4000C18D16XR",
            Warranty: "12 Ay"
          }
        },
        {
          id: 228,
          name: "Crucial Ballistix 16GB (2x8GB) DDR4 3600MHz",
          description: "2x8GB | DDR4 | 3600MHz | CL16 | Desktop RAM",
          priceUSD: 239,
          image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FCrucial-Gaming-OC-Pro-32GB-2WpP3P.webp&w=1920&q=100",
          specs: {
            Brand: "Crucial",
            TotalMemory: "16 GB (2x8GB)",
            MemoryType: "DDR4",
            Frequency: "3600 MHz",
            CASLatency: "CL16-18-18-36",
            Voltage: "1.35 V",
            Compatibility: "Desktop",
            IntelSupportedChipsets: "Z490 / Z590",
            AMDSupportedChipsets: "B550 / X570",
            PartNumber: "BL16G36C16U4B",
            Warranty: "12 Ay"
          }
        },
        {
          id: 229,
          name: "G.SKILL Ripjaws V 16GB (2x8GB) DDR4 3600MHz",
          description: "2x8GB | DDR4 | 3600MHz | CL16 | Desktop RAM",
          priceUSD: 189,
          image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2F85bf04be-418a-4eb0-ac57-083025b0919b.webp&w=1920&q=100",
          specs: {
            Brand: "G.SKILL",
            TotalMemory: "16 GB (2x8GB)",
            MemoryType: "DDR4",
            Frequency: "3600 MHz",
            CASLatency: "CL16-18-18-38",
            Voltage: "1.35 V",
            Compatibility: "Desktop",
            IntelSupportedChipsets: "Z390 / Z490 / Z590",
            AMDSupportedChipsets: "B450 / B550",
            PartNumber: "F4-3600C16D-16GVK",
            Warranty: "12 Ay"
          }
        },
        {
          id: 230,
          name: "Lexar Ares 32GB (2x16GB) DDR5 6000MHz",
          description: "2x16GB | DDR5 | 6000MHz | CL36 | Desktop RAM",
          priceUSD: 459,
          image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FLexar-Ares-RGB-32GB-DDR5-6000MHz5cTi9.webp&w=1920&q=100",
          specs: {
            Brand: "Lexar",
            TotalMemory: "32 GB (2x16GB)",
            MemoryType: "DDR5",
            Frequency: "6000 MHz",
            CASLatency: "CL36-36-36-76",
            Voltage: "1.25 V",
            Compatibility: "Desktop",
            IntelSupportedChipsets: "Z690 / Z790",
            AMDSupportedChipsets: "X670 / B650",
            PartNumber: "LAR32G6000C36A",
            Warranty: "12 Ay"
          }
        },
        {
          id: 231,
          name: "Corsair Vengeance LPX 16GB (2x8GB) DDR4 3200MHz",
          description: "2x8GB | DDR4 | 3200MHz | CL16 | Desktop RAM",
          priceUSD: 179,
          image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FCorsair-Vengeance-LPX-DDR4-32GB-(2x16GB)-3200MHz-1_Nu5k.webp&w=1920&q=100",
          specs: {
            Brand: "Corsair",
            TotalMemory: "16 GB (2x8GB)",
            MemoryType: "DDR4",
            Frequency: "3200 MHz",
            CASLatency: "CL16-18-18-36",
            Voltage: "1.35 V",
            Compatibility: "Desktop",
            IntelSupportedChipsets: "Z390 / Z490 / Z590",
            AMDSupportedChipsets: "B450 / B550",
            PartNumber: "CMW16GX4M2D3200C16",
            Warranty: "12 Ay"
          }
        },
        {
          id: 232,
          name: "TeamGroup T-Force Xtreem 32GB (2x16GB) DDR4 4000MHz",
          description: "2x16GB | DDR4 | 4000MHz | CL18 | Desktop RAM",
          priceUSD: 399,
          image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FTEAMGROUP-T-Force-Xtreem-16GB-(2x8GB)_19MrqZ.webp&w=1920&q=100",
          specs: {
            Brand: "TeamGroup",
            TotalMemory: "32 GB (2x16GB)",
            MemoryType: "DDR4",
            Frequency: "4000 MHz",
            CASLatency: "CL18-22-22-42",
            Voltage: "1.40 V",
            Compatibility: "Desktop",
            IntelSupportedChipsets: "Z490 / Z590 / Z690",
            AMDSupportedChipsets: "B550 / X570",
            PartNumber: "TF10D432G4000HC18CDC01",
            Warranty: "12 Ay"
          }
        },
        {
          id: 233,
          name: "G.SKILL Trident Z5 Neo RGB 16GB (2x8GB) DDR5 6000MHz",
          description: "2x8GB | DDR5 | 6000MHz | CL36 | Desktop RAM",
          priceUSD: 269,
          image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FG.SKILL-Trident-Z5-Neo-RGB-32GB-DDR5-6000-MHz-1j19Ax.webp&w=1920&q=100",
          specs: {
            Brand: "G.SKILL",
            TotalMemory: "16 GB (2x8GB)",
            MemoryType: "DDR5",
            Frequency: "6000 MHz",
            CASLatency: "CL36-36-36-76",
            Voltage: "1.25 V",
            Compatibility: "Desktop",
            IntelSupportedChipsets: "Z690 / Z790",
            AMDSupportedChipsets: "X670 / B650",
            PartNumber: "F5-6000J3636F16GX2-TZ5N",
            Warranty: "12 Ay"
          }
        },
        {
          id: 234,
          name: "Klevv Cras XR RGB 32GB (2x16GB) DDR4 3600MHz",
          description: "2x16GB | DDR4 | 3600MHz | CL18 | Desktop RAM",
          priceUSD: 309,
          image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FKlevv-Cras-XR-RGB-DDR4-32GBcGdm9.webp&w=1920&q=100",
          specs: {
            Brand: "Klevv",
            TotalMemory: "32 GB (2x16GB)",
            MemoryType: "DDR4",
            Frequency: "3600 MHz",
            CASLatency: "CL18-20-20-40",
            Voltage: "1.35 V",
            Compatibility: "Desktop",
            IntelSupportedChipsets: "Z490 / Z590 / Z690",
            AMDSupportedChipsets: "B550 / X570",
            PartNumber: "KX4U3600C18D32XR",
            Warranty: "12 Ay"
          }
        },
        {
          id: 235,
          name: "Corsair Dominator Platinum RGB 32GB (2x16GB) DDR5 5200MHz",
          description: "2x16GB | DDR5 | 5200MHz | CL38 | Desktop RAM",
          priceUSD: 479,
          image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FCorsair-Dominator-Platinum-RGB-32GB_1W7unW.webp&w=1920&q=100",
          specs: {
            Brand: "Corsair",
            TotalMemory: "32 GB (2x16GB)",
            MemoryType: "DDR5",
            Frequency: "5200 MHz",
            CASLatency: "CL38-38-38-76",
            Voltage: "1.25 V",
            Compatibility: "Desktop",
            IntelSupportedChipsets: "Z690 / Z790",
            AMDSupportedChipsets: "X670 / B650",
            PartNumber: "CMT32GX5M2K5200C38",
            Warranty: "12 Ay"
          }
        },
        {
          id: 236,
          name: "TeamGroup T-Force Delta RGB 16GB (2x8GB) DDR5 6000MHz",
          description: "2x8GB | DDR5 | 6000MHz | CL38 | Desktop RAM",
          priceUSD: 249,
          image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FTeamgroup-T-Force-Delta-RGB-32GB-6000MHz-1J8YOp.webp&w=1920&q=100",
          specs: {
            Brand: "TeamGroup",
            TotalMemory: "16 GB (2x8GB)",
            MemoryType: "DDR5",
            Frequency: "6000 MHz",
            CASLatency: "CL38-38-38-76",
            Voltage: "1.25 V",
            Compatibility: "Desktop",
            IntelSupportedChipsets: "Z690 / Z790",
            AMDSupportedChipsets: "X670 / B650",
            PartNumber: "TF11D416G6000HC38ADC01",
            Warranty: "12 Ay"
          }
        },
        {
          id: 237,
          name: "Crucial Gaming OC Pro 16GB (2x8GB) DDR4 3600MHz",
          description: "2x8GB | DDR4 | 3600MHz | CL16 | Desktop RAM",
          priceUSD: 179,
          image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FCrucial-Gaming-OC-Pro-32GB-2WpP3P.webp&w=1920&q=100",
          specs: {
            Brand: "Crucial",
            TotalMemory: "16 GB (2x8GB)",
            MemoryType: "DDR4",
            Frequency: "3600 MHz",
            CASLatency: "CL16-18-18-36",
            Voltage: "1.35 V",
            Compatibility: "Desktop",
            IntelSupportedChipsets: "Z490 / Z590 / Z690",
            AMDSupportedChipsets: "B550 / X570",
            PartNumber: "CT2K8G4DFD8366",
            Warranty: "12 Ay"
          }
        }
      ],                   
      hardDisks: [
        {
          id: 238,
          name: "Seagate SkyHawk 1TB 3.5\" Hard Disk",
          description: "1TB | 5400 RPM | 3.5 inch | SATA 6Gb/s",
          priceUSD: 59,
          image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FSeagate-SkyHawk-1TB-1WljXU.webp&w=1920&q=100",
          specs: {
            Capacity: "1 TB",
            FormFactor: "3.5 inch",
            Interface: "SATA 6Gb/s",
            RotationSpeed: "5400 RPM",
            Warranty: "12 Ay"
          }
        },
        {
          id: 239,
          name: "Seagate SkyHawk 2TB 3.5\" Hard Disk",
          description: "2TB | 5400 RPM | 3.5 inch | SATA 6Gb/s",
          priceUSD: 79,
          image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2F1wTflD.webp&w=1920&q=100",
          specs: {
            Capacity: "2 TB",
            FormFactor: "3.5 inch",
            Interface: "SATA 6Gb/s",
            RotationSpeed: "5400 RPM",
            Warranty: "12 Ay"
          }
        },
        {
          id: 240,
          name: "WD Purple 4TB 3.5\" Surveillance HDD",
          description: "4TB | 5400 RPM | 3.5 inch | SATA 6Gb/s",
          priceUSD: 109,
          image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FWD-Purple-Surveillance-8TB-Hard-DrivepCWeP.webp&w=1920&q=100",
          specs: {
            Capacity: "4 TB",
            FormFactor: "3.5 inch",
            Interface: "SATA 6Gb/s",
            RotationSpeed: "5400 RPM",
            Warranty: "12 Ay"
          }
        },
        {
          id: 241,
          name: "WD Purple 2TB 3.5\" Surveillance HDD",
          description: "2TB | 5400 RPM | 3.5 inch | SATA 6Gb/s",
          priceUSD: 69,
          image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FWestern-Digital-purple-2TB_2seVwv.webp&w=1920&q=100",
          specs: {
            Capacity: "2 TB",
            FormFactor: "3.5 inch",
            Interface: "SATA 6Gb/s",
            RotationSpeed: "5400 RPM",
            Warranty: "12 Ay"
          }
        },
        {
          id: 242,
          name: "Seagate SkyHawk 3TB 3.5\" Hard Disk",
          description: "3TB | 5400 RPM | 3.5 inch | SATA 6Gb/s",
          priceUSD: 99,
          image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2F125b0faf-0c87-45f7-abde-bbdd25e6712e.webp&w=1920&q=100",
          specs: {
            Capacity: "3 TB",
            FormFactor: "3.5 inch",
            Interface: "SATA 6Gb/s",
            RotationSpeed: "5400 RPM",
            Warranty: "12 Ay"
          }
        },
        {
          id: 243,
          name: "WD Purple 6TB 3.5\" Surveillance HDD",
          description: "6TB | 5400 RPM | 3.5 inch | SATA 6Gb/s",
          priceUSD: 149,
          image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FWD-Purple-Surveillance-8TB-Hard-DrivepCWeP.webp&w=1920&q=100",
          specs: {
            Capacity: "6 TB",
            FormFactor: "3.5 inch",
            Interface: "SATA 6Gb/s",
            RotationSpeed: "5400 RPM",
            Warranty: "12 Ay"
          }
        },
        {
          id: 244,
          name: "Seagate SkyHawk 4TB 3.5\" Hard Disk",
          description: "4TB | 5400 RPM | 3.5 inch | SATA 6Gb/s",
          priceUSD: 129,
          image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2F1wTflD.webp&w=1920&q=100",
          specs: {
            Capacity: "4 TB",
            FormFactor: "3.5 inch",
            Interface: "SATA 6Gb/s",
            RotationSpeed: "5400 RPM",
            Warranty: "12 Ay"
          }
        },
        {
          id: 245,
          name: "WD Purple 8TB 3.5\" Surveillance HDD",
          description: "8TB | 5400 RPM | 3.5 inch | SATA 6Gb/s",
          priceUSD: 199,
          image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FWD-Purple-Surveillance-8TB-Hard-DrivepCWeP.webp&w=1920&q=100",
          specs: {
            Capacity: "8 TB",
            FormFactor: "3.5 inch",
            Interface: "SATA 6Gb/s",
            RotationSpeed: "5400 RPM",
            Warranty: "12 Ay"
          }
        },
        {
          id: 246,
          name: "Seagate SkyHawk 5TB 3.5\" Hard Disk",
          description: "5TB | 5400 RPM | 3.5 inch | SATA 6Gb/s",
          priceUSD: 159,
          image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2F125b0faf-0c87-45f7-abde-bbdd25e6712e.webp&w=1920&q=100",
          specs: {
            Capacity: "5 TB",
            FormFactor: "3.5 inch",
            Interface: "SATA 6Gb/s",
            RotationSpeed: "5400 RPM",
            Warranty: "12 Ay"
          }
        },
        {
          id: 247,
          name: "WD Purple 10TB 3.5\" Surveillance HDD",
          description: "10TB | 5400 RPM | 3.5 inch | SATA 6Gb/s",
          priceUSD: 249,
          image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FWestern-Digital-purple-2TB_2seVwv.webp&w=1920&q=100",
          specs: {
            Capacity: "10 TB",
            FormFactor: "3.5 inch",
            Interface: "SATA 6Gb/s",
            RotationSpeed: "5400 RPM",
            Warranty: "12 Ay"
          }
        }
      ],            
      videoCards: [
        {
          id: 248,
          name: "Gigabyte GeForce RTX 5060 Ti WINDFORCE MAX OC 16GB",
          description: "RTX 5060 Ti | 16GB GDDR7 | 28 GBps | 128 bit | 2587 MHz | PCI-E 5.0",
          priceUSD: 1589,
          image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FGigabyte-GeForce-RTX-5060-Ti-WINDFORCE-MAX-OC-16GB-1i6bX5.webp&w=1920&q=100",
          specs: {
            GraphicEngine: "GeForce RTX™ 5060 Ti",
            VideoMemory: "16GB GDDR7",
            CudaCores: 4608,
            MemorySpeed: "28 GBps",
            MemoryInterface: "128 bit",
            CoreClock: "2587 MHz",
            BoostClock: "2572 MHz",
            Interface: "PCI-E 5.0",
            PowerConnectors: "1x 8-pin",
            Warranty: "12 Ay"
          }
        },
        {
          id: 249,
          name: "ASUS ROG Astral GeForce RTX 5090 32GB OC Edition",
          description: "RTX 5090 | 32GB GDDR7 | 32 GBps | 256 bit | 2700 MHz | PCI-E 5.0",
          priceUSD: 2899,
          image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FASUS-ROG-Astral-GeForce-RTX-5090-32GB-GDDR7-OC-Edition-1E_W8m.webp&w=1920&q=100",
          specs: {
            GraphicEngine: "GeForce RTX™ 5090",
            VideoMemory: "32GB GDDR7",
            CudaCores: 8192,
            MemorySpeed: "32 GBps",
            MemoryInterface: "256 bit",
            CoreClock: "2700 MHz",
            BoostClock: "2750 MHz",
            Interface: "PCI-E 5.0",
            PowerConnectors: "2x 8-pin",
            Warranty: "12 Ay"
          }
        },
        {
          id: 250,
          name: "ASUS TUF Gaming GeForce RTX 5070 Ti 16GB OC",
          description: "RTX 5070 Ti | 16GB GDDR7 | 30 GBps | 192 bit | 2600 MHz | PCI-E 5.0",
          priceUSD: 1699,
          image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FASUS-TUF-Gaming-GeForce-RTX-5070-Ti-16GB-OC-1DrXp7.webp&w=1920&q=100",
          specs: {
            GraphicEngine: "GeForce RTX™ 5070 Ti",
            VideoMemory: "16GB GDDR7",
            CudaCores: 5120,
            MemorySpeed: "30 GBps",
            MemoryInterface: "192 bit",
            CoreClock: "2600 MHz",
            BoostClock: "2650 MHz",
            Interface: "PCI-E 5.0",
            PowerConnectors: "2x 8-pin",
            Warranty: "12 Ay"
          }
        },
        {
          id: 251,
          name: "MSI GeForce RTX 5070 Ti 16G VENTUS 3X OC",
          description: "RTX 5070 Ti | 16GB GDDR7 | 30 GBps | 192 bit | 2610 MHz | PCI-E 5.0",
          priceUSD: 1729,
          image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FMSI-GeForce-RTX-5070-Ti-16G-VENTUS-3X-OC-1eBbSa.webp&w=1920&q=100",
          specs: {
            GraphicEngine: "GeForce RTX™ 5070 Ti",
            VideoMemory: "16GB GDDR7",
            CudaCores: 5120,
            MemorySpeed: "30 GBps",
            MemoryInterface: "192 bit",
            CoreClock: "2610 MHz",
            BoostClock: "2660 MHz",
            Interface: "PCI-E 5.0",
            PowerConnectors: "2x 8-pin",
            Warranty: "12 Ay"
          }
        },
        {
          id: 252,
          name: "Gigabyte GeForce RTX 5070 Gaming OC 12GB",
          description: "RTX 5070 | 12GB GDDR7 | 28 GBps | 128 bit | 2500 MHz | PCI-E 5.0",
          priceUSD: 1299,
          image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FGigabyte-GeForce-RTX-5070-Gaming-OC-12GB-1mqaV5.webp&w=1920&q=100",
          specs: {
            GraphicEngine: "GeForce RTX™ 5070",
            VideoMemory: "12GB GDDR7",
            CudaCores: 4096,
            MemorySpeed: "28 GBps",
            MemoryInterface: "128 bit",
            CoreClock: "2500 MHz",
            BoostClock: "2550 MHz",
            Interface: "PCI-E 5.0",
            PowerConnectors: "1x 8-pin",
            Warranty: "12 Ay"
          }
        },
        {
          id: 253,
          name: "ASUS PRIME GeForce RTX 5070 12GB GDDR7",
          description: "RTX 5070 | 12GB GDDR7 | 28 GBps | 128 bit | 2480 MHz | PCI-E 5.0",
          priceUSD: 1249,
          image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FASUS-PRIME-GeForce-RTX-5070-12GB-GDDR7-1WA0lw.webp&w=1920&q=100",
          specs: {
            GraphicEngine: "GeForce RTX™ 5070",
            VideoMemory: "12GB GDDR7",
            CudaCores: 4096,
            MemorySpeed: "28 GBps",
            MemoryInterface: "128 bit",
            CoreClock: "2480 MHz",
            BoostClock: "2530 MHz",
            Interface: "PCI-E 5.0",
            PowerConnectors: "1x 8-pin",
            Warranty: "12 Ay"
          }
        },
        {
          id: 254,
          name: "MSI GeForce RTX 5070 Ti 16G Inspire 3X OC Plus",
          description: "RTX 5070 Ti | 16GB GDDR7 | 30 GBps | 192 bit | 2620 MHz | PCI-E 5.0",
          priceUSD: 1749,
          image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FMSI-GeForce-RTX-5070-Ti-16G-Inspire-3X-OC-Plus-1CjmiJ.webp&w=1920&q=100",
          specs: {
            GraphicEngine: "GeForce RTX™ 5070 Ti",
            VideoMemory: "16GB GDDR7",
            CudaCores: 5120,
            MemorySpeed: "30 GBps",
            MemoryInterface: "192 bit",
            CoreClock: "2620 MHz",
            BoostClock: "2670 MHz",
            Interface: "PCI-E 5.0",
            PowerConnectors: "2x 8-pin",
            Warranty: "12 Ay"
          }
        },
        {
          id: 255,
          name: "ASUS TUF Gaming GeForce RTX 5070 12GB GDDR7 OC Edition",
          description: "RTX 5070 | 12GB GDDR7 | 28 GBps | 128 bit | 2490 MHz | PCI-E 5.0",
          priceUSD: 1279,
          image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FASUS-TUF-Gaming-GeForce-RTX-5070-12GB-GDDR7-OC-Edition-1qQr4k.webp&w=1920&q=100",
          specs: {
            GraphicEngine: "GeForce RTX™ 5070",
            VideoMemory: "12GB GDDR7",
            CudaCores: 4096,
            MemorySpeed: "28 GBps",
            MemoryInterface: "128 bit",
            CoreClock: "2490 MHz",
            BoostClock: "2540 MHz",
            Interface: "PCI-E 5.0",
            PowerConnectors: "1x 8-pin",
            Warranty: "12 Ay"
          }
        },
        {
          id: 256,
          name: "MSI GeForce RTX 5070 12G SHADOW 3X OC",
          description: "RTX 5070 | 12GB GDDR7 | 28 GBps | 128 bit | 2475 MHz | PCI-E 5.0",
          priceUSD: 1239,
          image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FMSI-GeForce-RTX-5070-12G-SHADOW-3X-OC-12bjEQ.webp&w=1920&q=100",
          specs: {
            GraphicEngine: "GeForce RTX™ 5070",
            VideoMemory: "12GB GDDR7",
            CudaCores: 4096,
            MemorySpeed: "28 GBps",
            MemoryInterface: "128 bit",
            CoreClock: "2475 MHz",
            BoostClock: "2525 MHz",
            Interface: "PCI-E 5.0",
            PowerConnectors: "1x 8-pin",
            Warranty: "12 Ay"
          }
        },
        {
          id: 257,
          name: "ASUS Prime GeForce RTX 5060 8GB GDDR7 OC Edition",
          description: "RTX 5060 | 8GB GDDR7 | 24 GBps | 128 bit | 2400 MHz | PCI-E 5.0",
          priceUSD: 999,
          image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FASUS-Prime-GeForce-RTX-5060-8GB-GDDR7-OC-Edition-1SqCBX.webp&w=1920&q=100",
          specs: {
            GraphicEngine: "GeForce RTX™ 5060",
            VideoMemory: "8GB GDDR7",
            CudaCores: 3072,
            MemorySpeed: "24 GBps",
            MemoryInterface: "128 bit",
            CoreClock: "2400 MHz",
            BoostClock: "2450 MHz",
            Interface: "PCI-E 5.0",
            PowerConnectors: "1x 8-pin",
            Warranty: "12 Ay"
          }
        },
        {
          id: 258,
          name: "MSI GeForce RTX 5070 12G SHADOW 3X OC",
          description: "RTX 5070 | 12GB GDDR7 | 28 GBps | 128 bit | 2475 MHz | PCI-E 5.0",
          priceUSD: 1239,
          image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FMSI-GeForce-RTX-5070-12G-SHADOW-3X-OC-12bjEQ.webp&w=1920&q=100",
          specs: {
            GraphicEngine: "GeForce RTX™ 5070",
            VideoMemory: "12GB GDDR7",
            CudaCores: 4096,
            MemorySpeed: "28 GBps",
            MemoryInterface: "128 bit",
            CoreClock: "2475 MHz",
            BoostClock: "2525 MHz",
            Interface: "PCI-E 5.0",
            PowerConnectors: "1x 8-pin",
            Warranty: "12 Ay"
          }
        },
        {
          id: 259,
          name: "ASUS Prime GeForce RTX 5060 8GB GDDR7 OC Edition",
          description: "RTX 5060 | 8GB GDDR7 | 24 GBps | 128 bit | 2400 MHz | PCI-E 5.0",
          priceUSD: 999,
          image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FASUS-Prime-GeForce-RTX-5060-8GB-GDDR7-OC-Edition-1SqCBX.webp&w=1920&q=100",
          specs: {
            GraphicEngine: "GeForce RTX™ 5060",
            VideoMemory: "8GB GDDR7",
            CudaCores: 3072,
            MemorySpeed: "24 GBps",
            MemoryInterface: "128 bit",
            CoreClock: "2400 MHz",
            BoostClock: "2450 MHz",
            Interface: "PCI-E 5.0",
            PowerConnectors: "1x 8-pin",
            Warranty: "12 Ay"
          }
        },
        {
          id: 260,
          name: "ASUS ROG Astral GeForce RTX 5080 16GB OC Edition",
          description: "RTX 5080 | 16GB GDDR7 | 30 GBps | 192 bit | 2650 MHz | PCI-E 5.0",
          priceUSD: 1899,
          image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FASUS-ROG-Astral-GeForce-RTX-5080-16GB-GDDR7-OC-Edition-1MD34s.webp&w=1920&q=100",
          specs: {
            GraphicEngine: "GeForce RTX™ 5080",
            VideoMemory: "16GB GDDR7",
            CudaCores: 6144,
            MemorySpeed: "30 GBps",
            MemoryInterface: "192 bit",
            CoreClock: "2650 MHz",
            BoostClock: "2700 MHz",
            Interface: "PCI-E 5.0",
            PowerConnectors: "2x 8-pin",
            Warranty: "12 Ay"
          }
        },
        {
          id: 261,
          name: "MSI GeForce RTX 5070 12GB Vanguard SOC Launch",
          description: "RTX 5070 | 12GB GDDR7 | 28 GBps | 128 bit | 2480 MHz | PCI-E 5.0",
          priceUSD: 1259,
          image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FMSI-GeForce-RTX-5070-12GB-Vanguard-SOC-Launch-1ifQBK.webp&w=1920&q=100",
          specs: {
            GraphicEngine: "GeForce RTX™ 5070",
            VideoMemory: "12GB GDDR7",
            CudaCores: 4096,
            MemorySpeed: "28 GBps",
            MemoryInterface: "128 bit",
            CoreClock: "2480 MHz",
            BoostClock: "2530 MHz",
            Interface: "PCI-E 5.0",
            PowerConnectors: "1x 8-pin",
            Warranty: "12 Ay"
          }
        },
        {
          id: 262,
          name: "Gigabyte GeForce RTX 5070 Gaming OC 12GB",
          description: "RTX 5070 | 12GB GDDR7 | 28 GBps | 128 bit | 2500 MHz | PCI-E 5.0",
          priceUSD: 1299,
          image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FGigabyte-GeForce-RTX-5070-Gaming-OC-12GB-1mqaV5.webp&w=1920&q=100",
          specs: {
            GraphicEngine: "GeForce RTX™ 5070",
            VideoMemory: "12GB GDDR7",
            CudaCores: 4096,
            MemorySpeed: "28 GBps",
            MemoryInterface: "128 bit",
            CoreClock: "2500 MHz",
            BoostClock: "2550 MHz",
            Interface: "PCI-E 5.0",
            PowerConnectors: "1x 8-pin",
            Warranty: "12 Ay"
          }
        },
        {
          id: 263,
          name: "ASUS PRIME GeForce RTX 5070 12GB GDDR7",
          description: "RTX 5070 | 12GB GDDR7 | 28 GBps | 128 bit | 2480 MHz | PCI-E 5.0",
          priceUSD: 1249,
          image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FASUS-PRIME-GeForce-RTX-5070-12GB-GDDR7-1WA0lw.webp&w=1920&q=100",
          specs: {
            GraphicEngine: "GeForce RTX™ 5070",
            VideoMemory: "12GB GDDR7",
            CudaCores: 4096,
            MemorySpeed: "28 GBps",
            MemoryInterface: "128 bit",
            CoreClock: "2480 MHz",
            BoostClock: "2530 MHz",
            Interface: "PCI-E 5.0",
            PowerConnectors: "1x 8-pin",
            Warranty: "12 Ay"
          }
        },
        {
          id: 264,
          name: "MSI GeForce RTX 5070 Ti 16G Inspire 3X OC Plus",
          description: "RTX 5070 Ti | 16GB GDDR7 | 30 GBps | 192 bit | 2620 MHz | PCI-E 5.0",
          priceUSD: 1749,
          image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FMSI-GeForce-RTX-5070-Ti-16G-Inspire-3X-OC-Plus-1CjmiJ.webp&w=1920&q=100",
          specs: {
            GraphicEngine: "GeForce RTX™ 5070 Ti",
            VideoMemory: "16GB GDDR7",
            CudaCores: 5120,
            MemorySpeed: "30 GBps",
            MemoryInterface: "192 bit",
            CoreClock: "2620 MHz",
            BoostClock: "2670 MHz",
            Interface: "PCI-E 5.0",
            PowerConnectors: "2x 8-pin",
            Warranty: "12 Ay"
          }
        },
        {
          id: 265,
          name: "ASUS TUF Gaming GeForce RTX 5070 12GB GDDR7 OC Edition",
          description: "RTX 5070 | 12GB GDDR7 | 28 GBps | 128 bit | 2490 MHz | PCI-E 5.0",
          priceUSD: 1279,
          image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FASUS-TUF-Gaming-GeForce-RTX-5070-12GB-GDDR7-OC-Edition-1qQr4k.webp&w=1920&q=100",
          specs: {
            GraphicEngine: "GeForce RTX™ 5070",
            VideoMemory: "12GB GDDR7",
            CudaCores: 4096,
            MemorySpeed: "28 GBps",
            MemoryInterface: "128 bit",
            CoreClock: "2490 MHz",
            BoostClock: "2540 MHz",
            Interface: "PCI-E 5.0",
            PowerConnectors: "1x 8-pin",
            Warranty: "12 Ay"
          }
        },
        {
          id: 266,
          name: "MSI GeForce RTX 5070 Ti 16GB OC VENTUS 3X",
          description: "RTX 5070 Ti | 16GB GDDR7 | 30 GBps | 192 bit | 2610 MHz | PCI-E 5.0",
          priceUSD: 1729,
          image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FMSI-GeForce-RTX-5070-Ti-16G-VENTUS-3X-OC-1eBbSa.webp&w=1920&q=100",
          specs: {
            GraphicEngine: "GeForce RTX™ 5070 Ti",
            VideoMemory: "16GB GDDR7",
            CudaCores: 5120,
            MemorySpeed: "30 GBps",
            MemoryInterface: "192 bit",
            CoreClock: "2610 MHz",
            BoostClock: "2660 MHz",
            Interface: "PCI-E 5.0",
            PowerConnectors: "2x 8-pin",
            Warranty: "12 Ay"
          }
        },
        {
          id: 267,
          name: "ASUS ROG Astral GeForce RTX 5090 32GB GDDR7 OC Edition",
          description: "RTX 5090 | 32GB GDDR7 | 32 GBps | 256 bit | 2700 MHz | PCI-E 5.0",
          priceUSD: 2899,
          image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FASUS-ROG-Astral-GeForce-RTX-5090-32GB-GDDR7-OC-Edition-1E_W8m.webp&w=1920&q=100",
          specs: {
            GraphicEngine: "GeForce RTX™ 5090",
            VideoMemory: "32GB GDDR7",
            CudaCores: 8192,
            MemorySpeed: "32 GBps",
            MemoryInterface: "256 bit",
            CoreClock: "2700 MHz",
            BoostClock: "2750 MHz",
            Interface: "PCI-E 5.0",
            PowerConnectors: "2x 8-pin",
            Warranty: "12 Ay"
          }
        },
        {
          id: 268,
          name: "Palit GeForce RTX 5070 GamingPro S 12GB",
          description: "RTX 5070 | 12GB GDDR7 | 28 GBps | 128 bit | 2485 MHz | PCI-E 5.0",
          priceUSD: 1289,
          image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FPalit-GeForce-RTX-5070-GamingPro-S-12GB6OWKJ.webp&w=1920&q=100",
          specs: {
            GraphicEngine: "GeForce RTX™ 5070",
            VideoMemory: "12GB GDDR7",
            CudaCores: 4096,
            MemorySpeed: "28 GBps",
            MemoryInterface: "128 bit",
            CoreClock: "2485 MHz",
            BoostClock: "2535 MHz",
            Interface: "PCI-E 5.0",
            PowerConnectors: "1x 8-pin",
            Warranty: "12 Ay"
          }
        },
        {
          id: 269,
          name: "ASUS TUF Gaming GeForce RTX 5070 Ti 16GB OC Edition",
          description: "RTX 5070 Ti | 16GB GDDR7 | 30 GBps | 192 bit | 2625 MHz | PCI-E 5.0",
          priceUSD: 1759,
          image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FASUS-TUF-Gaming-GeForce-RTX-5070-Ti-16GB-OC-1DrXp7.webp&w=1920&q=100",
          specs: {
            GraphicEngine: "GeForce RTX™ 5070 Ti",
            VideoMemory: "16GB GDDR7",
            CudaCores: 5120,
            MemorySpeed: "30 GBps",
            MemoryInterface: "192 bit",
            CoreClock: "2625 MHz",
            BoostClock: "2675 MHz",
            Interface: "PCI-E 5.0",
            PowerConnectors: "2x 8-pin",
            Warranty: "12 Ay"
          }
        },
        {
          id: 270,
          name: "MSI GeForce RTX 5070 Ti 16G VENTUS 3X OC",
          description: "RTX 5070 Ti | 16GB GDDR7 | 30 GBps | 192 bit | 2615 MHz | PCI-E 5.0",
          priceUSD: 1739,
          image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FMSI-GeForce-RTX-5070-Ti-16G-VENTUS-3X-OC-1eBbSa.webp&w=1920&q=100",
          specs: {
            GraphicEngine: "GeForce RTX™ 5070 Ti",
            VideoMemory: "16GB GDDR7",
            CudaCores: 5120,
            MemorySpeed: "30 GBps",
            MemoryInterface: "192 bit",
            CoreClock: "2615 MHz",
            BoostClock: "2665 MHz",
            Interface: "PCI-E 5.0",
            PowerConnectors: "2x 8-pin",
            Warranty: "12 Ay"
          }
        },
        {
          id: 271,
          name: "Gigabyte GeForce RTX 5070 Ti WINDFORCE OC 16GB",
          description: "RTX 5070 Ti | 16GB GDDR7 | 30 GBps | 192 bit | 2620 MHz | PCI-E 5.0",
          priceUSD: 1745,
          image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FGigabyte-GeForce-RTX-5070-Gaming-OC-12GB-1mqaV5.webp&w=1920&q=100",
          specs: {
            GraphicEngine: "GeForce RTX™ 5070 Ti",
            VideoMemory: "16GB GDDR7",
            CudaCores: 5120,
            MemorySpeed: "30 GBps",
            MemoryInterface: "192 bit",
            CoreClock: "2620 MHz",
            BoostClock: "2670 MHz",
            Interface: "PCI-E 5.0",
            PowerConnectors: "2x 8-pin",
            Warranty: "12 Ay"
          }
        },
        {
          id: 272,
          name: "ASUS Prime GeForce RTX 5070 12GB GDDR7",
          description: "RTX 5070 | 12GB GDDR7 | 28 GBps | 128 bit | 2480 MHz | PCI-E 5.0",
          priceUSD: 1259,
          image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FASUS-PRIME-GeForce-RTX-5070-12GB-GDDR7-1WA0lw.webp&w=1920&q=100",
          specs: {
            GraphicEngine: "GeForce RTX™ 5070",
            VideoMemory: "12GB GDDR7",
            CudaCores: 4096,
            MemorySpeed: "28 GBps",
            MemoryInterface: "128 bit",
            CoreClock: "2480 MHz",
            BoostClock: "2530 MHz",
            Interface: "PCI-E 5.0",
            PowerConnectors: "1x 8-pin",
            Warranty: "12 Ay"
          }
        },
        {
          id: 273,
          name: "MSI GeForce RTX 5070 Ti 16GB OC 3X",
          description: "RTX 5070 Ti | 16GB GDDR7 | 30 GBps | 192 bit | 2610 MHz | PCI-E 5.0",
          priceUSD: 1729,
          image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FMSI-GeForce-RTX-5070-Ti-16G-Inspire-3X-OC-Plus-1CjmiJ.webp&w=1920&q=100",
          specs: {
            GraphicEngine: "GeForce RTX™ 5070 Ti",
            VideoMemory: "16GB GDDR7",
            CudaCores: 5120,
            MemorySpeed: "30 GBps",
            MemoryInterface: "192 bit",
            CoreClock: "2610 MHz",
            BoostClock: "2660 MHz",
            Interface: "PCI-E 5.0",
            PowerConnectors: "2x 8-pin",
            Warranty: "12 Ay"
          }
        },
        {
          id: 274,
          name: "ASUS ROG Astral GeForce RTX 5090 32GB OC Edition",
          description: "RTX 5090 | 32GB GDDR7 | 32 GBps | 256 bit | 2700 MHz | PCI-E 5.0",
          priceUSD: 2899,
          image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FASUS-ROG-Astral-GeForce-RTX-5090-32GB-GDDR7-OC-Edition-1E_W8m.webp&w=1920&q=100",
          specs: {
            GraphicEngine: "GeForce RTX™ 5090",
            VideoMemory: "32GB GDDR7",
            CudaCores: 8192,
            MemorySpeed: "32 GBps",
            MemoryInterface: "256 bit",
            CoreClock: "2700 MHz",
            BoostClock: "2750 MHz",
            Interface: "PCI-E 5.0",
            PowerConnectors: "2x 8-pin",
            Warranty: "12 Ay"
          }
        },
        {
          id: 275,
          name: "MSI GeForce RTX 5070 Ti 16G VENTUS 3X OC Plus",
          description: "RTX 5070 Ti | 16GB GDDR7 | 30 GBps | 192 bit | 2620 MHz | PCI-E 5.0",
          priceUSD: 1749,
          image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FMSI-GeForce-RTX-5070-Ti-16G-VENTUS-3X-OC-1eBbSa.webp&w=1920&q=100",
          specs: {
            GraphicEngine: "GeForce RTX™ 5070 Ti",
            VideoMemory: "16GB GDDR7",
            CudaCores: 5120,
            MemorySpeed: "30 GBps",
            MemoryInterface: "192 bit",
            CoreClock: "2620 MHz",
            BoostClock: "2670 MHz",
            Interface: "PCI-E 5.0",
            PowerConnectors: "2x 8-pin",
            Warranty: "12 Ay"
          }
        },
        {
          id: 276,
          name: "ASUS TUF Gaming GeForce RTX 5070 12GB GDDR7 OC Edition",
          description: "RTX 5070 | 12GB GDDR7 | 28 GBps | 128 bit | 2490 MHz | PCI-E 5.0",
          priceUSD: 1279,
          image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FASUS-TUF-Gaming-GeForce-RTX-5070-12GB-GDDR7-OC-Edition-1qQr4k.webp&w=1920&q=100",
          specs: {
            GraphicEngine: "GeForce RTX™ 5070",
            VideoMemory: "12GB GDDR7",
            CudaCores: 4096,
            MemorySpeed: "28 GBps",
            MemoryInterface: "128 bit",
            CoreClock: "2490 MHz",
            BoostClock: "2540 MHz",
            Interface: "PCI-E 5.0",
            PowerConnectors: "1x 8-pin",
            Warranty: "12 Ay"
          }
        },
        {
          id: 277,
          name: "ASUS ROG Astral GeForce RTX 5080 16GB OC Edition",
          description: "RTX 5080 | 16GB GDDR7 | 30 GBps | 192 bit | 2650 MHz | PCI-E 5.0",
          priceUSD: 1899,
          image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FASUS-ROG-Astral-GeForce-RTX-5080-16GB-GDDR7-OC-Edition-1MD34s.webp&w=1920&q=100",
          specs: {
            GraphicEngine: "GeForce RTX™ 5080",
            VideoMemory: "16GB GDDR7",
            CudaCores: 6144,
            MemorySpeed: "30 GBps",
            MemoryInterface: "192 bit",
            CoreClock: "2650 MHz",
            BoostClock: "2700 MHz",
            Interface: "PCI-E 5.0",
            PowerConnectors: "2x 8-pin",
            Warranty: "12 Ay"
          }
        }
      ],            
      motherboards: [
        {
          id: 278,
          name: "ASUS ROG Strix X870-A Gaming Wi-Fi DDR5",
          description: "AM5 | 4x DDR5 | 256GB | 4x M.2 | 2x SATA 6Gb/s | ATX",
          priceUSD: 649,
          image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FASUS-ROG-Strix-X870-A-Gaming-Wi-Fi-DDR5-1dhnJ_.webp&w=1920&q=100",
          specs: {
            CPUCompatibility: "AMD Ryzen™ 9000, 8000, 7000 Series",
            Socket: "AM5",
            Chipset: "AMD X870",
            MemorySlots: "4x DDR5 DIMM",
            MaxMemory: "256GB",
            MemoryOC: "8000+ MHz",
            StorageSlots: "4x M.2, 2x SATA 6Gb/s",
            PCIeSlots: "1x PCIe 5.0 x16, 2x PCIe 4.0 x16",
            WiFi: "Wi-Fi 7",
            BIOS: "256 Mb Flash ROM, UEFI AMI BIOS",
            FormFactor: "ATX | 305x244mm",
            Warranty: "12 Ay"
          }
        },
        {
          id: 279,
          name: "ASUS Prime B650M-R DDR5",
          description: "AM5 | 2x DDR5 | 128GB | 2x M.2 | 4x SATA 6Gb/s | Micro-ATX",
          priceUSD: 249,
          image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FAsus-Prime-B650M-R-Motherboard-1lrSY0.webp&w=1920&q=100",
          specs: {
            CPUCompatibility: "AMD Ryzen™ 7000 Series",
            Socket: "AM5",
            Chipset: "AMD B650",
            MemorySlots: "2x DDR5 DIMM",
            MaxMemory: "128GB",
            MemoryOC: "6400 MHz",
            StorageSlots: "2x M.2, 4x SATA 6Gb/s",
            PCIeSlots: "1x PCIe 5.0 x16, 1x PCIe 4.0 x4",
            WiFi: "Нет",
            BIOS: "128 Mb Flash ROM, UEFI BIOS",
            FormFactor: "Micro-ATX | 244x244mm",
            Warranty: "12 Ay"
          }
        },
        {
          id: 280,
          name: "MSI B760 Gaming Plus Wi-Fi",
          description: "LGA1700 | 4x DDR4 | 128GB | 3x M.2 | 6x SATA 6Gb/s | ATX",
          priceUSD: 319,
          image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FMSI-B760-Gaming-Plus-WiFi-1DfJtx.webp&w=1920&q=100",
          specs: {
            CPUCompatibility: "Intel 12th & 13th Gen",
            Socket: "LGA1700",
            Chipset: "Intel B760",
            MemorySlots: "4x DDR4 DIMM",
            MaxMemory: "128GB",
            MemoryOC: "5200 MHz",
            StorageSlots: "3x M.2, 6x SATA 6Gb/s",
            PCIeSlots: "2x PCIe 5.0 x16, 1x PCIe 3.0 x1",
            WiFi: "Wi-Fi 6",
            BIOS: "256 Mb Flash ROM, UEFI AMI BIOS",
            FormFactor: "ATX | 305x244mm",
            Warranty: "12 Ay"
          }
        },
        {
          id: 281,
          name: "ASUS Prime B760M-A DDR5",
          description: "LGA1700 | 2x DDR5 | 64GB | 2x M.2 | 4x SATA 6Gb/s | Micro-ATX",
          priceUSD: 199,
          image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FASUS-Prime-B760M-A-DDR5-Motherboard_1uamHH.webp&w=1920&q=100",
          specs: {
            CPUCompatibility: "Intel 12th & 13th Gen",
            Socket: "LGA1700",
            Chipset: "Intel B760",
            MemorySlots: "2x DDR5 DIMM",
            MaxMemory: "64GB",
            MemoryOC: "5600 MHz",
            StorageSlots: "2x M.2, 4x SATA 6Gb/s",
            PCIeSlots: "1x PCIe 5.0 x16, 1x PCIe 4.0 x4",
            WiFi: "Нет",
            BIOS: "128 Mb Flash ROM, UEFI BIOS",
            FormFactor: "Micro-ATX | 244x244mm",
            Warranty: "12 Ay"
          }
        },
        {
          id: 282,
          name: "MSI MPG B550 Gaming Plus",
          description: "AM4 | 4x DDR4 | 128GB | 3x M.2 | 6x SATA 6Gb/s | ATX",
          priceUSD: 179,
          image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FMSI-MPG-B550-Gaming-Plus-1toJe6.webp&w=1920&q=100",
          specs: {
            CPUCompatibility: "AMD Ryzen™ 5000 & 3000 Series",
            Socket: "AM4",
            Chipset: "AMD B550",
            MemorySlots: "4x DDR4 DIMM",
            MaxMemory: "128GB",
            MemoryOC: "5000 MHz",
            StorageSlots: "3x M.2, 6x SATA 6Gb/s",
            PCIeSlots: "1x PCIe 4.0 x16, 2x PCIe 3.0 x1",
            WiFi: "Нет",
            BIOS: "256 Mb Flash ROM, UEFI AMI BIOS",
            FormFactor: "ATX | 305x244mm",
            Warranty: "12 Ay"
          }
        },
        {
          id: 283,
          name: "ASRock Z790 Pro RS D4",
          description: "LGA1700 | 4x DDR4 | 128GB | 4x M.2 | 6x SATA 6Gb/s | ATX",
          priceUSD: 329,
          image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FASRock-Z790-Pro-RS-D4-1n5BdG.webp&w=1920&q=100",
          specs: {
            CPUCompatibility: "Intel 12th & 13th Gen",
            Socket: "LGA1700",
            Chipset: "Intel Z790",
            MemorySlots: "4x DDR4 DIMM",
            MaxMemory: "128GB",
            MemoryOC: "5600 MHz",
            StorageSlots: "4x M.2, 6x SATA 6Gb/s",
            PCIeSlots: "2x PCIe 5.0 x16, 2x PCIe 4.0 x1",
            WiFi: "Wi-Fi 6E",
            BIOS: "256 Mb Flash ROM, UEFI AMI BIOS",
            FormFactor: "ATX | 305x244mm",
            Warranty: "12 Ay"
          }
        },
        {
          id: 284,
          name: "MSI Pro Z790-A Max WiFi",
          description: "LGA1700 | 4x DDR5 | 256GB | 4x M.2 | 6x SATA 6Gb/s | ATX",
          priceUSD: 419,
          image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FMSI-Pro-Z790-A-Max-WiFi-1_qc5t.webp&w=1920&q=100",
          specs: {
            CPUCompatibility: "Intel 12th & 13th Gen",
            Socket: "LGA1700",
            Chipset: "Intel Z790",
            MemorySlots: "4x DDR5 DIMM",
            MaxMemory: "256GB",
            MemoryOC: "6400 MHz",
            StorageSlots: "4x M.2, 6x SATA 6Gb/s",
            PCIeSlots: "2x PCIe 5.0 x16, 1x PCIe 4.0 x4",
            WiFi: "Wi-Fi 6E",
            BIOS: "256 Mb Flash ROM, UEFI AMI BIOS",
            FormFactor: "ATX | 305x244mm",
            Warranty: "12 Ay"
          }
        },
        {
          id: 285,
          name: "MSI PRO Z790-P WiFi",
          description: "LGA1700 | 4x DDR5 | 128GB | 3x M.2 | 6x SATA 6Gb/s | ATX",
          priceUSD: 369,
          image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FMSI-PRO-Z790-P-WIFI_1B_RbE.webp&w=1920&q=100",
          specs: {
            CPUCompatibility: "Intel 12th & 13th Gen",
            Socket: "LGA1700",
            Chipset: "Intel Z790",
            MemorySlots: "4x DDR5 DIMM",
            MaxMemory: "128GB",
            MemoryOC: "6000 MHz",
            StorageSlots: "3x M.2, 6x SATA 6Gb/s",
            PCIeSlots: "2x PCIe 5.0 x16, 1x PCIe 4.0 x4",
            WiFi: "Wi-Fi 6",
            BIOS: "256 Mb Flash ROM, UEFI AMI BIOS",
            FormFactor: "ATX | 305x244mm",
            Warranty: "12 Ay"
          }
        },
        {
          id: 286,
          name: "ASUS Prime B760M-A DDR5",
          description: "LGA1700 | 2x DDR5 | 64GB | 2x M.2 | 4x SATA 6Gb/s | Micro-ATX",
          priceUSD: 209,
          image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2F1-yeni0Qrws.webp&w=1920&q=100",
          specs: {
            CPUCompatibility: "Intel 12th & 13th Gen",
            Socket: "LGA1700",
            Chipset: "Intel B760",
            MemorySlots: "2x DDR5 DIMM",
            MaxMemory: "64GB",
            MemoryOC: "5600 MHz",
            StorageSlots: "2x M.2, 4x SATA 6Gb/s",
            PCIeSlots: "1x PCIe 5.0 x16, 1x PCIe 4.0 x4",
            WiFi: "Нет",
            BIOS: "128 Mb Flash ROM, UEFI BIOS",
            FormFactor: "Micro-ATX | 244x244mm",
            Warranty: "12 Ay"
          }
        },
        {
          id: 287,
          name: "ASUS Prime B650M-R DDR5",
          description: "AM5 | 2x DDR5 | 128GB | 2x M.2 | 4x SATA 6Gb/s | Micro-ATX",
          priceUSD: 249,
          image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FAsus-Prime-B650M-R-Motherboard-1lrSY0.webp&w=1920&q=100",
          specs: {
            CPUCompatibility: "AMD Ryzen™ 7000 Series",
            Socket: "AM5",
            Chipset: "AMD B650",
            MemorySlots: "2x DDR5 DIMM",
            MaxMemory: "128GB",
            MemoryOC: "6400 MHz",
            StorageSlots: "2x M.2, 4x SATA 6Gb/s",
            PCIeSlots: "1x PCIe 5.0 x16, 1x PCIe 4.0 x4",
            WiFi: "Нет",
            BIOS: "128 Mb Flash ROM, UEFI BIOS",
            FormFactor: "Micro-ATX | 244x244mm",
            Warranty: "12 Ay"
          }
        },
        {
          id: 288,
          name: "MSI B760 Gaming Plus Wi-Fi",
          description: "LGA1700 | 4x DDR4 | 128GB | 3x M.2 | 6x SATA 6Gb/s | ATX",
          priceUSD: 319,
          image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FMSI-B760-Gaming-Plus-WiFi-1DfJtx.webp&w=1920&q=100",
          specs: {
            CPUCompatibility: "Intel 12th & 13th Gen",
            Socket: "LGA1700",
            Chipset: "Intel B760",
            MemorySlots: "4x DDR4 DIMM",
            MaxMemory: "128GB",
            MemoryOC: "5200 MHz",
            StorageSlots: "3x M.2, 6x SATA 6Gb/s",
            PCIeSlots: "2x PCIe 5.0 x16, 1x PCIe 3.0 x1",
            WiFi: "Wi-Fi 6",
            BIOS: "256 Mb Flash ROM, UEFI AMI BIOS",
            FormFactor: "ATX | 305x244mm",
            Warranty: "12 Ay"
          }
        },
        {
          id: 289,
          name: "ASUS Prime B760M-A DDR5",
          description: "LGA1700 | 2x DDR5 | 64GB | 2x M.2 | 4x SATA 6Gb/s | Micro-ATX",
          priceUSD: 199,
          image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FASUS-Prime-B760M-A-DDR5-Motherboard_1uamHH.webp&w=1920&q=100",
          specs: {
            CPUCompatibility: "Intel 12th & 13th Gen",
            Socket: "LGA1700",
            Chipset: "Intel B760",
            MemorySlots: "2x DDR5 DIMM",
            MaxMemory: "64GB",
            MemoryOC: "5600 MHz",
            StorageSlots: "2x M.2, 4x SATA 6Gb/s",
            PCIeSlots: "1x PCIe 5.0 x16, 1x PCIe 4.0 x4",
            WiFi: "Нет",
            BIOS: "128 Mb Flash ROM, UEFI BIOS",
            FormFactor: "Micro-ATX | 244x244mm",
            Warranty: "12 Ay"
          }
        },
        {
          id: 290,
          name: "MSI MPG B550 Gaming Plus",
          description: "AM4 | 4x DDR4 | 128GB | 3x M.2 | 6x SATA 6Gb/s | ATX",
          priceUSD: 179,
          image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FMSI-MPG-B550-Gaming-Plus-1toJe6.webp&w=1920&q=100",
          specs: {
            CPUCompatibility: "AMD Ryzen™ 5000 & 3000 Series",
            Socket: "AM4",
            Chipset: "AMD B550",
            MemorySlots: "4x DDR4 DIMM",
            MaxMemory: "128GB",
            MemoryOC: "5000 MHz",
            StorageSlots: "3x M.2, 6x SATA 6Gb/s",
            PCIeSlots: "1x PCIe 4.0 x16, 2x PCIe 3.0 x1",
            WiFi: "Нет",
            BIOS: "256 Mb Flash ROM, UEFI AMI BIOS",
            FormFactor: "ATX | 305x244mm",
            Warranty: "12 Ay"
          }
        },
        {
          id: 291,
          name: "ASRock Z790 Pro RS D4",
          description: "LGA1700 | 4x DDR4 | 128GB | 4x M.2 | 6x SATA 6Gb/s | ATX",
          priceUSD: 329,
          image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FASRock-Z790-Pro-RS-D4-1n5BdG.webp&w=1920&q=100",
          specs: {
            CPUCompatibility: "Intel 12th & 13th Gen",
            Socket: "LGA1700",
            Chipset: "Intel Z790",
            MemorySlots: "4x DDR4 DIMM",
            MaxMemory: "128GB",
            MemoryOC: "5600 MHz",
            StorageSlots: "4x M.2, 6x SATA 6Gb/s",
            PCIeSlots: "2x PCIe 5.0 x16, 2x PCIe 4.0 x1",
            WiFi: "Wi-Fi 6E",
            BIOS: "256 Mb Flash ROM, UEFI AMI BIOS",
            FormFactor: "ATX | 305x244mm",
            Warranty: "12 Ay"
          }
        },
        {
          id: 292,
          name: "MSI Pro Z790-A Max WiFi",
          description: "LGA1700 | 4x DDR5 | 256GB | 4x M.2 | 6x SATA 6Gb/s | ATX",
          priceUSD: 419,
          image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FMSI-Pro-Z790-A-Max-WiFi-1_qc5t.webp&w=1920&q=100",
          specs: {
            CPUCompatibility: "Intel 12th & 13th Gen",
            Socket: "LGA1700",
            Chipset: "Intel Z790",
            MemorySlots: "4x DDR5 DIMM",
            MaxMemory: "256GB",
            MemoryOC: "6400 MHz",
            StorageSlots: "4x M.2, 6x SATA 6Gb/s",
            PCIeSlots: "2x PCIe 5.0 x16, 1x PCIe 4.0 x4",
            WiFi: "Wi-Fi 6E",
            BIOS: "256 Mb Flash ROM, UEFI AMI BIOS",
            FormFactor: "ATX | 305x244mm",
            Warranty: "12 Ay"
          }
        },
        {
          id: 293,
          name: "MSI PRO Z790-P WiFi",
          description: "LGA1700 | 4x DDR5 | 128GB | 3x M.2 | 6x SATA 6Gb/s | ATX",
          priceUSD: 369,
          image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FMSI-PRO-Z790-P-WIFI_1B_RbE.webp&w=1920&q=100",
          specs: {
            CPUCompatibility: "Intel 12th & 13th Gen",
            Socket: "LGA1700",
            Chipset: "Intel Z790",
            MemorySlots: "4x DDR5 DIMM",
            MaxMemory: "128GB",
            MemoryOC: "6000 MHz",
            StorageSlots: "3x M.2, 6x SATA 6Gb/s",
            PCIeSlots: "2x PCIe 5.0 x16, 1x PCIe 4.0 x4",
            WiFi: "Wi-Fi 6",
            BIOS: "256 Mb Flash ROM, UEFI AMI BIOS",
            FormFactor: "ATX | 305x244mm",
            Warranty: "12 Ay"
          }
        },
        {
          id: 294,
          name: "MSI Pro Z790-P WiFi",
          description: "LGA1700 | 4x DDR5 | 128GB | 3x M.2 | 6x SATA 6Gb/s | ATX",
          priceUSD: 359,
          image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2F1-yeni0Qrws.webp&w=1920&q=100",
          specs: {
            CPUCompatibility: "Intel 12th & 13th Gen",
            Socket: "LGA1700",
            Chipset: "Intel Z790",
            MemorySlots: "4x DDR5 DIMM",
            MaxMemory: "128GB",
            MemoryOC: "6000 MHz",
            StorageSlots: "3x M.2, 6x SATA 6Gb/s",
            PCIeSlots: "2x PCIe 5.0 x16, 1x PCIe 4.0 x4",
            WiFi: "Wi-Fi 6",
            BIOS: "256 Mb Flash ROM, UEFI AMI BIOS",
            FormFactor: "ATX | 305x244mm",
            Warranty: "12 Ay"
          }
        },
        {
          id: 295,
          name: "ASUS Prime B760M-A DDR5",
          description: "LGA1700 | 2x DDR5 | 64GB | 2x M.2 | 4x SATA 6Gb/s | Micro-ATX",
          priceUSD: 189,
          image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2F1-yenizVkv7.webp&w=1920&q=100",
          specs: {
            CPUCompatibility: "Intel 12th & 13th Gen",
            Socket: "LGA1700",
            Chipset: "Intel B760",
            MemorySlots: "2x DDR5 DIMM",
            MaxMemory: "64GB",
            MemoryOC: "5600 MHz",
            StorageSlots: "2x M.2, 4x SATA 6Gb/s",
            PCIeSlots: "1x PCIe 5.0 x16, 1x PCIe 4.0 x4",
            WiFi: "Нет",
            BIOS: "128 Mb Flash ROM, UEFI BIOS",
            FormFactor: "Micro-ATX | 244x244mm",
            Warranty: "12 Ay"
          }
        },
        {
          id: 296,
          name: "MSI MPG B550 Gaming Plus",
          description: "AM4 | 4x DDR4 | 128GB | 3x M.2 | 6x SATA 6Gb/s | ATX",
          priceUSD: 179,
          image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2F1-yeniPqA1o.webp&w=1920&q=100",
          specs: {
            CPUCompatibility: "AMD Ryzen™ 5000 & 3000 Series",
            Socket: "AM4",
            Chipset: "AMD B550",
            MemorySlots: "4x DDR4 DIMM",
            MaxMemory: "128GB",
            MemoryOC: "5000 MHz",
            StorageSlots: "3x M.2, 6x SATA 6Gb/s",
            PCIeSlots: "1x PCIe 4.0 x16, 2x PCIe 3.0 x1",
            WiFi: "Нет",
            BIOS: "256 Mb Flash ROM, UEFI AMI BIOS",
            FormFactor: "ATX | 305x244mm",
            Warranty: "12 Ay"
          }
        },
        {
          id: 297,
          name: "ASRock Z790 Pro RS D4",
          description: "LGA1700 | 4x DDR4 | 128GB | 4x M.2 | 6x SATA 6Gb/s | ATX",
          priceUSD: 329,
          image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2Fc839f81f-2356-4a5e-9c0c-44742edaa56d.webp&w=1920&q=100",
          specs: {
            CPUCompatibility: "Intel 12th & 13th Gen",
            Socket: "LGA1700",
            Chipset: "Intel Z790",
            MemorySlots: "4x DDR4 DIMM",
            MaxMemory: "128GB",
            MemoryOC: "5600 MHz",
            StorageSlots: "4x M.2, 6x SATA 6Gb/s",
            PCIeSlots: "2x PCIe 5.0 x16, 2x PCIe 4.0 x1",
            WiFi: "Wi-Fi 6E",
            BIOS: "256 Mb Flash ROM, UEFI AMI BIOS",
            FormFactor: "ATX | 305x244mm",
            Warranty: "12 Ay"
          }
        },
        {
          id: 298,
          name: "MSI Pro Z790-A Max WiFi",
          description: "LGA1700 | 4x DDR5 | 256GB | 4x M.2 | 6x SATA 6Gb/s | ATX",
          priceUSD: 419,
          image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FMSI-Pro-Z790-A-Max-WiFi-1_qc5t.webp&w=1920&q=100",
          specs: {
            CPUCompatibility: "Intel 12th & 13th Gen",
            Socket: "LGA1700",
            Chipset: "Intel Z790",
            MemorySlots: "4x DDR5 DIMM",
            MaxMemory: "256GB",
            MemoryOC: "6400 MHz",
            StorageSlots: "4x M.2, 6x SATA 6Gb/s",
            PCIeSlots: "2x PCIe 5.0 x16, 1x PCIe 4.0 x4",
            WiFi: "Wi-Fi 6E",
            BIOS: "256 Mb Flash ROM, UEFI AMI BIOS",
            FormFactor: "ATX | 305x244mm",
            Warranty: "12 Ay"
          }
        },
        {
          id: 299,
          name: "MSI Pro Z790-P WiFi",
          description: "LGA1700 | 4x DDR5 | 128GB | 3x M.2 | 6x SATA 6Gb/s | ATX",
          priceUSD: 369,
          image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FMSI-PRO-Z790-P-WIFI_1B_RbE.webp&w=1920&q=100",
          specs: {
            CPUCompatibility: "Intel 12th & 13th Gen",
            Socket: "LGA1700",
            Chipset: "Intel Z790",
            MemorySlots: "4x DDR5 DIMM",
            MaxMemory: "128GB",
            MemoryOC: "6000 MHz",
            StorageSlots: "3x M.2, 6x SATA 6Gb/s",
            PCIeSlots: "2x PCIe 5.0 x16, 1x PCIe 4.0 x4",
            WiFi: "Wi-Fi 6",
            BIOS: "256 Mb Flash ROM, UEFI AMI BIOS",
            FormFactor: "ATX | 305x244mm",
            Warranty: "12 Ay"
          }
        },
        {
          id: 300,
          name: "ASUS ROG Strix X870-A Gaming Wi-Fi DDR5",
          description: "AM5 | 4x DDR5 | 256GB | 4x M.2 | 2x SATA 6Gb/s | ATX",
          priceUSD: 649,
          image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FASUS-ROG-Strix-X870-A-Gaming-Wi-Fi-DDR5-1dhnJ_.webp&w=1920&q=100",
          specs: {
            CPUCompatibility: "AMD Ryzen™ 9000, 8000, 7000 Series",
            Socket: "AM5",
            Chipset: "AMD X870",
            MemorySlots: "4x DDR5 DIMM",
            MaxMemory: "256GB",
            MemoryOC: "8000+ MHz",
            StorageSlots: "4x M.2, 2x SATA 6Gb/s",
            PCIeSlots: "1x PCIe 5.0 x16, 2x PCIe 4.0 x16",
            WiFi: "Wi-Fi 7",
            BIOS: "256 Mb Flash ROM, UEFI AMI BIOS",
            FormFactor: "ATX | 305x244mm",
            Warranty: "12 Ay"
          }
        },
        {
          id: 301,
          name: "ASUS Prime B650M-R DDR5",
          description: "AM5 | 2x DDR5 | 128GB | 2x M.2 | 4x SATA 6Gb/s | Micro-ATX",
          priceUSD: 249,
          image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FAsus-Prime-B650M-R-Motherboard-1lrSY0.webp&w=1920&q=100",
          specs: {
            CPUCompatibility: "AMD Ryzen™ 7000 Series",
            Socket: "AM5",
            Chipset: "AMD B650",
            MemorySlots: "2x DDR5 DIMM",
            MaxMemory: "128GB",
            MemoryOC: "6400 MHz",
            StorageSlots: "2x M.2, 4x SATA 6Gb/s",
            PCIeSlots: "1x PCIe 5.0 x16, 1x PCIe 4.0 x4",
            WiFi: "Нет",
            BIOS: "128 Mb Flash ROM, UEFI BIOS",
            FormFactor: "Micro-ATX | 244x244mm",
            Warranty: "12 Ay"
          }
        },
        {
          id: 302,
          name: "MSI B760 Gaming Plus Wi-Fi",
          description: "LGA1700 | 4x DDR4 | 128GB | 3x M.2 | 6x SATA 6Gb/s | ATX",
          priceUSD: 319,
          image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FMSI-B760-Gaming-Plus-WiFi-1DfJtx.webp&w=1920&q=100",
          specs: {
            CPUCompatibility: "Intel 12th & 13th Gen",
            Socket: "LGA1700",
            Chipset: "Intel B760",
            MemorySlots: "4x DDR4 DIMM",
            MaxMemory: "128GB",
            MemoryOC: "5200 MHz",
            StorageSlots: "3x M.2, 6x SATA 6Gb/s",
            PCIeSlots: "2x PCIe 5.0 x16, 1x PCIe 3.0 x1",
            WiFi: "Wi-Fi 6",
            BIOS: "256 Mb Flash ROM, UEFI AMI BIOS",
            FormFactor: "ATX | 305x244mm",
            Warranty: "12 Ay"
          }
        },
        {
          id: 303,
          name: "ASUS Prime B760M-A DDR5",
          description: "LGA1700 | 2x DDR5 | 64GB | 2x M.2 | 4x SATA 6Gb/s | Micro-ATX",
          priceUSD: 199,
          image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FASUS-Prime-B760M-A-DDR5-Motherboard_1uamHH.webp&w=1920&q=100",
          specs: {
            CPUCompatibility: "Intel 12th & 13th Gen",
            Socket: "LGA1700",
            Chipset: "Intel B760",
            MemorySlots: "2x DDR5 DIMM",
            MaxMemory: "64GB",
            MemoryOC: "5600 MHz",
            StorageSlots: "2x M.2, 4x SATA 6Gb/s",
            PCIeSlots: "1x PCIe 5.0 x16, 1x PCIe 4.0 x4",
            WiFi: "Нет",
            BIOS: "128 Mb Flash ROM, UEFI BIOS",
            FormFactor: "Micro-ATX | 244x244mm",
            Warranty: "12 Ay"
          }
        },
        {
          id: 304,
          name: "MSI MPG B550 Gaming Plus",
          description: "AM4 | 4x DDR4 | 128GB | 3x M.2 | 6x SATA 6Gb/s | ATX",
          priceUSD: 179,
          image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FMSI-MPG-B550-Gaming-Plus-1toJe6.webp&w=1920&q=100",
          specs: {
            CPUCompatibility: "AMD Ryzen™ 5000 & 3000 Series",
            Socket: "AM4",
            Chipset: "AMD B550",
            MemorySlots: "4x DDR4 DIMM",
            MaxMemory: "128GB",
            MemoryOC: "5000 MHz",
            StorageSlots: "3x M.2, 6x SATA 6Gb/s",
            PCIeSlots: "1x PCIe 4.0 x16, 2x PCIe 3.0 x1",
            WiFi: "Нет",
            BIOS: "256 Mb Flash ROM, UEFI AMI BIOS",
            FormFactor: "ATX | 305x244mm",
            Warranty: "12 Ay"
          }
        },
        {
          id: 305,
          name: "ASRock Z790 Pro RS D4",
          description: "LGA1700 | 4x DDR4 | 128GB | 4x M.2 | 6x SATA 6Gb/s | ATX",
          priceUSD: 329,
          image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FASRock-Z790-Pro-RS-D4-1n5BdG.webp&w=1920&q=100",
          specs: {
            CPUCompatibility: "Intel 12th & 13th Gen",
            Socket: "LGA1700",
            Chipset: "Intel Z790",
            MemorySlots: "4x DDR4 DIMM",
            MaxMemory: "128GB",
            MemoryOC: "5600 MHz",
            StorageSlots: "4x M.2, 6x SATA 6Gb/s",
            PCIeSlots: "2x PCIe 5.0 x16, 2x PCIe 4.0 x1",
            WiFi: "Wi-Fi 6E",
            BIOS: "256 Mb Flash ROM, UEFI AMI BIOS",
            FormFactor: "ATX | 305x244mm",
            Warranty: "12 Ay"
          }
        },
        {
          id: 306,
          name: "MSI Pro Z790-A Max WiFi",
          description: "LGA1700 | 4x DDR5 | 256GB | 4x M.2 | 6x SATA 6Gb/s | ATX",
          priceUSD: 419,
          image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FMSI-Pro-Z790-A-Max-WiFi-1_qc5t.webp&w=1920&q=100",
          specs: {
            CPUCompatibility: "Intel 12th & 13th Gen",
            Socket: "LGA1700",
            Chipset: "Intel Z790",
            MemorySlots: "4x DDR5 DIMM",
            MaxMemory: "256GB",
            MemoryOC: "6400 MHz",
            StorageSlots: "4x M.2, 6x SATA 6Gb/s",
            PCIeSlots: "2x PCIe 5.0 x16, 1x PCIe 4.0 x4",
            WiFi: "Wi-Fi 6E",
            BIOS: "256 Mb Flash ROM, UEFI AMI BIOS",
            FormFactor: "ATX | 305x244mm",
            Warranty: "12 Ay"
          }
        }
      ],          
      computerCases: [
        {
          id: 307,
          name: "DeepCool CG530 4F ATX Case",
          description: "ATX / Micro-ATX / Mini-ITX | 6 Slots | 2x HDD | 2x SSD",
          priceUSD: 139,
          image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FDeepCool-CG530-4F-1Rmw3M.webp&w=1920&q=100",
          specs: {
            MotherboardCompatibility: "ATX / Micro-ATX / Mini-ITX",
            PSUFormFactor: "ATX PS2",
            Material: "ABS / SPCC / Tempered Glass",
            ExpansionSlots: 6,
            MaxGPULength: "370mm",
            CPUCoolerHeight: "170mm",
            Weight: "7.5 Kg",
            Warranty: "12 Ay"
          }
        },
        {
          id: 308,
          name: "DeepCool CG540 Gaming Case",
          description: "ATX / Micro-ATX / Mini-ITX | 7 Slots | 3x HDD | 2x SSD",
          priceUSD: 149,
          image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2F7-yeniiiiiiiiiiiii6j-ql.webp&w=1920&q=100",
          specs: {
            MotherboardCompatibility: "ATX / Micro-ATX / Mini-ITX",
            PSUFormFactor: "ATX",
            Material: "Steel / Tempered Glass",
            ExpansionSlots: 7,
            MaxGPULength: "380mm",
            CPUCoolerHeight: "175mm",
            Weight: "8 Kg",
            Warranty: "12 Ay"
          }
        },
        {
          id: 309,
          name: "DeepCool CG550 RGB Case",
          description: "ATX / Micro-ATX | 7 Slots | 2x HDD | 3x SSD",
          priceUSD: 159,
          image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2F7-yenmiiiiiiiiiiiihxQJC.webp&w=1920&q=100",
          specs: {
            MotherboardCompatibility: "ATX / Micro-ATX",
            PSUFormFactor: "ATX PS2",
            Material: "ABS / Steel / Tempered Glass",
            ExpansionSlots: 7,
            MaxGPULength: "385mm",
            CPUCoolerHeight: "180mm",
            Weight: "8.3 Kg",
            Warranty: "12 Ay"
          }
        },
        {
          id: 310,
          name: "DeepCool CG530 Premium Edition",
          description: "ATX / Micro-ATX / Mini-ITX | 6 Slots | 2x HDD | 2x SSD",
          priceUSD: 145,
          image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2F1-yeniiiiiiii9YsMr.webp&w=1920&q=100",
          specs: {
            MotherboardCompatibility: "ATX / Micro-ATX / Mini-ITX",
            PSUFormFactor: "ATX PS2",
            Material: "ABS / SPCC / Tempered Glass",
            ExpansionSlots: 6,
            MaxGPULength: "370mm",
            CPUCoolerHeight: "170mm",
            Weight: "7.5 Kg",
            Warranty: "12 Ay"
          }
        },
        {
          id: 311,
          name: "MSI MAG Forge 120A Gaming Case",
          description: "ATX / Micro-ATX | 7 Slots | 3x HDD | 2x SSD",
          priceUSD: 155,
          image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FMSI-MAG-Forge-120A-Airflow-Gaming-Case-1_ZQ8N.webp&w=1920&q=100",
          specs: {
            MotherboardCompatibility: "ATX / Micro-ATX",
            PSUFormFactor: "ATX",
            Material: "Steel / Tempered Glass",
            ExpansionSlots: 7,
            MaxGPULength: "385mm",
            CPUCoolerHeight: "180mm",
            Weight: "8.5 Kg",
            Warranty: "12 Ay"
          }
        },
        {
          id: 312,
          name: "Lian Li O11 Vision Compact",
          description: "Mini-ITX / Micro-ATX / ATX | 5 Slots | 2x HDD | 2x SSD",
          priceUSD: 169,
          image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FLian-Li-O11-Vision-Compact-1-2xXw.webp&w=1920&q=100",
          specs: {
            MotherboardCompatibility: "Mini-ITX / Micro-ATX / ATX",
            PSUFormFactor: "ATX",
            Material: "Aluminum / Tempered Glass",
            ExpansionSlots: 5,
            MaxGPULength: "360mm",
            CPUCoolerHeight: "165mm",
            Weight: "6.8 Kg",
            Warranty: "12 Ay"
          }
        },
        {
          id: 313,
          name: "DeepCool CG530 4F White Edition",
          description: "ATX / Micro-ATX / Mini-ITX | 6 Slots | 2x HDD | 2x SSD",
          priceUSD: 145,
          image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FDeepCool-CG530-4F-White-ATX-Case-1DaYMi.webp&w=1920&q=100",
          specs: {
            MotherboardCompatibility: "ATX / Micro-ATX / Mini-ITX",
            PSUFormFactor: "ATX PS2",
            Material: "ABS / SPCC / Tempered Glass",
            ExpansionSlots: 6,
            MaxGPULength: "370mm",
            CPUCoolerHeight: "170mm",
            Weight: "7.5 Kg",
            Warranty: "12 Ay"
          }
        },
        {
          id: 314,
          name: "DeepCool CC360 Mid Tower",
          description: "ATX / Micro-ATX | 7 Slots | 2x HDD | 2x SSD",
          priceUSD: 132,
          image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FDeepCool-CC360-Mid-Tower-PC-Case_1pIaiT.webp&w=1920&q=100",
          specs: {
            MotherboardCompatibility: "ATX / Micro-ATX",
            PSUFormFactor: "ATX",
            Material: "ABS / Steel / Tempered Glass",
            ExpansionSlots: 7,
            MaxGPULength: "375mm",
            CPUCoolerHeight: "175mm",
            Weight: "8 Kg",
            Warranty: "12 Ay"
          }
        },
        {
          id: 315,
          name: "DeepCool CH560 Digital ATX Case",
          description: "ATX / Micro-ATX | 7 Slots | 2x HDD | 2x SSD",
          priceUSD: 139,
          image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FDeepCool-CH560-Digital-ATX-PC-Case_142O6q.webp&w=1920&q=100",
          specs: {
            MotherboardCompatibility: "ATX / Micro-ATX",
            PSUFormFactor: "ATX",
            Material: "ABS / Steel / Tempered Glass",
            ExpansionSlots: 7,
            MaxGPULength: "380mm",
            CPUCoolerHeight: "175mm",
            Weight: "8 Kg",
            Warranty: "12 Ay"
          }
        }
      ],
      coolers: [
        {
          id: 316,
          name: "NZXT Kraken Core 360 RGB AIO Liquid CPU Cooler",
          description: "Intel & AMD | 2800 RPM | 74 CFM",
          priceUSD: 355,
          image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FNZXT-Kraken-Core-360-RGB-AIO-Liquid-CPU-Cooler-1KOewW.webp&w=1920&q=100",
          specs: {
            Socket: "Intel: 1700/1200/115X | AMD: AM5/AM4",
            Connector: "4 PIN PWM",
            FanSize: "120 mm",
            MotorSpeed: "2800 ± 300 RPM",
            FanSpeed: "500–2200 RPM",
            Airflow: "74 CFM",
            Pressure: "3.0 mm H2O",
            Radiator: "Aluminum"
          }
        },
        {
          id: 317,
          name: "DeepCool AK700 Digital Air Cooler",
          description: "Intel & AMD | 1850 RPM | 68 CFM",
          priceUSD: 120,
          image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FDeepCool-AK700-Digital-NYX-16oy6t.webp&w=1920&q=100",
          specs: {
            Socket: "Intel: 1700/1200 | AMD: AM5/AM4",
            Connector: "4 PIN PWM",
            FanSize: "120 mm",
            MotorSpeed: "1850 ± 10% RPM",
            FanSpeed: "400–1850 RPM",
            Airflow: "68 CFM",
            Pressure: "2.9 mm H2O",
            Radiator: "Aluminum"
          }
        },
        {
          id: 318,
          name: "DeepCool LE360 Pro Liquid Cooler",
          description: "Intel & AMD | 3000 RPM | 72 CFM",
          priceUSD: 140,
          image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FDeepCool-LE360-Pro-Liquid-CPU-Cooler-1aW8Kx.webp&w=1920&q=100",
          specs: {
            Socket: "Intel: 1851/1700 | AMD: AM5/AM4",
            Connector: "4 PIN PWM",
            FanSize: "120 mm",
            MotorSpeed: "3000 ± 10% RPM",
            FanSpeed: "600–2400 RPM",
            Airflow: "72 CFM",
            Pressure: "3.2 mm H2O",
            Radiator: "Aluminum"
          }
        },
        {
          id: 319,
          name: "Thermalright Wonder Vision 360 ARGB",
          description: "Intel & AMD | 2900 RPM | 76 CFM",
          priceUSD: 150,
          image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FThermalRight-Wonder-Vision-360-Turbo-ARGB-BLACK-1T5-6i.webp&w=1920&q=100",
          specs: {
            Socket: "Intel: 1700/1200 | AMD: AM5/AM4",
            Connector: "4 PIN PWM",
            FanSize: "120 mm",
            MotorSpeed: "2900 ± 10% RPM",
            FanSpeed: "500–2300 RPM",
            Airflow: "76 CFM",
            Pressure: "3.4 mm H2O",
            Radiator: "Aluminum"
          }
        },
        {
          id: 320,
          name: "DeepCool AG400 BK ARGB V2",
          description: "Intel & AMD | 2000 RPM | 70 CFM",
          priceUSD: 65,
          image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FDeepCool-AG400-BK-ARGB-V2-5mOVQl.webp&w=1920&q=100",
          specs: {
            Socket: "Intel: 1700/1200 | AMD: AM5/AM4",
            Connector: "4 PIN PWM",
            FanSize: "120 mm",
            MotorSpeed: "2000 ± 10% RPM",
            FanSpeed: "500–2000 RPM",
            Airflow: "70 CFM",
            Pressure: "2.8 mm H2O",
            Radiator: "Aluminum"
          }
        },
        {
          id: 321,
          name: "DeepCool Gammax AG620 ARGB",
          description: "Intel & AMD | 1850 RPM | 67 CFM",
          priceUSD: 85,
          image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FDeepCool-Gammax-AG620-BK-ARGB_1xDqUc.webp&w=1920&q=100",
          specs: {
            Socket: "Intel: 1700/1200 | AMD: AM5/AM4",
            Connector: "4 PIN PWM",
            FanSize: "120 mm",
            MotorSpeed: "1850 ± 10% RPM",
            FanSpeed: "300–1850 RPM",
            Airflow: "67 CFM",
            Pressure: "2.6 mm H2O",
            Radiator: "Aluminum"
          }
        },
        {
          id: 322,
          name: "Thermalright Frozen Warframe 420 ARGB",
          description: "Intel & AMD | 3100 RPM | 78 CFM",
          priceUSD: 180,
          image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FThermalright-Frozen-Warframe-420-ARGB-Black-CPU-Cooler-1s_eYg.webp&w=1920&q=100",
          specs: {
            Socket: "Intel: 1851/1700 | AMD: AM5/AM4",
            Connector: "4 PIN PWM",
            FanSize: "140 mm",
            MotorSpeed: "3100 ± 10% RPM",
            FanSpeed: "600–2600 RPM",
            Airflow: "78 CFM",
            Pressure: "3.5 mm H2O",
            Radiator: "Aluminum"
          }
        },
        {
          id: 323,
          name: "ARGB Liquid Cooler X360 Pro",
          description: "Intel & AMD | 2950 RPM | 73 CFM",
          priceUSD: 135,
          image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2F1KQgP0.webp&w=1920&q=100",
          specs: {
            Socket: "Intel: 1700/1200 | AMD: AM5/AM4",
            Connector: "4 PIN PWM",
            FanSize: "120 mm",
            MotorSpeed: "2950 ± 10% RPM",
            FanSpeed: "500–2400 RPM",
            Airflow: "73 CFM",
            Pressure: "3.1 mm H2O",
            Radiator: "Aluminum"
          }
        },
        {
          id: 324,
          name: "DeepCool AG400 Digital Plus",
          description: "Intel & AMD | 2100 RPM | 71 CFM",
          priceUSD: 75,
          image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FDeepCool-AG400-Digital-Plus-1-ZT86.webp&w=1920&q=100",
          specs: {
            Socket: "Intel: 1700/1200 | AMD: AM5/AM4",
            Connector: "4 PIN PWM",
            FanSize: "120 mm",
            MotorSpeed: "2100 ± 10% RPM",
            FanSpeed: "500–2100 RPM",
            Airflow: "71 CFM",
            Pressure: "2.9 mm H2O",
            Radiator: "Aluminum"
          }
        },
        {
          id: 325,
          name: "NZXT Kraken Core 240 RGB",
          description: "Intel & AMD | 2700 RPM | 70 CFM",
          priceUSD: 280,
          image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FNZXT-Kraken-Core-360-RGB-AIO-Liquid-CPU-Cooler-1KOewW.webp&w=1920&q=100",
          specs: {
            Socket: "Intel: 1700/1200 | AMD: AM5/AM4",
            Connector: "4 PIN PWM",
            FanSize: "120 mm",
            MotorSpeed: "2700 ± 10% RPM",
            FanSpeed: "500–2000 RPM",
            Airflow: "70 CFM",
            Pressure: "2.8 mm H2O",
            Radiator: "Aluminum"
          }
        },
        {
          id: 326,
          name: "DeepCool LE240 Liquid Cooler",
          description: "Intel & AMD | 2600 RPM | 69 CFM",
          priceUSD: 115,
          image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FDeepCool-LE360-Pro-Liquid-CPU-Cooler-1aW8Kx.webp&w=1920&q=100",
          specs: {
            Socket: "Intel: 1700/1200 | AMD: AM5/AM4",
            Connector: "4 PIN PWM",
            FanSize: "120 mm",
            MotorSpeed: "2600 ± 10% RPM",
            FanSpeed: "500–2200 RPM",
            Airflow: "69 CFM",
            Pressure: "2.7 mm H2O",
            Radiator: "Aluminum"
          }
        },
        {
          id: 327,
          name: "Thermalright Vision 240 ARGB",
          description: "Intel & AMD | 2750 RPM | 72 CFM",
          priceUSD: 130,
          image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FThermalRight-Wonder-Vision-360-Turbo-ARGB-BLACK-1T5-6i.webp&w=1920&q=100",
          specs: {
            Socket: "Intel: 1700/1200 | AMD: AM5/AM4",
            Connector: "4 PIN PWM",
            FanSize: "120 mm",
            MotorSpeed: "2750 ± 10% RPM",
            FanSpeed: "500–2200 RPM",
            Airflow: "72 CFM",
            Pressure: "3.0 mm H2O",
            Radiator: "Aluminum"
          }
        },
        {
          id: 328,
          name: "DeepCool AK500 Digital Air Cooler",
          description: "Intel & AMD | 1900 RPM | 66 CFM",
          priceUSD: 95,
          image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FDeepCool-AK700-Digital-NYX-16oy6t.webp&w=1920&q=100",
          specs: {
            Socket: "Intel: 1700/1200 | AMD: AM5/AM4",
            Connector: "4 PIN PWM",
            FanSize: "120 mm",
            MotorSpeed: "1900 ± 10% RPM",
            FanSpeed: "500–1900 RPM",
            Airflow: "66 CFM",
            Pressure: "2.5 mm H2O",
            Radiator: "Aluminum"
          }
        },
        {
          id: 329,
          name: "Thermalright Warframe 360 Lite",
          description: "Intel & AMD | 2850 RPM | 75 CFM",
          priceUSD: 160,
          image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FThermalright-Frozen-Warframe-420-ARGB-Black-CPU-Cooler-1s_eYg.webp&w=1920&q=100",
          specs: {
            Socket: "Intel: 1851/1700 | AMD: AM5/AM4",
            Connector: "4 PIN PWM",
            FanSize: "120 mm",
            MotorSpeed: "2850 ± 10% RPM",
            FanSpeed: "600–2400 RPM",
            Airflow: "75 CFM",
            Pressure: "3.2 mm H2O",
            Radiator: "Aluminum"
          }
        },
        {
          id: 330,
          name: "DeepCool AG500 ARGB Cooler",
          description: "Intel & AMD | 2000 RPM | 69 CFM",
          priceUSD: 80,
          image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FDeepCool-AG400-BK-ARGB-V2-5mOVQl.webp&w=1920&q=100",
          specs: {
            Socket: "Intel: 1700/1200 | AMD: AM5/AM4",
            Connector: "4 PIN PWM",
            FanSize: "120 mm",
            MotorSpeed: "2000 ± 10% RPM",
            FanSpeed: "500–2000 RPM",
            Airflow: "69 CFM",
            Pressure: "2.7 mm H2O",
            Radiator: "Aluminum"
          }
        },
        {
          id: 331,
          name: "Thermalright Aqua Elite 360 ARGB",
          description: "Intel & AMD | 3000 RPM | 77 CFM",
          priceUSD: 145,
          image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FThermalRight-Wonder-Vision-360-Turbo-ARGB-BLACK-1T5-6i.webp&w=1920&q=100",
          specs: {
            Socket: "Intel: 1851/1700 | AMD: AM5/AM4",
            Connector: "4 PIN PWM",
            FanSize: "120 mm",
            MotorSpeed: "3000 ± 10% RPM",
            FanSpeed: "600–2400 RPM",
            Airflow: "77 CFM",
            Pressure: "3.3 mm H2O",
            Radiator: "Aluminum"
          }
        },
        {
          id: 332,
          name: "DeepCool LS520 Liquid Cooler",
          description: "Intel & AMD | 2700 RPM | 70 CFM",
          priceUSD: 125,
          image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FDeepCool-LE360-Pro-Liquid-CPU-Cooler-1aW8Kx.webp&w=1920&q=100",
          specs: {
            Socket: "Intel: 1700/1200 | AMD: AM5/AM4",
            Connector: "4 PIN PWM",
            FanSize: "120 mm",
            MotorSpeed: "2700 ± 10% RPM",
            FanSpeed: "500–2200 RPM",
            Airflow: "70 CFM",
            Pressure: "2.9 mm H2O",
            Radiator: "Aluminum"
          }
        },
        {
          id: 333,
          name: "NZXT Kraken 240 RGB Core",
          description: "Intel & AMD | 2600 RPM | 69 CFM",
          priceUSD: 265,
          image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FNZXT-Kraken-Core-360-RGB-AIO-Liquid-CPU-Cooler-1KOewW.webp&w=1920&q=100",
          specs: {
            Socket: "Intel: 1700/1200 | AMD: AM5/AM4",
            Connector: "4 PIN PWM",
            FanSize: "120 mm",
            MotorSpeed: "2600 ± 10% RPM",
            FanSpeed: "500–2000 RPM",
            Airflow: "69 CFM",
            Pressure: "2.8 mm H2O",
            Radiator: "Aluminum"
          }
        },
        {
          id: 334,
          name: "DeepCool AK400 Zero Dark",
          description: "Intel & AMD | 1850 RPM | 66 CFM",
          priceUSD: 55,
          image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FDeepCool-AG400-BK-ARGB-V2-5mOVQl.webp&w=1920&q=100",
          specs: {
            Socket: "Intel: 1700/1200 | AMD: AM5/AM4",
            Connector: "4 PIN PWM",
            FanSize: "120 mm",
            MotorSpeed: "1850 ± 10% RPM",
            FanSpeed: "500–1850 RPM",
            Airflow: "66 CFM",
            Pressure: "2.5 mm H2O",
            Radiator: "Aluminum"
          }
        },
        {
          id: 335,
          name: "Thermalright Frozen Vision 360",
          description: "Intel & AMD | 3050 RPM | 78 CFM",
          priceUSD: 170,
          image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FThermalright-Frozen-Warframe-420-ARGB-Black-CPU-Cooler-1s_eYg.webp&w=1920&q=100",
          specs: {
            Socket: "Intel: 1851/1700 | AMD: AM5/AM4",
            Connector: "4 PIN PWM",
            FanSize: "120 mm",
            MotorSpeed: "3050 ± 10% RPM",
            FanSpeed: "600–2500 RPM",
            Airflow: "78 CFM",
            Pressure: "3.5 mm H2O",
            Radiator: "Aluminum"
          }
        },
        {
          id: 336,
          name: "ARGB Liquid Cooler X240 Lite",
          description: "Intel & AMD | 2500 RPM | 68 CFM",
          priceUSD: 95,
          image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2F1KQgP0.webp&w=1920&q=100",
          specs: {
            Socket: "Intel: 1700/1200 | AMD: AM5/AM4",
            Connector: "3 PIN",
            FanSize: "120 mm",
            MotorSpeed: "2500 ± 10% RPM",
            FanSpeed: "600–2100 RPM",
            Airflow: "68 CFM",
            Pressure: "2.7 mm H2O",
            Radiator: "Aluminum"
          }
        },
        {
          id: 337,
          name: "DeepCool AG620 Dual Tower",
          description: "Intel & AMD | 1850 RPM | 67 CFM",
          priceUSD: 90,
          image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FDeepCool-Gammax-AG620-BK-ARGB_1xDqUc.webp&w=1920&q=100",
          specs: {
            Socket: "Intel: 1700/1200 | AMD: AM5/AM4",
            Connector: "4 PIN PWM",
            FanSize: "120 mm",
            MotorSpeed: "1850 ± 10% RPM",
            FanSpeed: "300–1850 RPM",
            Airflow: "67 CFM",
            Pressure: "2.6 mm H2O",
            Radiator: "Aluminum"
          }
        },
        {
          id: 338,
          name: "NZXT Kraken Elite 360 RGB",
          description: "Intel & AMD | 2800 RPM | 75 CFM",
          priceUSD: 399,
          image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FNZXT-Kraken-Core-360-RGB-AIO-Liquid-CPU-Cooler-1KOewW.webp&w=1920&q=100",
          specs: {
            Socket: "Intel: 1851/1700 | AMD: AM5/AM4",
            Connector: "4 PIN PWM",
            FanSize: "120 mm",
            MotorSpeed: "2800 ± 10% RPM",
            FanSpeed: "500–2400 RPM",
            Airflow: "75 CFM",
            Pressure: "3.2 mm H2O",
            Radiator: "Aluminum"
          }
        },
        {
          id: 339,
          name: "DeepCool AK500 Digital",
          description: "Intel & AMD | 1900 RPM | 65 CFM",
          priceUSD: 100,
          image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FDeepCool-AK700-Digital-NYX-16oy6t.webp&w=1920&q=100",
          specs: {
            Socket: "Intel: 1700/1200 | AMD: AM5/AM4",
            Connector: "4 PIN PWM",
            FanSize: "120 mm",
            MotorSpeed: "1900 ± 10% RPM",
            FanSpeed: "500–1900 RPM",
            Airflow: "65 CFM",
            Pressure: "2.4 mm H2O",
            Radiator: "Aluminum"
          }
        },
        {
          id: 340,
          name: "Thermalright Assassin X 120 Refined",
          description: "Intel & AMD | 2000 RPM | 72 CFM",
          priceUSD: 60,
          image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FDeepCool-AG400-Digital-Plus-1-ZT86.webp&w=1920&q=100",
          specs: {
            Socket: "Intel: 1700/1200 | AMD: AM5/AM4",
            Connector: "4 PIN PWM",
            FanSize: "120 mm",
            MotorSpeed: "2000 ± 10% RPM",
            FanSpeed: "500–2000 RPM",
            Airflow: "72 CFM",
            Pressure: "2.8 mm H2O",
            Radiator: "Aluminum"
          }
        },
        {
          id: 341,
          name: "DeepCool LE520 RGB Liquid",
          description: "Intel & AMD | 2550 RPM | 71 CFM",
          priceUSD: 120,
          image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FDeepCool-LE360-Pro-Liquid-CPU-Cooler-1aW8Kx.webp&w=1920&q=100",
          specs: {
            Socket: "Intel: 1700/1200 | AMD: AM5/AM4",
            Connector: "4 PIN PWM",
            FanSize: "120 mm",
            MotorSpeed: "2550 ± 10% RPM",
            FanSpeed: "500–2200 RPM",
            Airflow: "71 CFM",
            Pressure: "2.9 mm H2O",
            Radiator: "Aluminum"
          }
        },
        {
          id: 342,
          name: "Thermalright Grand Vision 360 ARGB",
          description: "Intel & AMD | 2900 RPM | 76 CFM",
          priceUSD: 155,
          image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FThermalRight-Wonder-Vision-360-Turbo-ARGB-BLACK-1T5-6i.webp&w=1920&q=100",
          specs: {
            Socket: "Intel: 1851/1700 | AMD: AM5/AM4",
            Connector: "4 PIN PWM",
            FanSize: "120 mm",
            MotorSpeed: "2900 ± 10% RPM",
            FanSpeed: "600–2400 RPM",
            Airflow: "76 CFM",
            Pressure: "3.3 mm H2O",
            Radiator: "Aluminum"
          }
        },
        {
          id: 343,
          name: "DeepCool AG300 Compact Cooler",
          description: "Intel & AMD | 1700 RPM | 60 CFM",
          priceUSD: 40,
          image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FDeepCool-AG400-BK-ARGB-V2-5mOVQl.webp&w=1920&q=100",
          specs: {
            Socket: "Intel: 1200/115X | AMD: AM4",
            Connector: "3 PIN",
            FanSize: "92 mm",
            MotorSpeed: "1700 ± 10% RPM",
            FanSpeed: "500–1700 RPM",
            Airflow: "60 CFM",
            Pressure: "2.2 mm H2O",
            Radiator: "Aluminum"
          }
        },
        {
          id: 344,
          name: "Thermalright Peerless Assassin 120",
          description: "Intel & AMD | 1800 RPM | 68 CFM",
          priceUSD: 75,
          image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FDeepCool-Gammax-AG620-BK-ARGB_1xDqUc.webp&w=1920&q=100",
          specs: {
            Socket: "Intel: 1700/1200 | AMD: AM5/AM4",
            Connector: "4 PIN PWM",
            FanSize: "120 mm",
            MotorSpeed: "1800 ± 10% RPM",
            FanSpeed: "500–1800 RPM",
            Airflow: "68 CFM",
            Pressure: "2.6 mm H2O",
            Radiator: "Aluminum"
          }
        },
        {
          id: 345,
          name: "DeepCool LS720 SE RGB",
          description: "Intel & AMD | 3000 RPM | 74 CFM",
          priceUSD: 150,
          image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FDeepCool-LE360-Pro-Liquid-CPU-Cooler-1aW8Kx.webp&w=1920&q=100",
          specs: {
            Socket: "Intel: 1851/1700 | AMD: AM5/AM4",
            Connector: "4 PIN PWM",
            FanSize: "120 mm",
            MotorSpeed: "3000 ± 10% RPM",
            FanSpeed: "600–2400 RPM",
            Airflow: "74 CFM",
            Pressure: "3.1 mm H2O",
            Radiator: "Aluminum"
          }
        }
      ],              
      powerSupplies: [
        {
          id: 346,
          name: "NZXT C850 850W 80 Plus Gold Full Modular",
          description: "ATX | 850W | 80 Plus Gold | Full Modular",
          priceUSD: 389,
          image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FNZXT-C1000-1000W-80-Plus-Gold-Full-Modular-Power-Supply-1SHyXc.webp&w=1920&q=100",
          specs: {
            Power: "850W",
            Efficiency: "80 Plus Gold",
            FormFactor: "ATX12V v3.0",
            Modular: "Full Modular",
            MainConnector: "20+4 pin",
            Protection: "OVP / UVP / SCP / OTP / OPP / OCP",
            Dimensions: "150x150x86 mm"
          }
        },
        {
          id: 347,
          name: "DeepCool PQ1200G 1200W 80 Plus Gold",
          description: "ATX | 1200W | 80 Plus Gold | Full Modular",
          priceUSD: 520,
          image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FGamer-Storm-PQ1200G-Power-Supply-14EIwT.webp&w=1920&q=100",
          specs: {
            Power: "1200W",
            Efficiency: "80 Plus Gold",
            FormFactor: "ATX12V v3.1",
            Modular: "Full Modular",
            MainConnector: "20+4 pin",
            Protection: "OVP / UVP / SCP / OTP / OPP / OCP",
            Dimensions: "180x150x86 mm"
          }
        },
        {
          id: 348,
          name: "DeepCool PX1000G 1000W Gold PSU",
          description: "ATX | 1000W | 80 Plus Gold | Full Modular",
          priceUSD: 460,
          image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FDeepCool-PX1000G-1000W-80-Plus-Gold_1Yopjw.webp&w=1920&q=100",
          specs: {
            Power: "1000W",
            Efficiency: "80 Plus Gold",
            FormFactor: "ATX12V v3.1",
            Modular: "Full Modular",
            MainConnector: "20+4 pin",
            Protection: "OVP / UVP / SCP / OTP / OPP / OCP",
            Dimensions: "160x150x86 mm"
          }
        },
        {
          id: 349,
          name: "DeepCool PF500 500W Bronze PSU",
          description: "ATX | 500W | 80 Plus Bronze | Non-Modular",
          priceUSD: 75,
          image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FDeepCool-PF500W_1uzRaw.webp&w=1920&q=100",
          specs: {
            Power: "500W",
            Efficiency: "80 Plus Bronze",
            FormFactor: "ATX",
            Modular: "Non-Modular",
            MainConnector: "20+4 pin",
            Protection: "OVP / UVP / SCP",
            Dimensions: "140x150x86 mm"
          }
        },
        {
          id: 350,
          name: "DeepCool PN1000M 1000W Gold PSU",
          description: "ATX | 1000W | 80 Plus Gold | Semi Modular",
          priceUSD: 430,
          image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FDeepcool-PN1000M-2PPDo1.webp&w=1920&q=100",
          specs: {
            Power: "1000W",
            Efficiency: "80 Plus Gold",
            FormFactor: "ATX12V",
            Modular: "Semi Modular",
            MainConnector: "20+4 pin",
            Protection: "OVP / UVP / SCP / OPP",
            Dimensions: "160x150x86 mm"
          }
        },
        {
          id: 351,
          name: "Thermalright TR-SP1000 1000W Gold",
          description: "ATX | 1000W | 80 Plus Gold | Full Modular",
          priceUSD: 410,
          image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FThermalright-TR-SP1000-1UrOQ8.webp&w=1920&q=100",
          specs: {
            Power: "1000W",
            Efficiency: "80 Plus Gold",
            FormFactor: "ATX12V v3.0",
            Modular: "Full Modular",
            MainConnector: "20+4 pin",
            Protection: "OVP / UVP / SCP / OTP / OPP",
            Dimensions: "160x150x86 mm"
          }
        },
        {
          id: 352,
          name: "DeepCool PX850G 850W Gold PSU",
          description: "ATX | 850W | 80 Plus Gold | Full Modular",
          priceUSD: 360,
          image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FDeepCool-PX850G-850W-80-Plus-Gold-1d5GXH.webp&w=1920&q=100",
          specs: {
            Power: "850W",
            Efficiency: "80 Plus Gold",
            FormFactor: "ATX12V",
            Modular: "Full Modular",
            MainConnector: "20+4 pin",
            Protection: "OVP / UVP / SCP / OTP",
            Dimensions: "150x150x86 mm"
          }
        },
        {
          id: 353,
          name: "Gamer Storm PQ1000G 1000W Gold",
          description: "ATX | 1000W | 80 Plus Gold | Full Modular",
          priceUSD: 450,
          image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FDeepCool-Gamer-Storm-PQ1000G-1tJdaN.webp&w=1920&q=100",
          specs: {
            Power: "1000W",
            Efficiency: "80 Plus Gold",
            FormFactor: "ATX12V v3.1",
            Modular: "Full Modular",
            MainConnector: "20+4 pin",
            Protection: "OVP / UVP / SCP / OTP / OCP",
            Dimensions: "160x150x86 mm"
          }
        },
        {
          id: 354,
          name: "NZXT C750 750W Gold PSU",
          description: "ATX | 750W | 80 Plus Gold | Full Modular",
          priceUSD: 320,
          image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FNZXT-C1000-1000W-80-Plus-Gold-Full-Modular-Power-Supply-1SHyXc.webp&w=1920&q=100",
          specs: {
            Power: "750W",
            Efficiency: "80 Plus Gold",
            FormFactor: "ATX",
            Modular: "Full Modular",
            MainConnector: "20+4 pin",
            Protection: "OVP / UVP / SCP / OTP",
            Dimensions: "150x150x86 mm"
          }
        },
        {
          id: 355,
          name: "DeepCool PF600 600W Bronze PSU",
          description: "ATX | 600W | 80 Plus Bronze | Non-Modular",
          priceUSD: 85,
          image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FDeepCool-PF500W_1uzRaw.webp&w=1920&q=100",
          specs: {
            Power: "600W",
            Efficiency: "80 Plus Bronze",
            FormFactor: "ATX",
            Modular: "Non-Modular",
            MainConnector: "20+4 pin",
            Protection: "OVP / SCP",
            Dimensions: "140x150x86 mm"
          }
        },
        {
          id: 356,
          name: "Thermalright TR-SP850 850W Gold",
          description: "ATX | 850W | 80 Plus Gold | Full Modular",
          priceUSD: 350,
          image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FThermalright-TR-SP1000-1UrOQ8.webp&w=1920&q=100",
          specs: {
            Power: "850W",
            Efficiency: "80 Plus Gold",
            FormFactor: "ATX12V",
            Modular: "Full Modular",
            MainConnector: "20+4 pin",
            Protection: "OVP / UVP / SCP / OPP",
            Dimensions: "150x150x86 mm"
          }
        },
        {
          id: 357,
          name: "DeepCool PN850M 850W Gold",
          description: "ATX | 850W | 80 Plus Gold | Semi Modular",
          priceUSD: 340,
          image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FDeepcool-PN1000M-2PPDo1.webp&w=1920&q=100",
          specs: {
            Power: "850W",
            Efficiency: "80 Plus Gold",
            FormFactor: "ATX",
            Modular: "Semi Modular",
            MainConnector: "20+4 pin",
            Protection: "OVP / UVP / SCP",
            Dimensions: "150x150x86 mm"
          }
        },
        {
          id: 358,
          name: "Gamer Storm PQ850G 850W Gold",
          description: "ATX | 850W | 80 Plus Gold | Full Modular",
          priceUSD: 355,
          image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FGamer-Storm-PQ1200G-Power-Supply-14EIwT.webp&w=1920&q=100",
          specs: {
            Power: "850W",
            Efficiency: "80 Plus Gold",
            FormFactor: "ATX12V",
            Modular: "Full Modular",
            MainConnector: "20+4 pin",
            Protection: "OVP / UVP / SCP / OTP",
            Dimensions: "160x150x86 mm"
          }
        },
        {
          id: 359,
          name: "DeepCool PX750G 750W Gold",
          description: "ATX | 750W | 80 Plus Gold | Full Modular",
          priceUSD: 310,
          image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FDeepCool-PX850G-850W-80-Plus-Gold-1d5GXH.webp&w=1920&q=100",
          specs: {
            Power: "750W",
            Efficiency: "80 Plus Gold",
            FormFactor: "ATX",
            Modular: "Full Modular",
            MainConnector: "20+4 pin",
            Protection: "OVP / SCP / OPP",
            Dimensions: "150x150x86 mm"
          }
        },
        {
          id: 360,
          name: "Thermalright TR-SP650 650W Bronze",
          description: "ATX | 650W | 80 Plus Bronze | Non-Modular",
          priceUSD: 95,
          image: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FThermalright-TR-SP1000-1UrOQ8.webp&w=1920&q=100",
          specs: {
            Power: "650W",
            Efficiency: "80 Plus Bronze",
            FormFactor: "ATX",
            Modular: "Non-Modular",
            MainConnector: "20+4 pin",
            Protection: "OVP / UVP / SCP",
            Dimensions: "140x150x86 mm"
          }
        }
      ],         
      ssds: [
        {
          id: 361,
          name: "Samsung 980 Pro 1TB NVMe SSD",
          description: "1000GB | 5000MB/s | 7000MB/s",
          priceUSD: 459,
          img: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FAcer-Predator-GM7000-1TB-NVMe-Gen4-Gaming-SSD1Vd7_.webp&w=1920&q=100",
          specs: {
            Capacity: "1000GB",
            WriteSpeed: "Up to 5000 MB/s",
            ReadSpeed: "Up to 7000 MB/s",
            FormFactor: "M.2 2280",
            Interface: "PCIe Gen 4.0 x4",
            PartNumber: "MZ-V8P1T0BW",
            Warranty: "24 Months"
          }
        },
        {
          id: 362,
          name: "Kingston NV2 1TB NVMe SSD",
          description: "1000GB | 3500MB/s | 3000MB/s",
          priceUSD: 189,
          img: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2F8a28f986-f413-4ffb-bf70-7fafc60e9453.webp&w=1920&q=100",
          specs: {
            Capacity: "1000GB",
            WriteSpeed: "Up to 3000 MB/s",
            ReadSpeed: "Up to 3500 MB/s",
            FormFactor: "M.2 2280",
            Interface: "PCIe Gen 4.0 x4",
            PartNumber: "SNV2S/1000G",
            Warranty: "12 Months"
          }
        },
        {
          id: 363,
          name: "WD Black SN850X 1TB SSD",
          description: "1000GB | 6300MB/s | 7300MB/s",
          priceUSD: 479,
          img: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2F1TB-WD_BLACK-SN850X-NVMe-SSD-1iRe6i.webp&w=1920&q=100",
          specs: {
            Capacity: "1000GB",
            WriteSpeed: "Up to 6300 MB/s",
            ReadSpeed: "Up to 7300 MB/s",
            FormFactor: "M.2 2280",
            Interface: "PCIe Gen 4.0 x4",
            PartNumber: "WDS100T2X0E",
            Warranty: "24 Months"
          }
        },
        {
          id: 364,
          name: "WD Blue SN570 1TB SSD",
          description: "1000GB | 3000MB/s | 3500MB/s",
          priceUSD: 179,
          img: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FWD-Blue-1TB-SN550-NVMe-SSD_1CIKNz.webp&w=1920&q=100",
          specs: {
            Capacity: "1000GB",
            WriteSpeed: "Up to 3000 MB/s",
            ReadSpeed: "Up to 3500 MB/s",
            FormFactor: "M.2 2280",
            Interface: "PCIe Gen 3.0 x4",
            PartNumber: "WDS100T3B0C",
            Warranty: "12 Months"
          }
        },
        {
          id: 365,
          name: "Crucial P3 Plus 1TB SSD",
          description: "1000GB | 4200MB/s | 5000MB/s",
          priceUSD: 229,
          img: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2F7884b5a6-77c8-4fed-915c-303b1609939f.webp&w=1920&q=100",
          specs: {
            Capacity: "1000GB",
            WriteSpeed: "Up to 4200 MB/s",
            ReadSpeed: "Up to 5000 MB/s",
            FormFactor: "M.2 2280",
            Interface: "PCIe Gen 4.0 x4",
            PartNumber: "CT1000P3PSSD8",
            Warranty: "12 Months"
          }
        },
        {
          id: 366,
          name: "WD Black SN750 500GB SSD",
          description: "500GB | 2600MB/s | 3400MB/s",
          priceUSD: 129,
          img: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FWD_BLACK-SN750-500GB-SSD_1XvDsN.webp&w=1920&q=100",
          specs: {
            Capacity: "500GB",
            WriteSpeed: "Up to 2600 MB/s",
            ReadSpeed: "Up to 3400 MB/s",
            FormFactor: "M.2 2280",
            Interface: "PCIe Gen 3.0 x4",
            PartNumber: "WDS500G3X0C",
            Warranty: "12 Months"
          }
        },
        {
          id: 367,
          name: "ADATA XPG SX8200 Pro 1TB SSD",
          description: "1000GB | 3000MB/s | 3500MB/s",
          priceUSD: 199,
          img: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FAcer-Predator-GM7000-1TB-NVMe-Gen4-Gaming-SSD1Vd7_.webp&w=1920&q=100",
          specs: {
            Capacity: "1000GB",
            WriteSpeed: "Up to 3000 MB/s",
            ReadSpeed: "Up to 3500 MB/s",
            FormFactor: "M.2 2280",
            Interface: "PCIe Gen 3.0 x4",
            PartNumber: "ASX8200PNP-1TT-C",
            Warranty: "24 Months"
          }
        },
        {
          id: 368,
          name: "Seagate FireCuda 530 1TB SSD",
          description: "1000GB | 6900MB/s | 7300MB/s",
          priceUSD: 499,
          img: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2F8a28f986-f413-4ffb-bf70-7fafc60e9453.webp&w=1920&q=100",
          specs: {
            Capacity: "1000GB",
            WriteSpeed: "Up to 6900 MB/s",
            ReadSpeed: "Up to 7300 MB/s",
            FormFactor: "M.2 2280",
            Interface: "PCIe Gen 4.0 x4",
            PartNumber: "ZP1000GM3A013",
            Warranty: "36 Months"
          }
        },
        {
          id: 369,
          name: "Corsair MP600 Pro 1TB SSD",
          description: "1000GB | 6800MB/s | 7000MB/s",
          priceUSD: 489,
          img: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2F1TB-WD_BLACK-SN850X-NVMe-SSD-1iRe6i.webp&w=1920&q=100",
          specs: {
            Capacity: "1000GB",
            WriteSpeed: "Up to 6800 MB/s",
            ReadSpeed: "Up to 7000 MB/s",
            FormFactor: "M.2 2280",
            Interface: "PCIe Gen 4.0 x4",
            PartNumber: "CSSD-F1000GBMP600P",
            Warranty: "36 Months"
          }
        },
        {
          id: 370,
          name: "TeamGroup MP34 1TB SSD",
          description: "1000GB | 3000MB/s | 3400MB/s",
          priceUSD: 179,
          img: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FWD-Blue-1TB-SN550-NVMe-SSD_1CIKNz.webp&w=1920&q=100",
          specs: {
            Capacity: "1000GB",
            WriteSpeed: "Up to 3000 MB/s",
            ReadSpeed: "Up to 3400 MB/s",
            FormFactor: "M.2 2280",
            Interface: "PCIe Gen 3.0 x4",
            PartNumber: "TM8FP4001T0C101",
            Warranty: "12 Months"
          }
        },
        {
          id: 371,
          name: "Gigabyte Aorus Gen4 1TB SSD",
          description: "1000GB | 4400MB/s | 5000MB/s",
          priceUSD: 259,
          img: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2F7884b5a6-77c8-4fed-915c-303b1609939f.webp&w=1920&q=100",
          specs: {
            Capacity: "1000GB",
            WriteSpeed: "Up to 4400 MB/s",
            ReadSpeed: "Up to 5000 MB/s",
            FormFactor: "M.2 2280",
            Interface: "PCIe Gen 4.0 x4",
            PartNumber: "GP-AG41TB",
            Warranty: "24 Months"
          }
        },
        {
          id: 372,
          name: "Samsung 970 EVO Plus 500GB SSD",
          description: "500GB | 3300MB/s | 3500MB/s",
          priceUSD: 139,
          img: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FWD_BLACK-SN750-500GB-SSD_1XvDsN.webp&w=1920&q=100",
          specs: {
            Capacity: "500GB",
            WriteSpeed: "Up to 3300 MB/s",
            ReadSpeed: "Up to 3500 MB/s",
            FormFactor: "M.2 2280",
            Interface: "PCIe Gen 3.0 x4",
            PartNumber: "MZ-V7S500BW",
            Warranty: "24 Months"
          }
        },
        {
          id: 373,
          name: "Lexar NM710 1TB SSD",
          description: "1000GB | 4500MB/s | 5000MB/s",
          priceUSD: 209,
          img: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FAcer-Predator-GM7000-1TB-NVMe-Gen4-Gaming-SSD1Vd7_.webp&w=1920&q=100",
          specs: {
            Capacity: "1000GB",
            WriteSpeed: "Up to 4500 MB/s",
            ReadSpeed: "Up to 5000 MB/s",
            FormFactor: "M.2 2280",
            Interface: "PCIe Gen 4.0 x4",
            PartNumber: "LNM710X001T-RNNNG",
            Warranty: "12 Months"
          }
        },
        {
          id: 374,
          name: "Patriot P300 1TB SSD",
          description: "1000GB | 2100MB/s | 2400MB/s",
          priceUSD: 159,
          img: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2F8a28f986-f413-4ffb-bf70-7fafc60e9453.webp&w=1920&q=100",
          specs: {
            Capacity: "1000GB",
            WriteSpeed: "Up to 2100 MB/s",
            ReadSpeed: "Up to 2400 MB/s",
            FormFactor: "M.2 2280",
            Interface: "PCIe Gen 3.0 x4",
            PartNumber: "P300P1TBM28",
            Warranty: "12 Months"
          }
        },
        {
          id: 375,
          name: "Silicon Power UD90 1TB SSD",
          description: "1000GB | 4800MB/s | 5000MB/s",
          priceUSD: 219,
          img: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2F1TB-WD_BLACK-SN850X-NVMe-SSD-1iRe6i.webp&w=1920&q=100",
          specs: {
            Capacity: "1000GB",
            WriteSpeed: "Up to 4800 MB/s",
            ReadSpeed: "Up to 5000 MB/s",
            FormFactor: "M.2 2280",
            Interface: "PCIe Gen 4.0 x4",
            PartNumber: "SP01KGBP44UD9005",
            Warranty: "12 Months"
          }
        },
        {
          id: 376,
          name: "HP FX900 Pro 1TB SSD",
          description: "1000GB | 6200MB/s | 7400MB/s",
          priceUSD: 399,
          img: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FWD-Blue-1TB-SN550-NVMe-SSD_1CIKNz.webp&w=1920&q=100",
          specs: {
            Capacity: "1000GB",
            WriteSpeed: "Up to 6200 MB/s",
            ReadSpeed: "Up to 7400 MB/s",
            FormFactor: "M.2 2280",
            Interface: "PCIe Gen 4.0 x4",
            PartNumber: "4A3U6AA",
            Warranty: "24 Months"
          }
        },
        {
          id: 377,
          name: "Transcend MTE220S 1TB SSD",
          description: "1000GB | 2800MB/s | 3500MB/s",
          priceUSD: 189,
          img: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2F7884b5a6-77c8-4fed-915c-303b1609939f.webp&w=1920&q=100",
          specs: {
            Capacity: "1000GB",
            WriteSpeed: "Up to 2800 MB/s",
            ReadSpeed: "Up to 3500 MB/s",
            FormFactor: "M.2 2280",
            Interface: "PCIe Gen 3.0 x4",
            PartNumber: "TS1TMTE220S",
            Warranty: "12 Months"
          }
        },
        {
          id: 378,
          name: "Kioxia Exceria G2 1TB SSD",
          description: "1000GB | 2100MB/s | 2400MB/s",
          priceUSD: 169,
          img: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FWD_BLACK-SN750-500GB-SSD_1XvDsN.webp&w=1920&q=100",
          specs: {
            Capacity: "1000GB",
            WriteSpeed: "Up to 2100 MB/s",
            ReadSpeed: "Up to 2400 MB/s",
            FormFactor: "M.2 2280",
            Interface: "PCIe Gen 3.0 x4",
            PartNumber: "LRC20Z001TG8",
            Warranty: "12 Months"
          }
        },
        {
          id: 379,
          name: "ADATA Legend 960 1TB SSD",
          description: "1000GB | 6000MB/s | 7400MB/s",
          priceUSD: 389,
          img: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FAcer-Predator-GM7000-1TB-NVMe-Gen4-Gaming-SSD1Vd7_.webp&w=1920&q=100",
          specs: {
            Capacity: "1000GB",
            WriteSpeed: "Up to 6000 MB/s",
            ReadSpeed: "Up to 7400 MB/s",
            FormFactor: "M.2 2280",
            Interface: "PCIe Gen 4.0 x4",
            PartNumber: "ALEG-960-1TCS",
            Warranty: "24 Months"
          }
        }
      ],                 
    },
    peripherals: {
      headphones: [
        {
          id: 380,
          name: "Fantech WH02S Go Air Wireless Headset",
          description: "Bluetooth / 3.5mm | 32 Ohm | 20-20,000Hz",
          priceUSD: 79,
          img: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2Fe35c2fc0-1a24-422a-a062-171768f8e5b6.webp&w=1920&q=100",
          specs: {
            ConnectionType: "Wireless",
            Connectivity: "Bluetooth / Wired 3.5mm TRRS",
            Interface: "USB-C, 3.5mm TRS",
            FrequencyRange: "20-20,000Hz",
            Impedance: "32 Ohm",
            DriverSize: "50mm",
            Sensitivity: "116 dB",
            Battery: "200 mAh",
            Weight: "134 g"
          }
        },
        {
          id: 381,
          name: "Fantech WH02S Go Air Wireless Headset",
          description: "Bluetooth / 3.5mm | 32 Ohm | 20-20,000Hz",
          priceUSD: 79,
          img: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2Ffb7b06e1-97de-4b96-9f12-51412fd1f916.webp&w=1920&q=100",
          specs: {
            ConnectionType: "Wireless",
            Connectivity: "Bluetooth / Wired 3.5mm TRRS",
            Interface: "USB-C, 3.5mm TRS",
            FrequencyRange: "20-20,000Hz",
            Impedance: "32 Ohm",
            DriverSize: "50mm",
            Sensitivity: "116 dB",
            Battery: "200 mAh",
            Weight: "134 g"
          }
        },
        {
          id: 382,
          name: "Fantech WH02S Pro Gaming Headset",
          description: "Bluetooth / 3.5mm | 32 Ohm | 20-20,000Hz",
          priceUSD: 89,
          img: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FFantech-WH02S-Go-Air-Wireless-Headset-1pl3WE.webp&w=1920&q=100",
          specs: {
            ConnectionType: "Wireless",
            Connectivity: "Bluetooth / Wired 3.5mm TRRS",
            Interface: "USB-C, 3.5mm TRS",
            FrequencyRange: "20-20,000Hz",
            Impedance: "32 Ohm",
            DriverSize: "50mm",
            Sensitivity: "118 dB",
            Battery: "220 mAh",
            Weight: "136 g"
          }
        },
        {
          id: 383,
          name: "Logitech G435 LIGHTSPEED Wireless Headset",
          description: "Bluetooth | 32 Ohm | 20-20,000Hz",
          priceUSD: 109,
          img: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2F65306698-011d-42a6-a6d8-58c1f36bd3c3.webp&w=1920&q=100",
          specs: {
            ConnectionType: "Wireless",
            Connectivity: "Bluetooth",
            Interface: "USB-C",
            FrequencyRange: "20-20,000Hz",
            Impedance: "32 Ohm",
            DriverSize: "40mm",
            Sensitivity: "105 dB",
            Battery: "200 mAh",
            Weight: "165 g"
          }
        },
        {
          id: 384,
          name: "HyperX Cloud Stinger Core Wireless",
          description: "Wireless | 30 Ohm | 20-20,000Hz",
          priceUSD: 95,
          img: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2F639b5d3a-58ec-40c6-b958-46c309359266.webp&w=1920&q=100",
          specs: {
            ConnectionType: "Wireless",
            Connectivity: "2.4 GHz Wireless / 3.5mm TRRS",
            Interface: "USB-C, 3.5mm TRS",
            FrequencyRange: "20-20,000Hz",
            Impedance: "30 Ohm",
            DriverSize: "40mm",
            Sensitivity: "100 dB",
            Battery: "180 mAh",
            Weight: "160 g"
          }
        },
        {
          id: 385,
          name: "Razer Kraken V4 X Wired Gaming Headset",
          description: "3.5mm TRRS | 32 Ohm | 20-20,000Hz",
          priceUSD: 129,
          img: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FRazer-Kraken-V4-X-1-Bbwf.webp&w=1920&q=100",
          specs: {
            ConnectionType: "Wired",
            Connectivity: "3.5mm TRRS",
            Interface: "3.5mm TRS",
            FrequencyRange: "20-20,000Hz",
            Impedance: "32 Ohm",
            DriverSize: "50mm",
            Sensitivity: "110 dB",
            Battery: "N/A",
            Weight: "280 g"
          }
        },
        {
          id: 386,
          name: "SteelSeries Arctis 1 Wireless Headset",
          description: "Wireless / 3.5mm | 32 Ohm | 20-20,000Hz",
          priceUSD: 119,
          img: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2F46f88f1b-b9d9-47b6-afff-abfc27c9458e.webp&w=1920&q=100",
          specs: {
            ConnectionType: "Wireless",
            Connectivity: "2.4GHz Wireless / 3.5mm TRRS",
            Interface: "USB-C, 3.5mm TRS",
            FrequencyRange: "20-20,000Hz",
            Impedance: "32 Ohm",
            DriverSize: "40mm",
            Sensitivity: "108 dB",
            Battery: "220 mAh",
            Weight: "259 g"
          }
        },
        {
          id: 387,
          name: "Fantech HG15 Wired Gaming Headset",
          description: "3.5mm TRRS | 32 Ohm | 20-20,000Hz",
          priceUSD: 69,
          img: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2Ff1229cd3-4d90-4aaa-9a10-ed70040432b3.webp&w=1920&q=100",
          specs: {
            ConnectionType: "Wired",
            Connectivity: "3.5mm TRRS",
            Interface: "3.5mm TRS",
            FrequencyRange: "20-20,000Hz",
            Impedance: "32 Ohm",
            DriverSize: "50mm",
            Sensitivity: "115 dB",
            Battery: "N/A",
            Weight: "200 g"
          }
        },
        {
          id: 388,
          name: "Corsair HS50 Pro Stereo Gaming Headset",
          description: "3.5mm | 32 Ohm | 20-20,000Hz",
          priceUSD: 89,
          img: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2F0fa143dd-ffc6-4a0c-8b77-8aca43cb0036.webp&w=1920&q=100",
          specs: {
            ConnectionType: "Wired",
            Connectivity: "3.5mm TRRS",
            Interface: "3.5mm TRS",
            FrequencyRange: "20-20,000Hz",
            Impedance: "32 Ohm",
            DriverSize: "50mm",
            Sensitivity: "114 dB",
            Battery: "N/A",
            Weight: "330 g"
          }
        },
        {
          id: 389,
          name: "Fantech HG22 Pro RGB Gaming Headset",
          description: "3.5mm / USB | 32 Ohm | 20-20,000Hz",
          priceUSD: 79,
          img: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2Ffb7b06e1-97de-4b96-9f12-51412fd1f916.webp&w=1920&q=100",
          specs: {
            ConnectionType: "Wired",
            Connectivity: "3.5mm TRRS / USB",
            Interface: "USB-C, 3.5mm TRS",
            FrequencyRange: "20-20,000Hz",
            Impedance: "32 Ohm",
            DriverSize: "50mm",
            Sensitivity: "116 dB",
            Battery: "N/A",
            Weight: "210 g"
          }
        },
        {
          id: 390,
          name: "Razer BlackShark V2 X Wired Headset",
          description: "3.5mm | 32 Ohm | 12-28,000Hz",
          priceUSD: 99,
          img: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FFantech-WH02S-Go-Air-Wireless-Headset-1pl3WE.webp&w=1920&q=100",
          specs: {
            ConnectionType: "Wired",
            Connectivity: "3.5mm TRRS",
            Interface: "3.5mm TRS",
            FrequencyRange: "12-28,000Hz",
            Impedance: "32 Ohm",
            DriverSize: "50mm",
            Sensitivity: "109 dB",
            Battery: "N/A",
            Weight: "262 g"
          }
        },
        {
          id: 391,
          name: "SteelSeries Arctis 3 Bluetooth Headset",
          description: "Bluetooth | 32 Ohm | 20-20,000Hz",
          priceUSD: 119,
          img: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2F65306698-011d-42a6-a6d8-58c1f36bd3c3.webp&w=1920&q=100",
          specs: {
            ConnectionType: "Wireless",
            Connectivity: "Bluetooth",
            Interface: "USB-C",
            FrequencyRange: "20-20,000Hz",
            Impedance: "32 Ohm",
            DriverSize: "40mm",
            Sensitivity: "107 dB",
            Battery: "250 mAh",
            Weight: "220 g"
          }
        },
        {
          id: 392,
          name: "Fantech HG19 Gaming Headset",
          description: "3.5mm TRRS | 32 Ohm | 20-20,000Hz",
          priceUSD: 69,
          img: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2F639b5d3a-58ec-40c6-b958-46c309359266.webp&w=1920&q=100",
          specs: {
            ConnectionType: "Wired",
            Connectivity: "3.5mm TRRS",
            Interface: "3.5mm TRS",
            FrequencyRange: "20-20,000Hz",
            Impedance: "32 Ohm",
            DriverSize: "50mm",
            Sensitivity: "115 dB",
            Battery: "N/A",
            Weight: "205 g"
          }
        },
        {
          id: 393,
          name: "HyperX Cloud II Wireless Headset",
          description: "Wireless | 32 Ohm | 20-20,000Hz",
          priceUSD: 149,
          img: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FRazer-Kraken-V4-X-1-Bbwf.webp&w=1920&q=100",
          specs: {
            ConnectionType: "Wireless",
            Connectivity: "2.4GHz Wireless / USB",
            Interface: "USB-C",
            FrequencyRange: "20-20,000Hz",
            Impedance: "32 Ohm",
            DriverSize: "53mm",
            Sensitivity: "110 dB",
            Battery: "300 mAh",
            Weight: "305 g"
          }
        }
      ],                         
      microphones: [
        {
          id: 394,
          name: "HyperX QuadCast S Gaming USB Microphone",
          description: "20-20,000 Hz | -36 dB | USB C",
          priceUSD: 179,
          img: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FHyperX-QuadCast-S-Gaming-USB-Microphone_1xb2jT.webp&w=1920&q=100",
          specs: {
            Connectivity: "USB-C, 3.5mm headphone output",
            FrequencyRange: "20 Hz - 20 kHz",
            Sensitivity: "-36 dB",
            RMS: "-95 dBFS",
            LightEffect: "2 Zone RGB",
            CableLength: "3 m",
            Weight: "254 g"
          }
        },
        {
          id: 395,
          name: "HyperX SoloCast USB Microphone",
          description: "20-20,000 Hz | -34 dB | USB C",
          priceUSD: 99,
          img: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FHyperX-SoloCast-Microphone-Black-1ESOJt.webp&w=1920&q=100",
          specs: {
            Connectivity: "USB-C",
            FrequencyRange: "20 Hz - 20 kHz",
            Sensitivity: "-34 dB",
            RMS: "-92 dBFS",
            LightEffect: "1 Zone RGB",
            CableLength: "2 m",
            Weight: "250 g"
          }
        },
        {
          id: 396,
          name: "Razer Seiren Mini USB Condenser Microphone",
          description: "20-20,000 Hz | -33 dB | USB",
          priceUSD: 79,
          img: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FRazer-Seiren-Mini-USB-Condenser-Microphone-15x6P2.webp&w=1920&q=100",
          specs: {
            Connectivity: "USB",
            FrequencyRange: "20 Hz - 20 kHz",
            Sensitivity: "-33 dB",
            RMS: "-90 dBFS",
            LightEffect: "N/A",
            CableLength: "1.8 m",
            Weight: "254 g"
          }
        },
        {
          id: 397,
          name: "Razer Seiren V2 X USB Microphone",
          description: "20-20,000 Hz | -35 dB | USB",
          priceUSD: 119,
          img: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FRazer-Seiren-V2-X_1ilRVu.webp&w=1920&q=100",
          specs: {
            Connectivity: "USB",
            FrequencyRange: "20 Hz - 20 kHz",
            Sensitivity: "-35 dB",
            RMS: "-93 dBFS",
            LightEffect: "1 Zone RGB",
            CableLength: "2 m",
            Weight: "256 g"
          }
        },
        {
          id: 398,
          name: "HyperX QuadCast USB Microphone",
          description: "20-20,000 Hz | -36 dB | USB",
          priceUSD: 159,
          img: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FHyperX-QuadCast---USB-Microphone_1NiT1b.webp&w=1920&q=100",
          specs: {
            Connectivity: "USB",
            FrequencyRange: "20 Hz - 20 kHz",
            Sensitivity: "-36 dB",
            RMS: "-95 dBFS",
            LightEffect: "2 Zone RGB",
            CableLength: "3 m",
            Weight: "254 g"
          }
        },
        {
          id: 399,
          name: "Fantech MG11 Streaming Microphone",
          description: "20-20,000 Hz | -32 dB | USB",
          priceUSD: 89,
          img: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2Fbca4568c-7ecb-47c1-8f14-766da6749707.webp&w=1920&q=100",
          specs: {
            Connectivity: "USB",
            FrequencyRange: "20 Hz - 20 kHz",
            Sensitivity: "-32 dB",
            RMS: "-90 dBFS",
            LightEffect: "RGB",
            CableLength: "2.5 m",
            Weight: "240 g"
          }
        },
        {
          id: 400,
          name: "Elgato Wave:3 USB Condenser Microphone",
          description: "20-20,000 Hz | -37 dB | USB",
          priceUSD: 159,
          img: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2F3c4c8b07-23a8-4bc2-aa3a-088480ba9a42.webp&w=1920&q=100",
          specs: {
            Connectivity: "USB",
            FrequencyRange: "20 Hz - 20 kHz",
            Sensitivity: "-37 dB",
            RMS: "-96 dBFS",
            LightEffect: "1 Zone RGB",
            CableLength: "3 m",
            Weight: "259 g"
          }
        }
      ],            
      keyboardMouseCombo: [
        {
          id: 401,
          name: "Fantech Hero P31 Gaming 3-in-1 Combo Set",
          description: "Wired / Wireless | RGB | Multimedia Keys",
          priceUSD: 69,
          img: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FFantech-Hero-P31-Gaming-3-in-1-Combo-Set-1vEKYu.webp&w=1920&q=100",
          specs: {
            ConnectionType: "Wired / Wireless",
            KeyboardType: "Membrane",
            MouseDPI: "800-3200",
            Keys: "Multimedia + 104 Keys",
            Lighting: "RGB",
            CableLength: "1.8 m",
            Weight: "1.2 kg",
            Compatibility: "Windows / Mac"
          }
        },
        {
          id: 402,
          name: "HP KM100SYBNQ Wired Keyboard & Mouse Combo",
          description: "Wired | Multimedia Keys | Standard Layout",
          priceUSD: 49,
          img: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FHP-KM100SYBNQ.webp&w=1920&q=100",
          specs: {
            ConnectionType: "Wired",
            KeyboardType: "Membrane",
            MouseDPI: "1000",
            Keys: "Multimedia + 104 Keys",
            Lighting: "No",
            CableLength: "1.5 m",
            Weight: "1.1 kg",
            Compatibility: "Windows"
          }
        },
        {
          id: 403,
          name: "HP CS10 Wireless Keyboard & Mouse Combo",
          description: "Wireless | Compact | White",
          priceUSD: 59,
          img: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2Fhp-cs10-wireless-keyboard-mouse-combo-white-18HV24.webp&w=1920&q=100",
          specs: {
            ConnectionType: "Wireless 2.4 GHz",
            KeyboardType: "Membrane",
            MouseDPI: "1200",
            Keys: "Multimedia + 87 Keys",
            Lighting: "No",
            Battery: "Keyboard: 2xAAA, Mouse: 1xAA",
            Weight: "0.85 kg",
            Compatibility: "Windows / Mac"
          }
        },
        {
          id: 404,
          name: "Redragon BS-8772 Wireless Keyboard & Mouse",
          description: "Wireless | RGB | Gaming Combo",
          priceUSD: 79,
          img: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FRedragon-BS-8772-Wireless-Keyboard-and-Mouse-2sx1fS.webp&w=1920&q=100",
          specs: {
            ConnectionType: "Wireless 2.4 GHz",
            KeyboardType: "Membrane",
            MouseDPI: "800-3200",
            Keys: "Multimedia + 104 Keys",
            Lighting: "RGB",
            Battery: "Keyboard: 2xAAA, Mouse: 1xAA",
            Weight: "1.0 kg",
            Compatibility: "Windows / Mac"
          }
        },
        {
          id: 405,
          name: "A4Tech KR-8572S Keyboard & Mouse Combo",
          description: "Wired | Standard Layout | Durable",
          priceUSD: 39,
          img: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FA4Tech-KR-8572S-Keyboard-and-mouse_1VGdZr.webp&w=1920&q=100",
          specs: {
            ConnectionType: "Wired",
            KeyboardType: "Membrane",
            MouseDPI: "1000",
            Keys: "Standard + Multimedia Keys",
            Lighting: "No",
            CableLength: "1.5 m",
            Weight: "1.0 kg",
            Compatibility: "Windows"
          }
        },
        {
          id: 406,
          name: "ZIYOU-LANG RK-T8 Wireless Keyboard & Mouse Combo",
          description: "Wireless | Compact | Multimedia Keys",
          priceUSD: 55,
          img: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FZIYOU-LANG-RK-T8PR04FpNr.webp&w=1920&q=100",
          specs: {
            ConnectionType: "Wireless 2.4 GHz",
            KeyboardType: "Membrane",
            MouseDPI: "1200",
            Keys: "Multimedia + 87 Keys",
            Lighting: "No",
            Battery: "Keyboard: 2xAAA, Mouse: 1xAA",
            Weight: "0.9 kg",
            Compatibility: "Windows / Mac"
          }
        }
      ],           
    },
    monitors: [
      {
        id: 407,
        name: "Dell Alienware AW3425DWM Gaming Monitor",
        description: "34\" WQHD | 180Hz | 400 nits | 1ms | 1500R | Pivot",
        priceUSD: 1099,
        img: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FDell-Alienware-AW3425DWM-Gaming-Monitor-1fbYR_.webp&w=1920&q=100",
        specs: {
          DisplaySize: "34\" WQHD (3440 x 1440)",
          PanelType: "VA",
          AspectRatio: "21:9",
          Curvature: "1500R",
          RefreshRate: "180 Hz",
          ResponseTime: "1ms (Ext), 2ms (GtG)",
          ViewingAngle: "178°",
          Brightness: "400 cd/m²",
          Color: "1.7 Billion",
          VideoPorts: "2x HDMI, 1x DisplayPort 1.4",
          USBPorts: "2x USB 5Gbps Type-A, 1x USB 5Gbps Type-B",
          StandAdjustments: "Height, Pivot, Tilt",
          Weight: "6.57 kg",
          Warranty: "12 Months"
        }
      },
      {
        id: 408,
        name: "Dell 34 Curved Gaming Monitor S3422DWG",
        description: "34\" WQHD | 165Hz | 400 nits | 1ms | 1500R | Tilt",
        priceUSD: 649,
        img: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FDell-34-Curved-Gaming-Monitor-S3422DWG_10Q6NH.webp&w=1920&q=100",
        specs: {
          DisplaySize: "34\" WQHD (3440 x 1440)",
          PanelType: "VA",
          AspectRatio: "21:9",
          Curvature: "1500R",
          RefreshRate: "165 Hz",
          ResponseTime: "1ms (MPRT)",
          ViewingAngle: "178°",
          Brightness: "400 cd/m²",
          Color: "1.07 Billion",
          VideoPorts: "2x HDMI, 1x DisplayPort 1.4",
          USBPorts: "2x USB 3.0 Type-A",
          StandAdjustments: "Tilt",
          Weight: "5.8 kg",
          Warranty: "12 Months"
        }
      },
      {
        id: 409,
        name: "MSI MAG 274QRFW White Gaming Monitor",
        description: "27\" QHD | 165Hz | 1ms | HDR | Tilt/Swivel",
        priceUSD: 449,
        img: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FMS%C4%B0%20MAG%20274QRFW%20White%20Gaming%20Monitor-10WCEL.webp&w=1920&q=100",
        specs: {
          DisplaySize: "27\" QHD (2560 x 1440)",
          PanelType: "IPS",
          AspectRatio: "16:9",
          Curvature: "Flat",
          RefreshRate: "165 Hz",
          ResponseTime: "1ms",
          ViewingAngle: "178°",
          Brightness: "350 cd/m²",
          Color: "1.07 Billion",
          VideoPorts: "2x HDMI, 1x DisplayPort 1.2",
          USBPorts: "2x USB 2.0",
          StandAdjustments: "Tilt / Swivel",
          Weight: "5.2 kg",
          Warranty: "12 Months"
        }
      },
      {
        id: 410,
        name: "Philips 27E1N21 100Hz Monitor",
        description: "27\" FHD | 100Hz | 4ms | Tilt | Flicker-Free",
        priceUSD: 249,
        img: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FPhilips-27E1N21-100Hz-Monitor-1SPMQ5.webp&w=1920&q=100",
        specs: {
          DisplaySize: "27\" FHD (1920 x 1080)",
          PanelType: "IPS",
          AspectRatio: "16:9",
          Curvature: "Flat",
          RefreshRate: "100 Hz",
          ResponseTime: "4ms",
          ViewingAngle: "178°",
          Brightness: "300 cd/m²",
          Color: "16.7 Million",
          VideoPorts: "1x HDMI, 1x DisplayPort",
          USBPorts: "None",
          StandAdjustments: "Tilt",
          Weight: "4.3 kg",
          Warranty: "12 Months"
        }
      },
      {
        id: 411,
        name: "Lenovo ThinkVision T24-40 Monitor",
        description: "23.8\" FHD | 75Hz | IPS | Tilt/Height/Pivot",
        priceUSD: 199,
        img: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FLenovo-ThinkVision-T24-40-Monitor-1HdKZB.webp&w=1920&q=100",
        specs: {
          DisplaySize: "23.8\" FHD (1920 x 1080)",
          PanelType: "IPS",
          AspectRatio: "16:9",
          Curvature: "Flat",
          RefreshRate: "75 Hz",
          ResponseTime: "4ms",
          ViewingAngle: "178°",
          Brightness: "250 cd/m²",
          Color: "16.7 Million",
          VideoPorts: "1x HDMI, 1x DisplayPort",
          USBPorts: "2x USB 3.0",
          StandAdjustments: "Tilt / Height / Pivot",
          Weight: "4.8 kg",
          Warranty: "12 Months"
        }
      },
      {
        id: 412,
        name: "ASUS ROG Strix OLED XG34WCDG",
        description: "34\" WQHD | 175Hz | 0.1ms | HDR | Curved",
        priceUSD: 1299,
        img: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FASUS-ROG-Strix-OLED-XG34WCDG-1ziozB.webp&w=1920&q=100",
        specs: {
          DisplaySize: "34\" WQHD (3440 x 1440)",
          PanelType: "OLED",
          AspectRatio: "21:9",
          Curvature: "1800R",
          RefreshRate: "175 Hz",
          ResponseTime: "0.1ms",
          ViewingAngle: "178°",
          Brightness: "400 cd/m²",
          Color: "1.07 Billion",
          VideoPorts: "2x HDMI, 1x DisplayPort 1.4",
          USBPorts: "2x USB 3.0",
          StandAdjustments: "Tilt / Height / Swivel",
          Weight: "6.5 kg",
          Warranty: "12 Months"
        }
      },
      {
        id: 413,
        name: "Lenovo ThinkVision P24q-30 Monitor",
        description: "23.8\" QHD | 75Hz | IPS | Height/Tilt/Swivel",
        priceUSD: 269,
        img: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FLenovo-ThinkVision-P24q-30-Monitor-1nYsqa.webp&w=1920&q=100",
        specs: {
          DisplaySize: "23.8\" QHD (2560 x 1440)",
          PanelType: "IPS",
          AspectRatio: "16:9",
          Curvature: "Flat",
          RefreshRate: "75 Hz",
          ResponseTime: "4ms",
          ViewingAngle: "178°",
          Brightness: "300 cd/m²",
          Color: "1.07 Billion",
          VideoPorts: "1x HDMI, 1x DisplayPort",
          USBPorts: "2x USB 3.0",
          StandAdjustments: "Tilt / Height / Swivel",
          Weight: "5.0 kg",
          Warranty: "12 Months"
        }
      },
      {
        id: 414,
        name: "ASUS ROG Strix XG32WCMS",
        description: "32\" WQHD | 165Hz | 1ms | Curved | FreeSync",
        priceUSD: 599,
        img: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FASUS-ROG-Strix-XG32WCMS-1_Wpb0.webp&w=1920&q=100",
        specs: {
          DisplaySize: "32\" WQHD (2560 x 1440)",
          PanelType: "VA",
          AspectRatio: "16:9",
          Curvature: "1500R",
          RefreshRate: "165 Hz",
          ResponseTime: "1ms",
          ViewingAngle: "178°",
          Brightness: "400 cd/m²",
          Color: "1.07 Billion",
          VideoPorts: "2x HDMI, 1x DisplayPort",
          USBPorts: "2x USB 3.0",
          StandAdjustments: "Tilt / Height / Swivel",
          Weight: "6.0 kg",
          Warranty: "12 Months"
        }
      },
      {
        id: 415,
        name: "Dell 27 Gaming Monitor S2722DGM",
        description: "27\" QHD | 165Hz | 1ms | Tilt/Height",
        priceUSD: 429,
        img: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2F5-tezeeeeh0H6k.webp&w=1920&q=100",
        specs: {
          DisplaySize: "27\" QHD (2560 x 1440)",
          PanelType: "IPS",
          AspectRatio: "16:9",
          Curvature: "Flat",
          RefreshRate: "165 Hz",
          ResponseTime: "1ms (MPRT)",
          ViewingAngle: "178°",
          Brightness: "350 cd/m²",
          Color: "1.07 Billion",
          VideoPorts: "2x HDMI, 1x DisplayPort",
          USBPorts: "2x USB 3.0",
          StandAdjustments: "Tilt / Height",
          Weight: "5.1 kg",
          Warranty: "12 Months"
        }
      },
      {
        id: 416,
        name: "Dell 27 Monitor S2722QC",
        description: "27\" 4K UHD | 60Hz | IPS | Tilt/Height",
        priceUSD: 399,
        img: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2F5-yeniiiiiiiii5tx2u.webp&w=1920&q=100",
        specs: {
          DisplaySize: "27\" 4K UHD (3840 x 2160)",
          PanelType: "IPS",
          AspectRatio: "16:9",
          Curvature: "Flat",
          RefreshRate: "60 Hz",
          ResponseTime: "5ms",
          ViewingAngle: "178°",
          Brightness: "350 cd/m²",
          Color: "1.07 Billion",
          VideoPorts: "2x HDMI, 1x DisplayPort 1.2",
          USBPorts: "2x USB 3.0",
          StandAdjustments: "Tilt / Height",
          Weight: "5.0 kg",
          Warranty: "12 Months"
        }
      },
      {
        id: 417,
        name: "LG 27GN800-B Gaming Monitor",
        description: "27\" QHD | 144Hz | 1ms | IPS | HDR10",
        priceUSD: 359,
        img: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2F2yeniiiiiiiDIoyM.webp&w=1920&q=100",
        specs: {
          DisplaySize: "27\" QHD (2560 x 1440)",
          PanelType: "IPS",
          AspectRatio: "16:9",
          Curvature: "Flat",
          RefreshRate: "144 Hz",
          ResponseTime: "1ms",
          ViewingAngle: "178°",
          Brightness: "350 cd/m²",
          Color: "1.07 Billion",
          VideoPorts: "2x HDMI, 1x DisplayPort 1.4",
          USBPorts: "None",
          StandAdjustments: "Tilt / Height / Swivel",
          Weight: "4.7 kg",
          Warranty: "12 Months"
        }
      },
      {
        id: 418,
        name: "Samsung Odyssey G5 LC27G55TQWRXEN",
        description: "27\" WQHD | 165Hz | 1ms | Curved | FreeSync",
        priceUSD: 329,
        img: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2F5-yeniiiiiiiiiiLTPPd.webp&w=1920&q=100",
        specs: {
          DisplaySize: "27\" WQHD (2560 x 1440)",
          PanelType: "VA",
          AspectRatio: "16:9",
          Curvature: "1000R",
          RefreshRate: "165 Hz",
          ResponseTime: "1ms (MPRT)",
          ViewingAngle: "178°",
          Brightness: "300 cd/m²",
          Color: "1.07 Billion",
          VideoPorts: "2x HDMI, 1x DisplayPort 1.2",
          USBPorts: "None",
          StandAdjustments: "Tilt / Height",
          Weight: "5.5 kg",
          Warranty: "12 Months"
        }
      },
      {
        id: 419,
        name: "ASUS TUF Gaming VG27AQ1A",
        description: "27\" QHD | 165Hz | 1ms | IPS | G-Sync Compatible",
        priceUSD: 429,
        img: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FLenovo-ThinkVision-P24q-30-Monitor-1nYsqa.webp&w=1920&q=100",
        specs: {
          DisplaySize: "27\" QHD (2560 x 1440)",
          PanelType: "IPS",
          AspectRatio: "16:9",
          Curvature: "Flat",
          RefreshRate: "165 Hz",
          ResponseTime: "1ms",
          ViewingAngle: "178°",
          Brightness: "350 cd/m²",
          Color: "1.07 Billion",
          VideoPorts: "2x HDMI, 1x DisplayPort 1.2",
          USBPorts: "2x USB 3.0",
          StandAdjustments: "Tilt / Height / Swivel",
          Weight: "5.0 kg",
          Warranty: "12 Months"
        }
      },
      {
        id: 420,
        name: "AOC 24G2U/BK Gaming Monitor",
        description: "24\" FHD | 144Hz | 1ms | IPS | FreeSync",
        priceUSD: 229,
        img: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FMSI-Modern-MD342CQPW-1Lny5d.webp&w=1920&q=100",
        specs: {
          DisplaySize: "24\" FHD (1920 x 1080)",
          PanelType: "IPS",
          AspectRatio: "16:9",
          Curvature: "Flat",
          RefreshRate: "144 Hz",
          ResponseTime: "1ms",
          ViewingAngle: "178°",
          Brightness: "250 cd/m²",
          Color: "16.7 Million",
          VideoPorts: "1x HDMI, 1x DisplayPort",
          USBPorts: "2x USB 3.0",
          StandAdjustments: "Tilt / Height",
          Weight: "4.2 kg",
          Warranty: "12 Months"
        }
      },
      {
        id: 421,
        name: "LG UltraGear 32GN600-B",
        description: "32\" FHD | 165Hz | 1ms | VA Panel | HDR10",
        priceUSD: 379,
        img: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2F2yeniiiiiiiDIoyM.webp&w=1920&q=100",
        specs: {
          DisplaySize: "32\" FHD (1920 x 1080)",
          PanelType: "VA",
          AspectRatio: "16:9",
          Curvature: "1500R",
          RefreshRate: "165 Hz",
          ResponseTime: "1ms",
          ViewingAngle: "178°",
          Brightness: "350 cd/m²",
          Color: "1.07 Billion",
          VideoPorts: "2x HDMI, 1x DisplayPort",
          USBPorts: "None",
          StandAdjustments: "Tilt / Height / Swivel",
          Weight: "6.1 kg",
          Warranty: "12 Months"
        }
      },
      {
        id: 422,
        name: "Philips 242E1CA Curved Monitor",
        description: "24\" FHD | 75Hz | 4ms | Curved | VA Panel",
        priceUSD: 159,
        img: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2F5-yeniiiiiiiiiiLTPPd.webp&w=1920&q=100",
        specs: {
          DisplaySize: "24\" FHD (1920 x 1080)",
          PanelType: "VA",
          AspectRatio: "16:9",
          Curvature: "1500R",
          RefreshRate: "75 Hz",
          ResponseTime: "4ms",
          ViewingAngle: "178°",
          Brightness: "250 cd/m²",
          Color: "16.7 Million",
          VideoPorts: "1x HDMI, 1x DisplayPort",
          USBPorts: "None",
          StandAdjustments: "Tilt",
          Weight: "3.8 kg",
          Warranty: "12 Months"
        }
      },
      {
        id: 423,
        name: "Acer Nitro VG271U Pbmiipx",
        description: "27\" QHD | 165Hz | 1ms | IPS | FreeSync",
        priceUSD: 359,
        img: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2F5-yeniiiiiiiii5tx2u.webp&w=1920&q=100",
        specs: {
          DisplaySize: "27\" QHD (2560 x 1440)",
          PanelType: "IPS",
          AspectRatio: "16:9",
          Curvature: "Flat",
          RefreshRate: "165 Hz",
          ResponseTime: "1ms",
          ViewingAngle: "178°",
          Brightness: "350 cd/m²",
          Color: "1.07 Billion",
          VideoPorts: "2x HDMI, 1x DisplayPort",
          USBPorts: "2x USB 3.0",
          StandAdjustments: "Tilt / Height / Swivel",
          Weight: "5.0 kg",
          Warranty: "12 Months"
        }
      },
      {
        id: 424,
        name: "Samsung Odyssey G7 LC32G75TQSNXZA",
        description: "32\" QHD | 240Hz | 1ms | Curved | G-Sync",
        priceUSD: 699,
        img: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2F5-yeniiiiiiiiiiLTPPd.webp&w=1920&q=100",
        specs: {
          DisplaySize: "32\" QHD (2560 x 1440)",
          PanelType: "VA",
          AspectRatio: "16:9",
          Curvature: "1000R",
          RefreshRate: "240 Hz",
          ResponseTime: "1ms",
          ViewingAngle: "178°",
          Brightness: "350 cd/m²",
          Color: "1.07 Billion",
          VideoPorts: "2x HDMI, 1x DisplayPort 1.4",
          USBPorts: "None",
          StandAdjustments: "Tilt / Height / Swivel",
          Weight: "6.5 kg",
          Warranty: "12 Months"
        }
      },
      {
        id: 425,
        name: "ASUS ProArt PA278QV",
        description: "27\" QHD | 75Hz | 5ms | IPS | Color Accuracy",
        priceUSD: 399,
        img: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2F1e7V2l.webp&w=1920&q=100",
        specs: {
          DisplaySize: "27\" QHD (2560 x 1440)",
          PanelType: "IPS",
          AspectRatio: "16:9",
          Curvature: "Flat",
          RefreshRate: "75 Hz",
          ResponseTime: "5ms",
          ViewingAngle: "178°",
          Brightness: "350 cd/m²",
          Color: "1.07 Billion",
          VideoPorts: "2x HDMI, 1x DisplayPort 1.2",
          USBPorts: "4x USB 3.0",
          StandAdjustments: "Tilt / Height / Swivel / Pivot",
          Weight: "5.2 kg",
          Warranty: "12 Months"
        }
      },
      {
        id: 426,
        name: "LG 32UN650-W 4K UHD Monitor",
        description: "32\" 4K UHD | 60Hz | IPS | HDR10 | Tilt/Height",
        priceUSD: 429,
        img: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2F5-yeniiiiiiiii5tx2u.webp&w=1920&q=100",
        specs: {
          DisplaySize: "32\" 4K UHD (3840 x 2160)",
          PanelType: "IPS",
          AspectRatio: "16:9",
          Curvature: "Flat",
          RefreshRate: "60 Hz",
          ResponseTime: "5ms",
          ViewingAngle: "178°",
          Brightness: "350 cd/m²",
          Color: "1.07 Billion",
          VideoPorts: "2x HDMI, 1x DisplayPort 1.2",
          USBPorts: "None",
          StandAdjustments: "Tilt / Height",
          Weight: "6.2 kg",
          Warranty: "12 Months"
        }
      },
      {
        id: 427,
        name: "Acer Predator XB273K Gaming Monitor",
        description: "27\" 4K UHD | 144Hz | 1ms | G-Sync | IPS",
        priceUSD: 699,
        img: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2F5-yeniiiiiiiiiiLTPPd.webp&w=1920&q=100",
        specs: {
          DisplaySize: "27\" 4K UHD (3840 x 2160)",
          PanelType: "IPS",
          AspectRatio: "16:9",
          Curvature: "Flat",
          RefreshRate: "144 Hz",
          ResponseTime: "1ms",
          ViewingAngle: "178°",
          Brightness: "400 cd/m²",
          Color: "1.07 Billion",
          VideoPorts: "2x HDMI, 1x DisplayPort 1.4",
          USBPorts: "4x USB 3.0",
          StandAdjustments: "Tilt / Height / Swivel",
          Weight: "5.5 kg",
          Warranty: "12 Months"
        }
      }
    ],                
    officeSupplies: [
      {
        printers: [
          {
            id: 428,
            name: "Canon PIXMA G3410 Printer",
            description: "Wi-Fi | A4 | Print, Scan, Copy | 4800 x 1200 dpi",
            priceUSD: 285,
            img: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FCanon-imageRUNNER-2425iHBGLT.webp&w=1920&q=100",
            specs: {
              Functions: "Print, Scan, Copy",
              PrintType: "Color",
              PrintSpeed: "8 ppm (B/W), 5 ppm (Color)",
              SupportedFormats: "A4, A5, B5, 10x15cm, 13x18cm, 20x25cm, Envelopes, Letter, Legal",
              Connectivity: "Wi-Fi 802.11n, Hi-Speed USB",
              Resolution: "4800 x 1200 dpi",
              InputTrayCapacity: "100 sheets",
              ScanResolution: "600 x 1200 dpi",
              MaxCopies: "20 copies",
              Weight: "6.3 kg",
              Warranty: "6 Months"
            }
          },
          {
            id: 429,
            name: "Canon imageRUNNER 2425i",
            description: "Wi-Fi | A4 | Print, Scan, Copy | 600 x 600 dpi",
            priceUSD: 720,
            img: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FCanon-imageRUNNER-2425iHBGLT.webp&w=1920&q=100",
            specs: {
              Functions: "Print, Scan, Copy",
              PrintType: "Monochrome",
              PrintSpeed: "24 ppm",
              SupportedFormats: "A4, A5, B5, Letter, Legal",
              Connectivity: "Wi-Fi, Ethernet, USB 2.0",
              Resolution: "600 x 600 dpi",
              InputTrayCapacity: "250 sheets",
              ScanResolution: "600 x 600 dpi",
              MaxCopies: "99 copies",
              Weight: "25 kg",
              Warranty: "12 Months"
            }
          },
          {
            id: 430,
            name: "HP Color LaserJet Pro MFP M479fdw",
            description: "Wi-Fi | A4 | Print, Scan, Copy, Fax | 1200 x 1200 dpi",
            priceUSD: 560,
            img: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FHP-Color-LaserJet-Pro-MFP-M479fdw_1Nn_Uh.webp&w=1920&q=100",
            specs: {
              Functions: "Print, Scan, Copy, Fax",
              PrintType: "Color Laser",
              PrintSpeed: "28 ppm (B/W & Color)",
              SupportedFormats: "A4, A5, B5, Letter, Legal",
              Connectivity: "Wi-Fi, Ethernet, USB 2.0",
              Resolution: "1200 x 1200 dpi",
              InputTrayCapacity: "300 sheets",
              ScanResolution: "600 x 600 dpi",
              MaxCopies: "99 copies",
              Weight: "22 kg",
              Warranty: "12 Months"
            }
          },
          {
            id: 431,
            name: "Canon LASERJET MF232W",
            description: "Wi-Fi | A4 | Print, Scan, Copy | 600 x 600 dpi",
            priceUSD: 195,
            img: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FCANON-LASERJET-MF232WDbIgS.webp&w=1920&q=100",
            specs: {
              Functions: "Print, Scan, Copy",
              PrintType: "Monochrome Laser",
              PrintSpeed: "23 ppm",
              SupportedFormats: "A4, A5, B5, Letter",
              Connectivity: "Wi-Fi, USB 2.0",
              Resolution: "600 x 600 dpi",
              InputTrayCapacity: "150 sheets",
              ScanResolution: "600 x 600 dpi",
              MaxCopies: "99 copies",
              Weight: "7 kg",
              Warranty: "12 Months"
            }
          },
          {
            id: 432,
            name: "HP LaserJet Pro MFP M227fdw",
            description: "Wi-Fi | A4 | Print, Scan, Copy, Fax | 1200 x 1200 dpi",
            priceUSD: 299,
            img: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FHP-LaserJet-Pro-MFP-M227fdw-1MCYpi.webp&w=1920&q=100",
            specs: {
              Functions: "Print, Scan, Copy, Fax",
              PrintType: "Monochrome Laser",
              PrintSpeed: "30 ppm",
              SupportedFormats: "A4, A5, B5, Letter, Legal",
              Connectivity: "Wi-Fi, Ethernet, USB 2.0",
              Resolution: "1200 x 1200 dpi",
              InputTrayCapacity: "250 sheets",
              ScanResolution: "600 x 600 dpi",
              MaxCopies: "99 copies",
              Weight: "8 kg",
              Warranty: "12 Months"
            }
          },
          {
            id: 433,
            name: "Canon i-Sensys LBP6033",
            description: "USB | A4 | Print Only | 600 x 600 dpi",
            priceUSD: 115,
            img: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FCanon-i-Sensys-LPB6033-Printer_18wtdN.webp&w=1920&q=100",
            specs: {
              Functions: "Print Only",
              PrintType: "Monochrome Laser",
              PrintSpeed: "18 ppm",
              SupportedFormats: "A4, A5, B5, Letter",
              Connectivity: "USB 2.0",
              Resolution: "600 x 600 dpi",
              InputTrayCapacity: "150 sheets",
              ScanResolution: "N/A",
              MaxCopies: "N/A",
              Weight: "4.5 kg",
              Warranty: "6 Months"
            }
          },
          {
            id: 434,
            name: "Brother HL-L2350DW",
            description: "Wi-Fi | A4 | Print Only | 1200 x 1200 dpi",
            priceUSD: 179,
            img: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2F18Of8J.webp&w=1920&q=100",
            specs: {
              Functions: "Print Only",
              PrintType: "Monochrome Laser",
              PrintSpeed: "32 ppm",
              SupportedFormats: "A4, Letter",
              Connectivity: "Wi-Fi, USB 2.0",
              Resolution: "1200 x 1200 dpi",
              InputTrayCapacity: "250 sheets",
              ScanResolution: "N/A",
              MaxCopies: "N/A",
              Weight: "6 kg",
              Warranty: "12 Months"
            }
          },
          {
            id: 435,
            name: "Epson EcoTank L3150",
            description: "Wi-Fi | A4 | Print, Scan, Copy | 5760 x 1440 dpi",
            priceUSD: 230,
            img: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2Ffd7c3a62-3e89-4bdd-b264-50dd0c6b2927.webp&w=1920&q=100",
            specs: {
              Functions: "Print, Scan, Copy",
              PrintType: "Inkjet",
              PrintSpeed: "10 ppm (B/W), 5 ppm (Color)",
              SupportedFormats: "A4, A5, Letter, Envelopes, Photo",
              Connectivity: "Wi-Fi, USB 2.0",
              Resolution: "5760 x 1440 dpi",
              InputTrayCapacity: "100 sheets",
              ScanResolution: "1200 x 2400 dpi",
              MaxCopies: "20 copies",
              Weight: "4.7 kg",
              Warranty: "12 Months"
            }
          },
          {
            id: 436,
            name: "Canon PIXMA G6010",
            description: "Wi-Fi | A4 | Print, Scan, Copy | 4800 x 1200 dpi",
            priceUSD: 330,
            img: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FCanon-imageRUNNER-2425iHBGLT.webp&w=1920&q=100",
            specs: {
              Functions: "Print, Scan, Copy",
              PrintType: "Color Inkjet",
              PrintSpeed: "13 ppm (B/W), 6 ppm (Color)",
              SupportedFormats: "A4, A5, B5, Letter, Envelopes, Photo",
              Connectivity: "Wi-Fi, Ethernet, USB 2.0",
              Resolution: "4800 x 1200 dpi",
              InputTrayCapacity: "250 sheets",
              ScanResolution: "600 x 1200 dpi",
              MaxCopies: "50 copies",
              Weight: "6.5 kg",
              Warranty: "12 Months"
            }
          },
          {
            id: 437,
            name: "HP DeskJet Plus 4120",
            description: "Wi-Fi | A4 | Print, Scan, Copy | 4800 x 1200 dpi",
            priceUSD: 129,
            img: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2F18Of8J.webp&w=1920&q=100",
            specs: {
              Functions: "Print, Scan, Copy",
              PrintType: "Inkjet Color",
              PrintSpeed: "8 ppm (B/W), 5 ppm (Color)",
              SupportedFormats: "A4, A5, B5, Letter, Envelopes, Photo",
              Connectivity: "Wi-Fi, USB 2.0",
              Resolution: "4800 x 1200 dpi",
              InputTrayCapacity: "100 sheets",
              ScanResolution: "600 x 1200 dpi",
              MaxCopies: "20 copies",
              Weight: "5.5 kg",
              Warranty: "12 Months"
            }
          },
          {
            id: 438,
            name: "Brother DCP-L2530DW",
            description: "Wi-Fi | A4 | Print, Scan, Copy | 1200 x 1200 dpi",
            priceUSD: 189,
            img: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FHP-LaserJet-Pro-MFP-M227fdw-1MCYpi.webp&w=1920&q=100",
            specs: {
              Functions: "Print, Scan, Copy",
              PrintType: "Monochrome Laser",
              PrintSpeed: "30 ppm",
              SupportedFormats: "A4, Letter",
              Connectivity: "Wi-Fi, USB 2.0",
              Resolution: "1200 x 1200 dpi",
              InputTrayCapacity: "250 sheets",
              ScanResolution: "600 x 600 dpi",
              MaxCopies: "99 copies",
              Weight: "7 kg",
              Warranty: "12 Months"
            }
          },
          {
            id: 439,
            name: "Epson EcoTank L5190",
            description: "Wi-Fi | A4 | Print, Scan, Copy | 5760 x 1440 dpi",
            priceUSD: 290,
            img: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2Ffd7c3a62-3e89-4bdd-b264-50dd0c6b2927.webp&w=1920&q=100",
            specs: {
              Functions: "Print, Scan, Copy",
              PrintType: "Color Inkjet",
              PrintSpeed: "10 ppm (B/W), 5 ppm (Color)",
              SupportedFormats: "A4, A5, Letter, Envelopes, Photo",
              Connectivity: "Wi-Fi, USB 2.0",
              Resolution: "5760 x 1440 dpi",
              InputTrayCapacity: "150 sheets",
              ScanResolution: "1200 x 2400 dpi",
              MaxCopies: "20 copies",
              Weight: "6 kg",
              Warranty: "12 Months"
            }
          },
          {
            id: 440,
            name: "Canon PIXMA TS8350",
            description: "Wi-Fi | A4 | Print, Scan, Copy | 4800 x 1200 dpi",
            priceUSD: 260,
            img: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FCANON-LASERJET-MF232WDbIgS.webp&w=1920&q=100",
            specs: {
              Functions: "Print, Scan, Copy",
              PrintType: "Color Inkjet",
              PrintSpeed: "15 ppm (B/W), 10 ppm (Color)",
              SupportedFormats: "A4, A5, Letter, Envelopes, Photo",
              Connectivity: "Wi-Fi, USB 2.0",
              Resolution: "4800 x 1200 dpi",
              InputTrayCapacity: "150 sheets",
              ScanResolution: "600 x 1200 dpi",
              MaxCopies: "20 copies",
              Weight: "5.7 kg",
              Warranty: "12 Months"
            }
          },
          {
            id: 441,
            name: "HP ENVY Inspire 7955e",
            description: "Wi-Fi | A4 | Print, Scan, Copy | 4800 x 1200 dpi",
            priceUSD: 199,
            img: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2F18Of8J.webp&w=1920&q=100",
            specs: {
              Functions: "Print, Scan, Copy",
              PrintType: "Inkjet Color",
              PrintSpeed: "10 ppm (B/W), 5 ppm (Color)",
              SupportedFormats: "A4, A5, Letter, Envelopes, Photo",
              Connectivity: "Wi-Fi, USB 2.0",
              Resolution: "4800 x 1200 dpi",
              InputTrayCapacity: "100 sheets",
              ScanResolution: "600 x 1200 dpi",
              MaxCopies: "20 copies",
              Weight: "6.0 kg",
              Warranty: "12 Months"
            }
          },
          {
            id: 442,
            name: "Brother HL-L2370DW",
            description: "Wi-Fi | A4 | Print Only | 1200 x 1200 dpi",
            priceUSD: 179,
            img: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FHP-LaserJet-Pro-MFP-M227fdw-1MCYpi.webp&w=1920&q=100",
            specs: {
              Functions: "Print Only",
              PrintType: "Monochrome Laser",
              PrintSpeed: "36 ppm",
              SupportedFormats: "A4, Letter",
              Connectivity: "Wi-Fi, USB 2.0",
              Resolution: "1200 x 1200 dpi",
              InputTrayCapacity: "250 sheets",
              ScanResolution: "N/A",
              MaxCopies: "N/A",
              Weight: "6 kg",
              Warranty: "12 Months"
            }
          }
        ]
      }
    ],          
    cables: [
      {
        id: 443,
        name: "UGREEN HD171 8K 2M HDMI Cable",
        description: "HDMI 2.1 | 2 M | 8K",
        priceUSD: 29,
        img: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FUGREEN-HD118-High-End-HDMI-CablecMkH8.webp&w=1920&q=100",
        specs: {
          Connector: "HDMI",
          HDMIVersion: "2.1",
          TransferRate: "48 Gbps",
          Resolution: "8K@60Hz, 4K@120Hz",
          CableLength: "2 m"
        }
      },
      {
        id: 444,
        name: "UGREEN NW102 Cat-6 LAN Cable 5M",
        description: "Ethernet | Cat-6 | 5M",
        priceUSD: 15,
        img: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FUGreen-NW102-Cat-6-U-UTP-Lan-Cable-5m-16dfjV.webp&w=1920&q=100",
        specs: {
          Connector: "RJ45",
          Category: "Cat-6 UTP",
          TransferRate: "1 Gbps",
          Resolution: "N/A",
          CableLength: "5 m"
        }
      },
      {
        id: 445,
        name: "UGREEN 240W PD3.1 USB-C Cable",
        description: "USB-C | PD3.1 | 2M",
        priceUSD: 22,
        img: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FUGREEN-240W-PD3.1-USB-C-Cable-1noyhe.webp&w=1920&q=100",
        specs: {
          Connector: "USB-C",
          Version: "PD3.1",
          TransferRate: "20 Gbps",
          Resolution: "Supports 8K via Alt Mode",
          CableLength: "2 m"
        }
      },
      {
        id: 446,
        name: "UGREEN DP109 DisplayPort to VGA Converter",
        description: "DisplayPort | VGA | 1.8M",
        priceUSD: 18,
        img: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FUGREEN-DP109-DispalyPort-to-VGA-Converter-1RshhN.webp&w=1920&q=100",
        specs: {
          Connector: "DisplayPort to VGA",
          Version: "1.2",
          TransferRate: "N/A",
          Resolution: "1920x1080",
          CableLength: "1.8 m"
        }
      },
      {
        id: 447,
        name: "UGREEN DP118 DisplayPort Cable",
        description: "DisplayPort 1.4 | 2M",
        priceUSD: 25,
        img: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FUGREEN-DP118IJt2o.webp&w=1920&q=100",
        specs: {
          Connector: "DisplayPort",
          Version: "1.4",
          TransferRate: "32.4 Gbps",
          Resolution: "8K@60Hz, 4K@144Hz",
          CableLength: "2 m"
        }
      },
      {
        id: 448,
        name: "HDMI M-M 10M Cable 4K",
        description: "HDMI 2.0 | 10 M | 4K",
        priceUSD: 35,
        img: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2FHDMI-M-M-10-Metr-4KWBtLR.webp&w=1920&q=100",
        specs: {
          Connector: "HDMI",
          HDMIVersion: "2.0",
          TransferRate: "18 Gbps",
          Resolution: "4K@60Hz",
          CableLength: "10 m"
        }
      },
      {
        id: 449,
        name: "UGREEN Premium HDMI 2.1 Cable 3M",
        description: "HDMI 2.1 | 3 M | 8K",
        priceUSD: 32,
        img: "https://deltastore.az/_next/image?url=https%3A%2F%2Fdeltastoreimages.s3.eu-central-1.amazonaws.com%2F7772229e-a0b4-4757-b34d-82ac40bf7a01.webp&w=1920&q=100",
        specs: {
          Connector: "HDMI",
          HDMIVersion: "2.1",
          TransferRate: "48 Gbps",
          Resolution: "8K@60Hz, 4K@120Hz",
          CableLength: "3 m"
        }
      }
    ],                
  },
};

export default products;



