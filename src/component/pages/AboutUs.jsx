function AboutUs() {
  return (
    <>
      <div className="relative w-full h-[450px] md:h-[550px] lg:h-[650px] xl:h-[1100px] bg-cover bg-center"
          style={{ backgroundImage: "url('https://cdn.originpc.com/img/company/about/create-your-advantage-bg.jpg')" }}>      
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-5 text-white p-6 flex flex-col justify-center items-center h-full text-center">
          <p className="text-[1.8em] uppercase font-light border-b-[0.12em] border-white pb-1 mb-5 lg:text-[2.5em]">About us</p>
          <p className="text-[1.5em] font-normal max-w-[600px] xl:text-[1.8em]">
            We strive to offer every individual customer the best possible PC experience 
            from start to finish no matter what PC they have purchased from us.
          </p>
        </div>
      </div>
      <div className="relative w-full h-[450px] md:h-[550px] lg:h-[650px] xl:h-[800px] bg-cover bg-center"
          style={{ backgroundImage: "url('https://cdn.originpc.com/img/company/about/about-bg.jpg')" }}>      
        <div className="absolute inset-0 bg-black/30 lg:bg-black/0"></div>
        <div className="relative z-5 text-white p-6 flex flex-col justify-center items-center h-full text-center">
          <p className="text-[1.8em] uppercase font-light border-b-[0.12em] border-white pb-1 mb-5 lg:text-[2.5em]">Who We Are</p>
          <p className="text-[1.5em] font-normal max-w-[600px] xl:text-[1.8em]">
            ForgeTech PC is a PC company that builds award winning custom PCs for gamers, enthusiasts, and professionals.
          </p>
        </div>
      </div>
      <div className="w-full bg-black text-white flex justify-center border-b border-[#333131]">
        <div className="w-full max-w-[1300px] flex flex-col md:flex-row items-center gap-8 p-6 md:p-12">
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="https://cdn.originpc.com/img/company/about/genesis-hero-left.png"
              alt="PC"
              className="w-full max-w-[500px] object-contain"
            />
          </div>
          <div className="w-full md:w-1/2 text-left">
            <h2 className="text-2xl md:text-3xl font-light uppercase mb-4 inline-block border-b-[0.12em] border-white pb-1">
              Mission
            </h2>
            <p className="text-gray-300 leading-relaxed font-medium text-[1.05em]">
              Our mission is to create the absolute best custom PCs for every individual’s 
              specific wants and needs. Whether you want the most realistic and immersive 
              gaming experience or ultra-fast workstation performance, every TechForge PC 
              is up to the task.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full bg-black text-white flex justify-center">
        <div className="w-full max-w-[1300px] flex flex-col md:flex-row items-center gap-8 p-6 md:p-12">
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="https://cdn.originpc.com/img/company/about/millennium-corsair.png"
              alt="PC"
              className="w-full max-w-[500px] object-contain"
            />
          </div>
          <div className="w-full md:w-1/2 text-left">
            <h2 className="text-2xl md:text-3xl font-light uppercase mb-4 inline-block border-b-[0.12em] border-white pb-1">
              Looking Forward
            </h2>
            <p className="text-gray-300 leading-relaxed font-medium text-[1.05em]">
              In 2019, TechForge PC was acquired by CORSAIR, combining expertise in PC building and expansive PC hardware to grow ORIGIN PC even more.
              With iCUE, Hydro X Series custom cooling, unique system designs, and internal components, CORSAIR 
              and TechForge PC will continue to collaborate and bring a greater PC experience to the world.
            </p>
          </div>
        </div>
      </div>
      <div className="relative w-full h-[450px] md:h-[550px] lg:h-[650px] xl:h-[800px] bg-cover bg-center"
          style={{ backgroundImage: "url('https://cdn.originpc.com/img/company/about/legacy-bg.jpg')" }}>      
        <div className="absolute inset-0 bg-black/30 lg:bg-black/0"></div>
        <div className="relative z-10 text-white p-6 flex flex-col justify-center items-start h-full text-left max-w-[1300px] m-auto">
          <p className="text-2xl md:text-3xl font-light uppercase mb-4 inline-block border-b-[0.12em] border-white pb-1">Legacy</p>
          <p className="text-gray-300 leading-relaxed font-medium text-[1.05em] lg:text-[1.3em] max-w-[600px] lg:max-w-[650px]">
            Founded in 2009, the team sought out to continue building custom high-performance PCs and providing world-class support. With several years of experience in PC building, support, and service, TechForge PC is comprised of industry veterans that have helped grow the professionally-built PC market.
          </p>
        </div>
      </div>
      <div className="bg-black">
        <div className="max-w-[1300px] m-auto flex flex-col text-white px-10 py-20 items-center">
          <p className="text-[1.8em] uppercase font-light border-b-[0.12em] border-white pb-1 mb-5">Founders</p>
          <p className="text-center text-[1.2em] font-medium mb-[2em] max-w-[540px]">Former Alienware executives Kevin Wasielewski, Richard Cary, and Hector Penton formed TechForge PC in Miami, Florida in 2009. The TechForge name comes from their dedication to get back to the roots of building custom, high-performance computers for gamers and hardware enthusiasts.</p>
          <div className="flex flex-col lg:flex-row gap-10">
            <div>
              <p className="text-[1.45em] font-light">Kevin Wasielewski</p>
              <p className="text-[1.2em] text-[#b3b3b3dd] font-medium border-b-[0.12em] mb-4 pb-1 border-white w-[5.5em]">Co-Founder</p>
              <p className="max-w-[600px]">Before starting TechForge PC, Kevin Wasielewski gathered over 15 years of professional experience with leading companies such as Dell, Alienware, and GameStop. He is highly motivated and has held executive and senior level positions including vice president of marketing, global sales manager, and director of business development for Dell/Alienware. Kevin has expertise in multiple industries and channels of distribution, which has allowed him to create a collection of key contacts in the retail, technology, and gaming communities. He is an avid gamer and understands the technology and gaming industries both as a professional and as an enthusiast.</p>
            </div>
            <div>
              <p className="text-[1.45em] font-light">Richard Cary</p>
              <p className="text-[1.2em] text-[#b3b3b3dd] font-medium border-b-[0.12em] mb-4 pb-1 border-white w-[5.5em]">Co-Founder</p>
              <p className="max-w-[600px]">Richard started working in the gaming computer industry with Alienware in 1999. He did everything and anything there was to do in order to learn the most he could about the company and industry. As time went on he began to focus on the manufacturing and supply chain side of things and became the Senior Vice President of Manufacturing, Supply chain and Logistics at Alienware. At TechForge PC, he utilizes these same skills to focus on always making sure TechForge PC is maintaining a focus on quality and performance.</p>
            </div>
            <div>
              <p className="text-[1.45em] font-light">Hector Penton</p>
              <p className="text-[1.2em] text-[#b3b3b3dd] font-medium border-b-[0.12em] mb-4 pb-1 border-white w-[5.5em]">Co-Founder</p>
              <p className="max-w-[600px]">Hector's love for PC gaming started in the early 90's and only grew from there. He grew up gaming along side the original founders of Alienware, so it came as no surprise when he started working with them by late 1998. During his 10+ years working there, he did everything involving customer service, sales and support. Now at TechForge PC, his goal is to make sure the company sticks to its commitment of offering the best customization and performance and that the service and support of the brand is true to its customer's expectations. With a dedicated staff of hardcore enthusiasts, he works with every customer to make their dream PC a reality.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-full h-[28em] md:h-[35em] bg-[url('/assets/image/main-bg.jpg')] bg-cover bg-left">
        <div className="absolute inset-0 bg-black/40 xl:hidden"></div>
        <div className="relative max-w-[1300px] m-auto h-full flex justify-center xl:justify-end items-center px-10">
          <div className="flex flex-col items-center text-center w-[500px] text-white">
            <img src="/assets/image/emblem.png" className="w-32"/>
            <p className="text-[1.5em] font-bold tracking-tight mt-4">ASSEMBLED AND SUPPORTED</p>
            <p className="text-[1.2em] font-semibold tracking-tight border-b-4 border-[#e5242a] w-[100px] mt-2">IN THE USA</p>
            <p className="tracking-tight text-[0.9em] font-semibold my-6">
              By buying a TECHFORGE PC, you get access to a fast and powerful PC as well as supporting jobs based in the United States.
            </p>
          </div>
        </div>
      </div>
    </> 
  )
}

export default AboutUs

