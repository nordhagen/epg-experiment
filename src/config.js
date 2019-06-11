// The mock data has EPG entries for all 24 hours of 2018-10-26.
// Starting the virtual clock at 18:00 in the evening works well.
export const STARTING_TIME_OF_DAY = '2018-10-26T18:00:00+02:00'

// How often (in ms) to update the global clock.
export const CLOCK_TICK_FREQUENCY = 1000

// How fast time flies in relation to realtime.
// Elapsed clock time will multiply by this value as
// often as CLOCK_TICK_FREQUENCY
export const TIME_MULTIPLIER = 1

// Set to true to display the current clock time in the interface.
export const SHOW_CLOCK = false