export const profile = {
  name: 'Mollyne Awuor',
  fullName: 'Mollyne Awuor',
  title: 'Aspiring Software Developer',
  headline: 'Building digital experiences with code and creativity.',
  bio:
    'I am a passionate and aspiring software developer focused on crafting clean, functional, and user-centered web applications. I enjoy turning ideas into working code and learning new technologies every day.',
  location: 'Siaya, Kenya',
  email: 'mollyneawour@gmail.com',
  emailContact: 'hello@mollyne.design',
  cvLink: 'cv.html',
}

export const socialLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/mollyne', icon: 'linkedin' },
  { label: 'GitHub', href: 'https://github.com/mollyne', icon: 'github' },
  { label: 'Dribbble', href: 'https://dribbble.com/mollyne', icon: 'dribbble' },
]

export const about = {
  eyebrow: 'About Me',
  heading: 'Who I am',
  intro:
    'I am an ambitious ICT student and aspiring software developer currently undertaking industrial attachment at the Siaya Community Digital Hub. I am passionate about building modern web experiences and improving digital access in communities.',
  education: {
    institution: 'Bondo Technical Training Institute',
    qualification: 'Diploma in Information and Communication Technology (ICT)',
    period: '2025 — Present',
    details: 'Developing practical knowledge in computer operations, software systems, troubleshooting, web design, and technology support.',
  },
  industrialAttachment: {
    institution: 'Siaya Community Digital Hub',
    qualification: 'Industrial Attachment',
    period: '2024 — Present',
    details: 'Support digital literacy training, assist with network troubleshooting, and contribute to front-end web development initiatives.',
  },
  interests: [
    'Web development and design',
    'Community digital literacy facilitation',
    'Network configuration and maintenance',
    'Technical troubleshooting and documentation',
    'Interactive interface prototyping',
  ],
  goals:
    'To grow into a skilled software developer who builds practical, accessible digital solutions that solve real-world problems and support community technology growth.',
}

export const skills = [
  { name: 'HTML', level: 85, color: '#ff4500' },
  { name: 'CSS', level: 80, color: '#2965f1' },
  { name: 'JavaScript', level: 75, color: '#f7df1e' },
  { name: 'React', level: 70, color: '#61dafb' },
  { name: 'Python', level: 60, color: '#3776ab' },
  { name: 'C++', level: 55, color: '#00599c' },
  { name: 'Responsive Design', level: 80, color: '#8b5cf6' },
  { name: 'UI Prototyping', level: 70, color: '#ff007f' },
]

export const projects = [
  {
    id: '1',
    title: 'Community Digital Hub Portal',
    image: null,
    description:
      'A web platform supporting digital literacy training and community technology access at the Siaya Community Digital Hub.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    links: { view: 'community-digital-hub-portal.html', source: 'community-digital-hub-portal.html' },
  },
  {
    id: '2',
    title: 'Aster & Co.',
    image: null,
    description:
      'Reimagined a premium storefront for a beauty and lifestyle brand, improving product discovery and purchase experience.',
    technologies: ['React', 'JavaScript', 'CSS'],
    links: { view: 'aster-co.html', source: 'aster-co.html' },
  },
  {
    id: '3',
    title: 'Northstar Finance',
    image: null,
    description:
      'A financial reporting dashboard for teams to track performance, analyse trends, and make faster decisions.',
    technologies: ['React', 'JavaScript'],
    links: { view: 'northstar-finance.html', source: 'northstar-finance.html' },
  },
]

export const contact = {
  eyebrow: 'Get In Touch',
  heading: 'Contact Me',
  intro: "I'd love to hear from you. Whether you have a question or just want to say hello, I'll do my best to respond.",
  email: 'mollyneawour@gmail.com',
  altEmail: 'hello@mollyne.design',
  location: 'Siaya, Kenya',
}

export const spotlight = {
  eyebrow: 'Attachment Spotlight',
  heading: 'Curriculum Vitae and Professional Snapshot',
  intro: 'This section highlights my CV and key professional attachments.',
  items: [
    {
      title: 'Curriculum Vitae',
      meta: 'PDF · 1 page · 248 KB',
      actionLabel: 'Open CV attachment',
      href: 'cv.html',
      color: '#ff007f',
      icon: 'document',
    },
    {
      title: 'Digital Literacy',
      meta: 'Community training & access',
      actionLabel: 'Open page',
      href: 'digital-literacy.html',
      color: '#34d399',
      icon: 'users',
    },
    {
      title: 'Web Prototyping',
      meta: 'UI design & interfaces',
      actionLabel: 'Open page',
      href: 'web-prototyping.html',
      color: '#8b5cf6',
      icon: 'layout',
    },
    {
      title: 'Network Troubleshooting',
      meta: 'Configuration & maintenance',
      actionLabel: 'Open page',
      href: 'network-troubleshooting.html',
      color: '#f59e0b',
      icon: 'network',
    },
  ],
}
