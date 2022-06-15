import React from "react";

export default function Header({ Category, title }) {
  return (
    <div className="mb-10">
      <p className="text-gray=400">{Category}</p>
      <p className="text-3xl font-extrabold tracking-tight text-slate-900">
        {title}
      </p>
    </div>
  );
}
