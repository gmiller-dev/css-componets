import React, { useEffect } from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { Checkbox, CheckboxProps } from './Checkbox';
import { networkInterfaces } from 'os';

export default {
  title: 'General/Checkbox',
  component: Checkbox,
} as Meta;

const Template: Story<CheckboxProps> = (args) => <Checkbox {...args} />;

export const Unchecked = Template.bind({});
Unchecked.args = {
  label: "Checkbox",
  checked: false,
};

export const Checked = Template.bind({});
Checked.args = {
  label: "Checkbox",
  checked: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: "Checkbox",
  checked: false,
  disabled: true,
};

function FocusContainer(props: CheckboxProps) {
   const ref = React.useRef<HTMLInputElement>(null)
   React.useLayoutEffect(() => {
    if(ref && ref.current) {
      console.log("FOCUS")
      ref.current.focus()
    }
   })
   return <Checkbox ref={ref} {...props}/>
}

const FocusTemplate: Story<CheckboxProps> = (args) => {
  return <FocusContainer {...args}/>
};

export const Focused = FocusTemplate.bind({})
Focused.args = {
  label:"Focused Checkebox"
}

