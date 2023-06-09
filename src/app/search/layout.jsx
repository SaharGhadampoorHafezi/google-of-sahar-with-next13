import Footer from "@/components/Footer";
import SearchHeader from "@/components/SearchHeader";
import "./../globals.css";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function SearchLayout({ children }) {
  return (
    <div>
      <SearchHeader />
      {children}
    </div>
  );
}

// if you wanted to have something common, go one forward back
// and create what you wanted which is here, a layout
