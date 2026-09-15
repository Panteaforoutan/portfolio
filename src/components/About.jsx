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
            items: ['Git', 'GitHub', 'Docker', 'AWS', 'Google Cloud'],
        },

    ]

    const projects = [
        {
            title: "BookFinder",
            description: [
                "Built a computer-vision pipeline that locates a specific book from a photo of a bookstore shelf: SAM for segmentation, OCR for text extraction, and fuzzy matching to identify and localize the target title.",
                "Built a second pipeline that auto-classifies books into Barnes & Noble-style sections, using the Google Books API for metadata and Gemini for classification.",
                "Designed a Flask REST API backend and a React frontend for the two pipelines, validated end-to-end against real bookstore shelf photos.",
                "Added a caching layer for repeat queries against an already-processed shelf image, cutting response time from ~1–2 minutes to near-instant.",
                "Containerized and deployed the backend (Docker, Gunicorn) to Google Cloud Run; automated frontend deployment to GitHub Pages via GitHub Actions on push."

            ],
            tech: ["React", "Python", "Flask", "Node.js", "Docker", "Gunicorn", "Google Cloud Run", "GitHub Actions"],
            link: "https://panteaforoutan.github.io/bookFinder/"
        },
        {
            title: "Math Reasoning Fine-tuning LLM ",
            description: [
                "Fine-tuned a Qwen3-4B model for math reasoning as the primary technical contributor on a small team project.",
                "Diagnosed and fixed a blocking inference bug, then a second bottleneck (token cap + greedy decoding), raising evaluation accuracy from a 31% baseline to 72% through error analysis and targeted prompt engineering.",
                "Built a reproducible experiment pipeline (YAML-configured) to speed up trial iteration.",
                "Optimized the inference workflow for a 4–5x speedup using vLLM.",
            ],
            tech: ["PyTorch", "LoRA", "vLLM", "Python"],
            link: "https://github.com/Panteaforoutan/151B_SP26_Competition"
        },
        {
            title: "UCSD Market Place",
            description: [
                "Built a campus-only marketplace where verified students and staff can list, browse, and trade second-hand items and services.",
                "Split the UI into reusable vanilla JS Web Components; used Vitest for unit testing and ESLint to keep the codebase clean.",
                "Backend/auth via Supabase; built with Vite for fast local dev and builds.",
                "Result: a lightweight, modular codebase built for fast load times and easy extension.",
            ],
            tech: ["HTML", "CSS", "JavaScript", "Vite", "Supabase", "Vitest"],
            link: "https://github.com/Panteaforoutan/cse110-sp25-group15"
        },
        {
            title: "Dynamic Memory Allocation Library",
            description: [
                "Engineered a custom memory structure to manage contiguous byte blocks within and initializes heap.",
                "Extended allocation beyond heap capacity by swapping data dynamically between heap and a binary file.",
                "Remapped allocation pointers post-swap to new heap blocks to maintain correct memory access.",
                "Encoded swap status in the least significant bit of 8-byte aligned memory addresses to enable fast checks.",
            ],
            tech: ["C", "Systems Programming", "Memory Management"],
            link: "#"
        }
    ]

    const experience = [
        {
            title: "Tutor",
            description: [
                "Provided one-on-one and group tutoring to 100+ students per semester across algebra, single-variable, and multivariable calculus.",
                "Tracked student progress and gave targeted feedback to help students meet their academic goals.",
            ],
            Company: "Orange Coast College - Student Success Center ",
            date: "2023 - 2024"
        },
        {
            title: "Grader / Assistant",
            description: [
                "Supported K-12 students in math and reading, guiding them through problems to build independent problem-solving skills.",
                "Graded student work and gave feedback focused on self-correction and long-term learning.",
            ],
            Company: "Kumon ",
            date: "2024 - 2025"
        },
        {
            title: "Undergraduate Research Participant - Project RAISE",
            description: [
                "Selected for an 8-week research cohort under a faculty mentor, covering foundational ML concepts (clustering, KNN, logistic regression).",
                "Independently built a logistic regression model to classify credit card applicants by default risk, using feature engineering to reach ~70% accuracy.",
                "Presented findings as a poster at the program's closing symposium.",
            ],
            Company: "CSU, Fullerton",
            date: "2023"
        },


    ]

    return (
        <>
            <div id="about" className="min-h-[calc(100vh-75px)] flex items-center box-content px-10 flex-col lg:flex-row gap-8 lg:gap-12 py-10 lg:py-0 justify-center">
                <div className="basis-1/3 flex flex-col items-center">
                    <div className="relative">
                        <div className="pointer-events-none absolute top-1/2 left-1/2 -z-10 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full " />
                        <img src={panteaImg} alt="Pantea Foroutan" className="rounded-full  w-60 h-60 object-cover" />
                    </div>
                    <p className='m-0 mb-2 text-[22px] font-medium leading-[118%] tracking-[-0.24px] text-(--text-h) max-lg:text-[20px] [font-family:var(--heading)] pt-3'>Pantea Foroutan </p>
                    <p className="text-sm text-(--text)">B.S. Computer Science </p>
                    <p className="text-sm text-(--text)">UC San Diego </p>
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
                                <use href={`${import.meta.env.BASE_URL}icons.svg#github-icon`} />
                            </svg>
                        </a>
                    </div>
                </div>
                <div className="basis-2/3 flex flex-col items-center lg:items-start justify-center text-center lg:text-left">
                    <p className="h1 text-center lg:text-left">
                        Hi, I'm Pantea <span className="text-[24px] italic font-normal text-(--text)">(Pon-teh-âh)</span>
                    </p>
                    <p className='pt-3 text-center lg:text-left text-base leading-7 max-w-2xl text-(--text-h) max-lg:text-[16px] [font-family:var(--sans)]'>
                        I'm a senior Computer Science student at UC San Diego building machine learning systems and full-stack applications — from fine-tuning LLMs and building computer vision pipelines to shipping the frontend and backend around them. Currently looking for full-time SWE / ML roles.
                    </p>

                    <div className="flex flex-wrap justify-center lg:justify-start gap-2 pt-4">
                        {["🎓 Graduating Dec 2026", "📍 Irvine, CA"].map((item) => (
                            <span key={item} className="rounded-full bg-(--accent)/10 px-3 py-1 text-xs font-medium text-(--accent)">
                                {item}
                            </span>
                        ))}
                    </div>
                </div>
            </div >

            <div className="box-content px-10">
                <div id="projects" className="box-content w-full pt-5 mt-8 border-t border-(--border)">
                    <p className="h2 text-left">Projects</p>
                    <div className="grid gap-y-6 pt-2">
                        {projects.map((project) => (
                            <div key={project.title} className="relative overflow-hidden pl-4">
                                <div className="pointer-events-none absolute inset-0 -z-10 bg-linear-to-r from-(--accent)/0 via-(--accent)/10 to-(--accent)/0" />
                                <div className="flex items-baseline justify-between flex-wrap gap-x-2">
                                    <p className="text-left text-sm font-semibold text-(--text-h)">{project.title}</p>
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-left text-sm font-normal text-(--text) whitespace-nowrap hover:text-(--accent)">
                                        View Project
                                    </a>
                                </div>
                                <div className="flex flex-wrap gap-2 pt-2">
                                    {project.tech.map((tech) => (
                                        <span key={tech} className="rounded-full bg-(--accent)/10 px-2.5 py-0.5 text-xs font-medium text-(--accent)">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <p className="whitespace-pre-line pt-2 text-left text-sm font-normal text-(--text) leading-5.5">
                                    {project.description.join('\n')}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
                <div id="skills" className="box-content w-full pt-5 mt-8 border-t border-(--border)">
                    <p className="h2 text-left">Skills</p>
                    <div className="grid grid-cols-2 gap-x-8 gap-y-4 pt-2 max-lg:grid-cols-1">
                        {categories.map((category) => (
                            <div key={category.title}>
                                <p className="text-left text-sm font-medium text-(--text-h) pb-2">{category.title}</p>
                                <p className="text-left text-sm font-normal text-(--text) leading-7">{category.items.join(', ')}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div id="experience" className="box-content w-full pt-5 mt-8 border-t border-(--border)">
                    <p className="h2 text-left">Experience</p>
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
                                <p className="whitespace-pre-line text-left text-sm font-normal text-(--text) leading-5.5 pt-2">
                                    {experience.description.join('\n')}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
export default About