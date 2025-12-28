export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/15 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
          <div>
            <h3 className="text-white text-sm font-medium mb-4">Taipei</h3>
            <p className="text-white/60 text-sm font-light">
              8F, No. 42, Xuchang Street<br />
              Zhongzheng District, Taipei, Taiwan
            </p>
          </div>
          <div>
            <h3 className="text-white text-sm font-medium mb-4">Contact</h3>
            <p className="text-white/60 text-sm font-light mb-4">
              <a href="mailto:info@wisecom.biz" className="hover:text-white transition-colors">
                info@wisecom.biz
              </a>
            </p>
            <p className="text-white/60 text-sm font-light">
              <a href="https://wisecom.biz" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                wisecom.biz
              </a>
            </p>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/15">
          <p className="text-white/40 text-xs font-light">
            © 2020-{new Date().getFullYear()} WiseVenture. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

