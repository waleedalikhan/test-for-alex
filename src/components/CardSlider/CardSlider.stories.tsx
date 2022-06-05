import { ComponentStory, ComponentMeta } from "@storybook/react";
import CardSlider from "./CardSlider";

export default {
  title: "Example/CardSlider",
  component: CardSlider,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof CardSlider>;

const Template: ComponentStory<typeof CardSlider> = (args) => (
  <CardSlider {...args} />
);

export const Slider = Template.bind({});
