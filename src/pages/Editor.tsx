
import { Layout } from "@/components/layout/Layout";
import { MarkdownEditor } from "@/components/editor/MarkdownEditor";
import { Button } from "@/components/ui/button";
import { Edit } from "lucide-react";

const Editor = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
            <div>
              <h1 className="text-3xl font-bold">Markdown Editor</h1>
              <p className="text-muted-foreground">
                Create and edit markdown content
              </p>
            </div>
          </div>
          
          <div className="w-full">
            <div className="flex items-center gap-2 mb-4">
              <Edit className="h-4 w-4" />
              <span className="font-medium">Editor</span>
            </div>
            <MarkdownEditor />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Editor;
