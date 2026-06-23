import type { Meta, StoryObj } from "@storybook/react-vite";

const Welcome = () => (
  <div className="container py-5">
    <h1 className="mb-3">Email Template Builder — Design System</h1>
    <p className="text-secondary">
      Welcome to Storybook. Block components (Header, Text, Image, Button) will
      be documented here as they are built.
    </p>
  </div>
);

const meta = {
  title: "Welcome",
  component: Welcome,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Welcome>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
