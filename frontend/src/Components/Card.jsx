import React from "react";

export function Card({ children, className = "" }) {
  return <div className={`wg-card ${className}`}>{children}</div>;
}

export function CardHeader({ children }) {
  return <div className="wg-card-header">{children}</div>;
}

export function CardTitle({ children }) {
  return <h2 className="wg-card-title">{children}</h2>;
}

export function CardContent({ children }) {
  return <div className="wg-card-content">{children}</div>;
}
