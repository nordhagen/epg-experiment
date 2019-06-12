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

test('It renders correctly', () => {
  const c = renderer.create(
    <EPGScheduleItem
      key={data.id}
      time={STARTING_TIME_OF_DAY}
      selectDelegate={() => {}}
      {...data}
    />
  )

  let tree = c.toJSON()
  expect(tree).toMatchSnapshot()
})
