import  React from "react";
import { storiesOf } from "@storybook/react";
import { withDocs} from 'storybook-readme'

import CounterDemo from '../example/useCounter'
import CounterReadme from '../example/useCounter/readme.md'

storiesOf('Hook', module)
.add('useCounter', withDocs(CounterReadme, () => {
  return <CounterDemo />
}))
