import React, { useEffect, useState } from "react";

const GoogleFonts = () => {
  useEffect(() => {
    const API_KEY = process.env.REACT - APP - API - GOOGLE - FONTS;
    const url = `https://www.googleapis.com/webfonts/v1/webfonts?key=${API_KEY}`;
  });

  return (
    <div>
      test
    </div>
  );
};

export default GoogleFonts;
