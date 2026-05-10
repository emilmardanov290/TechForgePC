import React, { useMemo, useState, useEffect } from "react";
import { useSearchParams, useOutletContext } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
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

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Все товары сайта (для быстрого поиска по ID)
  const allProducts = useMemo(() => {
    return uniqueById(collectProducts(products));
  }, []);

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

  // Обработка URL-параметров (category и product)
  useEffect(() => {
    const categoryParam = searchParams.get("category");
    const productParam = searchParams.get("product");

    // 1. Если в URL есть product=ID → сразу открываем детальную страницу
    if (productParam) {
      const product = allProducts.find(p => String(p.id) === productParam);
      if (product) {
        setSelectedProduct(product);
        setSelectedView(null);
        setSearchTerm("");
        setOpenIndex(null);
        setShowFilter(false);
        setSortBy("price-low");
        setSelectedBrands([]);
        setSelectedCpuSeries([]);
        return;
      }
    }

    // 2. Обычная логика категорий
    if (categoryParam && categoryMap[categoryParam]) {
      const { title, paths, trail } = categoryMap[categoryParam];
      setSelectedView({ title, paths, trail });
      setSelectedProduct(null);
      setSearchTerm("");
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
  }, [searchParams, allProducts]);

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

  const displayedProducts = useMemo(() => {
    let filtered = [...rawProducts];

    if (searchTerm.trim() !== "") {
      const term = searchTerm.toLowerCase().trim();
      filtered = filtered.filter(item =>
        item.name.toLowerCase().includes(term) ||
        (item.description && item.description.toLowerCase().includes(term))
      );
    }

    if (showBrandFilter && selectedBrands.length > 0) {
      filtered = filtered.filter(item =>
        selectedBrands.some(brand => item.name.toLowerCase().includes(brand.toLowerCase()))
      );
    }

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
              onClick={() => {
                setSelectedProduct(null);
                setSearchParams({}); // очищаем URL при возврате
              }}
              className="mb-8 flex items-center gap-2 text-red-500 hover:text-red-600 transition-colors text-xl font-medium"
            >
              ← Back to products
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
                    ? "In the Cart"
                    : "Add to Cart"}
                </button>

                {selectedProduct.specs && (
                  <div className="mt-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                      <span>Specifications</span>
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

            {selectedView && (
              <div className="flex items-center justify-between gap-4 mb-6">
                <button
                  onClick={() => setShowFilter(!showFilter)}
                  className="flex items-center gap-2 bg-[#2a2b32] hover:bg-[#3a3b42] text-white px-6 py-3 rounded-2xl transition-colors font-medium whitespace-nowrap"
                >
                  FILTER &amp; SORT
                </button>

                <div className="flex-1 max-w-md relative">
                  <input
                    type="text"
                    placeholder="Search by product name..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full bg-[#2a2b32] border border-[#444] text-white placeholder-gray-400 px-5 py-3 rounded-2xl focus:outline-none focus:border-red-500 transition-colors pl-10"
                  />
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl"><CiSearch /></span>
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

            {/* Панель фильтров */}
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
                    {searchTerm ? "No products found with current filters." : "No products found with current filters."}
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
                          onClick={() => {
                            setSelectedProduct(item);
                            setSearchParams({ product: item.id }); // ← сохраняем ID в URL
                          }}
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
                              {isInCart ? "In the Cart" : "Add to Cart"}
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