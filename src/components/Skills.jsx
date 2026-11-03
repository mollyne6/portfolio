import { useEffect, useState } from 'react'
import { skills } from '../data/portfolioData'

const SkillItem = ({ skill, index }) => {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => setWidth(skill.level), 100 * index)
    return () => clearTimeout(timer)
  }, [skill.level, index])

  return (
    <article className={`skill-card reveal reveal-delay-${index % 4 + 1}`}>
      <div className="skill-header">
        <span className="skill-name">{skill.name}</span>
        <span className="skill-level">{width}%</span>
      </div>
      <div className="skill-progress-track">
        <div
          className="skill-progress-bar"
          style={{ width: `${width}%`, backgroundColor: skill.color }}
        />
      </div>
    </article>
  )
}

const Skills = () => {
  return (
    <section id="skills" className="skills-section reveal reveal-delay-1" aria-label="Skills section">
      <div className="skills-container">
        <div className="section-header reveal reveal-delay-2">
          <p className="section-eyebrow">Skills</p>
          <h2 className="section-heading">Technical Skills</h2>
        </div>

        <div className="skills-grid reveal reveal-delay-3">
          {skills.map((skill, index) => (
            <SkillItem key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
