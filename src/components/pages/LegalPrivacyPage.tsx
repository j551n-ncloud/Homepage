import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function LegalPrivacyPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto max-w-4xl px-6 py-20 md:px-8 md:py-24">
        <div className="space-y-4">
          <Badge variant="outline" className="border-tech-500/50 text-tech-600">
            Privacy
          </Badge>
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Privacy Statement</h1>
          <p className="text-muted-foreground">
            Information on how personal data is handled on this site in line with GDPR and German data protection law.
          </p>
        </div>

        <div className="mt-10 space-y-6">
          <Card className="border border-border/70 bg-card/80 backdrop-blur">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-foreground">
                1. Responsible party
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-muted-foreground">
              <p>Name: Johannes Nguyen</p>
              <p>Address: Heinrich-böll-straße 28, 68723 Oftersheim, Germany</p>
              <p>Email: johannes.quangminh.nguyen@gmail.com</p>
              <p>
                The protection of personal data is taken seriously. Data is processed in accordance with the GDPR and the German Federal Data Protection Act (BDSG).
              </p>
            </CardContent>
          </Card>

          <Card className="border border-border/70 bg-card/80 backdrop-blur">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-foreground">
                2. Collection and processing of personal data
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-muted-foreground">
              <p>
                When visiting the website, server log files automatically capture the following information:
              </p>
              <ul className="ml-5 list-disc space-y-2">
                <li>Browser type and version</li>
                <li>Operating system used</li>
                <li>Referrer URL (previously visited page)</li>
                <li>Anonymized IP address</li>
                <li>Date and time of the server request</li>
              </ul>
              <p>
                This data cannot be attributed to specific individuals and is not combined with other sources. It ensures the secure and reliable operation of the website.
              </p>
            </CardContent>
          </Card>

          <Card className="border border-border/70 bg-card/80 backdrop-blur">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-foreground">
                3. Cookies
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              <p>
                Session cookies are used to enable core functionality and analytics during a visit. They are deleted automatically once the browser session ends.
              </p>
              <p>
                Browsers can be configured to block cookies. However, doing so may limit certain website features.
              </p>
            </CardContent>
          </Card>

          <Card className="border border-border/70 bg-card/80 backdrop-blur">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-foreground">
                4. Your rights
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-muted-foreground">
              <p>Individuals are entitled to the following rights regarding personal data:</p>
              <ul className="ml-5 list-disc space-y-2">
                <li>Access</li>
                <li>Rectification</li>
                <li>Erasure</li>
                <li>Restriction of processing</li>
                <li>Data portability</li>
                <li>Objection</li>
              </ul>
              <p>
                Requests can be submitted via the contact details listed in the responsible party section.
              </p>
            </CardContent>
          </Card>

          <Card className="border border-border/70 bg-card/80 backdrop-blur">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-foreground">
                5. Data security
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              <p>
                Appropriate technical and organizational measures are implemented to protect personal data from unauthorized access, loss, or alteration. Absolute protection against third-party access cannot be guaranteed.
              </p>
            </CardContent>
          </Card>

          <Card className="border border-border/70 bg-card/80 backdrop-blur">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-foreground">
                6. Changes to this privacy statement
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              <p>
                This statement may be updated to reflect legal requirements or service changes. The latest version is always available on this page.
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

export default LegalPrivacyPage;
