import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote/rsc';
import { JSX } from 'react';
import { highlight } from 'sugar-high';
import Counter from './Counter';
import Image from 'next/image';

function Code({
  children,
  ...props
}: { children: string } & React.ComponentProps<'code'>) {
  const codeHTML = highlight(children);
  return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />;
}

const components = {
  code: Code,
  Counter,
  img: (props: React.ImgHTMLAttributes<HTMLImageElement>) => {
    const { src, alt, width, height, ...rest } = props;

    if (!src) return null;

    return (
      <Image
        src={src}
        alt={alt || 'Image'}
        width={Number(width) || 600}
        height={Number(height) || 400}
        style={{ width: '100%', height: 'auto' }}
        {...rest}
      />
    );
  },
};

export default function MDXContent(
  props: JSX.IntrinsicAttributes & MDXRemoteProps
) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
    />
  );
}
