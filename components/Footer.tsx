function Footer() {
    const currentYear = new Date().getFullYear()
  return (
    <footer className="flex flex-col items-center justify-center text-white w-full bg-black pb-8 gap-4">
        <div className="w-[90%] h-1 bg-gradient-to-r from-orange-300/50 via-brand-orange to-orange-300/50 rounded-[50%]"></div>
        <div className="flex items-center justify-center gap-8">
            <a href=""><img src="./github-icon.svg" alt="Github icon" /></a>
            <a href="mailto:niklas@nordindev.se">niklas@nordindev.se</a>
            <a href=""><img src="./linkedin-icon.svg" alt="LinkedIn icon" /></a>
        </div>
      <span>© {currentYear} Niklas Nordin</span>
    </footer>
  );
}

export default Footer;