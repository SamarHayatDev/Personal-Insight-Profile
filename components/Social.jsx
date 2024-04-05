import React from "react";
import Link from "next/link";
import { FaLinkedin, FaInstagram } from "react-icons/fa6";

const Social = () => {
  return (
    <div className="card">
      <h3>Social Media:</h3>
      <div className="flex flex-wrap gap-2">
        <Link
          href="https://www.linkedin.com/in/samarhayatofficial/"
          target="_blank"
        >
          <button className="btn flex items-center justify-start gap-1">
            <FaLinkedin />
            LinkedIn
          </button>
        </Link>
        <Link
          href="https://www.instagram.com/samarhayatofficiall/"
          target="_blank"
        >
          <button className="btn flex items-center justify-start gap-1">
            <FaInstagram />
            Instagram
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Social;
