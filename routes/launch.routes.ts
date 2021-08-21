import express from 'express'
import { DateTime } from 'luxon'
import axios from 'axios'

const launchRoutes = express.Router()

// eslint-disable-next-line @typescript-eslint/no-misused-promises
launchRoutes.get('/upcoming-launches', async (req, res) => {
  try {
    const url = 'https://lldev.thespacedevs.com/2.2.0/launch/upcoming/?include_suborbital=true&lsp__name=spacex'
    const response = await axios.get(url)
    // eslint-disable-next-line array-callback-return
    const result = response.data.results.map((launch: any) => {
      const today = DateTime.now().setLocale('pt').toLocaleString(DateTime.DATE_SHORT)
      const dataLaunch = DateTime.fromISO(launch.window_start)
      const dataFilter = DateTime.now().plus({ months: 6 })
      const limit = dataFilter.diffNow('months')
      console.log('DIFERENCAAAA ', limit.months)
      console.log('HOJE ###', today)
      console.log('DATA LANCAMENTO ###', dataLaunch)
      console.log('DATA LIMITE ###', dataFilter)
      if (limit.months <= 6) {
        const dataLaunch = DateTime.fromISO(launch.window_start)
        const dataFilter = DateTime.now().plus({ months: 6 })
        const limit = dataFilter.diffNow('months')
        console.log('DIFERENCAAAA ', limit.months)
        console.log('HOJE ###', today)
        console.log('DATA LANCAMENTO ###', dataLaunch)
        console.log('DATA LIMITE ###', dataFilter)
        if (limit.months <= 6) {
          if (launch.mission !== null) {
            return {
              name: launch.mission.name,
              description: launch.mission.description,
              from: launch.pad.location.name,
              to: launch.mission.orbit.name,
              window_start: dataLaunch
              // window_start: DateTime.fromISO(launch.window_start).setLocale('pt').toLocaleString(DateTime.DATE_SHORT)
            }
          } else {
            return {
              name: 'NOT AVAILABLE',
              description: 'NOT AVAILABLE',
              from: launch.pad.location.name,
              to: 'NOT AVAILABLE',
              window_start: DateTime.fromISO(launch.window_start).setLocale('pt').toLocaleString(DateTime.DATE_SHORT)
              // window_start: DateTime.fromISO(launch.window_start).setLocale('pt').toLocaleString(DateTime.DATE_SHORT)
            }
          }
        }
      }
    })
    return res.status(200).json({ launches: result })
  } catch (e) {
    return res.status(500).json({ msg: 'internal error' })
  }
})

export { launchRoutes }
