import { Request, Response, Router } from 'express'
import { DateTime } from 'luxon'
import axios from 'axios'
import { LaunchInterface } from '../interfaces/launch.interface'

const MONTHS = 6
const launchController = Router()

launchController.get('/upcoming-launches', async (req: Request, res: Response) => {
  try {
    const url = 'https://lldev.thespacedevs.com/2.2.0/launch/upcoming/?include_suborbital=true&lsp__name=spacex'
    const response = await axios.get(url)
    const launches: LaunchInterface[] = response.data.results.map((launch: any) => {
      const dateLaunch = DateTime.fromISO(launch.window_start)
      const dateLimit = DateTime.now().plus({ months: MONTHS })
      if (dateLaunch < dateLimit && DateTime.now() < dateLaunch) {
        return {
          name: launch.mission ? launch.mission.name : 'NOT AVAILABLE',
          description: launch.mission ? launch.mission.description : 'NOT AVAILABLE',
          from: launch.pad.location.name,
          to: launch.mission ? launch.mission.orbit.name : 'NOT AVAILABLE',
          window_start: dateLaunch.setLocale('pt').toLocaleString(DateTime.DATE_SHORT)
        }
      }
      return undefined
    }).filter((x: any) => {
      return x !== undefined
    })
    console.log(launches)
    return res.status(200).json({ launches })
  } catch (e) {
    return res.status(500).json({ msg: `Internal Server Error - ${e}` })
  }
})

export { launchController }
