import panteaImg from '../assets/Pantea.png'


function About() {
    const categories = [
        {
            title: "Languages",
            items: ["Python", "JavaScript", "Java", "HTML", "C", "C++"]
        },
        {
            title: 'Web & Frameworks',
            items: ['React', 'Node.js', 'Flask', 'CSS', 'Tailwind CSS'],
        },
        {
            title: 'Machine Learning',
            items: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'Pandas'],
        },
        {
            title: 'Tools & Platforms',
            items: ['Git', 'GitHub', 'Docker', 'AWS'],
        },

    ]

    const projects = [
        {
            title: "BookFinder",
            description: "Engineered a two pipeline system that uses Google books API and gemini to categorize a book into barnes & nobles categoreis. engineered a an end to end pipeline that takes in a user query and a book shelf image, uses SAM for segmentation, OCR and match to find the book and displayes to the user. Used React for frontendt, python for backend and Node.js for server side. implemented a caching system to store the results of the API calls and reduce the number of API calls made and improved the performance of the system by x percent.",
            tech: ["Python", "Javascript", "Flask", "Computer Vision", "React", "Node.js"],
            link: "#"
        },
        {
            title: "Math Reasoning Fine-tuning LLM ",
            description: "Description of Project 2",
            tech: ["Flask", "Python"],
            link: "#"
        },
        {
            title: "UCSD Market Place",
            description: "Build a campus-only site where only verified students and staff can list, browse, and trade second-hand items and services. Using plain HTML, CSS, and vanilla JavaScript, split the UI into reusable Web Components, wired up fast unit tests in Vitest alongside ESLint to keep every change clean and bug-free. The web app is a lightweight, modular codebase that loads quickly, scales smoothly, and stays easy to extend as new features roll out.",
            tech: ["HTML", "CSS", "JavaScript", "Git", "Vite"],
            link: "https://github.com/Panteaforoutan/cse110-sp25-group15"
        },
        {
            title: "Dynamic Memory Allocation Library",
            description: "Engineered a custom memory structure to manage contiguous byte blocks within and initializes heap. Extended allocation beyond heap capacity by swapping data dynamically between heap and a binary file. Remapped allocation pointers post-swap to new heap blocks to maintain correct memory access. Encoded swap status in the least significant bit of 8-byte aligned memory addresses to enable fast checks.",
            tech: ["C", "Operating Systems", "Memory Management"],
            link: "#"
        },
        {
            title: "Data Structure Visualizer",
            description: "A tool to visualize data structures and algorithms",
            tech: ["Svelte", "Tailwind CSS", "Vite"],
            link: "#"
        }
    ]

    const experience = [
        {
            title: "Grader / Assistant",
            description: "Assisted in grading assignments and providing feedback to students in a computer science course.",
            Company: "UC San Diego",
            date: "2022 - 2023"
        },
        {
            title: "Tutor",
            description: "Provided one-on-one tutoring to students in computer science courses.",
            Company: "UC San Diego",
            date: "2022 - 2023"
        },
        {
            title: "Undergraduate Research Participant - RAISE Project",
            description: "Conducted research on the impact of AI on education, focusing on personalized learning and student engagement.",
            Company: "UC San Diego",
            date: "2022 - 2023"
        },


    ]

    return (
        <div id="about" className="box-content pt-17 flex flex-row gap-12 items-start justify-center">
            <div className="basis-1/3 flex flex-col items-center">
                <img src={panteaImg} alt="Pantea Foroutan" className="rounded-full  w-60 h-60 object-cover" />
                <p className='m-0 mb-2 text-[22px] font-medium leading-[118%] tracking-[-0.24px] text-(--text-h) max-lg:text-[20px] [font-family:var(--heading)] pt-3'>Pantea Foroutan </p>
                <p>B.S. Computer Science </p>
                <p>UC San Diego </p>
                <div className="flex gap-3 pt-3">
                    <a href="mailto:pforoutan@ucsd.edu" aria-label="Email">
                        <svg className="w-7 h-7 fill-(--text-h) hover:fill-(--accent)" viewBox="0 0 24 24">
                            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
                        </svg>
                    </a>

                    <a href="https://www.linkedin.com/in/pantea-foroutan/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <svg className="w-7 h-7 fill-(--text-h) hover:fill-(--accent)" viewBox="0 0 24 24">
                            <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.11 20.45H3.56V9h3.55z" />
                        </svg>
                    </a>
                    <a href="https://github.com/PanteaForoutan" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <svg className="w-7 h-7 fill-(--text-h) hover:fill-(--accent)">
                            <use href="/icons.svg#github-icon" />
                        </svg>
                    </a>
                </div>
            </div>
            <div className="basis-2/3 flex flex-col items-start justify-center">
                <p className="h1 text-left">Hi, I'm Pantea (pun-te-uh).</p>
                <p className='pt-3 text-left text-base leading-7 max-w-2xl text-(--text-h) max-lg:text-[16px] [font-family:var(--sans)]'>
                    I'm a senior CS student at UC San Diego building machine learning system and full-stack applications - from fine tuning LLM models and computer vision pipelines to frontedn and backend that ship them. Currently looking for full time SWE / Ml roles.
                </p>

                <div id="skills" className="box-content w-full pt-5 mt-8 border-t border-(--border)">
                    <p className="m-0 mb-2 text-xl font-medium leading-[118%] tracking-[-0.24px] text-(--text-h) [font-family:var(--heading)] text-left">Skills</p>
                    <div className="grid grid-cols-2 gap-x-8 gap-y-4 pt-2 max-lg:grid-cols-1">
                        {categories.map((category) => (
                            <div key={category.title}>
                                <p className="text-left text-sm font-medium text-(--text-h) pb-2">{category.title}</p>
                                <p className="text-left text-sm font-normal text-(--text) leading-7">{category.items.join(', ')}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div id="projects" className="box-content w-full pt-5 pb-5 mt-8 border-t border-(--border)">
                    <p className="m-0 mb-2 text-xl font-medium leading-[118%] tracking-[-0.24px] text-(--text-h) [font-family:var(--heading)] text-left">Projects</p>
                    <div className="grid gap-y-6 pt-2">
                        {projects.map((project) => (
                            <div key={project.title} className="border-l-2 border-(--accent) pl-4">
                                <div className="flex items-baseline justify-between flex-wrap gap-x-2">
                                    <p className="text-left text-sm font-semibold text-(--text-h)">{project.title}</p>
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-left text-sm font-normal text-(--text) whitespace-nowrap hover:text-(--accent)">
                                        View Project
                                    </a>
                                </div>
                                <div className="flex flex-wrap gap-2 pt-2">
                                    {project.tech.map((tech) => (
                                        <span key={tech} className="rounded-full bg-(--button_bg) px-2.5 py-0.5 text-xs font-medium text-(--button_text)">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <p className="text-left text-sm font-normal text-(--text) leading-7 pt-2">{project.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div id="experience" className="box-content w-full pt-5 mt-8 border-t border-(--border)">
                    <p className="m-0 mb-2 text-xl font-medium leading-[118%] tracking-[-0.24px] text-(--text-h) [font-family:var(--heading)] text-left">Experience</p>
                    <div className="grid gap-y-6 pt-2">
                        {experience.map((experience) => (
                            <div key={experience.title} className="border-l-2 border-(--accent) pl-4">
                                <div className="flex items-baseline justify-between flex-wrap gap-x-2">
                                    <p className="text-left text-sm text-(--text-h)">
                                        <span className="font-semibold">{experience.title}</span>
                                        <span className="font-normal text-(--text)"> {experience.Company}</span>
                                    </p>
                                    <p className="text-left text-sm font-normal text-(--text) whitespace-nowrap ">{experience.date}</p>
                                </div>
                                <p className="text-left text-sm font-normal text-(--text) leading-7 pt-2">{experience.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About