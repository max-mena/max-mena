import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "Was a tech summit worth it?",
    excerpt: "First time I participate in a tech conference and my key takeaways from the experience.",
    date: "2025-11-10",
    readTime: "8 min read",
    category: "Architecture",
  },
  {
    id: 2,
    title: "Lessons from My First Year in Tech",
    excerpt: "Reflections on growth, challenges, and the importance of continuous learning.",
    date: "2025-11-15",
    readTime: "6 min read",
    category: "Career",
  },
  {
    id: 3,
    title: "A career in data, great choice!",
    excerpt: "How a career in data has opened doors to exciting opportunities and growth.",
    date: "2025-11-15",
    readTime: "5 min read",
    category: "Open Source",
  },
];

const Blog = () => {
  return (
    <section id="blog" className="py-20">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Latest Thoughts</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Sharing insights from my professional journey and things that inspire me
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <Card key={post.id} className="hover:shadow-lg transition-shadow cursor-pointer group">
              <CardHeader>
                <Badge className="w-fit mb-2">{post.category}</Badge>
                <CardTitle className="group-hover:text-primary transition-colors">
                  {post.title}
                </CardTitle>
                <CardDescription>{post.excerpt}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
