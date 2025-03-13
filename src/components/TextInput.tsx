
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Upload, Headphones, ArrowRight, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent } from "@/components/ui/card";

interface TextInputProps {
  onTextSubmit: (text: string) => void;
}

const TextInput = ({ onTextSubmit }: TextInputProps) => {
  const [text, setText] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Only accept .txt files
    if (file.type !== "text/plain" && !file.name.endsWith(".txt")) {
      toast({
        title: "Invalid file format",
        description: "Please upload a .txt file",
        variant: "destructive",
      });
      return;
    }

    try {
      setIsUploading(true);
      const text = await file.text();
      setText(text);
      toast({
        title: "File uploaded successfully",
        description: `Loaded ${file.name}`,
      });
    } catch (error) {
      toast({
        title: "Error reading file",
        description: "There was an error reading your file",
        variant: "destructive",
      });
      console.error("Error reading file:", error);
    } finally {
      setIsUploading(false);
    }
  };

  const handleSubmit = () => {
    if (!text.trim()) {
      toast({
        title: "Empty text",
        description: "Please enter or upload text first",
        variant: "destructive",
      });
      return;
    }
    
    onTextSubmit(text);
  };

  const handleClear = () => {
    setText("");
  };
  
  const triggerFileUpload = () => {
    fileInputRef.current?.click();
  };

  return (
    <motion.div 
      className="w-full max-w-3xl mx-auto px-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.5 }}
    >
      <Card className="glass">
        <CardContent className="p-6">
          <div className="flex flex-col space-y-4">
            <div className="relative">
              <Textarea
                value={text}
                onChange={handleTextChange}
                placeholder="Input or upload your Chinese text here..."
                className="min-h-[200px] p-4 resize-y bg-white/50 backdrop-blur-sm border-muted focus:border-purple transition-colors"
                style={{ fontFamily: "'Inter', sans-serif" }}
              />
              {text && (
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-2 right-2 h-6 w-6 rounded-full bg-muted/70 hover:bg-muted"
                  onClick={handleClear}
                >
                  <X className="h-3 w-3" />
                </Button>
              )}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 w-full justify-between items-center">
              <div className="flex gap-3 w-full sm:w-auto">
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileUpload}
                  className="hidden"
                  accept=".txt"
                />
                
                <motion.div whileTap={{ scale: 0.97 }} className="w-full sm:w-auto">
                  <Button
                    variant="outline" 
                    onClick={triggerFileUpload}
                    className="w-full sm:w-auto button-effect flex items-center gap-2"
                    disabled={isUploading}
                  >
                    {isUploading ? (
                      <div className="flex items-center gap-2">
                        <div className="h-4 w-4 animate-spin rounded-full border-2 border-purple border-t-transparent" />
                        <span>Uploading...</span>
                      </div>
                    ) : (
                      <>
                        <Upload className="h-4 w-4" />
                        <span>Upload .txt File</span>
                      </>
                    )}
                  </Button>
                </motion.div>
              </div>
              
              <motion.div whileTap={{ scale: 0.97 }} className="w-full sm:w-auto">
                <Button
                  variant="default"
                  onClick={handleSubmit}
                  className="w-full sm:w-auto button-effect bg-purple hover:bg-purple-dark flex items-center gap-2 rounded-full px-6"
                >
                  <span>Start</span>
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </motion.div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default TextInput;
