import React, { useState } from 'react';

function Blog() {
  const [searchTerm, setSearchTerm] = useState('');

  const allArticles = [

    {
      image: "https://www.originpc.com/blog/wp-content/uploads/2026/02/new-neuron-2-438x268.jpg",
      title: "Introducing the New NEURON Showcase Desktop",
      date: "February 24, 2026",
      author: "By Jesse",
      description: "The new NEURON showcase desktop features an all new panoramic glass case, redesigned chassis, and high airflow layout built to highlight premium gaming components."
    },
    {
      image: "https://www.originpc.com/blog/wp-content/uploads/2026/02/nvidia-requiem-nvidia-sm-438x268.jpg",
      title: "Resident Evil Requiem on PC: RTX 50 Series Performance, DLSS 4, and Path Tracing Explained",
      date: "February 19, 2026",
      author: "By Jesse",
      description: "Experience Resident Evil Requiem on PC with GeForce RTX 50 Series performance, DLSS 4, and path tracing. Explore the best RTX gaming systems for immersive survival horror."
    },
    {
      image: "https://www.originpc.com/blog/wp-content/uploads/2026/02/feb-promo-sm-438x268.jpg",
      title: "Is Presidents Day a Good Time to Buy a Custom Gaming PC?",
      date: "February 9, 2026",
      author: "By Jesse",
      description: "Presidents Day can be a smart time to buy a custom gaming PC. Learn what to look for and how to maximize value on desktops and laptops."
    },
    {
      image: "https://www.originpc.com/blog/wp-content/uploads/2026/01/ChatGPT-Image-Jan-29-2026-11_17_50-AM-438x268.png",
      title: "AMD Ryzen 7 9850X3D: The Unbeatable Legend Just Got Faster",
      date: "January 29, 2026",
      author: "By Jesse",
      description: "Experience elite PC gaming performance with the AMD Ryzen 7 9850X3D. Built with 3D V-Cache technology for higher frame rates and lower latency."
    },
    {
      image: "https://www.originpc.com/blog/wp-content/uploads/2026/01/amd-gamer-first-sm-438x268.jpg",
      title: "This Is Why We Game | Save $500 on NEURON A+A",
      date: "January 27, 2026",
      author: "By Jesse",
      description: "Save $500 on the TECHFORGE NEURON powered by AMD Ryzen processors and Radeon graphics. Discover the A+A advantage built for gaming and creating."
    },
    {
      image: "https://www.originpc.com/blog/wp-content/uploads/2026/01/eon16-s-main-2025-438x268.jpg",
      title: "EON16-S Gaming Laptop | High FPS Performance in a 16-Inch Design",
      date: "January 24, 2026",
      author: "By Jesse",
      description: "EON16-S Gaming Laptop: Serious Power in a Portable 16-Inch Design. The TECHFORGE EON16-S gaming laptop delivers desktop-class performance in a sleek, travel-ready form factor designed for gamers."
    },

    {
      image: "https://www.originpc.com/blog/wp-content/uploads/2025/10/oct-promo-sm-25-compressed-438x268.jpg",
      title: "Scary Good October PC Deals | Save Up to $1,000 on Custom Gaming PCs",
      date: "October 3, 2025",
      author: "By Jesse",
      description: "October is here, and so are the savings! Don't let outdated hardware haunt your gameplay. This month, TECHFORGE is serving up scary good deals on custom gaming desktops, high-performance laptops, and prebuilt Ready-to-Ship systems."
    },
    {
      image: "https://www.originpc.com/blog/wp-content/uploads/2025/09/racing-sim-pc-main-bg-438x268.jpg",
      title: "Best Racing Sim PC for 2025: TECHFORGE Redline Performance",
      date: "September 23, 2025",
      author: "By Jesse",
      description: "If you're serious about sim racing, your hardware matters just as much as your driving skills. The TECHFORGE Racing Sim PC is engineered for speed, stability, and immersion — making it one of the best PCs for iRacing."
    },
    {
      image: "https://www.originpc.com/blog/wp-content/uploads/2025/08/1200x628dualchamber2-438x268.png",
      title: "Level Up During Intel® Gamer Days",
      date: "August 27, 2025",
      author: "By Jesse",
      description: "Intel® Gamer Days 2025 has arrived—bringing massive savings and exclusive deals on TECHFORGE desktops and laptops. Whether you're after a powerhouse rig or a performance-packed laptop, now's the time to upgrade."
    },
    {
      image: "https://www.originpc.com/blog/wp-content/uploads/2025/07/back-to-school-sm-2-438x268.jpg",
      title: "Back to School PC Deals: Save on High-Performance TECHFORGE Laptops and Desktops",
      date: "July 21, 2025",
      author: "By Jesse",
      description: "Looking for the best PC for school and gaming? Whether you're heading into college, high school, or remote learning, TECHFORGE has you covered with exclusive back to school deals on custom-built laptops and desktops."
    },
    {
      image: "https://www.originpc.com/blog/wp-content/uploads/2025/07/main-bg-2-438x268.jpg",
      title: "Comparing Workstations vs. Gaming PCs for Professional Use",
      date: "July 16, 2025",
      author: "By Jesse",
      description: "When it comes to high-performance computing, many professionals face a critical question: Should I invest in a workstation or a gaming PC for my work? TECHFORGE helps you choose the right system."
    },
    {
      image: "https://www.originpc.com/blog/wp-content/uploads/2025/06/powerful-processors-engineering-438x268.jpg",
      title: "How a High-Performance Workstation Can Save Your Business Time and Money",
      date: "July 10, 2025",
      author: "By Jesse",
      description: "In today's fast-paced digital world, your technology stack isn't just a convenience—it's a competitive edge. Discover how a powerful TECHFORGE workstation can boost productivity for creative professionals and engineers."
    }
  ];


  const filteredArticles = allArticles.filter(article =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    article.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{
      backgroundColor: '#111',
      color: '#ffffff',
      padding: '40px 20px',
      minHeight: '100vh',
      fontFamily: 'Arial, Helvetica, sans-serif'
    }}>
      
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto 50px auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '20px'
      }}>
        <div>
          <h1 style={{ 
            color: '#ff0000', 
            margin: 0, 
            fontSize: '36px',
            fontWeight: 'bold'
          }}>
            TECHFORGE NEWS
          </h1>
          <p style={{ 
            margin: '8px 0 0 0', 
            color: '#aaaaaa', 
            fontSize: '18px' 
          }}>
            The Latest Gaming PC News, Offers, Announcements, and More From TECHFORGE!
          </p>
        </div>

        <div>
          <input 
            type="text" 
            placeholder="Search news..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              padding: '12px 16px',
              width: '340px',
              backgroundColor: '#1f1f1f',
              border: '1px solid #444',
              color: '#fff',
              borderRadius: '6px',
              fontSize: '16px'
            }}
          />
        </div>
      </div>

      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))',
        gap: '28px'
      }}>
        {filteredArticles.length > 0 ? (
          filteredArticles.map((article, index) => (
            <div
              key={index}
              style={{
                backgroundColor: '#1a1a1a',
                border: '1px solid #333',
                borderRadius: '8px',
                overflow: 'hidden',
                transition: 'transform 0.3s ease',
              }}
              onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <img 
                src={article.image} 
                alt={article.title}
                style={{
                  width: '100%',
                  height: '210px',
                  objectFit: 'cover'
                }} 
              />

              <div style={{ padding: '24px' }}>
                <h3 style={{
                  color: '#ff0000',
                  margin: '0 0 12px 0',
                  fontSize: '20.5px',
                  lineHeight: '1.35'
                }}>
                  {article.title}
                </h3>

                <p style={{ 
                  color: '#777', 
                  fontSize: '14px', 
                  margin: '0 0 16px 0' 
                }}>
                  {article.date} | {article.author}
                </p>

                <p style={{ 
                  color: '#ddd', 
                  lineHeight: '1.58',
                  marginBottom: '24px'
                }}>
                  {article.description}
                </p>

                <button
                  style={{
                    backgroundColor: '#ff0000',
                    color: '#fff',
                    border: 'none',
                    padding: '14px 32px',
                    fontSize: '15px',
                    fontWeight: 'bold',
                    borderRadius: '4px',
                    cursor: 'pointer'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#cc0000'}
                  onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#ff0000'}
                >
                  READ MORE
                </button>
              </div>
            </div>
          ))
        ) : (
          <p style={{ 
            gridColumn: '1 / -1', 
            textAlign: 'center', 
            fontSize: '22px', 
            color: '#888',
            padding: '60px 20px'
          }}>
            No articles found for "{searchTerm}"
          </p>
        )}
      </div>
    </div>
  );
}

export default Blog;