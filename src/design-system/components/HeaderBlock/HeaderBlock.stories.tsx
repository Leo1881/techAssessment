import type { Meta, StoryObj } from "@storybook/react-vite";
import { HeaderBlock } from "./HeaderBlock";

const meta = {
  title: "Design System/HeaderBlock",
  component: HeaderBlock,
  parameters: {
    layout: "padded",
  },
} satisfies Meta<typeof HeaderBlock>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Welcome to our newsletter",
  },
};

export const WithLogo: Story = {
  args: {
    title: "Company Newsletter",
    logoUrl: "https://placehold.co/80x40",
  },
};
