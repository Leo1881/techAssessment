import type { Meta, StoryObj } from "@storybook/react-vite";
import { ButtonBlock } from "./ButtonBlock";

const meta = {
  title: "Design System/ButtonBlock",
  component: ButtonBlock,
  parameters: {
    layout: "padded",
  },
} satisfies Meta<typeof ButtonBlock>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: "Shop Now",
    url: "https://example.com",
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    label: "Learn More",
    url: "https://example.com",
    variant: "secondary",
  },
};
