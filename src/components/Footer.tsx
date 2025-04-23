
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-marble-900 text-marble-100 py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Information */}
          <div>
            <h3 className="text-xl font-serif font-medium mb-4">MarbleAlt</h3>
            <p className="text-marble-300 mb-4">
              {t("footer.companyInfo")}
            </p>
            <p className="text-marble-300">
              {t("footer.address")}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-serif font-medium mb-4">{t("footer.quickLinks")}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-marble-300 hover:text-white transition-colors">
                  {t("footer.aboutUs")}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-marble-300 hover:text-white transition-colors">
                  {t("footer.contactUs")}
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-marble-300 hover:text-white transition-colors">
                  {t("footer.blog")}
                </Link>
              </li>
              <li>
                <Link to="/faqs" className="text-marble-300 hover:text-white transition-colors">
                  {t("footer.faqs")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Product Categories */}
          <div>
            <h3 className="text-xl font-serif font-medium mb-4">{t("footer.products")}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/categories/marble-alternative" className="text-marble-300 hover:text-white transition-colors">
                  {t("header.marbleAlternative")}
                </Link>
              </li>
              <li>
                <Link to="/categories/rolls" className="text-marble-300 hover:text-white transition-colors">
                  {t("header.rolls")}
                </Link>
              </li>
              <li>
                <Link to="/categories/spc" className="text-marble-300 hover:text-white transition-colors">
                  {t("header.spc")}
                </Link>
              </li>
              <li>
                <Link to="/categories/pvc" className="text-marble-300 hover:text-white transition-colors">
                  {t("header.pvc")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-serif font-medium mb-4">{t("footer.stayUpdated")}</h3>
            <p className="text-marble-300 mb-4">
              {t("footer.newsletter")}
            </p>
            <div className="flex">
              <input 
                type="email" 
                placeholder={t("footer.yourEmail")}
                className="p-2 bg-marble-800 text-white rounded-l-md flex-grow focus:outline-none focus:ring-1 focus:ring-white"
              />
              <button className="bg-white text-marble-900 px-4 py-2 rounded-r-md hover:bg-marble-300 transition-colors">
                {t("footer.subscribe")}
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-6 border-t border-marble-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-marble-400 text-sm mb-4 md:mb-0">
            &copy; {year} MarbleAlt. {t("footer.rights")}
          </p>
          <div className="flex gap-4">
            <Link to="/privacy" className="text-marble-400 text-sm hover:text-white transition-colors">
              {t("footer.privacy")}
            </Link>
            <Link to="/terms" className="text-marble-400 text-sm hover:text-white transition-colors">
              {t("footer.terms")}
            </Link>
            <Link to="/shipping" className="text-marble-400 text-sm hover:text-white transition-colors">
              {t("footer.shipping")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
