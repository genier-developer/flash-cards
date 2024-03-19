import type { Meta, StoryObj } from '@storybook/react'

import { RadioGroup } from '@radix-ui/react-radio-group'

const meta = {
  component: RadioGroup,
} satisfies Meta<typeof RadioGroup>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
