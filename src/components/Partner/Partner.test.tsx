import PartnerView from './PartnerView';
import { screen } from "@testing-library/react";

// The custom render function should let us:

// Create a new Redux store instance every time it's called, with an optional preloadedState value that can be used for an initial value
// Alternately pass in an already-created Redux store instance
// Pass through additional options to RTL's original render function
// Automatically wrap the component being tested with a <Provider store={store}>
// Return the store instance in case the test needs to dispatch more actions or check state
import { renderWithProviders } from "../../test-utils";

import { server, rest } from '../../testServer'

test("Testing the PartnerView Component", () => {

    let partner = {
        latitude: 42.6661417,
        partner_id: 12,
        name: 'Jamelia Waller',
        longitude: 23.293435,
        pic: '',
        distance: 100
    }
  
    renderWithProviders(<PartnerView partner={partner} key={1} />);

    expect(screen.getByText('Name: ' + partner.name)).toBeInTheDocument()
    expect(screen.getByText('ID: ' + partner.partner_id)).toBeInTheDocument()
    expect(screen.getByText('Distance: ' + partner.distance + 'km.')).toBeInTheDocument()

    const renderedPartner = screen.getAllByRole('partner')

    expect(renderedPartner.length).toEqual(1)
});


it('handles failure', async () => {
    server.use(
        rest.get(process.env.REACT_APP_PARTNERS + '/partners', (req, res, ctx) => {
            ctx.status(404)
        })
    ),
    rest.get('*', (req, res, ctx) => {
        console.error(`Please add request handler for ${req.url.toString()}`)
        return res(
            ctx.status(500),
            ctx.json({ error: 'Please add request handler' })
        )
    })
})