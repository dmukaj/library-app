import DarkModeToggle from "./componets/DarkModeToggle";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./componets/NavBar";
import Profile from "./pages/Profile";
import Account from "./pages/Account";
import Books from "./pages/Books";
import FavoriteBooks from "./pages/FavoriteBooks";
import { FavoriteProvider } from "./FavoritesContext";

function App() {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 h-screen">
      <FavoriteProvider>
        <Router location={location} key={location.pathname}>
          <DarkModeToggle />
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/account" element={<Account />} />
            <Route path="/books" element={<Books />} />
            <Route path="favoriteBooks" element={<FavoriteBooks />} />
          </Routes>
        </Router>
      </FavoriteProvider>
    </div>
  );
}

export default App;
