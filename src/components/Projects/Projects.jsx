import './Projects.css'
import ProjectCard from '../ProjectCard/ProjectCard'
import ProjectImg from './../../assets/icons/project.png'
import { useState } from 'react';
import { useEffect } from 'react';

export default function Projects() {
    const [projects, setProjects] = useState(null)

    async function request() {
        const url = `https://sleepy-bull-frock.cyclic.app/projects`;
        const response = await fetch(url);
        const data = await response.json();
        setProjects(data.reverse());
    }

    useEffect(() => {
        request()
    }, []);

    return (
        <section className="Projects">
            <article className="projetcs-introduction">
                <h1 className="main-title">Projetos Pessoais</h1>
                <img className="icon projects-img" src={ProjectImg} />
                <p className="text-description">Esses são alguns dos projetos que desenvolvi para praticar meus
                    conhecimentos em programação.
                    Fiz questão de deixar os projetos mais simples, de quando iniciei o aprendizado, para enfatizar a
                    <span className="texto-destaque"> evolução</span>.
                </p>
                <p className="text-description"> A principais tecnologias são JavaScript, React, Node, HTML e CSS.
                </p>
            </article>
            <div className="projects-cards">
                {projects && projects.map((project) => {
                    return (
                        <ProjectCard key={project.id} project={project} />
                    )
                })}
            </div>
        </section>
    )
}