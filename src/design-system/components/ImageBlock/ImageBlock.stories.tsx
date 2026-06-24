import type { Meta, StoryObj } from "@storybook/react-vite";
import { ImageBlock } from "./ImageBlock";

const meta = {
  title: "Design System/ImageBlock",
  component: ImageBlock,
  parameters: {
    layout: "padded",
  },
} satisfies Meta<typeof ImageBlock>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    src: "https://placehold.co/600x200",
    alt: "Email banner image",
  },
};

export const HalfWidth: Story = {
  args: {
    src: "https://placehold.co/300x150",
    alt: "Half width image",
    width: "50%",
  },
};
