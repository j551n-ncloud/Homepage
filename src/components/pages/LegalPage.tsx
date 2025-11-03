import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { IconBadge } from "@/components/ui/icon-badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Shield } from "lucide-react";

export function LegalPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto max-w-4xl px-6 py-20 md:px-8 md:py-24">
        <div className="space-y-4">
          <Badge variant="outline" className="border-tech-500/50 text-tech-600">
            Compliance
          </Badge>
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Legal information</h1>
          <p className="text-lg text-muted-foreground">
            All required legal documents for this portfolio, transparent, GDPR aligned, and up to date for Germany.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          <Card className="border border-border/70 bg-card/80 backdrop-blur">
            <CardHeader className="flex flex-col gap-4 pb-4">
              <IconBadge icon={Shield} tone="tech" />
              <CardTitle className="text-xl font-semibold text-foreground">
                Privacy Statement
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-muted-foreground">
              <p>
                Details about how personal data is processed and the rights granted under GDPR and German data protection law.
              </p>
              <Button asChild variant="outline" className="w-full rounded-none border-2 border-tech-500/60 bg-tech-500 text-tech-foreground hover:bg-tech-600">
                <Link href="/legal/privacy">View Privacy Statement</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="border border-border/70 bg-card/80 backdrop-blur">
            <CardHeader className="flex flex-col gap-4 pb-4">
              <IconBadge icon={FileText} tone="tech" />
              <CardTitle className="text-xl font-semibold text-foreground">
                Legal Notice (Impressum)
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-muted-foreground">
              <p>
                Legally required contact details and disclosures for operating this website in accordance with German law.
              </p>
              <Button asChild variant="outline" className="w-full rounded-none border-2 border-tech-500/60 bg-tech-500 text-tech-foreground hover:bg-tech-600">
                <Link href="/legal/notice">View Legal Notice</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default LegalPage;
