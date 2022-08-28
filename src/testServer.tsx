import "whatwg-fetch"

import { rest } from 'msw'
import { setupServer } from 'msw/node'

const server = setupServer(
    rest.get(process.env.REACT_APP_PARTNERS + '/partners', (req, res, ctx) => {
        ctx.status(200),
        ctx.json({ partners: { name: 'Bluebell Robles' } })
    })
)

beforeAll(() => server.listen())
afterAll(() => server.close())
afterEach(() => server.resetHandlers())

export { server, rest }

