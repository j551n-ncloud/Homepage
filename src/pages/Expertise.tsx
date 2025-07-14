import { Layout } from "@/components/layout/Layout";
import { Expertise } from "@/components/home/Expertise";
import { useEffect } from "react";

const ExpertisePage = () => {
  useEffect(() => {
    document.title = "My Expertise | Johannes Nguyen";
  }, []);

  return (
    <Layout>
      <div className="pt-20">
        <Expertise />
      </div>
    </Layout>
  );
};

export default ExpertisePage;