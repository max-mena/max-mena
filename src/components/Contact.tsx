import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your visions.
          </p>
        </div>

        <Card className="max-w-2xl mx-auto">
          <CardContent className="pt-6">
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-4">Connect with me</h3>
                <p className="text-muted-foreground mb-6">
                  Feel free to reach out through any of these platforms
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Button variant="outline" className="h-auto py-4" asChild>
                  <a
                    href="mailto:maxmena@live.com"
                    className="flex flex-col items-center gap-2"
                  >
                    <Mail className="h-6 w-6" />
                    <span>Email</span>
                  </a>
                </Button>
                <Button variant="outline" className="h-auto py-4" asChild>
                  <a
                    href="https://github.com/max-mena"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center gap-2"
                  >
                    <Github className="h-6 w-6" />
                    <span>GitHub</span>
                  </a>
                </Button>
                <Button variant="outline" className="h-auto py-4" asChild>
                  <a
                    href="https://linkedin.com/in/max-mena-arguedas"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center gap-2"
                  >
                    <Linkedin className="h-6 w-6" />
                    <span>LinkedIn</span>
                  </a>
                </Button>
                <Button variant="outline" className="h-auto py-4" asChild>
                  <a
                    href="https://x.com/MaxSlonso"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center gap-2"
                  >
                    {/* <Twitter className="h-6 w-6" /> */}
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      aria-label="X (Twitter)"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.9 2H22L14.6 11.4L22.4 22H16.7L11.6 15.3L5.8 22H2.7L10.6 12.2L3.2 2H9.1L13.8 8.8L18.9 2Z"
                        fill="currentColor"
                      />
                    </svg>

                    <span>X</span>
                  </a>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
