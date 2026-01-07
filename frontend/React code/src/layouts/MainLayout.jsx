import React,{useState,useEffect} from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { ToastContainer } from 'react-toastify';


const MainLayout = () => {

const [searchTerm, setSearchTerm] = useState("");
  const [debouncedTerm, setDebouncedTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  // 1️⃣ Debounce logic
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedTerm(searchTerm);
    }, 500);

    return () => clearTimeout(timer);
  }, [searchTerm]);

  // 2️⃣ API call (backend search)
  useEffect(() => {
    if (debouncedTerm.trim() === "") {
      setSearchResults([]);
      return;
    }

    const fetchSearchResults = async () => {
      try {
        const res = await fetch(
          `http://localhost:8080/products/search?keyword=${encodeURIComponent(
            debouncedTerm
          )}`
        );
        const data = await res.json();

        // defensive sanity check
        setSearchResults(Array.isArray(data) ? data : data.results || []);
      } catch (err) {
        console.error("Search failed", err);
        setSearchResults([]);
      }
    };

    fetchSearchResults();
  }, [debouncedTerm]);


  return (
    <div>
      <Navbar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      <Outlet
        context={{
          searchResults,
          searchTerm: debouncedTerm,
        }}
      />
      <ToastContainer />
    </div>
  );
};

export default MainLayout;
