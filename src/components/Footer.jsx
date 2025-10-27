


import React, { useState } from "react";
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../utils/translations';
import footerBg from "../assets/footerlogo.png";

const Footer = () => {
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ error: "", success: "" });
  const { language } = useLanguage();
  
  const t = translations.footer;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ error: "", success: "" });

    // Validate phone number
    const phoneOk = /^\+?\d[\d\s-]{9,14}$/.test(phone.trim());
    if (!phoneOk) {
      return setStatus({ error: "Please enter a valid phone number.", success: "" });
    }

    try {
      setLoading(true);

      // Submit to SheetDB API
      const response = await fetch("https://sheetdb.io/api/v1/qfy8dwi1fukrf", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: {
            Name: "",
            "Phone Number": phone.trim(),
            Placement: "Footer"
          }
        })
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      setStatus({ error: "", success: "Thanks! We'll contact you soon." });
      setPhone("");
    } catch (err) {
      setStatus({ error: "Something went wrong. Please try again.", success: "" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className=" max-w-full ">
      <div className="relative bg-[#074720] text-white overflow-hidden">
        {/* RIGHT background art (scales by breakpoint) */}
        <img
          src={footerBg}
          alt=""
          aria-hidden="true"
          className="
            pointer-events-none select-none
            absolute right-0 top-0 object-contain opacity-90
            w-[220px] h-[180px]
            sm:w-[280px] sm:h-[220px]
            lg:w-[416.5px] lg:h-[339.999px]
          "
        />

        {/* CONTENT */}
        <div className="relative z-10 max-w-full  px-4 sm:px-6 lg:px-20 pt-10 pb-6 lg:pt-16 lg:pb-8">
          {/* Top row: stacks on mobile, splits on lg */}
          <div className="flex flex-col lg:flex-row gap-8 items-start justify-between">
            {/* Left: Logo */}
            <div className="flex">
                         <svg xmlns="http://www.w3.org/2000/svg" width="148" height="46" viewBox="0 0 148 46" fill="none">
  <path d="M135.1 0.0583141H148V3.91081H139.594V32.5011H135.228V3.91081H135.1V4.25505H129.393V32.2903H124.263V23.7332C122.364 24.8268 120.042 25.5741 116.828 25.5742C113.195 25.5742 110.314 24.6153 108.096 22.6434C106.231 20.9862 104.858 18.6353 103.888 15.6013H99.7051C97.3968 15.6013 95.599 15.9317 94.3868 16.6678C93.2034 17.3864 92.5466 18.5106 92.5466 20.2156C92.5466 23.3574 94.7483 25.9643 99.196 29.8449L99.4817 30.0938L99.1883 30.3346L96.0311 32.9299L95.818 33.1042L95.6131 32.9217C90.4007 28.2879 87.417 24.3875 87.417 19.7071C87.417 16.8603 88.5579 14.7474 90.5978 13.3608C92.6185 11.9871 95.4905 11.3462 98.9295 11.3462H106.564V12.821C107.898 12.4668 108.924 12.0606 109.681 11.5807C110.295 11.1919 110.723 10.7612 110.999 10.2808C111.274 9.80171 111.409 9.25433 111.409 8.61482C111.409 6.98798 110.565 5.47256 109.171 4.25505H67.305V13.1094C68.8743 12.0097 70.9713 11.2954 73.4664 11.2954C76.1613 11.2954 78.3411 12.0912 79.8481 13.569C81.3563 15.0475 82.1538 17.1727 82.1538 19.7578C82.1538 23.4203 80.7226 26.7035 77.4069 30.0581L77.2322 30.2343L77.0178 30.1101L73.1396 27.8716L72.7653 27.6553L73.0799 27.3594C75.4903 25.0955 77.0788 22.6814 77.0788 19.7071C77.0788 18.288 76.6935 17.2476 76.0155 16.5618C75.3375 15.8766 74.3223 15.4997 72.9682 15.4996C70.8024 15.4996 68.6495 16.8626 67.305 19.0355V30.7466C67.3744 30.7422 67.4437 30.7366 67.513 30.7328L67.8155 30.7159L67.8501 31.0162L68.238 34.3746L68.2752 34.6956L67.9535 34.7308C65.8648 34.9579 64.4041 35.3834 63.4727 36.0131C62.5661 36.626 62.1453 37.4414 62.1453 38.5331C62.1454 39.6823 62.5847 40.443 63.3122 40.9315C64.0605 41.4338 65.1502 41.6713 66.478 41.6714C68.5738 41.6714 70.1854 41.1823 72.3145 40.0794L72.617 39.9226L72.7556 40.2342L74.2517 43.592L74.3653 43.8478L74.1271 43.9958C72.1848 45.2025 69.5202 45.9264 66.6449 45.9264C63.8796 45.9264 61.5704 45.2273 59.9463 43.9156C58.3144 42.5975 57.4031 40.6838 57.4031 38.3293C57.4031 36.122 58.2779 34.2957 60.0027 32.9857C60.6214 32.5158 61.3467 32.1159 62.1748 31.7869V23.9702C60.1866 25.4102 57.6307 26.2864 54.5181 26.2865C51.641 26.2865 48.9748 25.5357 47.0206 24.0116C45.0569 22.4801 43.8359 20.1847 43.8359 17.1625C43.836 14.2996 44.9277 12.0012 46.9667 10.4275C48.9946 8.86254 51.9261 8.03926 55.5702 8.03919C57.476 8.03919 59.2171 8.24472 60.626 8.55523L60.9063 8.61732L60.8762 8.9026L60.4887 12.6165L60.4505 12.9809L60.0943 12.8956C58.8445 12.5962 57.3182 12.3959 55.6812 12.3959C53.4455 12.3959 51.7646 12.8476 50.6505 13.6744C49.5516 14.4899 48.9664 15.6987 48.9663 17.3156C48.9664 18.9041 49.5643 20.0546 50.5332 20.8156C51.5127 21.5848 52.9035 21.9807 54.5181 21.9807C57.7456 21.9805 60.5574 20.3481 62.1748 18.2737V4.25505H36.6357C39.1618 6.73821 40.0253 9.75991 40.0668 11.6641V34.944C35.1554 35.929 34.7785 33.1813 34.5903 32.2998V27.1926L22.1004 35.0461H11.0439L34.5903 21.1216V11.6641C33.416 6.5626 28.8318 5.04507 26.6866 4.9241H13.0241V13.4787C14.8758 19.3683 18.7263 20.5644 20.42 20.4262C21.0975 20.371 23.5586 20.2186 24.1458 17.108C24.7328 13.9973 20.5895 10.3849 18.4442 8.96784C19.1029 9.03693 22.0787 8.9713 26.6866 11.6641C32.8966 15.2933 31.6546 25.2995 20.42 24.47C11.4323 23.8063 8.6206 16.866 8.33828 13.4787V4.25505H0V0H135.1V0.0583141ZM63.2915 41.2983C63.3077 41.3079 63.3246 41.3165 63.341 41.3259C63.3212 41.3145 63.301 41.3038 63.2815 41.2921L63.2915 41.2983ZM55.7333 25.9184L56.0273 25.8927C56.0687 25.8886 56.1098 25.8834 56.1509 25.8789C56.013 25.8937 55.8738 25.9074 55.7333 25.9184ZM114.777 4.25505C115.922 5.78962 116.483 7.44552 116.483 9.07256C116.483 10.9504 115.919 12.4962 114.719 13.7527C113.584 14.9409 111.903 15.847 109.661 16.5531C110.294 18.1131 111.089 19.2697 112.156 20.0519C113.29 20.8845 114.769 21.3191 116.772 21.3191C120.037 21.3191 122.427 19.8003 124.263 17.9933V4.25505H114.777ZM92.2525 20.8294C92.2551 20.8573 92.2589 20.885 92.2615 20.9128C92.2583 20.8819 92.2544 20.851 92.2518 20.82L92.2525 20.8294ZM44.1689 16.6496C44.1649 16.7318 44.1622 16.8146 44.1601 16.8979C44.1642 16.7291 44.1724 16.5626 44.1846 16.3982L44.1689 16.6496ZM53.7035 12.2077C53.3463 12.2597 53.007 12.3269 52.6859 12.409C53.007 12.327 53.3464 12.2603 53.7035 12.2084V12.2077ZM70.2034 12.0748C70.0705 12.1145 69.9395 12.1572 69.8104 12.2014C70.0756 12.1106 70.3491 12.0286 70.631 11.9575L70.2034 12.0748ZM72.4718 11.6559C72.3909 11.6625 72.3107 11.6698 72.2311 11.6779L72.2304 11.6785C72.3267 11.6688 72.4237 11.6596 72.5213 11.6522C72.5052 11.6534 72.4885 11.6546 72.4718 11.6559ZM73.4664 11.6164C73.2969 11.6164 73.1287 11.6198 72.963 11.6264C72.8263 11.6319 72.6914 11.6399 72.5579 11.6497C72.8539 11.6279 73.1569 11.6164 73.4664 11.6164C73.7939 11.6164 74.113 11.6284 74.4238 11.6522C74.269 11.6403 74.1124 11.6318 73.9538 11.6258C73.7933 11.6198 73.6308 11.6164 73.4664 11.6164ZM111.599 7.4705C111.611 7.5236 111.623 7.57689 111.633 7.63038C111.644 7.68406 111.653 7.73806 111.662 7.79212C111.644 7.68399 111.623 7.57651 111.599 7.46986V7.4705Z" fill="white"/>
</svg>
            </div>

            {/* Right: Form (stacks on mobile) */}
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 lg:ml-auto w-full sm:w-auto">
              <div className="sm:max-w-full">
                <label
                  htmlFor="footer-phone"
                  className="block text-sm text-white/90 mb-2"
                >
                  {t.newsletter[language]}
                </label>
                <input
                  id="footer-phone"
                  name="phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+91 1234567890"
                  className="w-full py-3 px-4 rounded-md bg-white text-[#0A2E1A] placeholder:text-[#7C8A80] shadow-inner outline-none focus:ring-2 focus:ring-white/70 h-[48px]"
                />
                {status.error && (
                  <div className="mt-1 text-xs text-red-300">{status.error}</div>
                )}
                {status.success && (
                  <div className="mt-1 text-xs text-green-300">{status.success}</div>
                )}
              </div>

              <div className="flex sm:items-end sm:pb-0">
                <button
                  type="submit"
                  disabled={loading}
                  className="
                    w-full 
                    py-3 px-5 rounded-lg  
                    bg-[#AFD455] text-[#0D341C] font-medium
                    hover:brightness-95 disabled:opacity-70
                    h-[48px] flex items-center justify-center
                  "
                >
                  {loading ? (language === 'हिंदी' ? 'बुकिंग हो रही है...' : 'Booking...') : (language === 'हिंदी' ? 'परामर्श बुक करें' : 'Book a Consultation')}
                </button>
              </div>
            </form>
          </div>

          {/* Divider */}
          <div className="mt-8 lg:mt-10 h-px w-full bg-white/30" />

          {/* Bottom links / copyright */}
          <div className="mt-6 flex flex-col gap-4 text-sm text-white/90">
            
            <div>{t.copyright[language]}</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
