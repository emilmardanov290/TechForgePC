const products= {
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
    ],
    office: [
      {
        Other:[
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
        ],
        HP:[
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
        ]
      }
    ],
    monoblock:[
      {
        Asus:[
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
        ],
      }
    ]
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
        ],
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
              ]
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
    ],
  }  
}

/import React, { useMemo, useState } from "react";
import products from "../../products";

const categoriesData = [
  {
    name: "Prebuilt PCs",
    image:
      "https://png.pngtree.com/png-vector/20240623/ourmid/pngtree-red-glow-emanating-from-modern-gaming-pc-case-png-image_12828372.png",
    subcategories: [
      { name: "Gaming PCs", paths: ["pcs.gaming"] },
      { name: "Office PCs", paths: ["pcs.office"] },
      { name: "All-in-Ones", paths: ["pcs.monoblock"] },
      {
        name: "View All",
        paths: ["pcs.gaming", "pcs.office", "pcs.monoblock"],
      },
    ],
  },
  {
    name: "Laptops",
    image:
      "https://png.pngtree.com/png-vector/20250321/ourmid/pngtree-powerful-gaming-laptop-on-a-white-background-png-image_15836491.png",
    subcategories: [
      { name: "Gaming Laptops", paths: ["laptops.gaming"] },
      { name: "Home Laptops", paths: ["laptops.office"] },
      {
        name: "View All",
        paths: ["laptops.gaming", "laptops.office"],
      },
    ],
  },
  {
    name: "Monitors",
    image:
      "https://png.pngtree.com/png-vector/20240201/ourmid/pngtree-long-makeup-game-monitor-gaming-scifi-png-image_11530863.png",
    paths: ["parts.monitors"],
  },
  {
    name: "Adapters",
    image:
      "https://png.pngtree.com/png-vector/20250218/ourmid/pngtree-laptop-ac-adapter-png-image_15512230.png",
    paths: ["parts.cables"],
  },
  {
    name: "PC Parts",
    image:
      "https://onthespotrepairs.com/wp-content/uploads/2024/08/PC-Assembly-Service-Build-A-PC-Parts-1.png",
    subcategories: [
      {
        name: "Components",
        items: [
          { name: "CPU", paths: ["parts.components.cpu"] },
          { name: "RAM", paths: ["parts.components.ram"] },
          { name: "Hard Disk", paths: ["parts.components.hardDisks"] },
          { name: "Videocards", paths: ["parts.components.videoCards"] },
          { name: "Motherboards", paths: ["parts.components.motherboards"] },
          { name: "Computer Cases", paths: ["parts.components.computerCases"] },
          { name: "Coolers", paths: ["parts.components.coolers"] },
          { name: "Power Supplies", paths: ["parts.components.powerSupplies"] },
          { name: "SSDs", paths: ["parts.components.ssds"] },
          {
            name: "View All Components",
            paths: [
              "parts.components.cpu",
              "parts.components.ram",
              "parts.components.hardDisks",
              "parts.components.videoCards",
              "parts.components.motherboards",
              "parts.components.computerCases",
              "parts.components.coolers",
              "parts.components.powerSupplies",
              "parts.components.ssds",
            ],
          },
        ],
      },
      {
        name: "Accessories",
        items: [
          { name: "Headphones", paths: ["parts.peripherals.headphones"] },
          { name: "Microphones", paths: ["parts.peripherals.microphones"] },
          {
            name: "Keyboard & Mouse",
            paths: ["parts.peripherals.keyboardMouseCombo"],
          },
          {
            name: "View All Accessories",
            paths: [
              "parts.peripherals.headphones",
              "parts.peripherals.microphones",
              "parts.peripherals.keyboardMouseCombo",
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Office Supplies",
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/059/494/201/small/realistic-printer-on-transparent-background-free-png.png",
    subcategories: [{ name: "Printers", paths: ["parts.officeSupplies"] }],
  },
];







import { useState, useMemo } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaShoppingCart, FaSearch, FaWhatsapp } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { FiMapPin } from "react-icons/fi";
import products from "../../products";   // ← тот же путь, что и в Catalog

// Вспомогательные функции (для сбора всех товаров)
function isLeafProduct(value) {
  return value && typeof value === "object" && !Array.isArray(value) && "id" in value && "name" in value;
}

function collectProducts(node) {
  if (!node) return [];
  if (Array.isArray(node)) return node.flatMap(collectProducts);
  if (isLeafProduct(node)) return [node];
  if (typeof node === "object") return Object.values(node).flatMap(collectProducts);
  return [];
}

function uniqueById(items) {
  const seen = new Set();
  return items.filter((item) => {
    const key = item.id ?? item.name;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const [isSearch, setIsSearch] = useState(false);     // открыто/закрыто
  const [searchQuery, setSearchQuery] = useState("");  // текст поиска

  const navigate = useNavigate();

  // Все товары сайта (собираем один раз)
  const allProducts = useMemo(() => {
    return uniqueById(collectProducts(products));
  }, []);

  // Отфильтрованные товары для дропдауна (макс. 6 штук)
  const filteredProducts = useMemo(() => {
    if (!searchQuery.trim()) return [];

    const term = searchQuery.toLowerCase().trim();
    return allProducts
      .filter((item) =>
        item.name.toLowerCase().includes(term) ||
        (item.description && item.description.toLowerCase().includes(term))
      )
      .slice(0, 6);
  }, [allProducts, searchQuery]);

  const toggleSearch = () => {
    if (isSearch) {
      // закрываем и очищаем
      setIsSearch(false);
      setSearchQuery("");
    } else {
      setIsSearch(true);
    }
  };

  return (
    <>
      {/* Верхняя контактная строка */}
      <div className="bg-[#34363c] px-5 py-2 hidden lg:flex justify-center">
        <div className="flex flex-row items-center justify-between max-w-[1300px] w-full gap-10">
          <a
            href="https://www.google.com/maps/search/?api=1&query=123+Tech+Avenue,+Suite+1270"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-[#b0b1b6] gap-2 hover:text-[#da1a25]"
          >
            <FiMapPin />
            <p>123 Tech Avenue, Suite 1270</p>
          </a>
          <a
            href="tel:+15551234567"
            className="flex items-center text-[#b0b1b6] gap-2 hover:text-[#da1a25]"
          >
            <FaPhone />
            <p>+1 (555) 123-4567</p>
          </a>
          <a
            href="https://wa.me/15551234567"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-[#b0b1b6] gap-2 hover:text-[#25D366]"
          >
            <FaWhatsapp />
            <p>+1 (555) 123-4567</p>
          </a>
        </div>
      </div>

      {/* Основной хедер */}
      <div className="bg-[#000] px-5 py-3 md:sticky md:top-0 md:z-50">
        <header className="flex flex-row items-center justify-between m-auto max-w-[1300px]">
          {/* Бургер */}
          <div
            id="burger"
            className="lg:hidden flex flex-col justify-between w-7 h-5 cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span
              className={`block h-[2px] bg-white transition-all duration-300 
                ${isOpen ? "rotate-45 translate-y-[9px]" : ""}`}
            ></span>
            <span
              className={`block h-[2px] bg-white transition-all duration-300 
                ${isOpen ? "opacity-0" : "opacity-100"}`}
            ></span>
            <span
              className={`block h-[2px] bg-white transition-all duration-300 
                ${isOpen ? "-rotate-45 -translate-y-[9px]" : ""}`}
            ></span>
          </div>

          {/* Логотип */}
          <Link to="/" className={`flex flex-row items-center gap-[2.5px]`}>
            <img src="/assets/image/logo.png" alt="logo" className="w-12 h-12" />
            <p className="lg:hidden xl:flex text-[#da1a25] text-[2rem] font-logo font-bold uppercase tracking-tight">
              TechForge
            </p>
          </Link>

          <menu className={`hidden lg:flex flex-row text-[1em] text-[#fff] font-semibold gap-5 uppercase tracking-tight z-10`}>
              <li className="relative group">
                  <NavLink to="#" className="hover:text-[#da1a25]">Prebuilt Pcs <span className="text-xs ml-1">▼</span></NavLink>
                  <div className="absolute left-1/2 -translate-x-1/2 top-full mt-6 w-48 bg-[#2b2d31] 
                                  rounded-b-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible 
                                  transition-all duration-200">
                      <ul className="flex flex-col p-3 gap-2 text-md normal-case">
                          <li className="hover:border-b-2 border-[#da1a25] cursor-pointer flex flex-row items-center gap-1 <!--w-0 hover:w-full transition-[width] duration-400 ease-out-->">
                              <img src="/assets/image/gaming-pc.png" alt="gaming pc" className="w-16 h-16"/>
                              <p><NavLink to="/catalog?category=gaming-pcs" className="hover:text-[#da1a25]">Gaming PCs</NavLink></p>
                          </li>
                          <li className="hover:border-b-2 border-[#da1a25] cursor-pointer flex flex-row items-center gap-1">
                              <img src="/assets/image/office-pc.png" alt="gaming pc" className="w-16 h-16"/>
                              <p><NavLink to="/catalog?category=office-pcs" className="hover:text-[#da1a25]">Office PCs</NavLink></p>
                          </li>
                          <li className="hover:border-b-2 border-[#da1a25] cursor-pointer flex flex-row items-center gap-1">
                              <img src="/assets/image/all-in-one-pc.png" alt="gaming pc" className="w-16 h-16"/>
                              <p><NavLink to="/catalog?category=all-in-ones" className="hover:text-[#da1a25]">All-in-One</NavLink></p>
                          </li>
                      </ul>
                  </div>
              </li>
              <li className="relative group">
                  <NavLink to="#" className="hover:text-[#da1a25]">Laptops <span className="text-xs ml-1">▼</span></NavLink>
                  <div className="absolute left-1/2 -translate-x-1/2 top-full mt-6 w-48 bg-[#2b2d31] 
                                  rounded-b-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible 
                                  transition-all duration-200">
                      <ul className="flex flex-col p-3 gap-2 text-md normal-case">
                          <li className="hover:border-b-2 border-[#da1a25] cursor-pointer flex flex-row items-center gap-1">
                              <img src="/assets/image/gaming-laptop.png" alt="gaming pc" className="w-18 h-16"/>
                              <p><NavLink to="/catalog?category=gaming-laptops" className="hover:text-[#da1a25]">Gaming Laptops</NavLink></p>
                          </li>
                          <li className="hover:border-b-2 border-[#da1a25] cursor-pointer flex flex-row items-center gap-1">
                              <img src="/assets/image/office-laptop.png" alt="gaming pc" className="w-18 h-16"/>
                              <p><NavLink to="/catalog?category=office-laptops" className="hover:text-[#da1a25]">Home Laptops</NavLink></p>
                          </li>
                      </ul>
                  </div>
              </li>
              <li className="relative group">
                  <NavLink to="#" className="hover:text-[#da1a25]">Pc Parts <span className="text-xs ml-1">▼</span></NavLink>
                  <div className="absolute left-1/2 -translate-x-1/2 top-full mt-6 w-48 bg-[#2b2d31] 
                                  rounded-b-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible 
                                  transition-all duration-200">
                      <ul className="flex flex-col p-3 gap-2 text-md normal-case">
                          <li className="hover:border-b-2 border-[#da1a25] cursor-pointer flex flex-row items-center gap-1">
                              <img src="/assets/image/cpu.png" alt="gaming pc" className="w-18 h-16"/>
                              <p><NavLink to="/catalog?category=all-components" className="hover:text-[#da1a25]">Componets</NavLink></p>
                          </li>
                          <li className="hover:border-b-2 border-[#da1a25] cursor-pointer flex flex-row items-center gap-1">
                              <img src="/assets/image/headphones.png" alt="gaming pc" className="w-18 h-16"/>
                              <p><NavLink to="/catalog?category=all-accessories" className="hover:text-[#da1a25]">Accessories</NavLink></p>
                          </li>
                      </ul>
                  </div>
              </li>
              <li><NavLink to="/catalog?category=monitors" className="hover:text-[#da1a25]">Monitors</NavLink></li>                        
              <li><NavLink to="/catalog" className="hover:text-[#da1a25]">Catalog</NavLink></li>
              <li><NavLink to="/catalog?category=cables" className="hover:text-[#da1a25]">Adapters & Cables</NavLink></li>
              <li className="relative group">
                  <NavLink to="#" className="hover:text-[#da1a25]">More <span className="text-xs ml-1">▼</span></NavLink>
                  <div className="absolute left-1/2 -translate-x-1/2 top-full mt-6 w-48 bg-[#2b2d31] 
                                  rounded-b-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible 
                                  transition-all duration-200">
                      <ul className="flex flex-col p-3 gap-2 text-md normal-case">
                          <li className="hover:border-b-2 border-[#da1a25] cursor-pointer flex flex-row items-center gap-1">
                              <p><NavLink to="/about-us" className="hover:text-[#da1a25]">About Us</NavLink></p>
                          </li>
                          <li className="hover:border-b-2 border-[#da1a25] cursor-pointer flex flex-row items-center gap-1">
                              <p><NavLink to="/contact-us" className="hover:text-[#da1a25]">Contact Us</NavLink></p>
                          </li>
                          <li className="hover:border-b-2 border-[#da1a25] cursor-pointer flex flex-row items-center gap-1">
                              <p><NavLink to="/blog" className="hover:text-[#da1a25]">Our Blog</NavLink></p>
                          </li>
                      </ul>
                  </div>
              </li>
          </menu>
          <menu className={`lg:hidden absolute left-0 top-[4.5em] w-full bg-[#111] text-white 
              transition-all duration-300 overflow-hidden z-10
              ${isOpen ? "max-h-[600px] py-4" : "max-h-0 py-0"}`}>
              <ul className="flex flex-col gap-2 px-5">
                  <li>
                      <div onClick={() => setOpenMenu(openMenu === "prebuilt" ? null : "prebuilt")}
                              className="flex justify-between items-center cursor-pointer py-2">
                          <span>Prebuilt PCs</span>
                          <span className={`transition-transform duration-300 ${openMenu === "prebuilt" ? "rotate-180" : ""}`}>▼</span>
                      </div>
                      <ul className={`overflow-hidden transition-all duration-300 
                          ${openMenu === "prebuilt" ? "max-h-40" : "max-h-0"}`}>

                          <li className="flex items-center gap-2 py-2 pl-3">
                              <img src="/assets/image/gaming-pc.png" className="w-10 h-10"/>
                              <p>Gaming PCs</p>
                          </li>
                          <li className="flex items-center gap-2 py-2 pl-3">
                              <img src="/assets/image/office-pc.png" className="w-10 h-10"/>
                              <p>Office PCs</p>
                          </li>
                          <li className="flex items-center gap-2 py-2 pl-3">
                              <img src="/assets/image/all-in-one-pc.png" className="w-10 h-10"/>
                              <p>All-in-One</p>
                          </li>
                      </ul>
                  </li>
                  <li>
                      <div onClick={() => setOpenMenu(openMenu === "laptops" ? null : "laptops")}
                              className="flex justify-between items-center cursor-pointer py-2">
                          <span>Laptops</span>
                          <span className={`transition-transform duration-300 ${openMenu === "laptops" ? "rotate-180" : ""}`}>▼</span>
                      </div>
                      <ul className={`overflow-hidden transition-all duration-300 
                          ${openMenu === "laptops" ? "max-h-32" : "max-h-0"}`}>
                          <li className="flex items-center gap-2 py-2 pl-3">
                              <img src="/assets/image/gaming-laptop.png" className="w-10 h-10"/>
                              <p>Gaming Laptops</p>
                          </li>
                          <li className="flex items-center gap-2 py-2 pl-3">
                              <img src="/assets/image/office-laptop.png" className="w-10 h-10"/>
                              <p>Home Laptops</p>
                          </li>
                      </ul>
                  </li>
                  <li>
                      <div onClick={() => setOpenMenu(openMenu === "pcparts" ? null : "pcparts")}
                              className="flex justify-between items-center cursor-pointer py-2">
                          <span>PC Parts</span>
                          <span className={`transition-transform duration-300 ${openMenu === "pcparts" ? "rotate-180" : ""}`}>▼</span>
                      </div>
                      <ul className={`overflow-hidden transition-all duration-300 
                          ${openMenu === "pcparts" ? "max-h-32" : "max-h-0"}`}>
                          <li className="flex items-center gap-2 py-2 pl-3">
                              <img src="/assets/image/cpu.png" className="w-10 h-10"/>
                              <p>Components</p>
                          </li>
                          <li className="flex items-center gap-2 py-2 pl-3">
                              <img src="/assets/image/headphones.png" className="w-10 h-10"/>
                              <p>Accessories</p>
                          </li>
                      </ul>
                  </li>
                  <li className="py-2">Monitors</li>
                  <li className="py-2"><NavLink to="/catalog" className="hover:text-[#da1a25]">Catalog</NavLink></li>
                  <li className="py-2">Adapters & Cables</li>
                  <li>
                      <div onClick={() => setOpenMenu(openMenu === "more" ? null : "more")}
                              className="flex justify-between items-center cursor-pointer py-2">
                          <span>More</span>
                          <span className={`transition-transform duration-300 ${openMenu === "more" ? "rotate-180" : ""}`}>▼</span>
                      </div>
                      <ul className={`overflow-hidden transition-all duration-300 
                          ${openMenu === "more" ? "max-h-32" : "max-h-0"}`}>
                          <li className="py-2 pl-3"><NavLink to="/about-us" className="hover:text-[#da1a25]">About Us</NavLink></li>
                          <li className="py-2 pl-3"><NavLink to="/contact-us" className="hover:text-[#da1a25]">Contact Us</NavLink></li>
                          <li className="py-2 pl-3"><NavLink to="/blog" className="hover:text-[#da1a25]">Our Blog</NavLink></li>
                      </ul>
                  </li>
              </ul>
          </menu>

          {/* Иконки справа */}
          <div className="flex flex-row gap-5">
            <FaSearch
              className="text-[#fff] text-[1.1em] cursor-pointer"
              onClick={toggleSearch}
            />
            <NavLink to="/cart">
              <FaShoppingCart className="text-[#fff] text-[1.1em] hover:text-[#da1a25]" />
            </NavLink>
          </div>
        </header>

        {/* ====================== ПОИСКОВЫЙ ДРОПДАУН ====================== */}
        <div
          className={`absolute left-0 right-0 top-[4em] mt-2 bg-[#1a1a1a] shadow-2xl 
                     rounded-b-2xl overflow-hidden transition-all duration-300 ease-in-out
                     ${isSearch ? "max-h-[460px] py-4" : "max-h-0 py-0"}`}
        >
          <div className="max-w-[600px] mx-auto px-5">
            {/* Поле ввода */}
            <div className="relative">
              <input
                type="text"
                placeholder="Поиск товаров..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full p-4 rounded-2xl text-black focus:outline-none border border-transparent focus:border-red-500 text-base"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-black text-2xl"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Результаты поиска */}
            {searchQuery.trim() !== "" && (
              <div className="mt-5">
                {filteredProducts.length > 0 ? (
                  <div className="max-h-[300px] overflow-y-auto pr-2 space-y-3 custom-scrollbar">
                    {filteredProducts.map((item) => {
                      const image = item.image || item.img || "";
                      return (
                        <div
                          key={item.id}
                          className="flex items-center gap-4 bg-[#252525] hover:bg-[#2f2f2f] p-3 rounded-2xl cursor-pointer transition-all"
                          onClick={() => {
                            setIsSearch(false);
                            setSearchQuery("");
                            navigate(`/catalog?search=${encodeURIComponent(searchQuery)}`);
                          }}
                        >
                          <img
                            src={image}
                            alt={item.name}
                            className="w-14 h-14 object-cover rounded-xl flex-shrink-0"
                          />
                          <div className="flex-1 min-w-0">
                            <p className="text-white text-[15px] font-medium line-clamp-2 leading-tight">
                              {item.name}
                            </p>
                            <p className="text-red-400 font-semibold mt-1">
                              ${item.priceUSD}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <div className="text-gray-400 text-center py-10 text-sm">
                    Ничего не найдено по запросу «{searchQuery}»
                  </div>
                )}

                {/* Кнопка "Все результаты" */}
                {filteredProducts.length > 0 && (
                  <div className="mt-4 text-center">
                    <button
                      onClick={() => {
                        setIsSearch(false);
                        setSearchQuery("");
                        navigate(`/catalog?search=${encodeURIComponent(searchQuery)}`);
                      }}
                      className="text-red-400 hover:text-red-500 font-medium flex items-center gap-2 mx-auto text-sm"
                    >
                      Показать все результаты →
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
import React, { useMemo, useState, useEffect } from "react";
import { useSearchParams, useOutletContext } from "react-router-dom";
import products from "../../products";

const categoriesData = [
  {
    name: "Prebuilt PCs",
    image: "https://png.pngtree.com/png-vector/20240623/ourmid/pngtree-red-glow-emanating-from-modern-gaming-pc-case-png-image_12828372.png",
    subcategories: [
      { name: "Gaming PCs", key: "gaming-pcs" },
      { name: "Office PCs", key: "office-pcs" },
      { name: "All-in-Ones", key: "allinone-pcs" },
      { name: "View All", key: "all-pcs" },
    ],
  },
  {
    name: "Laptops",
    image: "https://png.pngtree.com/png-vector/20250321/ourmid/pngtree-powerful-gaming-laptop-on-a-white-background-png-image_15836491.png",
    subcategories: [
      { name: "Gaming Laptops", key: "gaming-laptops" },
      { name: "Home Laptops", key: "office-laptops" },
      { name: "View All", key: "all-laptops" },
    ],
  },
  {
    name: "Monitors",
    image: "https://png.pngtree.com/png-vector/20240201/ourmid/pngtree-long-makeup-game-monitor-gaming-scifi-png-image_11530863.png",
    key: "monitors",
  },
  {
    name: "Adapters",
    image: "https://png.pngtree.com/png-vector/20250218/ourmid/pngtree-laptop-ac-adapter-png-image_15512230.png",
    key: "cables",
  },
  {
    name: "PC Parts",
    image: "https://onthespotrepairs.com/wp-content/uploads/2024/08/PC-Assembly-Service-Build-A-PC-Parts-1.png",
    subcategories: [
      {
        name: "Components",
        items: [
          { name: "CPU", key: "cpu" },
          { name: "RAM", key: "ram" },
          { name: "Hard Disk", key: "hdd" },
          { name: "Videocards", key: "gpu" },
          { name: "Motherboards", key: "motherboards" },
          { name: "Computer Cases", key: "cases" },
          { name: "Coolers", key: "coolers" },
          { name: "Power Supplies", key: "psu" },
          { name: "SSDs", key: "ssd" },
          { name: "View All Components", key: "all-components" },
        ],
      },
      {
        name: "Accessories",
        items: [
          { name: "Headphones", key: "headphones" },
          { name: "Microphones", key: "microphones" },
          { name: "Keyboard & Mouse", key: "keyboard-mouse" },
          { name: "View All Accessories", key: "all-accessories" },
        ],
      },
    ],
  },
  {
    name: "Office Supplies",
    image: "https://static.vecteezy.com/system/resources/thumbnails/059/494/201/small/realistic-printer-on-transparent-background-free-png.png",
    subcategories: [
      { name: "Printers", key: "printers" },
    ],
  },
];


function getValueByPath(obj, path) {
  return path.split(".").reduce((acc, key) => acc?.[key], obj);
}

function isLeafProduct(value) {
  return value && typeof value === "object" && !Array.isArray(value) && "id" in value && "name" in value;
}

function collectProducts(node) {
  if (!node) return [];
  if (Array.isArray(node)) return node.flatMap(collectProducts);
  if (isLeafProduct(node)) return [node];
  if (typeof node === "object") return Object.values(node).flatMap(collectProducts);
  return [];
}

function uniqueById(items) {
  const seen = new Set();
  return items.filter((item) => {
    const key = item.id ?? item.name;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function getProductsFromPaths(paths) {
  const all = paths.flatMap((path) => {
    const value = getValueByPath(products, path);
    return collectProducts(value);
  });
  return uniqueById(all);
}

function Catalog() {
  const { cartItems, setCartItems } = useOutletContext();
  const [openIndex, setOpenIndex] = useState(null);
  const [selectedView, setSelectedView] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const [showFilter, setShowFilter] = useState(false);
  const [sortBy, setSortBy] = useState("price-low");
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedCpuSeries, setSelectedCpuSeries] = useState([]);

  // Новый state для поиска
  const [searchTerm, setSearchTerm] = useState("");

  const [selectedProduct, setSelectedProduct] = useState(null);

  const categoryMap = {
    "gaming-pcs": { title: "Gaming PCs", paths: ["pcs.gaming"], trail: ["Catalog", "Prebuilt PCs", "Gaming PCs"] },
    "office-pcs": { title: "Office PCs", paths: ["pcs.office"], trail: ["Catalog", "Prebuilt PCs", "Office PCs"] },
    "allinone-pcs": { title: "All-in-Ones", paths: ["pcs.monoblock"], trail: ["Catalog", "Prebuilt PCs", "All-in-Ones"] },
    "all-pcs": { title: "All PCs", paths: ["pcs.gaming", "pcs.office", "pcs.monoblock"], trail: ["Catalog", "Prebuilt PCs"] },
    "gaming-laptops": { title: "Gaming Laptops", paths: ["laptops.gaming"], trail: ["Catalog", "Laptops", "Gaming Laptops"] },
    "office-laptops": { title: "Home Laptops", paths: ["laptops.office"], trail: ["Catalog", "Laptops", "Home Laptops"] },
    "all-laptops": { title: "All Laptops", paths: ["laptops.gaming", "laptops.office"], trail: ["Catalog", "Laptops"] },
    "monitors": { title: "Monitors", paths: ["parts.monitors"], trail: ["Catalog", "Monitors"] },
    "cables": { title: "Adapters", paths: ["parts.cables"], trail: ["Catalog", "Adapters"] },
    "cpu": { title: "CPU", paths: ["parts.components.cpu"], trail: ["Catalog", "PC Parts", "CPU"] },
    "ram": { title: "RAM", paths: ["parts.components.ram"], trail: ["Catalog", "PC Parts", "RAM"] },
    "hdd": { title: "Hard Disk", paths: ["parts.components.hardDisks"], trail: ["Catalog", "PC Parts", "Hard Disk"] },
    "gpu": { title: "Videocards", paths: ["parts.components.videoCards"], trail: ["Catalog", "PC Parts", "Videocards"] },
    "motherboards": { title: "Motherboards", paths: ["parts.components.motherboards"], trail: ["Catalog", "PC Parts", "Motherboards"] },
    "cases": { title: "Computer Cases", paths: ["parts.components.computerCases"], trail: ["Catalog", "PC Parts", "Cases"] },
    "coolers": { title: "Coolers", paths: ["parts.components.coolers"], trail: ["Catalog", "PC Parts", "Coolers"] },
    "psu": { title: "Power Supplies", paths: ["parts.components.powerSupplies"], trail: ["Catalog", "PC Parts", "Power Supplies"] },
    "ssd": { title: "SSDs", paths: ["parts.components.ssds"], trail: ["Catalog", "PC Parts", "SSDs"] },
    "all-components": { title: "All Components", paths: ["parts.components.cpu","parts.components.ram","parts.components.hardDisks","parts.components.videoCards","parts.components.motherboards","parts.components.computerCases","parts.components.coolers","parts.components.powerSupplies","parts.components.ssds"], trail: ["Catalog", "PC Parts", "Components"] },
    "headphones": { title: "Headphones", paths: ["parts.peripherals.headphones"], trail: ["Catalog", "PC Parts", "Accessories", "Headphones"] },
    "microphones": { title: "Microphones", paths: ["parts.peripherals.microphones"], trail: ["Catalog", "PC Parts", "Accessories", "Microphones"] },
    "keyboard-mouse": { title: "Keyboard & Mouse", paths: ["parts.peripherals.keyboardMouseCombo"], trail: ["Catalog", "PC Parts", "Accessories", "Keyboard & Mouse"] },
    "all-accessories": { title: "All Accessories", paths: ["parts.peripherals.headphones","parts.peripherals.microphones","parts.peripherals.keyboardMouseCombo"], trail: ["Catalog", "PC Parts", "Accessories"] },
    "printers": { title: "Printers", paths: ["parts.officeSupplies"], trail: ["Catalog", "Office Supplies", "Printers"] }
  };

  // Автоматическое открытие категории + сброс поиска
  useEffect(() => {
    const categoryParam = searchParams.get("category");

    if (categoryParam && categoryMap[categoryParam]) {
      const { title, paths, trail } = categoryMap[categoryParam];
      setSelectedView({ title, paths, trail });
      setSelectedProduct(null);
      setSearchTerm("");                    // ← сброс поиска при смене категории
      setOpenIndex(null);
      setShowFilter(false);
      setSortBy("price-low");
      setSelectedBrands([]);
      setSelectedCpuSeries([]);
    } else {
      setSelectedView(null);
      setSelectedProduct(null);
      setSearchTerm("");
    }
  }, [searchParams]);

  const toggleCategory = (index) => setOpenIndex(openIndex === index ? null : index);

  const openView = (categoryKey) => {
    setSearchParams({ category: categoryKey });
  };

  const rawProducts = useMemo(() => {
    if (!selectedView) return [];
    return getProductsFromPaths(selectedView.paths);
  }, [selectedView]);

  const isCpuCategory = selectedView?.paths?.some(p => p.includes("cpu"));
  const isMonoblock = selectedView?.paths?.some(p => p.includes("monoblock"));
  const isGamingLaptop = selectedView?.paths?.some(p => p.includes("laptops.gaming"));
  const isOfficeLaptop = selectedView?.paths?.some(p => p.includes("laptops.office"));
  const isAllComponents = selectedView?.title === "Components";

  const showBrandFilter = (isMonoblock || isGamingLaptop || isOfficeLaptop) && !isAllComponents;

  const availableBrands = useMemo(() => {
    const brands = new Set();
    rawProducts.forEach(item => {
      const name = item.name.toLowerCase();
      if (name.includes("asus")) brands.add("Asus");
      else if (name.includes("hp")) brands.add("HP");
      else if (name.includes("lenovo")) brands.add("Lenovo");
      else if (name.includes("acer")) brands.add("Acer");
      else if (name.includes("dell")) brands.add("Dell");
      else if (name.includes("msi")) brands.add("MSI");
    });
    return Array.from(brands);
  }, [rawProducts]);

  // ==================== ОСНОВНОЙ ФИЛЬТР + ПОИСК ====================
  const displayedProducts = useMemo(() => {
    let filtered = [...rawProducts];

    // Поиск по названию и описанию
    if (searchTerm.trim() !== "") {
      const term = searchTerm.toLowerCase().trim();
      filtered = filtered.filter(item =>
        item.name.toLowerCase().includes(term) ||
        (item.description && item.description.toLowerCase().includes(term))
      );
    }

    // Бренды
    if (showBrandFilter && selectedBrands.length > 0) {
      filtered = filtered.filter(item =>
        selectedBrands.some(brand => item.name.toLowerCase().includes(brand.toLowerCase()))
      );
    }

    // Серии CPU
    if (isCpuCategory && !isAllComponents && selectedCpuSeries.length > 0) {
      filtered = filtered.filter(item => {
        const name = item.name.toLowerCase();
        return selectedCpuSeries.some(series => {
          if (series === "r5") return name.includes("ryzen 5") || name.includes("r5");
          if (series === "r7") return name.includes("ryzen 7") || name.includes("r7");
          if (series === "r9") return name.includes("ryzen 9") || name.includes("r9");
          return name.includes(series);
        });
      });
    }

    // Сортировка
    filtered.sort((a, b) => {
      if (sortBy === "price-low") return a.priceUSD - b.priceUSD;
      if (sortBy === "price-high") return b.priceUSD - a.priceUSD;
      if (sortBy === "name-asc") return a.name.localeCompare(b.name);
      if (sortBy === "name-desc") return b.name.localeCompare(a.name);
      return 0;
    });

    return filtered;
  }, [rawProducts, searchTerm, sortBy, selectedBrands, selectedCpuSeries, showBrandFilter, isCpuCategory, isAllComponents]);

  return (
    <div className="bg-[#1e1f24] min-h-screen">
      <div className="p-5 max-w-[1300px] m-auto">

        {/* ====================== ДЕТАЛЬНАЯ СТРАНИЦА ТОВАРА ====================== */}
        {selectedProduct ? (
          <div className="max-w-5xl mx-auto">
            <button
              onClick={() => setSelectedProduct(null)}
              className="mb-8 flex items-center gap-2 text-red-500 hover:text-red-600 transition-colors text-xl font-medium"
            >
              ← Назад к товарам
            </button>

            <div className="flex flex-col lg:flex-row gap-10 bg-white rounded-3xl shadow-2xl overflow-hidden">
              <div className="lg:w-5/12">
                <img
                  src={selectedProduct.image || selectedProduct.img}
                  alt={selectedProduct.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex-1 p-8 lg:p-12 flex flex-col">
                <h1 className="text-4xl font-bold text-gray-900 leading-tight mb-2">
                  {selectedProduct.name}
                </h1>
                <p className="text-gray-600 text-lg mb-8">
                  {selectedProduct.description}
                </p>

                <div className="mt-auto mb-8">
                  <p className="text-5xl font-semibold text-red-600">
                    ${selectedProduct.priceUSD}
                  </p>
                </div>

                <button
                  onClick={() =>
                    setCartItems((prev) =>
                      prev.some((i) => i.id === selectedProduct.id)
                        ? prev.filter((i) => i.id !== selectedProduct.id)
                        : [...prev, selectedProduct]
                    )
                  }
                  className={`w-full py-5 text-xl font-semibold rounded-2xl transition-all ${
                    cartItems.some((i) => i.id === selectedProduct.id)
                      ? "bg-green-600 hover:bg-green-700 text-white"
                      : "bg-red-600 hover:bg-red-700 text-white"
                  }`}
                >
                  {cartItems.some((i) => i.id === selectedProduct.id)
                    ? "Удалить из корзины"
                    : "Добавить в корзину"}
                </button>

                {selectedProduct.specs && (
                  <div className="mt-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                      <span>Характеристики</span>
                      <div className="flex-1 h-px bg-gray-200"></div>
                    </h2>

                    {Array.isArray(selectedProduct.specs) ? (
                      <div className="grid grid-cols-1 gap-y-4 text-base">
                        {selectedProduct.specs.map((spec, idx) => (
                          <div key={idx} className="flex gap-4 items-start">
                            <div className="w-6 h-6 rounded-2xl bg-red-100 text-red-600 flex items-center justify-center flex-shrink-0 text-lg leading-none pt-px">
                              ✓
                            </div>
                            <p className="text-gray-700 leading-relaxed">{spec}</p>
                          </div>
                        ))}
                      </div>
                    ) : typeof selectedProduct.specs === "object" ? (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-5">
                        {Object.entries(selectedProduct.specs).map(([key, value]) => (
                          <div key={key} className="flex justify-between border-b border-gray-100 pb-4">
                            <span className="font-medium text-gray-600">{key}</span>
                            <span className="font-semibold text-gray-900 text-right">{value}</span>
                          </div>
                        ))}
                      </div>
                    ) : null}
                  </div>
                )}
              </div>
            </div>
          </div>
        ) : (
          /* ====================== КАТАЛОГ + ПОИСК ====================== */
          <>
            <div className="flex items-center justify-between gap-4 mb-4 mt-2">
              <h1 className="text-3xl text-white font-bold tracking-tight">
                {selectedView ? selectedView.title : "Categories"}
              </h1>
              {selectedView && (
                <button
                  className="bg-[#cf3838] hover:bg-red-600 text-white px-4 py-2 text-sm rounded-sm"
                  onClick={() => setSearchParams({})}
                >
                  Back to Categories
                </button>
              )}
            </div>

            <div className="text-[#d9d9d9ca] text-[1.1em] mb-3">
              {selectedView ? selectedView.trail.join(" → ") : "Catalog"}
            </div>

            {/* ==================== ПОИСК + FILTER & SORT ==================== */}
            {selectedView && (
              <div className="flex items-center justify-between gap-4 mb-6">
                {/* Кнопка фильтров (справа) */}
                <button
                  onClick={() => setShowFilter(!showFilter)}
                  className="flex items-center gap-2 bg-[#2a2b32] hover:bg-[#3a3b42] text-white px-6 py-3 rounded-2xl transition-colors font-medium whitespace-nowrap"
                >
                  FILTER &amp; SORT
                </button>

                {/* Строка поиска (слева) */}
                <div className="flex-1 max-w-md relative">
                  <input
                    type="text"
                    placeholder="Поиск по названию товара..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full bg-[#2a2b32] border border-[#444] text-white placeholder-gray-400 px-5 py-3 rounded-2xl focus:outline-none focus:border-red-500 transition-colors pl-10"
                  />
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl">🔎</span>
                  {searchTerm && (
                    <button
                      onClick={() => setSearchTerm("")}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white text-xl"
                    >
                      ✕
                    </button>
                  )}
                </div>
              </div>
            )}

            {/* Панель фильтров (без изменений) */}
            {selectedView && showFilter && (
              <div className="bg-[#2a2b32] border border-[#444] rounded-xl p-6 mb-8 max-w-md">
                <h3 className="text-white text-lg font-semibold mb-5">Sort &amp; Filter</h3>
                <div className="mb-6">
                  <p className="text-gray-400 text-sm mb-3">Sort by</p>
                  <div className="grid grid-cols-2 gap-2">
                    <button onClick={() => setSortBy("price-low")} className={`py-3 px-4 rounded-lg text-sm ${sortBy === "price-low" ? "bg-red-600 text-white" : "bg-[#1e1f24] text-gray-300 hover:bg-[#3a3b42]"}`}>Price Low → High</button>
                    <button onClick={() => setSortBy("price-high")} className={`py-3 px-4 rounded-lg text-sm ${sortBy === "price-high" ? "bg-red-600 text-white" : "bg-[#1e1f24] text-gray-300 hover:bg-[#3a3b42]"}`}>Price High → Low</button>
                    <button onClick={() => setSortBy("name-asc")} className={`py-3 px-4 rounded-lg text-sm ${sortBy === "name-asc" ? "bg-red-600 text-white" : "bg-[#1e1f24] text-gray-300 hover:bg-[#3a3b42]"}`}>Name A–Z</button>
                    <button onClick={() => setSortBy("name-desc")} className={`py-3 px-4 rounded-lg text-sm ${sortBy === "name-desc" ? "bg-red-600 text-white" : "bg-[#1e1f24] text-gray-300 hover:bg-[#3a3b42]"}`}>Name Z–A</button>
                  </div>
                </div>

                {(showBrandFilter || (isCpuCategory && !isAllComponents)) && availableBrands.length > 0 && (
                  <div className="mb-6">
                    <p className="text-gray-400 text-sm mb-3">Brand</p>
                    <div className="flex flex-wrap gap-2">
                      {availableBrands.map(brand => (
                        <button
                          key={brand}
                          onClick={() => setSelectedBrands(prev => prev.includes(brand) ? prev.filter(b => b !== brand) : [...prev, brand])}
                          className={`px-5 py-2 rounded-lg text-sm transition ${selectedBrands.includes(brand) ? "bg-red-600 text-white" : "bg-[#1e1f24] text-gray-300 hover:bg-[#3a3b42]"}`}
                        >
                          {brand}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {isCpuCategory && !isAllComponents && (
                  <div className="mb-6">
                    <p className="text-gray-400 text-sm mb-3">CPU Series</p>
                    <div className="flex flex-wrap gap-2">
                      {["i5","i7","i9","r5","r7","r9"].map(series => (
                        <button key={series} onClick={() => setSelectedCpuSeries(prev => prev.includes(series) ? prev.filter(s => s !== series) : [...prev, series])} className={`px-4 py-2 rounded-lg text-sm transition ${selectedCpuSeries.includes(series) ? "bg-red-600 text-white" : "bg-[#1e1f24] text-gray-300 hover:bg-[#3a3b42]"}`}>{series.toUpperCase()}</button>
                      ))}
                    </div>
                  </div>
                )}

                <div className="flex gap-3 pt-4 border-t border-[#444]">
                  <button onClick={() => { setSortBy("price-low"); setSelectedBrands([]); setSelectedCpuSeries([]); }} className="flex-1 py-3 text-gray-400 hover:text-white transition border border-[#979797] rounded-lg">Reset</button>
                  <button onClick={() => setShowFilter(false)} className="flex-1 bg-red-600 hover:bg-red-700 py-3 rounded-lg text-white font-semibold transition">Apply</button>
                </div>
              </div>
            )}

            {/* Категории */}
            {!selectedView && (
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 w-full mx-auto my-[2em]">
                {categoriesData.map((category, index) => (
                  <div key={category.name} className="flex flex-col w-full">
                    <div
                      className="flex items-center bg-white rounded-lg shadow-md p-4 gap-4 hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                      onClick={() => {
                        if (category.subcategories) {
                          toggleCategory(index);
                        } else {
                          openView(category.key);
                        }
                      }}
                    >
                      <img src={category.image} className="w-24 h-24 object-contain" alt={category.name} />
                      <p className="relative pl-4 text-xl font-semibold text-gray-800 uppercase tracking-wide before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-1 before:h-8 before:bg-red-500 before:rounded">
                        {category.name}
                      </p>
                    </div>

                    <div className="overflow-hidden transition-[max-height] duration-500 ease-in-out" style={{ maxHeight: openIndex === index ? "1000px" : "0px" }}>
                      {openIndex === index && category.subcategories && category.subcategories.map((sub) =>
                        sub.items ? (
                          <div key={sub.name} className="flex flex-col gap-2 p-4 bg-gray-50 border-l-4 border-red-500 rounded-b-lg">
                            <div className="font-semibold text-gray-700 uppercase">{sub.name}</div>
                            <div className="flex flex-col pl-4 gap-1">
                              {sub.items.map((item) => (
                                <div key={item.name} className="py-1 hover:bg-gray-200 rounded cursor-pointer" onClick={() => openView(item.key)}>
                                  {item.name}
                                </div>
                              ))}
                            </div>
                          </div>
                        ) : (
                          <div key={sub.name} className="py-2 pl-4 hover:bg-gray-200 rounded cursor-pointer bg-gray-50 border-l-4 border-red-500" onClick={() => openView(sub.key)}>
                            {sub.name}
                          </div>
                        )
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Список товаров */}
            {selectedView && (
              <div>
                {displayedProducts.length === 0 ? (
                  <div className="bg-white rounded-lg p-6 text-gray-700">
                    {searchTerm ? "Товары по вашему запросу не найдены." : "No products found with current filters."}
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
                    {displayedProducts.map((item) => {
                      const image = item.image || item.img;
                      const isInCart = cartItems.some(i => i.id === item.id);

                      return (
                        <div
                          key={item.id}
                          className="border rounded p-3 bg-[#fff] cursor-pointer hover:shadow-xl transition-all duration-200"
                          onClick={() => setSelectedProduct(item)}
                        >
                          <img src={image} alt={item.name} className="w-full h-48 object-cover mb-2 bg-white rounded" />
                          <h2 className="font-semibold text-gray-900 line-clamp-2">{item.name}</h2>
                          <p className="text-gray-600 text-sm mb-1 line-clamp-2">{item.description}</p>
                          <div className="flex items-center justify-between mt-2">
                            <p className="font-bold text-red-600">${item.priceUSD}</p>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setCartItems(prev =>
                                  prev.some(i => i.id === item.id)
                                    ? prev.filter(i => i.id !== item.id)
                                    : [...prev, item]
                                );
                              }}
                              className={`px-3 py-1 rounded text-sm font-semibold transition ${
                                isInCart ? "bg-green-600 text-white" : "bg-red-600 hover:bg-red-700 text-white"
                              }`}
                            >
                              {isInCart ? "Remove from Cart" : "Add to Cart"}
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            )}
          </>
        )}
      </div>

      {/* Баннер */}
      <div className="relative w-full max-w-[50em] m-auto lg:rounded-t-md overflow-hidden">
        <img src="https://origincdnv2.blob.core.windows.net/img/home/slides/2026/apr-mem-promo.jpg" alt="Promo Banner" className="w-full h-[30em] object-cover object-[85%_center] md:object-right" />
      </div>
    </div>
  );
}

export default Catalog;