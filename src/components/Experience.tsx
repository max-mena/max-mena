import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, GraduationCap } from "lucide-react";

const experiences = [
  {
    type: "work",
    title: "Senior Developer",
    organization: "Tech Company",
    period: "2022 - Present",
    description: "Leading development of scalable applications and mentoring junior developers.",
  },
  {
    type: "work",
    title: "Full Stack Developer",
    organization: "Startup Inc",
    period: "2020 - 2022",
    description: "Built features end-to-end, from database design to user interface implementation.",
  },
  {
    type: "education",
    title: "Bachelor of Computer Science",
    organization: "University Name",
    period: "2016 - 2020",
    description: "Focused on software engineering, algorithms, and modern web development.",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-section-bg">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Experience & Education</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My professional journey and academic background
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index} className="border-l-4 border-l-primary">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    {exp.type === "work" ? (
                      <Briefcase className="h-5 w-5 text-primary" />
                    ) : (
                      <GraduationCap className="h-5 w-5 text-primary" />
                    )}
                  </div>
                  <div className="flex-1">
                    <CardTitle>{exp.title}</CardTitle>
                    <CardDescription className="mt-1">
                      {exp.organization} • {exp.period}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{exp.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
