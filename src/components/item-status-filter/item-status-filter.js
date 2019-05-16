import React, { Component } from "react";

import "./item-status-filter.css";

export default class ItemStatusFilter extends Component {
  btns = [
    {label: "All", name: "all"},
    {label: "Active", name: "active"},
    {label: "Done", name: "done"},
  ]

  render() {
    const btns = this.btns.map(({ label, name }) => {
      const isActive = this.props.filter === name;
      const btnClass = isActive ? "btn-info" : "btn-outline-secondary";

      return (
        <button
          type="button"
          className={`btn ${btnClass}`}
          key={name}
          onClick={() => {
            this.props.onFilterChange(name);
          }}
        >
          {label}
        </button>
      );
    });

    return (
      <div className="btn-group">
        {btns}
      </div>
    );
  }
}
