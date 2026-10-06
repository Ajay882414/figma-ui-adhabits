import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
// import { Linkedin } from "lucide-react";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  linkedin: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Sajib Mia",
    role: "Lead UI/UX Designer",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
    linkedin: "https://linkedin.com/in/sajib-mia",
  },
  {
    name: "Marcus Vance",
    role: "Lead Full-Stack Engineer",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
    linkedin: "https://linkedin.com/in/marcus-vance",
  },
  {
    name: "David Miller",
    role: "Performance Marketing Lead",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
    linkedin: "https://linkedin.com/in/david-miller",
  },
  {
    name: "Elena Rostova",
    role: "Brand Strategist & Creative Director",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
    linkedin: "https://linkedin.com/in/elena-rostova",
  },
  {
    name: "Ajay Sharma",
    role: "Product Designer & Prototyper",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80",
    linkedin: "https://linkedin.com/in/ajay-sharma",
  },
  {
    name: "Sophia Chen",
    role: "AI & Workflow Automation Engineer",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80",
    linkedin: "https://linkedin.com/in/sophia-chen",
  },
  {
    name: "Rohan Verma",
    role: "Motion Graphics & Video Editor",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80",
    linkedin: "https://linkedin.com/in/rohan-verma",
  },
  {
    name: "Sarah Jenkins",
    role: "Social Media & Growth Strategist",
    image:
      "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=800&q=80",
    linkedin: "https://linkedin.com/in/sarah-jenkins",
  },
];

export default function TeamSection() {
  return (
    <section className="border-b border-black/[0.06] bg-white py-20 sm:py-28" id="team">
      <div className="mx-auto max-w-[1240px] px-6 sm:px-8">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
          
          {/* Left Column: Heading Content */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-400">
              Our Team
            </p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#111111] sm:text-4xl lg:text-5xl lg:leading-[1.15]">
              Meet the <br />
              Creative Minds <br />
              Behind the Work
            </h2>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-neutral-500 sm:text-base">
              Hamari team tech architecture, data-driven marketing aur modern interface design ka seamless combination deliver karti hai.
            </p>
          </div>

          {/* Right Column: 2x2 Team Image Grid */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-7">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="group relative h-[380px] w-full overflow-hidden rounded-3xl border border-black/[0.06] bg-neutral-100 shadow-sm transition-all duration-300 hover:shadow-xl"
              >
                {/* Team Member Photo */}
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />

                {/* Glassmorphic Details Bar (Hover Effect) */}
                <div className="absolute inset-x-4 bottom-4 flex items-center justify-between rounded-2xl border border-white/20 bg-black/60 p-4 opacity-0 backdrop-blur-md transition-all duration-300 group-hover:opacity-100">
                  <div>
                    <h3 className="text-base font-bold text-white">
                      {member.name}
                    </h3>
                    <p className="text-xs font-medium text-neutral-300">
                      {member.role}
                    </p>
                  </div>

                  {/* LinkedIn Direct Link Button */}
                  <Link
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 text-white transition-all duration-200 hover:bg-[#0077b5] hover:scale-110 active:scale-95"
                    aria-label={`${member.name} LinkedIn Profile`}
                  >
                    <FaLinkedin className="h-4 w-4 fill-current stroke-none" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}