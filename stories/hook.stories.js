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

import FocusDemo from '../example/useFocus'
import FocusReadme from '../example/useFocus/readme.md'

import ScreenDemo from '../example/useInScreen'
import ScreenReadme from '../example/useInScreen/readme.md'

import IntervalDemo from '../example/useInterval'
import IntervalReadme from '../example/useInterval/readme.md'

import KeyPressDemo from '../example/useKeyPress'
import KeyPressReadme from '../example/useKeyPress/readme.md'

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
.add('useFocus', withDocs(FocusReadme, () => {
  return <FocusDemo />
}))
.add('useInScreen', withDocs(ScreenReadme, () => {
  return <ScreenDemo />
}))
.add('useInterval', withDocs(IntervalReadme, () => {
  return <IntervalDemo />
}))
.add('useKeyPress', withDocs(KeyPressReadme, () => {
  return <KeyPressDemo />
}))