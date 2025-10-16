import { useEffect, useState } from "react";
import { Search, Filter, TrendingUp, Check, ChevronDown } from "lucide-react";
import "./articleSearchBox.css";
import { getCategories } from "../../Services/auth";

const sortOptions = ["Newest First", "Oldest First"];

export default function ArticleSearchBox({ setFinalData, getData }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [selectedSort, setSelectedSort] = useState("Newest First");
  const [filterDropdownOpen, setFilterDropdownOpen] = useState(false);
  const [sortDropdownOpen, setSortDropdownOpen] = useState(false);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((data) => setCategories(data.data));
  }, []);

  const filterOptions = ["All"];
  categories.map((detail) => {
    filterOptions.push(detail.title);
  });

  function handleOption(option) {
    setSelectedFilter(option);
    setFilterDropdownOpen(false);
    if (option === "All") {
      setFinalData(getData);
    } else {
      const filteredData = getData.filter(
        (detail) => detail.category === option
      );
      setFinalData(filteredData);
    }
  }

  function handleDetailByTime(option) {
    setSelectedSort(option);
    setSortDropdownOpen(false);
    if (option === "Oldest First") {
      const sortedOldest = [...getData].sort((a, b) => {
        return new Date(a.date) - new Date(b.date);
      });
      setFinalData(sortedOldest);
    }
    if (option === "Newest First") {
      const sortedNewest = [...getData].sort((a, b) => {
        return new Date(b.date) - new Date(a.date);
      });
      setFinalData(sortedNewest);
    }
  }
  function handleSearchQuery(e) {
    const query = e.target.value;
    setSearchQuery(query);

    if (query.trim()) {
      const searchData = getData.filter((detail) =>
        detail.category.toLowerCase().includes(query.toLowerCase())
      );
      setFinalData(searchData);
    } else {
      setFinalData(getData);
    }
  }

  return (
    <div className="search-filter-container">
      <div className="search-filter-bar">
        <div className="search-input-wrapper">
          <Search className="search-icon" />
          <input
            type="text"
            placeholder="Search articles, tags, or authors..."
            value={searchQuery}
            onChange={handleSearchQuery}
            className="search-input"
          />
        </div>

        <div className={`dropdown-wrapper ${filterDropdownOpen ? "open" : ""}`}>
          <button
            onClick={() => setFilterDropdownOpen(!filterDropdownOpen)}
            className="dropdown-button filter-button"
          >
            <div className="dropdown-button-content">
              <Filter className="dropdown-icon" />
              <span className="dropdown-text">{selectedFilter}</span>
            </div>
            <ChevronDown className="chevron-icon" />
          </button>

          <div
            className={`dropdown-menu filter-menu ${
              filterDropdownOpen ? "show" : ""
            }`}
          >
            {filterOptions.map((option) => (
              <div
                key={option}
                onClick={() => handleOption(option)}
                className="dropdown-item"
              >
                <span>{option}</span>
                {selectedFilter === option && <Check className="check-icon" />}
              </div>
            ))}
          </div>
        </div>

        <div className={`dropdown-wrapper ${sortDropdownOpen ? "open" : ""}`}>
          <button
            onClick={() => setSortDropdownOpen(!sortDropdownOpen)}
            className="dropdown-button sort-button"
          >
            <div className="dropdown-button-content">
              <TrendingUp className="dropdown-icon" />
              <span className="dropdown-text">{selectedSort}</span>
            </div>
            <ChevronDown className="chevron-icon" />
          </button>

          <div
            className={`dropdown-menu sort-menu ${
              sortDropdownOpen ? "show" : ""
            }`}
          >
            {sortOptions.map((option) => (
              <div
                key={option}
                onClick={() => handleDetailByTime(option)}
                className="dropdown-item"
              >
                <span>{option}</span>
                {selectedSort === option && <Check className="check-icon" />}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="demo-results">
        <p className="demo-text">
          Search: "{searchQuery || "No search query"}" | Filter:
          {selectedFilter} | Sort: {selectedSort}
        </p>
      </div>
    </div>
  );
}
