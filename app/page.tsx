import CompanionCard from "@/components/CompanionCard";
import CompanionList from "@/components/CompanionList";
import Cta from "@/components/Cta";
import { Button } from "@/components/ui/button";

import {
  getCompanions,
  getRecentSession,
} from "@/lib/actions/companions.actions";
import { getSubjectColor } from "@/lib/utils";
import React from "react";

const Page = async () => {
  const companions = await getCompanions({ limit: 3 });
  const recentSessionCompanion = await getRecentSession({ limit: 10 });
  return (
    <main>
      <h1 className="text-2xl underline">Popular Companions</h1>
      <section className="home-section">
        {companions?.map((companion) => (
          <CompanionCard
            key={companion.id}
            {...companion}
            color={getSubjectColor(companion.subject)}
          />
        ))}
      </section>
      <section className="home-section">
        <CompanionList
          title="Recently Completed Sessions"
          companions={recentSessionCompanion}
          className="w-2/3 max:lg:w-full"
        />
        <Cta />
      </section>
    </main>
  );
};

export default Page;
