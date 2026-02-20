import React from 'react';
import './components.css';

const LocationSuggestions = ({ suggestions, onSelect, loading }) => {
  if (!suggestions || suggestions.length === 0) {
    return null;
  }

  return (
    <div className="suggestions-container">
      <h4 className="suggestions-title">Suggested Locations:</h4>
      <ul className="suggestions-list">
        {suggestions.map((suggestion, index) => (
          <li key={index} className="suggestion-item">
            <button
              className="suggestion-button"
              onClick={() => onSelect(suggestion)}
              disabled={loading}
            >
              <span className="suggestion-main">
                {suggestion.name}
                {suggestion.region && ` (${suggestion.region})`}
              </span>
              <span className="suggestion-secondary">
                {suggestion.country}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LocationSuggestions;