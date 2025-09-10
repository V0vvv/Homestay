import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer2 = () => {
  // Define the enhanced twinkle golden effect
  const goldenTitleStyle = {
    fontSize: "1.8rem", // Increased size
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: "1.5px", // Adds spacing for a premium look
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)", // Adds depth
    backgroundImage: "linear-gradient(45deg, #ffea00, #ffd700, #ffb400, #ffdd44, #ffea00, #ffb400, #ffd700)", // More twinkle colors
    backgroundSize: "400% 400%", // Increased movement range
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    animation: "twinkle 4s infinite linear", // Slower and smoother animation
  };

  // Inject CSS animation for twinkle effect
  const twinkleAnimation = `
    @keyframes twinkle {
      0% { background-position: 0% 50%; }
      25% { background-position: 50% 100%; }
      50% { background-position: 100% 50%; }
      75% { background-position: 50% 0%; }
      100% { background-position: 0% 50%; }
    }
  `;

  return (
    <footer className="text-white" style={{ width: "100vw", height: "40vh", backgroundColor: "#092540" }}>
      <style>{twinkleAnimation}</style> {/* Inject animation directly */}
      <div className="container-fluid h-100">
        <div className="row" style={{ height: "10%" }}>
          <div className="col d-flex align-items-center justify-content-center" style={{ height: "100%" }}>
            <p></p>
          </div>
        </div>
        
        {/* Top 60% */}
        <div className="row" style={{ height: "60%", color: "#f0f324" }}>
          {/* Left 40% */}
          <div className="col-5 d-flex flex-column justify-content-center align-items-start p-3">
            {/* First Row - Logo and Title */}
            <div className="d-flex align-items-center w-100 mb-2">
              <img src="/d.svg" alt="Logo" style={{ height: "50px", marginRight: "10px" }} />
              <h2 style={goldenTitleStyle}>CÔNG TY CỔ PHẦN DỊCH VỤ Ô TÔ TOÀN CẦU</h2>
            </div>

            {/* Second Row - Contact Information */}
            <div>
              <p>📍 Địa chỉ: Số 6 ngách 1 ngõ 97 Gia Thượng - Tổ 9 - Thượng Thanh - Long Biên - Hà Nội</p>
              <p>📞 Hotline: 0904919064 / 0912292927</p>
              <p> Chất lượng dịch vụ hàng đầu, luôn sẵn sàng phục vụ.</p>
            </div>
          </div>

          {/* Right 60% - Google Maps */}
          <div className="col-7 d-flex align-items-left justify-content-left" style={{ height: "100%" }}>
            <iframe
              title="Google Map"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3722.458344024946!2d105.8843552!3d21.0731441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135a99da8736679%3A0x4c616bbb5b13843!2zQ8O0bmcgVHkgQ3AgROG7i2NoIFbFqXQgT-G7syBUw6BvbiBD4bqndQ!5e0!3m2!1svi!2s&zoom=15&maptype=satellite"
            ></iframe>
          </div>
        </div>

        {/* Bottom 30% */}
        <div className="row" style={{ height: "30%" }}>
          <div className="col d-flex align-items-center justify-content-center" style={{ height: "100%" }}>
            <p>🕒 Thời gian làm việc: 24/7. Mọi nhu cầu vui lòng liên hệ Hotline.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer2;
