import {ModeToggle} from "./components/ui/mode-toggle";
import {ThemeProvider} from "@/components/ui/theme-provider";

const Header = () => {
  return (
    <nav className='m-auto flex items-center justify-between px-5 min-h-[80px] text-xl'>
      <h2>Arvin Buid</h2>
      <ul className='flex items-center justify-center gap-5'>
        <li>
          <ThemeProvider defaultTheme='light' storageKey='vite-ui-theme'>
            <ModeToggle />
          </ThemeProvider>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
