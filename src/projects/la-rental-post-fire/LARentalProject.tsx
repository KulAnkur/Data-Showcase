import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Project } from '@/data/projects';       // or projectRegistry model
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

/* ------------------------------------------------------------------ */
/*  ⬇️  Paste ONLY your Plotly “Embed” code between the back‑ticks.    */
/*      You can use either the <iframe …> snippet or the full          */
/*      <div id="plotly-chart">…<script>… Plotly.newPlot() …</script>  */
/*      bundle from Chart Studio.                                      */
const PLOTLY_EMBED = `
<iframe
  src="https://plotly.com/~yourUser/42.embed"
  style="width:100%;height:100%;border:none;"
  title="LA Rent Trends Pre/Post Fires"
  loading="lazy"
></iframe>
`;
/* ------------------------------------------------------------------ */

interface LARentalProjectProps {
  project: Project;              // provided by your ProjectWrapper
}

const LARentalProject: React.FC<LARentalProjectProps> = ({ project }) => {
  React.useEffect(() => window.scrollTo(0, 0), []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="container mx-auto px-4 py-8">
        {/* Back button */}
        <Link to="/">
          <Button variant="ghost" className="mb-6 flex items-center gap-2 hover:bg-muted">
            <ChevronLeft className="h-4 w-4" />
            Back to Projects
          </Button>
        </Link>

        {/* ------------- header ----------------------------------- */}
        <div className="mb-12">
          <div className="rounded-lg overflow-hidden h-64 md:h-96 mb-6">
            <img
              src={project.thumbnail}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex flex-col gap-2">
            <h1 className="text-3xl md:text-4xl font-bold">{project.title}</h1>
            <p className="text-muted-foreground">{project.date}</p>

            <div className="flex flex-wrap gap-2 my-4">
              {project.category.map((cat, i) => (
                <Badge key={i} variant="secondary" className="font-normal">
                  {cat}
                </Badge>
              ))}
            </div>

            <div className="flex flex-wrap gap-1 text-sm text-foreground/60 mb-6">
              <span className="font-semibold">Tools used:</span>
              {project.tools.map((tool, i) => (
                <span
                  key={i}
                  className="after:content-['•'] after:mx-1 last:after:content-none"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ------------- content grid ----------------------------- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* ---- main column ---- */}
          <div className="lg:col-span-2 order-2 lg:order-1">
            <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
            <p className="text-foreground/80 mb-6 leading-relaxed">
              {project.description}
              <br />
              <br />
              This dashboard analyses Zillow rent data to measure price shifts
              across LA County before and after the January 7 2025 wildfires.
              Visuals include median rent timelines, price‑per‑sqft maps, and
              listing‑volume trends.
            </p>

            <h2 className="text-2xl font-semibold mb-4">Key Findings</h2>
            <ul className="list-disc pl-5 mb-8 space-y-2 text-foreground/80">
              <li>County‑wide median rent spiked ≈ 7 % within three months post‑fire.</li>
              <li>Zip codes 90049 & 90272 saw the largest jumps (≥ 12 %).</li>
              <li>Listing volume dipped 30 % in the first six weeks—supply shock.</li>
              <li>Price‑per‑sqft increases were strongest for 2‑bedroom apartments.</li>
              <li>Neighbourhoods closer to evacuation zones showed outsized volatility.</li>
            </ul>

            {/* ---- plotly embed card ---- */}
            <h2 className="text-2xl font-semibold mb-6">Data Visualization</h2>
            <div className="bg-card rounded-lg p-4 shadow-sm border mb-6">
              {/* eslint-disable-next-line react/no-danger */}
              <div
                className="w-full h-[500px]"
                dangerouslySetInnerHTML={{ __html: PLOTLY_EMBED }}
              />
            </div>
            <p className="text-sm text-muted-foreground italic">
              Figure&nbsp;1: Interactive comparison of median rent by bedroom
              group (LOWESS‑smoothed) before vs. after the wildfires.
            </p>
          </div>

          {/* ---- sticky sidebar ---- */}
          <div className="lg:col-span-1 order-1 lg:order-2">
            <div className="bg-muted/50 rounded-lg p-6 sticky top-24">
              <h3 className="text-xl font-semibold mb-4">Project Details</h3>

              <div className="space-y-4 mb-6">
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground">Project Date</h4>
                  <p>{project.date}</p>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-muted-foreground">Categories</h4>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {project.category.map((cat, i) => (
                      <span key={i} className="text-sm">
                        {cat}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-muted-foreground">Tools & Tech</h4>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {project.tools.map((tool, i) => (
                      <span key={i} className="text-sm">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default LARentalProject;
