
 
const Footer: React.VFC = () => {
    return ( 
        <footer className="w-full text-center p-4 text-xs text-gray-400">
        <p>
          Built with
          <a
            href="https://it.reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-blue-800 dark:hover:text-blue-300"
          > React.js </a
          >
          and
          <a
            href="https://tailwindcss.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-blue-800 dark:hover:text-blue-300"
          > Tailwind </a
          >
        </p>
      </footer>
     );
}
 
export default Footer;