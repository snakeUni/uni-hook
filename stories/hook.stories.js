import  React from "react";
import { storiesOf } from "@storybook/react";
import { withDocs} from 'storybook-readme'

import CounterDemo from '../example/useCounter'
import CounterReadme from '../example/useCounter/readme.md'

import ActiveDemo from '../example/useActive'
import ActiveReadme from '../example/useActive/readme.md'

import BottomVisibleDemo from '../example/useBottomVisible'
import BottomVisibleReadme from '../example/useBottomVisible/readme.md'

import DarkModeDemo from '../example/useDarkMode'
import DarkModeReadme from '../example/useDarkMode/readme.md'

import DelayDemo from '../example/useDelay'
import DelayReadme from '../example/useDelay/readme.md'

storiesOf('Hook', module)
.add('useCounter', withDocs(CounterReadme, () => {
  return <CounterDemo />
}))
.add('useActive', withDocs(ActiveReadme, () => {
  return <ActiveDemo />
}))
.add('useBottomVisible', withDocs(BottomVisibleReadme, () => {
  return <BottomVisibleDemo />
}))
.add('useDarkMode', withDocs(DarkModeReadme, () => {
  return <DarkModeDemo />
}))
.add('useDelay', withDocs(DelayReadme, () => {
  return <DelayDemo />
}))