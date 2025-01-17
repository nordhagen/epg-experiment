import React from 'react'
import { STARTING_TIME_OF_DAY } from '../../config'
import EPGScheduleItem from '../EPGScheduleItem'
import renderer from 'react-test-renderer'

const data = {
  title: 'Vikings',
  id: 'dummy_program_id',
  start: '2018-10-26T12:50:00+02:00',
  end: '2018-10-26T13:30:00+02:00'
}

test('It renders past item with no progress bar', () => {
  const pastItem = renderer.create(
    <EPGScheduleItem
      key={data.id}
      time={STARTING_TIME_OF_DAY}
      selectDelegate={() => {}}
      {...data}
    />
  )

  expect(pastItem.toJSON()).toMatchSnapshot()
})

test('It renders live item with progress bar', () => {
  const liveItem = renderer.create(
    <EPGScheduleItem
      key={data.id}
      time={'2018-10-26T13:00:00+02:00'}
      selectDelegate={() => {}}
      {...data}
    />
  )

  expect(liveItem.toJSON()).toMatchSnapshot()
})
