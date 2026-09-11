const projects = [
  {
    id: 1,
    title: 'Auth-App',
    subtitle: 'A User Authentication App',
    techStack: ['React.Js', 'Tailwind CSS'],
    description:
      'A user authentication app built with React.js and Tailwind CSS. It features a sleek and responsive design, allowing users to register, log in, and manage their accounts securely. The app emphasizes user experience with smooth transitions and intuitive navigation.',
    link: 'https://ebadcommits.github.io/auth-app/',
  },
  {
    id: 2,
    title: 'Book-Finder',
    subtitle: 'A Book Search Application',
    techStack: ['React.Js', 'Tailwind CSS'],
    description:
      'A modern book search application built with React.js and Tailwind CSS. It allows users to search for books and view details. The app features a clean and intuitive interface with loading bar.',
    link: 'https://ebadcommits.github.io/book-finder/',
  },
  {
    id: 3,
    title: 'Task-Manager',
    subtitle: 'A Task Management Application',
    techStack: ['React.Js', 'Tailwind CSS'],
    description:
      'A task management application built with React.js and Tailwind CSS. It allows users to create, update, and delete tasks. The app features a user-friendly interface with smooth transitions and responsive design, making task management efficient and enjoyable.',
    link: 'https://ebadcommits.github.io/Task-Manager/',
  },
]

export default function AdvProjects() {
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
              <h3 className="text-sm font-semibold text-orange-300 mb-2">{project.techStack.join(', ')}</h3>
              <p className="text-gray-700 text-sm leading-relaxed">{project.description}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
