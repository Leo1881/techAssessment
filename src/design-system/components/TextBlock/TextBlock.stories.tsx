import type { Meta, StoryObj } from "@storybook/react-vite";
import { TextBlock } from "./TextBlock";

const meta = {
  title: "Design System/TextBlock",
  component: TextBlock,
  parameters: {
    layout: "padded",
  },
} satisfies Meta<typeof TextBlock>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    content: "This is a sample paragraph for your email template.",
  },
};

export const CenterAligned: Story = {
  args: {
    content: "This text is centered in the email.",
    alignment: "center",
  },
};
