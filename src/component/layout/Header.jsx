import { useState, useMemo } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaShoppingCart, FaSearch, FaWhatsapp } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { FiMapPin } from "react-icons/fi";
import products from "../../products";

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

function Header({ cartItems }) {
  const [isOpen, setIsOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const [isSearch, setIsSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const navigate = useNavigate();

  const allProducts = useMemo(() => {
    return uniqueById(collectProducts(products));
  }, []);

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
      setIsSearch(false);
      setSearchQuery("");
    } else {
      setIsSearch(true);
    }
  };

  return (
    <>
      <div className="bg-[#34363c] px-5 py-2 hidden lg:flex justify-center">
        <div className="flex flex-row items-center justify-between max-w-[1300px] w-full gap-10">
          <a href="https://www.google.com/maps/search/?api=1&query=123+Tech+Avenue,+Suite+1270" target="_blank" rel="noopener noreferrer" className="flex items-center text-[#b0b1b6] gap-2 hover:text-[#da1a25]">
            <FiMapPin />
            <p>123 Tech Avenue, Suite 1270</p>
          </a>
          <a href="tel:+15551234567" className="flex items-center text-[#b0b1b6] gap-2 hover:text-[#da1a25]">
            <FaPhone />
            <p>+1 (555) 123-4567</p>
          </a>
          <a href="https://wa.me/15551234567" target="_blank" rel="noopener noreferrer" className="flex items-center text-[#b0b1b6] gap-2 hover:text-[#25D366]">
            <FaWhatsapp />
            <p>+1 (555) 123-4567</p>
          </a>
        </div>
      </div>

      <div className="bg-[#000] px-5 py-3 md:sticky md:top-0 md:z-50">
        <header className="flex flex-row items-center justify-between m-auto max-w-[1300px]">
          <div id="burger" className="lg:hidden flex flex-col justify-between w-7 h-5 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
            <span className={`block h-[2px] bg-white transition-all duration-300 ${isOpen ? "rotate-45 translate-y-[9px]" : ""}`}></span>
            <span className={`block h-[2px] bg-white transition-all duration-300 ${isOpen ? "opacity-0" : "opacity-100"}`}></span>
            <span className={`block h-[2px] bg-white transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-[9px]" : ""}`}></span>
          </div>

          <Link to="/" className="flex flex-row items-center gap-[2.5px]">
            <img src="/assets/image/logo.png" alt="logo" className="w-12 h-12" />
            <p className="lg:hidden xl:flex text-[#da1a25] text-[2rem] font-logo font-bold uppercase tracking-tight">TechForge</p>
          </Link>

          <menu className={`hidden lg:flex flex-row text-[1em] text-[#fff] font-semibold gap-5 uppercase tracking-tight z-10`}>
              <li className="relative group">
                  <NavLink to="/catalog?category" className="hover:text-[#da1a25]">Prebuilt Pcs <span className="text-xs ml-1">▼</span></NavLink>
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
                              <p><NavLink to="/catalog?category=allinone-pcs" className="hover:text-[#da1a25]">All-in-One</NavLink></p>
                          </li>
                      </ul>
                  </div>
              </li>
              <li className="relative group">
                  <NavLink to="/catalog?category" className="hover:text-[#da1a25]">Laptops <span className="text-xs ml-1">▼</span></NavLink>
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
                  <NavLink to="/catalog?category" className="hover:text-[#da1a25]">Pc Parts <span className="text-xs ml-1">▼</span></NavLink>
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
                              <p><NavLink to="/catalog?category=gaming-pcs" className="hover:text-[#da1a25]">Gaming PCs</NavLink></p>
                          </li>
                          <li className="flex items-center gap-2 py-2 pl-3">
                              <img src="/assets/image/office-pc.png" className="w-10 h-10"/>
                              <p><NavLink to="/catalog?category=office-pcs" className="hover:text-[#da1a25]">Office PCs</NavLink></p>
                          </li>
                          <li className="flex items-center gap-2 py-2 pl-3">
                              <img src="/assets/image/all-in-one-pc.png" className="w-10 h-10"/>
                              <p><NavLink to="/catalog?category=allinone-pcs" className="hover:text-[#da1a25]">All-in-Ones</NavLink></p>
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
                              <p><NavLink to="/catalog?category=gaming-laptops" className="hover:text-[#da1a25]">Gaming Laptops</NavLink></p>
                          </li>
                          <li className="flex items-center gap-2 py-2 pl-3">
                              <img src="/assets/image/office-laptop.png" className="w-10 h-10"/>
                              <p><NavLink to="/catalog?category=office-laptops" className="hover:text-[#da1a25]">Home Laptops</NavLink></p>
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
                              <p><NavLink to="/catalog?category=all-components" className="hover:text-[#da1a25]">Components</NavLink></p>
                          </li>
                          <li className="flex items-center gap-2 py-2 pl-3">
                              <img src="/assets/image/headphones.png" className="w-10 h-10"/>
                              <p><NavLink to="/catalog?category=all-accessories" className="hover:text-[#da1a25]">Accessories</NavLink></p>
                          </li>
                      </ul>
                  </li>
                  <li className="py-2"><NavLink to="/catalog?category=monitors" className="hover:text-[#da1a25]">Monitors</NavLink></li>
                  <li className="py-2"><NavLink to="/catalog" className="hover:text-[#da1a25]">Catalog</NavLink></li>
                  <li className="py-2"><NavLink to="/catalog?category=cables" className="hover:text-[#da1a25]">Adapters & Cables</NavLink></li>
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

          <div className="flex flex-row gap-5">
            <FaSearch className="text-[#fff] text-[1.1em] cursor-pointer" onClick={toggleSearch} />
            <NavLink to="/cart" className="relative inline-block">
              <FaShoppingCart className="text-[#fff] text-[1.1em] hover:text-[#da1a25]" />

              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-[10px] min-w-[18px] h-[18px] px-1 flex items-center justify-center rounded-full font-bold">
                  {cartItems.length}
                </span>
              )}
            </NavLink>
          </div>
        </header>

        {/* ==================== ПОИСКОВЫЙ ДРОПДАУН ==================== */}
        <div className={`absolute left-0 right-0 top-[4em] mt-2 bg-[#1a1a1a] shadow-2xl rounded-b-2xl overflow-hidden transition-all duration-300 ease-in-out ${isSearch ? "max-h-[460px] py-4" : "max-h-0 py-0"}`}>
          <div className="max-w-[600px] mx-auto px-5">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full p-4 rounded-2xl text-black focus:outline-none border border-transparent focus:border-red-500 text-base"
              />
              {searchQuery && (
                <button onClick={() => setSearchQuery("")} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-black text-2xl">✕</button>
              )}
            </div>

            {searchQuery.trim() !== "" && (
              <div className="mt-5">
                {filteredProducts.length > 0 ? (
                  <div className="max-h-[300px] overflow-y-auto pr-2 space-y-3">
                    {filteredProducts.map((item) => {
                      const image = item.image || item.img || "";
                      return (
                        <div
                          key={item.id}
                          className="flex items-center gap-4 bg-[#252525] hover:bg-[#2f2f2f] p-3 rounded-2xl cursor-pointer transition-all"
                          onClick={() => {
                            setIsSearch(false);
                            setSearchQuery("");
                            navigate(`/catalog?product=${item.id}`);   // ← ВАЖНОЕ ИЗМЕНЕНИЕ
                          }}
                        >
                          <img src={image} alt={item.name} className="w-14 h-14 object-cover rounded-xl flex-shrink-0" />
                          <div className="flex-1 min-w-0">
                            <p className="text-white text-[15px] font-medium line-clamp-2 leading-tight">{item.name}</p>
                            <p className="text-red-400 font-semibold mt-1">${item.priceUSD}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <div className="text-gray-400 text-center py-10 text-sm">Ничего не найдено по запросу «{searchQuery}»</div>
                )}

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