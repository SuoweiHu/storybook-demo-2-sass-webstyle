import type { Meta, StoryObj } from '@storybook/react-vite';

/**
 * A minimal story component so that Chromatic has at least one story to snapshot.
 * This renders the ANU WebStyle introduction page.
 */
const LoremIpsum = () => (
  <div className="container">
    This page is added in order to have at least one story for the ANU WebStyle package. <br/>
    Such that it fullfill the minium requirement for Chromatic to run and take snapshots of the ANU WebStyle package.
  </div>
);

const meta: Meta<typeof LoremIpsum> = {
  title: 'WebStyle/Other/Lorem-Ipsum-Story',
  component: LoremIpsum,
};

export default meta;
type Story = StoryObj<typeof LoremIpsum>;

export const Default: Story = {};
