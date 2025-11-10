import profileImage from "@/assets/profile-placeholder.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 bg-section-bg">
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-4xl font-bold mb-6">About Me</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Welcome to my corner of the internet! I'm a passionate developer who loves to build, learn, 
                and share knowledge with the community.
              </p>
              <p>
                Through my career, I've had the opportunity to work on fascinating projects, solve complex 
                problems, and continuously expand my skill set. This website is where I document my journey, 
                share insights from my professional experiences, and explore topics that fascinate me.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing to open source, 
                or writing about the lessons I've learned along the way.
              </p>
            </div>
          </div>
          
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur-2xl opacity-20"></div>
              <img 
                src={profileImage} 
                alt="Profile" 
                className="relative rounded-full w-64 h-64 md:w-80 md:h-80 object-cover border-4 border-background shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
