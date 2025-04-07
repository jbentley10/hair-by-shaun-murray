/**
 * @file content.tsx
 */
"use client";

// Component that's called from inside page.js
// All it does is look at each content block,
// and assign it the appropriate React component(s)

// Import components
import { Hero } from "@/components/hero";
import { DividerText } from "@/components/divider-text";
import { CallToAction } from "@/components/call-to-action";
import { Heading } from "@/components/heading";
import { ImageTextBlock } from "@/components/image-text-block";
import { ImageCards, ImageCardType } from "@/components/image-cards";
import LogoRow, { LogoType } from "@/components/logo-row";

const blockByType = (block: any) => {
  // Get the content type from the block content properties
  const contentType = block.__typename;

  switch (contentType) {
    default: break;
  }
};

interface ContentProps {
  englishBlocks: [];
  spanishBlocks: [];
}

// Component recieves a single array of block objects
export default function Content({
  englishBlocks,
  spanishBlocks,
}: ContentProps) {
  return (
    englishBlocks &&
    englishBlocks.map((block: any) => {
      return blockByType(block);
    })
  );
}
