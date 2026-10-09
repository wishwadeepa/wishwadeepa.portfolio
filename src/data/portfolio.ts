
export type Skill = {
    number: string
    title: string
    description: string
    tags: string[]
}

export type Project = {
    number: string
    title: string
    category: string
    description: string
    status: string
}

export type NavigationItem = {
    label: string
    href: string
}

export const navigationItems: NavigationItem[] = [
    { label: 'ABOUT', href: '#about' },
    { label: 'CAPABILITIES', href: '#skills' },
    { label: 'PROJECTS', href: '#projects' },
    { label: 'AWARDS', href: '#awards' },
    { label: 'CONTACT', href: '#contact' },
]

export const skills: Skill[] = [
    {
        number: '01',
        title: 'Full-stack development',
        description:
            'Building web experiences from interface design to server-side logic and data.',
        tags: ['React', 'TypeScript', 'APIs', 'Databases'],
    },
    {
        number: '02',
        title: 'Mobile development',
        description:
            'Developing Android applications with a focus on usability, performance, and reliability.',
        tags: ['Kotlin', 'Android', 'UI architecture'],
    },
    {
        number: '03',
        title: 'UI / UX design',
        description:
            'Turning ideas into thoughtful interfaces through visual systems, prototyping, and iteration.',
        tags: ['Figma', 'Prototyping', 'Design systems'],
    },
]

export const projects: Project[] = [
    {
        number: '01',
        title: 'Numa notes',
        category: 'MOBILE APPLICATION',
        description:
            'A notes app concept exploring contextual connections, thoughtful interaction, and a calmer way to organise knowledge.',
        status: 'IN DEVELOPMENT',
    },
    {
        number: '02',
        title: 'Eco-Sense',
        category: 'ENVIRONMENTAL TECHNOLOGY',
        description:
            'A concept for community-powered environmental monitoring using smartphone sensors and location-aware alerts.',
        status: 'CONCEPT',
    },
    {
        number: '03',
        title: 'More to come',
        category: 'SELECTED WORK',
        description:
            'Reserved for another project demonstrating practical technical skills.',
        status: 'PLACEHOLDER',
    },
]
