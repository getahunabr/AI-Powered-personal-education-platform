import Image from "next/image";
import Link from "next/link";
import React from "react";

const Cta = () => {
  return (
    <section className="cta-section">
      <div className="cta-badge">Start learning your way.</div>
      <h2 className="text-3xl font-bold">
        Build and Personalize Learning Companion
      </h2>
      <p>
        Pick a name,subject,voice, &Personality-and start learning through voice
        conversations that feel natural and fun.
      </p>
      <Image
        src="/images/cta.svg"
        alt="cta-image"
        width={362}
        height={232}
        className="cta-image"
      />
      <button className="btn-primary">
        <Image src="/icons/plus.svg" alt="plus-icon" width={12} height={12} />
        <Link href="/Companions/new">
          <p>Build a New Companion</p>
        </Link>
      </button>
    </section>
  );
};

export default Cta;
