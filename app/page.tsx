import Link from 'next/link'
import Image from 'next/image'
import Script from 'next/script'
import { Globe, Github, Youtube, Music, Newspaper, Podcast, Twitter, Linkedin, Apple } from 'lucide-react'

const projects = [
  {
    title: "DePIN Pulse",
    description: "An oppurtunities aggregator for DePIN projects.",
    links: [
      { url: "https://depinpulse.app/", icon: Globe, label: "Website" },
      { url: "https://x.com/depinpulse/", icon: Twitter, label: "Twitter" },
    ]
  },
  {
    title: "Unleashing DePIN",
    description: "Our DePIN industry podcast highlighting notable founders and teams building in the space.",
    links: [
      { url: "https://unleashingdepin.com/", icon: Globe, label: "Website" },
      { url: "https://x.com/depinunleashed/", icon: Twitter, label: "Twitter" },
      { url: "https://www.linkedin.com/company/unleashing-depin/", icon: Linkedin, label: "LinkedIn" },
      { url: "https://www.youtube.com/@unleashingdepin/", icon: Youtube, label: "YouTube" },
      { url: "https://podcasters.spotify.com/pod/show/unleashing-depin/", icon: Music, label: "Spotify" },
      { url: "https://podcasts.apple.com/us/podcast/unleashing-depin/id1643813996/", icon: Podcast, label: "Apple Podcasts" },
    ]
  },
  {
    title: "Eclipse XRAY",
    description: "An open source explorer for the Eclipse blockchain.",
    links: [
      { url: "https://eclipsexray.id/", icon: Globe, label: "Website" },
      { url: "https://github.com/meta-light/eclipse-xray", icon: Github, label: "GitHub" }
    ]
  },
  {
    title: "Research",
    description: "Insignts and deep-dives into the web3 ecosystem.",
    links: [
      { url: "https://parameterresearch.substack.com/", icon: Newspaper, label: "Substack" }
    ]
  }
]

const team = [
  {
    name: "Tyler Boscolo",
    role: "Head of Product - 3NUM",
    avatar: "/tyler.jpg",
    links: [
      { url: "https://x.com/tylerboscolo/", icon: Twitter, label: "Twitter" },
      { url: "https://www.linkedin.com/in/tylerboscolo/", icon: Linkedin, label: "LinkedIn" }
    ]
  },
  {
    name: "Nick Carpinito",
    role: "Head of Ecosystem - Mycelium Networks",
    avatar: "/nick.png",
    links: [
      { url: "https://x.com/0xMetaLight/", icon: Twitter, label: "Twitter" },
      { url: "https://www.linkedin.com/in/nick-carpinito/", icon: Linkedin, label: "LinkedIn" }
    ]
  }
]

export default function ParameterResearch() {
  return (
    <div className="min-h-screen bg-black text-gray-300 flex flex-col">
      <header className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <Image src="/parameter-full.svg" alt="Parameter Research" width={300} height={300} />
        </div>
      </header>
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8">
        <section className="mb-16">
          <p className="text-xl mb-4 text-center font-bold">Parameter Research is a Web3 research and development collective focused on decentralized physical infrastructure networks (DePIN).</p>
          <p className="text-xl mb-4 text-center">We build tools, create content, and conduct deep-dive analysis to advance the adoption and understanding of blockchain technology in real-world applications.</p>
        </section>
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-8 text-white">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[80%] mx-auto">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-900 p-6 rounded-lg transition-transform hover:scale-105 flex flex-col justify-between h-[200px] w-full">
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
                  <p className="mb-2">{project.description}</p>
                </div>
                <div className="flex gap-4">
                  {project.links.map((link, i) => (
                    <Link key={i} href={link.url} className="text-gray-400 hover:text-gray-300 transition-colors" target="_blank" rel="noopener noreferrer">
                      <link.icon size={24} aria-label={link.label} />
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-8 text-white">Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[80%] mx-auto">
            {team.map((member, index) => (
              <div key={index} className="bg-gray-900 p-6 rounded-lg flex items-center space-x-4">
                <Image src={member.avatar} alt={member.name} width={80} height={80} className="rounded-full"/>
                <div>
                  <h3 className="text-xl font-semibold text-white">{member.name}</h3>
                  <p className="text-gray-400">{member.role}</p>
                  <div className="flex gap-4 mt-2">
                    {member.links.map((link, i) => (
                      <Link 
                        key={i}
                        href={link.url} 
                        className="text-gray-400 hover:text-gray-300 transition-colors"
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <link.icon size={20} aria-label={link.label} />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        <div id="substack-feed-embed" className="max-w-[80%] mx-auto mb-16"></div>
        <Script id="substack-feed-widget-config">
          {`
            window.SubstackFeedWidget = {
              substackUrl: "parameterresearch.substack.com",
              posts: 12,
              layout: "right",
              hidden: ["reactions", "comments"],
              colors: {
                primary: "#FFFFFF",
                secondary: "#808080",
                background: "#000000",
              }
            };
          `}
        </Script>
        <Script src="https://substackapi.com/embeds/feed.js" strategy="lazyOnload"/>
      </main>
      <div className="flex justify-center mb-16 max-w-[80%] mx-auto rounded-lg">
        <iframe src="https://parameterresearch.substack.com/embed" width="970" height="300" className="rounded-lg" frameBorder="0" scrolling="no"></iframe>
      </div>
      <footer className="pb-6 px-4 sm:px-6 lg:px-8 text-center text-gray-500">
        <p>&copy; 2024 Parameter Research. All rights reserved.</p>
      </footer>
    </div>
  )
}