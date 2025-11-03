import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function LegalNoticePage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto max-w-4xl px-6 py-20 md:px-8 md:py-24">
        <div className="space-y-4">
          <Badge variant="outline" className="border-tech-500/50 text-tech-600">
            Legal Notice
          </Badge>
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Impressum</h1>
          <p className="text-muted-foreground">
            Mandatory information according to German TMG and RStV regulations for this privately operated website.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6">
          <Card className="border border-border/70 bg-card/80 backdrop-blur">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-foreground">
                Information according to § 5 TMG
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-1 text-sm text-muted-foreground">
              <p>Johannes Nguyen</p>
              <p>Heinrich-böll-straße 28</p>
              <p>68723 Oftersheim</p>
              <p>Germany</p>
            </CardContent>
          </Card>

          <Card className="border border-border/70 bg-card/80 backdrop-blur">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-foreground">
                Contact
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              <p>Email: johannes.quangminh.nguyen@gmail.com</p>
            </CardContent>
          </Card>

          <Card className="border border-border/70 bg-card/80 backdrop-blur">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-foreground">
                Responsible for content (§ 55 Abs. 2 RStV)
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-1 text-sm text-muted-foreground">
              <p>Johannes Nguyen</p>
              <p>Heinrich-böll-straße 28</p>
              <p>68723 Oftersheim</p>
              <p>Germany</p>
            </CardContent>
          </Card>

          <Card className="border border-border/70 bg-card/80 backdrop-blur">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-foreground">
                Liability for content
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm leading-relaxed text-muted-foreground">
              <p>
                The content of this website has been created with the greatest possible care. However, I cannot guarantee the
                accuracy, completeness, and timeliness of the content. As a service provider, I am responsible for my own content on these pages in accordance with § 7 paragraph 1 TMG under general law. According to §§ 8 to 10 TMG, however, I am not obligated as a service provider to monitor transmitted or stored foreign information or to investigate circumstances that indicate illegal activity. Obligations to remove or block the use of information according to general laws remain unaffected. However, liability in this respect is only possible from the time of knowledge of a specific legal violation. If I become aware of any such legal violations, I will remove the content immediately.
              </p>
            </CardContent>
          </Card>

          <Card className="border border-border/70 bg-card/80 backdrop-blur">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-foreground">
                Liability for links
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm leading-relaxed text-muted-foreground">
              <p>
                My website contains links to external third-party websites over whose content I have no control. Therefore, I cannot assume any liability for this external content. The respective provider or operator of the linked pages is always responsible for the content of the linked pages. The linked pages were checked for possible legal violations at the time of linking. No illegal content was discernible at the time of linking. However, continuous monitoring of the content of the linked pages is not reasonable without concrete indication of a legal violation. If I become aware of any legal violations, I will remove such links immediately.
              </p>
            </CardContent>
          </Card>

          <Card className="border border-border/70 bg-card/80 backdrop-blur">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-foreground">
                Copyright
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm leading-relaxed text-muted-foreground">
              <p>
                The content and works created by the site operator on these pages are subject to German copyright law. The reproduction, editing, distribution, and any kind of exploitation outside the limits of copyright law require the written consent of the respective author or creator. Downloads and copies of this site are only permitted for private, non-commercial use. Insofar as the content on this site was not created by the operator, the copyrights of third parties are respected. In particular, third-party content is marked as such. Should you nevertheless become aware of a copyright infringement, please inform me accordingly. If I become aware of any infringements, I will remove such content immediately.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 text-xs text-muted-foreground">
          <p>Last updated: April 2025</p>
        </div>
      </div>
    </div>
  );
}

export default LegalNoticePage;
