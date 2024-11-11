// // import { Link } from 'react-router-dom';
// import React from "react";

// const Footer = () => {
//   return (
//     <footer className="flex overflow-hidden flex-col px-16 py-20 w-full bg-neutral-900 max-md:px-5 max-md:max-w-full">
//       <div className="flex flex-wrap gap-10 items-start w-full max-md:max-w-full">
//         <div className="flex overflow-hidden flex-col min-w-[240px] w-[864px] max-md:max-w-full">
//           <h2 className="text-lg text-emerald-900 max-md:max-w-full">Shine Panjwani</h2>
//           <div className="flex flex-col mt-8 w-full max-md:max-w-full">
//             <address className="flex flex-col w-full text-sm leading-relaxed max-md:max-w-full not-italic">
//               <h3 className="text-white max-md:max-w-full">Address:</h3>
//               <p className="mt-1 text-emerald-900 max-md:max-w-full">
//                 Level 1, 12 Sample St, Sydney NSW 2000
//               </p>
//             </address>
//             <div className="flex flex-col mt-6 w-full text-sm text-emerald-900 whitespace-nowrap max-md:max-w-full">
//               <h3 className="leading-relaxed max-md:max-w-full">Contact:</h3>
//               <p className="mt-1 leading-6 max-md:max-w-full">
//                 9244001991<br />
//                 shinepanjwani18@gmail.com
//               </p>
//             </div>
//             <div className="flex gap-3 items-start self-start mt-6">
//               <a href="#" aria-label="Facebook"><img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/29a1b29da7e5fa1d78937e2416e1048248423b7bd84edca9ac9f9d1c4bdbba7c?placeholderIfAbsent=true&apiKey=2d875c38290a48d8b961862247f65523" alt="Facebook icon" className="object-contain shrink-0 w-6 aspect-square" /></a>
//               <a href="#" aria-label="Twitter"><img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/27c4cc1585468ee0879a7ac037654ec214fe8ee4f74de5179ab5b570b216dd0a?placeholderIfAbsent=true&apiKey=2d875c38290a48d8b961862247f65523" alt="Twitter icon" className="object-contain shrink-0 w-6 aspect-square" /></a>
//               <a href="#" aria-label="Instagram"><img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/00776960116fb2f10cff18144058d91fcc206c3a69843b3af584458e6a8a2cee?placeholderIfAbsent=true&apiKey=2d875c38290a48d8b961862247f65523" alt="Instagram icon" className="object-contain shrink-0 w-6 aspect-square" /></a>
//               <a href="#" aria-label="LinkedIn"><img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/4c9afcdaba2708f30de39ca2e72e195b1bd27b4c180057d48a210504ef952b78?placeholderIfAbsent=true&apiKey=2d875c38290a48d8b961862247f65523" alt="LinkedIn icon" className="object-contain shrink-0 w-6 aspect-square" /></a>
//               <a href="#" aria-label="YouTube"><img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/0cb0fa97df7c76eef2fbd13aa0a2e9be6249003b99ce032585ecc36a4da80963?placeholderIfAbsent=true&apiKey=2d875c38290a48d8b961862247f65523" alt="YouTube icon" className="object-contain shrink-0 w-6 aspect-square" /></a>
//             </div>
//           </div>
//         </div>
//         <nav className="flex overflow-hidden flex-1 shrink gap-6 items-start text-sm leading-relaxed text-emerald-900 basis-0">
//           <div className="flex flex-col flex-1 shrink basis-0">
//             {/* <Link></Link> */}
//             {/* <Link to="/about">About Us</Link>
//             <Link to="/courses" className="mt-3">Courses</Link>
//             <Link to="/instructors" className="mt-3">Instructors</Link>
//             <Link to="/testimonials" className="mt-3">Testimonials</Link> */}
//           </div>
//           <div className="flex flex-col flex-1 shrink basis-0">
//             {/* <Link to="/blog">Blog</Link>
//             <Link to="/help" className="mt-3">Help Center</Link>
//             <Link to="/privacy" className="mt-3">Privacy Policy</Link>
//             <Link to="/terms" className="mt-3 leading-6">Terms of Service</Link> */}
//           </div>
//         </nav>
//       </div>
//       <div className="flex flex-col mt-20 w-full text-sm leading-relaxed text-emerald-900 max-md:mt-10 max-md:max-w-full">
//         <hr className="w-full bg-zinc-100 min-h-[1px] max-md:max-w-full" />
//         <div className="flex flex-wrap gap-10 justify-between items-start mt-8 w-full max-md:max-w-full">
//           <p>© 2024 Educational Platform. All rights reserved.</p>
//           <div className="flex gap-6 items-start">
//             {/* <Link to="/privacy">Privacy Policy</Link>
//             <Link to="/terms">Terms of Service</Link> */}
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

// import { Link } from 'react-router-dom';
import React from "react";
import './Footer2.css';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <h2 className="footer-title">Shine Panjwani</h2>
          <div className="footer-info">
            <address className="footer-address">
              <h3 className="footer-heading">Address:</h3>
              <p className="footer-text">Level 1, 12 Sample St, Sydney NSW 2000</p>
            </address>
            <div className="footer-contact">
              <h3 className="footer-heading">Contact:</h3>
              <p className="footer-text">
                9244001991<br />
                shinepanjwani18@gmail.com
              </p>
            </div>
            <div className="footer-social">
              <a href="#" aria-label="Facebook"><img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/29a1b29da7e5fa1d78937e2416e1048248423b7bd84edca9ac9f9d1c4bdbba7c?placeholderIfAbsent=true&apiKey=2d875c38290a48d8b961862247f65523" alt="Facebook icon" className="social-icon" /></a>
              <a href="#" aria-label="Twitter"><img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/27c4cc1585468ee0879a7ac037654ec214fe8ee4f74de5179ab5b570b216dd0a?placeholderIfAbsent=true&apiKey=2d875c38290a48d8b961862247f65523" alt="Twitter icon" className="social-icon" /></a>
              <a href="#" aria-label="Instagram"><img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/00776960116fb2f10cff18144058d91fcc206c3a69843b3af584458e6a8a2cee?placeholderIfAbsent=true&apiKey=2d875c38290a48d8b961862247f65523" alt="Instagram icon" className="social-icon" /></a>
              <a href="#" aria-label="LinkedIn"><img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/4c9afcdaba2708f30de39ca2e72e195b1bd27b4c180057d48a210504ef952b78?placeholderIfAbsent=true&apiKey=2d875c38290a48d8b961862247f65523" alt="LinkedIn icon" className="social-icon" /></a>
              <a href="#" aria-label="YouTube"><img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/0cb0fa97df7c76eef2fbd13aa0a2e9be6249003b99ce032585ecc36a4da80963?placeholderIfAbsent=true&apiKey=2d875c38290a48d8b961862247f65523" alt="YouTube icon" className="social-icon" /></a>
            </div>
          </div>
        </div>
        <nav className="footer-nav">
          <div className="footer-links">
            {/* <Link to="/about">About Us</Link>
            <Link to="/courses">Courses</Link>
            <Link to="/instructors">Instructors</Link>
            <Link to="/testimonials">Testimonials</Link> */}
          </div>
          <div className="footer-links">
            <Link to="/blog">Blog</Link>
            <Link to="/help">Help Center</Link>
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
          </div>
        </nav>
      </div>
      <div className="footer-bottom">
        <hr className="footer-divider" />
        <div className="footer-copyright">
          <p>© 2024 Educational Platform. All rights reserved.</p>
          <div className="footer-policy-links">
            {/* <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
