import ResourceCard from "../components/ResourceCard";

function Resources() {
  const resources = [
    {
      title: "React Docs",
      summary: "The official React documentation-clear and beginner-friendly.",
      link: "https://reactjs.org/docs/getting-started.html",
      image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    },
    {
      title: "Ruby on Rails Guides",
      summary: "Rails framework documentation with examples and structure walkthroughs",
      link: "https://guides.rubyonrails.org/",
      image: "https://upload.wikimedia.org/wikipedia/commons/6/62/Ruby_On_Rails_Logo.svg",
    },
    {
      title: "WebGoat by OWASP",
      summary: "An intentionally insecure app used to learn about web app vulnerabilities",
      link: "https://owasp.org/www-project-webgoat/",
      image: "https://owasp.org/assets/images/logo.svg"
    },
    {
      title: "Volere Requirements Template",
      summary: "The Volere requirements specification template for gathering and documenting system needs.",
      link: "https://www.volere.org/template.htm",
      image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    },
  ];

  return (
    <div>
      <h2>Resources</h2>
      {resources.map((resource, idx) => (
        <ResourceCard key={idx} {...resource} />
      ))}
    </div>
  );
}

export default Resources;