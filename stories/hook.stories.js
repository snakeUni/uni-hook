import  React from "react";
import { storiesOf } from "@storybook/react";

import CounterDemo from '../example/useCounter'

storiesOf('Hook', module)
.add('useCounter', () => {
  return <CounterDemo />
})