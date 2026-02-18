import { useEffect, useState } from "react";
import { Search, Filter, TrendingUp, Check, ChevronDown } from "lucide-react";
import "./articleSearchBox.css";
import { getCategories } from "../../Services/categories";

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

  const filterOptions = ["All", ...categories.map((detail) => detail.title)];

  useEffect(() => {
    let result = [...getData];

    // Search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter((item) => {
        const titleMatch = item.title?.toLowerCase().includes(query);
        const authorMatch = item.author?.toLowerCase().includes(query);
        const categoryMatch = item.category?.toLowerCase().includes(query);
        const tagsMatch = item.tags?.some((tag) =>
          tag.toLowerCase().includes(query)
        );
        return titleMatch || authorMatch || categoryMatch || tagsMatch;
      });
    }

    // Category filter
    if (selectedFilter !== "All") {
      result = result.filter((item) => item.category === selectedFilter);
    }

    // Sort
    if (selectedSort === "Oldest First") {
      result.sort((a, b) => new Date(a.date) - new Date(b.date));
    } else {
      // Default to Newest First
      result.sort((a, b) => new Date(b.date) - new Date(a.date));
    }

    setFinalData(result);
  }, [searchQuery, selectedFilter, selectedSort, getData, setFinalData]);

  function handleOption(option) {
    setSelectedFilter(option);
    setFilterDropdownOpen(false);
  }

  function handleDetailByTime(option) {
    setSelectedSort(option);
    setSortDropdownOpen(false);
  }

  function handleSearchQuery(e) {
    setSearchQuery(e.target.value);
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
