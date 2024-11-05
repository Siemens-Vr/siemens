import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#0A2342] text-white py-6 h-[350px]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          {/* Left Column */}
          <div className="md:w-1/3 mb-4">
            <h2 className="text-xl font-bold text-siemens-green">
              SIEMENS CENTRE
            </h2>
            <ul className="mt-4 space-y-2">
              {[
                { href: "/Complains", text: "Complains and Complement" },
                {
                  href: "/https://drive.google.com/file/d/1LFy-EGqEs304VJeroDvRjaJFVxj2_egF/view?usp=sharing",
                  text: "Conference and Seminar",
                },
                {
                  href: "/https://drive.google.com/file/d/12K_ggzDP25SqnF6vsIb7yttZuGJL5f88/view?usp=sharing",
                  text: "Expertise France",
                },
                { href: "/industrial-support", text: "Industrial Support" },
                { href: "/vr-robotics", text: "Launch of the VR and Robotics" },
                {
                  href: "/policy-vr-multi-lab",
                  text: "Policy for VR Multi-Lab",
                },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="inline-block transform transition-all duration-300 ease-in-out hover:scale-110 hover:text-siemens-green"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Middle Column */}
          <div className="md:w-1/4 mb-4">
            <ul className="mt-[50px] space-y-2">
              {[
                { href: "/staff-profiles", text: "Staff Profiles" },
                { href: "/smscp-partners", text: "SMSCP Partners" },
                { href: "/prosthetics-project", text: "Prosthetics Project" },
                { href: "/publications", text: "Publications" },
                { href: "/scada", text: "SCADA" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="inline-block transform transition-all duration-300 ease-in-out hover:scale-110 hover:text-siemens-green"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column */}
          <div className="md:w-1/5 mb-4 mt-[30px]">
            {/* Contact Links */}
            {[
              {
                icon: "/phone-icon.png",
                href: "tel:+254716150627",
                text: "+254 716 150 627",
              },
              {
                icon: "/email-icon.png",
                href: "mailto:siemens@dkut.ac.ke",
                text: "siemens@dkut.ac.ke",
              },
              {
                icon: "/email-icon.png",
                href: "mailto:smscp.kenya@dkut.ac.ke",
                text: "smscp.kenya@dkut.ac.ke",
              },
            ].map((contact) => (
              <div
                key={contact.href}
                className="flex items-center mt-2 first:mt-4"
              >
                <img src={contact.icon} alt="" className="w-6 h-6 mr-2" />
                <a
                  href={contact.href}
                  className="inline-block transform transition-all duration-300 ease-in-out hover:scale-110 hover:text-siemens-green"
                >
                  {contact.text}
                </a>
              </div>
            ))}

            {/* Social Media Links */}
            {[
              {
                icon: "/youtube-icon.png",
                href: "https://www.youtube.com/channel/DeKUTSiemens",
                text: "DeKUT Siemens",
              },
              {
                icon: "/facebook-icon.png",
                href: "https://www.facebook.com/CenterSiemens",
                text: "@STCDeKUT",
              },
              {
                icon: "/x-icon.png",
                href: "https://twitter.com/CenterSiemens",
                text: "@CenterSiemens",
              },
              {
                icon: "/linkedin-icon.png",
                href: "https://www.linkedin.com/company/siemens-dekut",
                text: "@Siemens DeKUT",
              },
            ].map((social) => (
              <div key={social.href} className="flex items-center mt-2">
                <img src={social.icon} alt="" className="w-6 h-6 mr-2" />
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block transform transition-all duration-300 ease-in-out hover:scale-110 hover:text-siemens-green"
                >
                  {social.text}
                </a>
              </div>
            ))}
          </div>
        </div>
        <div className="text-center mt-4">
          <p>&copy; 2024 DeKUT Siemens Centre. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
