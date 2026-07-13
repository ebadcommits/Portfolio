const projects = [
  {
    id: 1,
    title: 'Sushi',
    subtitle: 'A Restaurant Website',
    description:
      'A visually appealing landing page for a restaurant. Crafted with modern UI/UX principles. Designed to be responsive across all devices, it highlights menu sections and branding through a sleek layout.',
    link: 'https://ebadcommits.github.io/Sushi-Restaurant/',
  },
  {
    id: 2,
    title: 'Fries n Ice',
    subtitle: 'Food Ordering Website',
    description:
      'A responsive restaurant website with a dynamic food menu, cart system, checkout page, and contact form, built with HTML, CSS, and JavaScript.',
    link: 'https://ebadcommits.github.io/FlockbyEbad/',
  },
  {
    id: 3,
    title: 'We Code',
    subtitle: 'Coding Website',
    description:
      'An interactive website aimed at inspiring developers. It combines motivational design, smooth navigation, and storytelling. Showcasing creativity while keeping the experience clean and user-friendly.',
    link: 'https://ebadcommits.github.io/We-Code./',
  },
  {
    id: 4,
    title: 'Microsoft Calculator',
    subtitle: 'An exact copy of Microsoft Calculator',
    description:
      'A fully functional clone of the Microsoft Calculator built with HTML, CSS, and JavaScript. Features real-time calculations, responsive design, and a clean interface that closely replicates the original app.',
    link: 'https://ebadcommits.github.io/Microsoft-Calculator/',
  },
]

export default function Projects() {
  return (
    <section className="p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4">
        {projects.map((project) => (
          <a
            key={project.id}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow h-full cursor-pointer">
              <h3 className="text-sm font-semibold text-gray-500 mb-2">Project {project.id}</h3>
              <h3 className="text-2xl font-bold text-gray-800 hover:text-gray-600 block mb-1">
                {project.title}
              </h3>
              <h4 className="text-base font-semibold text-gray-600 mb-3">{project.subtitle}</h4>
              <p className="text-gray-700 text-sm leading-relaxed">{project.description}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
