import profileImage from "@/assets/caricatura-max-2.png";

const About = () => {
  return (
    <section id="about" className="py-20 bg-section-bg">
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-4xl font-bold mb-6">About Me</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                My experience lies in Data Engineering, I have design and optimize scalable data solutions 
                to facilitate strategic decision-making. I specialize in developing data models, automating 
                complex processes, and ensuring high data quality using industry best practices.
              </p>
              <p>
                I'm working with pipeline development, with SQL and Python as my primary tools 
                for data transformation and orchestration. My technical skills are supported by a degree in Computer Science. 
                I emphasize continuous learning in cloud infrastructure and data architecture, 
                I used to work in the management side but from a couple of years know I'm fully into development.
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
