import Experience from '@/components/Experience';
import LinkWithIcon from '@/components/LinkWithIcon';
import Posts from '@/components/Posts';
import Projects from '@/components/Projects';
import Socials from '@/components/Socials';
import { Button } from '@/components/ui/Button';
import { getPosts } from '@/lib/posts';
import {
  ArrowDownRight,
  ArrowRightIcon,
  BadgeCheck,
  FileDown,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import path from 'path';

const blogDirectory = path.join(process.cwd(), 'content');
const ABDULLAH_BIRTH = 1994;
const LIMIT = 2;

export default async function Home() {
  const posts = await getPosts(blogDirectory, LIMIT);

  return (
    <article className="mt-8 flex flex-col gap-16 pb-16">
      <section className="flex flex-col items-start gap-8 md:flex-row-reverse md:items-center md:justify-between">
        <Image
          className="rounded-lg"
          src="/abdullah.jpg"
          alt="Photo of Abdullah"
          width={175}
          height={175}
          priority
        />
        <div className="flex flex-col">
          <h1 className="title text-4xl flex items-center gap-3">
            Hello, I’m Abdullah!{' '}
            <BadgeCheck size={32} color="hsl(204 88% 53%)" />
          </h1>

          <p className="mt-4 font-light">
            {new Date().getFullYear() - ABDULLAH_BIRTH}
            -year-old <s>software</s> Fullstack Developer based in Germany 🇩🇪
          </p>
          <p className="mt-2 font-light">
            I build secure and scalable web applications, explore open-source
            projects and occasionally debug my friends code by staring at it.
          </p>
          <div className="mt-4 flex items-end gap-1">
            <ArrowDownRight className="size-5 animate-bounce" />
            <p className="font-semibold">
              For more information about me, please check my resume.
            </p>
          </div>
          <section className="mt-8 flex items-center gap-8">
            <Link href="/resume.pdf" target="_blank">
              <Button variant="outline">
                <span className="font-semibold">Resume</span>
                <FileDown className="ml-2 size-5" />
              </Button>
            </Link>
            <Socials />
          </section>
        </div>
      </section>

      <Experience />

      <section className="flex flex-col gap-8">
        <div className="flex justify-between">
          <h2 className="title text-2xl sm:text-3xl">featured projects</h2>
          <LinkWithIcon
            href="/projects"
            position="right"
            icon={<ArrowRightIcon className="size-5" />}
            text="view more"
          />
        </div>
        <Projects limit={LIMIT} />
      </section>

      <section className="flex flex-col gap-8">
        <div className="flex justify-between">
          <h2 className="title text-3xl">recent posts</h2>
          <LinkWithIcon
            href="/blog"
            position="right"
            icon={<ArrowRightIcon className="size-5" />}
            text="view more"
          />
        </div>
        <Posts posts={posts} />
      </section>
    </article>
  );
}
